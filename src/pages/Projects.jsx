const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "DevSpace",
      description:
        "A real-time collaborative developer workspace with a code editor and interactive canvas.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Yjs",
        "Hocuspocus",
        "Express",
      ],
      github: {
        frontend:
          "https://github.com/anshul1768/DevSpace-Frontend",
        backend:
          "https://github.com/anshul1768/DevSpace-Backend",
      },
      live: "YOUR_LIVE_DEMO_LINK",
      featured: true,
    },
    {
      id: "02",
      title: "ZapURL",
      description:
        "A full-stack URL shortening application with authentication, analytics and redirect tracking.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: {
        frontend:
          "https://github.com/anshul1768/URL-SHORTNER-frontend",
        backend:
          "https://github.com/anshul1768/URL-SHORTNER-backend",
      },
      live:
        "https://url-shortner-frontend-gamma-taupe.vercel.app/",
      featured: false,
    },
    {
      id: "03",
      title: "ShopVerse",
      description:
        "A responsive e-commerce platform with product browsing, cart management and authentication.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      github: {
        frontend:
          "https://github.com/anshul1768/ShopVerse-Frontend",
        backend:
          "https://github.com/anshul1768/ShopVerse-Backend",
      },
      live: "YOUR_LIVE_DEMO_LINK",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
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
      <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <div className="mb-14">

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">

            <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span>
              03 / projects
            </span>

            <span className="text-muted">
              deployed_modules
            </span>

          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Things I've{" "}
            <span className="text-primary [text-shadow:0_0_20px_rgba(59,130,246,0.25)]">
              built
            </span>
          </h2>

          <p className="mt-3 font-mono text-xs text-muted">
            &gt; loading project_registry...
          </p>

        </div>

        {/* ================================================= */}
        {/* PROJECT STATUS BAR */}
        {/* ================================================= */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border border-border bg-surface px-5 py-3">

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">

            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span className="text-muted">
              registry_status:
            </span>

            <span className="text-primary">
              ONLINE
            </span>

          </div>

          <div className="font-mono text-[10px] text-muted">
            03 projects / 100% indexed
          </div>

        </div>

        {/* ================================================= */}
        {/* PROJECTS */}
        {/* ================================================= */}

        <div className="grid gap-5 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative flex flex-col overflow-hidden border bg-surface transition-all duration-300 hover:-translate-y-2 ${
                project.featured
                  ? "border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                  : "border-border hover:border-primary/40"
              }`}
            >

              {/* ================================================= */}
              {/* CORNER DECORATIONS */}
              {/* ================================================= */}

              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* ================================================= */}
              {/* PROJECT HEADER */}
              {/* ================================================= */}

              <div className="border-b border-border bg-surface-light px-5 py-4">

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[10px] text-primary/50">
                    PROJECT_{project.id}
                  </span>

                  {project.featured ? (
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-primary">

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_7px_var(--color-primary)]" />

                      featured

                    </span>
                  ) : (
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      archived
                    </span>
                  )}

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <span className="font-mono text-lg text-primary/30 transition-colors group-hover:text-primary">
                    {"</>"}
                  </span>

                </div>

              </div>

              {/* ================================================= */}
              {/* PROJECT CONTENT */}
              {/* ================================================= */}

              <div className="flex flex-1 flex-col p-5">

                {/* Command */}
                <div className="mb-5 font-mono text-[10px]">

                  <span className="text-primary">
                    &gt;
                  </span>

                  <span className="ml-2 text-muted">
                    project --info {project.title}
                  </span>

                </div>

                {/* Description */}
                <p className="flex-1 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {/* ================================================= */}
                {/* TECH STACK */}
                {/* ================================================= */}

                <div className="mt-6">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                      dependencies
                    </span>

                    <span className="font-mono text-[9px] text-primary">
                      {project.tech.length} modules
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border bg-background px-2.5 py-1.5 font-mono text-[9px] text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                {/* ================================================= */}
                {/* PROJECT STATUS */}
                {/* ================================================= */}

                <div className="mt-6 border-t border-border pt-4">

                  <div className="flex items-center justify-between font-mono text-[9px]">

                    <div className="flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]" />

                      <span className="text-muted">
                        BUILD
                      </span>

                    </div>

                    <span className="text-primary">
                      STABLE
                    </span>

                  </div>

                </div>

                {/* ================================================= */}
                {/* LINKS */}
                {/* ================================================= */}

                <div className="mt-5 grid grid-cols-3 gap-2">

                  <a
                    href={project.github.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border bg-background px-2 py-2.5 text-center font-mono text-[9px] uppercase text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    Frontend ↗
                  </a>

                  <a
                    href={project.github.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border bg-background px-2 py-2.5 text-center font-mono text-[9px] uppercase text-muted transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    Backend ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-primary/40 bg-primary/5 px-2 py-2.5 text-center font-mono text-[9px] uppercase text-primary transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                  >
                    Live ↗
                  </a>

                </div>

              </div>

            </article>
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
                projects --list --deployed
              </span>

            </div>

            <div className="flex items-center gap-2 text-primary">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />

              PROJECT REGISTRY ONLINE

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;


// const Projects = () => {
//   const projects = [
//     {
//       title: "DevSpace",
//       description:
//         "A real-time collaborative developer workspace with a code editor and interactive canvas.",
//       tech: [
//         "React",
//         "Node.js",
//         "MongoDB",
//         "Yjs",
//         "Hocuspocus",
//         "Express"
//       ],

//       github: {
//         frontend: "https://github.com/anshul1768/DevSpace-Frontend",
//         backend: "https://github.com/anshul1768/DevSpace-Backend",
//       },

//       live: "YOUR_LIVE_DEMO_LINK",

//       featured: true,
//     },

//     {
//       title: "ZapURL",
//       description:
//         "A full-stack URL shortening application with authentication, analytics and redirect tracking.",
//       tech: [
//         "React",
//         "Node.js",
//         "Express",
//         "MongoDB",
//       ],

//       github: {
//         frontend: "https://github.com/anshul1768/URL-SHORTNER-frontend",
//         backend: "https://github.com/anshul1768/URL-SHORTNER-backend",
//       },

//       live: "https://url-shortner-frontend-gamma-taupe.vercel.app/",

//       featured: false,
//     },

//     {
//       title: "ShopVerse",
//       description:
//         "A responsive e-commerce platform with product browsing, cart management and authentication.",
//       tech: [
//         "React",
//         "Node.js",
//         "MongoDB",
//         "Express",
//       ],

//       github: {
//         frontend: "https://github.com/anshul1768/ShopVerse-Frontend",
//         backend: "https://github.com/anshul1768/ShopVerse-Backend",
//       },

//       live: "YOUR_LIVE_DEMO_LINK",

//       featured: false,
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="border-t border-border/50 py-24"
//     >
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Section Heading */}
//         <p className="font-mono text-sm text-primary">
//           03. Projects
//         </p>

//         <h2 className="mt-3 text-4xl font-bold text-foreground">
//           Things I've built
//         </h2>

//         {/* Projects */}
//         <div className="mt-12 grid gap-6 lg:grid-cols-3">

//           {projects.map((project) => (
//             <article
//               key={project.title}
//               className={`group flex flex-col rounded-2xl border bg-surface p-6 transition duration-300 hover:-translate-y-2 ${
//                 project.featured
//                   ? "border-primary/40"
//                   : "border-border hover:border-primary/30"
//               }`}
//             >

//               {/* Featured */}
//               {project.featured && (
//                 <span className="mb-5 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
//                   Featured Project
//                 </span>
//               )}

//               {/* Content */}
//               <div className="flex-1">

//                 <h3 className="text-2xl font-bold text-foreground transition group-hover:text-primary">
//                   {project.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-muted">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="rounded-md bg-background px-2.5 py-1 text-xs text-muted"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//               </div>

//               {/* Links */}
//               <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">

//                 {/* Frontend */}
//                 <a
//                   href={project.github.frontend}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-medium text-muted transition hover:text-primary"
//                 >
//                   Frontend ↗
//                 </a>

//                 {/* Backend */}
//                 <a
//                   href={project.github.backend}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-medium text-muted transition hover:text-primary"
//                 >
//                   Backend ↗
//                 </a>

//                 {/* Live */}
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-medium text-primary transition hover:text-primary-hover"
//                 >
//                   Live Demo ↗
//                 </a>

//               </div>

//             </article>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;