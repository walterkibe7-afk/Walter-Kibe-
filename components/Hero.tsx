import React from 'react';

const Hero: React.FC = () => {
    const scrollToPortfolio = () => {
        const portfolioSection = document.getElementById('portfolio');
        if(portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-light-text mb-4 leading-tight">
          <span className="block">Walter Kibe</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Creative Designer
          </span>
        </h1>
        <p className="text-lg md:text-xl text-medium-text max-w-2xl mx-auto mb-8">
          I craft visually stunning brand identities and compelling social media visuals that elevate your online presence.
        </p>
        <button
          onClick={scrollToPortfolio}
          className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
