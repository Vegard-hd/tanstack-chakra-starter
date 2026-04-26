import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  server: {
    allowedHosts: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.split('node_modules/')[1].split('/')
            return parts[0].startsWith('@')
              ? `${parts[0]}/${parts[1]}`
              : parts[0]
          }
        },
      },
    },
  },
  plugins: [
    devtools(),
    nitro({
      preset: 'bun',
      // --- Build size & speed options (uncomment to experiment) ---

      // Minify the server bundle output
      minify: true,

      // Disable source maps for smaller/faster builds
      sourcemap: true,

      // Bundle everything into a single file (no per-route chunks)
      inlineDynamicImports: false,

      rollupConfig: { logLevel: 'silent' },
      // Pre-compress public assets (gzip/brotli/zstd)
      compressPublicAssets: { gzip: true, brotli: true },

      // Skip .output/public dir creation if not serving static assets from Nitro
      // noPublicDir: true,

      // Target Node.js explicitly (avoids unenv polyfill overhead)
      node: true,
    }),

    tanstackStart({
      router: {
        codeSplittingOptions: {},
      },
    }),
    viteReact({}),
  ],
})

export default config
