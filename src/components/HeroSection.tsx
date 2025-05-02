import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden pattern-dots">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 text-primary-300 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ShieldCheck className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Certificados Digitais Confiáveis</span>
            </motion.div>
            
            <h1 className="heading heading-1 mb-6">
              Certificados digitais para 
              <span className="text-primary-400"> pessoas físicas </span> 
              e 
              <span className="text-accent-400"> jurídicas</span>
            </h1>
            
            <p className="text-white/70 text-lg mb-8 max-w-2xl">
              Oferecemos os melhores certificados digitais do mercado, com preços competitivos e atendimento personalizado para garantir a segurança e autenticidade das suas transações digitais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <WhatsAppButton large />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-success-500 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Emissão Rápida</h3>
                  <p className="text-white/60 text-sm">Seu certificado emitido em até 1 hora.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-success-500 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Suporte Especializado</h3>
                  <p className="text-white/60 text-sm">Atendimento técnico durante todo o processo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-success-500 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Preços Competitivos</h3>
                  <p className="text-white/60 text-sm">Melhores preços do mercado, garantido.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-success-500 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">100% Seguro</h3>
                  <p className="text-white/60 text-sm">Certificação completa e segura.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-full max-w-md h-96"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative bg-dark-700/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-sm">
                  <div className="absolute -top-4 -right-4 bg-primary-500 rounded-full p-3">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="heading-3 mb-4">Certificado Digital</h3>
                  <p className="text-white/70 mb-6">Segurança para suas transações digitais com certificados confiáveis e validados.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm">A partir de</p>
                      <p className="text-2xl font-bold text-accent-400">R$ 160,00</p>
                    </div>
                    <WhatsAppButton compact />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;