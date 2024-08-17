<script setup>
const localePath = useLocalePath()
const { locale, setLocale, availableLocales } = useI18n()
const query = {
  path: '/',
  where: { language: locale.value }
}
</script>

<template>
  <div>
    <h1>Pterseus</h1>
    <h2>Content viewer</h2>
  </div>
  <language-selector />
  <nav>
    <ContentList :query="query" v-slot="{ list }">
      <NuxtLink
        v-for="item in list"
        :key="item._id"
        :to="localePath(`/${item._dir}`)"
        :style="{ display: 'block' }"
      >
        {{ item.title }}
      </NuxtLink>
    </ContentList>
  </nav>
  <p>
    <a href="https://github.com/Pterseus/content/tree/main/data"
      >{{ $t('view-on') }} GitHub</a
    >
  </p>
</template>
