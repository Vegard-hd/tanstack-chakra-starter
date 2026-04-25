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
        codeSplitting: {
          groups: [
            {
              name: 'vendor',
              minSize: 100000, // 100KB
              maxSize: 300000, // 300KB
              priority: 10,
            },
          ],
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
      // router: {
      //   codeSplittingOptions: {},
      // },
    }),
    viteReact({}),
  ],
})

export default config
