# KernelPatch Module Usage Guide

[[toc]]

---

APatch relies on KernelPatch, inheriting all its functionalities and expanding its capabilities. Therefore, APatch also supports KernelPatch Modules (KPM). Below is an introduction about using KPMs.

## What is KPM?

KernelPatch Modules (KPM) is a type of module that allows code to run in kernel space, similar to Loadable Kernel Modules (LKM). They can perform some operations that AndroidPatch Module (APM) cannot (e.g. partition image protection).

## How to use KPM?

There are 3 ways to use KPM: Embed, Load, and Install.

::: tip ABOUT "INSTALL"
Currently, APatch hasn't implemented the "Install" function for KPMs, and you can only use KPMs via "Embed" or "Load". KernelPatch and APatch's developers are working quickly to implement the "Install" function. Please wait patiently.
:::

### Embed

`Embed` is a function that embeds KPMs directly into the `kernel`. KPMs installed by this way will be merged together with patched `kernel` into `boot.img`, and will be loaded at the boot stage `pre-kernel-init`.

The Embed of KPMs can be done both at first patching `boot.img` and after installation of APatch.

#### Embed KPMs at first patching {#embed-kpms-at-first-patching}

1. [Patch](/install#patch) your `boot.img` by following the [Automatically patching](/install#automatically-patching) guide. After completing step 4, **DO NOT** proceed to the next step immediately.

2. Click the "Embed KPM" button and select the KPM you want to embed (KPM files have the `.kpm` suffix).

3. Verify that the selected KPM is the one you want to embed.

4. Complete the remaining steps of the "Automatically patching" guide, and you're done.

#### Embed KPMs after installation of APatch

After installing APatch, the way of embedding KPMs is familiar to installing APMs. You can click the button in the lower right corner and choose "Embed". The remaining steps can be referred to in [Embed KPMs at first patching](/kpm-usage-guide#embed-kpms-at-first-patching).

### Load

`Load` is a function that allows the kernel to load KPMs directly. KPMs installed this way will be loaded immediately. However, all loaded KPMs will be lost after the next reboot.

The way of load KPMs is familiar to installing APMs, with the only difference being that you don't need to reboot your device after loading KPMs.

### Install

::: tip ATTENTION
KernelPatch and APatch haven't yet implemented the "Install" function for KPMs. All descriptions below are speculative and describe the expected behavior of "Install" option for KPMs.
:::

`Install` is a function that allows you to install KPMs similarly to APM files, in directories like `/data/adb/kpmodules` or any similar directories. KPMs installed by this way can be loaded during special events.
