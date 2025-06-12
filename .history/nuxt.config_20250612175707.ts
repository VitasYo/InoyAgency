// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  elementPlus: {
    importStyle: 'scss',
  }
})
export default {
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'production' 
      ? 'https://inoy-agency.ru/api' 
      : 'http://localhost:3001/api'
  }
}