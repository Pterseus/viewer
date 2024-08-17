<script setup>
const localePath = useLocalePath()
const { locale, setLocale, availableLocales } = useI18n()
</script>

<template>
  <select @change="event => setLocale(event.target.value)">
    <option
      v-for="availableLocale in availableLocales"
      :value="availableLocale"
      :selected="locale === availableLocale"
    >
      {{ $t(availableLocale) }}
    </option>
  </select>
</template>
