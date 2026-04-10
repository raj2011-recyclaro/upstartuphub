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

      </main>
      <Footer />
    </div>
  );
}

export default App;
