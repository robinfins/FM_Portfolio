import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const orbRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (orbRef.current && heroRef.current) {
        const hero = heroRef.current;
        const rect = hero.getBoundingClientRect();

        // Calculate mouse position relative to center of hero section
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate offset from center (opposite direction, with reduced movement)
        const offsetX = (centerX - mouseX) * 0.1; // 10% movement
        const offsetY = (centerY - mouseY) * 0.1;

        // Apply transform to move orb slightly opposite to mouse
        orbRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      }
    };

    const handleScroll = () => {
      if (heroRef.current && contentRef.current) {
        const scrolled = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;

        // Only apply parallax while hero is visible
        if (scrolled < heroHeight) {
          // Parallax effect: content moves slower than scroll
          const contentOffset = scrolled * 0.5;
          contentRef.current.style.transform = `translateY(${contentOffset}px)`;

          // Fade out effect as user scrolls
          const opacity = 1 - (scrolled / heroHeight) * 1.5;
          contentRef.current.style.opacity = Math.max(0, opacity);

          // Scale and blur the background slightly
          const scale = 1 + (scrolled / heroHeight) * 0.1;
          heroRef.current.style.transform = `scale(${scale})`;
        }
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="interactive-orb" ref={orbRef}></div>
      <div className="container">
        <div className="hero-content" ref={contentRef}>
          <h1 className="hero-title">
            Elevate your brand today
          </h1>
          <p className="hero-subtitle">
            We help create compelling visual stories through photography & videography
            <br></br>Tell the world <strong>your story</strong> today
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
