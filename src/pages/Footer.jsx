const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background py-8">

      {/* ================================================= */}
      {/* DIGITAL GRID */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* ================================================= */}
        {/* TOP STATUS LINE */}
        {/* ================================================= */}

        <div className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em]">

          <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

          <span className="text-primary">
            system_footer
          </span>

          <span className="text-muted">
            / end_of_session
          </span>

        </div>

        {/* ================================================= */}
        {/* FOOTER CONTENT */}
        {/* ================================================= */}

        <div className="flex flex-col justify-between gap-5 border border-border bg-surface px-5 py-4 sm:flex-row sm:items-center">

          {/* LEFT */}

          <div className="font-mono text-[10px]">

            <span className="text-primary">
              anshul@dev
            </span>

            <span className="text-muted">
              :~$
            </span>

            <span className="ml-2 text-foreground">
              whoami
            </span>

            <div className="mt-2 text-muted">
              Full Stack Developer · MERN · Problem Solver
            </div>

          </div>

          {/* RIGHT */}

          <div className="flex flex-wrap items-center gap-4 font-mono text-[9px]">

            <span className="text-muted">
              BUILT_WITH
            </span>

            <span className="text-primary">
              React
            </span>

            <span className="text-muted">
              +
            </span>

            <span className="text-primary">
              Tailwind
            </span>

            <span className="h-3 w-px bg-border" />

            <span className="flex items-center gap-2 text-primary">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]" />

              ONLINE

            </span>

          </div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div className="mt-5 flex flex-col items-center justify-between gap-3 font-mono text-[9px] text-muted sm:flex-row">

          <p>
            © {new Date().getFullYear()} Anshul Singh. All rights reserved.
          </p>

          <p>
            <span className="text-primary">
              STATUS:
            </span>{" "}
            SYSTEM OPERATIONAL
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;



// const Footer = () => {
//   return (
//     <footer className="border-t border-border/50 py-8">
//       <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">

//         <p>
//           © {new Date().getFullYear()} Your Name. All rights reserved.
//         </p>

//         <p>
//           Built with React & Tailwind CSS
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;