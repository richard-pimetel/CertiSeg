import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certificate } from '../data/certificates';
import { X, CheckCircle2, FileDigit } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface CertificateModalProps {
  certificate: Certificate;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  const getAccentColor = () => {
    switch (certificate.colorScheme) {
      case 'green':
        return 'bg-success-500';
      case 'orange':
        return 'bg-accent-500';
      case 'blue':
        return 'bg-primary-500';
      default:
        return 'bg-primary-500';
    }
  };
  
  const getTextColor = () => {
    switch (certificate.colorScheme) {
      case 'green':
        return 'text-success-500';
      case 'orange':
        return 'text-accent-500';
      case 'blue':
        return 'text-primary-500';
      default:
        return 'text-primary-500';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className="relative bg-dark-800 rounded-xl overflow-hidden max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
          >
            <div className={`h-2 ${getAccentColor()}`} />
            
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={onClose}
            >
              <X size={20} />
            </button>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${getTextColor()} bg-white/5`}>
                  <FileDigit size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{certificate.type}</h3>
                  <p className="text-white/60 text-sm">{certificate.name}</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6">{certificate.description}</p>
              
              <div className="space-y-3 mb-6">
                {certificate.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success-500 mt-0.5" />
                    <p className="text-white/80">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mb-6 p-4 rounded-lg bg-dark-700">
                <div>
                  <p className="text-white/60 text-sm">Valor</p>
                  <p className="text-2xl font-bold">R$ {certificate.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className={`px-3 py-1 rounded-full ${getAccentColor()} text-white text-sm font-medium`}>
                  {certificate.category.toUpperCase()}
                </div>
              </div>
              
              <div>
                <p className="text-white/60 text-sm mb-2">Entre em contato para adquirir:</p>
                <WhatsAppButton fullWidth large certificate={certificate.type} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;