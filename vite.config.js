import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['sharp'], // Marca sharp como externo para que no lo procese
    },
  },
  optimizeDeps: {
    exclude: ['sharp'], // Evita que Vite trate de optimizar 'sharp'
  },
  base: "/mapaDPVyU/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },

      manifest: {
        name: "mapaDPVyU",
        id: "/mapaDPVyU/",
        short_name: "mapaDPVyU",
        start_url: "/",
        scope: "/",
        description: "app para geolocalizar edificios y domicilios",
        theme_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "./icons/favicon.ico", // Ruta a tu favicon
            sizes: "32x32", // Tamaños del favicon
            type: "image/x-icon", // Tipo MIME para .ico
          },
          {
            src: "./icons/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "./icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "./icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "./icons/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "./screenshots/screenshot-desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "./screenshots/screenshot-mobile.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
      },

      workbox: {
        globDirectory: "/home/lean/Desktop/mapDPVYU/",
        globPatterns: [
          "**/*.{js,css,html,png,ico}",
          "public/icons/*.{png,ico}",
          "public/screenshots/*.png",
        ],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/\w+\.tile\.openstreetmap\.org\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "osm-tiles",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // ... tus otras configuraciones de runtimeCaching ...
        ],

        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallback: "/mapaDPVyU/index.html", // Ruta fallback en caso de que no se encuentre una ruta
        navigateFallbackAllowlist: [/^\/mapaDPVyU\//], // Permitir la ruta "/mapaDPVyU/"
      },
    }),
  ],
});
