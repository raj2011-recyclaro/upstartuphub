function Features() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-blob-blue opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        <div className="md:col-span-7 reveal-on-scroll">
          <h2 className="text-[1.75rem] font-bold text-primary mb-8 tracking-tight">
            Building the Next Generation of Startups from Uttar Pradesh
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
            <p>
              UP Startup Hub is a full-stack startup platform designed to solve the specific challenges of building in Northern India. We are not just advisors—we work alongside founders to build real, scalable businesses.
            </p>
            <p>
              By leveraging deep regional insights and global capital connections, we provide the architectural foundation for startups that want to lead the market, not just participate in it.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-5 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col justify-center">
            <img 
              alt="Founders working" 
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGg4AZXj-pW9iPgnsQ-bCHZHQkwih8QGKCFDYAgDdPxA22EtBtPgleevhnc7dTXUEY1P-sY4Dm7IaV86tgNz8KWLqBs0l0F5rQeslMZsiO4BLf7Sjl8WjVzVxecCHI_HtfeoL5Jyy2Dacp_5uxX3AhXBCPmTlVzabOPmXsHYD7OiHbmAn5CSmLeec6H_Joo9oIwFQtdS0M-CNh_75x8GkQ-CN-RAMs_ydCVDHV1Z3rEWMqTexnSwvI31hslB1z40hOGyMs3WJzrOTv"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

