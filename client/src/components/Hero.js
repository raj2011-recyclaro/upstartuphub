import Logo from "./Logo";


function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
      <div className="section-shell relative pt-0 pb-2">
        {/* Negative top margin pulls the nav and logo higher to offset transparent whitespace inside the logo file */}
        <nav className="flex items-center justify-between -mt-6 sm:-mt-10 py-2">
          <a href="#top" aria-label="UP Startup Hub" className="flex items-center">
            <img
              src="/logo-removebg-preview.png"
              alt="UP Startup Hub"
              className="h-32 sm:h-40 w-auto object-contain"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-brand-orangeDeep">
              Who Can Apply
            </a>
            <a href="#how-it-works" className="transition hover:text-brand-orangeDeep">
              How It Works
            </a>
            <a
              href="#lead-form"
              className="rounded-full bg-brand-orange px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orangeDeep"
            >
              Apply →
            </a>
          </div>
        </nav>
        <div className="grid items-center gap-12 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div className="fade-in-up">
            <span className="inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 text-sm font-semibold text-brand-accent shadow-[0_0_12px_rgba(2,132,199,0.12)]">
              Building the Next Generation of Startups from Uttar Pradesh
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Everything Your Startup Needs. In One Place.
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-500 sm:text-2xl">
              From Idea to Scale. We Build With You.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We help founders build, fund, and scale startups from Uttar Pradesh with capital,
              mentorship, structuring, and powerful industry connections.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onPrimaryClick}
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:bg-brand-orangeDeep"
              >
                Apply for Funding
              </button>
              <button
                type="button"
                onClick={onSecondaryClick}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-navy hover:bg-brand-lightGrey hover:shadow-sm"
              >
                Become a Mentor
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <p className="text-2xl font-bold text-brand-orangeDeep">Idea to Seed</p>
                <p>Support for early-stage startup journeys</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-orangeDeep">UP Connected</p>
                <p>For founders based in or connected to Uttar Pradesh</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-orangeDeep">High Potential</p>
                <p>D2C, manufacturing, tech, and service-led growth stories</p>
              </div>
            </div>
          </div>
          {/* ── Premium Platform Graphic ── */}
          <div className="fade-in-up relative flex w-full max-w-[500px] flex-col justify-center lg:justify-self-end">
            <style>{`
              .slide-up-glow { animation: slideUpGlow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(15px); }
              @keyframes slideUpGlow { to { opacity: 1; transform: translateY(0); } }
              .line-draw { animation: lineDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform-origin: left; transform: scaleX(0); }
              @keyframes lineDraw { to { transform: scaleX(1); } }
            `}</style>

            {/* Main execution framework panel */}
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/60 p-1 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-white px-7 py-9 shadow-sm">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(11,31,58,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

                {/* Header */}
                <div className="relative z-10 mb-8 flex items-center justify-between border-b border-slate-100 pb-4 slide-up-glow">
                  <div className="font-sans text-[10px] font-bold tracking-[0.2em] text-slate-400">PLATFORM_EXECUTION</div>
                  <div className="flex gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(2,132,199,0.4)]" />
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  </div>
                </div>

                {/* Core stages */}
                <div className="relative z-10 flex flex-col gap-6">
                  {[
                    { step: "01", title: "Idea Validation", width: "35%" },
                    { step: "02", title: "Structuring & Setup", width: "55%" },
                    { step: "03", title: "Capital Infusion", width: "80%" },
                    { step: "04", title: "Growth & Scale", width: "100%" }
                  ].map((item, i) => (
                    <div key={item.step} className="group relative slide-up-glow" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                      <div className="mb-2 flex items-baseline justify-between">
                        <div className="flex items-baseline gap-3">
                          <span className="font-sans text-xs font-semibold text-brand-accent">{item.step}</span>
                          <span className="text-sm font-semibold tracking-wide text-brand-navy">{item.title}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-brand-accent opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
                          Active
                        </span>
                      </div>
                      {/* Bar track */}
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-brand-lightGrey">
                        <div
                          className="line-draw h-full rounded-full bg-gradient-to-r from-brand-accent via-brand-orange to-brand-gold"
                          style={{ width: item.width, animationDelay: `${0.4 + i * 0.15}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Statement box */}
                <div className="relative z-10 mt-10 rounded-xl border border-slate-100 bg-brand-lightGrey/80 p-4 shadow-sm slide-up-glow" style={{ animationDelay: "0.8s" }}>
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-[13px] font-medium leading-relaxed text-slate-600">
                      We operate as your <span className="font-bold text-brand-navy">co-builders</span>, driving execution from day one through to global scale.
                    </p>
                  </div>
                </div>

                {/* Ambient glow in the panel */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-brand-accent/5 blur-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
