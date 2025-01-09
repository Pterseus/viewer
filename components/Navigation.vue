<script setup>
const localePath = useLocalePath()
const { locale } = useI18n()
const query = {
  path: '/',
  where: { language: locale.value }
}
</script>

<template>
  <nav class="va-button-group">
    <ContentList :query="query" v-slot="{ list }">
      <a
        v-for="item in list"
        :key="item._id"
        :href="localePath(`/${item._dir}`)"
        class="va-button va-button--action"
      >
        {{ item.title }}
      </a>
    </ContentList>
  </nav>
</template>

<style></style>
