import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">Get In Touch</h2>
        <p className="text-lg text-medium-text max-w-xl mx-auto mb-8">
          I'm currently available for freelance projects. Have a project in mind? Let's talk.
        </p>
        <a 
          href="mailto:contact@walterkibe.com" 
          className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20 mb-12"
        >
          contact@walterkibe.com
        </a>
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-medium-text hover:text-brand-primary transition-colors duration-300 transform hover:scale-110"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
