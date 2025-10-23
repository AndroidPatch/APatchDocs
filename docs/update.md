# Update

[[toc]]

## Normal APatch update

::: info
You can update directly in the app.
:::

1. Download the new version of APatch Manager

> Please re-confirm the SuperKey if necessary.

2. Click the button in the upper right hand corner ![Patch Button](/PButton.png)

3. Select `Patch and install`

## OTA update with APatch retention

::: tip
Keep the OTA root update process of APatch consistent with that of Magisk.
:::

1. Download and start installing the OTA update through your ROM's software

2. After the OTA update installation is complete (when prompted to reboot), open APatch Manager and click the button in the upper right hand corner ![Patch Button](/PButton.png)

3. Select `Install to inactive slot (After OTA)`

::: warning
The OTA update functionality is currently unstable and may cause issues. If an issue occurs, [go to the APatch repository on GitHub to submit an issue](https://github.com/bmax121/APatch/issues/new/choose).
:::

::: info PAY ATTENTION
For MIUI/Xiaomi HyperOS users, pay attention to the following points:

Different from Magisk/KernelSU, APatch currently won't automatically back up the stock `boot.img` when patching it. If you haven't manually restored the stock `boot.img` before a system update, the check will fail, and you will be forced to use a full ROM to complete the update process.

If you're using MIUI/Xiaomi HyperOS (especially Dev Edition), we recommend that restoring stock `boot.img` manually before system update.
:::

## Miscellaneous

The content described in this document is based on the latest version of APatch Manager. If you cannot find the buttons mentioned in this document, ![Patch Button](/PButton.png) it means that the version of your APatch Manager is too old.

::: warning
Older versions are no longer supported and may pose a risk of compromising the SuperKey.
:::

In some major updates, newer versions of KernelPatch may not be compatible with older versions, **causing loss of root** after the update. If such an incompatibility occurs, it will be specifically mentioned in the release notes. If this happens, we recommend that you redo the installation steps using the stock `boot.img`.

**There are a very small number of cases where OTA slot switching doesn't work.** The sample is too small to determine the exact cause of the issue. If this happens, reinstall the app manually. Additionally, if you want, you can report the issue and attach logs on the [Issues](https://github.com/bmax121/APatch/issues/new/choose) page on GitHub.
