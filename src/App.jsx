import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="relative bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
