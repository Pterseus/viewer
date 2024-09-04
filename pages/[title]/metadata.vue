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
        >{{ $t(field) }}
        <input class="va-input" :value="$t(data[field])" type="text" readonly />
      </label>
    </template>
    <label>
      {{ $t('date') }}
      <input
        class="va-input"
        :value="new Date(data.date).getFullYear()"
        type="text"
        readonly
      />
    </label>
    <div class="va-button-group va-button-group--horizontal">
      <label :style="{ flex: 1 }">
        {{ $t('source') }}
        <input
          class="va-input"
          :value="data._file"
          :style="{ fontFamily: 'monospace' }"
          type="text"
          readonly
        />
      </label>
      <NuxtLink
        class="va-button"
        :to="`https://github.com/Pterseus/content/edit/main/data/${data._file}`"
        :style="{ display: 'flex', alignItems: 'center' }"
        >{{ $t('edit-on') }} GitHub</NuxtLink
      >
    </div>
  </div>
</template>
