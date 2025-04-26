<script setup>
const { locale, setLocale, availableLocales } = useI18n()
</script>

<template>
  <label>
    <span>{{ $t('language') }}</span>
    <select @change="event => setLocale(event.target.value)" class="va-select">
      <option v-for="availableLocale in availableLocales" :value="availableLocale" :selected="locale === availableLocale">
        {{ $t(availableLocale) }}
      </option>
    </select>
  </label>
</template>
