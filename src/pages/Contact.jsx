const Contact = () => {
  return (
    <section id="contact" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono text-sm text-primary">05. Contact</p>

        <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
          Let's build something together.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
          I'm always open to discussing new projects, opportunities and
          interesting ideas.
        </p>

        <a
          href="mailto:your@email.com"
          className="mt-8 inline-block rounded-lg bg-primary px-7 py-3 font-semibold text-white transition hover:bg-primary-hover"
        >
          Get In Touch
        </a>

        <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
          <a
            href="https://github.com/anshul1768"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anshul-singh-9bb796282/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            LinkedIn
          </a>

          <a
            href="mailto:devaksh2211@gmail.com"
            className="transition hover:text-primary"
          >
            Email
          </a>
          <a
            href="https://leetcode.com/u/LC_Anshul/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            LeetCode ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
