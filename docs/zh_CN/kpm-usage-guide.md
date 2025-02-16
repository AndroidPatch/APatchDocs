# KernelPatch Modules(KPM) 使用指南

[[toc]]

---

APatch 依赖于 KernelPatch，继承了其全部功能并进行了扩展。因此，APatch 也支持使用 KernelPatch Modules (KPM)。下面是关于 KPM 的使用说明。

## 什么是 KPM？

KPM 是一种运行在内核空间内的模块，可以让代码运行在内核空间中，类似于 Loadable Kernel Modules（LKM）。

通过 KPM，你可以实现一些 APM 不能实现的功能(例如分区镜像保护)，~~你甚至可以实现将 KernelSU 的 ksud 改成 KPM 以实现在 APatch 上运行 KernelSU~~。

## 如何安装 KPM？

KPM 有三种安装方式：嵌入、加载和安装。

::: tip 关于“安装”
本文档最后一次的更新时间是 2024-08-03 13:00。当与现在时间差过大时，应谨慎参考本页内容。

目前，APatch 并没有实现 KPM 的“安装”操作，因此现阶段 APatch 的 KPM 只能通过“嵌入”和“加载”两种方式安装。KernelPatch 和 APatch 的开发者 正在努力实现相关功能，请耐心等待。
:::

### 嵌入

`嵌入`是指将 KPM 直接嵌入至 `kernel` 。此模式下安装的 KPM 会同 `kernel` 一起被合并进 `boot.img` 中，在 `pre-kernel-init` 阶段加载。

KPM 的嵌入可以在首次使用 APatch 管理器修补 `boot.img` 时或者在完成 APatch 安装后进行。你也可以使用 `kptools` 手动嵌入。

#### 首次修补时嵌入 {#embed-kpms-at-first-patching}

1. 按照[安装指南](/zh_CN/install)中的[自动修补](/zh_CN/install.md#自动修补)流程进行修补，在进行第 4 步之后不要立即执行下一步操作。

2. 点击“嵌入模块”按钮，之后选择你要嵌入的 KPM 文件 (后缀名为 `.kpm`)。

3. 确认要嵌入的 KPM 是你想要使用的 KPM。

4. 完成剩余的“自动修补”流程即可。

#### 安装 APatch 后嵌入

在 APatch 安装后，嵌入 KPM 的方式和安装 APM 的方式大致相同。你可以在“内核模块”界面点击右下角的按钮，选择“嵌入”，之后的步骤可以参考[首次修补时嵌入](/zh_CN/kpm-usage-guide#embed-kpms-at-first-patching)进行。

### 加载

`加载`是指将 KPM 立即交给内核进行加载。通过这种方式加载的 KPM 会立即生效，但会在下次重新启动后消失。

加载 KPM 的方式和安装 APM 的方式大致相同，唯一一点区别在于 KPM 在加载后无需重启。

### 安装

::: tip 注意
目前 KernelPatch 和 APatch 还未实现 KPM 的安装，以下的描述仅为对安装 KPM 的预期行为描述。
:::

`安装`是指将 KPM 作为一个类似于 APM 的模块文件安装至 `/data/adb/kpmodules` 或类似目录。通过这种方式安装的 KPM 可以在特定的 event 进行加载。
