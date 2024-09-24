import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mapaDPVyU/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      manifest: {
        name: "mapaDPVyU",
        short_name: "mapaDPVyU",
        start_url: "/mapaDPVyU/",
        scope: "/mapaDPVyU/",
        description: "app para geolocalizar edificios y domicilios",
        theme_color: "#ffffff",
        display: "minimal-ui",
        orientation: "portrait",
        icons: [
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
        globPatterns: [
          "**/*.{js,css,html,svg,png,ico}",
          "public/icons/*.{png,svg}",
          "public/screenshots/*.png",
        ],
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

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
