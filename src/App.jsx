import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TeachingGallery from './components/TeachingGallery';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      <div className="top-marquee" aria-label="Announcements">
        <div className="marquee-track">
          <span>Call me directly for 1:1 sessions in C, Java, Python, DSA, and Web Development. 📞 7794822802</span>
          <span>Call me directly if you're interested in hiring me for your company.</span>
        </div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <TeachingGallery />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
