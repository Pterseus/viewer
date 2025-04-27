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
      <h2>Metadata</h2>
    </header>
    <template v-for="field in ['title', 'author', 'language', 'translator']" v-if="data">
      <label
        ><span>{{ $t(field) }}</span>
        <input class="va-input" :value="field === 'language' ? $t(data.meta[field] as string) : data.meta[field] || data.title" type="text" readonly />
      </label>
    </template>
    <label>
      <span>{{ $t('date') }}</span>
      <input class="va-input" :value="new Date(data!.meta.date as string).getFullYear()" type="text" readonly />
    </label>
    <div class="va-button-group va-button-group--horizontal">
      <label :style="{ flex: 1 }">
        <span>{{ $t('source') }}</span>
        <input class="va-input" :value="'content/' + data!.id.replace('readings/', '')" :style="{ fontFamily: 'monospace' }" type="text" readonly />
      </label>
      <NuxtLink class="va-button" :to="`https://github.com/Pterseus/content/edit/main/${data!.id.replace('readings/', '')}`">{{ $t('edit-on') }} GitHub</NuxtLink>
    </div>
  </div>
</template>
