<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const { title } = route.params
const data = await queryContent(title as string, locale.value).findOne()
const links = [{ label: `← ${data.title}`, to: localePath(`/${data._dir}`) }]

const fields = ['title', 'author', 'language', 'translator']
</script>

<template>
  <div class="va-button-group">
    <breadcrumbs :links="links" />
    <header class="page-header" v-if="data">
      <h2>Metadata</h2>
    </header>
    <template v-for="field in fields">
      <label v-if="data[field]"
        ><span>{{ $t(field) }}</span>
        <input class="va-input" :value="field === 'language' ? $t(data[field]) : data[field]" type="text" readonly />
      </label>
    </template>
    <label>
      <span>{{ $t('date') }}</span>
      <input class="va-input" :value="new Date(data.date).getFullYear()" type="text" readonly />
    </label>
    <div class="va-button-group va-button-group--horizontal">
      <label :style="{ flex: 1 }">
        <span>{{ $t('source') }}</span>
        <input class="va-input" :value="data._file" :style="{ fontFamily: 'monospace' }" type="text" readonly />
      </label>
      <NuxtLink class="va-button" :to="`https://github.com/Pterseus/content/edit/main/data/${data._file}`">{{ $t('edit-on') }} GitHub</NuxtLink>
    </div>
  </div>
</template>
