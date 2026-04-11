import Navbar from "./Navbar";

function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <Navbar />
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-br from-orange-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="flex-grow flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 reveal-on-scroll active">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full text-[11px] font-bold tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Uttar Pradesh Startup Ecosystem
            </div>
            <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter text-primary mb-6">
              Everything Your Startup Needs – In One Place
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 max-w-xl mb-10">
              We help founders build, fund, and scale startups from Uttar Pradesh with capital, mentorship, structuring, and powerful industry connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a 
                href="#lead-form"
                className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0"
              >
                Apply for Funding
              </a>
              <div className="flex flex-col border-l-2 border-secondary/30 pl-6 py-1">
                <span className="text-sm font-bold text-primary">₹500Cr+</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ecosystem Value</span>
              </div>
            </div>
          </div>

          {/* Right Column: Integrated Ecosystem Diagram */}
          <div className="lg:col-span-6 relative flex flex-col items-center pt-12 lg:pt-16">
            <div className="w-full text-center mb-4 lg:mb-8 reveal-on-scroll active">
              <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">High-Growth Sectors</h3>
              <p className="text-xs text-slate-400 font-medium">Strategic focus for the UP Ecosystem</p>
            </div>
            
            <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center reveal-on-scroll active">
              {/* SVG Connections with Orange Gradient */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#FF6600" stopOpacity="0.3" />
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

              {/* Center Node: Brand Orange Gradient */}
              <div className="absolute z-20 flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-orange-700 text-white w-28 h-28 md:w-36 md:h-36 rounded-full shadow-2xl border-4 border-white animate-pulse-glow">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-70 text-orange-100">The Hub</span>
                <span className="text-xs md:text-sm font-bold text-center px-4 leading-tight">UPStartupHub</span>
              </div>

              {/* Surrounding Nodes: Orange Accents */}
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
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-50 border border-orange-100 rounded-xl shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-xl md:text-2xl">{node.icon}</span>
                    </div>
                    <span className="mt-2 text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">{node.name}</span>
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
