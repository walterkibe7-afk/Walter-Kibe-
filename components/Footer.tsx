import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg py-6">
      <div className="container mx-auto px-6 text-center text-medium-text">
        <p>&copy; {currentYear} Walter Kibe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
