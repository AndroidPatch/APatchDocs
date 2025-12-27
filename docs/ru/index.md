---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'APatch'
  text: 'Новое root-решение для Android на основе ядра'
  tagline: Универсальное root-решение для ядра Android версий 3.18 - 6.6
  image:
    src: /logo.png
    alt: APatch
  actions:
    - theme: brand
      text: Начать
      link: /ru/what-is-apatch
    - theme: alt
      text: Посмотреть на GitHub
      link: https://github.com/bmax121/APatch
    - theme: alt
      text: Вносите свой вклад в разработку документации
      link: https://github.com/AndroidPatch/APatchDocs

features:
  - title: На основе ядра
    details: APatch работает в пространстве ядра и обладает большей скрытностью и контролем, чем root в пользовательском пространстве.
  - title: Контроль root доступа
    details: Только разрешенные приложения могут получить доступ к su, все остальные приложения не будут знать о существовании su.
  - title: APModule
    details: Поддержка модулей, аналогичных Magisk.
  - title: KPModule
    details: Поддержка модулей, позволяющих внедрять любой код в ядро (требуется включение функций inline-hook и syscall-table-hook у ядра).
---
