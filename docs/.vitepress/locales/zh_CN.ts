import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  description: '一个基于内核，为安卓准备的 root 方案。',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: '最后更新',

    sidebar: {
      '/zh_CN/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121/APatch' }
    ],
  }
})

function nav() {
  return [
    { text: '指南', link: '/zh_CN/what-is-apatch' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: '指南',
        items: [
          { text: '什么是 APatch?', link: '/zh_CN/what-is-apatch' },
          { text: '安装要求', link: '/zh_CN/requirements' },
          { text: '重要提醒', link: '/zh_CN/warn' },
          { text: '安装', link: '/zh_CN/install' },
          { text: '修补', link: '/zh_CN/patch' },
          { text: '刷入', link: '/zh_CN/flash' },
          { text: '升级', link: '/zh_CN/update' },
          { text: '救砖', link: '/zh_CN/rescue-bootloop' },
          { text: '系统模块 (APM) 开发指南', link: '/zh_CN/apm-guide' },
          { text: '内核模块 (KPM) 使用指南', link: '/zh_CN/kpm-usage-guide' },
          { text: '反馈与帮助', link: '/zh_CN/support' },
          { text: '常见问题解答', link: '/zh_CN/faq' },
        ]
    }
  ]
}
