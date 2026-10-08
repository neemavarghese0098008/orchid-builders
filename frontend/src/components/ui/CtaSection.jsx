import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="sec sec-ink cta-sec">
      <div className="cta-ghost">Orchid</div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-rule" data-reveal></div>
        <span className="label" data-reveal>Begin Today</span>
        <h2 className="h2" style={{ marginTop: '26px' }} data-reveal>
          Ready To Build<br />Your <em className="serif-it gold">Dream Home?</em>
        </h2>
        <p className="lead" style={{ color: 'rgba(255,255,255,.65)', marginTop: '24px' }} data-reveal>
          Tell us about your plot, your budget and the way your family lives. We will take care of everything else — design, approvals, construction and handover.
        </p>
        <div className="cta-btns" data-reveal>
          <a href="tel:+919633311322" className="btn btn-gold" data-testid="cta-call-btn">
            Call Now
          </a>
          <a
            href="https://wa.me/919633311322"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line"
            data-testid="cta-whatsapp-btn"
          >
            WhatsApp
          </a>
          <Link to="/contact" className="btn btn-line" data-testid="cta-consultation-btn">
            Book Consultation{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
