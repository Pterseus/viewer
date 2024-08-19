<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const { title } = route.params

const { data } = await useAsyncData('page-data', () =>
  queryContent(title as string, locale.value).findOne()
)

const links = [{ label: 'Viewer', to: 'index' }]
</script>

<template>
  <div class="va-button-group">
    <breadcrumbs :links="links" />
    <header v-if="data">
      <h2>{{ data.title }}</h2>
    </header>
    <language-selector />
    <div class="content">
      <span>Content</span>
      <ContentRenderer :value="data" v-if="data">
        <ContentRenderer :value="data" />
        <a href="#top" v-if="data">{{ $t('back-to-top') }}</a>
      </ContentRenderer>
      <p v-else>{{ $t('no-content') }}.</p>
    </div>
  </div>
</template>

<style>
header,
.content {
  padding: var(--va-space-2) var(--va-space-3);
  border: var(--va-border-width) solid var(--va-border-color);

  a {
    color: inherit
  }

  > div {
    max-width: 32rem;
    text-align: justify;
    margin: 0 auto;
  }
}

header h2 {
  text-transform: uppercase;
  margin: 0 !important;
}
</style>
