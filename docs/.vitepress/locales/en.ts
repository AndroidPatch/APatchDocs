import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  description: 'A kernel-based root solution for Android devices.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: 'Last updated',

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
          { text: 'What is APatch?', link: '/what-is-apatch' },
          { text: 'Install Requirements', link: '/requirements' },
          { text: 'Security Alert', link: '/warn' },
          { text: 'Installation', link: '/install' },
          { text: 'Patch', link: '/patch' },
          { text: 'Flash', link: '/flash' },
          { text: 'Update', link: '/update' },
          { text: 'Rescue from bootloop', link: '/rescue-bootloop' },
          { text: 'APModule Development Guide', link: '/apm-guide' },
          { text: 'KPModule Usage Guide', link: '/kpm-usage-guide' },
          { text: 'Help and Support', link: '/support' },
          { text: 'FAQ', link: '/faq' },
        ]
    }
  ]
}
