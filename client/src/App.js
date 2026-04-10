import { useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ValueProp from "./components/ValueProp";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Hero />
      <main>
        <Features />
        <ValueProp />
        <HowItWorks />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
