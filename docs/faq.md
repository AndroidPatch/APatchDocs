# 常见问题解答

## 什么是 APatch？

::: info
[这里](/what-is-apatch)的介绍更完整。
:::

APatch 是一种类似于 Magisk 或 KernelSU 的 root 解决方案，但 APatch 提供更多功能。
APatch 分别结合了 Magisk 方便易用的通过 `boot.img` 安装的方法，和 KernelSU 强大的内核修补能力。

## APatch 与 Magisk 的区别？

- Magisk 对启动映像中的 ramdisk 进行补丁，以修改 init 系统。而 APatch 则直接修补 Android 内核。

## APatch 与 KernelSU 的区别？

- KernelSU 需要您设备的内核的源代码，而 OEM 并不总是提供该源码。而 APatch 仅需要您的设备原本的`boot.img`。

## APatch 与 Magisk、KernelSU 的区别？

- APatch 可选择不修改 SELinux，这意味着 Android 应用程序线程可以被 root，无需 libsu 和 IPC 。
- APatch 提供 **Kernel Patch Module（KP模块）**。

## 什么是 Kernel Patch Module（KP模块）？

一些代码在内核空间运行，类似于 Loadable Kernel Modules（LKM）。

此外，KPM 提供在内核空间进行内联 hook、系统调用表 hook 的能力。

更多相关信息，请参阅[如何编写KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md)

## APatch 与 KernelPatch 的关系

APatch 依赖于 KernelPatch，继承了其所有功能并进行了扩展。

您可以仅安装 KernelPatch，但如此将不允许您使用 APM。  
要使用超级用户管理，您需要安装 APatch，然后卸载 KernelPatch。

[了解更多关于 KernelPatch 的信息](https://github.com/bmax121/KernelPatch)

## 什么是 SuperKey（超级密钥）？

KernelPatch 添加了一个新的系统调用（syscall），为应用程序和用户空间中的程序提供所有功能，此系统调用称为 SuperCall。 
当应用程序/程序尝试调用 SuperCall 时，它需要提供访问凭据，称为 SuperKey。
只有当 SuperKey 正确时，才能成功调用 SuperCall。否则，调用方将不受影响。

## 关于 SELinux如何处理？

- KernelPatch 不修改 SELinux 上下文，而是通过 hook 绕过 SELinux。 这允许您在应用程序上下文中 root Android 线程，无需使用 libsu 启动新进程，然后执行 IPC 。这非常方便。
- 此外，APatch 直接利用 magiskpolicy 提供额外的 SELinux 支持。  

## APatch 的模块 WebUI

APatch 的源代码来自于 KernelSU，因此 KernelSU 引入 WebUI 特性之后，APatch 也在 [10568](https://github.com/bmax121/APatch/releases/tag/10568) 版本中引入了 WebUI 特性。

APatch 的 WebUI 实现方法和要求和 KernelSU 的实现方法和要求完全一致，为 KernelSU 模块设计的 WebUI 在 APatch 中可以完美运行。

如果你希望为 APM 或 KPM 设计 WebUI，请参考 KernelSU 的 [WebUI 介绍页面](https://kernelsu.org/zh_CN/guide/module-webui.html) 进行设计。

## 模块无法安装(os error 2/5/22)？

在 root 授权页面取消 shell 的 root 权限。

## APP 在手机重启后自动获得/丢失 root 权限？

参阅 [这里](https://t.me/APatchChannel/74)

## 能使用 LSPosed 吗？

LSPosed 依赖于 Riru 或 Zygisk，APatch 默认情况下并不附带对 Riru 或 Zygisk 的支持，因此 APatch 无法直接使用 LSPosed。

但是，APatch 可以通过安装 APM 的形式来添加对 Zygisk 的支持或者允许 LSPosed 在没有 Zygisk 的情况下运行。

下面是两种在 APatch 中使用 LSPosed 的解决方案：

1. 参考 [Zygisk 支持？](/faq#zygisk-支持) 部分以添加对 Zygisk 的支持。
2. 如果你只需要使用 LSPosed 而无需其它 Zygisk 功能，也可以使用 [Zloader](https://github.com/Mufanc/z-loader) 的 [LSPosed 专版](https://t.me/mufanc_chan/28) 以实现单独加载 LSPosed。

::: warning
Zloader 与 ZygiskNext / Zygisk_mod 等 Zygisk 实现不兼容，并且你也将无法使用任何其它依赖于 Zygisk 的 APM。使用前请先禁用或卸载任何 Zygisk 实现。
:::

::: info
Zloader 仍处于早期开发阶段，欢迎各位向开发者提交 Pull request 或就使用问题提交 issue 进行反馈。
:::

## 无法使用 Shamiko

Shamiko 闭源并且停更，无法适配。
::: danger
**APatch 开发者将不对任何因使用 Shamiko 导致的问题承担任何责任，你需要自行承担使用风险。**
:::

## Zygisk 支持？

APatch 和 KernelSU 保持一致，默认不附带对 Zygisk 的支持。

APatch 可使用 [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) 以实现 Zygisk 支持。

APatch 也可以使用 [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod) 以实现 Zygisk 支持。

## root 检测软件无法通过？

如果你的软件可以正常使用，那么就不要一直纠结于检测软件。
