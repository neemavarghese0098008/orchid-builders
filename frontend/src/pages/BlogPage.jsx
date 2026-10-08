import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import FilterBar from '../components/ui/FilterBar';
import BlogCard from '../components/ui/BlogCard';
import CtaSection from '../components/ui/CtaSection';
import { api, imageUrl } from '../lib/api';

const blogFilters = [{ id: 'all', label: 'All', testId: 'bfilter-all' }];

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let current = true;
    api('/articles').then(({ data = [] }) => {
      if (!current) return;
      setArticles(data.map((article, index) => ({
        id: article.id,
        cat: 'Insights',
        catId: 'all',
        title: article.title,
        excerpt: article.content || '',
        date: article.date || '',
        readTime: '',
        img: imageUrl(article.coverImage || article.thumbnailImage),
        to: '/blog',
        delay: String((index % 3) * 0.08),
        testId: `blog-article-${article.id}`,
      })));
    }).catch(() => {});
    return () => { current = false; };
  }, []);

  const featuredArticle = articles[0];
  const showFeatured = Boolean(featuredArticle) && activeFilter === 'all';

  const filteredArticles = articles.slice(1).filter((a) => {
    if (activeFilter === 'all') return true;
    return a.catId === activeFilter;
  });

  return (
    <>
      <PageHero
        imgSrc="/assets/img/office/1%20(4).jpeg"
        alt="Orchid Builders journal and insights"
        breadcrumb={
          <>
            Home <b>/</b> Blog
          </>
        }
        title={
          <>
            <span className="rl"><span className="rl-in">Journal &amp;</span></span>
            <span className="rl"><span className="rl-in"><em className="serif-it gold" style={{ textTransform: 'none' }}>Insights</em></span></span>
          </>
        }
      />

      <section className="sec" data-filter-group>
        <div className="wrap">
          <FilterBar
            filters={blogFilters}
            activeFilter={activeFilter}
            onSelectFilter={setActiveFilter}
          />

          {showFeatured && (
            <article
              className="blog-feat"
              data-cat="all"
              data-reveal
              data-testid={`blog-featured-${featuredArticle.id}`}
            >
              <Link className="bimg" to={featuredArticle.to}>
                <img src={featuredArticle.img} alt={featuredArticle.title} />
              </Link>
              <div className="btxt">
                <span className="b-cat">Insights</span>
                <h2 className="h3" style={{ fontSize: 'clamp(1.5rem,2.6vw,2.1rem)' }}>
                  {featuredArticle.title}
                </h2>
                <p className="muted" style={{ marginTop: '16px' }}>
                  {featuredArticle.excerpt}
                </p>
                <span className="b-date">{featuredArticle.date}</span>
                <div style={{ marginTop: '26px' }}>
                  <Link to={featuredArticle.to} className="u-line" data-testid="blog-featured-read">
                    Read Article{' '}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          )}

          <div className="grid-3" style={{ marginTop: '56px' }}>
            {filteredArticles.map((article) => (
              <BlogCard
                key={article.id}
                to={article.to}
                category={article.cat}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                imgSrc={article.img}
                testId={article.testId}
                dataCat={article.catId}
                delay={article.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default BlogPage;
