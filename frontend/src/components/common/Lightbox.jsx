import React, { useEffect } from 'react';
import { useUI } from '../../context/UIContext';

const Lightbox = () => {
  const { lightbox, closeLightbox, nextLightbox, prevLightbox, toggleZoom } = useUI();

  useEffect(() => {
    if (!lightbox.open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.open, closeLightbox, nextLightbox, prevLightbox]);

  if (!lightbox.open && (!lightbox.items || lightbox.items.length === 0)) return null;

  const currentItem = lightbox.items[lightbox.currentIndex] || {};
  const currentSrc = currentItem.src || currentItem.full || '#';
  const currentTitle = currentItem.title || '';

  const handleBackdropClick = (e) => {
    if (e.target.id === 'lightbox') {
      closeLightbox();
    }
  };

  return (
    <div
      id="lightbox"
      className={lightbox.open ? 'open' : ''}
      data-testid="lightbox"
      onClick={handleBackdropClick}
    >
      <img
        id="lb-img"
        src={currentSrc}
        alt={currentTitle || 'Gallery image'}
        className={lightbox.zoomed ? 'zoomed' : ''}
        onClick={toggleZoom}
      />
      <div id="lb-cap">{currentTitle}</div>
      <button
        id="lb-prev"
        className="lb-btn"
        data-testid="lightbox-prev"
        aria-label="Previous"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prevLightbox();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        id="lb-next"
        className="lb-btn"
        data-testid="lightbox-next"
        aria-label="Next"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          nextLightbox();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
      <button
        id="lb-close"
        className="lb-btn"
        data-testid="lightbox-close"
        aria-label="Close"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          closeLightbox();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
};

export default Lightbox;
