import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import LaptopRepairPage from "./pages/LaptopRepairPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import DesktopRepairPage from "@/pages/DesktopRepairPage";
import CctvRepairPage from "@/pages/CctvRepairPage";



const App: React.FC = () => {
  return (
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
      </Routes>
    </Layout>
  );
};

export default App;
