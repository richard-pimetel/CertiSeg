import React, { createContext, useState, useContext, useEffect } from 'react';
import { certificates as initialCertificates, Certificate } from '../data/certificates';

interface CertificatesContextType {
  certificates: Certificate[];
  updateCertificatePrice: (id: string, price: number) => void;
  getFilteredCertificates: (category?: string) => Certificate[];
}

const CertificatesContext = createContext<CertificatesContextType | undefined>(undefined);

export const CertificatesProvider = ({ children }: { children: React.ReactNode }) => {
  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    const savedCertificates = localStorage.getItem('certificates');
    return savedCertificates ? JSON.parse(savedCertificates) : initialCertificates;
  });

  useEffect(() => {
    localStorage.setItem('certificates', JSON.stringify(certificates));
  }, [certificates]);

  const updateCertificatePrice = (id: string, price: number) => {
    setCertificates(
      certificates.map(cert =>
        cert.id === id ? { ...cert, price } : cert
      )
    );
  };

  const getFilteredCertificates = (category?: string) => {
    if (!category || category === 'all') return certificates;
    return certificates.filter(cert => cert.category === category);
  };

  return (
    <CertificatesContext.Provider value={{ 
      certificates, 
      updateCertificatePrice,
      getFilteredCertificates
    }}>
      {children}
    </CertificatesContext.Provider>
  );
};

export const useCertificates = () => {
  const context = useContext(CertificatesContext);
  if (context === undefined) {
    throw new Error('useCertificates must be used within a CertificatesProvider');
  }
  return context;
};