export interface Certificate {
  id: string;
  type: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  category: 'cpf' | 'cnpj' | 'nf';
  colorScheme: 'green' | 'orange' | 'blue';
}

export const certificates: Certificate[] = [
  {
    id: 'cpf-a1',
    type: 'CPF A1',
    name: 'Certificado Digital CPF A1',
    price: 160.00,
    description: 'Certificado digital para pessoa física.',
    features: [
      'Emissão em até 1 hora',
      'Compatível com todos os sistemas',
      'Suporte técnico especializado'
    ],
    category: 'cpf',
    colorScheme: 'green'
  },
  {
    id: 'cpf-a3',
    type: 'CPF A3 3 Anos Sem Midia',
    name: 'Certificado Digital CPF A3 3 Anos',
    price: 260.00,
    description: 'Certificado digital para pessoa física com validade de 3 anos sem mídia física.',
    features: [
      'Maior segurança',
      'Sem necessidade de mídia física',
      'Emissão em até 24 horas'
    ],
    category: 'cpf',
    colorScheme: 'orange'
  },
  {
    id: 'cnpj-a1',
    type: 'CNPJ A1',
    name: 'Certificado Digital CNPJ A1',
    price: 220.00,
    description: 'Certificado digital para pessoa jurídica.',
    features: [
      'Ideal para empresas de todos os portes',
      'Compatível com todos os sistemas',
      'Suporte técnico especializado'
    ],
    category: 'cnpj',
    colorScheme: 'blue'
  },
  {
    id: 'cnpj-a1-mei',
    type: 'CNPJ A1 MEI',
    name: 'Certificado Digital CNPJ A1 MEI',
    price: 185.00,
    description: 'Certificado digital específico para Microempreendedores Individuais.',
    features: [
      'Ideal para MEIs',
      'Preço especial',
      'Emissão rápida'
    ],
    category: 'cnpj',
    colorScheme: 'blue'
  },
  {
    id: 'nf-a1',
    type: 'NF A1',
    name: 'Certificado Digital NF A1',
    price: 190.00,
    description: 'Certificado digital específico para emissão de notas fiscais.',
    features: [
      'Ideal para emissão de notas fiscais',
      'Compatível com todos os sistemas',
      'Suporte técnico especializado'
    ],
    category: 'nf',
    colorScheme: 'green'
  },
  {
    id: 'cnpj-a3',
    type: 'CNPJ A3 3 Anos Sem Midia',
    name: 'Certificado Digital CNPJ A3 ',
    price: 360.00,
    description: 'Certificado digital para pessoa jurídica com validade de 3 anos sem mídia física.',
    features: [
      'Maior segurança',
      'Sem necessidade de mídia física',
      'Emissão em até 24 horas'
    ],
    category: 'cnpj',
    colorScheme: 'orange'
  }
];