# Rescue From Bootloop

APatch has an integrated bootloop rescue mechanism that can help you quickly disable all modules and restart the device if any malicious module is flashed and the device fails to boot.

:::warning
This can only help you **when the device cannot boot due to malicious or conflicting modules**. However, this guide **cannot assist you with issues like factory reset or data loss!**
:::

## Integrated mechanisms

- Pressing volume down

After **holding down the power button until the screen turns on, continuously press and release it until the first screen lights up**. This way, the integrated Safe Mode of APatch will be activated, and all modules will be disabled.

:::info
APatch has a wide range of detection for volume buttons. Even if the `post-fs` phase has been executed, APatch will undo changes made in the `post-fs` phase if a signal from Safe Mode is detected.

In other words, it is valid before `sys.boot_completed=1`.
:::

- Entering Safe Mode

Some ROMs, such as MIUI/HyperOS, can activate Safe Mode within their recovery. Rebooting into recovery and activating the Safe Mode that comes with the ROM will also trigger APatch's Safe Mode.

---

:::tip
After entering Safe Mode, all modules on the system modules page of APatch will be disabled, but you can perform the "Uninstall" operation to remove modules that may be causing issues.
:::

## Some problems

### Even after activating Safe Mode, the system may still freeze.

It could be due to failure in reverting the modifications made in the `post-fs`, causing the freeze. Forcefully rebooting again should resolve it.

### Can't see APatch Manager after entering Safe Mode via recovery.

You may entered Android's Safe Mode.

When entering Android's Safe Mode, there is a rule applicable: After entering Safe Mode, all non-system apps will be disabled by the Android system. APatch Manager won't register itself as a system app, so this rule will result in the disabling of APatch Manager after entering Safe Mode.

This behavior is normal, and it shows that both Android's Safe Mode and APatch's Safe Mode work fine if you haven't solidified APatch Manager as a system app. What you need to do is only to reboot your device again, and Android will exit Safe Mode with APatch Manager recovered. However, APatch won't exit Safe Mode at the same time, so you can disable any APMs that caused problems in this case.
