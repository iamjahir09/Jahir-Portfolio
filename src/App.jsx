import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Skills from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Light Effect - Complete Website */}
      <BackgroundEffect />
      <CustomCursor />
      
      {/* Content - z-index se background ke upar */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />  {/* Naya section - Hero ke neeche */}
          <About />
          <Projects />
          <Certifications />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;