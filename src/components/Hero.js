import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/travis.jpg';

const Hero = () => {
  React.useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <section>
      <div className="main-container">
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
          <img src={profileImage} alt="Profile Picture" style={{ maxWidth: '300px', width: '100%' }} />
        </div>
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
            Hey, I'm <span>Travis</span>
          </h1>
          <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
            Welcome to my personal portfolio webpage! I am a Year 2 Computer Science student at Uganda Christian University (UCU) with a passion for coding, gaming, and anime. Beyond the technical side, I value creativity, teamwork, and the power of innovation to tackle real-world challenges. My goal is to build solutions that make life simpler, smarter, and more secure.
          </p>

          <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1300">Personal Details</h2>
          <ul data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1400">
            <li><strong>Full Name:</strong> Lufene Mark Travis</li>
            <li><strong>Student ID:</strong> B24263</li>
            <li><strong>Course and Year:</strong> Computer Science, Year 2</li>
            <li><strong>Hobbies and Interests:</strong> Watching football (big Messi fan), anime, and gaming</li>
          </ul>

          <div className="social-links" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">
            <a href="https://github.com/Humble689" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://instagram.com/i_am_humble4real" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Travismark689" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

          <div className="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
            <button className="hire-me-btn">Hire me</button>
          </div>

          <div className="home-links" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2000">
            <p><a href="https://www.fcbarcelona.com" target="_blank" rel="noopener noreferrer">My Favorite Football Team</a></p>
            <p><a href="https://ucu.ac.ug" target="_blank" rel="noopener noreferrer">Uganda Christian University</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 