const footerLinks = [
  { label: "About", href: "#features" },
  { label: "Contact", href: "#lead-form" },
  { label: "Programs", href: "#how-it-works" }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <path
        d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.2 6.94 1.97 1.97 0 0 0 5.25 3ZM20 12.94c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H8.94c.04.82 0 11.5 0 11.5h3.39v-6.42c0-.34.03-.68.13-.92.27-.68.89-1.38 1.92-1.38 1.35 0 1.9 1.03 1.9 2.54V20H20v-7.06Z"
        fill="currentColor"
      />
    )
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <path
        d="M18.9 3H21l-4.58 5.24L22 21h-4.39l-3.44-4.49L10.24 21H8.14l4.89-5.6L2 3h4.5l3.11 4.1L12.9 3h6ZM18.13 19h1.22L5.83 4.9H4.52L18.13 19Z"
        fill="currentColor"
      />
    )
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2.2A1.8 1.8 0 0 0 5.2 7v10c0 .99.8 1.8 1.8 1.8h10A1.8 1.8 0 0 0 18.8 17V7A1.8 1.8 0 0 0 17 5.2H7Zm10.35 1.65a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 7.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 2.2A2 2 0 1 0 14 12a2 2 0 0 0-2-2Z"
        fill="currentColor"
      />
    )
  }
];

function Footer() {
  return (
    <footer id="footer" className="bg-brand-navy py-12 text-sky-100/70">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href="#top" aria-label="UP Startup Hub" className="flex items-center -ml-4 sm:-ml-8">
              <img
                src="/logo-removebg-preview.png"
                alt="UP Startup Hub"
                className="h-48 sm:h-64 w-auto object-contain object-left"
                style={{
                  filter:
                    "brightness(0) invert(1)"
                }}
              />
            </a>
            <p className="mt-4 max-w-xl text-sm leading-7 text-sky-100/60">
              Everything your startup needs in one place. From UP to Global.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-100/10 bg-white/5 transition hover:bg-brand-orange hover:border-brand-orange hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-sky-100/10 pt-6 text-sm text-sky-100/50">
          Copyright © {new Date().getFullYear()} UP Startup Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
