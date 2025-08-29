import React, { useEffect, useRef } from 'react';
import ebrahimImg from '../../assets/images/ebrahim@4x.png';
import giuliaImg from '../../assets/images/giulia@4x.png';
import sergeImg from '../../assets/images/serge@4x.png';
import lalondeImg from '../../assets/images/lalonde@4x.png';
import moserImg from '../../assets/images/moser@4x.png';
import senraImg from '../../assets/images/senra@4x.png';
import fallbackLogo from '../../assets/images/agencidev-logo-small.png';

const RecentClients = ({ isActive }) => {
  const leftRowRef = useRef(null);
  const rightRowRef = useRef(null);

  const clientLogos = [
    { id: 1, name: 'Client 1', logo: ebrahimImg },
    { id: 2, name: 'Client 2', logo: giuliaImg },
    { id: 3, name: 'Client 3', logo: sergeImg },
    { id: 4, name: 'Client 4', logo: lalondeImg },
    { id: 5, name: 'Client 5', logo: moserImg },
    { id: 6, name: 'Client 6', logo: senraImg },
  ];

  useEffect(() => {
    if (isActive) {
      const elements = document.querySelectorAll('.recent-clients .scroll-animate');
      setTimeout(() => {
        elements.forEach(el => {
          el.classList.add('animate-in');
        });
      }, 200);
    }
  }, [isActive]);

  return (
    <section className={`recent-clients slide ${isActive ? 'active' : ''}`}>
      <div className="recent-clients-container">
        <h2 className="section-title scroll-animate">SELECT CLIENTS</h2>
        
        <div className="clients-grid slide-left" ref={leftRowRef}>
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div key={`left-${index}`} className="client-item">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo"
                onError={(e) => {
                  e.target.src = fallbackLogo;
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="clients-grid slide-right" ref={rightRowRef}>
          {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((client, index) => (
            <div key={`right-${index}`} className="client-item">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo"
                onError={(e) => {
                  e.target.src = fallbackLogo; // Fallback
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentClients;