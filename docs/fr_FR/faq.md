# FAQ

[[toc]]

## Qu'est-ce qu'APatch ? 

::: info
[Ceci](/what-is-apatch) forme une introduction plus complète à APatch.
:::

APatch est une solution de rooting semblable à Magisk et KernelSU, tout en combinant le meilleur des 2 mondes. D'un côté, L'installation facile et pratique de Magisk par la `boot.img`, de l'autre les capacités de patch améliorées de KernelSU.

## Quelle est la différence entre Magisk et APatch ?

Magisk modifie le système `d'initialisation` grâce à un patch au `ramdisk` de votre boot image. APatch va patcher directement le kernel.

## Quelle est la différence entre KernelSU et APatch ?

Alors que KernelSU requiert le code source du kernel de votre téléphone, qui n'est pas toujours fourni par votre fabricant, APatch a seulement besoin de votre `boot.img` d'origine.

## Quelle est la différence entre APatch, Magisk, et KernelSU ?

APatch propose une option pour ne pas modifier SELinux. Ça veut dire que le thread de l'application peut être rooté sans `libsu` et `IPC`.

Fourni avec **KPModule**.

## Qu'est-ce que KPModule ?

KPM est un module qui s'exécute dans l'espace noyau, ce qui permet d'exécuter du code dans celui-ci, de manière similaire à **Loadable Kernel Modules** (LKM).

De plus, le KPM est en capacité d'exécuter `inline-hook` et `syscall-table-hook` dans l'espace noyau.

Pour plus d'informations, voir [how to write KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md).

## Quelle est la relation entre KernelPatch et APatch ?

APatch dépend de KernelPatch, héritant de toutes ses fonctionnalités en plus de les étendre.

Vous pouvez seulement installer KernelPatch, mais ça ne vous permettera pas d'utiliser APM.

[En savoir plus sur KernelPatch](https://github.com/bmax121/KernelPatch).

## Qu'est-ce que SuperKey ?

KernelPatch ajoute un nouvel appel système (syscall) pour fournir toutes les ressources dont les applications et les programmes ont besoin dans l'espace utilisateur, et cet appel système est connu sous le nom de **SuperCall**. 
Quand une application ou un programme essaye d'invoquer **SuperCall**, un identifiant appelé **SuperKey** doit être renseigné. L'invocation de **SuperCall** ne sera réussie que si **SuperKey** est valide. Si elle est
invalide, le programme appelant ne sera pas affecté.

## Comment APatch gère-t-il SELinux ?

KernelPatch ne modifie pas les contextes de SELinux mais les countourne par un crochet (hook). Cela vous permet de rooter une application directement, sans avoir besoin `libsu` pour démarrer un nouveau processus et exécuter `IPC`.

Additionellement, APatch utilise directement `magiskpolicy` afin fournir du support supplémentaire pour SELinux. 

## La WebUI de KPM et APM

Le code source d'APatch est directement modifié et tiré de KernelSU, APatch a introduit la WebUI dans [10568](https://github.com/bmax121/APatch/releases/tag/10568), après que KernelSU l'ai fait.

L'implémentation de la WebUI d'APatch est strictement identique à celle de KernelSU, les applications conçues pour la WebUI de KernelSU devrait tourner sans problème avec APatch.

Si vous voulez concevoir une WebUI pour APM et KPM, référez vous à la [WebUI Introduction](https://kernelsu.org/guide/module-webui.html) de KernelSU pour plus d'informations.

## Je peux pas installer de modules (OS error 2/5/22)

Retirez les privilèges root du Shell dans la page Superutilisateur.

## Les modules installés disparaissent à partir de la version 10977 et au-delà

Special notes about CI build after version 10977.

::: Info
Nous avons déjà pris en compte ce problème [Divers](update#miscellaneous).
:::

APatch a supprimé le support de `module.img` à partir du commit [b843480](https://github.com/bmax121/APatch/commit/b843480c4f56b6190add41366e3eb7148ebc9b87). Par conséquent, tous les APModules installés dans les version précédentes seront **COMPLÈTEMENT PERDU** après avoir mis à jour vers la version `10977` ou ultérieure.

Vous devrez réinstaller les modules que vous avez précédement installés.

## Une application a perdu ou gagné des droits root après le redémarrage de l'appareil

Ce problème devrait être déjà résolu. Cependant, si vous rencontrez toujours des problèmes, essayez d'effacer le fichier `/data/adb/ap/package_config` pour réinitialiser les permissions root. Ensuite, accordez les droits root une nouvelle fois.
Cela devrait régler le problème.

## Est-ce que je peux utiliser LSPosed ?

LSPosed dépend de Riru ou de Zygisk pour s'exécuter. Cependant, APatch ne supporte pas Zygisk et Riru par défaut, vous ne pouvez donc pas utiliser LSPosed directement.

Mais, APatch peut avoir un support pour Zygisk sans implémentation directe, par le biais des APMs.

Voici 2 solutions pour faire tourner LSPosed sur APatch:

1. Se référer à [Zygisk support?](#zygisk-support) pour ajouter Zygisk.
2. Si vous avez seulement besoin de LSPosed sans les autres fonctionnalités de Zygisk, vous pouvez essayer [Zloader](https://github.com/Mufanc/z-loader) [for LSPosed](https://t.me/mufanc_chan/28).

::: Attention
Zloader **N'EST PAS** compatible avec une autre implémentation Zygisk, and vous ne pourrez pas utiliser des modules qui en dépendent non plus. Veuillez désactiver Zygisk et autres modules associés avant d'installer Zloader.
:::

::: Danger
Zloader n'a **PAS** de commits ou de versions supplémentaires après la version `0.1.3`.

Nous ne vous recommandons plus d'utiliser cette méthode. Utilisez Zygisk à la place.
:::

## Je peux pas utiliser Shamiko ?

Nous ne pouvons pas supporter Shamiko car il est propriétaire.

::: Danger
**Tout problème causé par Shamiko ne sera pas traité par les développeurs d'APatch. Son utilisation est sous votre responsabilité.**
:::

## Zygisk support? {#zygisk-support}

Comme KernelSU, APatch n'a pas Zygisk d'inclus.

Grâce aux efforts de la communauté, plusieurs APM ou modules Magisk sont compatibles avec APatch et vous permettront d'installer Zygisk. Vous trouverez ci-dessous quelques APM pour faire exécuter Zygisk :

- [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext): Le premier à avoir supporté un environnement pour KernelSU, et supporte les fonctionnalités les plus compréhensives. Il sa'git d'une implémentation complète, avec des fonctionnalités supplémentaires,basées sur Zygisk ou extérieurs . La version `0.9.1.1` et toutes les versions précedentes sont libres, alors que les versions après celle-ci sont devenues propriétaires. Cette APM supporte initialement APatch `1.0.3`.

- [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod): Avant que ZygiskNext ne supporte APatch officiellement, cet APM comptait le faire. Depuis que ZygiskNext offre un support officiel, Zygisk_mod a été abandonné, mais il est toujours disponible.

- [ReZygisk](https://github.com/PerformanC/ReZygisk): Une implémentation libre de Zygisk après que ZygiskNext soit devenu propriétaire. Étant toujours en dévéloppement précoce, cet APM ne supporte pas certaines fonctionnalités présentes dans ZygiskNext.

- [NeoZygisk](https://github.com/JingMatrix/NeoZygisk): Une autre implémentation libre de Zygisk après celle citée plus haut, qui vise seulement un environnement minimal en retirant le plus de parties possible. Le design de son API est directement inspirée par celle de Magisk, ce qui fait de cet implémentation, techniquement, une version plus proche du Zygisk original.

Vous pouvez choisir une des implémentation ci-dessus ou utiliser la vôtre.

::: Attention
Comme dit plus haut, APatch **N'A PAS** un support Zygisk par défaut, nous ne **POUVONS PAS** et ne **FERONS PAS** garantir la disponibilité,la fonctionnalité , la stabilité , ou tout autre élément relié à Zygisk. 

Si vous rencontrez des problèmes avec une implémentation de Zygisk, **NE NOUS REMONTEZ PAS**  votre bug directement, dites-le aux développeurs de votre implémentation d'abord.
:::

## Le détecteur de rooting rencontre des problèmes

Si vos logiciels fonctionnent correctement, ne vous inquiétez pas trop à propos de cela.
