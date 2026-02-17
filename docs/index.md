---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "APatch"
  text: "New Android kernel root solution"
  tagline: Universal root solution for Android kernel versions 3.18 - 6.12
  image:
    src: /logo.png
    alt: APatch
  actions:
    - theme: brand
      text: Get started
      link: /what-is-apatch
    - theme: alt
      text: View on GitHub
      link: https://github.com/bmax121/APatch
    - theme: alt
      text: Contribute to documentation
      link: https://github.com/AndroidPatch/APatchDocs

features:
  - title: Kernel-based
    details: APatch runs in kernel space and has greater concealment and control than userspace root.
  - title: Root access control
    details: Only permitted apps may access or see su, all other apps aren't aware of this.
  - title: APModule
    details: Support for modules similar to Magisk.
  - title: KPModule
    details: Support for modules that allow you to inject any code into the kernel (Provides kernel function inline-hook and syscall-table-hook).
---
