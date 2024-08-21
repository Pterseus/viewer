<script setup>
const props = defineProps(['id', 'label', 'value', 'disabled'])

</script>

<template>
  <div class="input-group">
    <label :for="id">{{ label}}</label>
    <input :id="id" class="input" :value="value" type="text" :disabled="disabled">
  </div>
</template>

<style>
.input-group {
  position: relative;
  display: flex;

  label {
    position: absolute;
    font-size: var(--va-font-size-0);
    padding-left: calc(var(--va-space-3) + var(--va-border-width));
    padding-top: var(--va-space-2);
  }

  .input {
    flex: 1;
    font-size: var(--va-font-size-1);
    padding-top: calc(var(--va-space-3) * 2);
    padding-bottom: var(--va-space-2);
    font-family: inherit;
  }
}
.input {
  appearance: none;
  background-color: transparent;
  border: var(--va-border-width) solid var(--va-border-color);
  color: inherit;
  padding: var(--va-space-3);
}
</style>
