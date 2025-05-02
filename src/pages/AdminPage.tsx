import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Save, ArrowLeft } from 'lucide-react';
import { useCertificates } from '../context/CertificatesContext';
import { Link } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const { certificates, updateCertificatePrice } = useCertificates();
  const [prices, setPrices] = useState<Record<string, string>>(
    certificates.reduce((acc, cert) => ({
      ...acc,
      [cert.id]: cert.price.toString()
    }), {})
  );
  const [savedStatus, setSavedStatus] = useState<Record<string, boolean>>({});
  
  const handlePriceChange = (id: string, value: string) => {
    setPrices({ ...prices, [id]: value });
    setSavedStatus({ ...savedStatus, [id]: false });
  };
  
  const handleSave = (id: string) => {
    const numericPrice = parseFloat(prices[id]);
    if (!isNaN(numericPrice) && numericPrice >= 0) {
      updateCertificatePrice(id, numericPrice);
      setSavedStatus({ ...savedStatus, [id]: true });
      
      // Reset saved status after 3 seconds
      setTimeout(() => {
        setSavedStatus({ ...savedStatus, [id]: undefined });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <header className="bg-dark-800/95 backdrop-blur-md shadow-lg py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">CertiSeg Admin</span>
            </div>
            <Link to="/" className="flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="heading heading-2 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Gerenciar Preços dos Certificados
          </motion.h1>
          
          <motion.p 
            className="text-white/70 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Atualize os preços dos certificados. As alterações serão refletidas imediatamente no site.
          </motion.p>
          
          <motion.div 
            className="bg-dark-800 rounded-xl border border-white/5 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              {certificates.map((certificate) => (
                <div 
                  key={certificate.id} 
                  className="border-b border-white/10 py-4 last:border-b-0 last:pb-0 first:pt-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">{certificate.type}</h3>
                      <p className="text-sm text-white/70">{certificate.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/70">
                          R$
                        </span>
                        <input
                          type="number"
                          value={prices[certificate.id]}
                          onChange={(e) => handlePriceChange(certificate.id, e.target.value)}
                          step="0.01"
                          min="0"
                          className="bg-dark-700 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <motion.button
                        className={`p-2 rounded-lg ${
                          savedStatus[certificate.id] 
                            ? 'bg-success-500/20 text-success-500' 
                            : 'bg-primary-500/20 text-primary-500 hover:bg-primary-500/30'
                        }`}
                        onClick={() => handleSave(certificate.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Save size={20} />
                      </motion.button>
                    </div>
                  </div>
                  {savedStatus[certificate.id] && (
                    <p className="text-sm text-success-500 mt-2">
                      Preço atualizado com sucesso!
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;