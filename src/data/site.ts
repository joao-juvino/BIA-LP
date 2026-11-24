/**
 * Conteúdo da landing page, conforme o layout aprovado no Figma.
 * Valores, datas e dados cadastrais devem ser confirmados pelo Instituto
 * antes de qualquer publicação comercial definitiva.
 */
export const site = {
  name: 'Instituto BIA Beltrão',
  fullName: 'Instituto de Artes da Paraíba',
  description: 'O espaço da arte e cultura paraibana. Conheça o acervo, as exposições e os cursos do Instituto BIA.',
  heroImage: {
    src: '/bia-fachada-figma.webp', // Provisória: recorte da tela do Figma. Substituir pela foto original em alta resolução.
    fallback: '/gallery-placeholder.svg',
    alt: 'Fachada do Instituto BIA Beltrão durante o dia, com obras coloridas nas janelas',
  },
  closingImage: {
    // Provisória: recorte da tela do Figma. Substituir pela exportação original em alta resolução.
    src: '/arte-esperando.webp',
    alt: 'Duas pessoas sentadas de costas observando uma grande pintura em um museu',
  },
  links: {
    tickets: '', // Vincular à bilheteria oficial quando disponível (enquanto vazio, os botões abrem o WhatsApp)
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Vigario+Sarlen+29+Centro+Joao+Pessoa+PB',
    whatsapp: 'https://wa.me/558332040264',
    instagram: 'https://www.instagram.com/biainstitutodeartes/',
    email: 'bia@beltraoinstitutodeartes.com.br',
    privacy: '',
    terms: '',
  },
  visit: {
    hours: 'Terça a sábado, das 9h às 17h',
    phone: '(83) 3204-0264',
    phoneHref: 'tel:+558332040264',
  },
  ticketTypes: [
    { name: 'Inteira', description: 'Acesso a todas as exposições em cartaz', price: 'R$ 35,00', color: 'coral' },
    { name: 'Meia-entrada', description: 'Estudantes ou pessoas idosas e demais casos previstos em lei.', price: 'R$ 17,50', color: 'gold' },
    { name: 'Gratuidade', description: 'Tem direito? Fale com nossa equipe e reserve o seu ingresso gratuito.', color: 'teal' },
    { name: 'Grupos e escolas', description: 'Visitas em grupo com condições especiais. Fale com a gente.', color: 'blue' },
  ],
  experiences: [
    { name: 'Obras', title: ['Obras para olhar', 'de perto'], description: 'Peças de artistas da Paraíba, perto o bastante para ver a pincelada, a textura, o gesto.', color: 'rose', shape: 'square' },
    { name: 'Curadoria', title: ['Curadoria que', 'conta uma', 'história'], description: 'Cada sala é pensada para ter um começo, um meio e um fim. Você não só vê: entende.', color: 'blue', shape: 'circle' },
    { name: 'Exposições', title: ['Exposições que', 'mudam'], description: 'Sempre há algo novo em cartaz. Volte quantas vezes quiser.', color: 'coral', shape: 'square' },
    { name: 'Cursos', title: ['Cursos para', 'pôr a mão', 'na arte'], description: 'Aprenda com quem conhece o ofício, no ritmo de quem está começando.', color: 'teal', shape: 'circle' },
  ],
  courses: [
    {
      name: 'Pintura em tela',
      description: 'Descubra o prazer de pintar e explore sua criatividade em nosso curso de Pintura em Tela! Aprenda técnicas, desenvolva suas habilidades artísticas e transforme suas ideias em obras únicas, mesmo que você nunca tenha pintado antes.',
    },
    {
      name: 'Pintura em azulejo e cerâmica',
      description: 'Transforme peças de cerâmica ou azulejo em verdadeiras obras de arte! Em nosso curso de Pintura em Azulejo e Cerâmica, você aprenderá técnicas de pintura, combinação de cores e decoração de superfícies, explorando sua criatividade e personalizando peças com seu próprio estilo.',
    },
    {
      name: 'Fotografia',
      description: 'Aprenda a enxergar o mundo por novas perspectivas no nosso curso de Fotografia! Explore técnicas de composição, iluminação e enquadramento para registrar momentos, contar histórias e transformar seu olhar criativo em imagens incríveis.',
    },
    {
      name: 'Xilogravura',
      description: 'Descubra a arte da gravura em madeira em nosso curso de Xilogravura! Aprenda técnicas de desenho, entalhe e impressão artesanal, explorando texturas, contrastes e composições enquanto conhece uma importante tradição da cultura popular brasileira.',
    },
    {
      name: 'Desenho artístico',
      description: 'Desenvolva seu olhar artístico e transforme ideias em desenhos! Em nosso curso de Desenho Artístico, você aprenderá técnicas de traço, proporção, perspectiva, luz e sombra, explorando diferentes formas de expressão e desenvolvendo seu próprio estilo.',
    },
    {
      name: 'Vidro e Porcelanato',
      description: 'Descubra novas possibilidades artísticas em nosso curso de Pintura em Vidro e Porcelanato! Aprenda técnicas de pintura e decoração, explore diferentes cores e acabamentos e transforme superfícies em peças exclusivas, cheias de personalidade.',
    },
    {
      name: 'Aquarela',
      description: 'Explore a delicadeza das cores e a fluidez da água em nosso curso de Aquarela! Aprenda técnicas de pintura, transparência e mistura de cores, desenvolvendo sua expressão artística e criando composições únicas, mesmo sem experiência prévia.',
    },
    {
      name: 'História da Paraíba',
      description: 'Descubra as origens, tradições e acontecimentos que construíram a identidade paraibana! Em nosso curso de História da Paraíba, você conhecerá importantes personagens, acontecimentos históricos e manifestações culturais, explorando a riqueza do patrimônio e da memória do nosso estado.',
    },
    {
      name: 'História da arte',
      description: 'Viaje por diferentes épocas e descubra como a arte transformou a sociedade ao longo dos séculos! Em nosso curso de História da Arte, você conhecerá importantes movimentos artísticos, artistas e obras, compreendendo seus contextos históricos, culturais e sociais.',
    },
    {
      name: 'Desenho digital',
      description: 'Transforme sua criatividade em arte digital! Em nosso curso de Desenho Digital, você aprenderá a explorar ferramentas digitais, técnicas de ilustração, composição e colorização, desenvolvendo suas habilidades artísticas e criando ilustrações com seu próprio estilo.',
    },
    {
      name: 'Teatro',
      description: 'Descubra o poder da expressão e da interpretação em nosso curso de Teatro! Explore técnicas de atuação, improvisação, expressão corporal e vocal, desenvolvendo sua criatividade, autoconfiança e capacidade de comunicação dentro e fora dos palcos.',
    },
  ],
  statistics: [
    { value: '1000+', label: 'obras no grande acervo de artistas contemporâneos da Paraíba', color: 'rose' },
    { value: '13 ateliês', label: 'com artistas criando ao vivo', color: 'gold' },
    { value: '360°', label: 'de vista no mirante mais alto do Centro Histórico de João Pessoa.', color: 'coral' },
    { value: '1°', label: 'Laboratório de\nrestauro da Paraíba', color: 'teal' },
  ],
  faqs: [
    { question: 'Como recebo meu ingresso?', answer: 'Após a confirmação do pagamento, você receberá seu ingresso no e-mail cadastrado.' },
    { question: 'Posso levar crianças?', answer: 'Depende da classificação indicativa de cada atividade. Consulte as informações do curso ou evento.' },
    { question: 'Posso comprar para um grupo ou uma escola?', answer: 'Sim! Entre em contato para consultar condições especiais e agendamentos.' },
    { question: 'Preciso ter experiência para fazer um curso?', answer: 'Não! Nossos cursos também são voltados para iniciantes.' },
  ],
} as const;
