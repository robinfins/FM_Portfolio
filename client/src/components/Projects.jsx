import './Projects.css';
import websitesImg from '../assets/FM-projects-websites.webp';
import accountantAppImg from '../assets/FM-projects-accountant-app.webp';
import bachelorProjectImg from '../assets/FM-projects-bachelor-project.webp';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Astro Website',
      description: 'Built a fast, modern website for a local construction company using Astro. Combining the best of static site generation with interactive components for a lightning-fast user experience.',
      image: websitesImg,
      technologies: ['Astro', 'React', 'Tailwind CSS'],
      linkText: 'View website',
      linkUrl: 'http://finsadal.no/',
    },
    {
      id: 2,
      title: 'Accountant App',
      description: 'A purpose-built application for accountants that streamlines client management by collecting and organizing customer data through integrated APIs.',
      image: accountantAppImg,
      technologies: ['API Integration', 'Data Management', 'UI/UX'],
      linkText: 'View repository',
      linkUrl: 'https://github.com/Revisjonssenter-dev/CompanyInfoImporter',
    },
    {
      id: 3,
      title: 'Bachelor Project',
      description: 'Internship with one of Norway\'s largest IT networks, researching and developing a digital twin of a farm. The projects explores different software and hardware solutions for photogrammetry, LiDAR scanning and Gaussian Splatting.',
      image: bachelorProjectImg,
      technologies: ['LiDAR', 'Photogrammetry', 'Gaussian Splatting'],
      linkText: 'See more on LinkedIn',
      linkUrl: 'https://linkedin.com/in/robinfinsadal/',
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of recent work across development and media
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.linkUrl && (
                  <div className="project-links">
                    <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                      {project.linkText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
