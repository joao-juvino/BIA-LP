/**
 * Conteúdo centralizado da landing page.
 *
 * Antes de publicar para o cliente, substituir os campos entre [colchetes],
 * configurar os links oficiais e revisar as informações com o Instituto BIA.
 * Nenhum endereço, preço, data ou curso foi presumido.
 */
export const site = {
  name: 'Instituto BIA Beltrão',
  fullName: 'Instituto BIA · Instituto de Artes da Paraíba',
  description:
    'A arte da Paraíba tem endereço. Conheça as exposições, a curadoria, as obras e os cursos do Instituto BIA.',
  heroImage: {
    // Fotografia ilustrativa, não representa a sede real. Trocar pela foto aprovada.
    src: 'https://images.pexels.com/photos/7859306/pexels-photo-7859306.jpeg?auto=compress&cs=tinysrgb&w=1400',
    fallback: '/gallery-placeholder.svg',
    alt: 'Visitante contemplando pinturas abstratas em uma galeria de arte',
  },
  links: {
    tickets: '', // URL da bilheteria externa: https://...
    courses: '', // URL do formulário/plataforma externa de inscrições: https://...
    maps: '', // URL do Google Maps aprovada pelo Instituto
    whatsapp: '', // Ex.: https://wa.me/55DDDNÚMERO
    instagram: '', // URL do perfil institucional
    email: '', // E-mail de contato confirmado
    privacy: '', // URL da política de privacidade aprovada
    terms: '', // URL dos termos de compra aprovados
  },
  visit: {
    hours: '[dias e horários de funcionamento]',
    address: '[endereço], [cidade] — Paraíba',
    startingPrice: '[valor]',
  },
  ticketTypes: [
    { name: 'Inteira', description: 'Acesso a todas as exposições em cartaz.', note: '', color: 'coral' },
    { name: 'Meia-entrada', description: 'Para estudantes, pessoas idosas e demais casos previstos em lei.', note: '[valor]', color: 'gold' },
    { name: 'Gratuidade', description: 'Reserve o seu ingresso gratuito.', note: '[quem tem direito]', color: 'teal' },
    { name: 'Grupos e escolas', description: 'Visitas em grupo com condições especiais. Fale com a gente.', note: '', color: 'blue' },
  ],
  experiences: [
    { name: 'Obras', title: 'Obras para olhar de perto', description: 'Peças de artistas da Paraíba, perto o bastante para ver a pincelada, a textura, o gesto.', color: 'rose', shape: 'square' },
    { name: 'Curadoria', title: 'Curadoria que conta uma história', description: 'Cada sala é pensada para ter um começo, um meio e um fim. Você não só vê: entende.', color: 'blue', shape: 'circle' },
    { name: 'Exposições', title: 'Exposições que mudam', description: 'Sempre há algo novo em cartaz. Volte quantas vezes quiser.', color: 'coral', shape: 'square', note: '[exposição atual: nome e datas]' },
    { name: 'Cursos', title: 'Cursos para pôr a mão na arte', description: 'Aprenda com quem conhece o ofício, no ritmo de quem está começando.', color: 'teal', shape: 'circle' },
  ],
  courses: [
    { status: 'Inscrições abertas', statusColor: 'teal', name: '[nome do curso]', description: '[uma frase sobre o que a pessoa vai aprender ou fazer]', details: '[professor] · [datas] · [carga horária] · [local]', price: '[valor] ou [n]x de [valor]', url: '' },
    { status: 'Poucas vagas', statusColor: 'gold', name: '[nome do curso]', description: '[uma frase sobre o que a pessoa vai aprender ou fazer]', details: '[professor] · [datas] · [carga horária] · [local]', price: '[valor] ou [n]x de [valor]', url: '' },
    { status: 'Em andamento', statusColor: 'blue', name: '[nome do curso]', description: '[uma frase sobre o que a pessoa vai aprender ou fazer]', details: '[professor] · [datas] · [carga horária] · [local]', price: '[valor] ou [n]x de [valor]', url: '' },
  ],
  history: [
    { year: '[ano]', label: '[fundação ou primeira exposição]', color: 'rose' },
    { year: '[ano]', label: '[abertura ao público ou nova sede]', color: 'gold' },
    { year: '[ano]', label: '[crescimento do acervo ou grande exposição]', color: 'coral' },
    { year: '[ano]', label: '[início dos cursos]', color: 'teal' },
  ],
  faqs: [
    {
      question: 'Como recebo meu ingresso?',
      answer:
        'Após a compra, consulte as instruções e o comprovante enviados pela plataforma de ingressos. Verifique também a caixa de spam. A forma de entrega deve ser confirmada pelo Instituto BIA.',
    },
    {
      question: 'Posso levar crianças?',
      answer:
        'As orientações para crianças e acompanhantes, assim como eventuais condições de gratuidade, devem ser confirmadas com a equipe do instituto antes da visita.',
    },
    {
      question: 'O instituto é acessível?',
      answer:
        'Consulte a equipe do Instituto BIA para obter informações atualizadas sobre acesso, circulação e recursos de acessibilidade disponíveis.',
    },
    {
      question: 'Posso comprar para um grupo ou uma escola?',
      answer:
        'Para visitas em grupo e escolares, entre em contato com a equipe do instituto para saber sobre agendamento e condições específicas.',
    },
    {
      question: 'Posso trocar a data ou pedir reembolso?',
      answer:
        'Prazos e condições de troca, cancelamento e reembolso devem ser consultados na plataforma responsável pela compra e seguem a legislação aplicável.',
    },
    {
      question: 'Preciso ter experiência para fazer um curso?',
      answer:
        'Cada curso pode ter requisitos diferentes. Confira a descrição da turma ou entre em contato antes de efetuar a inscrição.',
    },
    {
      question: 'Como pago a inscrição em um curso?',
      answer:
        'Escolha a turma desejada e siga as instruções da plataforma de inscrições indicada. Os meios de pagamento dependerão da turma e do serviço utilizado.',
    },
  ],
} as const;
