import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingPage from "./components/LoadingPage";


const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const LaptopRepairPage = lazy(() => import("./pages/LaptopRepairPage"));
const DesktopRepairPage = lazy(() => import("./pages/DesktopRepairPage"));
const CctvRepairPage = lazy(() => import("./pages/CctvRepairPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/laptop-repair" element={<LaptopRepairPage />} />
          <Route path="/desktop-repair" element={<DesktopRepairPage />} />
          <Route path="/cctv-repair" element={<CctvRepairPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
