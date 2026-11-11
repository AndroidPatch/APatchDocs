# Qu'est-ce qu'APatch ?

APatch est une solution de rooting basée sur le noyau pour les appareils Android qui fonctionne dans l'espace noyau et accordera les droits root aux applications s'exécutant dans l'espace utilisateur directement depuis l'espace noyau.

## Fonctionnalités

Est compatible avec la plupart des appareils Android, et pas seulement ceux équipés d'un noyau GKI.

Supporte APModule (APM), semblable aux modules Magisk.

Supporte KPModule (KPM), qui permet d'injecter tout code dans le noyau (fournit les fonctions du noyau `inline-hook` et `syscall-table-hook`).

APatch dépend de KernelPatch.

L'interface utilisateur d'APatch et le code source d'APModule ont été dérivés et modifiés de KernelSU.

## Comment utiliser APatch ?

Veuillez vous référez à : [Installation](/fr_FR/install)

## Comment patcher ?

Veuillez vous référez à : [Patch](/fr_FR/install#how-to-patch)

## Licence
::: Note de traduction
__La licence ci-dessous n'a pas été traduite afin de conserver sa valeur juridique, vous pouvez voir une traduction non officielle [ici](https://www.fsffrance.org/gpl/gpl-fr.fr.html)__ 
:::
```
Copyright (C) 2023 - Present bmax121 and APatch Developers

APatch is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

## Avis important

APatch est un logiciel libre, ce qui autorise à tout le monde de créer leurs propres forks sous la Licence GNU GPLv3, que nous utilisons ou permettons séparément des détenteurs des droits.

Les développeurs d'APatch rencontrent des difficultés pour vérifier le code de toutes les distributions tierces d'APatch (qu'elles soient libres ou pas). Par conséquent, les développeurs d'APatch ne seront pas responsables des problèmes qui pourraient apparaître en utilisant ces distributions, et ils **NE FOURNISSENT PAS** une garantie pour celles-ci. Si vous rencontrez des problèmes, vous devriez envoyer des commentaires directement aux auteurs de la distribution tierce que vous utilisez.
