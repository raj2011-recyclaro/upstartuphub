import { useEffect } from "react";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import ValueProp from "./ValueProp";
import LeadForm from "./LeadForm";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

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
    <>
      <Hero />
      <main>
        <Features />
        <ValueProp />
        <HowItWorks />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;
