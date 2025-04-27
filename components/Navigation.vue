<script setup>
import { getReadingId } from '~/lib/utils'
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: readings } = await useAsyncData(
  'readings',
  () => {
    return queryCollection('readings').where('id', 'LIKE', `%${locale.value}%`).all()
  },
  {
    watch: [locale]
  }
)
</script>

<template>
  <nav class="va-button-group">
    <NuxtLink :to="localePath(`/${getReadingId(reading.path)}`)" v-for="reading in readings" :key="reading.id" class="va-button va-button--action">
      {{ reading.title }}
    </NuxtLink>
  </nav>
</template>
