import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-primary/20 bg-background/85 font-mono backdrop-blur-xl">

      {/* ================= DIGITAL GRID ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ================= TOP DIGITAL LINE ================= */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_var(--color-primary)]" />

      {/* ================= BOTTOM NEON LINE ================= */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_var(--color-primary)]" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-3">

          {/* Logo Box */}
          <a
            href="#home"
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-primary/50 bg-primary/5 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          >

            {/* Corner decorations */}
            <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary" />
            <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary" />

            {/* Scan effect */}
            <span className="absolute left-0 top-0 h-px w-full -translate-x-full bg-primary shadow-[0_0_10px_#3b82f6] transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative text-sm font-black text-primary">
              &gt;_
            </span>
          </a>

          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center gap-1 text-lg font-bold tracking-wider"
          >
            <span className="text-primary transition-all duration-300 group-hover:text-primary-hover group-hover:[text-shadow:0_0_15px_rgba(59,130,246,0.8)]">
              Anshul
            </span>

            <span className="animate-pulse text-cyan-400">_</span>
          </a>

        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative flex items-center text-xs uppercase tracking-widest text-muted transition-all duration-300 hover:text-primary-hover"
            >

              {/* Number */}
              <span className="mr-1 text-[9px] text-primary/50">
                0{index + 1}
              </span>

              {/* Terminal */}
              <span className="mr-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                &gt;
              </span>

              {link.name}

              {/* Digital underline */}
              <span className="absolute -bottom-3 left-0 h-px w-0 bg-primary shadow-[0_0_10px_#3b82f6] transition-all duration-300 group-hover:w-full" />

              {/* Small dot */}
              <span className="absolute -right-2 -top-1 h-1 w-1 bg-primary opacity-0 shadow-[0_0_6px_#3b82f6] transition-opacity duration-300 group-hover:opacity-100" />

            </a>
          ))}

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-2 md:flex">

          {/* System status */}
          <div className="mr-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            online
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/anshul1768"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-transparent px-3 py-2 text-xs text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary-hover"
          >
            <span className="text-primary/50 group-hover:text-primary">
              ~/
            </span>
            github
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anshul-singh-9bb796282"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-transparent px-3 py-2 text-xs text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary-hover"
          >
            <span className="text-primary/50 group-hover:text-primary">
              ~/
            </span>
            linkedin
          </a>

          {/* ================= CTA ================= */}
          <a
            href="#contact"
            className="group relative ml-3 overflow-hidden border border-primary/60 bg-primary/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:text-primary-hover hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          >

            {/* Corner */}
            <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary" />
            <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary" />

            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

            <span className="relative z-10">
              &gt; Let's Talk
            </span>
          </a>

        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative border border-primary/40 bg-primary/5 px-3 py-2 text-lg text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="border-t border-primary/20 bg-background/95 backdrop-blur-xl md:hidden">

          {/* Mobile header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-3 text-[10px] uppercase tracking-widest text-muted">
            <span>
              system://navigation
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              online
            </span>
          </div>

          <div className="flex flex-col gap-1 px-6 py-5">

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center border border-transparent px-4 py-3 text-xs uppercase tracking-widest text-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary-hover"
              >

                <span className="mr-3 text-[9px] text-primary/40">
                  0{index + 1}
                </span>

                <span className="mr-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  &gt;
                </span>

                {link.name}

              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 border border-primary/50 bg-primary/10 px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              &gt; Let's Talk
            </a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;


// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed left-0 top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

//         {/* Logo + Name */}
//         <div className="flex items-center gap-3">
//           <a
//             href="#home"
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-surface transition hover:border-primary/60 hover:bg-primary/10"
//           >
//             <img
//               src="/koder.png"
//               alt="Logo"
//               className="h-7 w-7 object-contain"
//             />
//           </a>

//           <a
//             href="#home"
//             className="text-lg font-semibold text-foreground transition hover:text-primary"
//           >
//             Anshul
//           </a>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="group relative text-sm font-medium text-muted transition hover:text-foreground"
//             >
//               {link.name}

//               <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
//             </a>
//           ))}
//         </div>

//         {/* Right */}
//         <div className="hidden items-center gap-2 md:flex">
//           <a
//             href="https://github.com/anshul1768"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://www.linkedin.com/in/anshul-singh-9bb796282"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="#contact"
//             className="ml-3 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
//           >
//             Let's Talk
//           </a>
//         </div>

//         {/* Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="rounded-lg border border-border bg-surface px-3 py-2 text-xl text-muted md:hidden"
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="border-t border-border bg-background md:hidden">
//           <div className="flex flex-col gap-1 px-6 py-5">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="rounded-lg px-4 py-3 text-muted transition hover:bg-surface hover:text-foreground"
//               >
//                 {link.name}
//               </a>
//             ))}

//             <a
//               href="#contact"
//               onClick={() => setIsOpen(false)}
//               className="mt-3 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-white hover:bg-primary-hover"
//             >
//               Let's Talk
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;