import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg text-light-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
