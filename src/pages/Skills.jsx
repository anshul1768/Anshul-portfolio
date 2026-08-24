const Skills = () => {
  const categories = [
    {
      id: "01",
      title: "Frontend",
      code: "UI_MODULE",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      id: "02",
      title: "Backend",
      code: "SERVER_MODULE",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "Socket.io",
      ],
    },
    {
      id: "03",
      title: "Database",
      code: "DATA_MODULE",
      skills: [
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
      ],
    },
    {
      id: "04",
      title: "Tools",
      code: "DEV_MODULE",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
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
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <div className="mb-14">

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">

            <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span>
              02 / skills
            </span>

            <span className="text-muted">
              system_modules
            </span>

          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Technologies{" "}
            <span className="text-primary [text-shadow:0_0_20px_rgba(59,130,246,0.25)]">
              I work with
            </span>
          </h2>

          <p className="mt-3 font-mono text-xs text-muted">
            &gt; scanning installed technologies...
          </p>

        </div>

        {/* ================================================= */}
        {/* SYSTEM STATUS BAR */}
        {/* ================================================= */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border border-border bg-surface px-5 py-3">

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">

            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span className="text-muted">
              technology_scan
            </span>

            <span className="text-primary">
              complete
            </span>

          </div>

          <div className="font-mono text-[10px] text-muted">
            4 modules / 16 technologies
          </div>

        </div>

        {/* ================================================= */}
        {/* SKILL MODULES */}
        {/* ================================================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-light hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >

              {/* ================================================= */}
              {/* CORNER DECORATIONS */}
              {/* ================================================= */}

              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* ================================================= */}
              {/* MODULE HEADER */}
              {/* ================================================= */}

              <div className="border-b border-border bg-surface-light px-5 py-4">

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[10px] text-primary/50">
                    MOD_{category.id}
                  </span>

                  <span className="flex items-center gap-1.5">

                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]" />

                    <span className="font-mono text-[9px] uppercase text-primary">
                      active
                    </span>

                  </span>

                </div>

                <h3 className="mt-3 text-xl font-bold text-foreground">
                  {category.title}
                </h3>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                  {category.code}
                </p>

              </div>

              {/* ================================================= */}
              {/* SKILLS */}
              {/* ================================================= */}

              <div className="p-5">

                <div className="mb-4 font-mono text-[10px] text-muted">
                  <span className="text-primary">
                    &gt;
                  </span>{" "}
                  dependencies:
                </div>

                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border bg-background px-3 py-2 font-mono text-[10px] text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* ================================================= */}
              {/* MODULE FOOTER */}
              {/* ================================================= */}

              <div className="border-t border-border px-5 py-3">

                <div className="flex items-center justify-between font-mono text-[9px]">

                  <span className="text-muted">
                    status
                  </span>

                  <span className="text-primary">
                    LOADED
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ================================================= */}
        {/* TERMINAL FOOTER */}
        {/* ================================================= */}

        <div className="mt-8 border border-border bg-surface px-5 py-4">

          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px]">

            <div>

              <span className="text-primary">
                anshul@dev
              </span>

              <span className="text-muted">
                :~$
              </span>

              <span className="ml-2 text-foreground">
                skills --list --active
              </span>

            </div>

            <div className="flex items-center gap-2 text-primary">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />

              ALL SYSTEMS OPERATIONAL

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;




// const Skills = () => {
//   const categories = [
//     {
//       title: "Frontend",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
//     },
//     {
//       title: "Backend",
//       skills: ["Node.js", "Express.js", "REST API", "Socket.io"],
//     },
//     {
//       title: "Database",
//       skills: ["MongoDB", "Mongoose", "PostgreSQL"],
//     },
//     {
//       title: "Tools",
//       skills: ["Git", "GitHub", "VS Code", "Postman",],
//     },
//   ];

//   return (
//     <section id="skills" className="border-t border-border/50 py-24">
//       <div className="mx-auto max-w-7xl px-6">

//         <p className="font-mono text-sm text-primary">
//           02. Skills
//         </p>

//         <h2 className="mt-3 text-4xl font-bold text-foreground">
//           Technologies I work with
//         </h2>

//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {categories.map((category) => (
//             <div
//               key={category.title}
//               className="rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
//             >
//               <h3 className="text-xl font-semibold text-foreground">
//                 {category.title}
//               </h3>

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {category.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted transition hover:border-primary/40 hover:text-primary"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;