import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Certificate as CertificateInterface } from '../data/certificates';
import { FileDigit, ChevronRight } from 'lucide-react';
import CertificateModal from './CertificateModal';

interface CertificateCardProps {
  certificate: CertificateInterface;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getBgColor = () => {
    switch (certificate.colorScheme) {
      case 'green':
        return 'from-dark-700 to-dark-800 border-l-success-500';
      case 'orange':
        return 'from-dark-700 to-dark-800 border-l-accent-500';
      case 'blue':
        return 'from-dark-700 to-dark-800 border-l-primary-500';
      default:
        return 'from-dark-700 to-dark-800 border-l-primary-500';
    }
  };
  
  const getAccentColor = () => {
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

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <>
      <motion.div 
        className={`bg-gradient-to-br ${getBgColor()} rounded-lg shadow-xl border-l-4 overflow-hidden cursor-pointer`}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className={`rounded-full p-2 ${getAccentColor()} bg-white/5`}>
              <FileDigit size={24} />
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                certificate.category === 'cpf' ? 'bg-success-500' : 
                certificate.category === 'cnpj' ? 'bg-primary-500' : 
                'bg-accent-500'
              }`}></div>
              <span className="text-xs text-white/60 uppercase font-medium">
                {certificate.category}
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{certificate.type}</h3>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/60">Preço</span>
              <span className="text-2xl font-bold">
                R$ {certificate.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
          
          <button 
            className="w-full mt-6 flex items-center justify-center py-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="mr-1">Ver detalhes</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
      
      <CertificateModal 
        certificate={certificate} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default CertificateCard;