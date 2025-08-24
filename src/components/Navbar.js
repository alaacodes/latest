import React, { useState, useEffect } from 'react';

const Navbar = ({ currentSlide }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || currentSlide === 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  return (
    <header className={`navbar ${
      isScrolled ? 'scrolled' : ''
    } ${
      currentSlide === 1 ? 'in-brand-section' : ''
    }`}>
      <div className="logo scroll-animate-left">
        <a href="/">
          <img src="/agencidev-logo-small.png" alt="Agencidev" />
        </a>
      </div>
      <div className="tagline scroll-animate">
        AN AI PRODUCT DESIGN AND BUILD AGENCY
      </div>
      <nav className="nav-links scroll-animate-right">
        <a href="#">[CAREERS]</a>
        <a href="https://tally.so/r/mZD1Az">[CONTACT]</a>
      </nav>
    </header>
  );
};

export default Navbar;