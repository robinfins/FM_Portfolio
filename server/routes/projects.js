import express from 'express';

const router = express.Router();

// Sample project data (you can later move this to a database)
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with React and Node.js',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'E-commerce platform with payment integration',
    image: '/images/project2.jpg',
    technologies: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/project2'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Mobile-responsive portfolio website',
    image: '/images/project3.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/project3'
  }
];

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
  res.json({ success: true, projects });
});

// GET /api/projects/:id - Get single project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));

  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }

  res.json({ success: true, project });
});

export default router;
