import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  description: 'Uma solução root baseada em kernel para dispositivos Android.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: 'Última atualização',

    sidebar: {
      '/pt_BR/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121/APatch' }
    ],
  }
})

function nav() {
  return [
    { text: 'Guia', link: '/pt_BR/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Guia',
        items: [
          { text: 'O que é APatch?', link: '/pt_BR/what-is-apatch' },
          { text: 'Requisitos de instalação', link: '/pt_BR/requirements' },
          { text: 'Aviso importante', link: '/pt_BR/warn' },
          { text: 'Instalação', link: '/pt_BR/install' },
          { text: 'Patch', link: '/pt_BR/patch' },
          { text: 'Flash', link: '/pt_BR/flash' },
          { text: 'Ajuda e suporte', link: '/pt_BR/support' },
          { text: 'Perguntas frequentes', link: '/pt_BR/faq' },
        ]
    }
  ]
}
