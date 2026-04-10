const valuePoints = [
  "Capital support aligned to your stage",
  "Mentorship from people who understand execution",
  "Structuring support to build on strong foundations",
  "Industry connections that help you scale"
];

function ValueProp() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 p-8 text-slate-900 shadow-sm sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.8),_transparent_60%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-orangeDeep">
                Why UP Startup Hub
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                We are not just advisors. We work alongside founders to build real, scalable businesses.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                UP Startup Hub is designed to support founders at every stage with the mix of
                capital, guidance, and execution support needed to create lasting businesses from
                Uttar Pradesh.
              </p>
              <ul className="mt-8 space-y-4">
                {valuePoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orangeDeep">
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
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Capital</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Funding support for credible growth stories
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-orange-50 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-orangeDeep">Mentorship</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Founder-focused advice that turns into action
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-amber-50 p-6 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-orangeDeep">
                  Industry Connections
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Powerful networks across sectors that help founders build, sell, and scale faster
                </p>
                <div className="mt-6 h-3 overflow-hidden rounded-full bg-orange-100">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDeep" />
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-brand-orange/20 bg-brand-cream p-6">
              <p className="text-sm font-semibold text-slate-900">From UP to Global.</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Instead of fragmented advice, founders get one platform that combines funding,
                mentorship, structuring, and strategic support in a founder-friendly way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
