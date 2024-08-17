// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/viewer/'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  css: ['varvara-css/css', '~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },

  content: {
    sources: {
      github: {
        driver: 'github',
        repo: 'Pterseus/content',
        branch: 'main',
        dir: 'data'
      }
    }
  },

  i18n: {
    locales: ['en', 'es', 'ca', 'grc'],
    strategy: 'prefix',
    defaultLocale: 'en',
    customRoutes: 'config'
  }
})
