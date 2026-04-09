function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <header className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%),linear-gradient(135deg,_#f9fafb_0%,_#eef4ff_45%,_#e9fff7_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      <div className="section-shell relative py-6 sm:py-8">
        <nav className="flex items-center justify-between">
          <a href="#top" className="text-xl font-extrabold tracking-tight text-brand-blue">
            UPStartupHub
            <span className="text-brand-emerald">.com</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-brand-blue">
              Programs
            </a>
            <a href="#how-it-works" className="transition hover:text-brand-blue">
              How It Works
            </a>
            <a href="#lead-form" className="transition hover:text-brand-blue">
              Get Started
            </a>
          </div>
        </nav>
        <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="fade-in-up">
            <span className="inline-flex rounded-full border border-brand-blue/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm">
              Built to empower founders across Uttar Pradesh
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Empowering Startups Across Uttar Pradesh
            </h1>
            <p className="mt-5 text-xl font-semibold text-brand-emerald sm:text-2xl">
              Connect. Fund. Scale.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              UPStartupHub helps founders connect with the right people, discover relevant
              opportunities, and build momentum with practical support at every stage.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onPrimaryClick}
                className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-brand-navy"
              >
                Join as Startup
              </button>
              <button
                type="button"
                onClick={onSecondaryClick}
                className="rounded-full border border-brand-blue/15 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-blue-50"
              >
                Explore Opportunities
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <p className="text-2xl font-bold text-brand-blue">500+</p>
                <p>Startup conversations enabled</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-blue">50+</p>
                <p>Programs and ecosystem touchpoints</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-blue">24/7</p>
                <p>Digital access to opportunities</p>
              </div>
            </div>
          </div>
          <div className="fade-in-up relative lg:justify-self-end" style={{ animationDelay: "120ms" }}>
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-brand-emerald/20 blur-3xl" />
            <div className="absolute -bottom-10 right-6 h-40 w-40 rounded-full bg-brand-amber/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-6 shadow-soft sm:p-8">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-blue via-brand-navy to-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-100">Startup Readiness Dashboard</p>
                    <p className="mt-2 text-3xl font-bold">82%</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-100">This Quarter</p>
                    <p className="mt-2 text-lg font-semibold">Mentor Matches</p>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-blue-100">Funding Access</p>
                    <p className="mt-2 text-xl font-semibold">Opportunities to leverage funds</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-blue-100">Program Visibility</p>
                    <p className="mt-2 text-xl font-semibold">Relevant support and connections</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Mentor Network", value: "Active" },
                  { label: "Funding Window", value: "Open" },
                  { label: "Growth Track", value: "Curated" }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
