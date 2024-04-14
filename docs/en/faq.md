# FAQs

## What is APatch?

::: info
[There](/en/what-is-apatch) is a more complete introduction.
:::

APatch is a root solution similar to Magisk and KernelSU, but APatch provides more functions.
APatch combines Magisk's easy and convenient install method by patching the `boot.img` and KernelSU's strong ability of patching the kernel.

## What is the difference of APatch and Magisk?

- Magisk patchs the ramdisk in boot image to modify the init. APatch patchs the Android Kernel directly.

## What is the difference of APatch and KernelSU?

- KernelSU requires the source code of your device kernel, which OEMs not always provide it. APatch only needs your original `boot.img` of your device.

## What is the difference of APatch and Magisk&KernelSU?

- APatch can choose not to modify the SELinux, which means the Android application threads can be rooted without libsu and IPC.
- APatch provides **KernelPatch Module(KPM)**.

## What is KernelPatch Module(KPM)

KernelPatch Module contains some codes running in Kernel space similar to Loadable Kernel Modules(KPM)

KPM also provides the ability to perform inline hooks and system call table hooks in the kernel space.

Please read [How to write the KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md) for further information.

## The relationship of APatch and KernelPatch

APatch depends on KernelPatch, succeeded all of its function and extented it.

You can install KernelPatch only. However, it will prevent you from using the APM.
To use the SuperUser management, you need install APatch, and uninstall KernelPatch.

For further information of KernelPatch, please read [This](https://github.com/bmax121/KernelPatch).

## What is Superkey？

KernelPatch added a new syscall, provided all function in applications. This syscall is called SuperCall.
When any application tries to call SuperCall, it needs to provide a token, which is called SuperKey. SuperCall will only be successful called only correct SuperKey is provided. Otherwise, no modification will be applied.  

## How to produce the SELinux?

- KernelPatch not modifys the SELinux. Instead, it bypasses the SELinux by hooking it. This allows you root the Android processes in application space without start a new process by `libsu` and executing `IPC`.
- In addition, APatch uses the `magiskpolicy` to add addition support of SELinux directly.  

## Can not install modules(os error 2/5/22)?

Remove the root permission of "shell" application in SuperUser page.

## APP granted/lost root permission automatically when rebooting device?

Read [This](https://t.me/APatchChannel/74).

## Can not use Shamiko?

We can not support Shamiko due to its close-source and no updates.
::: info
If you have to use Shamiko, please use version 0.7.4.
:::

## Zygisk Support?

APatch can use the [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) to add the Zygisk support.

::: warning
Use the official build of ZygiskNext instead of the third-party modified version, unless you can confirm that it is harmless.
Due to some reasons, we recommended to use the version 0.9.1.1 of ZygiskNext if no serious issues is appeared.
:::

## Can not pass the root-detecting application?

If your other applications can work correctly, do not be tangled in detecting applications.
