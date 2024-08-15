<script setup lang="ts">
const route = useRoute()
const [title, language] = route.params.slug
const data = await queryContent(title, language).findOne()
</script>

<template>
  <header>
    <NuxtLink to="/">Index</NuxtLink>
  </header>
  <main>
    <h3>{{ data.author }}</h3>
    <p>
      {{ data.translator && `${data.translator} translation` }} ({{
        new Date(data.date).getFullYear()
      }})
    </p>
    <ContentDoc />
    <a href="#top">Back to top of page</a>
  </main>
</template>
