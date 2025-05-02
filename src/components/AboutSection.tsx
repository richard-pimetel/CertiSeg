import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlignCenterVertical as Certificate, Package, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Certificate className="h-6 w-6 text-primary-500" />,
      title: 'Certificação Oficial',
      description: 'Todos os nossos certificados são emitidos por autoridades certificadoras credenciadas pelo ICP-Brasil.'
    },
    {
      icon: <Package className="h-6 w-6 text-primary-500" />,
      title: 'Diversas Opções',
      description: 'Oferecemos certificados do tipo A1 e A3, para pessoas físicas e jurídicas, atendendo a todas as necessidades.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-500" />,
      title: 'Emissão Rápida',
      description: 'Processo rápido e descomplicado, com emissão em até 1 hora para certificados A1.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary-500" />,
      title: 'Segurança Garantida',
      description: 'Máxima segurança em todo o processo de emissão e utilização do seu certificado digital.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 pattern-dots">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="heading heading-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Por que escolher <span className="text-primary-400">nossos certificados</span>?
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fornecemos certificados digitais com a máxima segurança, rapidez e praticidade, 
            garantindo a autenticidade e integridade das suas transações digitais.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/5"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-dark-700 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-dark-700/70 to-dark-800/70 backdrop-blur-sm rounded-xl p-8 border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 bg-accent-500/10 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Pronto para adquirir seu certificado?</h3>
              <p className="text-white/70 mb-4 lg:mb-0">Entre em contato conosco via WhatsApp e adquira seu certificado digital hoje mesmo!</p>
            </div>
            <motion.a
              href="#certificates"
              className="btn btn-accent py-3 px-6 text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver certificados
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;