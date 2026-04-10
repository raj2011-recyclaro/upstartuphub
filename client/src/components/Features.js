const features = [
  {
    title: "Early-stage startups",
    description:
      "Built for founders moving from idea validation to seed-stage execution with real momentum.",
    icon: (
      <path
        d="M12 3 4 7v5c0 5 3.4 9.35 8 10 4.6-.65 8-5 8-10V7l-8-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: "UP-based or UP-connected founders",
    description:
      "Designed for entrepreneurs based in Uttar Pradesh or closely connected to the state's startup ecosystem.",
    icon: (
      <path
        d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: "High-potential sectors",
    description:
      "Focused on D2C, Manufacturing, Tech, and Services businesses with strong growth potential.",
    icon: (
      <path
        d="M4 18h16M7 18V9m5 9V6m5 12v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: "Execution-first support",
    description:
      "We do not just advise. We work alongside founders to build real, scalable businesses.",
    icon: (
      <path
        d="M5 16 10 11l3 3 6-7M17 7h2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  }
];

function Features() {
  return (
    <section id="features" className="bg-brand-lightGrey py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Who Can Apply
          </p>
          <h2 className="section-title mt-4 text-brand-navy">Built for Ambitious Founders</h2>
          <p className="section-copy mx-auto">
            UP Startup Hub is a full-stack startup platform designed to support founders at every
            stage of their journey. From idea validation to scaling businesses, we provide the
            right mix of capital, mentorship, and execution support.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group fade-in-up rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-md"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-blue/10 group-hover:text-brand-blue">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-navy">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

