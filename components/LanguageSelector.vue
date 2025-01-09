<script setup>
const router = useRouter()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="va-select-group">
    <label for="lang">{{ $t('language') }}</label>
    <select
      id="lang"
      @change="event => router.push(switchLocalePath(event.target.value))"
      class="va-select"
    >
      <option
        v-for="availableLocale in locales"
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
