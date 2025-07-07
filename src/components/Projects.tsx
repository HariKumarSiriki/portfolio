import React from 'react';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Spring Boot and React. Features include user authentication, product catalog, shopping cart, and secure payment processing.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'JWT', 'Stripe API'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'An intuitive project management tool with real-time collaboration features. Built with modern web technologies and responsive design principles.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Analytics App',
      description: 'A comprehensive weather tracking application with data visualization and forecasting. Integrates multiple weather APIs for accurate predictions.',
      technologies: ['Java', 'Spring Boot', 'Chart.js', 'Weather API', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const getTechIcon = (tech: string) => {
    if (tech.includes('Java') || tech.includes('Spring')) return <Code className="w-4 h-4" />;
    if (tech.includes('SQL') || tech.includes('MongoDB')) return <Database className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            My <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 animate-fade-in-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-navy-800 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;