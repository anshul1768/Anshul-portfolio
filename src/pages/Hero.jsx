import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Anshul Singh",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Problem Solver",
    "Software Developer"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="mb-5 font-mono text-sm text-primary">
            &lt;Namaste World /&gt;
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            I'm{" "}
            <span className="text-primary">
              {displayText}
              <span className="ml-1 inline-block animate-pulse text-foreground">
                |
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            I build modern, scalable and interactive web applications
            using JavaScript, React, Node.js and MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground transition hover:border-primary/50 hover:bg-surface-light"
            >
              Contact Me
            </a>

          </div>

          <div className="mt-8 flex gap-6 text-sm text-muted">

            <a
              href="https://github.com/anshul1768"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/anshul-singh-9bb796282"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden justify-center lg:flex">

          <div className="relative w-full max-w-md">

            <div className="absolute -inset-1 rounded-3xl bg-primary/20 blur-xl" />

            <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-2xl">

              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <pre className="overflow-hidden font-mono text-sm leading-7 text-muted">
                <code>
{`const developer = {
  name: "Anshul Singh",
  role: "Full Stack Developer",

  skills: [
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ],

  passion: "Building products",

  available: true
};`}
                </code>
              </pre>

              <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 font-mono text-xs text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Available for opportunities
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;