# Install

## Preparations

1. Ensure your device has unlocked Bootlocker before you Rooting your device.

2. You can execute command `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` in terminal or adb to ensure your kernel is support to patch(Root premission required)

3. [Click here](https://github.com/bmax121/APatch/releases) to get the latest stable version of APatch Manager.

4. Extract your original `boot.img` from your ROM file or using other method, we will need it to patch.

5. Backup your original `boot.img` to other devices such as your computer and U-Disk. If any problem occured, you can flash your original `boot.img` by fastboot to recover your device.

## Warn

1. Please confirm that you can use ADB and fastboot tools.

2. APatch always requires patching `boot.img` in any devices, do NOT try to patch and flash `init_boot.img` or any other partitions images. APatch will NOT responsible for any fail of patching and flashing in incorrect method.

3. Avoid using the `boot.img` patched by other manager.
