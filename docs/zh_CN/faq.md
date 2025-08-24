# 常见问题解答

[[toc]]

## 什么是 APatch？

::: info
[这里](/zh_CN/what-is-apatch)的介绍更完整。
:::

APatch 是一种类似于 Magisk 或 KernelSU 的 root 解决方案，但 APatch 提供更多功能。
APatch 分别结合了 Magisk 方便易用的通过 `boot.img` 安装的方法，和 KernelSU 强大的内核修补能力。

## APatch 与 Magisk 的区别？

Magisk 对启动映像中的 `ramdisk` 进行补丁，以修改 `init` 系统。而 APatch 则直接修补 Android 内核。

## APatch 与 KernelSU 的区别？

KernelSU 需要您设备的内核的源代码，而 OEM 并不总是提供该源码。而 APatch 仅需要您的设备原本的`boot.img`。

## APatch 与 Magisk、KernelSU 的区别？

APatch 可选择不修改 SELinux，这意味着 Android 应用程序线程可以被 root，无需 `libsu` 和 `IPC` 。

APatch 提供 **KernelPatch Module（KP模块）**。

## 什么是 KernelPatch Module（KP模块）？

KPM 是一种运行在内核空间内的模块，可以让代码运行在内核空间中，类似于 **Loadable Kernel Modules**（LKM）。

此外，KPM 提供在内核空间进行内联 hook、系统调用表 hook 的能力。

更多相关信息，请参阅[如何编写KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md)。

## APatch 与 KernelPatch 的关系

APatch 依赖于 KernelPatch，继承了其所有功能并进行了扩展。

您可以仅安装 KernelPatch，但如此将不允许您使用 APM。

[了解更多关于 KernelPatch 的信息](https://github.com/bmax121/KernelPatch)。

## 什么是 SuperKey（超级密钥）？

KernelPatch 添加了一个新的系统调用（syscall），为应用程序和用户空间中的程序提供所有功能，此系统调用称为 **SuperCall**。 
当应用程序/程序尝试调用 SuperCall 时，它需要提供访问凭据，称为 **SuperKey**。
只有当 SuperKey 正确时，才能成功调用 SuperCall。否则，调用方将不受影响。

## 关于 SELinux如何处理？

KernelPatch 不修改 SELinux 上下文，而是通过 hook 绕过 SELinux。 这允许您在应用程序上下文中 root Android 线程，无需使用 `libsu` 启动新进程，然后执行 `IPC` 。这非常方便。

此外，APatch 直接利用 `magiskpolicy` 提供额外的 SELinux 支持。  

## APatch 的模块 WebUI

APatch 的源代码来自于 KernelSU，因此 KernelSU 引入 WebUI 特性之后，APatch 也在 [10568](https://github.com/bmax121/APatch/releases/tag/10568) 版本中引入了 WebUI 特性。

APatch 的 WebUI 实现方法和要求和 KernelSU 的实现方法和要求完全一致，为 KernelSU 模块设计的 WebUI 在 APatch 中可以完美运行。

如果你希望为 APM 或 KPM 设计 WebUI，请参考 KernelSU 的 [WebUI 介绍页面](https://kernelsu.org/zh_CN/guide/module-webui.html) 进行设计。

## 模块无法安装 (os error 2/5/22)？

在 root 授权页面取消 shell 的 root 权限。

## App 在手机重启后自动获得/丢失 root 权限？

此问题应该已经被修复了。不过，如果你仍然遇到此问题，可以尝试删除 `/data/adb/ap/package_config` 来重置 root 授权。随后，重新授权，即可修复该问题。

## 能使用 LSPosed 吗？

LSPosed 依赖于 Riru 或 Zygisk，APatch 默认情况下并不附带对 Riru 或 Zygisk 的支持，因此 APatch 无法直接使用 LSPosed。

但是，APatch 可以通过安装 APM 的形式来添加对 Zygisk 的支持或者允许 LSPosed 在没有 Zygisk 的情况下运行。

下面是两种在 APatch 中使用 LSPosed 的解决方案：

1. 参考 [Zygisk 支持？](#zygisk-support) 部分以添加对 Zygisk 的支持。
2. 如果你只需要使用 LSPosed 而无需其它 Zygisk 功能，也可以使用 [Zloader](https://github.com/Mufanc/z-loader) 的 [LSPosed 专版](https://t.me/mufanc_chan/28) 以实现单独加载 LSPosed。

::: warning
Zloader 与 Zygisk 不兼容，并且你也将无法使用任何其它依赖于 Zygisk 的 APM。使用前请先禁用或卸载任何 Zygisk 实现。
:::

::: danger
Zloader 在版本 `0.1.3` 以后没有任何新版本发布和代码提交。

我们不再建议使用此方式，请考虑改为引入 Zygisk。
:::

## 无法使用 Shamiko

Shamiko 是专有软件，我们无法适配。
::: danger
**APatch 开发者将不对任何因使用 Shamiko 导致的问题承担任何责任，你需要自行承担使用风险。**
:::

## Zygisk 支持？ {#zygisk-support}

APatch 和 KernelSU 保持一致，默认不附带对 Zygisk 的支持。

在社区的广泛努力下，现在有一些 APM 或 APatch 兼容的 Magisk 模块可以为 APatch 引入 Zygisk。以下是一些常用于引入 Zygisk 的 APM。

- [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext): 最早是为 KernelSU 提供 Zygisk 环境的 APM，功能最为完善，是对 Zygisk API 的完整实现，同时在此基础上提供了一些额外特性。版本 `0.9.1.1` 及之前是自由软件，在此之后则为专有软件。该 APM 明确适配 APatch 的起始版本为 `1.0.3`。

- [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod): 在 ZygiskNext 尚未适配 APatch 之前，该 APM 用于为 APatch 提供 Zygisk 环境。在 ZygiskNext 适配 APatch 之后，该 APM 随之停止更新并归档。

- [ReZygisk](https://github.com/PerformanC/ReZygisk): ZygiskNext 在成为专有软件后出现的一个自由的提供 Zygisk 环境的 APM，仍处于早期开发阶段，部分 ZygiskNext 的专有特性在此 APM 中不受支持。

- [NeoZygisk](https://github.com/JingMatrix/NeoZygisk): 在以上三者之后出现的另一个自由的提供 Zygisk 环境的 APM，它只专注于提供最基本的 Zygisk API 而不考虑其它额外特性。它的 Zygisk API 设计及相关部分直接由 Magisk 的内建 Zygisk 衍生而来,所以理论上说这个 APM 对 Zygisk API 的实现应该最贴近于 Magisk。

你可以在以上几个 Zygisk 实现中任选其一，或使用你自己的 Zygisk 实现。

::: warning
正如我们上面所说，APatch 默认不附带对 Zygisk 的内建支持，所以我们无法保证上述几种方案的可用性、适用性、稳定性等，也无法提供其它任何意义上的担保。

如果你在将 APatch 和其它任何 Zygisk 实现方案和/或任何依赖于 Zygisk 的 APM 一同使用时遇到了问题，**不要**直接向我们提交问题反馈，请优先考虑向这些 APM 的作者提交反馈。
:::

## Root 检测软件无法通过？

如果你的软件可以正常使用，那么就不要一直纠结于检测软件。
