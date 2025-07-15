import React from 'react';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Job Portal Application',
      description:
        'A job portal system developed using Spring Boot for backend and Angular for frontend. Features include job posting, applicant tracking, and advanced search functionalities.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST API'],
      image:
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Travel Management System',
      description:
        'A complete travel booking and management platform. It handles customer details, travel packages, payment integration, and booking records efficiently.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS'],
      image:
        'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
      featured: true,
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
