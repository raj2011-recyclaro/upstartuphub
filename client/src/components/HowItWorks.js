const steps = [
  {
    step: "1",
    title: "Apply online",
    description: "Simple 10-minute application highlighting your core metrics and vision.",
    color: "bg-primary"
  },
  {
    step: "2",
    title: "Review",
    description: "Quick turnaround by our investment committee within 7 working days.",
    color: "bg-primary"
  },
  {
    step: "3",
    title: "Mentorship",
    description: "Refining the model with industry veterans before final deployment.",
    color: "bg-primary"
  },
  {
    step: "4",
    title: "Funding",
    description: "Securing institutional capital to fuel growth milestones.",
    color: "bg-primary"
  },
  {
    step: "5",
    title: "Scaling",
    description: "Ongoing support via industry network and hiring assistance.",
    color: "bg-secondary"
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-[1.75rem] font-bold text-primary mb-20 text-center tracking-tight reveal-on-scroll">Simple. Fast. Founder-Friendly.</h2>
        
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-primary/10 -z-0" />
          
          {steps.map((item, index) => (
            <div key={item.step} className="flex-1 relative z-10 group reveal-on-scroll" style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-all shadow-md`}>
                {item.step}
              </div>
              <h4 className="font-bold text-primary mb-2 text-lg">{item.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

