import React from 'react';

const DesignShowcase = () => {
  return (
    <div className="design-showcase">
      <div className="showcase-header">
        <h2 className="section-title">The home of Future-Focused Design.</h2>
        <p className="section-description">
          We provide AI centred solutions for marketing, product development and brand strategy. 
          Solving the tension between conversion and design, we help take agencies and info-products 
          to the next level.
        </p>
      </div>
      <div className="showcase-grid">
        <div className="showcase-item">
          <div className="showcase-number">01</div>
          <h3 className="showcase-title">AI-Driven Marketing Systems</h3>
          <p className="showcase-description">
            We partner to develop marketing processes for the future. From building AI clones to 
            create unlimited talking head content systems through to AI DM automation solutions 
            that have brought in 24,000+ leads within days, our work delights, converts, and scales.
          </p>
          <a href="https://gamma.app/docs/Agencidev-System-e21o5ggwvuohwq6" className="showcase-link">
            SEE OUR PROCESS
          </a>
        </div>
        <div className="showcase-item">
          <div className="showcase-number">02</div>
          <h3 className="showcase-title">Creatives that convert</h3>
          <p className="showcase-description">
            From brand strategy to execution, we collaborate with companies to craft design and UX 
            solutions that inspire brand identity and drive conversions. Our expertise spans from 
            engaging visual identities to conversion focused designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;