import React from 'react';
import PageHero from '../components/ui/PageHero';
import CtaSection from '../components/ui/CtaSection';

const AboutPage = () => {
  return (
    <>
      <PageHero
        imgSrc="/assets/img/office/1%20(1).jpeg"
        alt="About Orchid Builders office interior"
        breadcrumb={
          <>
            Home <b>/</b> About Us
          </>
        }
        title={
          <>
            <span className="rl"><span className="rl-in">Crafted With</span></span>
            <span className="rl"><span className="rl-in"><em className="serif-it gold" style={{ textTransform: 'none' }}>Conviction</em></span></span>
          </>
        }
      />

      {/* STORY */}
      <section className="sec">
        <div className="wrap two-col" style={{ alignItems: 'start' }}>
          <div>
            <span className="label" data-reveal>01 — Our Story</span>
            <h2 className="h2" style={{ margin: '24px 0' }} data-reveal>
              Fourteen Years of Building <em className="serif-it gold">Trust in Concrete</em>
            </h2>
          </div>
          <div>
            <p className="lead" data-reveal>
              Orchid Builders was born from a frustration every Kerala family knows: building a home meant juggling an architect, a contractor, a carpenter and a hundred unanswered calls. We believed one team should own the entire promise.
            </p>
            <p className="muted" style={{ marginTop: '18px' }} data-reveal>
              Today that belief delivers luxury villas, modern residences, traditional Kerala homes and commercial spaces across the state. Our clients — many of them NRIs building from thousands of miles away — choose us because our numbers are honest, our reporting is relentless, and our buildings outlive their warranties.
            </p>
            <p className="muted" style={{ marginTop: '18px' }} data-reveal>
              We remain deliberately boutique. Every project carries a founder's signature, an engineer's stamp and a craftsperson's pride.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="sec sec-cream">
        <div className="wrap grid-2">
          <div className="mv-card" data-reveal>
            <span className="mv-no">Mission</span>
            <h3 className="h3" style={{ marginBottom: '16px' }}>
              To make building a dream home feel as considered as living in one.
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              We exist to replace the chaos of construction with a single, accountable, transparent process — design-led, engineer-supervised and delivered on time.
            </p>
          </div>
          <div className="mv-card" data-reveal data-delay="0.1">
            <span className="mv-no">Vision</span>
            <h3 className="h3" style={{ marginBottom: '16px' }}>
              To be Kerala's most trusted name in premium living spaces.
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              A studio where architecture, construction, interiors and landscape are one craft — and where every client becomes a reference.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label" data-reveal>02 — Core Values</span>
              <h2 className="h2" data-reveal>What We <em className="serif-it gold">Refuse to Compromise</em></h2>
            </div>
          </div>
          <div className="grid-2">
            <div className="mv-card" data-reveal data-delay="0.00">
              <span className="mv-no">01</span>
              <h3 className="h3" style={{ marginBottom: '14px' }}>Integrity in Numbers</h3>
              <p className="muted" style={{ margin: 0, fontSize: '15.5px' }}>
                Every estimate itemised, every bill verifiable. We would rather lose a project than inflate a line item.
              </p>
            </div>
            <div className="mv-card" data-reveal data-delay="0.08">
              <span className="mv-no">02</span>
              <h3 className="h3" style={{ marginBottom: '14px' }}>Craft Over Speed</h3>
              <p className="muted" style={{ margin: 0, fontSize: '15.5px' }}>
                Deadlines matter, but never at the cost of a detail we would be ashamed to photograph.
              </p>
            </div>
            <div className="mv-card" data-reveal data-delay="0.00">
              <span className="mv-no">03</span>
              <h3 className="h3" style={{ marginBottom: '14px' }}>Design With Empathy</h3>
              <p className="muted" style={{ margin: 0, fontSize: '15.5px' }}>
                We design for the grandmother's knee, the child's study desk and the monsoon evening — real life, not renders.
              </p>
            </div>
            <div className="mv-card" data-reveal data-delay="0.08">
              <span className="mv-no">04</span>
              <h3 className="h3" style={{ marginBottom: '14px' }}>One Team, One Answer</h3>
              <p className="muted" style={{ margin: 0, fontSize: '15.5px' }}>
                When you call Orchid, someone who knows your project answers. Accountability never gets outsourced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="sec sec-ink">
        <div className="wrap proc-grid">
          <div className="proc-sticky">
            <span className="label" data-reveal>03 — Milestones</span>
            <h2 className="h2" style={{ marginTop: '24px' }} data-reveal>
              The Journey<br /><em className="serif-it gold">So Far</em>
            </h2>
          </div>
          <ol className="tl">
            <li data-reveal data-delay="0.00">
              <span className="yr">2012</span>
              <h4>The Beginning</h4>
              <p>Our journey began in 2012 as a family-founded business, established by Mr. Raj C. and his wife, Er. Jayasree K.V. With a shared passion for construction and a vision of creating quality homes, they took their first step towards building a trusted name in the construction industry.</p>
            </li>
            <li data-reveal data-delay="0.05">
              <span className="yr">2014</span>
              <h4>Establishing Our Presence</h4>
              <p>In 2014, we opened our first office in Palakkad, opposite Bismi Hypermarket. This marked an important milestone in our journey, giving the business a dedicated space and helping us establish a stronger presence in the region.</p>
            </li>
            <li data-reveal data-delay="0.10">
              <span className="yr">2017</span>
              <h4>Growing Through Trust</h4>
              <p>By 2017, within just five years of starting our journey, we had successfully completed 65+ projects for families. Each project strengthened our experience and reputation, while the trust placed in us by our clients became one of the strongest foundations of our growth.</p>
            </li>
            <li data-reveal data-delay="0.15">
              <span className="yr">2020</span>
              <h4>Standing Strong Through Challenges</h4>
              <p>The COVID-19 pandemic brought unprecedented challenges to the construction industry. Despite the difficulties, we remained committed to our clients and continued working towards completing our projects as timely as possible. This period tested our resilience and strengthened our determination to stand by our commitments.</p>
            </li>
            <li data-reveal data-delay="0.20">
              <span className="yr">2023</span>
              <h4>Building Our Future</h4>
              <p>In 2023, we took another significant step forward by purchasing our own land and establishing our own office. This milestone reflected our long-term vision and commitment to building a stronger future for the business.</p>
            </li>
            <li data-reveal data-delay="0.25">
              <span className="yr">2025</span>
              <h4>A New Milestone</h4>
              <p>In 2025, we moved into our 3,200 sq. ft. independent office, marking another major milestone in our growth. The new space provided a dedicated environment for our expanding team, operations, and clients, while reflecting the continued development of our company.</p>
            </li>
            <li data-reveal data-delay="0.30">
              <span className="yr">2026</span>
              <h4>Expanding the Experience</h4>
              <p>In 2026, as we celebrated the first anniversary of our new office, we introduced our Ato-Z home construction model. This approach brings together services ranging from civil construction and structural works to interiors and landscaping under one integrated experience.</p>
            </li>
            <li className="tl-close" data-reveal data-delay="0.35">
              <h4>From a Family Venture to a Growing Legacy</h4>
              <p>What began in 2012 as a husband-and-wife-led family venture has grown through years of dedication, hard work, experience, and the trust of our clients. Today, we continue to build upon the values that shaped our journey from the very beginning: trust, quality, commitment, and craftsmanship, while looking forward to creating many more milestones in the years ahead.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="sec">
        <div className="wrap two-col" style={{ alignItems: 'center' }}>
          <div className="frame" data-reveal>
            <div className="clip-reveal" style={{ aspectRatio: '4/4.6' }}>
              <img src="/assets/img/gallery/1%20(22).jpeg" alt="Orchid Builders project interior" />
            </div>
            <div className="exp-badge">
              <b>250+</b>
              <span>Projects Delivered</span>
            </div>
          </div>
          <div>
            <span className="label" data-reveal>04 — Why Orchid</span>
            <h2 className="h2" style={{ margin: '24px 0' }} data-reveal>
              Why Choose <em className="serif-it gold">Orchid Builders</em>
            </h2>
            <ul className="hl-list">
              <li data-reveal data-delay="0.00">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span>Single accountable team from design to handover</span>
              </li>
              <li data-reveal data-delay="0.05">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span>250+ projects delivered across Kerala since 2012</span>
              </li>
              <li data-reveal data-delay="0.10">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span>Transparent, itemised costing with stage-wise billing</span>
              </li>
              <li data-reveal data-delay="0.15">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span>In-house architecture, engineering and interiors</span>
              </li>
              <li data-reveal data-delay="0.20">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span>Weekly photographic progress reports — NRI trusted</span>
              </li>
              <li data-reveal data-delay="0.25">
                <span className="ck">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span>Post-handover defect-liability support, in writing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="sec sec-cream team-section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label" data-reveal>05 — Leadership</span>
              <h2 className="h2" data-reveal>The People Behind<br /><em className="serif-it gold">The Promise</em></h2>
            </div>
          </div>
          <div className="grid-4">
            <div className="team-card" data-reveal data-delay="0.00">
              <div className="timg">
                <img src="/assets/img/team/1.webp" alt="Founder Chairman" />
              </div>
              <div className="tmeta">
                <b>Founder Chairman</b>
                <span>Leadership &amp; Vision</span>
              </div>
            </div>
            <div className="team-card" data-reveal data-delay="0.07">
              <div className="timg">
                <img src="/assets/img/team/1.webp" alt="CEO and Project Engineer" />
              </div>
              <div className="tmeta">
                <b>CEO &amp; Project Engineer</b>
                <span>Project Leadership</span>
              </div>
            </div>
            <div className="team-card" data-reveal data-delay="0.14">
              <div className="timg">
                <img src="/assets/img/team/1.webp" alt="Project Manager" />
              </div>
              <div className="tmeta">
                <b>Project Manager</b>
                <span>Planning &amp; Delivery</span>
              </div>
            </div>
            <div className="team-card" data-reveal data-delay="0.21">
              <div className="timg">
                <img src="/assets/img/team/1.webp" alt="Structural Engineer" />
              </div>
              <div className="tmeta">
                <b>Structural Engineer</b>
                <span>Engineering &amp; Safety</span>
              </div>
            </div>
            <div className="team-card" data-reveal data-delay="0.28">
              <div className="timg">
                <img src="/assets/img/team/1.webp" alt="Chief Consultant" />
              </div>
              <div className="tmeta">
                <b>Chief Consultant</b>
                <span>Design &amp; Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default AboutPage;
