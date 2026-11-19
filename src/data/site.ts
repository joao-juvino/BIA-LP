/**
 * Conteúdo reproduzido das referências visuais fornecidas pelo cliente.
 * Promoção, turmas, valores, datas e dados cadastrais devem ser confirmados
 * pelo Instituto antes de qualquer publicação comercial definitiva.
 */
export const site = {
  name: 'Instituto BIA Beltrão',
  fullName: 'Instituto BIA · Instituto de Artes da Paraíba',
  description: 'O espaço da arte e cultura paraibana. Conheça o acervo, as exposições e os cursos do Instituto BIA.',
  heroImage: {
    src: '/bia-fachada-hd.webp',
    fallback: '/gallery-placeholder.svg',
    alt: 'Fachada do Instituto BIA Beltrão à noite, com obras coloridas e iluminação arquitetônica',
  },
  links: {
    tickets: '', // Vincular à bilheteria oficial quando disponível
    courses: '', // Vincular à inscrição oficial quando disponível
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Vigario+Sarlen+29+Centro+Joao+Pessoa+PB',
    whatsapp: 'https://wa.me/558332040264', // Confirmar se este número recebe WhatsApp
    instagram: 'https://www.instagram.com/biainstitutodeartes/',
    email: 'bia@beltraoinstitutodeartes.com.br',
    privacy: '',
    terms: '',
  },
  visit: {
    hours: 'Terça a sábado, das 9h às 17h',
    address: 'Rua Vig. Sarlen, 29 · Centro, João Pessoa - PB',
    phone: '(83) 3204-0264',
  },
  ticketTypes: [
    { name: 'Inteira', description: 'Acesso a todas as exposições em cartaz.', color: 'coral' },
    { name: 'Meia-entrada', description: 'Estudantes ou pessoas idosas e demais casos previstos em lei.', color: 'gold' },
    { name: 'Gratuidade', description: 'Tem direito? Reserve o seu ingresso gratuito.', color: 'teal' },
    { name: 'Grupos e escolas', description: 'Visitas em grupo com condições especiais. Fale com a gente.', color: 'blue' },
  ],
  experiences: [
    { name: 'Obras', title: 'Obras para olhar de perto', description: 'Peças de artistas da Paraíba, perto o bastante para ver a pincelada, a textura, o gesto.', color: 'rose', shape: 'square' },
    { name: 'Curadoria', title: 'Curadoria que conta uma história', description: 'Cada sala é pensada para ter um começo, um meio e um fim. Você não só vê: entende.', color: 'blue', shape: 'circle' },
    { name: 'Exposições', title: 'Exposições que mudam', description: 'Sempre há algo novo em cartaz. Volte quantas vezes quiser.', color: 'coral', shape: 'square', note: '[exposição atual: nome e datas]' },
    { name: 'Cursos', title: 'Cursos para pôr a mão na arte', description: 'Aprenda com quem conhece o ofício, no ritmo de quem está começando.', color: 'teal', shape: 'circle' },
  ],
  courses: [
    {
      status: 'Inscrições abertas', statusColor: 'teal', name: 'Pintura em tela',
      description: 'Descubra o prazer de pintar e explore sua criatividade em nosso curso de Pintura em Tela! Aprenda técnicas, desenvolva suas habilidades artísticas e transforme suas ideias em obras únicas, mesmo que você nunca tenha pintado antes.',
      teacher: 'Fulano', period: 'Turmas novembro 2026', duration: '20h', oldPrice: 'R$ 150,00', price: 'R$ 140,00', url: 'https://www.asaas.com/000/c/t0udk3j3mnqheyzr',
    },
    {
      status: 'Inscrições abertas', statusColor: 'teal', name: 'Cerâmica',
      description: 'Descubra a arte de transformar a argila em peças únicas no nosso curso de Cerâmica! Aprenda técnicas de modelagem, explore sua criatividade e experimente o prazer de criar com as próprias mãos, mesmo sem experiência prévia.',
      teacher: 'Fulano', period: 'Turmas novembro 2026', duration: '20h', oldPrice: 'R$ 150,00', price: 'R$ 140,00', url: 'https://sandbox.asaas.com/000/c/1j94c44kcx2b6ods',
    },
    {
      status: 'Poucas vagas', statusColor: 'gold', name: 'Fotografia',
      description: 'Aprenda a enxergar o mundo por novas perspectivas no nosso curso de Fotografia! Explore técnicas de composição, iluminação e enquadramento para registrar momentos, contar histórias e transformar seu olhar criativo em imagens incríveis.',
      teacher: 'Fulano', period: 'Turmas novembro 2026', duration: '20h', oldPrice: 'R$ 150,00', price: 'R$ 140,00', url: 'https://sandbox.asaas.com/000/c/5zv2du6h1q7jrgcg',
    },
  ],
  statistics: [
    { value: '1000+', label: 'obras no grande acervo de artistas contemporâneos da Paraíba', color: 'rose' },
    { value: '13 ateliês', label: 'com artistas criando ao vivo', color: 'gold' },
    { value: '360°', label: 'de vista no mirante mais alto do Centro Histórico de João Pessoa.', color: 'coral' },
    { value: '1°', label: 'Laboratório de restauro da Paraíba', color: 'teal' },
  ],
  faqs: [
    { question: 'Como recebo meu ingresso?', answer: 'Após a confirmação do pagamento, você receberá seu ingresso no e-mail cadastrado.' },
    { question: 'Posso levar crianças?', answer: 'Depende da classificação indicativa de cada atividade. Consulte as informações do curso ou evento.' },
    { question: 'O instituto é acessível?', answer: 'Sim! O instituto conta com elevadores e banheiros adaptados para garantir mais acessibilidade e conforto dos visitantes.' },
    { question: 'Posso comprar para um grupo ou uma escola?', answer: 'Sim! Entre em contato para consultar condições especiais e agendamentos.' },
    { question: 'Posso trocar a data ou pedir reembolso?', answer: 'As solicitações seguem as condições de compra e a legislação vigente. Consulte nossa equipe.' },
    { question: 'Preciso ter experiência para fazer um curso?', answer: 'Não! Nossos cursos também são voltados para iniciantes.' },
    { question: 'Como pago a inscrição em um curso?', answer: 'Basta preencher o formulário de inscrição. Após o envio, nossa equipe comercial entrará em contato para dar continuidade ao atendimento.' },
  ],
} as const;
