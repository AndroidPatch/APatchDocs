# Flash

Before flashing by any method, please confirm that you have [patched](/en/patch.md) your image correctly.


## Flashing by fastboot command

::: info
This method is convenient and stable, you can easily recover your device if your device is corrupted. We strongly recommend using this way to flash.
:::

Connect your device using `adb`, then execute:

```
adb reboot bootloader
```

to reboot your device into fastboot mode. Next, execute this command to flash:

```
fastboot flash boot boot.img
```

*If your device supports command `fastboot boot`, you can use `fastboot boot boot.img` command to boot the system before you flash the image. If any accident occured, just reboot again then your device will started to boot correctly.*

## Flashing by third-party recovery

If your device has a third-party recovery(such as TWRP), you can flash the image to boot partition directly.

## Convert your Magisk to APatch

::: warning
This method is only recommended for users whose device has `init_boot` partition and has flashed any third-party recovery.
:::

1. Open your Magisk application, choose "Uninstall Magisk', and choose "Restore Images".
2. Patch your original image refer to [This](/en/patch.md) .
3. Go to [here](/en/flash.md#Flashing-by-third-party-recovery) and flash your image refer to that method.

::: danger
This method might cause your device run correctly, use as your own risk.
:::
