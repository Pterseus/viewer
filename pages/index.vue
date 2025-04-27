<template>
  <div class="va-button-group">
    <breadcrumbs :links="[{ label: 'Viewer', to: 'index' }]" />
    <language-selector />
    <navigation />
    <div :style="{ padding: 'var(--va-space-3)' }">
      <p>
        <a href="https://github.com/Pterseus/content/tree/main/data">{{ $t('view-on') }} GitHub</a>
      </p>
    </div>
  </div>
</template>
