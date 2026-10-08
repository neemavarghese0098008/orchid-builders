import React from 'react';
import { Link } from 'react-router-dom';
import { handleSpotMouseMove } from '../../hooks/useSpotlight';

const ProjectCard = ({
  to = '/project-details',
  category,
  title,
  location = 'Palakkad, Kerala',
  imgSrc,
  testId,
  dataCat,
  wide = false,
}) => {
  return (
    <Link
      to={to}
      className={`proj spot ${wide ? 'wide' : ''}`}
      data-cat={dataCat || category?.toLowerCase()}
      data-testid={testId}
      onMouseMove={handleSpotMouseMove}
    >
      <div className="pimg">
        <img src={imgSrc} alt={`${title}${category ? ' — ' + category : ''}`} loading="lazy" />
      </div>
      <div className="pmeta">
        <div>
          {category && <span className="pc">{category}</span>}
          <span className="pn">{title}</span>
          {location && <span className="pl">{location}</span>}
        </div>
        <span className="pview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
