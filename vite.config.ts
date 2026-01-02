import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import crypto from 'node:crypto'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Polyfill for environments where globalThis.crypto is not defined (e.g. older Node.js versions)
// This resolves the "TypeError: crypto.getRandomValues is not a function" during build
if (!globalThis.crypto) {
  // @ts-ignore
  globalThis.crypto = crypto.webcrypto;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'images',
          dest: '.' // Copies to root of dist, resulting in dist/images/
        }
      ]
    })
  ],
  base: './', // Ensures assets are loaded correctly on GitHub Pages
})