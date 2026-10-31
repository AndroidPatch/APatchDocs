# Installation

[[toc]]

## Préparation

1. Assurez-vous que le bootloader de votre appareil soit déverouillé avant de continuer.

2. [PRÉREQUIS IMPORTANT] Vous pouvez exécuter la commande `zcat /proc/config.gz | grep CONFIG_KALLSYMS` dans votre terminal pour voir si votre noyau est compatible. Si vous utilisez ADB, entrez d'abord dans le terminal avec `adb shell`.

3. [Cliquez ici](https://github.com/bmax121/APatch/releases) pour télécharger la dernière version stable d'APatch.

4. Extraire la `boot.img` de votre ROM ou d'une autre source contenant la `boot.img` d'origine de votre appareil. Vous en aurez besoin plus tard pour le patching.

5. Sauvegarder la `boot.img` que vous avez extraite sur un ordinateur, disque USB, ou sur un autre appareil. Si une erreur se produit, vous pourrez reflasher votre `boot.img` via fastboot pour réparer votre appareil.

::: Astuce
1. Assurez-vous d'utiliser les dernières versions d'ADB et de fastboot et d'en savoir un peu sur ces outils. S'ils vous semblent nouveau, nous vous recommandons de faire quelques recherches pour en apprendre plus sur eux.

2. APatch patchera toujours la `boot.img` de n'importe quel appareil. N'essayez pas de patcher ou de flasher `init_boot` ou d'autres images de partitions. Le développeurs d'APatch ne seront pas responsables pour l'échec du patch ou du démarrage.

3. Essayez d'éviter d'utiliser une `boot.img` déjà patchée par d'autres gestionnaires pour éviter toute situation incongrue.
:::

## Prérequis

Les prérequis pour installer APatch sont principalement représentés dans la configuration du noyau. Votre noyau doit avoir une des configurations suivantes :

```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
```
ou:
```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (Initial support)
```
ou:
```txt
CONFIG_KALLSYMS=y
```

::: Astuce
Vous pouvez lancer la commande `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` dans le terminal pour vous assurer que le noyau supporte le patch (droits root requis).
:::

::: Attention
**Supporte seulement l'architecture ARM64**

**Supporte uniquement les noyaux d'Android 3.18 à 6.12.**
:::

::: NOTE SUR LA COMPATIBILITÉ DU NOYAU 6.6
Le noyau 6.6 a été seulement testé sur des appareils OnePlus et Xiaomi. Pour des appareils d'autres marques, veuillez vous référez aux conditions d'usage.
:::

## Patch {#how-to-patch}

Il y a plusieurs moyens d'installer APatch.

### Patch automatique {#automatically-patching}

1. Téléchargez la dernière version d'APatch sur [GitHub](https://github.com/bmax121/APatch/releases).

2. Appuyez sur le bouton ![Patch Button](/PButton.png) dans le coin supérieur droit, et appuyez sur `Select a boot image to patch`.

3. Séléctionnez votre `boot.img`.

4. Créez une SuperKey et une SuperKey card. La SuperKey devrait mesurer entre **8 et 63 caractères et inclure des chiffres et des lettres, mais pas de caractères spéciaux**. Elle sera utilisée plus tard pour débloquer les privilèges root.

::: Attention
Il est absolument interdit de créer des clés faibles comme `12345678`. Les dernières versions d'APatch [requieront l'utilisation de clés sécurisés](/warn).
:::

5. Appuyez sur Start et attendez 1 minute. Après que le patch soit completé avec succès, le chemin de la `boot.img` patchée sera affiché. Par exemple: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`.

Enfin vous pouvez [flasher](#flash) comme bon vous semble.

### Patch manuel

Quand KernelPatch est à jour mais que le gestionnaire APatch reste inchangé, vous pouvez choisir de patcher le noyau manuellement.

Vous pouvez aller sur le projet de [KernelPatch](https://github.com/bmax121/KernelPatch/releases) afin obtenir les fichiers `KP` les plus récents.

#### Windows

1. Téléchargez `kptools-msys2-win.7z` et `kpimg-android`. Extrayez-les vers le même dossier pour une utilisation pratique.

2. Exécutez cette commande :

```cmd
kptools.exe unpack boot.img
```

Pour dépaqueter la `boot.img` et obtenir le fichier du noyau. Renommez ce noyau **noyau-b**. (noyau-b peut être n'importe quel noyau tiers, mais ceux-ci sont fournis sans aucune garantie et ne seront pas supportés).

Les utilisateurs de Windows peuvent patcher avec `CMD` ou `PowerShell`.

Lancez cette commande pour patcher :

```cmd
kptools.exe -p --image noyau-b --skey "YourKey" --kpimg kpimg-android --out noyau
```

Alternativement, il est recommandé d'utiliser `WSL` avec `Linux` pour patcher :

```cmd
./kptools-linux -p --image noyau-b --skey "YourKey" --kpimg kpimg-android --out noyau
```

Si aucune erreur n'a été indiqué durant le patching, exécutez la commande suivante :

```cmd
kptools.exe repack boot.img
```

Pour empaqueter et générer l'image. La `new-boot.img` générée est l'image patchée.

---

#### Linux

1. Download `kptools-linux` and `kpimg-android`.

2. Execute this command:

```sh
./kptools-linux unpack boot.img
```

Pour dépaqueter la `boot.img` et obtenir le fichier du noyau. Renommez ce noyau **noyau-b**. (noyau-b peut être n'importe quel noyau tiers, mais ceux-ci sont fournis sans aucune garantie et ne seront pas supportés).

Lancez cette commande pour patcher :

```sh
./kptools-linux -p --image noyau-b --skey "YourKey" --kpimg kpimg-android --out noyau
```

Si aucune erreur n'a été indiqué durant le patching, exécutez la commande suivante :

```sh
./kptools-linux repack boot.img
```

Pour empaqueter et générer l'image. La `new-boot.img` générée est l'image patchée.

::: Info
Vous pouvez aussi essayer le [Patching en ligne](https://noyaupatch-on-web.pages.dev/).
:::

::: Astuce
Vous pouvez écrire le paramètre `--help` ,ce qui fait `kptools --help`, pour obtenir tous les paramètres disponibles.
:::

### Commandes et commentaires de KP:

::: Info
Vous pouvez cliquer [ici](https://exame.apatch.top/) pour essayer.
:::
_Note du traducteur_
Les commandes affichées ici ont été traduites, mais l'utilitaire d'aide du logiciel est en anglais !
```
COMMAND:
  -h, --help                       Affiche ce message.
  -v, --version                    Affiche le numéro de version. Print kpimg version if -k specified.
  -p, --patch                      Patch or Update patch of noyau image(-i) with specified kpimg(-k) and superkey(-s).
  -u, --unpatch                    Unpatch patched noyau image(-i).
  -r, --reset-skey                 Reset superkey of patched image(-i).
  -d, --dump                       Dump kallsyms infomations of noyau image(-i).
  -f, --flag                       Dump ikconfig infomations of noyau image(-i).
  -l, --list                       Print all patch informations of noyau image if (-i) specified.
                                   Print extra item informations if (-M) specified.
                                   Print KernelPatch image informations if (-k) specified.
Unpack noyau: unpack <boot.img>
Repack noyau: repack <boot.img>
Options:
  -i, --image PATH                 Kernel image path.
  -k, --kpimg PATH                 KernelPatch image path.
  -s, --skey KEY                   Set the superkey and save it directly in the boot.img.
  -S, --root-skey KEY              Set the root-superkey that uses hash verification, and the superkey can be changed dynamically.
  -o, --out PATH                   Patched image path.
  -a  --addition KEY=VALUE         Add additional information.
  -K, --kpatch PATH                Embed kpatch executable binary into patches.
  -M, --embed-extra-path PATH      Embed new extra item.
  -E, --embeded-extra-name NAME    Preserve and modifiy embedded extra item.
  -T, --extra-type TYPE            Set type of previous extra item.
  -N, --extra-name NAME            Set name of previous extra item.
  -V, --extra-event EVENT          Set trigger event of previous extra item.
  -A, --extra-args ARGS            Set arguments of previous extra item.
  -D, --extra-detach               Detach previous extra item from patches.
```

## Flash

### En utilisant Fastboot

::: Info
Les commandes de fastboot sont pratiques, stables, et faciles à réparer en cas d'erreur. Nous recommandons fortement d'utiliser cette méthode pour le flash.

:::

Connectez votre appareil avec `ADB` and exécutez la commande suivante pour entrer dans le mode fastboot :

```sh
adb reboot bootloader
```

Quand vous entrez dans le mode fastboot, lancez cette commande :

```sh
fastboot flash boot boot.img
```

::: Astuce
Si votre appareil supporte `fastboot boot`, vous pouvez utiliser la commande `fastboot boot boot.img` pour démarrer le système avant de flasher l'image. Si des problèmes inattendus se produisent, redémarrez simplement votre appareil, et il devrait démarrer correctement.
:::

Une fois la commande complétée, redémarrez votre appareil:

```sh
fastboot reboot
```

### Flasher directement

La dernière version d'APatch Manager supporte directement le flashing sur des environnement de récupération tiers, comme TWRP.

::: Attention
Le flashing direct a été introduit dans la version `10888`, et les versions plus anciennes d'APatch **NE SUPPORTENT PAS** cette méthode.
:::

Changez l'extension du fichier d'APatch Manager d'`.apk` à `.zip`. Par exemple :

```
[username@localhost Demo] $ ls
APatch-10888-release.apk
[username@localhost Demo] $ mv APatch-10888-release.apk APatch-10888-release.zip
[username@localhost Demo] $ ls
APatch-10888-release.zip
[username@localhost Demo] $ 
```

Après l'avoir fait, vous pourrez flasher ce fichier `.zip` via la fonctionnalité de flash des environnements de récupération tiers. APatch sera automatiquement installé, tout comme Magisk.

::: Astuce
Tout comme la fonctionnalité Flash, la commande `adb sideload` fournie par l'environnement de récupération android est aussi supportée.
:::

::: Attention
Le flash direct **NE SUPPORTE PAS** la personnalisation de la SuperKey ! À la place, la SuperKey va être remplacée par une suite aléatoire de chiffres et de lettres.
Si vous avez besoin de personnaliser la SuperKey, allez sur l'APatch Manager après le démarrage et repatcher pour changer la clé.
:::

## Désinstallation

### Désinstallation automatique

::: Attention
La désinstallation automatique a été introduite dans la version `10888`, et les versions plus anciennes d'APatch **NE SUPPORTENT PAS** cette méthode.
:::

Changez l'extension du fichier d'APatch Manager d'`.apk` à `.zip` et rajoutez au nom du fichier `uninstall`. Par exemple:

```
[username@localhost Demo] $ ls
APatch-10888-release.apk
[username@localhost Demo] $ mv APatch-10888-release.apk APatch-10888-release-uninstall.zip
[username@localhost Demo] $ ls
APatch-10888-release-uninstall.zip
[username@localhost Demo] $ 
```

Après l'avoir fait, vous pourrez flasher ce fichier `.zip` via la fonctionnalité de flash des environnements de récupération tiers. APatch sera automatiquement désinstallé, tout comme Magisk.
::: Astuce
Tout comme la fonctionnalité Flash, la commande `adb sideload` fournie par l'environnement de récupération android est aussi supportée..
:::

### Désinstallation manuelle

Flashez votre `boot.img` d'origine dans le mode `bootloader`.

```sh
fastboot flash boot PATH/TO/boot.img
```

::: Attention
**N'UTILISEZ PAS** `init_boot`!
:::
