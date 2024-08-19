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

  a {
    color: cyan;
    font-weight: bold;
    margin-left: calc(var(--va-space-1) * -1);
    margin-right: calc(var(--va-space-1) * -1);
    padding: var(--va-space-1);
    text-transform: uppercase;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.1);
    }
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
