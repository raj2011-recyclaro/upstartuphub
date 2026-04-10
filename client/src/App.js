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
    <div id="top" className="min-h-screen bg-brand-slate text-brand-ink">
      <Hero onPrimaryClick={scrollToLeadForm} onSecondaryClick={scrollToLeadForm} />
      <main>
        <Features />
        <HowItWorks />
        <ValueProp />
        <LeadForm />
        <section className="bg-[linear-gradient(135deg,_#ea580c_0%,_#c2410c_100%)] py-16">
          <div className="section-shell">
            <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/10 px-6 py-10 text-white shadow-soft sm:px-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-100">
                  Ready to Build Your Startup?
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Join UP Startup Hub and get access to everything you need to turn your idea into a successful business.
                </h2>
                <p className="mt-4 max-w-2xl text-base text-orange-100 sm:text-lg">
                  From idea to scale, we build with you through capital, mentorship, structuring,
                  and strategic industry connections.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToLeadForm}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-orangeDeep transition hover:bg-orange-50"
                >
                  Apply Now
                </button>
                <a
                  href="#lead-form"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-orangeDeep"
                >
                  Become a Mentor
                </a>
                <a
                  href="#footer"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-orangeDeep"
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
