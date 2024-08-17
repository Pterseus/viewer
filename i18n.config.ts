export default defineI18nConfig(() => ({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      index: 'Index',
      en: 'English',
      es: 'Spanish',
      grc: 'Ancient Greek',
      ca: 'Catalan',
      lzh: 'Classic Chinese',
      'back-to-top': 'Back to top of page',
      'view-on': 'View on',
      'no-content': 'No content found'
    },
    es: {
      index: 'Índice',
      en: 'Inglés',
      es: 'Español',
      grc: 'Griego anitguo',
      ca: 'Catalán',
      lzh: 'Chino clásico',
      'back-to-top': 'Volver al inicio de la página',
      'view-on': 'Ver en',
      'no-content': 'No se ha encontrado contenido'
    }
  }
}))
