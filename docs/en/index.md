---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "APatch"
  text: "The NEW solution of Android Kernel root"
  tagline: Provides a general root solution for Android Kernel version 3.18 - 6.1
  image:
    src: /logo.png
    alt: Background Picture
  actions:
    - theme: brand
      text: Explore
      link: /en/what-is-apatch
    - theme: alt
      text: View on Github
      link: https://github.com/bmax121/APatch
    - theme: alt
      text: Contributing the Documents
      link: https://github.com/AndroidPatch/APatchDocs

features:
  - title: Based on Kernel
    details: APatch is running on Kernel space, with stronger concealment and controllability then user space Root.
  - title: Whitelist call control
    details: Only granted applications can call 'su', other applications can not know the existance of 'su'.
  - title: AndroidPatch Modules
    details: Modules support similar to Magisk.
  - title: KernelPatch Modules
    details: Modules support of KernelPatch(allows to inject any code in kernel, requires kernel function inline-hook and syscall-table-hook enabled).
---

