# Installation

## Preparations before installing

1. Ensure your phone's bootloader is unlocked before rooting.

2. You can execute command `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` in terminal or ADB to ensure your kernel is support to patch (Root required).

3. [Click here](https://github.com/bmax121/APatch/releases) to get the latest stable version of APatch.

4. Extract the `boot.img` from your ROM or from another source containing the stock `boot.img` of your device. You'll need it later for patching.

5. Backup the `boot.img` you extracted to a computer, USB drive, or another device. If any issues occur, you can flash your original `boot.img` via fastboot to recover your device.

## Warn

1. Ensure to use the latest ADB and fastboot tools and have knowledge about them to proceed to the next step. If you haven't learned about them yet, we recommend researching to learn about them first.

2. APatch fixes the `boot.img` regardless of the device. Do not attempt to fix or flash the `init_boot` or other partition image files. The APatch developers are not responsible for resulting patch and boot failures.

3. Avoid using the `boot.img` file that has been patched by other managers to avoid unexpected situations.
