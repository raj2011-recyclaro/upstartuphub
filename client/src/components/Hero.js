import Navbar from "./Navbar";

function Hero() {
  return (
    <header className="relative min-h-[90vh] flex flex-col overflow-hidden bg-white">
      <Navbar />
      
      {/* Abstract Background Accents */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blob-blue rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-blob-emerald rounded-full pointer-events-none" />
      
      <div className="flex-grow flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Column */}
          <div className="lg:col-span-6 reveal-on-scroll active">
            <span className="inline-block px-4 py-1.5 bg-secondary text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              Uttar Pradesh Startup Ecosystem
            </span>
            <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter text-primary mb-6">
              Everything Your Startup Needs – In One Place
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl mb-10">
              We help founders build, fund, and scale startups from Uttar Pradesh with capital, mentorship, structuring, and powerful industry connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a 
                href="#lead-form"
                className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Apply for Funding
              </a>
              <p className="text-sm font-semibold italic text-on-surface-variant border-l-2 border-primary/20 pl-4">
                &ldquo;From Idea to Scale &ndash; <br/>We Build With You.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 relative flex flex-col items-center pt-12 lg:pt-16">
            <div className="w-full text-center mb-4 lg:mb-8 reveal-on-scroll active">
              <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">High-Growth Sectors</h3>
              <p className="text-xs text-on-surface-variant font-medium">Strategic focus for the UP Ecosystem</p>
            </div>
            
            {/* Integrated Ecosystem Diagram */}
            <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center reveal-on-scroll active">
              {/* SVG Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <g className="line-group">
                  <line className="line-drawing stroke-[url(#line-grad)] animate-flow" strokeWidth="2" x1="400" x2="150" y1="200" y2="100" />
                  <line className="line-drawing stroke-[url(#line-grad)] animate-flow" strokeWidth="2" x1="400" x2="400" y1="200" y2="50" />
                  <line className="line-drawing stroke-[url(#line-grad)] animate-flow" strokeWidth="2" x1="400" x2="650" y1="200" y2="100" />
                  <line className="line-drawing stroke-[url(#line-grad)] animate-flow" strokeWidth="2" x1="400" x2="150" y1="200" y2="300" />
                  <line className="line-drawing stroke-[url(#line-grad)] animate-flow" strokeWidth="2" x1="400" x2="400" y1="200" y2="350" />
                  <line className="line-drawing stroke-[url(#line-grad)] animate-flow" strokeWidth="2" x1="400" x2="650" y1="200" y2="300" />
                </g>
              </svg>

              {/* Center Node */}
              <div className="absolute z-20 flex flex-col items-center justify-center bg-gradient-to-br from-primary to-blue-900 text-white w-28 h-28 md:w-36 md:h-36 rounded-full shadow-2xl border-4 border-white animate-pulse-glow">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-70 text-blue-200">The Hub</span>
                <span className="text-xs md:text-sm font-bold text-center px-4 leading-tight">UPStartupHub</span>
              </div>

              {/* Surrounding Nodes */}
              {[
                { name: "FinTech", icon: "account_balance", pos: "top-[15%] left-[10%] md:top-[20%] md:left-[15%]" },
                { name: "AgriTech", icon: "agriculture", pos: "top-[2%] left-[50%] -translate-x-1/2 md:top-[5%]" },
                { name: "D2C Brands", icon: "shopping_bag", pos: "top-[15%] right-[10%] md:top-[20%] md:right-[15%]" },
                { name: "Manufacturing", icon: "precision_manufacturing", pos: "bottom-[15%] left-[10%] md:bottom-[20%] md:left-[15%]" },
                { name: "Drone Tech", icon: "flight_takeoff", pos: "bottom-[2%] left-[50%] -translate-x-1/2 md:bottom-[5%]" },
                { name: "SaaS / Tech", icon: "cloud_queue", pos: "bottom-[15%] right-[10%] md:bottom-[20%] md:right-[15%]" }
              ].map((node) => (
                <div key={node.name} className={`absolute ${node.pos} transition-all duration-300 hover:scale-110 group cursor-default`}>
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 border border-emerald-100 rounded-xl shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-xl md:text-2xl">{node.icon}</span>
                    </div>
                    <span className="mt-2 text-[10px] md:text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">{node.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
