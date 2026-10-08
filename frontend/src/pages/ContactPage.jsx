import React, { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import { useUI } from '../context/UIContext';
import { api } from '../lib/api';

const ContactPage = () => {
  const { showToast } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Turnkey Home Construction',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await api('/contact', { method: 'POST', body: JSON.stringify({ ...formData, type: 'consultation' }) }); showToast('Thank you. Our team will call you within 24 hours to schedule your consultation.'); } catch (error) { showToast(error.message || 'Unable to send your request right now.'); return; }
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Turnkey Home Construction',
      message: '',
    });
  };

  return (
    <>
      <PageHero
        imgSrc="/assets/img/office/1%20(4).jpeg"
        alt="Orchid Builders contact"
        breadcrumb={
          <>
            Home <b>/</b> Contact
          </>
        }
        title={
          <>
            <span className="rl"><span className="rl-in">Let's Build</span></span>
            <span className="rl"><span className="rl-in"><em className="serif-it gold" style={{ textTransform: 'none' }}>Together</em></span></span>
          </>
        }
      />

      <section className="sec">
        <div className="wrap two-col" style={{ alignItems: 'start' }}>
          <div>
            <span className="label" data-reveal>01 â€” Get In Touch</span>
            <h2 className="h2" style={{ margin: '24px 0 40px' }} data-reveal>
              Every Great Home Starts With a <em className="serif-it gold">Conversation</em>
            </h2>
            <div className="grid-2" style={{ gap: '20px' }}>
              <div className="info-card" data-reveal>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 9.9a16 16 0 006.1 6.1l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0122 16.9z" />
                  </svg>
                </span>
                <div className="info-card-content">
                  <h4>Call Us</h4>
               
        <a href="tel:+919388006262">
          +91 93880 06262
        </a>
             <br />
           <a href="tel:+919633311322">
           +91 96333 11322
        </a>

   


                  <p className="info-card-meta">Mon – Sat, 9:00 – 18:00</p>
                </div>
              </div>

              <div className="info-card email-card" data-reveal data-delay="0.08">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="5" width="19" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <div className="info-card-content">
                  <h4>Email</h4>
                  <a className="email-address" href="mailto:orchiddesignerspkd@gmail.com" data-testid="contact-email">orchiddesignerspkd@gmail.com</a>
                  <br />
                  <a className="email-address" href="mailto:orchidbuilderspgt@gmail.com">orchidbuilderspgt@gmail.com</a>
                  <p className="info-card-meta">Replies within one working day</p>
                </div>
              </div>

              <div className="info-card" data-reveal data-delay="0.16">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-5.3-7-11a7 7 0 1114 0c0 5.7-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                </span>
                <div className="info-card-content">
                  <h4>Studio</h4>
                  <p data-testid="contact-address">
                    Coimbatore Rd, behind Bismi Hypermart, near Stadium Bus Stand, Mankavu, Palakkad, Kerala 678001
                  </p>
                </div>
              </div>

              <a
                className="info-card"
                href="https://wa.me/919633311322"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                data-delay="0.24"
                data-testid="contact-whatsapp"
                style={{ background: 'var(--green)', borderColor: 'var(--green)' }}
              >
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .1 0 .7-.4 1.2z" />
                  </svg>
                </span>
                <div className="info-card-content">
                  <h4 style={{ color: 'rgba(255,255,255,.7)' }}>WhatsApp</h4>
                  <p style={{ color: '#fff' }}>Chat With Us Instantly</p>
                </div>
              </a>
            </div>
          </div>

          <div id="consultation">
            <span className="label" data-reveal>Book a Consultation</span>
            <form
              className="js-form"
              style={{ marginTop: '30px' }}
              data-testid="contact-form"
              data-success="Thank you. Our team will call you within 24 hours to schedule your consultation."
              onSubmit={handleSubmit}
            >
              <div className="grid-2" style={{ gap: '0 24px' }}>
                <div className="field">
                  <label htmlFor="cf-name">Full Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    placeholder="Your name"
                    data-testid="contact-form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-phone">Phone</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    required
                    placeholder="+91"
                    data-testid="contact-form-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  data-testid="contact-form-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-svc">Service Required</label>
                <select
                  id="cf-svc"
                  data-testid="contact-form-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option>Turnkey Home Construction</option>
                  <option>Architecture Design</option>
                  <option>Construction</option>
                  <option>Interior Design</option>
                  <option>Structural Design</option>
                  <option>Landscaping</option>
                  <option>Project Management</option>
                  <option>Property Consultancy</option>
                  <option>Vasthu Consultancy</option>
                  <option>Renovation &amp; Remodeling</option>
                  <option>Estimation &amp; Cost Evaluation</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Tell Us About Your Project</label>
                <textarea
                  id="cf-msg"
                  required
                  placeholder="Plot location, approximate size, budget range..."
                  data-testid="contact-form-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark"
                style={{ width: '100%', justifyContent: 'center' }}
                data-testid="contact-form-submit"
              >
                Request Consultation{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="sec sec-cream" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="map-frame" data-reveal>
            <iframe
              title="Orchid Builders â€” Palakkad"
              loading="lazy"
              src="https://www.google.com/maps?q=Coimbatore+Road,+behind+Bismi+Hypermart,+Mankavu,+Palakkad,+Kerala+678001&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
