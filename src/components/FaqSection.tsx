import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FaqItem[] = [
    {
      question: 'O que é um certificado digital?',
      answer: 'Um certificado digital é um documento eletrônico que contém dados de uma pessoa ou empresa. Ele funciona como uma identidade virtual que permite realizar transações eletrônicas com validade jurídica.'
    },
    {
      question: 'Qual a diferença entre certificados A1 e A3?',
      answer: 'O certificado A1 é armazenado no próprio computador e tem validade de 1 ano. Já o certificado A3 é armazenado em uma mídia criptográfica (token ou cartão) e pode ter validade de até 3 anos, oferecendo maior segurança.'
    },
    {
      question: 'Como é feita a emissão do certificado?',
      answer: 'Após o pagamento, você receberá instruções para agendar uma videoconferência para validação dos seus documentos. Em seguida, você receberá instruções para a instalação do seu certificado.'
    },
    {
      question: 'Quais documentos são necessários?',
      answer: 'Para pessoa física: RG, CPF e comprovante de endereço. Para pessoa jurídica: documentos do representante legal, contrato social e cartão CNPJ.'
    },
    {
      question: 'Quanto tempo leva para emitir um certificado?',
      answer: 'Certificados A1 podem ser emitidos em até 1 hora após a validação dos documentos. Para certificados A3, o processo pode levar até 24 horas.'
    },
    {
      question: 'O certificado tem validade jurídica?',
      answer: 'Sim, todos os nossos certificados são emitidos por autoridades certificadoras credenciadas pelo ICP-Brasil, tendo validade jurídica garantida por lei.'
    }
  ];
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark-900 to-transparent z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="heading heading-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Perguntas <span className="text-primary-400">Frequentes</span>
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Encontre respostas para as dúvidas mais comuns sobre nossos certificados digitais
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-white/10 rounded-lg overflow-hidden bg-dark-800/60 backdrop-blur-sm"
            >
              <button
                className={`w-full text-left p-5 flex justify-between items-center ${
                  activeIndex === index ? 'border-b border-white/10' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-white/70" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 text-white/70">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;