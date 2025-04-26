import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    readings: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/Pterseus/content',
        include: 'data/**'
      }
    })
  }
})
