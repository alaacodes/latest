import React from 'react';

const AIProductDesign = () => {
  return (
    <div className="ai-product-design section-container">
      <div className="section-header">
        <h2 className="section-title">We're an AI product design & build agency.</h2>
        <p className="section-subtitle">
          AI is shaping the future of business, driving innovation through personalised, 
          purpose-built experiences. To succeed in this new era, agencies must go beyond 
          utility and focus on creating companies that resonate with their clients' deeper 
          aspirations. Here is some of our work and ideas…
        </p>
      </div>
      <div className="info-blocks">
        <div className="info-block">
          <h3>The Birdhouse As The Future of AI Content</h3>
          <p>
            We designed and built a comprehensive AI content platform that helps agencies 
            create high-quality content at scale.
          </p>
          <div className="info-image" data-caption="The Birdhouse AI: The Future of AI Content">
            <img src="/birdhouseai.png" alt="Birdhouse Preview" />
          </div>
        </div>
        <div className="info-block">
          <h3>Scheduling Automation</h3>
          <p>
            Our scheduling automation tools help agencies streamline their workflows and 
            improve productivity.
          </p>
          <div className="info-image" data-caption="SystemGrown: Turning Creative Workflows into Art">
            <img src="/systemgrown.png" alt="Scheduling Preview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIProductDesign;