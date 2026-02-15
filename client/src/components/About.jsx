import { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div
        className="about-gradient-orb"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`
        }}
      ></div>

      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Finsadal Media</h2>
          <p className="about-intro">
            Building digital solutions and creative content that help businesses grow
          </p>
        </div>

        <div className="about-story-section">
          <p className="about-description">
            Based in the Kristiansand region, Finsadal Media delivers end-to-end digital services
            that help businesses establish and grow their online presence. From custom websites and applications
            to professional video and photo editing, I combine technical skill with creative thinking
            to deliver results that stand out.
          </p>
          <p className="about-description">
            My mission is to provide reliable, high-quality digital solutions that help businesses
            reach their goals and connect with their audience.
          </p>
        </div>

        <div className="about-profile">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img
                src="/FM_about_RobinFinsådal.jpg"
                alt="Robin Finsådal"
                className="profile-image"
              />
              <div className="profile-image-overlay"></div>
            </div>
          </div>

          <div className="profile-info">
            <h3 className="profile-name">Robin Finsådal</h3>
            <p className="profile-title">Founder & Developer</p>
            <div className="profile-details">
              <p>
                With a passion for technology and a background in both development and media production,
                I founded Finsadal Media to help businesses succeed in the digital space.
              </p>
              <p>
                Whether it's building a website, developing an app, or editing video and photo content,
                I bring dedication and attention to detail to every project.
              </p>
            </div>
            <div className="profile-skills">
              <span className="skill-badge">Web Development</span>
              <span className="skill-badge">App Development</span>
              <span className="skill-badge">Video Editing</span>
              <span className="skill-badge">Photo Editing</span>
              <span className="skill-badge">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
