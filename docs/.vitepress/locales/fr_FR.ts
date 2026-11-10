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
          { text: 'Installation', link: '/fr_FR/install' },
          { text: 'FAQ', link: '/fr_FR/faq' },
        ]
    }
  ]
}
