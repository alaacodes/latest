import React, { useState, useRef, useEffect } from 'react';
import agd1Video from '../../assets/videos/agd1.mp4';
import agd2Video from '../../assets/videos/agd2.mp4';

const BrandSlider = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderBgRef = useRef(null);
  const backgroundVideos = useRef([]);

  const brandData = [
    {
      title: 'AdEngine',
      bg: agd1Video,
      // caption: '+$5K MRR in 4 months for AdEngine'
    },
    {
      title: 'Giulia Gierrieri',
      bg: agd2Video,
      // caption: 'Podcast design strategy for Giulia Gierrieri'
    },
    {
      title: 'ClientAcquisition.io',
      bg: agd1Video,
      // caption: '+$12K in 30 days for ClientAcquisition.io'
    }
  ];

  // Create background videos
  useEffect(() => {
    if (!sliderBgRef.current) return;

    sliderBgRef.current.innerHTML = '';
    backgroundVideos.current = [];

    brandData.forEach((item, index) => {
      const video = document.createElement('video');
      video.src = item.bg;
      video.className = 'bg-image';
      video.style.opacity = index === 0 ? '1' : '0';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      video.addEventListener('loadeddata', () => {
        video.play().catch(e => console.log('Video autoplay prevented:', e));
      });

      sliderBgRef.current.appendChild(video);
      backgroundVideos.current.push(video);
    });
  }, []);

  // Update active slide
  const updateActiveSlide = (index) => {
    if (index < 0 || index >= brandData.length) return;
    
    setActiveIndex(index);
    
    // Update background videos
    backgroundVideos.current.forEach((video, i) => {
      video.style.opacity = i === index ? '1' : '0';
      if (i === index) {
        video.play().catch(e => console.log('Video play failed:', e));
      }
    });
  };

  // Keyboard navigation for brand items
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isActive) return;
      
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        e.preventDefault();
        updateActiveSlide(activeIndex - 1);
      } else if (e.key === 'ArrowRight' && activeIndex < brandData.length - 1) {
        e.preventDefault();
        updateActiveSlide(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, activeIndex]);

  // Add scroll animation effect
  useEffect(() => {
    if (isActive) {
      const elements = document.querySelectorAll('.brand-slider .scroll-animate, .brand-slider .scroll-animate-left, .brand-slider .scroll-animate-right');
      
      setTimeout(() => {
        elements.forEach(el => {
          el.classList.add('animate-in');
        });
      }, 100);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      const brandItems = document.querySelectorAll('.brand-slider .brand-item');
      const brandStats = document.querySelector('.brand-slider .scroll-animate-right');
      
      // Animate brand items with staggered delay - sliding from right
      brandItems.forEach((item, index) => {
        // Set initial state
        item.style.transform = 'translateX(50px)';
        item.style.opacity = '0';
        
        setTimeout(() => {
          item.style.transform = 'translateX(0)';
          item.style.opacity = index === activeIndex ? '1' : '0.7';
        }, index * 100 + 200);
      });
      
      // Animate brand stats
      if (brandStats) {
        setTimeout(() => {
          brandStats.classList.add('animate-in');
        }, 500);
      }
    }
  }, [isActive, activeIndex]);

  return (
    <section className={`brand-slider slide ${isActive ? 'active' : ''}`}>
      <div className="slider-bg" ref={sliderBgRef}></div>
      <div className="brand-content">
        <ul className="brand-list">
          {brandData.map((item, index) => (
            <li
              key={index}
              className={`brand-item ${
                index === activeIndex ? 'active' : ''
              }`}
              onClick={() => updateActiveSlide(index)}
            >
              <span className="brand-title">{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="brand-stats scroll-animate-right">
          <span id="activeCaption">
            {brandData[activeIndex]?.caption}
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;