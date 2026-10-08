import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onToggleMobileMenu, isMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 60);

      const h = document.documentElement;
      const totalHeight = h.scrollHeight - h.clientHeight;
      const progress = totalHeight > 0 ? h.scrollTop / totalHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPath = location.pathname;

  const isHome = currentPath === '/' || currentPath === '/index.html';
  const isAbout = currentPath === '/about' || currentPath === '/about.html';
  const isServices = currentPath.startsWith('/service') || currentPath === '/services' || currentPath === '/services.html';
  const isProjects = currentPath.startsWith('/project') || currentPath === '/projects' || currentPath === '/projects.html';
  const isGallery = currentPath === '/gallery' || currentPath === '/gallery.html';
  const isBlog = currentPath === '/blog' || currentPath === '/blog.html';
  const isContact = currentPath === '/contact' || currentPath === '/contact.html';

  return (
    <header id="site-header" className={scrolled ? 'scrolled' : ''}>
      <div className="scroll-progress">
        <span
          id="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        ></span>
      </div>
      <div className="wrap hdr-in">
        <Link to="/" className="logo-pill" data-testid="nav-logo">
          <img src="/assets/img/logo.png" alt="Orchid Builders â€” Engineering Your Dreams" />
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          <Link
            to="/"
            className={`nav-link ${isHome ? 'active' : ''}`}
            data-testid="nav-home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isAbout ? 'active' : ''}`}
            data-testid="nav-about"
          >
            About
          </Link>
          <div className="nav-item has-mega">
            <Link
              to="/services"
              className={`nav-link ${isServices ? 'active' : ''}`}
              data-testid="nav-services"
            >
              Services{' '}
              <svg className="car" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="mega">
              <div className="mega-in">
                <div>
                  <span className="label">What We Do</span>
                  <div className="mega-title">Ten disciplines.<br />One accountable team.</div>
                  <p className="muted" style={{ fontSize: '14.5px', margin: '0 0 26px' }}>
                    From the first sketch to the final handover, every discipline sits under one roof at Orchid Builders.
                  </p>
                  <Link to="/services" className="u-line" data-testid="mega-all-services">
                    All Services{' '}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
                <div className="mega-grid">
                  <Link to="/service-architecture-design" className="mega-link" data-testid="mega-architecture-design">
                    <span className="no">01</span><span className="nm">Architecture Design</span>
                  </Link>
                  <Link to="/service-construction" className="mega-link" data-testid="mega-construction">
                    <span className="no">02</span><span className="nm">Construction</span>
                  </Link>
                  <Link to="/service-interior-design" className="mega-link" data-testid="mega-interior-design">
                    <span className="no">03</span><span className="nm">Interior Design</span>
                  </Link>
                  <Link to="/service-structural-design" className="mega-link" data-testid="mega-structural-design">
                    <span className="no">04</span><span className="nm">Structural Design</span>
                  </Link>
                  <Link to="/service-landscaping" className="mega-link" data-testid="mega-landscaping">
                    <span className="no">05</span><span className="nm">Landscaping</span>
                  </Link>
                  <Link to="/service-project-management" className="mega-link" data-testid="mega-project-management">
                    <span className="no">06</span><span className="nm">Project Management</span>
                  </Link>
                  <Link to="/service-property-consultancy" className="mega-link" data-testid="mega-property-consultancy">
                    <span className="no">07</span><span className="nm">Property Consultancy</span>
                  </Link>
                  <Link to="/service-vasthu-consultancy" className="mega-link" data-testid="mega-vasthu-consultancy">
                    <span className="no">08</span><span className="nm">Vasthu Consultancy</span>
                  </Link>
                  <Link to="/service-renovation-remodeling" className="mega-link" data-testid="mega-renovation-remodeling">
                    <span className="no">09</span><span className="nm">Renovation & Remodeling</span>
                  </Link>
                  <Link to="/service-estimation-cost-evaluation" className="mega-link" data-testid="mega-estimation-cost-evaluation">
                    <span className="no">10</span><span className="nm">Estimation & Cost Evaluation</span>
                  </Link>
                </div>
                <Link to="/projects" className="mega-feat">
                  <img src="/assets/img/projects/Project1.jpg" alt="Featured project" />
                  <div className="mf-t">
                    <b>The Courtyard Villa</b>
                    <span>Luxury Villa â€” Palakkad</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/projects"
            className={`nav-link ${isProjects ? 'active' : ''}`}
            data-testid="nav-projects"
          >
            Projects
          </Link>
          <Link
            to="/gallery"
            className={`nav-link ${isGallery ? 'active' : ''}`}
            data-testid="nav-gallery"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isContact ? 'active' : ''}`}
            data-testid="nav-contact"
          >
            Contact
          </Link>
        </nav>
        <div className="hdr-right">
          <a href="tel:+919633311322" className="hdr-phone" data-testid="hdr-phone">
            +91 9633311322
          </a>
          <Link to="/contact" className="btn btn-dark btn-sm" data-testid="hdr-consultation-btn">
            Book Consultation
          </Link>
        </div>
        <button
          id="menu-toggle"
          data-testid="mobile-menu-toggle"
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          onClick={onToggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

