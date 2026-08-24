import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Anshul Singh",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Problem Solver",
    "Software Developer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentText.substring(0, displayText.length + 1)
        );

        if (displayText === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setDisplayText(
          currentText.substring(0, displayText.length - 1)
        );

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
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20"
    >
      {/* ================================================= */}
      {/* DIGITAL BACKGROUND */}
      {/* ================================================= */}

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Main Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      {/* Side glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />

      {/* ================================================= */}
      {/* TOP DIGITAL LINE */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="relative">

          {/* System label */}
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />

            <span>
              system://portfolio
            </span>

            <span className="text-muted">
              [online]
            </span>
          </div>

          {/* Terminal greeting */}
          <p className="mb-5 font-mono text-sm text-primary">
            <span className="text-muted">01</span>{" "}
            <span className="text-primary">&gt;</span>{" "}
            initializing developer...
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">

            I'm{" "}

            <span className="relative inline-block text-primary [text-shadow:0_0_25px_rgba(59,130,246,0.35)]">

              {displayText}

              <span className="ml-1 inline-block animate-pulse text-foreground">
                |
              </span>

            </span>

          </h1>

          {/* Digital divider */}
          <div className="mt-7 flex items-center gap-3">

            <span className="h-px w-16 bg-primary shadow-[0_0_8px_var(--color-primary)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              full_stack.exe
            </span>

          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            I build modern, scalable and interactive web applications
            using{" "}
            <span className="text-foreground">JavaScript</span>,{" "}
            <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Node.js</span> and{" "}
            <span className="text-foreground">MongoDB</span>.
          </p>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div className="mt-8 flex flex-wrap gap-4">

            {/* Primary CTA */}
            <a
              href="#projects"
              className="group relative overflow-hidden border border-primary/60 bg-primary/10 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:text-primary-hover hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            >

              {/* Corner */}
              <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary" />
              <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary" />
              <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary" />
              <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary" />

              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

              <span className="relative z-10">
                &gt; View Projects
              </span>

            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="group border border-border bg-surface px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-surface-light hover:text-primary-hover"
            >
              <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                &gt;{" "}
              </span>

              Contact Me
            </a>

          </div>

          {/* ================================================= */}
          {/* SOCIAL LINKS */}
          {/* ================================================= */}

          <div className="mt-8 flex items-center gap-6 font-mono text-xs">

            <span className="text-muted">
              connect://
            </span>

            <a
              href="https://github.com/anshul1768"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_10px_rgba(59,130,246,0.5)]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/anshul-singh-9bb796282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_10px_rgba(59,130,246,0.5)]"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE - CODE TERMINAL */}
        {/* ================================================= */}

        <div className="hidden justify-center lg:flex">

          <div className="relative w-full max-w-lg">

            {/* Outer glow */}
            <div className="absolute -inset-2 bg-primary/10 blur-2xl" />

            {/* Terminal */}
            <div className="relative overflow-hidden border border-primary/30 bg-surface shadow-[0_0_50px_rgba(59,130,246,0.08)]">

              {/* ================================================= */}
              {/* TERMINAL HEADER */}
              {/* ================================================= */}

              <div className="flex items-center justify-between border-b border-border bg-surface-light px-5 py-3">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />

                  <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />

                  <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />

                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  developer.js
                </span>

                <span className="font-mono text-[9px] text-primary">
                  v1.0.0
                </span>

              </div>

              {/* ================================================= */}
              {/* TERMINAL BODY */}
              {/* ================================================= */}

              <div className="p-6">

                {/* Terminal command */}
                <div className="mb-5 font-mono text-xs text-muted">

                  <span className="text-primary">
                    anshul@dev
                  </span>

                  <span className="text-muted">
                    :~$
                  </span>

                  <span className="ml-2 text-foreground">
                    cat developer.json
                  </span>

                </div>

                {/* Code */}
                <pre className="overflow-hidden font-mono text-xs leading-7 sm:text-sm">
                  <code>

                    <span className="text-muted">
                      {"{"}
                    </span>
                    {"\n"}

                    <span className="text-primary">
                      {"  "}
                      "name"
                    </span>

                    <span className="text-muted">
                      :{" "}
                    </span>

                    <span className="text-foreground">
                      "Anshul Singh"
                    </span>
                    ,
                    {"\n"}

                    <span className="text-primary">
                      {"  "}
                      "role"
                    </span>

                    <span className="text-muted">
                      :{" "}
                    </span>

                    <span className="text-foreground">
                      "Full Stack Developer"
                    </span>
                    ,
                    {"\n"}

                    <span className="text-primary">
                      {"  "}
                      "stack"
                    </span>

                    <span className="text-muted">
                      : [
                    </span>
                    {"\n"}

                    <span className="text-foreground">
                      {"    "}
                      "React",
                    </span>
                    {"\n"}

                    <span className="text-foreground">
                      {"    "}
                      "Node.js",
                    </span>
                    {"\n"}

                    <span className="text-foreground">
                      {"    "}
                      "Express",
                    </span>
                    {"\n"}

                    <span className="text-foreground">
                      {"    "}
                      "MongoDB"
                    </span>
                    {"\n"}

                    <span className="text-muted">
                      {"  "}]
                    </span>
                    ,
                    {"\n"}

                    <span className="text-primary">
                      {"  "}
                      "focus"
                    </span>

                    <span className="text-muted">
                      :{" "}
                    </span>

                    <span className="text-foreground">
                      "Scalable Systems"
                    </span>
                    ,
                    {"\n"}

                    <span className="text-primary">
                      {"  "}
                      "status"
                    </span>

                    <span className="text-muted">
                      :{" "}
                    </span>

                    <span className="text-primary">
                      "AVAILABLE"
                    </span>
                    {"\n"}

                    <span className="text-muted">
                      {"}"}
                    </span>

                  </code>
                </pre>

                {/* ================================================= */}
                {/* TERMINAL FOOTER */}
                {/* ================================================= */}

                <div className="mt-6 border-t border-border pt-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2 font-mono text-xs">

                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

                      <span className="text-primary">
                        SYSTEM READY
                      </span>

                    </div>

                    <span className="font-mono text-[9px] text-muted">
                      100%
                    </span>

                  </div>

                  {/* Progress line */}
                  <div className="mt-3 h-px w-full bg-border">

                    <div className="h-px w-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />

                  </div>

                  <p className="mt-3 font-mono text-[10px] text-muted">
                    &gt; Available for opportunities_
                  </p>

                </div>

              </div>

            </div>

            {/* Floating status */}
            <div className="absolute -bottom-5 -right-5 hidden border border-primary/30 bg-surface px-4 py-3 shadow-[0_0_20px_rgba(59,130,246,0.15)] sm:block">

              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />

                <span className="text-muted">
                  system
                </span>

                <span className="text-primary">
                  online
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* BOTTOM SCROLL INDICATOR */}
      {/* ================================================= */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted md:flex">

        <span>
          scroll_down
        </span>

        <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />

      </div>

    </section>
  );
};

export default Hero;


// import { useEffect, useState } from "react";

// const Hero = () => {
//   const texts = [
//     "Anshul Singh",
//     "Full Stack Developer",
//     "MERN Stack Developer",
//     "Problem Solver",
//     "Software Developer"
//   ];

//   const [textIndex, setTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentText = texts[textIndex];

//     const speed = isDeleting ? 60 : 100;

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayText(currentText.substring(0, displayText.length + 1));

//         if (displayText === currentText) {
//           setTimeout(() => {
//             setIsDeleting(true);
//           }, 1500);
//         }
//       } else {
//         setDisplayText(currentText.substring(0, displayText.length - 1));

//         if (displayText === "") {
//           setIsDeleting(false);
//           setTextIndex((prev) => (prev + 1) % texts.length);
//         }
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, textIndex]);

//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center overflow-hidden pt-20"
//     >
//       <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

//       <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

//         {/* LEFT */}
//         <div>

//           <p className="mb-5 font-mono text-sm text-primary">
//             &lt;Namaste World /&gt;
//           </p>

//           <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
//             I'm{" "}
//             <span className="text-primary">
//               {displayText}
//               <span className="ml-1 inline-block animate-pulse text-foreground">
//                 |
//               </span>
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
//             I build modern, scalable and interactive web applications
//             using JavaScript, React, Node.js and MongoDB.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">

//             <a
//               href="#projects"
//               className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground transition hover:border-primary/50 hover:bg-surface-light"
//             >
//               Contact Me
//             </a>

//           </div>

//           <div className="mt-8 flex gap-6 text-sm text-muted">

//             <a
//               href="https://github.com/anshul1768"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition hover:text-primary"
//             >
//               GitHub ↗
//             </a>

//             <a
//               href="https://www.linkedin.com/in/anshul-singh-9bb796282"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition hover:text-primary"
//             >
//               LinkedIn ↗
//             </a>

//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden justify-center lg:flex">

//           <div className="relative w-full max-w-md">

//             <div className="absolute -inset-1 rounded-3xl bg-primary/20 blur-xl" />

//             <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-2xl">

//               <div className="mb-6 flex items-center gap-2">
//                 <span className="h-3 w-3 rounded-full bg-red-400/70" />
//                 <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
//                 <span className="h-3 w-3 rounded-full bg-green-400/70" />
//               </div>

//               <pre className="overflow-hidden font-mono text-sm leading-7 text-muted">
//                 <code>
// {`const developer = {
//   name: "Anshul Singh",
//   role: "Full Stack Developer",

//   skills: [
//     "React",
//     "Node.js",
//     "Express",
//     "MongoDB"
//   ],

//   passion: "Building products",

//   available: true
// };`}
//                 </code>
//               </pre>

//               <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 font-mono text-xs text-primary">
//                 <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
//                 Available for opportunities
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;