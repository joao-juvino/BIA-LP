import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joao-juvino.github.io',
  base: '/BIA-LP/',
  output: 'static',
  build: {
    format: 'directory',
  },
});
