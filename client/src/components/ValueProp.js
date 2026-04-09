const valuePoints = [
  "Trusted founder support",
  "Relevant opportunities",
  "Practical scaling guidance",
  "Network-driven growth"
];

function ValueProp() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-emerald via-emerald-500 to-brand-blue p-8 text-white shadow-soft sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.28),_transparent_38%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-50">
                Value Proposition
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Built to turn regional ambition into measurable startup momentum
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-emerald-50">
                UPStartupHub is here to empower founders with the right connections, better
                visibility into opportunities, and support that feels practical and actionable.
              </p>
              <ul className="mt-8 space-y-4">
                {valuePoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium sm:text-base">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path
                          d="m5 13 4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-50 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trusted Access</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Founder-first support network</p>
              </div>
              <div className="rounded-[1.5rem] bg-blue-50 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-blue">Strategic Support</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Connections that help you move faster</p>
              </div>
              <div className="rounded-[1.5rem] bg-emerald-50 p-6 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-emerald">Growth Pipeline</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Better visibility into mentors, opportunities, and ways to leverage funds
                </p>
                <div className="mt-6 h-3 overflow-hidden rounded-full bg-emerald-100">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-emerald to-brand-blue" />
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-brand-blue/20 bg-brand-slate p-6">
              <p className="text-sm font-semibold text-slate-900">
                Founders get a clear next step instead of a fragmented search for help.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                From warm introductions to practical guidance and funding access support, the
                experience is designed to feel clear, useful, and founder-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
