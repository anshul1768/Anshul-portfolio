import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-surface transition hover:border-primary/60 hover:bg-primary/10"
          >
            <img
              src="/koder.png"
              alt="Logo"
              className="h-7 w-7 object-contain"
            />
          </a>

          <a
            href="#home"
            className="text-lg font-semibold text-foreground transition hover:text-primary"
          >
            Anshul
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-muted transition hover:text-foreground"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/anshul1768"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anshul-singh-9bb796282"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="ml-3 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-xl text-muted md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-muted transition hover:bg-surface hover:text-foreground"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-white hover:bg-primary-hover"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;