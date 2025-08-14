// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/scripts', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },

  content: {
    experimental: {
      // Use Node.js native SQLite driver (Node >= 22.5) instead of better-sqlite3
      nativeSqlite: true
    }
  }
})