const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API", "Socket.io"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "PostgreSQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman",],
    },
  ];

  return (
    <section id="skills" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-mono text-sm text-primary">
          02. Skills
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground">
          Technologies I work with
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted transition hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;