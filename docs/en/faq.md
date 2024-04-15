# FAQ

## What is APatch?

::: info
[There](/en/what-is-apatch) is a more complete introduction.
:::

APatch is a root solution similar to Magisk or KernelSU which is one of the best of both. It combines Magisk easy and convenient installation method via `boot.img` with KernelSU powerful kernel patching abilities.

## What is the difference of APatch and Magisk?

Magisk modifies the `init` system with a patch to the `ramdisk` of your boot image, while APatch patches the kernel directly.

## APatch vs KernelSU

KernelSU requires your device's kernel source code, which is not always provided by the OEM. APatch only works with your stock `boot.img`.

## APatch vs Magisk and KernelSU

APatch allows you to optionally not modify SELinux, this means the app thread can be rooted, libsu and IPC are not needed.

**KPModule** provided.

## What is KPModule?

Some code runs in kernel space, similar to **Loadable Kernel Modules** (LKM).

Additionally, the KPM provides the ability to run `inline-hook` and `syscall-table-hook` in kernel space.

Please read [How to write KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md) for more information.

## The relationship of APatch and KernelPatch

APatch depends on KernelPatch. It inherits all of its capabilities and has been expanded.

You can install just KernelPatch, but this doesn't allow you to use Magisk modules.

To use the SuperUser management, you need install APatch, and uninstall KernelPatch.

[Learn more about KernelPatch](https://github.com/bmax121/KernelPatch).

## What is SuperKey？

KernelPatch adds a new system call (syscall) to provide all capabilities to apps and programs in userspace, this syscall is referred to as **SuperCall**. When an app/program tries to invoke **SuperCall**, it needs to provide an access credential, known as the **SuperKey**. **SuperCall** can only be successfully invoked if the **SuperKey** is correct and if it's not the caller will remain unaffected.

## What is SELinux?

KernelPatch doesn't modify the SELinux context and bypasses SELinux via hook. This allows you to root an Android thread within the app context without the need to use `libsu` to start a new process and then perform `IPC`.

In addition, APatch uses the `magiskpolicy` to add addition support of SELinux directly.  

## Can not install modules(os error 2/5/22)?

Remove the root permission of "shell" application in SuperUser page.

## App granted/lost root permission automatically when rebooting device?

Read [this](https://t.me/APatchChannel/74).

## Can not use Shamiko?

We can not support Shamiko due to its close-source and no updates.
::: info
If you have to use Shamiko, please use version 0.7.4.
:::

## Zygisk support?

APatch can use the [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) to add the Zygisk support.

::: warning
Use the official build of ZygiskNext instead of the third-party modified version, unless you can confirm that it is harmless.
Due to some reasons, we recommended to use the version [0.9.1.1](https://github.com/Dr-TSNG/ZygiskNext/releases/tag/v4-0.9.1.1) of ZygiskNext if no serious issues is appeared.
:::

## Can not pass the root-detecting application?

If your software is working properly, don't worry too much about the detection software.
