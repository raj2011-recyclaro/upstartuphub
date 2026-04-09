import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ValueProp from "./components/ValueProp";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

function App() {
  const scrollToLeadForm = () => {
    const formSection = document.getElementById("lead-form");

    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-brand-slate text-slate-900">
      <Hero onPrimaryClick={scrollToLeadForm} onSecondaryClick={scrollToLeadForm} />
      <main>
        <Features />
        <HowItWorks />
        <ValueProp />
        <LeadForm />
        <section className="bg-brand-blue py-16">
          <div className="section-shell">
            <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-white shadow-soft sm:px-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                  Build With Confidence
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to scale your startup in Uttar Pradesh?
                </h2>
                <p className="mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
                  We empower ambitious founders with meaningful connections, practical guidance,
                  and better access to opportunities that support long-term growth.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToLeadForm}
                  className="rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Apply Now
                </button>
                <a
                  href="#footer"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
