/*import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    console.log('App mounted, isAuthenticated:', isAuthenticated);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }

    // Initialize scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, [isAuthenticated]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', !isLightMode ? 'light' : 'dark');
  };

  const handleLogin = () => {
    console.log('Login attempted');
    setIsAuthenticated(true);
    console.log('isAuthenticated set to true');
  };

  console.log('Current render state:', { isAuthenticated, isLightMode });

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="authenticated-content">
          <div className="scroll-progress"></div>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`fas ${isLightMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <Navbar />
          <main className="main-content">
            <Hero />
            <Education />
            <Skills />
            <Experience />
            <Contact />
            <Hobbies />
          </main>
        </div>
      )}
    </div>
  );
}

export default App; 