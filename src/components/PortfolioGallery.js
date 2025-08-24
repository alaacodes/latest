import React from 'react';

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      image: '/Giulia Guerrieri.png',
      alt: 'Giulia Guerrieri',
      caption: 'Podcast cover for Giulia Guerrieri'
    },
    {
      image: '/Founders Podcast.gif',
      alt: 'Founders Podcast',
      caption: 'Website UI for Founders Podcast'
    },
    {
      image: '/ZeroOps.png',
      alt: 'ZeroOps',
      caption: 'ZeroOps operational solutions'
    },
    {
      image: '/Highgage Media.png',
      alt: 'Highgage Media',
      caption: 'Scale your e-commerce brand'
    },
    {
      image: '/InFloww.png',
      alt: 'InFloww',
      caption: 'Brand design for Infloww.io'
    },
    {
      image: '/Marcos Ruiz.png',
      alt: 'Marcos Ruiz',
      caption: 'Podcast cover for Marcos Ruiz'
    }
  ];

  return (
    <div className="portfolio-gallery">
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img 
              src={item.image} 
              alt={item.alt} 
              loading="lazy"
            />
            <div className="portfolio-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;