import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 text-primary rounded-full text-[11px] font-bold tracking-widest uppercase mb-8">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            Empowering the Founders of <br /> <span className="text-secondary text-orange-600">Uttar Pradesh</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            UPStartupHub was born from a simple observation: Uttar Pradesh has the talent, the ambition, and the scale to become the startup capital of India. We are here to bridge the gap between that potential and global success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal-on-scroll active">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To create a world-class startup ecosystem in Uttar Pradesh by providing early-stage founders with the capital, mentorship, and operational support they need to build resilient, high-growth companies. We aim to formalize the innovation economy of the state.
            </p>
          </div>
          <div className="reveal-on-scroll active">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To see Uttar Pradesh recognized globally as a hub for deep-tech, agri-tech, and consumer-focused innovation. We envision a future where every aspiring entrepreneur in UP has a direct path to institutional funding and global mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12 tracking-tight">Our Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "Industry Expert & Mentor" },
              { role: "Strategic Advisor & Mentor" },
              { role: "Tech Innovation & Mentor" }
            ].map((mentor) => (
              <div key={mentor.role} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <span className="material-symbols-outlined text-4xl">person</span>
                </div>
                <p className="text-slate-500 font-medium text-sm">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UP? */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Why Uttar Pradesh?</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  With a population of over 240 million, Uttar Pradesh is larger than several major world economies. It offers a massive internal market, a young workforce, and rapidly improving infrastructure.
                </p>
                <p>
                  From the industrial hubs of Noida to the agricultural heartlands of Lucknow and Varanasi, the state is ripe for disruption across logistics, fintech, and agri-tech sectors.
                </p>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Boardroom" 
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
