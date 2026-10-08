import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import CtaSection from '../components/ui/CtaSection';
import { servicesOverviewList } from '../data/servicesData';

const ServicesPage = () => {
  return (
    <>
      <PageHero
        imgSrc="/assets/img/office/1%20(4).jpeg"
        alt="Orchid Builders services overview"
        breadcrumb={
          <>
            Home <b>/</b> Services
          </>
        }
        title={
          <>
            <span className="rl"><span className="rl-in">Ten Disciplines.</span></span>
            <span className="rl"><span className="rl-in"><em className="serif-it gold" style={{ textTransform: 'none' }}>One Team.</em></span></span>
          </>
        }
      />

      {/* INTRO */}
      <section className="sec" style={{ paddingBottom: '40px' }}>
        <div className="wrap" style={{ maxWidth: '900px' }}>
          <span className="label" data-reveal>01 — What We Do</span>
          <p className="lead" style={{ marginTop: '26px' }} data-reveal>
            Most builders subcontract; Orchid integrates. Architecture, structural engineering, construction, interiors and landscape sit at one table from day one — which is why our projects finish looking like their renders, on budgets that hold.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="sec" style={{ paddingTop: '60px' }}>
        <div className="wrap">
          {servicesOverviewList.map((svc, idx) => {
            const isEven = idx % 2 === 1;
            const linkHref = `/${svc.href.replace('.html', '')}`;

            if (isEven) {
              return (
                <div key={svc.no} className="two-col" style={{ alignItems: 'center', marginBottom: '110px' }}>
                  <div>
                    <span className="label" data-reveal>{svc.no}</span>
                    <h3 className="h3" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)', margin: '20px 0 16px' }} data-reveal>
                      {svc.title}
                    </h3>
                    <p className="lead" data-reveal style={{ fontSize: '1.05rem' }}>
                      {svc.lead}
                    </p>
                    <p className="muted" style={{ marginTop: '14px' }} data-reveal>
                      {svc.desc}
                    </p>
                    <div style={{ marginTop: '30px' }} data-reveal>
                      <Link to={linkHref} className="u-line" data-testid={svc.testId}>
                        Explore Service{' '}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="frame" data-reveal>
                    <div className="clip-reveal" style={{ aspectRatio: '4/3.4' }}>
                      <img src={`/${svc.img}`} alt={svc.alt || svc.title} />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={svc.no} className="two-col" style={{ alignItems: 'center', marginBottom: '110px' }}>
                <div className="frame" data-reveal>
                  <div className="clip-reveal" style={{ aspectRatio: '4/3.4' }}>
                    <img src={`/${svc.img}`} alt={svc.alt || svc.title} />
                  </div>
                </div>
                <div>
                  <span className="label" data-reveal>{svc.no}</span>
                  <h3 className="h3" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)', margin: '20px 0 16px' }} data-reveal>
                    {svc.title}
                  </h3>
                  <p className="lead" data-reveal style={{ fontSize: '1.05rem' }}>
                    {svc.lead}
                  </p>
                  <p className="muted" style={{ marginTop: '14px' }} data-reveal>
                    {svc.desc}
                  </p>
                  <div style={{ marginTop: '30px' }} data-reveal>
                    <Link to={linkHref} className="u-line" data-testid={svc.testId}>
                      Explore Service{' '}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;
