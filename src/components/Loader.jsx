import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const text = "Anshul's Portfolio";

  const [displayText, setDisplayText] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);

        // Text complete hone ke baad thoda wait
        setTimeout(() => {
          setIsExiting(true);

          // Exit animation complete hone ke baad portfolio show
          setTimeout(() => {
            onComplete();
          }, 700);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background transition-all duration-700 ${
        isExiting
          ? "scale-110 opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* Electric Blue Glow */}
      <div
        className={`absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl transition-all duration-1000 ${
          displayText.length === text.length
            ? "scale-150 opacity-100"
            : "scale-100 opacity-60"
        }`}
      />

      {/* Content */}
      <div className="relative text-center">

        {/* Small top label */}
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.4em] text-muted">
          Welcome to
        </p>

        {/* Main Text */}
        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {displayText}
          <span className="ml-1 animate-pulse text-primary">
            |
          </span>
        </h1>

        {/* Electric line */}
        <div className="mx-auto mt-8 h-[2px] w-32 overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-primary shadow-[0_0_15px_var(--color-primary)] transition-all duration-300"
            style={{
              width: `${(displayText.length / text.length) * 100}%`,
            }}
          />
        </div>

        {/* Loading text */}
        <p className="mt-4 font-mono text-xs text-muted">
          {displayText.length === text.length
            ? "Initializing..."
            : "Loading..."}
        </p>

      </div>
    </div>
  );
};

export default Loader;