import React, { useEffect, useRef } from 'react';
import heroImage from '../../assets/images/hero-image.jpg';
import agd1Video from '../../assets/videos/agd1.mp4';

const Hero = ({ isActive }) => {
  const heroLeftRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    
    setTimeout(() => {
      elements.forEach(el => {
        el.classList.add('animate-in');
      });
    }, 100);
  }, []);

  return (
    <section className={`hero slide ${isActive ? 'active' : ''}`}>
      <div className="hero-left" ref={heroLeftRef}>
        <div className="intro-row">
          <h2 className="hero-heading scroll-animate">
            <em>Future-Proofing</em><br /> Agencies for the AI age
          </h2>
        </div>
        <p className="scroll-animate">
          From AI interfaces to agents to funnels to content strategy to creative direction to SaaS development to logo design, we build solutions for the future. Our mission is to build great agencies.
        </p>
      </div>
      <div className="hero-right">
        <div className="hero-video-wrap parallax-element" ref={heroVideoRef}>
          <video 
            className="hero-img scroll-animate-scale" 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster={heroImage}
          >
            <source src={agd1Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;