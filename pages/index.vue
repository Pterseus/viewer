<script setup>
const links = [{ label: 'Viewer', to: 'index' }]
</script>

<template>
  <div class="va-button-group">
    <breadcrumbs :links="links" />
    <language-selector />
    <navigation />
    <div :style="{ padding: 'var(--va-space-3)' }">
      <p>
        <a href="https://github.com/Pterseus/content/tree/main/data"
          >{{ $t('view-on') }} GitHub</a
        >
      </p>
    </div>
  </div>
</template>
