import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import FaqAccordion from '../components/ui/FaqAccordion';
import CtaSection from '../components/ui/CtaSection';
import { servicesData } from '../data/servicesData';

const ServiceDetailPage = ({ serviceSlug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const service = servicesData[slug];

  useEffect(() => {
    if (service?.title) {
      document.title = service.title;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="sec wrap" style={{ textAlign: 'center', padding: '150px 0' }}>
        <h2>Service Not Found</h2>
        <p className="muted">The requested service could not be found.</p>
        <Link to="/services" className="btn btn-dark" style={{ marginTop: '20px' }}>
          Back to Services
        </Link>
      </div>
    );
  }

  const {
    h1,
    serviceDoc,
    overviewH2,
    overviewBody,
    overviewImg,
    benefits = [],
    processSteps = [],
    whyUs = [],
    faqs = [],
    related = [],
  } = service;

  return (
    <>
      <PageHero
        imgSrc="/assets/img/office/1%20(4).jpeg"
        alt={`Orchid Builders — ${h1}`}
        breadcrumb={
          <>
            Home <b>/</b> Services <b>/</b> {h1}
          </>
        }
        title={<span className="rl"><span className="rl-in">{h1}</span></span>}
      />

      {/* SERVICE DOCUMENT SECTION (if present) */}
      {serviceDoc && (
        <section className="sec service-document">
          <div className="wrap">
            <div className="service-intro">
              <span className="label" dangerouslySetInnerHTML={{ __html: serviceDoc.label }}></span>
              <h2 className="h2" style={{ margin: '24px 0' }} dangerouslySetInnerHTML={{ __html: serviceDoc.h2 }}></h2>
              <p>{serviceDoc.intro}</p>
            </div>
            <div className="service-blocks">
              {serviceDoc.blocks.map((block, idx) => (
                <div key={idx} className="service-block">
                  <h3>{block.title}</h3>
                  {block.text && <p>{block.text}</p>}
                  {block.items && (
                    <ul>
                      {block.items.map((it, iIdx) => (
                        <li key={iIdx}>{it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 01 — OVERVIEW */}
      <section className="sec">
        <div className="wrap two-col" style={{ alignItems: 'center' }}>
          <div>
            <span className="label" data-reveal>01 — Overview</span>
            <h2 className="h2" style={{ margin: '24px 0' }} data-reveal>
              {overviewH2}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: overviewBody }}></div>
          </div>
          <div className="frame" data-reveal>
            <div className="clip-reveal" style={{ aspectRatio: '4/4.4' }}>
              <img src={`/${overviewImg}`} alt={`${h1} overview`} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — BENEFITS */}
      {benefits.length > 0 && (
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="label" data-reveal>02 — Benefits</span>
                <h2 className="h2" data-reveal>
                  What You <em className="serif-it gold">Gain</em>
                </h2>
              </div>
            </div>
            <div className="feat-grid">
              {benefits.map((b, idx) => (
                <div key={idx} className="feat" data-reveal data-delay={(idx % 3) * 0.08}>
                  <span className="fn">{b.no}</span>
                  <h4 style={{ marginTop: 0 }}>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 03 — OUR PROCESS */}
      {processSteps.length > 0 && (
        <section className="sec">
          <div className="wrap proc-grid">
            <div className="proc-sticky">
              <span className="label" data-reveal>03 — Our Process</span>
              <h2 className="h2" style={{ margin: '24px 0' }} data-reveal>
                How We <em className="serif-it gold">Deliver</em>
              </h2>
              <p className="lead" data-reveal>
                A clear, documented sequence — so you always know the next step, the cost and the date.
              </p>
            </div>
            <ol className="process-list">
              <li className="process-line" aria-hidden="true">
                <span className="process-line-fill"></span>
              </li>
              {processSteps.map((p, idx) => (
                <li key={idx} data-reveal data-delay={idx * 0.06}>
                  <span className="pno">{p.no}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* SECTION 04 — WHY CHOOSE US */}
      {whyUs.length > 0 && (
        <section className="sec sec-ink">
          <div className="wrap">
            <div style={{ marginBottom: '64px' }}>
              <span className="label" data-reveal>04 — Why Choose Us</span>
              <h2 className="h2" style={{ marginTop: '22px' }} data-reveal>
                Why Orchid <em className="serif-it gold">Builders</em>
              </h2>
            </div>
            <div className="stats-grid">
              {whyUs.map((w, idx) => (
                <div
                  key={idx}
                  style={{ borderLeft: '1px solid rgba(255,255,255,.18)', paddingLeft: '26px' }}
                  data-reveal
                  data-delay={idx * 0.08}
                >
                  <h4 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: '17px', color: '#fff', margin: '0 0 10px' }}>
                    {w.title}
                  </h4>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,.6)', fontSize: '14.5px' }}>
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 05 — FAQ */}
      {faqs.length > 0 && (
        <section className="sec">
          <div className="wrap" style={{ maxWidth: '980px' }}>
            <div style={{ marginBottom: '54px' }}>
              <span className="label" data-reveal>05 — FAQ</span>
              <h2 className="h2" style={{ marginTop: '22px' }} data-reveal>
                Questions, <em className="serif-it gold">Answered</em>
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* SECTION 06 — RELATED SERVICES */}
      {related.length > 0 && (
        <section className="sec sec-cream" style={{ paddingBottom: '110px' }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="label" data-reveal>06 — Explore More</span>
                <h2 className="h2" data-reveal>
                  Related <em className="serif-it gold">Services</em>
                </h2>
              </div>
              <Link to="/services" className="u-line" data-reveal data-testid="svc-all-link">
                All Services{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc-list">
              {related.map((rel, idx) => {
                const targetPath = `/${rel.href.replace('.html', '')}`;
                return (
                  <Link
                    key={idx}
                    to={targetPath}
                    className="svc-row"
                    style={{ gridTemplateColumns: '64px 1fr auto' }}
                    data-img={rel.img}
                    data-testid={rel.testId}
                  >
                    <span className="no">{rel.no}</span>
                    <span className="nm" style={{ fontSize: '1.3rem' }}>{rel.title}</span>
                    <span className="ar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ServiceDetailPage;
