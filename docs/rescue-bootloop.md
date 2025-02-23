# Rescue from bootloop

[[toc]]

---

APatch has an integrated bootloop rescue mechanism that can help you quickly disable all modules and restart the device if any malicious module is flashed and the device fails to boot.

::: warning
This can only help you **when the device cannot boot due to malicious or conflicting modules**. However, this guide **cannot assist you with issues like factory reset or data loss!**
:::

## Integrated mechanisms

- Pressing Volume down button

After **holding down the power button until the screen turns on, continuously press and release it until the first screen lights up**. This way, the built-in Safe Mode of APatch will be activated, and all modules will be disabled.

::: info
APatch has a wide range of detection for volume buttons. Even if the `post-fs` phase has been executed, APatch will revert any changes made during it if a signal from Safe Mode is detected.

In other words, this check occurs before `sys.boot_completed=1`.
:::

- Entering Safe Mode

Some ROMs, such as MIUI/Xiaomi HyperOS, may trigger Safe Mode in their Recovery. Rebooting into Recovery and activating the Safe Mode that comes with the ROM will also trigger APatch's Safe Mode.

---

::: tip
After entering Safe Mode, all modules on the APatch system's module page will be disabled. However, you can perform the "Uninstall" operation to remove any modules that may be causing issues.
:::

## Some problems

### Even after activating Safe Mode, the system may still freeze.

This may happen due to failures in reverting the `post-fs` modifications, which can cause the freeze. Forcefully rebooting should resolve the issue.

### I can't see APatch Manager after entering Safe Mode via Recovery.

You may entered Android's Safe Mode.

When entering Android's Safe Mode, there's an important rule: all apps that aren't part of the system will be disabled by Android system. APatch Manager isn't considered a system app, so this rule will result in the disabling of APatch Manager after entering Safe Mode.

This behavior is normal, and it shows that both Android's Safe Mode and APatch's Safe Mode are working correctly, as long as APatch hasn't been consolidated as a system app. What you need to do is only to reboot your device again, and Android will exit Safe Mode with APatch Manager restored. However, APatch won't exit Safe Mode automatically. In this case, you can disable any APMs that may have caused issues.
