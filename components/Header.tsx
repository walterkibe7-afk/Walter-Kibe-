import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider text-white">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            W<span className="text-brand-primary">K</span>.
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className="text-medium-text hover:text-light-text transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
        >
          Hire Me
        </button>
        {/* Mobile menu button can be added here */}
      </div>
    </header>
  );
};

export default Header;
