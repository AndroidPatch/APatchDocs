# FAQ

[[toc]]

## What is APatch?

::: info
[There](/what-is-apatch) is a more complete introduction.
:::

APatch is a root solution similar to Magisk or KernelSU that combines the best of both. It combines Magisk easy and convenient installation method via `boot.img` with KernelSU powerful kernel patching abilities.

## What is the difference between APatch and Magisk?

Magisk modifies the `init` system with a patch to the `ramdisk` of your boot image. APatch patches the kernel directly.

## What is the difference between APatch and KernelSU?

While KernelSU requires your device's kernel source code, which isn't always provided by the OEM, APatch only need your stock `boot.img`.

## What is the difference between APatch, Magisk, and KernelSU?

APatch optionally allows not modifying SELinux. This means that the app's thread can be rooted without the need for `libsu` and `IPC`.

**KPModule** provided.

## What is KPModule?

KPM is a module that runs in kernel space, allowing code to be executed in kernel space, similar to **Loadable Kernel Modules** (LKM).

Additionally, the KPM provides the ability to execute `inline-hook` and `syscall-table-hook` in kernel space.

For more information, see [how to write KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md).

## What is the relationship between APatch and KernelPatch?

APatch relies on KernelPatch, inheriting all of its capabilities and expanding on them.

You can install only KernelPatch, but this doesn't allow you to use APM.

[Learn more about KernelPatch](https://github.com/bmax121/KernelPatch).

## What is SuperKey?

KernelPatch adds a new system call (syscall) to provide all resources for apps and programs in userspace, and this syscall is known as **SuperCall**. When an app/program tries to invoke **SuperCall**, a credential known as **SuperKey** must be provided. The invocation of the **SuperCall** will only succeed when the **SuperKey** is correct. If the SuperKey is incorrect, the caller won't be affected.

## How is SELinux processed?

KernelPatch doesn't modify the SELinux context but bypasses it via hook. This allows you to root a thread on Android within an app's context, without the need to use `libsu` to start a new process and execute `IPC`.

Additionally, APatch directly uses `magiskpolicy` to provide additional support for SELinux. 

## WebUI of APM/KPM

The APatch source code has been derived and modified from KernelSU, and APatch introduced the WebUI feature in version [10568](https://github.com/bmax121/APatch/releases/tag/10568), after KernelSU did the same.

APatch WebUI implementation and requirements is completely same as KernelSU, WebUI designed for KernelSU modules can run perfectly in APatch.

If you want to design WebUI for APM or KPM, refer to the [WebUI introduction](https://kernelsu.org/guide/module-webui.html) from KernelSU for more information.

## I can't install modules (OS error 2/5/22)

Remove the root privilege from the "Shell" app in Superuser page.

## App granted/lost root permission automatically when rebooting device

For more details, read [this](https://t.me/APatchChannel/74).

## Can I use LSPosed?

LSPosed relies on Riru or Zygisk to run. However, APatch doesn't support Riru or Zygisk by default, so you cannot use LSPosed directly.

However, APatch can add the Zygisk support or allow LSPosed run without any Zygisk implementation, through the installation of APMs.

Here are two solutions for running LSPosed on APatch:

1. Refer to [Zygisk support?](#zygisk-support) section to add Zygisk support.
2. If you only need to use LSPosed without other Zygisk features, you can try [Zloader](https://github.com/Mufanc/z-loader) [for LSPosed](https://t.me/mufanc_chan/28).

::: warning
Zloader is **NOT** compatible with any Zygisk implementation, and you cannot use any APMs that depend on Zygisk either. Please disable or uninstall any Zygisk implementation before using Zloader.
:::

::: danger
Zloader had **NO** code commits or new version releases after version `0.1.3` released.

We no longer recommends using this method. Please consider using Zygisk instead.
:::

## Can't use Shamiko?

We cannot support Shamiko due to its proprietary.

::: danger
**Any issues caused by using Shamiko will not be supported by APatch developers. Use at your own risk.**
:::

## Zygisk support? {#zygisk-support}

Same as KernelSU, APatch doesn't have built-in Zygisk support.

Thanks to the community's efforts, several APMs or Magisk modules are now available that are compatible with APatch and allow you to add support for Zygisk. Below are some APMs that provide Zygisk support for APatch:

- [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext): The first APM to provide a Zygisk environment for KernelSU, supporting the most comprehensive functions. It's a full implementation of Zygisk API, including additional features, both based on Zygisk and outside of it. Version `0.9.1.1` and all previous versions are open-source, while versions after this became proprietary. This APM initially supports APatch at version `1.0.3`.

- [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod): Before ZygiskNext officially supports APatch, this APM was set to provide a Zygisk environment for APatch. With ZygiskNext now offering official support, Zygisk_mod has been discontinued, but it's still available.

- [ReZygisk](https://github.com/PerformanC/ReZygisk): A free Zygisk implementation appeared after ZygiskNext become proprietary. Still in early development, this APM doesn't support some features present in ZygiskNext.

- [NeoZygisk](https://github.com/JingMatrix/NeoZygisk): An another free Zygisk implementation after the implementations above, which only aims to provide a minimal Zygisk API and remove any other parts. Its Zygisk API design is directly inspired by Magisk's Zygisk API, making this implementation theoretically more similar to Magisk's integrated Zygisk.

You can choose one of Zygisk implementations above, or use your own Zygisk implementation.

::: warning
As we said above, APatch **DOES NOT** have built-in Zygisk support, so we **CAN NOT** and **WILL NOT** guarantee the availability, functionality, stability, or any other responsibilities related to elements of Zygisk. 

If you encounter issues using APatch with any Zygisk implementation or Zygisk-dependent modules, **DO NOT** report your bug directly to us, report bug to the developer(s) of the APM first instead.
:::

## The root detection software fails

If your software is working properly, don't worry too much about the detection software.
