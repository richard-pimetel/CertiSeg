import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CertificatesSection from '../components/CertificatesSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <CertificatesSection />
        <AboutSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default HomePage;