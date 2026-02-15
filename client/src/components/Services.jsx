import { useEffect, useRef } from 'react';
import './Services.css';
import webDevImg from '../assets/FM-services-web-development.webp';
import appDevImg from '../assets/FM-services-app-development.webp';
import postProdImg from '../assets/FM-services-post-production.webp';

function Services() {
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom-built websites tailored to your brand and goals. From sleek landing pages to full-scale platforms, I deliver fast, responsive, and modern web experiences that leave a lasting impression.',
      icon: '💻',
      link: '/services/web-development',
      bgImage: webDevImg
    },
    {
      id: 2,
      title: 'App Development',
      description: 'Turning ideas into intuitive mobile and desktop applications. I build polished, user-friendly apps designed to solve real problems and scale with your business.',
      icon: '📱',
      link: '/services/app-development',
      bgImage: appDevImg
    },
    {
      id: 3,
      title: 'Post Production',
      description: 'Professional video and photo editing that brings your content to life. Whether it is color grading, motion graphics, retouching, or compositing, I refine your raw footage into polished, share-ready media.',
      icon: '🎬',
      link: '/services/post-production',
      bgImage: postProdImg
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;

          if (isVisible) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-bg-effect"></div>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Digital solutions tailored to your needs
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              <div className="service-card-overlay"></div>
              <div className="service-card-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
