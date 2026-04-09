const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200
  })
);
app.use(express.json({ limit: "20kb" }));

const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions from this IP. Please try again later."
  }
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalizeLead = (body = {}) => ({
  name: String(body.name || "").trim(),
  email: String(body.email || "").trim(),
  phone: String(body.phone || "").trim(),
  startup: String(body.startup || "").trim(),
  stage: String(body.stage || "").trim(),
  message: String(body.message || "").trim()
});

const validateLead = (lead) => {
  if (!lead.name || !lead.email) {
    return "Name and email are required.";
  }

  if (!emailPattern.test(lead.email)) {
    return "A valid email address is required.";
  }

  if (lead.name.length > 100 || lead.email.length > 120 || lead.phone.length > 30) {
    return "Some fields exceed the allowed length.";
  }

  if (lead.startup.length > 120 || lead.stage.length > 50 || lead.message.length > 2000) {
    return "Please shorten your submission and try again.";
  }

  return "";
};

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

app.get("/api/health", (_request, response) => {
  response.json({ success: true, message: "Server is running." });
});

app.post("/api/lead", leadLimiter, async (request, response) => {
  const lead = normalizeLead(request.body);
  const validationMessage = validateLead(lead);

  if (validationMessage) {
    return response.status(400).json({ success: false, message: validationMessage });
  }

  try {
    const transporter = createTransporter();
    const recipient = process.env.LEAD_RECEIVER_EMAIL || process.env.EMAIL_USER;

    await transporter.sendMail({
      from: `"UPStartupHub Leads" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: lead.email,
      subject: "New Lead from UPStartupHub",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="color: #1E3A8A;">New Lead from UPStartupHub</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px;">
            <tr><td style="font-weight: bold; border: 1px solid #e2e8f0;">Full Name</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(lead.name)}</td></tr>
            <tr><td style="font-weight: bold; border: 1px solid #e2e8f0;">Email</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(lead.email)}</td></tr>
            <tr><td style="font-weight: bold; border: 1px solid #e2e8f0;">Phone</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(lead.phone || "Not provided")}</td></tr>
            <tr><td style="font-weight: bold; border: 1px solid #e2e8f0;">Startup Name</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(lead.startup || "Not provided")}</td></tr>
            <tr><td style="font-weight: bold; border: 1px solid #e2e8f0;">Stage</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(lead.stage || "Not provided")}</td></tr>
            <tr><td style="font-weight: bold; border: 1px solid #e2e8f0;">Message</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(lead.message || "No message")}</td></tr>
          </table>
        </div>
      `,
      text: [
        "New Lead from UPStartupHub",
        `Full Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone || "Not provided"}`,
        `Startup Name: ${lead.startup || "Not provided"}`,
        `Stage: ${lead.stage || "Not provided"}`,
        `Message: ${lead.message || "No message"}`
      ].join("\n")
    });

    return response.status(200).json({
      success: true,
      message: "Lead submitted successfully."
    });
  } catch (error) {
    console.error("Error submitting lead:", error);
    return response.status(500).json({
      success: false,
      message: "Unable to submit lead at the moment. Please try again later."
    });
  }
});

app.use((error, _request, response, _next) => {
  console.error("Unhandled server error:", error);
  response.status(500).json({
    success: false,
    message: "An unexpected server error occurred."
  });
});

app.listen(port, () => {
  console.log(`UPStartupHub server listening on port ${port}`);
});
