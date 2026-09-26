import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NeuralBackground from "./components/NeuralBackground";
import DownloadCVButton from "./components/DownloadCVButton";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <NeuralBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
      <DownloadCVButton />
    </div>
  );
}