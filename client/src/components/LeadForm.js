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

  return (
    <>
      <section id="lead-form" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blob-blue opacity-40 rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-8 relative z-10 reveal-on-scroll">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Header */}
            <div className="bg-primary p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16" />
              <h2 className="text-[2rem] font-bold text-white mb-4 tracking-tight">Ready to Build Your Startup?</h2>
              <p className="text-blue-200 max-w-md mx-auto">Fill in your details below and our team will get in touch with you shortly.</p>
            </div>
            
            {/* Form */}
            <form className="p-12 space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 rounded-none h-12 px-2 text-on-surface transition-all" 
                    placeholder="Enter your name" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">Email Address</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 rounded-none h-12 px-2 text-on-surface transition-all" 
                    placeholder="name@company.com" 
                    type="email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">Startup Name</label>
                  <input 
                    name="startup"
                    value={formData.startup}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 rounded-none h-12 px-2 text-on-surface transition-all" 
                    placeholder="Your venture name" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">Stage</label>
                  <select 
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 rounded-none h-12 px-2 text-on-surface transition-all"
                  >
                    <option value="Idea">Idea Stage</option>
                    <option value="Early">Early Traction</option>
                    <option value="Growth">Growth Stage</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 rounded-none px-2 py-2 text-on-surface transition-all" 
                  placeholder="Tell us about your mission..." 
                  rows="4"
                />
              </div>

              {status.message && (
                <div className={`text-sm font-bold ${status.type === "success" ? "text-secondary" : "text-error"}`}>
                  {status.message}
                </div>
              )}

              <div className="pt-4 flex flex-col items-center gap-6">
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white px-12 py-4 rounded-md font-bold text-lg w-full md:w-auto shadow-lg hover:bg-blue-900 hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-50"
                >
                  {loading ? "Applying..." : "Apply Now"}
                </button>
                <div className="flex gap-8">
                  <button className="text-sm font-bold text-secondary border-b border-secondary/20 hover:border-secondary transition-all" type="button">Become a Mentor</button>
                  <button className="text-sm font-bold text-secondary border-b border-secondary/20 hover:border-secondary transition-all" type="button">Partner With Us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-secondary opacity-5 rounded-full -mr-32 -mb-32" />
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">From Idea to Scale – We Build With You.</h2>
          <button 
            onClick={() => {
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-primary px-10 py-4 rounded-md font-black text-lg hover:bg-slate-100 hover:scale-105 transition-all shadow-xl active:scale-100"
          >
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}

export default LeadForm;

