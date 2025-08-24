import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          <div className="footer-copyright">
            <p>&copy; 2024 AgenciDev Enterprises Ltd.</p>
          </div>
          <p>
            This website is operated and maintained by Agencidev Enterprises Ltd. Agencidev Enterprises Ltd is a sales and marketing company. We do not sell a business opportunity, "get rich quick" programme. All material is intellectual property and protected by copyright. Any duplication, copying, or redistribution (electronic or otherwise, including the world wide web), of the content from this website, in whole or in part, is strictly prohibited without the express written permission of Agencidev Enterprises Ltd.
          </p>
          <p>
            Investing of any kind carries risk and it is possible to lose some or all of your money. Results vary, are not typical, and rely on individual effort, time, and skill, as well as unknown conditions and other factors. We do not measure earnings or financial performance. Instead, we track whether people are taking steps to improve their situation.
          </p>
          <p>
            The Company may link to content or refer to content and/or services created by or provided by third parties that are not affiliated with the Company. The Company is not responsible for such content and does not endorse or approve it. The Company may provide services by or refer you to certain third parties.
          </p>
          <p>
            This site is not a part of the YouTube, Bing Google or Facebook website; Google Inc, Microsoft INC or Meta Inc. Additionally, This site is NOT endorsed by YouTube, Google, Bing or Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. YOUTUBE is a trademark of GOOGLE Inc.
          </p>
        </div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
        
        <div className="footer-logo">
          <img src="/footer-logo.png" alt="AgenciDev" className="footer-logo-image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;