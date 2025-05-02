import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappLink = "https://wa.me/5511985420174?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais.";
  
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-500 text-white shadow-lg hover:bg-accent-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsAppButton;