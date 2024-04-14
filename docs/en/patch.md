# Patching the Kernel

## Automatically Patching

1. Go to [GitHub](https://github.com/bmax121/APatch/releases) and install the latest stable version of APatch Manager.

2. Click "Patch" and define a SuperKey. A SuperKey requires **numbers + alphabets** , and requires at least **8 bytes** length. SuperKey is required for unlocking root premission.

:::warning 
You MUST NOT set a weak password such as `12345678`, the new version of APatch Manager force [requires a strong password](/en/warn)
:::

3. Select your `boot.img`, comfirm and wait APatch patchs the image. If complete, APatch Manager will display the location of patched image, such as: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`

Finally, [Flash](/en/flash) your image under your actually circumstance, and it dones.


## Manually Patching

**You can choose to patch the kernel manually when KernelPatch updated but APatch Manager was not updated.**

You can go to [KernelPatch](https://github.com/bmax121/KernelPatch/releases) page to get the latest "KP" files.

### Windows

1. Download `kptools-win.zip` and `kpimg-android`， unzip them to current folder to use. Download `magiskboot(Windows)` at the same time. 

2. Execute this command:
```
magiskboot.exe unpack boot.img
```

to unpack the `boot.img`. Then, rename `kernel` to `kernel-b`(`kernel-b` can be any third-party kernels, but we can not guarantee that the third-party kernel can run APatch correctly, and we won't provide any support for third-party kernels.)

Windows Platform can use `cmd` or `PowerShell` to patch.

Execute this command to patch:
```
kptools-x86_64-win.exe -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

Or using the `WSL Linux`, which is more recommended to patch:

```
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

If no error reported during the patch process, execute this command:

```
magiskboot.exe repack boot.img
```

to repack the patched image, the image generated which is called **new-boot.img** is the patched image.

---

### Linux

1. Download `kptools-linux`, `kpimg-android` and `magiskboot` to the same folder.

2. Execute this command:

```
magiskboot unpack boot.img
```

to unpack the `boot.img`. Then, rename `kernel` to `kernel-b`(`kernel-b` can be any third-party kernels, but we can not guarantee that the third-party kernel can run APatch correctly, and we won't provide any support for third-party kernels.)

Execute this command to patch:

```
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```
If no error reported during the patch process, execute this command:

```
magiskboot repack boot.img
```

to repack the patched image, the image generated which is called **new-boot.img** is the patched image.

::: warning 
Emphasize again, DO NOT set week password such as `12345678`.
:::

# KP Commands and comment:
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
