# BIA LP — Landing page do Instituto BIA Beltrão

Landing page institucional de página única, desenvolvida com **Astro e TypeScript**, sem backend e sem sistema próprio de checkout. Os botões de venda e inscrição apontam para serviços externos, a configurar.

## Iniciar localmente

Requer Node.js 20.19+ ou 22.12+ (ou versão compatível com Astro 5).

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

O resultado estático é gerado na pasta `dist/`.

## Estrutura

- `src/pages/index.astro`: página completa, seções semânticas e FAQ.
- `src/styles/global.css`: estilos, cores e ajustes responsivos.
- `src/data/site.ts`: todo o conteúdo editável, URLs de compra e inscrições, horários, preços, cursos, dados de contato e perguntas frequentes.
- `public/brand.svg`: marca vetorial **provisória** baseada na referência visual.
- `public/gallery-placeholder.svg`: imagem substituta de galeria ilustrativa.
- `public/favicon.svg`: ícone vetorial provisório.

## Importante antes de publicar

- [ ] Substituir o **logotipo provisório** pelo arquivo oficial em SVG/PNG autorizado.
- [ ] Substituir a fotografia da galeria pela foto oficial (com autorização/licença de uso). A fotografia externa definida em `site.heroImage.src` é apenas uma referência visual, e o desenho local é fallback.
- [ ] Preencher **todos os campos entre colchetes** no arquivo `src/data/site.ts`.
- [ ] Revisar texto institucional, datas, horários, endereço, política de gratuidade, cursos, preços e respostas do FAQ com o cliente.
- [ ] Definir `site.links.tickets`, `site.links.courses` e, se necessário, URLs por curso em `site.courses[].url`.
- [ ] Configurar `maps`, `whatsapp`, `instagram`, `email`, `privacy` e `terms`.
- [ ] Confirmar a plataforma que recebe pagamentos, emite ingressos/QR Codes e realiza os disparos por e-mail. **Este site não faz nenhuma dessas operações.**
- [ ] Revisar SEO, textos legais e configurar o domínio correto e Open Graph absoluto.
- [ ] Validar visual no navegador real e em diferentes resoluções.

Quando uma URL externa não estiver configurada, o botão correspondente redireciona para a seção de contato, evitando endereços inventados. Isso **não** substitui o fluxo real de inscrição/compra.

## Deploy estático na Cloudflare

Integre o repositório ao serviço de hospedagem estática da Cloudflare e utilize:

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`

Conecte o domínio próprio após a validação do conteúdo. Nenhum segredo de API é necessário para a LP.

## Observação sobre fidelidade visual

A referência é um conjunto de screenshots de Figma, com textos marcados e imagens parcialmente cobertas pela interface. Tipografia, cores, tamanhos e espaçamentos foram reproduzidos por aproximação visual. Para equivalência pixel a pixel, precisam ser fornecidos os arquivos-fonte originais (fontes, logos, imagens) e valores de design.

## Prévia pelo GitHub Pages

O arquivo `.github/workflows/deploy-pages.yml` gera e publica a LP no GitHub Pages em
`https://joao-juvino.github.io/BIA-LP/`.

Se o deploy falhar por ausência de GitHub Pages:
1. Acesse **Settings → Pages** no repositório.
2. Escolha **GitHub Actions** como fonte de publicação.
3. Verifique se o plano GitHub permite Pages para um repositório **privado** (não altere a visibilidade sem aprovação).
4. Execute novamente o workflow **Publish BIA LP to GitHub Pages** em **Actions**.

A prévia atual acompanha a branch de desenvolvimento `feat/landing-page-astro`; quando
o projeto estiver aprovado, atualize o workflow para publicar apenas a `main`.
