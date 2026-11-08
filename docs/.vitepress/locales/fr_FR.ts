import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fr-FR',
  description: 'Une solution de rooting basée sur le kernel pour les appareils Android.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: "Actualisé le",

    sidebar: {
      '/fr_FR/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121/APatch' }
    ],
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/fr_FR/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Guide',
        items: [
          { text: "Qu'est-ce qu'APatch ?", link: '/fr_FR/what-is-apatch' },
          { text: "Informations de sécurité", link: '/fr_FR/warn' },
          { text: 'Installation', link: '/fr_FR/install' },
          { text: 'Mise à jour', link: '/fr_FR/update' },
          { text: 'Réparations en cas de bootloop', link: '/fr_FR/rescue-bootloop' },
          { text: 'Guide de développement pour AndroidPatch Module', link: '/fr_FR/apm-guide' },
          { text: 'MetaModules', link: '/fr_FR/meta-module' },
          { text: "Guide d'utilisation de KernelPatch Module", link: '/fr_FR/kpm-usage-guide' },
          { text: 'Aide et support', link: '/fr_FR/support' },
          { text: 'FAQ', link: '/fr_FR/faq' },
        ]
    }
  ]
}
