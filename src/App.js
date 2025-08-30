import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import BrandSlider from './components/sections/BrandSlider';
import RecentClients from './components/sections/RecentClients';
import AIProductDesign from './components/sections/AIProductDesign';
import DesignShowcase from './components/sections/DesignShowcase';
import BeliefSection from './components/sections/BeliefSection';
import FAQSection from './components/sections/FAQSection';
import Footer from './components/layout/Footer';


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showRestOfPage, setShowRestOfPage] = useState(false);

  const transitionToSlide = useCallback((targetSlide) => {
    if (isTransitioning || targetSlide === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(targetSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning, currentSlide]);

  const showRestOfPageContent = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowRestOfPage(true);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  const hideRestOfPageContent = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowRestOfPage(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

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
  }, [currentSlide, showRestOfPage, hideRestOfPageContent, showRestOfPageContent, transitionToSlide]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) return;
      
      if (showRestOfPage) {
        const restOfPageElement = document.querySelector('.rest-of-page');
        if (restOfPageElement) {
          const scrollTop = restOfPageElement.scrollTop;
          
          if (e.deltaY < 0 && scrollTop <= 10) {
            e.preventDefault();
            hideRestOfPageContent();
          }
        }
      } else {
        e.preventDefault();
        
        if (e.deltaY > 0 && currentSlide === 0) {
          transitionToSlide(1);
        } else if (e.deltaY > 0 && currentSlide === 1) {
          showRestOfPageContent();
        } else if (e.deltaY < 0 && currentSlide === 1) {
          transitionToSlide(0);
        }
      }
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isTransitioning, showRestOfPage, hideRestOfPageContent, showRestOfPageContent, transitionToSlide]);

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
        {/* <PortfolioGallery /> */}
        <BeliefSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
