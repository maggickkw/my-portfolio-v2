import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import Hero from "components/Hero";
import LiveSignals from "components/LiveSignals";
import About from "components/About";
import Projects from "components/Projects";
import Contact from "components/Contact";
import Footer from "components/Footer";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-base-900 relative">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(650px at ${mousePosition.x}px ${mousePosition.y}px, rgba(107, 140, 199, 0.04), transparent 80%)`,
        }}
      />
      <div className="relative z-10">
        <Nav />
        <main className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
          <Hero />
          <LiveSignals />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
