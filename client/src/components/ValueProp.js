const criteria = [
  {
    icon: "rocket_launch",
    title: "Early-stage startups",
    description: "Ventures at MVP or early traction stage looking for the first institutional cheque and strategic guidance."
  },
  {
    icon: "location_on",
    title: "Founders based in UP",
    description: "Companies registered or operating primary operations within Uttar Pradesh to boost regional economic growth."
  },
  {
    icon: "trending_up",
    title: "High-potential businesses",
    description: "Scalable models in Tech, D2C, Agritech, or Fintech that leverage the regional strengths of UP."
  }
];

function ValueProp() {
  return (
    <section id="criteria" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-16 reveal-on-scroll">
          <h2 className="text-[1.75rem] font-bold text-primary tracking-tight">Built for Ambitious Founders</h2>
          <p className="text-on-surface-variant mt-2 text-lg">Selection criteria for our core acceleration and funding programs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-100">
          {criteria.map((item, index) => (
            <div 
              key={item.title} 
              className={`py-12 group reveal-on-scroll ${
                index === 0 ? "pr-12 border-b md:border-b-0 md:border-r border-slate-100" : 
                index === 1 ? "md:px-12 border-b md:border-b-0 md:border-r border-slate-100" : 
                "md:pl-12"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span 
                className="material-symbols-outlined text-secondary mb-6 group-hover:scale-110 transition-transform block" 
                style={{ fontSize: "40px" }}
              >
                {item.icon}
              </span>
              <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
