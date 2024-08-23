# Installation

## Preparations

1. Ensure your device's bootloader is unlocked before rooting.

2. You can execute command `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` in terminal or ADB to ensure your kernel is support to patch (root required).

3. [Click here](https://github.com/bmax121/APatch/releases) to get the latest stable version of APatch Manager.

4. Extract the `boot.img` from your ROM or from another source containing the stock `boot.img` of your device. You'll need it later for patching.

5. Backup the `boot.img` you extracted to a computer, USB drive, or another device. If any issues occur, you can flash your original `boot.img` via fastboot to recover your device from a dump.

::: tip
1. Ensure to use the latest ADB and fastboot tools and have knowledge about them to proceed to the next step. If you haven't learned about them yet, we recommend researching to learn about them first.

2. APatch always patch the `boot.img` of any device. Do not attempt to patch or flash the `init_boot` or other partition image files. The APatch developers are not responsible for the failure of resulting patch and boot.

3. Avoid using the `boot.img` file that has been patched by other managers to avoid unexpected situations.
:::

## Install requirements

APatch installation requirements are mainly reflected in the kernel configuration. Here are the requirements of kernel:

```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
```
or:
```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (Initial support)
```

::: tip
You can execute command `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` in terminal or ADB to ensure your kernel is support to patch (root required).
:::

::: warning
**Only supports the ARM64 architecture.**

**Only supports Android kernel versions 3.18 - 6.1**
:::

## Patch

There are several ways to patch APatch.

### Automatically patching {#automatically-patching}

1. Download the latest version of APatch Manager from [GitHub](https://github.com/bmax121/APatch/releases).

2. Click on the button ![Patch Button](/PButton.png) at the top right corner, and click `Select a boot image to Patch`.

3. Select your `boot.img`.

4. Set a SuperKey at "SuperKey" card. The SuperKey needs to have **numbers and letters** and at least **8 characters** length. It will be used later to unlock root privileges.

:::warning
It is strictly prohibited to set weak keys like `12345678`. The latest versions of APatch [requires the use of strong keys](/warn).
:::

5. Click on "Start" and wait for a minute. After the patch is successful, the patched `boot.img` path will be displayed. For example: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`.

Finally, you can [Flash](#Flash) as needed.

### Manually patching

When the KernelPatch is updated and APatch Manager remains unchanged, you can choose to manually patch the kernel.

You can go to [KernelPatch](https://github.com/bmax121/KernelPatch/releases) project to get the latest `KP` files.

#### Windows

1. Download `kptools-win.zip`, `kpimg-android` and `magiskboot`. Extract them into the same directory for use.

2. Execute this command:

```cmd
magiskboot.exe unpack boot.img
```

to unpack the `boot.img` and get the kernel file. Rename the kernel to **kernel-b**. (kernel-b can be any third-party kernel, but third-party kernels come with no guarantees and will not be supported).

Windows users can patch using `CMD` or `PowerShell`.

Execute this command to patch:

```cmd
kptools-x86_64-win.exe -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

Alternatively, it is recommended to use `WSL` with `Linux` for patching:

```cmd
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

If no errors were reported during patching, execute this command:

```cmd
magiskboot.exe repack boot.img
```

to pack and generate the image. The generated `new-boot.img` is the patched image.

---

#### Linux

1. Download `kptools-linux`, `kpimg-android` and `magiskboot`.

2. Execute this command:

```sh
magiskboot unpack boot.img
```

to unpack the `boot.img` to get the kernel file. Rename the kernel to **kernel-b**(Say again, kernel-b can be any third-party kernel, but third-party kernels come with no guarantees and will not be supported).

Execute this command to patch:

```sh
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

If no errors were reported during patching, execute this command:

```sh
magiskboot repack boot.img
```

to pack and generate the image. The generated `new-boot.img` is the patched image.

::: info
You can also try [online patching](https://kernelpatch-on-web.pages.dev/).
:::

### KP commands and comments:

::: info
You can click [this](https://exame.apatch.top/) to have a try.
:::

```
COMMAND:
  -h, --help                       Print this message.
  -v, --version                    Print version number. Print kpimg version if -k specified.
  -p, --patch                      Patch or Update patch of kernel image(-i) with specified kpimg(-k) and superkey(-s).
  -u, --unpatch                    Unpatch patched kernel image(-i).
  -r, --reset-skey                 Reset superkey of patched image(-i).
  -d, --dump                       Dump kallsyms infomations of kernel image(-i).
  -l, --list                       Print all patch informations of kernel image if (-i) specified.
                                   Print extra item informations if (-M) specified.
                                   Print KernelPatch image informations if (-k) specified.
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

### Using fastboot

::: info
This method is convenient and stable, you can easily recover your device if your device is corrupted. We strongly recommend using this way to flash.
:::

Connect your device using `ADB` and execute the following command to enter the fastboot mode:

```sh
adb reboot bootloader
```

When entering fastboot mode, execute this command:

```sh
fastboot flash boot boot.img
```

::: info
If your device supports command `fastboot boot`, you can use `fastboot boot boot.img` command to boot the system before you flash the image. If any accident occured, just reboot again then your device will started to boot correctly.
:::

When complete, reboot your device:

```sh
fastboot reboot
```

### Directly flashing

The LATEST version of APatch supports directly flashing via third-party Recovery; for example, TWRP.

::: warning
Directly flashing is firstly introduced at version `10888` and earlier version of APatch do **NOT** support this method.
:::

Change the suffix name of APatch manager file (.apk) to `.zip`. For example:

```
[username@localhost Demo] $ ls
APatch-10888-release.apk
[username@localhost Demo] $ mv APatch-10888-release.apk APatch-10888-release.zip
[username@localhost Demo] $ ls
APatch-10888-release.zip
[username@localhost Demo] $ 
```

After done, you can flash this `.zip` file via third-party Recovery's Flash function. APatch will be automatically installed just like Magisk.

::: tip
Same as Flash, `adb sideload` function used by Recovery provided by third-party AOSP-like ROMs is also supported.
:::

::: warning
Directly flashing is **NOT** supported customizing SuperKey! Instead, SuperKey will be set as a combination with random numbers and letters.
If you need customize SuperKey, please go to APatch Manager after booting and repatch to reset SuperKey.
:::

## Uninstall

### Automatically uninstall

::: warning
Automatically uninstall is firstly introduced at version `10888` and earlier version of APatch do **NOT** support this method.
:::

Change the suffix name of APatch manager file (.apk) to `.zip` and add modify file name to anything with `uninstall`. For example:

```
[username@localhost Demo] $ ls
APatch-10888-release.apk
[username@localhost Demo] $ mv APatch-10888-release.apk APatch-10888-release-uninstall.zip
[username@localhost Demo] $ ls
APatch-10888-release-uninstall.zip
[username@localhost Demo] $ 
```

After done, you can flash this `.zip` file via third-party Recovery's Flash function. APatch will be automatically removed just like Magisk.

::: tip
Same as Flash, `adb sideload` function used by Recovery provided by third-party AOSP-like ROMs is also supported.
:::

### Manually uninstall

Flash your stock `boot.img` in `bootloader` mode.

```sh
fastboot flash boot PATH/TO/boot.img
```

::: warning
Do NOT use `init_boot`!
:::
