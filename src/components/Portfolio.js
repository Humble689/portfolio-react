import React from 'react';
import { results } from '../data/results';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav>
        <div className="nav-container">
          <div className="logo">
            Lufene <span>Mark Travis</span>
          </div>
          <div className="links">
            <div className="link"><a href="#home">Home</a></div>
            <div className="link"><a href="#education">Education</a></div>
            <div className="link"><a href="#skills">Skills</a></div>
            <div className="link"><a href="#experience">Experience</a></div>
            <div className="link"><a href="#contact">Contact</a></div>
            <div className="link"><a href="#hobbies">Hobbies</a></div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section id="home">
        <div className="main-container">
          <div className="image">
            <img src="/travis.jpg" alt="Profile Picture" />
          </div>
          <div className="content">
            <h1>Hey, I'm <span>Travis</span></h1>
            <p>Welcome to my personal portfolio webpage! I am a Year 2 Computer Science student at Uganda Christian University (UCU) with a passion for coding, gaming, and anime. Beyond the technical side, I value creativity, teamwork, and the power of innovation to tackle real-world challenges. My goal is to build solutions that make life simpler, smarter, and more secure.</p>

            {/* Personal Details Section */}
            <h2>Personal Details</h2>
            <ul>
              <li><strong>Full Name:</strong> Lufene Mark Travis</li>
              <li><strong>Student ID:</strong> B24263</li>
              <li><strong>Course and Year:</strong> Computer Science, Year 2</li>
              <li><strong>Hobbies and Interests:</strong> Watching football (big Messi fan), anime, and gaming</li>
            </ul>

            {/* Social Media Links */}
            <div className="social-links">
              <a href="https://github.com/Humble689" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://instagram.com/i_am_humble4real" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://twitter.com/Travismark689" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
            </div>

            {/* Hire Me Button */}
            <div className="btn">
              <button className="hire-me-btn">Hire me</button>
            </div>

            {/* Links to Favorite Football Team and University */}
            <div className="home-links">
              <p><a href="https://www.fcbarcelona.com" target="_blank" rel="noopener noreferrer">My Favorite Football Team</a></p>
              <p><a href="https://ucu.ac.ug" target="_blank" rel="noopener noreferrer">Uganda Christian University</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="education-container">
          <h2>Year 1 Semester 1 Results</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Mark</th>
                  <th>Credit Units</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.courseCode}</td>
                    <td>{result.courseTitle}</td>
                    <td>{result.mark}</td>
                    <td>{result.creditUnits}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="skills-container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-name">
                <span>HTML/CSS</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <span>JavaScript</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <span>Python</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <span>Java</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <span>C++</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <span>Problem Solving</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="experience-container">
          <h2>Experience</h2>
          <p>I have gained hands-on experience in various areas, including:</p>
          <ul>
            <li><strong>Web Development:</strong> Built responsive websites using HTML, CSS, and JavaScript.</li>
            <li><strong>Programming:</strong> Developed applications in Python, Java, and C++.</li>
            <li><strong>Team Projects:</strong> Collaborated with peers to create innovative solutions for real-world problems.</li>
            <li><strong>Problem Solving:</strong> Participated in coding competitions and hackathons to sharpen my skills.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <ul>
            <li><strong>Email:</strong> lufene.mark@students.ucu.ac.ug</li>
            <li><strong>Phone:</strong> +256 700 000 000</li>
            <li><strong>Location:</strong> Kampala, Uganda</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Portfolio; 