<script setup lang="ts">
import { getReadingId } from '~/lib/utils'
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const { title } = route.params
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('readings').where('id', 'LIKE', `%${title}%`).where('id', 'LIKE', `%${locale.value}%`).first()
})
</script>

<template>
  <div class="va-button-group">
    <breadcrumbs v-if="data" :links="[{ label: `← ${data.title}`, to: localePath(`/${getReadingId(data.path)}`) }]" />
    <header class="page-header">
      <h2>{{ $t('toc') }}</h2>
    </header>
    <nav v-if="data?.body?.toc" class="va-button-group">
      <NuxtLink class="va-button" v-for="link in data.body.toc.links" :to="{ path: localePath(`/${getReadingId(data.path)}`), hash: '#' + link.id }">{{ link.text }}</NuxtLink>
    </nav>
  </div>
</template>
