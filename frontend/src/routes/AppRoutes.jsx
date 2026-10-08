import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import GalleryPage from '../pages/GalleryPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import OngoingProjectsPage from '../pages/OngoingProjectsPage';
import OngoingProjectDetailPage from '../pages/OngoingProjectDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />

        {/* Services Overview */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services.html" element={<ServicesPage />} />

        {/* Individual Service Pages (Exact legacy URL & slug compatibility) */}
        <Route
          path="/service-architecture-design"
          element={<ServiceDetailPage serviceSlug="architecture-design" />}
        />
        <Route
          path="/service-architecture-design.html"
          element={<ServiceDetailPage serviceSlug="architecture-design" />}
        />

        <Route
          path="/service-construction"
          element={<ServiceDetailPage serviceSlug="construction" />}
        />
        <Route
          path="/service-construction.html"
          element={<ServiceDetailPage serviceSlug="construction" />}
        />

        <Route
          path="/service-interior-design"
          element={<ServiceDetailPage serviceSlug="interior-design" />}
        />
        <Route
          path="/service-interior-design.html"
          element={<ServiceDetailPage serviceSlug="interior-design" />}
        />

        <Route
          path="/service-structural-design"
          element={<ServiceDetailPage serviceSlug="structural-design" />}
        />
        <Route
          path="/service-structural-design.html"
          element={<ServiceDetailPage serviceSlug="structural-design" />}
        />

        <Route
          path="/service-landscaping"
          element={<ServiceDetailPage serviceSlug="landscaping" />}
        />
        <Route
          path="/service-landscaping.html"
          element={<ServiceDetailPage serviceSlug="landscaping" />}
        />

        <Route
          path="/service-project-management"
          element={<ServiceDetailPage serviceSlug="project-management" />}
        />
        <Route
          path="/service-project-management.html"
          element={<ServiceDetailPage serviceSlug="project-management" />}
        />

        <Route
          path="/service-property-consultancy"
          element={<ServiceDetailPage serviceSlug="property-consultancy" />}
        />
        <Route
          path="/service-property-consultancy.html"
          element={<ServiceDetailPage serviceSlug="property-consultancy" />}
        />

        <Route
          path="/service-vasthu-consultancy"
          element={<ServiceDetailPage serviceSlug="vasthu-consultancy" />}
        />
        <Route
          path="/service-vasthu-consultancy.html"
          element={<ServiceDetailPage serviceSlug="vasthu-consultancy" />}
        />

        <Route
          path="/service-renovation-remodeling"
          element={<ServiceDetailPage serviceSlug="renovation-remodeling" />}
        />
        <Route
          path="/service-renovation-remodeling.html"
          element={<ServiceDetailPage serviceSlug="renovation-remodeling" />}
        />

        <Route
          path="/service-estimation-cost-evaluation"
          element={<ServiceDetailPage serviceSlug="estimation-cost-evaluation" />}
        />
        <Route
          path="/service-estimation-cost-evaluation.html"
          element={<ServiceDetailPage serviceSlug="estimation-cost-evaluation" />}
        />

        {/* Dynamic Service Route */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        {/* Projects */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/ongoing" element={<OngoingProjectsPage />} />
        <Route path="/projects/ongoing/:slug" element={<OngoingProjectDetailPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="/projects.html" element={<ProjectsPage />} />

        {/* Project Details */}
        <Route path="/project-details" element={<ProjectDetailsPage />} />
        <Route path="/project-details.html" element={<ProjectDetailsPage />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery.html" element={<GalleryPage />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog.html" element={<BlogPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />

        {/* Catch-all */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

