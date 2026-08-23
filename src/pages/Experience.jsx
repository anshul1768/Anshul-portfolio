const Experience = () => {
  return (
    <section className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <p className="font-mono text-sm text-primary">
          04. Education
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground">
          Education & Experience
        </h2>

        <div className="mt-12 border-l border-border pl-8">

          <div className="relative">
            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />

            <p className="text-sm font-medium text-primary">
              2023 — 2027
            </p>

            <h3 className="mt-2 text-xl font-semibold text-foreground">
              B.Tech — Computer Science & Engineering
            </h3>

            <p className="mt-2 text-muted">
              Lamrin Tech Skills University
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Focused on software development, data structures,
                and modern web technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;