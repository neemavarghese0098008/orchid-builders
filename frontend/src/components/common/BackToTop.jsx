import React, { useState, useEffect } from 'react';
import { scrollToElement } from '../../hooks/useScrollAnimations';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShow(y > 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    scrollToElement(document.body, 0);
  };

  return (
    <button
      id="to-top"
      className={show ? 'show' : ''}
      data-testid="back-to-top"
      aria-label="Back to top"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
};

export default BackToTop;
