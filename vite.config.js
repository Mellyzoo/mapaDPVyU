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

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "mapDPVYU",
        short_name: "mapDPVYU",
        start_url: "/mapaDPVyU/",
        scope: "/mapaDPVyU/",
        description: "app to geolocalization build and house",
        theme_color: "#ffffff",
        display: "minimal-ui",
        orientation: "portrait",
        icons: [
          {
            src: "/mapaDPVyU/public/icons/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/mapaDPVyU/public/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/mapaDPVyU/public/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/mapaDPVyU/public/icons/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/mapaDPVyU/public/screenshots/screenshot-desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/mapaDPVyU/public/screenshots/screenshot-mobile.png",
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
            urlPattern:
              /^https:\/\/mellyzoo\.github\.io\/mapaDPVyU\/public\/icons\//,
            handler: "CacheFirst",
            options: {
              cacheName: "icon-cache",
              expiration: {
                maxEntries: 10,
              },
            },
          },
        ],

        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallback: "/index.html", // Ruta fallback en caso de que no se encuentre una ruta
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
