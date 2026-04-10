import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#how-it-works" },
  { label: "Contact", href: "#lead-form" }
];

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm h-20">
      <div className="flex justify-between items-center w-full px-8 md:px-16 max-w-7xl mx-auto h-full">
        <a href="#top" className="flex items-center -ml-2">
          <Logo className="h-8 sm:h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-slate-500 font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a 
          href="#lead-form"
          className="bg-primary hover:bg-blue-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-95 shadow-md hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
