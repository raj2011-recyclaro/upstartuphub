import Logo from "./Logo";


function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
      <div className="section-shell relative pt-2 sm:pt-4 pb-2">
        {/* Negative top margin pulls the nav and logo higher to offset transparent whitespace inside the logo file */}
        <nav className="flex items-center justify-between py-6">
          <a href="#top" aria-label="UP Startup Hub" className="flex items-center">
            <Logo 
              className="h-10 sm:h-12 w-auto" 
            />
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-brand-blueDeep">
              Who Can Apply
            </a>
            <a href="#how-it-works" className="transition hover:text-brand-blueDeep">
              How It Works
            </a>
            <a
              href="#lead-form"
              className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blueDeep"
            >
              Apply →
            </a>
          </div>
        </nav>
        <div className="grid items-center gap-12 pt-0 pb-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-0 lg:pb-14">
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
                className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-blueDeep"
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
                <p className="text-2xl font-bold text-brand-blueDeep">Idea to Seed</p>
                <p>Support for early-stage startup journeys</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-blueDeep">UP Connected</p>
                <p>For founders based in or connected to Uttar Pradesh</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-blueDeep">High Potential</p>
                <p>D2C, manufacturing, tech, and service-led growth stories</p>
              </div>
            </div>
          </div>
          {/* ── Premium Platform Graphic ── */}
          <div className="fade-in-up relative flex w-full max-w-[500px] flex-col justify-center lg:justify-self-end">
            <style>{`
              @keyframes float-subtle {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                25% { transform: translateY(-3px) translateX(2px); }
                50% { transform: translateY(2px) translateX(-1px); }
                75% { transform: translateY(-1px) translateX(-3px); }
              }
              @keyframes pulse-subtle {
                0%, 100% { opacity: 0.8; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.02); }
              }
              .animate-float { animation: float-subtle 8s ease-in-out infinite; }
              .animate-pulse-slow { animation: pulse-subtle 4s ease-in-out infinite; }
            `}</style>

            {/* Main Showcase Panel */}
            <div className="relative flex aspect-square w-full items-center justify-center p-2">
              {/* Background Orbits */}
              <div className="absolute h-[80%] w-[80%] rounded-full border border-slate-100 bg-brand-lightGrey/20" />
              <div className="absolute h-[55%] w-[55%] rounded-full border border-slate-100/50" />
              
              {/* Central Core */}
              <div className="relative z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-brand-navy shadow-2xl shadow-brand-navy/30 animate-pulse-slow">
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-300">CORE</span>
                <span className="mt-1 font-bold tracking-widest text-white text-xs">UP HUB</span>
              </div>

              {/* Floating Sector Tags */}
              <div className="absolute inset-0 z-10">
                {[
                  { name: "DroneTech", top: "15%", left: "20%", delay: "0s" },
                  { name: "AgriTech", top: "25%", right: "10%", delay: "1.2s" },
                  { name: "FinTech", bottom: "25%", left: "5%", delay: "2.5s" },
                  { name: "DeepTech", bottom: "18%", right: "15%", delay: "0.8s" },
                  { name: "D2C Brands", top: "45%", left: "8%", delay: "3s" },
                  { name: "AI & SaaS", bottom: "40%", right: "8%", delay: "1.8s" }
                ].map((tag, i) => (
                  <div 
                    key={tag.name} 
                    className="absolute transition-all duration-700 ease-out animate-float"
                    style={{ 
                      top: tag.top, 
                      left: tag.left, 
                      right: tag.right, 
                      bottom: tag.bottom,
                      animationDelay: tag.delay
                    }}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 text-[11px] font-bold text-brand-navy shadow-lg shadow-black/5 hover:scale-110 hover:border-brand-blue cursor-pointer transition transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ambient Glows around the cloud */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-brand-blue/5 blur-[80px]" />
              <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-brand-cyan/5 blur-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

