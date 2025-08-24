import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services do we offer?",
      answer: "We offer end-to-end AI-powered solutions for marketing, product development and brand strategy. Solving the tension between conversion and design, we help take agencies and info-products to the next level."
    },
    {
      question: "How much does product dev cost?",
      answer: "For product development, we keep low startup costs and a 10-40% revenue share in the new product. Our product development is end-to-end, covering everything from design & planning to upgrades & marketing. We treat this as a new business, not just a project for a client."
    },
    {
      question: "Who do we serve?",
      answer: "We work with agency & info-product owners doing a minimum of $4,000 /month in profit for our marketing services. For our design services, we work with agencies of any size. We provide our product development services exclusively to agency & info-product owners doing north of $10,000 /month in profit."
    },
    {
      question: "Why we are different?",
      answer: "Agencidev is not a traditional marketing agency focused solely on acquiring clients. We are not a creative agency either focused on design, branding and websites. Instead, we focus on our client's business ecosystem growth as a whole. We build great agencies."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="section-title">Frequently asked questions.</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;