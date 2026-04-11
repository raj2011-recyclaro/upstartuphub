import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-16 border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="md:col-span-4 translate-y-2">
          <Logo className="h-7 w-auto mb-6" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
            © {new Date().getFullYear()} UPStartupHub. <br/>
            Engineered for Uttar Pradesh.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-6 md:justify-end items-center">
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter / X", href: "https://twitter.com" }
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-secondary transition-all opacity-80 hover:opacity-100"
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
