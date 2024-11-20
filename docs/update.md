# Update

## Normal APatch update

::: info
You can update directly in the app.
:::

1. Download the new version of APatch Manager

> Please re-confirm the SuperKey if necessary.

2. Click the button in the upper right hand corner ![Patch Button](/PButton.png)

3. Select `Patch and Install`

## OTA update with APatch retention

::: tip
OTA update with root retention in APatch is consistent with Magisk.
:::

1. Download and start installing the OTA update through your ROM's software

2. After the OTA update installation is complete (when prompted to reboot), open APatch Manager and click the button in the upper right hand corner ![Patch Button](/PButton.png)

3. Select `Install to Inactive Slot (After OTA)`

::: warning
The OTA update functionality with root saving in APatch is currently not very stable and issues may occur. If an issue occurs [go to the APatch project GitHub repository to submit an issue](https://github.com/bmax121/APatch/issues/new/choose).
:::

::: info PAY ATTENTION
For MIUI/Xiaomi HyperOS users, here is what you need to pay extra attention for:

Different from Magisk/KernelSU, APatch currently will not automatically backup the stock `boot.img` when patching it. If you have not manually restored the stock `boot.img` before a system update, the verification will fail, and you will be forced to use a full ROM to complete the update process.

If you are using MIUI/Xiaomi HyperOS (especially Dev Edition), we recommend that restoring stock `boot.img` manually before system update.
:::

## Miscellaneous

:::info
This document was last updated on 2024-05-18 at 22:30. Caution should be exercised when accessing the contents of this page if the time difference from the present is too great.
:::

The content described in this document is based on the latest version of APatch Manager. If you cannot find the buttons mentioned in this document, ![Patch Button](/PButton.png) it means that the version of your APatch Manager is too low.

::: warning
Older versions are no longer supported and there is a risk of compromising the SuperKey.
:::

In some major updates, newer versions of KernelPatch may not be compatible with older versions, **causing loss of root** after the update. If this incompatibility exists, we will specifically mention it in the release notes. If such a problem occurs, we recommend that you redo the installation steps using the original `boot` image.

**There are a very small number of cases where OTA slot switching does not work.** The sample is too small for us to determine exactly what the problem is. If this fails, please reinstall the program manually. Also, if you want, you can report the problem and attach logs on the page [issues](https://github.com/bmax121/APatch/issues/new/choose).

We need your help.
