import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  description: 'Root-решение на основе ядра для устройств Android.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: 'Последнее обновление',

    sidebar: {
      '/ru/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121/APatch' }
    ],
  }
})

function nav() {
  return [
    { text: 'Руководство', link: '/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Руководство',
        items: [
          { text: 'Что такое APatch?', link: '/ru/what-is-apatch' },
          { text: 'Требования к установке', link: '/ru/requirements' },
          { text: 'Предупреждение', link: '/ru/warn' },
          { text: 'Установка', link: '/ru/install' },
          { text: 'Патчинг', link: '/ru/patch' },
          { text: 'Прошивка', link: '/ru/flash' },
          { text: 'Обновление', link: '/ru/update' },
          { text: 'Обратная связь и помощь', link: '/ru/support' },
	  { text: 'Руководство по разработке APM', link: '/ru/apm-guide' },
          { text: 'Частые вопросы', link: '/ru/faq' },
        ]
    }
  ]
}
