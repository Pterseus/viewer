<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const { title } = route.params
const { data } =  await useAsyncData('data', () => queryContent(title as string, locale.value).findOne())
const links = [{ label: 'Viewer', to: 'index' }]
</script>

<template>
  <div class="va-button-group">
    <breadcrumbs :links="links" />
    <header class="page-header" v-if="data">
      <h2>{{ data.title }}</h2>
    </header>
    <language-selector />
    <NuxtLink
      v-if="data"
      :to="localePath(`/${data._dir}/metadata`)"
      class="va-button va-button--action"
      >Metadata</NuxtLink
    >
    <NuxtLink
      v-if="data"
      :to="localePath(`/${data._dir}/toc`)"
      class="va-button va-button--action"
      >{{ $t('toc') }}</NuxtLink
    >
    <div class="content">
      <span class="label">Content</span>
      <NuxtLink
        v-if="data"
        :to="`https://github.com/Pterseus/content/edit/main/data/${data._file}`"
        target="_blank"
        class="label edit"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          class="octicon octicon-pencil"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          style="
            display: inline-block;
            user-select: none;
            vertical-align: text-bottom;
            overflow: visible;
          "
        >
          <path
            d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
          ></path>
        </svg>
        {{ $t('edit-on') }} GitHub</NuxtLink
      >
      <ContentRenderer :value="data" v-if="data">
        <ContentRenderer :value="data" />
        <a href="#top" v-if="data" class="va-button back-to-top">{{
          $t('back-to-top')
        }}</a>
      </ContentRenderer>
      <p v-else>{{ $t('no-content') }}.</p>
    </div>
  </div>
</template>

<style>
.page-header,
.content {
  padding: var(--va-space-2) var(--va-space-3);
  border: var(--va-border-width) solid var(--va-border-color);
}

.content {
  .label {
    font-size: var(--va-font-size-0);
  }

  a.edit {
    position: sticky;
    top: var(--va-space-1);
    padding-top: var(--va-space-1);
    float: right;
    color: var(--va-color-primary);
    z-index: 1;
    &:hover {
      text-decoration: underline;
    }

    svg {
      width: var(--va-font-size-0);
    }
  }

  &__header {
    font-size: var(--va-font-size-0);
    display: flex;
    justify-content: space-between;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    background-color: var(--va-surface-primary);
    backdrop-filter: blur(8px);
    position: sticky;
    border-bottom: var(--va-border-width) solid var(--va-border-color);
    padding-top: var(--va-space-2);
    padding-bottom: var(--va-space-2);
    top: 0;
  }

  h2 {
    margin-top: -4.5rem;
    padding-top: 4.5rem;
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

.back-to-top {
  --va-button-padding: var(--va-space-2);
  font-size: var(--va-font-size-0);
  display: inline-block;
  backdrop-filter: blur(8px);

  /* https://www.freecodecamp.org/news/css-only-back-to-top-button */
  --offset: 65px;

  position: sticky;
  bottom: var(--va-space-3);
  place-self: end;
  margin-top: calc(100vh + var(--offset));
}
</style>
