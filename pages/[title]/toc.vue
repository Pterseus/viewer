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
    <header class="page-header">
      <h2>{{ $t('toc') }}</h2>
    </header>
    <nav v-if="data.body?.toc" class="va-button-group">
      <NuxtLink class="va-button" v-for="link in data.body.toc.links" :to="localePath(`/${data._dir}#${link.id}`)">{{ link.text }}</NuxtLink>
    </nav>
  </div>
</template>
