import React from 'react';
import agencidevLogo from '../../assets/images/agencidev-logo-small.png';

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
          <img src={agencidevLogo} alt="Agencidev" />
        </a>
      </div>
      <nav className="nav-links scroll-animate-right">
        <a href="#">CAREERS</a>
        <a href="https://tally.so/r/mZD1Az">CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar;