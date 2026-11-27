---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "APatch"
  text: "Nouvelle méthode de rooting pour le noyau"
  tagline: Solution de rooting universelle pour les noyaux 3.18 à 6.12
  image:
    src: /logo.png
    alt: APatch
  actions:
    - theme: brand
      text: Commencer
      link: /fr_FR/what-is-apatch
    - theme: alt
      text: Voir sur GitHub
      link: https://github.com/bmax121/APatch
    - theme: alt
      text: Contribuer à la documentation
      link: https://github.com/AndroidPatch/APatchDocs

features:
  - title: Basée sur le noyau
    details: APatch s'exécute dans l'espace noyau et permet une meilleure dissimulation que les méthodes basées dans l'espace utilisateur.
  - title: Contrôle d'accès des droits root
    details: Seulement les applications autorisées auront la permission de voir ou d'utiliser su, toutes les autres applications ne seront pas affectées.
  - title: APModule
    details: Support pour modules similaire à Magisk.
  - title: KPModule
    details: Un support pour modules qui vous permettra d'injecter du code dans le noyau (kernel) (Fournit les fonctions du noyau inline-hook et syscall-table-hook).
---

::: warning Attention
La traduction française est encore en cours !
Pour le moment, seules cette page d'accueil, la présentation, l'alerte de sécurité, le guide d'installation et la FAQ sont traduits. Si vous rencontrez des problèmes ou avez une suggestion, n'hésitez pas à ouvrir une issue ou une pull request sur [GitHub](https://github.com/AndroidPatch/APatchDocs).
:::
