import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 65 }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <div className="skills-container" data-aos="fade-up" data-aos-duration="1500">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" data-aos="fade-right" data-aos-delay={index * 100}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${skill.level}%`,
                    '--progress': `${skill.level}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="back-btn-container">
          <button className="back-btn" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
};

export default Skills; 