import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-teal-400">Hari Kumar </span>Siriki
            </div>
            <p className="text-gray-400">
              Aspiring Software Developer passionate about creating innovative solutions 
              and building amazing user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HariKumarSiriki"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-teal-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harikumarsiriki/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-teal-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hkumarsiriki@email.com"
                className="bg-gray-800 hover:bg-teal-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Hari Kumar . Made with <Heart size={16} className="text-red-500" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
