# Metamodules

Metamodules are a revolutionary feature in KernelSU that transfers critical module system capabilities from the core to pluggable modules. This architectural shift maintains KernelSU's stability and security while unleashing greater innovation potential for the module ecosystem.

APatch subsequently adopted this metamodule mechanism as well, decoupling the built-in partition mounting logic from its core daemon (`apd`) into standalone metamodules while maintaining compatibility with metamodules built for KernelSU. Therefore, in newer versions of APatch, if you use regular APM modules that modify `/system` or other partition files, you **must first choose and install a metamodule** (such as an OverlayFS, Magic Mount, or Hybrid Mount implementation listed below; only one metamodule can be active at a time), otherwise module file mounting will not take effect.

::: warning Note:
After installing a metamodule, you need to reboot your device before continuing to install other modules.
:::

The table below provides the currently available metamodules.

| Available Metamodules |
| --- |
| [overlayfs](https://github.com/KernelSU-Modules-Repo/meta-overlayfs) |
| [mountify](https://github.com/backslashxx/mountify) |
| [magic mount](https://github.com/7a72/meta-magic_mount) |
| [magic mount rs](https://github.com/Tools-cx-app/meta-magic_mount) |
| [hybrid mount](https://github.com/YuzakiKokuban/meta-hybrid_mount) |
