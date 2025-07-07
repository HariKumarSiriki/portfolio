import React from 'react';
import { Code, Database, Server, Globe, BookOpen, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', icon: <Code className="w-5 h-5" />, level: 85 },
    { name: 'HTML/CSS', icon: <Globe className="w-5 h-5" />, level: 90 },
    { name: 'SQL', icon: <Database className="w-5 h-5" />, level: 80 },
    { name: 'Spring Boot', icon: <Server className="w-5 h-5" />, level: 75 },
    { name: 'JavaScript', icon: <Zap className="w-5 h-5" />, level: 85 },
    { name: 'React', icon: <BookOpen className="w-5 h-5" />, level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
                About <span className="text-teal-600">Me</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a dedicated computer science student with a passion for software development 
                and problem-solving. My journey in tech began with curiosity about how things work, 
                and has evolved into a deep commitment to creating meaningful digital experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With a strong foundation in programming languages and frameworks, I'm constantly 
                learning and adapting to new technologies. I believe in writing clean, efficient 
                code and creating solutions that make a real difference.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-teal-50 px-4 py-2 rounded-full">
                  <span className="text-teal-700 font-semibold">Problem Solver</span>
                </div>
                <div className="bg-navy-50 px-4 py-2 rounded-full">
                  <span className="text-navy-700 font-semibold">Team Player</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-gray-700 font-semibold">Quick Learner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-fade-in-right">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-teal-600 group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;