import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const preloaderRef = useRef(null);
  const numRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('ob_seen');
    if (!seen) {
      setShouldRender(true);
      sessionStorage.setItem('ob_seen', '1');

      const cnt = { v: 0 };
      const ptl = gsap.timeline({
        onComplete: () => {
          setShouldRender(false);
          if (onComplete) onComplete();
        },
      });

      ptl.fromTo(
        '#pl-logo',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .to(
          cnt,
          {
            v: 100,
            duration: 1.5,
            ease: 'power2.inOut',
            onUpdate: () => {
              const v = Math.round(cnt.v);
              if (numRef.current) numRef.current.textContent = v;
              if (lineRef.current) lineRef.current.style.transform = `scaleX(${v / 100})`;
            },
          },
          0.15
        )
        .to('#pl-inner', { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.15')
        .to('.pre-top', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '<')
        .to('.pre-bot', { yPercent: 100, duration: 0.9, ease: 'power4.inOut' }, '<')
        .set(preloaderRef.current, { display: 'none' });
    } else {
      if (onComplete) onComplete();
    }
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div id="preloader" ref={preloaderRef} data-testid="preloader">
      <div className="pre-top"></div>
      <div className="pre-bot"></div>
      <div id="pl-inner">
        <img id="pl-logo" src="/assets/img/logo.png" alt="Orchid Builders" />
        <div id="pl-track">
          <span id="pl-line" ref={lineRef}></span>
        </div>
        <div className="pl-tag">Engineering Your Dreams</div>
      </div>
      <div id="pl-num" ref={numRef}>0</div>
    </div>
  );
};

export default Preloader;
