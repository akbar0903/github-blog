// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import expressiveCode from 'astro-expressive-code'
import { pluginColorChips } from 'expressive-code-color-chips'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    expressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        codeFontFamily: 'JetBrains Mono, Consolas, sans-serif',
        codeFontSize: '1rem',
      },
      plugins: [pluginColorChips()],
    }),
  ],
})
