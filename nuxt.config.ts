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
    vueI18n: './i18n.config.ts',

    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en',
        file: 'en.json'
      },
      {
        code: 'es',
        name: 'Español',
        language: 'es',
        file: 'es.json'
      },
      {
        code: 'ca',
        language: 'ca',
        name: 'Català',
        file: 'en.json'
      },
      { code: 'grc', language: 'grc', name: 'Ancient Greek', file: 'en.json' }
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    customRoutes: 'config'
  }
})
