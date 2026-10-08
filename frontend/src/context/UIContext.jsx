import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  // Toast state
  const [toast, setToast] = useState({ show: false, message: '' });
  const toastTimeoutRef = useRef(null);

  const showToast = useCallback((message = 'Thank you. Our team will reach out within 24 hours.') => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ show: true, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 5000);
  }, []);

  // Lightbox state
  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    currentIndex: 0,
    zoomed: false,
  });

  const openLightbox = useCallback((items, index = 0) => {
    setLightbox({
      open: true,
      items: items || [],
      currentIndex: index,
      zoomed: false,
    });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(prev => ({ ...prev, open: false, zoomed: false }));
    document.body.style.overflow = '';
  }, []);

  const nextLightbox = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % Math.max(1, prev.items.length),
      zoomed: false,
    }));
  }, []);

  const prevLightbox = useCallback(() => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % Math.max(1, prev.items.length),
      zoomed: false,
    }));
  }, []);

  const toggleZoom = useCallback(() => {
    setLightbox(prev => ({ ...prev, zoomed: !prev.zoomed }));
  }, []);

  return (
    <UIContext.Provider
      value={{
        toast,
        showToast,
        lightbox,
        openLightbox,
        closeLightbox,
        nextLightbox,
        prevLightbox,
        toggleZoom,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
