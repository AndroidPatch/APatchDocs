# 什么是 APatch？

适用于 Android 设备的基于内核的 Root 新解决方案，可以工作在内核模式，并直接在内核空间中为用户空间应用程序授予 root 权限。

## 特点

适用于大部分安卓设备，不仅限于GKI内核设备。

提供类似 Magisk 模块的 APM 支持。

提供内核补丁模块支持。允许将任何代码注入内核（要求内核函数 `inline-hook` 和 `syscall-table-hook` 可用）。

APatch 依赖于 KernelPatch。

APatch 管理器 和 APM 的源代码来自对 KernelSU 管理器 和 KernelSU 的复制和修改。

## 如何使用

请参考: [安装教程](/zh_CN/install)

## 如何修补

请参考: [修补教程](/zh_CN/patch)
