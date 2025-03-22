import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML/CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'Python', percentage: 80 },
  { name: 'Java', percentage: 75 },
  { name: 'C++', percentage: 70 },
  { name: 'Problem Solving', percentage: 85 }
];

const Skills = () => {
  React.useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="skills">
      <div className="skills-container" data-aos="fade-up" data-aos-duration="1500">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="skill-name">
                <span>{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ '--progress': `${skill.percentage}%` }}></div>
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