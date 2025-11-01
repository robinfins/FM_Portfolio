import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Byggmester G Finsådal',
      description: 'Photography, videography and profiling in collaboration with a local construction company.',
      image: '/FM_projects_card1.jpg',
      technologies: ['Photography', 'Videography', 'Social Media'],
      link: '#'
    },
    {
      id: 2,
      title: 'Sørlandet Klatresenter',
      description: 'Indoor drone photography and videography in collaboration with a climbing gym.',
      image: '/FM_projects_card2.jpg',
      technologies: ['Drone', 'Photography', 'Video Editing'],
      link: '#'
    },
    {
      id: 3,
      title: 'Motorsport',
      description: 'Photography during a sponsored motorsport event.',
      image: '/FM_projects_card3.jpg',
      technologies: ['Photography', 'Photo Editing'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of our recent creative work
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
                <div className="project-links">
                  <a href={project.link} className="btn btn-small">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="/projects" className="btn btn-primary btn-large">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
