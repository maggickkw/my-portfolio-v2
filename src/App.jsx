import Nav from "components/Nav";
import Hero from "components/Hero";
import About from "components/About";
import Projects from "components/Projects";
import Contact from "components/Contact";
import Footer from "components/Footer";

function App() {
  return (
    <div className="scroll-smooth dark:bg-black max-w-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
