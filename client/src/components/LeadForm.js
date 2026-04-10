import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  startup: "",
  stage: "Idea",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const apiBaseUrl = (process.env.REACT_APP_API_BASE_URL || "").replace(/\/$/, "");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      return "Full Name and Email are required.";
    }

    if (!emailPattern.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationMessage = validateForm();

    if (validationMessage) {
      setStatus({ type: "error", message: validationMessage });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${apiBaseUrl}/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          startup: formData.startup.trim(),
          stage: formData.stage,
          message: formData.message.trim()
        })
      });

      let result = null;

      try {
        result = await response.json();
      } catch (_error) {
        result = null;
      }

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "We could not submit your request right now.");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your details have been submitted successfully."
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "A network error occurred while submitting the form. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/5 shadow-sm";

  return (
    <section id="lead-form" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Get Started
          </p>
          <h2 className="section-title mt-4 text-brand-navy">Ready to Build Your Startup?</h2>
          <p className="section-copy mx-auto">
            Join UP Startup Hub and get access to everything you need to turn your idea into a
            successful business.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-l-4 border-brand-orange bg-brand-lightGrey px-8 py-10 sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Founder Intake
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy">
                Apply now and let us build with you
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Tell us about your startup and we will reach out with the right next step around
                funding, mentorship, or strategic support.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  "Initial review and founder discussion",
                  "Mentorship and evaluation support",
                  "Funding and onboarding for selected startups"
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path
                          d="m5 13 4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-slate-600 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel px-8 py-10 sm:px-10">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="sm:col-span-2">
                    <span className="text-sm font-medium text-slate-700">Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="Enter your full name"
                      required
                    />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="text-sm font-medium text-slate-700">Email *</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="you@startup.com"
                      required
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium text-slate-700">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="+91 98765 43210"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium text-slate-700">Startup Name</span>
                    <input
                      type="text"
                      name="startup"
                      value={formData.startup}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="Your startup name"
                    />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="text-sm font-medium text-slate-700">Stage</span>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleChange}
                      className={inputClassName}
                    >
                      <option value="Idea">Idea</option>
                      <option value="Early">Early</option>
                      <option value="Growth">Growth</option>
                    </select>
                  </label>
                  <label className="sm:col-span-2">
                    <span className="text-sm font-medium text-slate-700">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClassName} min-h-[140px] resize-y`}
                      placeholder="Tell us what support you are looking for"
                    />
                  </label>
                </div>
                {status.message ? (
                  <div
                    className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orangeDeep disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {loading ? "Submitting..." : "Submit Details"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
