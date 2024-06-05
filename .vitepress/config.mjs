import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base:'/APatchDocs/',
  title: "APatch",
  description: "APatch文档",
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档指南', link: '/what-is-APatch' }
    ],

    logo: "favicon.ico", // 配置logo位置，public目录

    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    
    sidebar: [
      {
        text: '项目简介',
        items: [
          { text: '什么是APatch', link: '/what-is-APatch' },
          { text: '安装要求', link: '/requirements' },
          { text: '重要提醒', link: '/warn' },
        ]
      },
      {
        text: '如何使用',
        items: [
          { text: '安装', link: '/install' },
          { text: '修补', link: '/patch' },
          { text: '刷入', link: '/flash' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '反馈与帮助',link: '/support' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],

    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bmax121' }
    ]
  }
})
