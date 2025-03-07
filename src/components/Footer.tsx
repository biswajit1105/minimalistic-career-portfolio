
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-accent-foreground">
              © {new Date().getFullYear()} Biswajit Mandal. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/biswajit1105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/biswajit-mandal-6659111aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:biswajitmandal012345@gmail.com"
              className="text-accent-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
