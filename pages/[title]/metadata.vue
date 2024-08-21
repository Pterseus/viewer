<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();
const { title } = route.params;
const data = await queryContent(title as string, locale.value).findOne();
const links = [{ label: `← ${data.title}`, to: localePath(`/${data._dir}`) }];
</script>

<template>
  <div class="va-button-group">
    <breadcrumbs :links="links" />
    <header class="page-header" v-if="data">
      <h2>Metadata</h2>
    </header>
    <Input id="title" :label="$t('title')" :value="data.title" :style="{ flex: 1 }" disabled />
    <Input id="author" :label="$t('author')" :value="data.author" :style="{ flex: 1 }" disabled />
    <Input id="language" :label="$t('language')" :value="$t(data.language)" :style="{ flex: 1 }" disabled />
    <Input id="translator" :label="$t('translator')" :value="data.translator" v-if="data.translator" :style="{ flex: 1 }" disabled />
    <Input id="date" :label="$t('date')" :value="new Date(data.date).getFullYear()" :style="{ flex: 1 }" disabled />
    <div class="va-button-group va-button-group--horizontal">
      <Input id="file" :label="$t('source')" :value="data._file" :style="{ flex: 1, fontFamily: 'monospace' }" disabled />
      <NuxtLink class="va-button" :to="`https://github.com/Pterseus/content/edit/main/data/${data._file}`" :style="{ display: 'flex', alignItems: 'center'}">{{ $t('edit-on') }} GitHub</NuxtLink>
    </div>
  </div>
</template>
