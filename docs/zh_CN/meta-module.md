# 元模块

元模块是 KernelSU 中的一项革命性功能，它将核心模块系统的关键能力从核心转移到可插拔模块中。这种架构转变在保持 KernelSU 稳定性和安全性的同时，为模块生态系统释放了更大的创新潜力。

APatch 随后也引入了这一元模块机制，将原本内置于核心守护进程（`apd`）中的系统分区挂载逻辑剥离，交由独立的元模块负责处理，并直接兼容为 KernelSU 生态开发的元模块。因此，在新版 APatch 中，如果您需要使用会修改 `/system` 等分区文件的常规 APM 模块，**必须先选择并安装一个元模块**（例如下表中的 OverlayFS、Magic Mount 或 Hybrid Mount 等挂载实现；同一时间仅支持启用一个元模块），否则常规模块的文件挂载将无法生效。

::: warning 注意：
安装元模块后，您需要重启设备才能继续安装其他模块。
:::

下表提供了当前可用的元模块。

| 可用的元模块 |
| --- |
| [overlayfs](https://github.com/KernelSU-Modules-Repo/meta-overlayfs) |
| [mountify](https://github.com/backslashxx/mountify) |
| [magic mount](https://github.com/7a72/meta-magic_mount) |
| [magic mount rs](https://github.com/Tools-cx-app/meta-magic_mount) |
| [hybrid mount](https://github.com/YuzakiKokuban/meta-hybrid_mount) |
