function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-12 border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="md:col-span-4 translate-y-2">
          <div className="text-xl font-black text-primary mb-4 tracking-tighter">UPStartupHub</div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
            © {new Date().getFullYear()} UPStartupHub. The Sovereign Signal.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-6 md:justify-end items-center">
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Global Network", href: "#" }
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-primary transition-opacity opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
