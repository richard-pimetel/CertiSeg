import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import { CertificatesProvider } from './context/CertificatesContext';

function App() {
  return (
    <CertificatesProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </CertificatesProvider>
  );
}

export default App;