import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import MobileMenu from '../components/common/MobileMenu';
import Footer from '../components/common/Footer';
import Preloader from '../components/common/Preloader';
import PageWipe from '../components/common/PageWipe';
import BackToTop from '../components/common/BackToTop';
import WhatsAppFab from '../components/common/WhatsAppFab';
import Toast from '../components/common/Toast';
import Lightbox from '../components/common/Lightbox';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize global scroll and GSAP ScrollTrigger animations
  useScrollAnimations();

  return (
    <>
      <Preloader />
      <PageWipe />
      <Header
        isMobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <Toast />
      <Lightbox />
    </>
  );
};

export default MainLayout;
