import dotenv from 'dotenv'
dotenv.config()

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/ui', '@nuxt/image','@nuxthub/core', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt',
  ],
  // ssr: true, 
  app: {
    baseURL: '/'
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
})