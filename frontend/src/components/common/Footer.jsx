import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="ft-top">
          <div>
            <Link to="/" className="logo-pill" data-testid="footer-logo">
              <img src="/assets/img/logo.png" alt="Orchid Builders" />
            </Link>
            <p className="ft-tag">"Engineering Your Dreams"</p>
            <p style={{ maxWidth: '34ch', fontSize: '14.5px', marginTop: '18px' }}>
              A premium architecture, construction and interior design studio crafting homes and spaces across Kerala since 2012.
            </p>
            <div className="ft-social">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/share/1HQi8CT5XN/?mibextid=wwXIfr"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9V11H8v3h2.3v7h3.2z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/orchid_builders_?stkn=cGE2MWVkc25lcHJ1"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" data-testid="social-linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.4 8.9H3.6V21h2.8V8.9zM5 3.6a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM21 13.4c0-3.2-1.7-4.7-4-4.7-1.8 0-2.7 1-3.1 1.7V8.9H11V21h2.9v-6.5c0-1.4.6-2.3 1.9-2.3 1.2 0 1.9.8 1.9 2.3V21H21v-7.6z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" data-testid="social-youtube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.6 7.2a2.8 2.8 0 00-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 00-2 2A29 29 0 002 12a29 29 0 00.4 4.8 2.8 2.8 0 002 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 002-2A29 29 0 0022 12a29 29 0 00-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="ft-h">Quick Links</h5>
            <ul className="ft-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="ft-h">Services</h5>
            <ul className="ft-links">
              <li><Link to="/service-architecture-design">Architecture Design</Link></li>
              <li><Link to="/service-construction">Construction</Link></li>
              <li><Link to="/service-interior-design">Interior Design</Link></li>
              <li><Link to="/service-structural-design">Structural Design</Link></li>
              <li><Link to="/service-landscaping">Landscaping</Link></li>
              <li><Link to="/service-project-management">Project Management</Link></li>
              <li><Link to="/services"><b>View All Services</b></Link></li>
            </ul>
          </div>
          <div>
            <h5 className="ft-h">Contact</h5>
            <ul className="ft-contact" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 9.9a16 16 0 006.1 6.1l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0122 16.9z" />
                </svg>
           <a href="tel:+919388006262">
          +91 93880 06262
        </a>
 </li>
         <li>

        <a href="tel:+919633311322">
           +91 96333 11322
        </a>

              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2.5" y="5" width="19" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <a href="mailto:orchiddesignerspkd@gmail.com">orchiddesignerspkd@gmail.com</a>
              </li>
              <li>
                <a href="mailto:orchidbuilderspgt@gmail.com">orchidbuilderspgt@gmail.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-7-5.3-7-11a7 7 0 1114 0c0 5.7-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
                <span>Coimbatore Rd, behind Bismi Hypermart, near Stadium Bus Stand, Mankavu, Palakkad, Kerala 678001</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span>© <span id="year">{currentYear}</span> Orchid Builders. All rights reserved.</span>
          <span>Engineering Your Dreams — Architecture · Construction · Interiors</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
