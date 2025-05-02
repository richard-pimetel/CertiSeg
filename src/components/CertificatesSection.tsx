import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';
import { useCertificates } from '../context/CertificatesContext';

const CertificatesSection: React.FC = () => {
  const { getFilteredCertificates } = useCertificates();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'cpf', label: 'CPF' },
    { id: 'cnpj', label: 'CNPJ' },
    { id: 'nf', label: 'NF' }
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <section id="certificates" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-dark-900 to-transparent z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="heading heading-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nossos <span className="text-primary-400">Certificados</span>
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Oferecemos diversos tipos de certificados digitais para atender às suas necessidades.
            Escolha o que melhor se adapta ao seu caso.
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
              onClick={() => handleFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {getFilteredCertificates(activeFilter === 'all' ? undefined : activeFilter).map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;