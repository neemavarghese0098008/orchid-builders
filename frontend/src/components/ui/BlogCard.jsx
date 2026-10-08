import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({
  to = '/blog',
  category,
  title,
  excerpt,
  date,
  readTime,
  imgSrc,
  testId,
  dataCat,
  delay = '0.00',
}) => {
  return (
    <article
      className="blog-card"
      data-cat={dataCat || category?.toLowerCase()}
      data-reveal
      data-delay={delay}
      data-testid={testId}
    >
      <Link className="bimg" to={to}>
        <img src={imgSrc} alt={title} loading="lazy" />
      </Link>
      <div className="btxt">
        {category && <span className="b-cat">{category}</span>}
        <h3>{title}</h3>
        {excerpt && <p>{excerpt}</p>}
        {(date || readTime) && (
          <span className="b-date">
            {date}
            {date && readTime && ' · '}
            {readTime}
          </span>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
