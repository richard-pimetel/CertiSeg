import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LocateIcon as CertificateIcon, ShieldCheck } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <ShieldCheck className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">CertiSeg</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-white/80 hover:text-white transition-colors">Início</a>
            <a href="#certificates" className="text-white/80 hover:text-white transition-colors">Certificados</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
            <WhatsAppButton compact />
          </nav>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-800 border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#hero" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#certificates" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Certificados
              </a>
              <a 
                href="#about" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#faq" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <WhatsAppButton compact={false} fullWidth />
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;