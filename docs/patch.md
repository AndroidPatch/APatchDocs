# Patch

## Automatically patching

1. Download the latest version of APatch Manager from [GitHub](https://github.com/bmax121/APatch/releases).

2. Click on the button ![Patch Button](/PButton.png) at the top right corner of the homepage to set the SuperKey. The SuperKey needs to have **numbers and letters** and at least **8 characters** length. It will be used later to unlock root privileges.

:::warning 
It is strictly prohibited to set weak keys like `12345678`. The latest versions of APatch [requires the use of strong keys](/warn).
:::

3. Select the `boot.img` of your ROM, confirm and wait for the patch to complete. After the patch is successful, the patched boot.img path will be displayed. For example: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`.

Finally, you can [Flash](/flash) as needed.

## Manually patching

When the KernelPatch is updated and APatch Manager remains unchanged, you can choose to manually patch the kernel.

You can go to [KernelPatch](https://github.com/bmax121/KernelPatch/releases) project to get the latest `KP` files.

### Windows

1. Download `kptools-win.zip`, `kpimg-android` and `magiskboot`. Extract them into the same directory for use.

2. Execute this command:

```
magiskboot.exe unpack boot.img
```

to unpack the `boot.img` and get the kernel file. Rename the kernel to **kernel-b**. (kernel-b can be any third-party kernel, but third-party kernels come with no guarantees and will not be supported).

Windows users can patch using `CMD` or `PowerShell`.

Execute this command to patch:

```
kptools-x86_64-win.exe -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

Alternatively, it is recommended to use `WSL` with `Linux` for patching:

```
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

If no errors were reported during patching, execute this command:

```
magiskboot.exe repack boot.img
```

to pack and generate the image. The generated `new-boot.img` is the patched image.

---

### Linux

1. Download `kptools-linux`, `kpimg-android` and `magiskboot`.

2. Execute this command:

```
magiskboot unpack boot.img
```

to unpack the `boot.img` to get the kernel file. Rename the kernel to **kernel-b**(Say again, kernel-b can be any third-party kernel, but third-party kernels come with no guarantees and will not be supported).


Execute this command to patch:

```
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

If no errors were reported during patching, execute this command:

```
magiskboot repack boot.img
```

to pack and generate the image. The generated `new-boot.img` is the patched image.

::: warning 
**Emphasize again, it is STRICTLY PROHIBITED to set weak keys like `12345678`.**
:::

# KP commands and comments:

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
