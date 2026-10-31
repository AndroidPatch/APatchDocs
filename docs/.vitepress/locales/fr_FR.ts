import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fr_FR',
  description: 'Une solution de rooting basée sur le kernel pour les appareils Android.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: "Actualisé le",

    sidebar: {
      '/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121/APatch' }
    ],
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Guide',
        items: [
          { text: "Qu'est-ce qu'APatch ?", link: '/what-is-apatch' },
          { text: "Informations de sécurité", link: '/warn' },
          { text: 'Installation', link: '/install' },
          { text: 'Mise à jour', link: '/update' },
          { text: 'Réparations en cas de bootloop', link: '/rescue-bootloop' },
          { text: 'Guide de développement pour AndroidPatch Module', link: '/apm-guide' },
          { text: 'MetaModules', link: '/meta-module' },
          { text: "Guide d'utilisation de KernelPatch Module", link: '/kpm-usage-guide' },
          { text: 'Aide et support', link: '/support' },
          { text: 'FAQ', link: '/faq' },
        ]
    }
  ]
}
