import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  description: 'A kernel-based root solution for Android devices.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: 'Last updated',

    sidebar: {
      '/en/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121/APatch' }
    ],
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/en/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Guide',
        items: [
          { text: 'What is APatch?', link: '/en/what-is-apatch' },
          { text: 'Install Requirements', link: '/en/requirements' },
          { text: 'Warning', link: '/en/warn' },
          { text: 'Installation', link: '/en/install' },
          { text: 'Patch', link: '/en/patch' },
          { text: 'Flash', link: '/en/flash' },
          { text: 'Help and Support', link: '/en/support' },
          { text: 'FAQ', link: '/en/faq' },
        ]
    }
  ]
}
