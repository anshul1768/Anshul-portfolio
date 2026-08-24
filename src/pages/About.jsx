const About = () => {
  const stats = [
    ["01", "Education", "B.Tech CSE"],
    ["02", "Specialization", "AI & ML"],
    ["03", "Focus", "MERN + DSA"],
    ["04", "Status", "Available"],
  ];

  return (
    <section
      id="about"
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
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <div className="mb-14">

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">

            <span className="h-px w-8 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span>
              01 / about
            </span>

            <span className="text-muted">
              profile.exe
            </span>

          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A little{" "}
            <span className="text-primary [text-shadow:0_0_20px_rgba(59,130,246,0.25)]">
              about me
            </span>
          </h2>

          <p className="mt-3 font-mono text-xs text-muted">
            &gt; loading developer_profile...
          </p>

        </div>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT - TERMINAL BIO */}
          {/* ================================================= */}

          <div className="relative">

            <div className="border border-border bg-surface">

              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-border bg-surface-light px-5 py-3">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />

                  <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />

                  <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />

                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  about_me.txt
                </span>

                <span className="font-mono text-[9px] text-primary">
                  READ
                </span>

              </div>

              {/* Terminal Content */}
              <div className="p-6 sm:p-8">

                <div className="mb-6 font-mono text-xs">

                  <span className="text-primary">
                    anshul@dev
                  </span>

                  <span className="text-muted">
                    :~$
                  </span>

                  <span className="ml-2 text-foreground">
                    cat about_me.txt
                  </span>

                </div>

                <div className="space-y-5 text-base leading-8 text-muted">

                  <p>
                    I'm a{" "}
                    <span className="font-medium text-foreground">
                      Computer Science student
                    </span>{" "}
                    passionate about building full-stack web applications
                    and solving real-world problems through technology.
                  </p>

                  <p>
                    My primary focus is{" "}
                    <span className="text-primary">
                      MERN stack development
                    </span>
                    , backend architecture and{" "}
                    <span className="text-primary">
                      data structures & algorithms
                    </span>
                    .
                  </p>

                  <p>
                    I enjoy learning new technologies and turning ideas
                    into functional, scalable products.
                  </p>

                </div>

                {/* Terminal status */}
                <div className="mt-8 border-t border-border pt-5">

                  <div className="flex items-center gap-2 font-mono text-xs">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

                    <span className="text-primary">
                      PROFILE STATUS:
                    </span>

                    <span className="text-muted">
                      ACTIVE
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT - TECHNICAL PROFILE */}
          {/* ================================================= */}

          <div>

            <div className="mb-5 flex items-center justify-between font-mono text-xs">

              <span className="text-muted">
                ~/developer/config
              </span>

              <span className="text-primary">
                JSON
              </span>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {stats.map(([number, title, value]) => (
                <div
                  key={title}
                  className="group relative overflow-hidden border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/50 hover:bg-surface-light hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                >

                  {/* Corner */}
                  <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary opacity-0 transition-opacity group-hover:opacity-100" />

                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary opacity-0 transition-opacity group-hover:opacity-100" />

                  <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary opacity-0 transition-opacity group-hover:opacity-100" />

                  <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Number */}
                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[10px] text-primary/50">
                      {number}
                    </span>

                    <span className="h-1.5 w-1.5 bg-primary/40 transition-all group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--color-primary)]" />

                  </div>

                  {/* Content */}
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {title}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary-hover">
                    {value}
                  </p>

                </div>
              ))}

            </div>

            {/* ================================================= */}
            {/* TECH STACK SUMMARY */}
            {/* ================================================= */}

            <div className="mt-4 border border-border bg-surface p-5">

              <div className="flex items-center justify-between">

                <span className="font-mono text-xs text-muted">
                  core_stack
                </span>

                <span className="font-mono text-[9px] text-primary">
                  INITIALIZED
                </span>

              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Git",
                  "DSA",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-background px-3 py-1.5 font-mono text-[10px] text-muted transition-all duration-300 hover:border-primary/50 hover:text-primary"
                  >
                    &lt;{tech} /&gt;
                  </span>
                ))}

              </div>

            </div>

            {/* Bottom system line */}
            <div className="mt-5 flex items-center gap-3 font-mono text-[10px] text-muted">

              <span className="h-px flex-1 bg-border" />

              <span>
                end_of_profile
              </span>

              <span className="text-primary">
                _
              </span>

              <span className="h-px flex-1 bg-border" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;