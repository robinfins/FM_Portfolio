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
            Creating compelling visual stories that elevate brands and captivate audiences
          </p>
        </div>

        <div className="about-story-section">
          <p className="about-description">
            Based in the Kristiansand region, Finsadal Media specializes in creating compelling visual content
            that elevates brands in the digital landscape. We combine technical expertise with creative storytelling
            to produce stunning photography, cinematic videography, and engaging social media content.
          </p>
          <p className="about-description">
            Our mission is to showcase the power of visual media and help businesses increase their visibility
            through professional content creation.
          </p>
        </div>

        <div className="about-profile">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img
                src="/src/assets/FM_about_RobinFinsådal.jpg"
                alt="Robin Finsådal"
                className="profile-image"
              />
              <div className="profile-image-overlay"></div>
            </div>
          </div>

          <div className="profile-info">
            <h3 className="profile-name">Robin Finsådal</h3>
            <p className="profile-title">Founder & Creative Director</p>
            <div className="profile-details">
              <p>
                With a passion for visual storytelling and years of experience in content creation,
                I founded Finsadal Media to help businesses tell their stories through compelling visuals.
              </p>
              <p>
                From drone cinematography to social media content, I bring a unique perspective and
                technical expertise to every project, ensuring your brand stands out in the digital landscape.
              </p>
            </div>
            <div className="profile-skills">
              <span className="skill-badge">Photography</span>
              <span className="skill-badge">Videography</span>
              <span className="skill-badge">Drone Pilot</span>
              <span className="skill-badge">Video Editing</span>
              <span className="skill-badge">Content Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
