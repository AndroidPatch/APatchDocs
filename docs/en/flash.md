# Flash

Before flashing by any method, please confirm that you have [patched](/en/patch.md) your image correctly.

## Using fastboot

::: info
This method is convenient and stable, you can easily recover your device if your device is corrupted. We strongly recommend using this way to flash.
:::

Connect your device using `ADB` and execute the following command:

```
adb reboot bootloader
```

When entering fastboot mode, execute this command:

```
fastboot flash boot boot.img
```

If your device supports command `fastboot boot`, you can use `fastboot boot boot.img` command to boot the system before you flash the image. If any accident occured, just reboot again then your device will started to boot correctly.

## Using third-party recovery

If your device has a third-party recovery (such as TWRP), you can use TWRP to flash the `boot.img` partition and gain root access.

## Convert your Magisk to APatch

::: warning
This method is only recommended for users whose device has `init_boot` partition and has flashed any third-party recovery.
:::

1. Open your Magisk application, choose **Uninstall Magisk**, and choose **Restore Images**.
2. Refer [here](/en/patch.md) to patch your original boot.img.
3. Reboot the device into `third-party recovery` and install the patched `boot.img` on the `boot partition`.

::: danger
This method has a chance of making your device unusable, so please try it carefully.
:::
