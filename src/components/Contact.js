import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  React.useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact">
      <div className="contact-container" data-aos="fade-up" data-aos-duration="1500">
        <h2>Contact Me</h2>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:marktravis689@gmail.com">marktravis689@gmail.com</a></li>
          <li><strong>Phone:</strong> 0761091666</li>
        </ul>
        <div className="back-btn-container">
          <button className="back-btn" onClick={scrollToTop}>Back to Top</button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 