const Projects = () => {
  const projects = [
    {
      title: "DevSpace",
      description:
        "A real-time collaborative developer workspace with a code editor and interactive canvas.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Yjs",
        "Hocuspocus",
        "Express"
      ],

      github: {
        frontend: "https://github.com/anshul1768/DevSpace-Frontend",
        backend: "https://github.com/anshul1768/DevSpace-Backend",
      },

      live: "YOUR_LIVE_DEMO_LINK",

      featured: true,
    },

    {
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
        frontend: "https://github.com/anshul1768/URL-SHORTNER-frontend",
        backend: "https://github.com/anshul1768/URL-SHORTNER-backend",
      },

      live: "https://url-shortner-frontend-gamma-taupe.vercel.app/",

      featured: false,
    },

    {
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
        frontend: "https://github.com/anshul1768/ShopVerse-Frontend",
        backend: "https://github.com/anshul1768/ShopVerse-Backend",
      },

      live: "YOUR_LIVE_DEMO_LINK",

      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-border/50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <p className="font-mono text-sm text-primary">
          03. Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground">
          Things I've built
        </h2>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border bg-surface p-6 transition duration-300 hover:-translate-y-2 ${
                project.featured
                  ? "border-primary/40"
                  : "border-border hover:border-primary/30"
              }`}
            >

              {/* Featured */}
              {project.featured && (
                <span className="mb-5 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Featured Project
                </span>
              )}

              {/* Content */}
              <div className="flex-1">

                <h3 className="text-2xl font-bold text-foreground transition group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">

                {/* Frontend */}
                <a
                  href={project.github.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-muted transition hover:text-primary"
                >
                  Frontend ↗
                </a>

                {/* Backend */}
                <a
                  href={project.github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-muted transition hover:text-primary"
                >
                  Backend ↗
                </a>

                {/* Live */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary transition hover:text-primary-hover"
                >
                  Live Demo ↗
                </a>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;