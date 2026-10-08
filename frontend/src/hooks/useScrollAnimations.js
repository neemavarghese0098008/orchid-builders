import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let globalLenis = null;

export const getLenis = () => globalLenis;

export const scrollToElement = (target, offset = -90) => {
  if (globalLenis) {
    globalLenis.scrollTo(target, { offset });
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

export const useScrollAnimations = () => {
  const location = useLocation();
  const cleanupRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add('js');

    // Initialize Lenis once globally if not already initialized
    if (!globalLenis && typeof window !== 'undefined') {
      try {
        globalLenis = new Lenis({ duration: 1.15, smoothWheel: true });
        globalLenis.on('scroll', ScrollTrigger.update);

        const tickerFn = (time) => {
          globalLenis?.raf(time * 1000);
        };
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        console.warn('Lenis init failed:', err);
      }
    }

    // Scroll to top or target anchor
    if (location.hash) {
      const hashEl = document.querySelector(location.hash);
      if (hashEl) {
        setTimeout(() => {
          scrollToElement(hashEl);
        }, 300);
      }
    } else {
      if (globalLenis) {
        globalLenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    // Initialize GSAP ScrollTrigger animations on DOM
    const ctx = gsap.context(() => {
      // Small timeout to allow DOM layout to stabilize
      const timer = setTimeout(() => {
        // [data-reveal]
        const revealEls = document.querySelectorAll('[data-reveal]');
        revealEls.forEach((el) => {
          const delay = parseFloat(el.getAttribute('data-delay') || 0);
          gsap.fromTo(
            el,
            { opacity: 0, y: 44 },
            {
              opacity: 1,
              y: 0,
              duration: 1.05,
              ease: 'power3.out',
              delay,
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // .clip-reveal
        const clipEls = document.querySelectorAll('.clip-reveal');
        clipEls.forEach((w) => {
          const img = w.querySelector('img');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: w,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          });
          tl.to(w, { clipPath: 'inset(0% 0 0% 0)', duration: 1.35, ease: 'expo.out' });
          if (img) {
            tl.to(img, { scale: 1, duration: 1.7, ease: 'power2.out' }, 0);
          }
        });

        // [data-parallax]
        const parallaxEls = document.querySelectorAll('[data-parallax]');
        parallaxEls.forEach((el) => {
          const trigger = el.closest('.hero, .page-hero') || el.parentElement;
          gsap.fromTo(
            el,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });

        // [data-count]
        const countEls = document.querySelectorAll('[data-count]');
        countEls.forEach((el) => {
          const end = parseFloat(el.getAttribute('data-count'));
          const suf = el.getAttribute('data-suffix') || '';
          const obj = { v: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                v: end,
                duration: 2.2,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = Math.round(obj.v) + suf;
                },
              });
            },
          });
        });

        // .process-line-fill
        const plf = document.querySelector('.process-line-fill');
        const processList = document.querySelector('.process-list');
        if (plf && processList) {
          gsap.fromTo(
            plf,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: processList,
                start: 'top 72%',
                end: 'bottom 55%',
                scrub: true,
              },
            }
          );
        }

        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    });

    cleanupRef.current = () => {
      ctx.revert();
    };

    return () => {
      if (cleanupRef.current) cleanupRef.current();
    };
  }, [location.pathname, location.hash]);
};
