---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "APatch"
  text: "Nouvelle méthode de rooting pour le noyau"
  tagline: Solution de rooting universelle pour les noyaux 3.18 à 6.11
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
  - title: La traduction française n'est pas complétée !!
    details: Pour le moment, seulement la page d'installation, la faq et celle-ci sont traduites. Si vous rencontrez des problèmes ou avez une suggestion, contactez moi avec irrationalfreak@protonmail.com
  - title: Basée sur le kernel
    details: APatch s'exécute dans l'espace noyau et permet une meilleure dissimulation que les méthodes basées dans l'espace utilisateur.
  - title: Contrôle d'accès des droits root
    details: Seulement les applications autorisées ont la permission de voir ou d'utiliser su, toutes les autres applications ne seront pas affectées.
  - title: APModule
    details: Support pour modules similaire à Magisk.
  - title: KPModule
    details: Un support pour modules qui vous permettera d'injecter du code dans le kernel (Fournit les fonctions du kernel inline-hook et syscall-table-hook).
---
