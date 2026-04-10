const steps = [
  {
    step: "01",
    title: "Apply online",
    description: "Share your startup details, current stage, and the support you are looking for."
  },
  {
    step: "02",
    title: "Initial review and discussion",
    description: "Our team reviews your profile and connects with you for a focused founder conversation."
  },
  {
    step: "03",
    title: "Mentorship and evaluation",
    description: "We assess readiness, refine the opportunity, and align mentors or strategic inputs."
  },
  {
    step: "04",
    title: "Funding and onboarding",
    description: "Selected startups move into the platform with funding support and structured onboarding."
  },
  {
    step: "05",
    title: "Continuous support and scaling",
    description: "Founders keep getting help with execution, partnerships, and growth as they scale."
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            How It Works
          </p>
          <h2 className="section-title mt-4 text-brand-navy">Simple. Fast. Founder-Friendly.</h2>
          <p className="section-copy mx-auto">
            The process is designed to help serious founders move quickly from application to
            active support without unnecessary friction.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="fade-in-up group relative flex flex-col rounded-2xl border border-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-brand-lightGrey/50 hover:shadow-sm"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="mb-6 flex items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-navy/10 bg-white text-sm font-bold text-brand-navy transition duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white shadow-sm">
                  {item.step}
                </span>
                {index !== steps.length - 1 && (
                  <div className="ml-4 hidden h-px w-full bg-slate-200 xl:block" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
