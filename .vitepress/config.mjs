import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/APatchDocs/',
  title: "APatch",
  description: "APatch文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档指南', link: '/what-is-APatch' }
    ],

    logo: "background.png", // 配置logo位置，public目录

    sidebar: [
      {
        text: '项目简介',
        items: [
          { text: '什么是APatch', link: '/what-is-APatch' },
          { text: '安装要求', link: '/demand' },
          { text: '重要提醒', link: '/warn' },
        ]
      },
      {
        text: '如何使用',
        items: [
          { text: '安装', link: '/Install' },
          { text: '修补', link: '/patch' },
          { text: '刷入', link: '/flash' }
        ]
      },
      {
        text: '反馈与帮助',link: '/support'
      }
    ],

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121' }
    ]
  }
})
