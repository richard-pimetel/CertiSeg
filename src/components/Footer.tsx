import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold text-white">CertiSeg</span>
            </div>
            <p className="text-white/70 mb-6">
              Certificados digitais para pessoas físicas e jurídicas com praticidade e segurança.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div> </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#certificates" className="text-white/70 hover:text-white transition-colors">Certificados</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Certificados</h4>
            <ul className="space-y-3">
              <li>
                <a href="#certificates" className="text-white/70 hover:text-white transition-colors">CPF A1</a>
              </li>
              <li>
                <a href="#certificates" className="text-white/70 hover:text-white transition-colors">CPF A3</a>
              </li>
              <li>
                <a href="#certificates" className="text-white/70 hover:text-white transition-colors">CNPJ A1</a>
              </li>
              <li>
                <a href="#certificates" className="text-white/70 hover:text-white transition-colors">CNPJ A3</a>
              </li>
              <li>
                <a href="#certificates" className="text-white/70 hover:text-white transition-colors">NF A1</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-white/70">comercial.datha@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-white/70">(11) 98542-0174</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-white/70">Rua Antônio Zamela, 43 - Centro<br />Carapicuíba , CEP: 06320-050</span>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CertiSeg. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;