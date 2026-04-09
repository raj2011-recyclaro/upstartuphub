const steps = [
  {
    step: "01",
    title: "Register your startup",
    description: "Share your startup profile, current stage, and growth goals in a few simple steps."
  },
  {
    step: "02",
    title: "Get matched with mentors and investors",
    description: "Receive curated introductions based on your traction, sector, and support requirements."
  },
  {
    step: "03",
    title: "Access funding and programs",
    description: "Move forward with ecosystem support, funding visibility, and verified public opportunities."
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
            How It Works
          </p>
          <h2 className="section-title mt-4">A simple path from registration to growth support</h2>
          <p className="section-copy mx-auto">
            The platform is structured to help founders move quickly from discovery into action
            without unnecessary complexity.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="fade-in-up relative rounded-[1.75rem] border border-slate-200 bg-brand-slate p-8 shadow-soft"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
