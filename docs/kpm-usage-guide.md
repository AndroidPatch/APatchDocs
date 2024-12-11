# KernelPatch Module Usage Guide

APatch relies on KernelPatch, it inherits all of its functionalities and has been expanded. Therefore, APatch also supports KernelPatch Modules (KPM). Here is an introduction about using KPMs.

## What is KPM?

KernelPatch Modules (KPM) is a type of module that allows code to run in kernel space, similar to Loadable Kernel Modules (LKM). They can perform some operations that APMs can not do (e.g. partition image protection). ~~You can even modify KernelSU's ksud to a KPM to allow KernelSU to run on APatch~~.

## How to use KPM?

There are 3 ways to use KPM: Embed, Load, and Install.

::: tip ABOUT "INSTALL"
This document was last updated on 2024-08-06 at 19:14. Caution should be exercised when accessing the contents of this page if the time difference from the present is too great.

Currently, APatch has not implemented the "Install" function for KPMs, and you can only use KPMs via "Embed" and "Load". KernelPatch and APatch's developers are working quickly to implement the "Install" function. Please wait patiently.
:::

### Embed

`Embed` is a function that embeds KPMs directly into the `kernel`. KPMs installed by this way will be merged together with patched `kernel` into `boot.img`, and will be loaded at the boot stage `pre-kernel-init`.

The Embed of KPMs can be done both at first patching `boot.img` and after installation of APatch.

#### Embed KPMs at first patching {#embed-kpms-at-first-patching}

1. [Patch](/install#patch) your `boot.img` by following the [Automatically patching](/install#automatically-patching) guide. After completing step 4, do not proceed to the next step immediately.

2. Click the "Embed KPM" button, and select the KPM you want to embed (The suffix name of KPM files is `.kpm`).

3. Confirm that the KPM is the KPM you want to embed.

4. Complete the rest of the steps in the "Automatically patching" guide, and it will be done.

#### Embed KPMs after installation of APatch

After installing APatch, the way of embedding KPMs is familiar to installing APMs. You can click the button in the lower right corner and choose "Embed". The remaining steps can be referred to in [Embed KPMs at first patching](/kpm-usage-guide#embed-kpms-at-first-patching).

### Load

`Load` is a function that lets the kernel load KPMs directly. KPMs installed this way will be loaded immediately. However, all Loaded KPMs will be lost after the next reboot.

The way of Load KPMs is familiar to installing APMs; the only difference is that you do not need to reboot your device after Loading KPMs.

### Install

::: tip ATTENTION
KernelPatch and APatch have not yet implemented the "Install" function for KPMs. All descriptions below are speculative and describe the expected behavior of "Install" for KPMs.
:::

`Install` is a function that installs KPMs similar to APM files into `/data/adb/kpmodules` or any similar directories. KPMs installed by this way can be loaded during special events.
