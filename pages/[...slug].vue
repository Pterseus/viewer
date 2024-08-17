<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const [title] = route.params.slug

const { data } = await useAsyncData('page-data', () =>
  queryContent(title, locale.value).findOne()
)
</script>

<template>
  <div>
    <NuxtLink :to="localePath('/')">{{ $t('index') }}</NuxtLink>
  </div>
  <language-selector />
  <ContentRenderer :value="data" v-if="data">
    <h3>{{ data.author }}</h3>
    <p>
      {{ data.translator && `${data.translator} translation` }} ({{
        new Date(data?.date).getFullYear()
      }})
    </p>
    <ContentRendererMarkdown :value="data" />
    <a href="#top" v-if="data">{{ $t('back-to-top') }}</a>
  </ContentRenderer>
  <p v-else>{{ $t('no-content') }}.</p>
</template>
