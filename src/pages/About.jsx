const About = () => {
  return (
    <section id="about" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <p className="font-mono text-sm text-primary">
            01. About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold text-foreground">
            A little about me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-lg leading-8 text-muted">
              I'm a Computer Science student passionate about building
              full-stack web applications and solving real-world problems
              through technology.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted">
              My primary focus is MERN stack development, backend
              architecture and data structures & algorithms.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted">
              I enjoy learning new technologies and turning ideas into
              functional products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["B.Tech", "Computer Science & Engineering"],
              ["Focus", "MERN Stack"],
              ["DSA", "Problem Solving"],
              ["Location", "India"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/40"
              >
                <p className="text-sm text-muted">{title}</p>
                <p className="mt-2 font-semibold text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;