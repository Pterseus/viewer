// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  content: {
    sources: {
      github: {
        driver: 'github',
        repo: 'Pterseus/content',
        branch: 'main',
        dir: 'data'
      }
    }
  }
})
