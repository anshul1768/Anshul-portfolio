const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/50 py-24"
    >
      {/* ================================================= */}
      {/* DIGITAL GRID */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]">
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

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-6">

        {/* ================================================= */}
        {/* TERMINAL HEADER */}
        {/* ================================================= */}

        <div className="mb-10 flex items-center justify-between border border-border bg-surface px-5 py-3">

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">

            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span className="text-muted">
              communication_channel:
            </span>

            <span className="text-primary">
              OPEN
            </span>

          </div>

          <span className="font-mono text-[10px] text-muted">
            PORT_05
          </span>

        </div>

        {/* ================================================= */}
        {/* MAIN CONTACT PANEL */}
        {/* ================================================= */}

        <div className="relative overflow-hidden border border-border bg-surface">

          {/* Corner decorations */}

          <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-primary" />

          <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-primary" />

          <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-primary" />

          <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary" />

          {/* ================================================= */}
          {/* CONTENT */}
          {/* ================================================= */}

          <div className="px-6 py-14 text-center sm:px-12 sm:py-20">

            {/* Section label */}

            <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">

              <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

              <span>
                05 / contact
              </span>

              <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">

              Let's build{" "}

              <span className="text-primary [text-shadow:0_0_20px_rgba(59,130,246,0.3)]">
                something
              </span>

              <br />

              together.

            </h2>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">

              I'm always open to discussing new projects,
              opportunities and interesting ideas.

            </p>

            {/* ================================================= */}
            {/* TERMINAL COMMAND */}
            {/* ================================================= */}

            <div className="mx-auto mt-8 max-w-md border border-border bg-background px-4 py-3 text-left font-mono text-[10px]">

              <div>

                <span className="text-primary">
                  anshul@dev
                </span>

                <span className="text-muted">
                  :~$
                </span>

                <span className="ml-2 text-foreground">
                  initiate_connection
                </span>

              </div>

              <div className="mt-2 text-muted">

                <span className="text-primary">
                  &gt;
                </span>

                <span className="ml-2">
                  waiting for incoming connection...
                </span>

              </div>

            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <a
              href="mailto:devaksh2211@gmail.com"
              className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden border border-primary/50 bg-primary/5 px-7 py-3.5 font-mono text-sm font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]"
            >

              <span className="relative z-10">
                &gt; GET_IN_TOUCH
              </span>

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>

              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

            </a>

          </div>

          {/* ================================================= */}
          {/* CONNECTION STATUS */}
          {/* ================================================= */}

          <div className="border-t border-border bg-surface-light px-5 py-4">

            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[9px]">

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]" />

                <span className="text-muted">
                  CONNECTION_STATUS
                </span>

                <span className="text-primary">
                  READY
                </span>

              </div>

              <span className="text-muted">
                ENCRYPTED_CHANNEL
              </span>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* SOCIAL NETWORK */}
        {/* ================================================= */}

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {/* GitHub */}

          <a
            href="https://github.com/anshul1768"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border bg-surface px-4 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >

            <div className="flex items-center justify-between">

              <span className="font-mono text-[9px] text-muted">
                NODE_01
              </span>

              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>

            </div>

            <p className="mt-3 font-mono text-xs text-foreground transition-colors group-hover:text-primary">
              GitHub
            </p>

            <p className="mt-1 font-mono text-[8px] text-muted">
              CODE_REPOSITORY
            </p>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/anshul-singh-9bb796282/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border bg-surface px-4 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >

            <div className="flex items-center justify-between">

              <span className="font-mono text-[9px] text-muted">
                NODE_02
              </span>

              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>

            </div>

            <p className="mt-3 font-mono text-xs text-foreground transition-colors group-hover:text-primary">
              LinkedIn
            </p>

            <p className="mt-1 font-mono text-[8px] text-muted">
              PROFESSIONAL_NETWORK
            </p>

          </a>

          {/* Email */}

          <a
            href="mailto:devaksh2211@gmail.com"
            className="group border border-border bg-surface px-4 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >

            <div className="flex items-center justify-between">

              <span className="font-mono text-[9px] text-muted">
                NODE_03
              </span>

              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>

            </div>

            <p className="mt-3 font-mono text-xs text-foreground transition-colors group-hover:text-primary">
              Email
            </p>

            <p className="mt-1 font-mono text-[8px] text-muted">
              DIRECT_CHANNEL
            </p>

          </a>

          {/* LeetCode */}

          <a
            href="https://leetcode.com/u/LC_Anshul/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border bg-surface px-4 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >

            <div className="flex items-center justify-between">

              <span className="font-mono text-[9px] text-muted">
                NODE_04
              </span>

              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>

            </div>

            <p className="mt-3 font-mono text-xs text-foreground transition-colors group-hover:text-primary">
              LeetCode
            </p>

            <p className="mt-1 font-mono text-[8px] text-muted">
              PROBLEM_SOLVING
            </p>

          </a>

        </div>

        {/* ================================================= */}
        {/* FINAL TERMINAL */}
        {/* ================================================= */}

        <div className="mt-8 text-center font-mono text-[9px] text-muted">

          <span className="text-primary">
            anshul@dev
          </span>

          <span>
            :~$
          </span>

          <span className="ml-2">
            exit --connection
          </span>

          <span className="ml-2 animate-pulse text-primary">
            _
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;




// const Contact = () => {
//   return (
//     <section id="contact" className="border-t border-border/50 py-24">
//       <div className="mx-auto max-w-3xl px-6 text-center">
//         <p className="font-mono text-sm text-primary">05. Contact</p>

//         <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
//           Let's build something together.
//         </h2>

//         <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
//           I'm always open to discussing new projects, opportunities and
//           interesting ideas.
//         </p>

//         <a
//           href="mailto:your@email.com"
//           className="mt-8 inline-block rounded-lg bg-primary px-7 py-3 font-semibold text-white transition hover:bg-primary-hover"
//         >
//           Get In Touch
//         </a>

//         <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
//           <a
//             href="https://github.com/anshul1768"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition hover:text-primary"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://www.linkedin.com/in/anshul-singh-9bb796282/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition hover:text-primary"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="mailto:devaksh2211@gmail.com"
//             className="transition hover:text-primary"
//           >
//             Email
//           </a>
//           <a
//             href="https://leetcode.com/u/LC_Anshul/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition hover:text-primary"
//           >
//             LeetCode ↗
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
