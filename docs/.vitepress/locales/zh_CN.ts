import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  description: '一个基于内核，为安卓准备的 root 方案。',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: '最后更新',

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
    { text: '指南', link: '/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: '指南',
        items: [
          { text: '什么是 APatch?', link: '/what-is-apatch' },
          { text: '安装要求', link: '/requirements' },
          { text: '重要提醒', link: '/warn' },
          { text: '安装', link: '/install' },
          { text: '修补', link: '/patch' },
          { text: '刷入', link: '/flash' },
          { text: '反馈与帮助', link: '/support' },
          { text: '常见问题', link: '/faq' },
        ]
    }
  ]
}
