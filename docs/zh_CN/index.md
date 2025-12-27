---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "APatch"
  text: "安卓内核 Root 新方案"
  tagline: 为 Android 内核 3.18 - 6.6 版本提供的通用 root 方案
  image:
    src: /logo.png
    alt: 背景图片
  actions:
    - theme: brand
      text: 开始了解
      link: /zh_CN/what-is-apatch
    - theme: alt
      text: 在 GitHub 中查看
      link: https://github.com/bmax121/APatch
    - theme: alt
      text: 贡献文档
      link: https://github.com/AndroidPatch/APatchDocs

features:
  - title: 基于内核
    details: APatch 运行在内核空间，相比用户空间 Root 有更强的隐蔽性和掌控性。
  - title: 白名单访问控制
    details: 只有被授权的 App 才可以访问 su，而其他 App 无法感知其存在。
  - title: APM
    details: 类似 Magisk 模块的支持。
  - title: KPM
    details: 内核补丁模块支持。（允许将任何代码注入内核，内核函数 inline-hook 和 syscall-table-hook 可用）。
---
