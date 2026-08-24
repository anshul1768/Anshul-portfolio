const Experience = () => {
  const timeline = [
    {
      id: "01",
      period: "2023 — 2027",
      type: "EDUCATION",
      title: "B.Tech — Computer Science & Engineering",
      organization: "Lamrin Tech Skills University",
      description:
        "Focused on software development, data structures, algorithms and modern web technologies.",
      status: "IN PROGRESS",
    },
  ];

  return (
    <section
      id="experience"
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

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[110px]" />

      <div className="mx-auto max-w-5xl px-6">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <div className="mb-14">

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">

            <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span>
              04 / experience
            </span>

            <span className="text-muted">
              career_log
            </span>

          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Education{" "}
            <span className="text-primary [text-shadow:0_0_20px_rgba(59,130,246,0.25)]">
              & Experience
            </span>
          </h2>

          <p className="mt-3 font-mono text-xs text-muted">
            &gt; reading career_history.log...
          </p>

        </div>

        {/* ================================================= */}
        {/* TERMINAL HEADER */}
        {/* ================================================= */}

        <div className="mb-8 flex items-center justify-between border border-border bg-surface px-5 py-3">

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">

            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span className="text-muted">
              timeline_status:
            </span>

            <span className="text-primary">
              ACTIVE
            </span>

          </div>

          <span className="font-mono text-[10px] text-muted">
            01 record found
          </span>

        </div>

        {/* ================================================= */}
        {/* TIMELINE */}
        {/* ================================================= */}

        <div className="relative">

          {/* Main timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border sm:left-6" />

          {/* Active line */}
          <div className="absolute left-5 top-0 h-24 w-px bg-gradient-to-b from-primary via-primary/60 to-transparent shadow-[0_0_8px_var(--color-primary)] sm:left-6" />

          <div className="space-y-8">

            {timeline.map((item) => (
              <div
                key={item.id}
                className="relative pl-14 sm:pl-16"
              >

                {/* ================================================= */}
                {/* TIMELINE NODE */}
                {/* ================================================= */}

                <div className="absolute left-[11px] top-6 flex h-3 w-3 items-center justify-center sm:left-[19px]">

                  <span className="absolute h-5 w-5 animate-pulse rounded-full bg-primary/10" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />

                </div>

                {/* ================================================= */}
                {/* EXPERIENCE CARD */}
                {/* ================================================= */}

                <div className="group relative overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-primary/50 hover:bg-surface-light hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]">

                  {/* Corner decorations */}

                  <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* ================================================= */}
                  {/* CARD HEADER */}
                  {/* ================================================= */}

                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface-light px-5 py-4 sm:px-6">

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[10px] text-primary/50">
                        LOG_{item.id}
                      </span>

                      <span className="h-3 w-px bg-border" />

                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        {item.type}
                      </span>

                    </div>

                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>

                  </div>

                  {/* ================================================= */}
                  {/* CARD CONTENT */}
                  {/* ================================================= */}

                  <div className="p-5 sm:p-6">

                    {/* Command */}
                    <div className="mb-5 font-mono text-[10px]">

                      <span className="text-primary">
                        anshul@dev
                      </span>

                      <span className="text-muted">
                        :~$
                      </span>

                      <span className="ml-2 text-foreground">
                        cat education.log
                      </span>

                    </div>

                    <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-mono text-sm text-primary/80">
                      @ {item.organization}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      {item.description}
                    </p>

                    {/* ================================================= */}
                    {/* STATUS */}
                    {/* ================================================= */}

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">

                      <div className="flex items-center gap-2 font-mono text-[10px]">

                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />

                        <span className="text-muted">
                          STATUS:
                        </span>

                        <span className="text-primary">
                          {item.status}
                        </span>

                      </div>

                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted">
                        record_verified
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ================================================= */}
        {/* TERMINAL FOOTER */}
        {/* ================================================= */}

        <div className="mt-10 border border-border bg-surface px-5 py-4">

          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px]">

            <div>

              <span className="text-primary">
                anshul@dev
              </span>

              <span className="text-muted">
                :~$
              </span>

              <span className="ml-2 text-foreground">
                timeline --status
              </span>

            </div>

            <span className="text-primary">
              CAREER LOG ACTIVE_
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;



// const Experience = () => {
//   return (
//     <section className="border-t border-border/50 py-24">
//       <div className="mx-auto max-w-4xl px-6">

//         <p className="font-mono text-sm text-primary">
//           04. Education
//         </p>

//         <h2 className="mt-3 text-4xl font-bold text-foreground">
//           Education & Experience
//         </h2>

//         <div className="mt-12 border-l border-border pl-8">

//           <div className="relative">
//             <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />

//             <p className="text-sm font-medium text-primary">
//               2023 — 2027
//             </p>

//             <h3 className="mt-2 text-xl font-semibold text-foreground">
//               B.Tech — Computer Science & Engineering
//             </h3>

//             <p className="mt-2 text-muted">
//               Lamrin Tech Skills University
//             </p>

//             <p className="mt-4 max-w-2xl leading-7 text-muted">
//               Focused on software development, data structures,
//                 and modern web technologies.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;