import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import Loader from "./components/Loader.jsx";
import { useState } from "react";

import { useCallback } from "react";



function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Intro Animation */}
      {loading && (
        <Loader onComplete={handleLoadingComplete} />
      )}

      {/* Portfolio */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}

export default App;

