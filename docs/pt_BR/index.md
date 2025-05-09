---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "APatch"
  text: "Nova solução root do kernel Android"
  tagline: Solução root universal para versões do kernel Android 3.18 - 6.1
  image:
    src: /logo.png
    alt: APatch
  actions:
    - theme: brand
      text: Iniciar
      link: /pt_BR/what-is-apatch
    - theme: alt
      text: Ver no GitHub
      link: https://github.com/bmax121/APatch
    - theme: alt
      text: Contribuir com a documentação
      link: https://github.com/AndroidPatch/APatchDocs

features:
  - title: Baseado em kernel
    details: APatch é executado no espaço do kernel e tem maior ocultação e controle do que o espaço do usuário root.
  - title: Controle de acesso root
    details: Somente apps permitidos podem acessar ou ver su, todos os outros apps não estão cientes disso.
  - title: APMódulo
    details: Suporte a módulos semelhantes ao Magisk.
  - title: KPMódulo
    details: Suporte a módulos que permitem injetar qualquer código no kernel (Fornece as funções do kernel inline-hook e syscall-table-hook).
---
