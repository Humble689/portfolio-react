import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  React.useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="experience">
      <div className="experience-container" data-aos="fade-up" data-aos-duration="1500">
        <h2>Experience</h2>
        <p>I have gained hands-on experience in various areas, including:</p>
        <ul>
          <li><strong>Web Development:</strong> Built responsive websites using HTML, CSS, and JavaScript.</li>
          <li><strong>Programming:</strong> Developed applications in Python, Java, and C++.</li>
          <li><strong>Team Projects:</strong> Collaborated with peers to create innovative solutions for real-world problems.</li>
          <li><strong>Problem Solving:</strong> Participated in coding competitions and hackathons to sharpen my skills.</li>
        </ul>
        <div className="back-btn-container">
          <button className="back-btn" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
};

export default Experience; 