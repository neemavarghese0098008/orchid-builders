import React, { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FaqAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    const nextIndex = openIndex === index ? null : index;
    setOpenIndex(nextIndex);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);
  };

  return (
    <div className="faq">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              className="faq-q"
              type="button"
              data-testid={item.testId || `faq-item-${idx + 1}`}
              onClick={() => handleToggle(idx)}
            >
              {item.question}
              <span className="fi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="faq-a">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
