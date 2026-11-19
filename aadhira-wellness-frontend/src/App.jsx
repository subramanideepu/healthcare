import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import PainChecker from './components/PainChecker';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import ClinicalPathway from './components/ClinicalPathway';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentForm from './components/AppointmentForm';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [quickData, setQuickData] = useState(null);

  const handleQuickSelect = (data) => {
    setQuickData(data);
  };

  return (
    <div className="site-wrapper">
      <TopBar />
      <Navbar />
      <main>
        <Hero onQuickSelect={handleQuickSelect} />
        <StatsStrip />
        <PainChecker />
        <AboutSection />
        <ServicesGrid />
        <ClinicalPathway />
        <WhyChooseUs />
        <AppointmentForm prefillData={quickData} />
        <LocationMap />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
