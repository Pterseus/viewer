<script setup>
const localePath = useLocalePath()
const { locale, setLocale, availableLocales } = useI18n()
</script>

<template>
  <div class="va-select-group">
    <label for="lang">Language</label>
    <select
      id="lang"
      @change="event => setLocale(event.target.value)"
      class="va-select"
    >
      <option
        v-for="availableLocale in availableLocales"
        :value="availableLocale"
        :selected="locale === availableLocale"
      >
        {{ $t(availableLocale) }}
      </option>
    </select>
  </div>
</template>

<style>
.va-select {
  width: 100%;
}
</style>
