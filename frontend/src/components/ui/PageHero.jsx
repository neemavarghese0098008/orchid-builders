import React from 'react';

const PageHero = ({ imgSrc = '/assets/img/office/1%20(4).jpeg', alt = 'Orchid Builders', breadcrumb, title, subtitle }) => {
  return (
    <section class="page-hero">
      <div className="hero-media">
        <img data-parallax src={imgSrc} alt={alt} />
      </div>
      <div className="hero-shade"></div>
      <div className="wrap hero-in">
        {breadcrumb && <span className="crumb hero-fade">{breadcrumb}</span>}
        <h1 className="display">
          {typeof title === 'string' ? (
            <span className="rl"><span className="rl-in">{title}</span></span>
          ) : (
            title
          )}
        </h1>
        {subtitle && <p className="lead hero-fade" style={{ color: 'rgba(255,255,255,.8)', marginTop: '20px' }}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
