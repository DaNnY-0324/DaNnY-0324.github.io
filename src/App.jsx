import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative min-h-screen">
      {/* Background layer */}
      <div className="fixed inset-0 z-[-1] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]"></div>

      {/* Content layer */}
      <div className="container mx-auto px-8 z-10 relative">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
      </div>
    </div>
  );
};

export default App;
