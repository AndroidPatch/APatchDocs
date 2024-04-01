import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  description: '一个基于内核，为安卓准备的 root 方案。',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: '最后更新',

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
          { text: '什么是 APatch?', link: '/en/what-is-apatch' },
          { text: '安装要求', link: '/en/requirements' },
          { text: '重要提醒', link: '/en/warn' },
          { text: '安装', link: '/en/install' },
          { text: '修补', link: '/en/patch' },
          { text: '刷入', link: '/en/flash' },
          { text: '反馈与帮助',link: '/en/support' },
          { text: '常见问题', link: '/en/faq' },
        ]
    }
  ]
}
