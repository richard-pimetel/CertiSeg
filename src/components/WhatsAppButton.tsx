import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  message?: string;
  compact?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  certificate?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message = "Olá, gostaria de saber mais sobre os certificados digitais.", 
  compact = false,
  fullWidth = false,
  large = false,
  certificate
}) => {
  const formattedMessage = certificate 
    ? `Olá, gostaria de adquirir o certificado ${certificate}.`
    : message;
  
  const encodedMessage = encodeURIComponent(formattedMessage);
  const whatsappLink = `https://wa.me/5511985420174?text=${encodedMessage}`;
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${
        compact ? 'btn-outline' : 'btn-accent'
      } ${fullWidth ? 'w-full' : ''} ${
        large ? 'text-base py-3 px-6' : ''
      } group`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone size={compact ? 16 : 20} className="mr-2" />
      <span>
        {compact ? 'Contato' : 'Falar via WhatsApp'}
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;