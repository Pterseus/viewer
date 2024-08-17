<script setup>
const props = defineProps(['links'])
const localePath = useLocalePath()
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumbs__list">
      <li v-for="link in props.links" class="breadcrumbs__list-item">
        <NuxtLink :to="localePath(link.to)" class="breadcrumbs__link">{{
          link.label
        }}</NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<style>
.breadcrumbs {
  padding: var(--va-space-2) var(--va-space-3);
  border: var(--va-border-width) solid var(--va-border-color);

  background-color: black;
  color: cyan;

  a {
    color: inherit;
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
  }

  &__list {
    &-item {
      display: inline-block;

      &:not(:first-of-type) {
        position: relative;
      }

      & + &::before {
        content: '→';
        padding: 0 0.5rem;
      }
    }
  }
}
</style>
