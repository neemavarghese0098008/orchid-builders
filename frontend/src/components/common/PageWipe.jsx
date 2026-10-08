import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PageWipe = () => {
  const location = useLocation();
  const wipeRef = useRef(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    const wipe = wipeRef.current;
    if (!wipe) return;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      const seen = sessionStorage.getItem('ob_seen');
      if (seen) {
        wipe.classList.add('cover');
        const timer1 = setTimeout(() => {
          wipe.classList.remove('cover');
          wipe.classList.add('out');
          const timer2 = setTimeout(() => {
            wipe.classList.remove('out');
          }, 900);
          return () => clearTimeout(timer2);
        }, 60);
        return () => clearTimeout(timer1);
      }
      return;
    }

    // Subsequent route transitions
    wipe.classList.remove('out');
    wipe.classList.add('in');
    const timer1 = setTimeout(() => {
      wipe.classList.remove('in');
      wipe.classList.add('out');
      const timer2 = setTimeout(() => {
        wipe.classList.remove('out');
      }, 900);
      return () => clearTimeout(timer2);
    }, 400);

    return () => clearTimeout(timer1);
  }, [location.pathname]);

  return (
    <div id="wipes" ref={wipeRef}>
      <span className="w1"></span>
      <span className="w2"></span>
    </div>
  );
};

export default PageWipe;
