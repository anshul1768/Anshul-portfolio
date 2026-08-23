const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">

        <p>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <p>
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;