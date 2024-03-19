# 常见问题解答

## 什么是APatch？

::: info
[这里](/what-is-APatch)的介绍更完整。
:::

APatch是一种类似于Magisk或KernelSU的root解决方案，但APatch提供更多功能。
APatch分别结合了Magisk方便易用的通过`boot.img`安装的方法，和KernelSU强大的内核修补能力。

## APatch与Magisk的区别？

- Magisk对启动映像中的ramdisk进行补丁，以修改init系统。而APatch则直接修补Linux内核。

## APatch与KernelSU的区别？

- KernelSU需要您设备的内核的源代码，而OEM并不总是提供该源码。而APatch仅需要您的设备原本的`boot.img`。

## APatch与Magisk、KernelSU的区别？

- APatch可选择不修改SELinux，这意味着Android应用程序线程可以被root，无需libsu和IPC。
- APatch提供**Kernel Patch Module（KP模块）**。

## 什么是Kernel Patch Module（KP模块）？

一些代码在内核空间运行，类似于Loadable Kernel Modules（LKM）。

此外，KPM提供在内核空间进行内联hook、系统调用表hook的能力。

更多相关信息，请参阅[如何编写KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md)

## APatch与KernelPatch的关系

APatch依赖于KernelPatch，继承了其所有功能并进行了扩展。

您可以仅安装KernelPatch，但如此将不允许您使用Magisk模块。  
要使用超级用户管理，您需要安装AndroidPatch，然后卸载KernelPatch。

[了解更多关于KernelPatch的信息](https://github.com/bmax121/KernelPatch)

## 什么是SuperKey（超级密钥）？

KernelPatch 添加了一个新的系统调用（syscall），为应用程序和用户空间中的程序提供所有功能，此系统调用称为SuperCall。 
当应用程序/程序尝试调用SuperCall时，它需要提供访问凭据，称为SuperKey。
只有当SuperKey正确时，才能成功调用 SuperCall。否则，调用方将不受影响。

## 关于SELinux如何处理？

- KernelPatch不修改SELinux上下文，而是通过hook绕过SELinux。 这允许您在应用程序上下文中root Android线程，无需使用libsu启动新进程，然后执行IPC。这非常方便。
- 此外，APatch直接利用magiskpolicy提供额外的SELinux支持。  

## 模块无法安装(os error 2/5/22)?

在root授权页面取消shell的root权限。

## APP 在手机重启后自动获得 root 权限?

参阅 [这里](https://t.me/APatchChannel/74)

## 无法使用 Shamiko

Shamiko闭源并且停更，无法适配。
::: info
如果你必须使用，使用Shamiko 0.7.4。
:::

## Zygisk 支持？

APatch可使用官方版ZygiskNext。

::: warning
尽可能使用官方版本而不是第三方改版，除非你能确定此修改版无害。
:::
