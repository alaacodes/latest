import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandSlider from './components/BrandSlider';
import RecentClients from './components/RecentClients';
import AIProductDesign from './components/AIProductDesign';
import DesignShowcase from './components/DesignShowcase';
import PortfolioGallery from './components/PortfolioGallery';
import BeliefSection from './components/BeliefSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showRestOfPage, setShowRestOfPage] = useState(false);

  // Handle slide transitions
  const transitionToSlide = (targetSlide) => {
    if (isTransitioning || targetSlide === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(targetSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Show rest of page
  const showRestOfPageContent = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowRestOfPage(true);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Hide rest of page and return to slider
  const hideRestOfPageContent = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowRestOfPage(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showRestOfPage) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          hideRestOfPageContent();
        }
      } else {
        if (e.key === 'ArrowDown' && currentSlide === 0) {
          e.preventDefault();
          transitionToSlide(1);
        } else if (e.key === 'ArrowDown' && currentSlide === 1) {
          e.preventDefault();
          showRestOfPageContent();
        } else if (e.key === 'ArrowUp' && currentSlide === 1) {
          e.preventDefault();
          transitionToSlide(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showRestOfPage]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) return;
      
      if (showRestOfPage) {
        // Get the rest-of-page element to check scroll position
        const restOfPageElement = document.querySelector('.rest-of-page');
        if (restOfPageElement) {
          const scrollTop = restOfPageElement.scrollTop;
          
          // Only return to slider if scrolling up AND at the very top of the content
          if (e.deltaY < 0 && scrollTop <= 10) {
            e.preventDefault();
            hideRestOfPageContent();
          }
          // Allow natural scrolling for all other cases
        }
      } else {
        // Prevent default scroll behavior only for slider navigation
        e.preventDefault();
        
        if (e.deltaY > 0 && currentSlide === 0) {
          // Scrolling down - go to slide 1 (slide in from right)
          transitionToSlide(1);
        } else if (e.deltaY > 0 && currentSlide === 1) {
          // Scrolling down from slide 1 - show rest of page
          showRestOfPageContent();
        } else if (e.deltaY < 0 && currentSlide === 1) {
          // Scrolling up - go to slide 0 (slide in from left)
          transitionToSlide(0);
        }
      }
    };
  
    // Use passive: false to allow preventDefault when needed
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isTransitioning, showRestOfPage]);

  return (
    <div className="App">
      <Navbar currentSlide={currentSlide} />
      
      <div className="main-content">
        <div className={`slide-container ${showRestOfPage ? 'hide-slider' : ''}`}>
          <Hero isActive={currentSlide === 0} />
          <BrandSlider isActive={currentSlide === 1} />
        </div>
        
        {/* Slide Navigation Indicators - hide when showing rest of page */}
        {!showRestOfPage && (
          <div className="slide-indicators">
            <div 
              className={`indicator ${currentSlide === 0 ? 'active' : ''}`}
              onClick={() => transitionToSlide(0)}
            />
            <div 
              className={`indicator ${currentSlide === 1 ? 'active' : ''}`}
              onClick={() => transitionToSlide(1)}
            />
          </div>
        )}
      </div>
      
      {/* Rest of page content */}
      <div className={`rest-of-page ${showRestOfPage ? 'show' : ''}`}>
        <RecentClients />
        <AIProductDesign />
        <DesignShowcase />
        <PortfolioGallery />
        <BeliefSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
