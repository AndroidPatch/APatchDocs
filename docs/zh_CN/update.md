# 升级

[[toc]]

## 普通升级 APatch

::: info
通常来说，你可以直接在 app 内更新。
:::

1. 下载新版本的 APatch 管理器

> 如果需要，请重新验证超级密钥。

2. 点击右上角的 ![Patch Button](/PButton.png)  

3. 选择 `修补并安装`

## OTA 升级保留 APatch

::: tip
APatch 的保 root OTA 升级流程与 Magisk 保持一致。
:::

1. 正常 OTA 流程

2. 在 OTA 更新安装完成时(提示重启时)，打开 APatch 管理器，点击右上角的 ![Patch Button](/PButton.png)  

3. 选择 `安装到未使用的槽位（OTA 后）`

::: warning
APatch 的 OTA 功能目前不太稳定，可能会出现问题。当遇到问题时，最好[前往 APatch 项目 GitHub 仓库提交 issue](https://github.com/bmax121/APatch/issues/new/choose)。
:::

::: info 提请注意
对于 MIUI/Xiaomi HyperOS 设备，以下事项需要额外注意：

和 Magisk/KernelSU 不同，APatch 目前不会在修补 `boot` 镜像时自动备份原厂镜像。如果不在更新系统前手动恢复 `boot` 镜像，会导致系统升级的校验失败，从而被强制使用全量包进行更新。

如果你正在使用 MIUI/Xiaomi HyperOS(特别是开发版)，我们建议你在更新系统前手动还原原厂 `boot` 镜像。
:::

## 其他注意事项 {#Miscellaneous}

本文档所述内容基于最新的 APatch 管理器。当你无法找到本文里提到的按钮![Patch Button](/PButton.png)时，这说明你的 APatch 管理器版本过低。

::: warning
旧版将不再支持且存在超级密钥泄露的安全隐患。
:::

在一些重大版本更新中，新版本的 KernelPatch 会与旧版的**不兼容**，**导致升级后丢失 root**。如果存在不兼容现象，我们会在发布信息中特别说明。当已出现这个问题时，我们推荐你使用原 `boot` 重新修补安装。

**目前存在极少量 OTA 切换槽位失败的情况。** 当这样失败时，请重新手动安装。此外，如果你愿意，可以携带问题日志[前往 GitHub 提出 issue](https://github.com/bmax121/APatch/issues/new/choose)。
