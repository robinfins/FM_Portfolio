import { useEffect, useRef } from 'react';
import './Services.css';

function Services() {
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Photography & Videography',
      description: 'Professional photo and video production for events, products, and brand storytelling. High-quality content that captures your vision.',
      icon: '📸',
      link: '/services/photography',
      bgImage: '/FM_services_card1.jpg'
    },
    {
      id: 2,
      title: 'Aerial Drone Services',
      description: 'Stunning aerial photography and videography using advanced drone technology. Perfect for real estate, events, and landscapes.',
      icon: '🚁',
      link: '/services/drone',
      bgImage: '/FM_services_card2.jpg'
    },
    {
      id: 3,
      title: 'Video Editing & Post-Production',
      description: 'Expert video editing, color grading, and post-production services. Transform raw footage into polished, professional content.',
      icon: '🎬',
      link: '/services/editing',
      bgImage: '/FM_services_card3.jpg'
    },
    {
      id: 4,
      title: 'User Generated Content (UGC)',
      description: 'Authentic, engaging content created for social media platforms. Boost your brand with relatable, scroll-stopping UGC.',
      icon: '📱',
      link: '/services/ugc',
      bgImage: '/FM_services_card4.jpg'
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
          Comprehensive media solutions tailored to your needs
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
                <a href={service.link} className="btn btn-primary service-btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
