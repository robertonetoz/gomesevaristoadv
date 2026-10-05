// Todo o conteúdo do site fica aqui. Para alterar textos, telefones,
// avaliações ou áreas de atuação, edite este arquivo.

export const site = {
  name: "Gomes Evaristo Advocacia",
  url: "https://gomesevaristo.adv.br",
  city: "Araguari",
  state: "MG",
  whatsapp: "5534992537758",
  phones: [
    { label: "WhatsApp", display: "(34) 99253-7758", tel: "+5534992537758" },
    { label: "Telefone", display: "(34) 98853-7795", tel: "+5534988537795" },
  ],
  email: "gevaristo.advocacia@gmail.com",
  address: {
    street: "Rua Luís Otávio de Faria, 232",
    district: "Bairro Goiás",
    cityState: "Araguari, MG",
    zip: "38442-190",
    mapsQuery: "Advogado Gomes Evaristo - GE, R. Luís Otávio de Faria, 232, Araguari - MG",
  },
  hours: "Atendimento 24 horas pelo WhatsApp",
  google: { rating: "5,0", count: 155 },
  social: {
    instagram: "https://www.instagram.com/estherevaristo.advogada/",
    linkedin: "https://www.linkedin.com/in/esther-evaristo-81a1a1250/",
    tiktok: "https://www.tiktok.com/@estherevaristo.adv",
  },
} as const;

export function whatsappLink(message = "Olá! Gostaria de falar com o escritório Gomes Evaristo.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`;

export type AreaId = "trabalhista" | "civel" | "familia";

export const areas: {
  id: AreaId;
  name: string;
  caseLabel: string;
  summary: string;
  matters: string[];
}[] = [
  {
    id: "civel",
    name: "Cível",
    caseLabel: "caso cível",
    summary:
      "Conflitos do dia a dia que envolvem contratos, dívidas, prejuízos e relações de consumo. Buscamos o acordo quando ele é possível e a Justiça quando é preciso.",
    matters: [
      "Contratos e cobranças",
      "Indenização por danos morais e materiais",
      "Direito do consumidor",
      "Imóveis e locação",
    ],
  },
  {
    id: "trabalhista",
    name: "Trabalhista",
    caseLabel: "caso trabalhista",
    summary:
      "É a área de especialização da Dra. Esther Evaristo. Orientamos antes de você assinar uma rescisão e acompanhamos a ação na Justiça do Trabalho quando ela é necessária.",
    matters: [
      "Verbas rescisórias e rescisão indireta",
      "Horas extras e adicionais",
      "Reconhecimento de vínculo de emprego",
      "Assédio moral e acidente de trabalho",
    ],
  },
  {
    id: "familia",
    name: "Família",
    caseLabel: "caso de família",
    summary:
      "Momentos delicados pedem escuta e discrição. Conduzimos cada caso com cuidado para proteger quem está envolvido, principalmente as crianças.",
    matters: [
      "Divórcio e dissolução de união estável",
      "Guarda e convivência",
      "Pensão alimentícia",
      "Inventário e partilha de bens",
    ],
  },
];

export const steps = [
  {
    title: "Você conta o que aconteceu",
    text: "Pelo WhatsApp, por telefone ou no escritório. Não precisa de formalidade: explique a situação com as suas palavras.",
  },
  {
    title: "Analisamos o seu caso",
    text: "Avaliamos os fatos e os documentos para entender quais são os seus direitos e quais caminhos existem.",
  },
  {
    title: "Explicamos cada caminho",
    text: "Você recebe uma orientação clara sobre etapas, prazos e riscos antes de decidir qualquer coisa.",
  },
  {
    title: "Acompanhamos até o fim",
    text: "Você é avisado sobre o andamento do processo e tem as dúvidas respondidas ao longo do caminho.",
  },
];

export const lawyers = [
  {
    name: "Esther Evaristo",
    role: "Advogada",
    oab: "", // ex.: "OAB/MG 000.000" — aparece no site quando preenchido
    bio: "Advogada e empresária, especialista em direito do trabalho. Atende clientes de Araguari e, online, de todo o Brasil.",
    crop: { size: "235%", position: "9% 30%" },
    links: [
      { label: "Instagram", href: site.social.instagram },
      { label: "LinkedIn", href: site.social.linkedin },
      { label: "TikTok", href: site.social.tiktok },
    ],
  },
  {
    name: "Diego Ventura",
    role: "Advogado",
    oab: "",
    bio: "Atua ao lado de Esther no atendimento e na condução dos casos do escritório, do primeiro contato à conclusão do processo.",
    crop: { size: "235%", position: "88% 22%" },
    links: [],
  },
];

// Avaliações públicas do perfil do escritório no Google.
export const reviews = [
  {
    author: "Danielle Aguiar",
    text: "Atendimento com excelência. Logo no primeiro contato, esclareceu todas as dúvidas, me orientou como se daria o andamento do processo e esteve sempre preocupado em ajudar. Gratidão.",
  },
  {
    author: "Ana Carolina",
    text: "Super recomendo o Dr. Diego e a Dra. Esther, são super capacitados e eficientes, me atenderam prontamente e fizeram um trabalho de excelência! Recomendo de olhos fechados!",
  },
  {
    author: "Lehary D. Souza",
    text: "Excelente atendimento! Foram muito atenciosos, entenderam minha situação com atenção, explicaram cada detalhe de forma clara. Muito satisfeita com o atendimento!",
  },
  {
    author: "Eliane Santos",
    text: "Excelente profissional. Sério, competente e humano. Super indico!",
  },
  {
    author: "Rafaela Geovana",
    text: "Ótimo atendimento, serviços de excelente qualidade e profissionais qualificados. Sempre que precisar vou contratar os serviços de vocês, super indico.",
  },
  {
    author: "Lidiane Rodrigues",
    text: "Excelente atendimento, muito atenciosos e prestativos. Tiraram minhas dúvidas de forma rápida e fácil. Estão de parabéns! Podem confiar.",
  },
  {
    author: "Larissa Oliveira",
    text: "Muito boa, ele me explicou tudo certinho o que eu deveria fazer. Muito obrigada.",
  },
];

export const faq = [
  {
    q: "Vocês atendem quem mora fora de Araguari?",
    a: "Sim. O atendimento online alcança clientes de todo o Brasil. A conversa começa pelo WhatsApp e os documentos podem ser enviados por lá mesmo.",
  },
  {
    q: "Como faço o primeiro contato?",
    a: "Envie uma mensagem para o WhatsApp (34) 99253-7758 contando, em poucas linhas, o que aconteceu. Se preferir, ligue ou venha ao escritório.",
  },
  {
    q: "Qual é o horário de atendimento?",
    a: "O escritório recebe mensagens 24 horas por dia. Para ser atendido presencialmente, combine o horário antes pelo WhatsApp.",
  },
  {
    q: "O que devo ter em mãos na primeira conversa?",
    a: "Seus documentos pessoais e tudo o que ajude a contar a história: contratos, holerites, mensagens e comprovantes. Se faltar algo, orientamos como conseguir.",
  },
  {
    q: "Vou entender o que está acontecendo no meu processo?",
    a: "Sim. Explicar cada etapa em linguagem simples faz parte do nosso trabalho, do primeiro contato ao encerramento do caso.",
  },
];

export const nav = [
  { label: "Áreas", href: "#areas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Advogados", href: "#advogados" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];
