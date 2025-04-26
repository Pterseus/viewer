<script setup>
import { getReadingId } from '~/lib/utils'
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: list } = await useAsyncData('index', () => {
  return queryCollection('readings').where('id', 'LIKE', `%${locale.value}%`).all()
})
</script>

<template>
  <nav class="va-button-group">
    <NuxtLink :to="localePath(`/${getReadingId(item.path)}`)" v-for="item in list" :key="item._id" class="va-button va-button--action">
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>

<style></style>
