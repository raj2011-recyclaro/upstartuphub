const features = [
  {
    title: "Connect with Mentors",
    description:
      "Get guidance from experienced operators, domain experts, and ecosystem leaders who understand startup execution.",
    icon: (
      <path
        d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6Zm0 0c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Access Funding",
    description:
      "Explore investor connections, funding opportunities, and support pathways that match your stage and goals.",
    icon: (
      <path
        d="M4 7.5C4 5.567 7.582 4 12 4s8 1.567 8 3.5S16.418 11 12 11 4 9.433 4 7.5Zm0 4C4 13.433 7.582 15 12 15s8-1.567 8-3.5M4 15.5C4 17.433 7.582 19 12 19s8-1.567 8-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: "Government Programs",
    description:
      "Discover useful programs, ecosystem support, and startup-focused opportunities that can help you move forward.",
    icon: (
      <path
        d="M3 10 12 4l9 6v8a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: "Scale Faster",
    description:
      "Move from idea to execution with ecosystem visibility, trusted connections, and coordinated growth support.",
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
    <section id="features" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-emerald">
            Why Founders Join
          </p>
          <h2 className="section-title mt-4">A startup platform built for meaningful progress</h2>
          <p className="section-copy mx-auto">
            UPStartupHub is designed to make it easier for founders to find support, build the
            right connections, and take the next step with confidence.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="fade-in-up rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/20"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
