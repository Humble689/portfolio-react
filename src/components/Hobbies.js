import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hobbyVideo from '../assets/hobby.mp4';

const Hobbies = () => {
  React.useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hobbies">
      <div className="hobbies-container" data-aos="fade-up" data-aos-duration="1500">
        <h2 style={{ color: '#077b32' }}>My Hobbies</h2>
        <p>Here are some of my favorite hobbies and interests:</p>
        <ul>
          <li><strong>Anime:</strong> I love watching anime, especially action and adventure genres. Some of my favorites include <em>Naruto</em>, <em>Attack on Titan</em>, and <em>Demon Slayer</em>.</li>
          <li><strong>COD Mobile:</strong> I enjoy playing Call of Duty Mobile in my free time. It's a great way to relax and compete with friends.</li>
          <li><strong>Coding:</strong> I spend a lot of time coding and building projects. It's both a hobby and a passion for me.</li>
          <li><strong>Football:</strong> I'm a huge fan of football, and Messi is my all-time favorite player. I also enjoy playing football with friends.</li>
        </ul>
        <div className="video-slot">
          <h3>Check out my hobby video:</h3>
          <video width="560" height="315" controls>
            <source src={hobbyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Alternatively, you can watch a <a href="https://www.youtube.com/embed/5Dbc01VIXgo?controls=1" target="_blank" rel="noopener noreferrer">YouTube video of my hobby</a>.</p>
        </div>
        <div className="back-btn-container">
          <button className="back-btn" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
};

export default Hobbies; 