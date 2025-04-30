<template>
  <div class="va-button-group">
    <breadcrumbs :links="[{ label: 'Viewer', to: 'index' }]" />
    <language-selector />
    <navigation />
    <div :style="{ padding: 'var(--va-space-3)' }">
      <a href="https://github.com/Pterseus/content/tree/main/data" class="va-link">{{ $t('view-on') }} GitHub</a>
    </div>
  </div>
</template>
