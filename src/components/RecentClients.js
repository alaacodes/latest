import React, { useEffect, useRef } from 'react';

const RecentClients = ({ isActive }) => {
  const leftRowRef = useRef(null);
  const rightRowRef = useRef(null);

  // Client logos data - using the client1.png, client2.png format
  const clientLogos = [
    { id: 1, name: 'Client 1', logo: '/client1.png' },
    { id: 2, name: 'Client 2', logo: '/client2.png' },
    { id: 3, name: 'Client 3', logo: '/client3.png' },
    { id: 4, name: 'Client 4', logo: '/client4.png' },
    { id: 5, name: 'Client 5', logo: '/client5.png' },
    { id: 6, name: 'Client 6', logo: '/client6.png' },
  ];

  useEffect(() => {
    if (isActive) {
      // Trigger scroll animations
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
        
        {/* Top sliding row - left to right */}
        <div className="clients-grid slide-left" ref={leftRowRef}>
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div key={`left-${index}`} className="client-item">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo"
                onError={(e) => {
                  e.target.src = '/agencidev-logo-small.png'; // Fallback
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Bottom sliding row - right to left */}
        <div className="clients-grid slide-right" ref={rightRowRef}>
          {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((client, index) => (
            <div key={`right-${index}`} className="client-item">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo"
                onError={(e) => {
                  e.target.src = '/agencidev-logo-small.png'; // Fallback
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