import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { getLenis } from '../../hooks/useScrollAnimations';

const MobileMenu = ({ isOpen, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const lenis = getLenis();

    if (isOpen) {
      document.body.classList.add('menu-open');

      if (lenis) {
        lenis.stop();
      }

      gsap.fromTo(
        '.mm-link, .mm-acc',
        {
          y: 36,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    } else {
      document.body.classList.remove('menu-open');

      if (lenis) {
        lenis.start();
      }

      // Reset services submenu when menu closes
      setServicesOpen(false);
    }

    return () => {
      document.body.classList.remove('menu-open');

      if (lenis) {
        lenis.start();
      }
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div id="mobile-menu">

      {/* TOP HEADER / CLOSE BUTTON */}
      <div className="mm-top">
        <div className="mm-logo">
          <Link to="/" onClick={handleLinkClick} className="logo-pill" data-testid="nav-logo">
            <img src="/assets/img/logo.png" alt="Orchid Builders â€” Engineering Your Dreams" />
          </Link>
        </div>

        <button
          type="button"
          className="mm-close"
          onClick={onClose}
          aria-label="Close mobile menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MENU LINKS */}
      <Link
        to="/"
        className="mm-link"
        data-testid="mm-home"
        onClick={handleLinkClick}
      >
        Home
      </Link>

      <Link
        to="/about"
        className="mm-link"
        data-testid="mm-about"
        onClick={handleLinkClick}
      >
        About
      </Link>

      {/* SERVICES */}
      <div
        className={`mm-acc ${servicesOpen ? 'open' : ''}`}
        style={{ position: 'relative' }}
      >
        <Link
          to="/services"
          className="mm-link"
          onClick={handleLinkClick}
        >
          Services
        </Link>

        <button
          className="mm-acc-btn"
          data-testid="mm-services-toggle"
          aria-label="Expand services"
          aria-expanded={servicesOpen}
          type="button"
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>

        <div className="mm-sub">
          <Link
            to="/service-architecture-design"
            onClick={handleLinkClick}
          >
            Architecture Design
          </Link>

          <Link
            to="/service-construction"
            onClick={handleLinkClick}
          >
            Construction
          </Link>

          <Link
            to="/service-interior-design"
            onClick={handleLinkClick}
          >
            Interior Design
          </Link>

          <Link
            to="/service-structural-design"
            onClick={handleLinkClick}
          >
            Structural Design
          </Link>

          <Link
            to="/service-landscaping"
            onClick={handleLinkClick}
          >
            Landscaping
          </Link>

          <Link
            to="/service-project-management"
            onClick={handleLinkClick}
          >
            Project Management
          </Link>

          <Link
            to="/service-property-consultancy"
            onClick={handleLinkClick}
          >
            Property Consultancy
          </Link>

          <Link
            to="/service-vasthu-consultancy"
            onClick={handleLinkClick}
          >
            Vasthu Consultancy
          </Link>

          <Link
            to="/service-renovation-remodeling"
            onClick={handleLinkClick}
          >
            Renovation & Remodeling
          </Link>

          <Link
            to="/service-estimation-cost-evaluation"
            onClick={handleLinkClick}
          >
            Estimation & Cost Evaluation
          </Link>

          <Link
            to="/services"
            onClick={handleLinkClick}
          >
            <b>All Services</b>
          </Link>
        </div>
      </div>

      <Link
        to="/projects"
        className="mm-link"
        data-testid="mm-projects"
        onClick={handleLinkClick}
      >
        Projects
      </Link>

      <Link
        to="/gallery"
        className="mm-link"
        data-testid="mm-gallery"
        onClick={handleLinkClick}
      >
        Gallery
      </Link>

      <Link
        to="/contact"
        className="mm-link"
        data-testid="mm-contact"
        onClick={handleLinkClick}
      >
        Contact
      </Link>

      {/* FOOTER CONTACT */}
      <div className="mm-foot">
      
       <a href="tel:+919388006262">
          +91 93880 06262
        </a>
  <br />
 <a href="tel:+919633311322">
           +91 96333 11322
        </a>

      

       
        <br />

        <a href="mailto:orchiddesignerspkd@gmail.com">
          orchiddesignerspkd@gmail.com
        </a>

        <br />

        <a href="mailto:orchidbuilderspgt@gmail.com">
          orchidbuilderspgt@gmail.com
        </a>

        <br />
        <br />

        Coimbatore Rd, behind Bismi Hypermart, near Stadium Bus Stand,
        Mankavu, Palakkad, Kerala 678001
      </div>

    </div>
  );
};

export default MobileMenu;
