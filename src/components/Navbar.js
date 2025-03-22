import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1500">
          Lufene <span>Mark Travis</span>
        </div>
        <div className="links">
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <a href="#">Home</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <a href="#education">Education</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <a href="#skills">Skills</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <a href="#experience">Experience</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <a href="#contact">Contact</a>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <a href="#hobbies">Hobbies</a>
          </div>
        </div>
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} hamburg`} onClick={toggleMenu}></i>
      </div>
      <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
        <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
          <a href="#">Home</a>
        </div>
        <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <a href="#education">Education</a>
        </div>
        <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          <a href="#skills">Skills</a>
        </div>
        <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
          <a href="#experience">Experience</a>
        </div>
        <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
          <a href="#contact">Contact</a>
        </div>
        <div className="link" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
          <a href="#hobbies">Hobbies</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 