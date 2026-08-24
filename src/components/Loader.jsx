import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const text = "Anshul's Portfolio";

  const [displayText, setDisplayText] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  // Generate binary columns
  const binaryColumns = Array.from({ length: 35 }, (_, column) => ({
    id: column,
    bits: Array.from({ length: 18 }, (_, bit) =>
      Math.random() > 0.5 ? "01" : "10"
    ),
  }));

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);

        const exitTimer = setTimeout(() => {
          setIsExiting(true);

          const completeTimer = setTimeout(() => {
            onComplete();
          }, 700);

          return () => clearTimeout(completeTimer);
        }, 1000);

        return () => clearTimeout(exitTimer);
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

      {/* ================================================= */}
      {/* DIGITAL GRID */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
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

      {/* ================================================= */}
      {/* BINARY RAIN */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {binaryColumns.map((column) => (
          <div
            key={column.id}
            className="absolute top-[-250px] flex flex-col font-mono text-[10px] leading-6 text-primary/20"
            style={{
              left: `${column.id * 3}%`,
              animation: `binaryFall ${
                4 + (column.id % 5)
              }s linear infinite`,
              animationDelay: `${-(column.id % 6)}s`,
            }}
          >
            {column.bits.map((bit, index) => (
              <span
                key={index}
                className={
                  index === column.bits.length - 1
                    ? "text-primary/60"
                    : ""
                }
              >
                {bit}
              </span>
            ))}
          </div>
        ))}

      </div>

      {/* ================================================= */}
      {/* CENTRAL GLOW */}
      {/* ================================================= */}

      <div
        className={`pointer-events-none absolute h-80 w-80 rounded-full bg-primary/10 blur-[100px] transition-all duration-1000 ${
          displayText.length === text.length
            ? "scale-150 opacity-100"
            : "scale-100 opacity-60"
        }`}
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 text-center">

        {/* ================================================= */}
        {/* SYSTEM LABEL */}
        {/* ================================================= */}

        <div className="mb-6 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em]">

          <span className="text-primary">
            01
          </span>

          <span className="h-px w-8 bg-primary/40" />

          <span className="text-muted">
            SYSTEM_BOOT
          </span>

          <span className="h-px w-8 bg-primary/40" />

          <span className="text-primary">
            01
          </span>

        </div>

        {/* ================================================= */}
        {/* BINARY STATUS */}
        {/* ================================================= */}

        <div className="mb-6 flex justify-center gap-2 font-mono text-[9px] text-primary/40">

          <span>01</span>
          <span>10</span>
          <span>01</span>
          <span>11</span>
          <span>00</span>
          <span>10</span>
          <span>01</span>
          <span>11</span>
          <span>01</span>

        </div>

        {/* ================================================= */}
        {/* MAIN TEXT */}
        {/* ================================================= */}

        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">

          <span className="text-primary">
            &gt;_
          </span>{" "}

          {displayText}

          <span className="ml-1 animate-pulse text-primary">
            |
          </span>

        </h1>

        {/* ================================================= */}
        {/* DIGITAL ZIGZAG */}
        {/* ================================================= */}

        <div className="mx-auto mt-8 h-8 w-64 overflow-hidden">

          <div className="relative h-full w-full">

            {/* Background */}

            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: "var(--color-border)",
                clipPath:
                  "polygon(0 50%, 8% 20%, 16% 70%, 24% 30%, 32% 80%, 40% 20%, 48% 65%, 56% 25%, 64% 75%, 72% 30%, 80% 70%, 88% 20%, 100% 50%, 100% 55%, 88% 25%, 80% 75%, 72% 35%, 64% 80%, 56% 30%, 48% 70%, 40% 25%, 32% 85%, 24% 35%, 16% 75%, 8% 25%, 0 55%)",
              }}
            />

            {/* Progress */}

            <div
              className="absolute left-0 top-0 h-full bg-primary shadow-[0_0_15px_var(--color-primary)] transition-all duration-300"
              style={{
                width: `${
                  (displayText.length / text.length) * 100
                }%`,
                clipPath:
                  "polygon(0 50%, 8% 20%, 16% 70%, 24% 30%, 32% 80%, 40% 20%, 48% 65%, 56% 25%, 64% 75%, 72% 30%, 80% 70%, 88% 20%, 100% 50%, 100% 55%, 88% 25%, 80% 75%, 72% 35%, 64% 80%, 56% 30%, 48% 70%, 40% 25%, 32% 85%, 24% 35%, 16% 75%, 8% 25%, 0 55%)",
              }}
            />

          </div>

        </div>

        {/* ================================================= */}
        {/* LOADING STATUS */}
        {/* ================================================= */}

        <div className="mt-5 font-mono text-[10px]">

          <span className="text-primary">
            &gt;
          </span>

          <span className="ml-2 text-muted">
            {displayText.length === text.length
              ? "SYSTEM INITIALIZED..."
              : "LOADING DIGITAL INTERFACE..."}
          </span>

        </div>

        {/* ================================================= */}
        {/* BINARY FOOTER */}
        {/* ================================================= */}

        <div className="mt-8 flex justify-center gap-3 font-mono text-[8px] text-primary/30">

          <span>01001001</span>
          <span>01101110</span>
          <span>01101001</span>
          <span>01110100</span>

        </div>

      </div>

      {/* ================================================= */}
      {/* INLINE ANIMATION */}
      {/* ================================================= */}

      <style>
        {`
          @keyframes binaryFall {
            0% {
              transform: translateY(-300px);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            90% {
              opacity: 0.8;
            }

            100% {
              transform: translateY(110vh);
              opacity: 0;
            }
          }
        `}
      </style>

    </div>
  );
};

export default Loader;


// import { useEffect, useState } from "react";

// const Loader = ({ onComplete }) => {
//   const text = "Anshul's Portfolio";

//   const [displayText, setDisplayText] = useState("");
//   const [isExiting, setIsExiting] = useState(false);

//   useEffect(() => {
//     let index = 0;

//     const typingInterval = setInterval(() => {
//       if (index < text.length) {
//         setDisplayText(text.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(typingInterval);

//         // Text complete hone ke baad thoda wait
//         setTimeout(() => {
//           setIsExiting(true);

//           // Exit animation complete hone ke baad portfolio show
//           setTimeout(() => {
//             onComplete();
//           }, 700);
//         }, 1000);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, [onComplete]);

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background transition-all duration-700 ${
//         isExiting
//           ? "scale-110 opacity-0"
//           : "scale-100 opacity-100"
//       }`}
//     >
//       {/* Electric Blue Glow */}
//       <div
//         className={`absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl transition-all duration-1000 ${
//           displayText.length === text.length
//             ? "scale-150 opacity-100"
//             : "scale-100 opacity-60"
//         }`}
//       />

//       {/* Content */}
//       <div className="relative text-center">

//         {/* Small top label */}
//         <p className="mb-5 font-mono text-xs uppercase tracking-[0.4em] text-muted">
//           Welcome to
//         </p>

//         {/* Main Text */}
//         <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
//           {displayText}
//           <span className="ml-1 animate-pulse text-primary">
//             |
//           </span>
//         </h1>

//         {/* Electric line
//         <div className="mx-auto mt-8 h-[2px] w-32 overflow-hidden rounded-full bg-border">
//           <div
//             className="h-full bg-primary shadow-[0_0_15px_var(--color-primary)] transition-all duration-300"
//             style={{
//               width: `${(displayText.length / text.length) * 100}%`,
//             }}
//           />
//         </div> */}
//         {/* Electric Zig-Zag Line */}
// <div className="mx-auto mt-8 h-8 w-64 overflow-hidden">
//   <div className="relative h-full w-full">
//     {/* Background zig-zag */}
//     <div
//       className="absolute inset-0 opacity-20"
//       style={{
//         background: "var(--color-border)",
//         clipPath:
//           "polygon(0 50%, 8% 20%, 16% 70%, 24% 30%, 32% 80%, 40% 20%, 48% 65%, 56% 25%, 64% 75%, 72% 30%, 80% 70%, 88% 20%, 100% 50%, 100% 55%, 88% 25%, 80% 75%, 72% 35%, 64% 80%, 56% 30%, 48% 70%, 40% 25%, 32% 85%, 24% 35%, 16% 75%, 8% 25%, 0 55%)",
//       }}
//     />

//     {/* Animated progress */}
//     <div
//       className="absolute left-0 top-0 h-full bg-primary shadow-[0_0_15px_var(--color-primary)] transition-all duration-300"
//       style={{
//         width: `${(displayText.length / text.length) * 100}%`,
//         clipPath:
//           "polygon(0 50%, 8% 20%, 16% 70%, 24% 30%, 32% 80%, 40% 20%, 48% 65%, 56% 25%, 64% 75%, 72% 30%, 80% 70%, 88% 20%, 100% 50%, 100% 55%, 88% 25%, 80% 75%, 72% 35%, 64% 80%, 56% 30%, 48% 70%, 40% 25%, 32% 85%, 24% 35%, 16% 75%, 8% 25%, 0 55%)",
//       }}
//     />
//   </div>
// </div>

//         {/* Loading text */}
//         <p className="mt-4 font-mono text-xs text-muted">
//           {displayText.length === text.length
//             ? "Initializing..."
//             : "Loading..."}
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Loader;