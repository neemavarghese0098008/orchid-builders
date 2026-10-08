import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { handleSpotMouseMove } from '../hooks/useSpotlight';
import CtaSection from '../components/ui/CtaSection';
import { fetchData, imageUrl } from '../lib/api';

const heroSlides = [
  { img: '/assets/img/office/1%20(4).jpeg', alt: 'Contemporary commercial interior designed by Orchid Builders' },
  { img: '/assets/img/office/1%20(9).jpeg', alt: 'Contemporary commercial interior designed by Orchid Builders' },
  { img: '/assets/img/office/1%20(6).jpeg', alt: 'Bright office interior designed by Orchid Builders' },
  { img: '/assets/img/office/1%20(13).jpeg', alt: 'Interior and landscape detail by Orchid Builders' },
];

const HomePage = () => {
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => { fetchData('/ongoing-projects').then(setOngoingProjects); fetchData('/projects').then(setFeaturedProjects); fetchData('/testimonials').then(setTestimonials); }, []);
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroTimerRef = useRef(null);
  const heroRef = useRef(null);

  // Testimonials Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialTimerRef = useRef(null);

  // Hero Intro Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo('.hero-slide.is-active img', { scale: 1.22 }, { scale: 1, duration: 1.6, ease: 'power2.out' }, 0)
      .fromTo('.hero-shade', { opacity: 0 }, { opacity: 1, duration: 1.1 }, 0)
      .to('.rl-in', { y: 0, duration: 1.15, stagger: 0.13 }, 0.15)
      .fromTo('.hero-fade', { y: 26, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.09, duration: 0.9 }, 0.65);
  }, []);

  // Hero Carousel Auto-Advance
  const startHeroTimer = () => {
    if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    heroTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
  };

  useEffect(() => {
    startHeroTimer();
    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, []);

  const handleHeroNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startHeroTimer();
  };

  const handleHeroPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startHeroTimer();
  };

  const handleHeroDot = (index) => {
    setCurrentSlide(index);
    startHeroTimer();
  };

  // Testimonials Auto-Advance
  const startTestimonialTimer = () => {
    if (testimonialTimerRef.current) clearInterval(testimonialTimerRef.current);
    if (testimonials.length < 2) return;
    testimonialTimerRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
  };

  useEffect(() => {
    startTestimonialTimer();
    return () => {
      if (testimonialTimerRef.current) clearInterval(testimonialTimerRef.current);
    };
  }, []);

  const handleTestimonialNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    startTestimonialTimer();
  };

  const handleTestimonialPrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTestimonialTimer();
  };

  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        data-testid="hero"
        ref={heroRef}
        onMouseEnter={() => {
          if (heroTimerRef.current) clearInterval(heroTimerRef.current);
        }}
        onMouseLeave={startHeroTimer}
      >
        <div className="hero-media" aria-label="Orchid Builders project images" role="region">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'is-active' : ''}`}
            >
              <img data-parallax src={slide.img} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="hero-shade"></div>
        <div className="wrap hero-in">
          <div className="hero-kicker hero-fade">Premium Architecture &amp; Construction â€” Kerala</div>
          <h1 className="display" data-testid="hero-headline">
            <span className="rl"><span className="rl-in">Engineering</span></span>
            <span className="rl"><span className="rl-in">Your <em className="serif-it gold" style={{ textTransform: 'none' }}>Dreams</em></span></span>
          </h1>
          <div className="hero-sub hero-fade">
            <span>Architecture</span><i>/</i><span>Construction</span><i>/</i><span>Interior Design</span><i>/</i><span>Project Management</span><i>/</i><span>Renovation</span>
          </div>
          <div className="hero-cta hero-fade">
            <Link to="/projects" className="btn btn-line" data-testid="hero-view-projects-btn">
              View Projects{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-gold" data-testid="hero-book-consultation-btn">
              Book Consultation
            </Link>
          </div>
        </div>
        <div className="hero-side">PALAKKAD, KERALA</div>
        <div className="hero-carousel" aria-label="Banner controls">
          <button
            className="hero-carousel-btn"
            id="hero-prev"
            type="button"
            aria-label="Previous banner image"
            onClick={handleHeroPrev}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <div className="hero-dots" role="tablist" aria-label="Choose banner image">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${idx === currentSlide ? 'is-active' : ''}`}
                type="button"
                role="tab"
                aria-label={`Show banner image ${idx + 1}`}
                aria-selected={idx === currentSlide ? 'true' : 'false'}
                onClick={() => handleHeroDot(idx)}
              ></button>
            ))}
          </div>
          <button
            className="hero-carousel-btn"
            id="hero-next"
            type="button"
            aria-label="Next banner image"
            onClick={handleHeroNext}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
        <div className="scroll-ind hero-fade">
          <small>Scroll</small>
          <span className="si-line"></span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="mq-track">
          <span className="mq-item">Luxury Villas<span className="dot"></span></span>
          <span className="mq-item">Modern Homes<span className="dot"></span></span>
          <span className="mq-item">Traditional Kerala Homes<span className="dot"></span></span>
          <span className="mq-item">Signature Interiors<span className="dot"></span></span>
          <span className="mq-item">Commercial Spaces<span className="dot"></span></span>
          <span className="mq-item">Turnkey Projects<span className="dot"></span></span>
          <span className="mq-item"><em>Luxury Villas</em><span className="dot"></span></span>
          <span className="mq-item"><em>Modern Homes</em><span className="dot"></span></span>
          <span className="mq-item"><em>Traditional Kerala Homes</em><span className="dot"></span></span>
          <span className="mq-item"><em>Signature Interiors</em><span className="dot"></span></span>
          <span className="mq-item"><em>Commercial Spaces</em><span className="dot"></span></span>
          <span className="mq-item"><em>Turnkey Projects</em><span className="dot"></span></span>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="sec" id="who-we-are">
        <div className="wrap">
          <div className="wwa-grid">
            <div>
              <span className="label" data-reveal>Who We Are</span>
              <h2 className="h2" style={{ margin: '24px 0' }} data-reveal>
                Spaces Built for the Way You <em className="serif-it gold">Live and Work</em>
              </h2>
              <p className="leads" data-reveal>
                From new homes and commercial spaces to carefully planned renovations, we manage every project with clarity, quality and attention to detail.
              </p>
              <p className="muted" style={{ marginTop: '18px' }} data-reveal>
                Our work brings together thoughtful planning, durable construction and interiors that feel natural to use every day, whether the space is personal, professional or being renewed.
              </p>
              <div style={{ marginTop: '38px' }} data-reveal>
                <Link to="/about" className="u-line" data-testid="wwa-discover-btn">
                  Discover Our Story{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="frame" data-reveal>
              <div className="clip-reveal">
                <img src="/assets/img/office/1%20(5).jpeg" alt="Modern office interior by Orchid Builders" />
              </div>
              <div className="exp-badge">
                <b>14+</b>
                <span>Years of Craft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION FOCUS */}
      <section className="sec focus-sec" id="construction-focus">
        <div className="wrap container-fluid">
          <div className="sec-head focus-head row align-items-end g-4">
            <div className="col-lg-7 col-md-7">
              <span className="label" data-reveal>Our Construction Focus</span>
              <h2 className="h2" data-reveal>
                Built Around<br />
                <em className="serif-it gold">Your Everyday</em>
              </h2>
            </div>
            <div className="col-lg-5 col-md-5">
              <p className="lead focus-intro mb-0" data-reveal>
                Three ways we shape better spaces: considered homes, productive workplaces and renovations that make existing places work beautifully again.
              </p>
            </div>
          </div>

          <div className="focus-grid row g-4">
            <div className="col-lg-4">
              <Link to="/service-construction" className="focus-card d-block h-100" data-reveal>
                <div className="focus-card-img">
                  <img
                    src="/assets/img/about/Residential.png"
                    alt="Residential construction and home design by Orchid Builders"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="focus-card-copy">
                  <span className="focus-no">01</span>
                  <h3>Residential Construction</h3>
                  <p>Thoughtfully planned homes built around your family, lifestyle and long-term needs.</p>
                  <span className="focus-link">
                    Explore residential construction
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link to="/service-construction" className="focus-card h-100 d-block" data-reveal data-delay="0.08">
                <div className="focus-card-img">
                  <img
                    src="/assets/img/about/Commercial.png"
                    alt="Commercial construction and office interiors by Orchid Builders"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="focus-card-copy">
                  <span className="focus-no">02</span>
                  <h3>Commercial Construction</h3>
                  <p>Professional commercial environments designed for efficient work and a strong brand presence.</p>
                  <span className="focus-link">
                    Explore commercial construction
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link to="/service-renovation-remodeling" className="focus-card h-100 d-block" data-reveal data-delay="0.16">
                <div className="focus-card-img">
                  <img
                    src="/assets/img/about/Renovation.png"
                    alt="Renovation and remodeling project by Orchid Builders"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="focus-card-copy">
                  <span className="focus-no">03</span>
                  <h3>Renovation</h3>
                  <p>Practical, beautiful upgrades that give existing spaces a fresh and purposeful new life.</p>
                  <span className="focus-link">
                    Explore renovation services
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec-cream" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label" data-reveal>Our Services</span>
              <h2 className="h2" data-reveal>Expertise Across<br /><em className="serif-it gold">Every Discipline</em></h2>
            </div>
            <Link to="/services" className="u-line" data-reveal data-testid="home-all-services">
              All Services{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="wrap svc-list" id="services-list">
          <Link to="/service-architecture-design" className="svc-row" data-testid="svc-row-architecture-design">
            <span className="no">01</span>
            <span className="nm">Architecture Design</span>
            <span className="ds">Concept to detailed drawings homes designed around the way you live.</span>
            <span className="ar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link to="/service-construction" className="svc-row" data-testid="svc-row-construction">
            <span className="no">02</span>
            <span className="nm">Construction</span>
            <span className="ds">Turnkey residential and commercial construction with stage-wise transparency.</span>
            <span className="ar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link to="/service-interior-design" className="svc-row" data-testid="svc-row-interior-design">
            <span className="no">03</span>
            <span className="nm">Interior Design</span>
            <span className="ds">Bespoke interiors from space planning to the last cushion.</span>
            <span className="ar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link to="/service-project-management" className="svc-row" data-testid="svc-row-project-management">
            <span className="no">04</span>
            <span className="nm">Project Management</span>
            <span className="ds">Professional PMC for owners who want control without daily site stress.</span>
            <span className="ar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link to="/service-renovation-remodeling" className="svc-row" data-testid="svc-row-renovation-remodeling">
            <span className="no">05</span>
            <span className="nm">Renovation & Remodeling</span>
            <span className="ds">Transforming existing homes â€” structurally safe, beautifully renewed.</span>
            <span className="ar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="sec"><div className="wrap"><div className="sec-head"><div><span className="label" data-reveal>Featured Projects</span><h2 className="h2" data-reveal>Selected <em className="serif-it gold">Works</em></h2></div><Link to="/projects" className="u-line">View All Projects</Link></div><div className="grid-2">{featuredProjects.slice(0, 4).map(p => <Link key={p.id} to={'/projects/' + p.slug} className="proj spot"><div className="pimg"><img
        src={imageUrl(p.coverImage || p.images?.find(img => img?.imageUrl)?.imageUrl)}
        alt={p.projectName}
        loading="lazy"
      /></div><div className="pmeta"><div><span className="pc">{p.category?.name || 'Project'}</span><span className="pn">{p.projectName}</span><span className="pl">{p.location}</span></div></div></Link>)}</div></div></section>
      {/* ONGOING PROJECTS */}
      <section className="sec sec-cream"><div className="wrap"><div className="sec-head"><div><span className="label" data-reveal>Project Updates</span><h2 className="h2" data-reveal>On Going <em className="serif-it gold">Projects</em></h2></div><Link to="/projects/ongoing" className="u-line">View All Ongoing Projects</Link></div><div className="grid-2">{ongoingProjects.slice(0, 4).map(p => <Link key={p.id} to={'/projects/ongoing/' + p.slug} className="proj spot"><div className="pimg"><img src={imageUrl(
        p.coverImage || p.images?.find(img => img?.imageUrl)?.imageUrl
      )} alt={p.name} loading="lazy" /></div><div className="pmeta"><div><span className="pc">{p.location}</span><span className="pn">{p.name}</span><span className="pl">{p.date}</span></div></div></Link>)}</div>{!ongoingProjects.length && <p className="muted">Ongoing project updates will appear here.</p>}</div></section>
      {/* WHY ORCHID */}
      <section className="sec sec-cream">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label" data-reveal> Why Orchid</span>
              <h2 className="h2" data-reveal>
                Why Families Choose<br />
                <em className="serif-it gold">Orchid Builders</em>
              </h2>
            </div>
          </div>
          <div className="feat-grid">
            <div className="feat" data-reveal data-delay="0.00">
              <span className="fn">01</span>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 19l7-7-4-4-7 7v4h4zM15 6l4 4M4 20h16" />
                </svg>
              </span>
              <h4>Custom Design Solutions</h4>
              <p>Every project is designed from a blank page â€” your plot, your lifestyle, your budget. Nothing from a catalogue.</p>
            </div>
            <div className="feat" data-reveal data-delay="0.08">
              <span className="fn">02</span>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="9" cy="8" r="3.4" />
                  <path d="M2.5 20c.8-3.6 3.4-5.4 6.5-5.4s5.7 1.8 6.5 5.4M16 4.6a3.4 3.4 0 010 6.8M17.5 14.8c2 .6 3.5 2.2 4 5.2" />
                </svg>
              </span>
              <h4>Experienced Team</h4>
              <p>Architects, structural engineers and site leads with 12+ years and 250+ delivered projects across Kerala.</p>
            </div>
            <div className="feat" data-reveal data-delay="0.16">
              <span className="fn">03</span>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2.5l8 3.5v6c0 5-3.4 8.3-8 9.5-4.6-1.2-8-4.5-8-9.5V6l8-3.5z" />
                  <path d="M8.5 12l2.4 2.4 4.6-4.8" />
                </svg>
              </span>
              <h4>Quality Construction</h4>
              <p>Branded materials, engineered supervision and stage-wise quality audits â€” documented and shared with you.</p>
            </div>
            <div className="feat" data-reveal data-delay="0.00">
              <span className="fn">04</span>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 12a8 8 0 01-8 8c-1.4 0-2.8-.3-4-1l-5 1.3L5.3 16A8 8 0 1121 12z" />
                  <path d="M8.5 11h7M8.5 14h4.5" />
                </svg>
              </span>
              <h4>Transparent Communication</h4>
              <p>Weekly photo reports, itemised bills and one project manager who always answers your call.</p>
            </div>
            <div className="feat" data-reveal data-delay="0.08">
              <span className="fn">05</span>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l3 2M9 2.5h6" />
                </svg>
              </span>
              <h4>Timely Delivery</h4>
              <p>Master schedules with stage gates and penalty-backed timelines written into your agreement.</p>
            </div>
            <div className="feat" data-reveal data-delay="0.16">
              <span className="fn">06</span>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2.5l9 5-9 5-9-5 9-5zM3 12.5l9 5 9-5M3 17.5l9 5 9-5" />
                </svg>
              </span>
              <h4>End-to-End Management</h4>
              <p>Design, approvals, construction, interiors and landscaping â€” one accountable team from sketch to key.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec">
        <div className="wrap proc-grid">
          <div className="proc-sticky">
            <span className="label" data-reveal> Our Process</span>
            <h2 className="h2" style={{ margin: '24px 0' }} data-reveal>
              From First Sketch<br />To <em className="serif-it gold">Final Key</em>
            </h2>
            <p className="lead" data-reveal>
              Eight clear stages. One accountable team. You always know what happens next, what it costs, and when it will be done.
            </p>
            <div style={{ marginTop: '36px' }} data-reveal>
              <Link to="/contact" className="btn btn-line-ink" data-testid="process-start-btn">
                Start With a Consultation{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <ol className="process-list">
            <li className="process-line" aria-hidden="true">
              <span className="process-line-fill"></span>
            </li>
            <li data-reveal data-delay="0.00">
              <span className="pno">01</span>
              <h4>Consultation</h4>
              <p>We listen first â€” family, lifestyle, plot and budget â€” before drawing a single line.</p>
            </li>
            <li data-reveal data-delay="0.06">
              <span className="pno">02</span>
              <h4>Planning</h4>
              <p>Site study, feasibility, vasthu preferences and a clear project roadmap.</p>
            </li>
            <li data-reveal data-delay="0.12">
              <span className="pno">03</span>
              <h4>Design</h4>
              <p>Concept to detailed architecture, refined with you room by room.</p>
            </li>
            <li data-reveal data-delay="0.18">
              <span className="pno">04</span>
              <h4>Visualization</h4>
              <p>Photorealistic 3D views so you approve your home before it exists.</p>
            </li>
            <li data-reveal data-delay="0.24">
              <span className="pno">05</span>
              <h4>Cost Evaluation</h4>
              <p>Itemised, quantity-based estimates with stage-wise cash flow.</p>
            </li>
            <li data-reveal data-delay="0.30">
              <span className="pno">06</span>
              <h4>Construction</h4>
              <p>Engineered execution with branded materials and weekly reporting.</p>
            </li>
            <li data-reveal data-delay="0.36">
              <span className="pno">07</span>
              <h4>Quality Assurance</h4>
              <p>Stage-wise audits, material tests and a documented snag process.</p>
            </li>
            <li data-reveal data-delay="0.42">
              <span className="pno">08</span>
              <h4>Handover</h4>
              <p>Final walkthrough, documentation, warranties â€” and your keys.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* STATS */}
      <section className="sec sec-ink">
        <div className="wrap">
          <div style={{ marginBottom: '70px' }}>
            <span className="label" data-reveal> Milestones</span>
            <h2 className="h2" style={{ marginTop: '22px' }} data-reveal>
              Numbers That<br />Speak of <em className="serif-it gold">Trust</em>
            </h2>
          </div>
          <div className="stats-grid">
            <div className="stat" data-reveal>
              <span className="num">
                <span data-count="250" data-suffix="">0</span>
                <em>+</em>
              </span>
              <span className="cap">Projects Completed</span>
            </div>
            <div className="stat" data-reveal data-delay="0.1">
              <span className="num">
                <span data-count="14" data-suffix="">0</span>
                <em>+</em>
              </span>
              <span className="cap">Years Experience</span>
            </div>
            <div className="stat" data-reveal data-delay="0.2">
              <span className="num">
                <span data-count="98" data-suffix="">0</span>
                <em>%</em>
              </span>
              <span className="cap">Client Satisfaction</span>
            </div>
            <div className="stat" data-reveal data-delay="0.3">
              <span className="num">
                <span data-count="100" data-suffix="">0</span>
                <em>+</em>
              </span>
              <span className="cap">Luxury Homes Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="tst-wrap">
            <span className="tst-mark" data-reveal>&ldquo;</span>
            <div className="tst-stage" data-reveal>
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`tst-slide ${idx === currentTestimonial ? 'active' : ''}`}
                >
                  <p className="tst-quote">{t.message}</p>
                  <div className="tst-who">
                    <b>{t.name}</b>
                    <span>{t.place}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="tst-nav" data-reveal>
              <button
                id="tst-prev"
                className="tst-btn"
                data-testid="testimonial-prev"
                aria-label="Previous testimonial"
                type="button"
                onClick={handleTestimonialPrev}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                id="tst-next"
                className="tst-btn"
                data-testid="testimonial-next"
                aria-label="Next testimonial"
                type="button"
                onClick={handleTestimonialNext}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default HomePage;




