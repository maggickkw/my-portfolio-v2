import Nav from "components/Nav";
import Hero from "components/Hero";
import About from "components/About";
import Projects from "components/Projects";
import Contact from "components/Contact";
import Footer from "components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-mesh relative overflow-x-hidden">
      {/* Subtle gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-accent/[0.02] blur-3xl -top-96 -right-96" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary/[0.02] blur-3xl bottom-0 -left-48" />
      </div>
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 noise pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
