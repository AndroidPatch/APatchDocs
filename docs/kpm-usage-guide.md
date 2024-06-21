# KernelPatch Modules(KPM) usage guide

APatch is relied on KernelPatch, it inherits all of its functionalities and has been expanded. So APatch is also supports KernelPatch Modules(KPM). Here are some introduction about using KPMs.

## What is KPM?

KernelPatch Modules(KPM) is a type of module that allow codes run in kernel space, similar to Loadable Kernel Modules(LKM). It can do some operations that APMs can't do(for example, partition image protection), ~~you can even modify KernelSU's ksud to a KPM to allow KernelSU run on APatch~~.

## How to use KPM?

There are 3 ways to use KPM: Embed, Load, and Install.

::: tip About "Install"

This document was last updated on 2024-06-21 at 23:12. Caution should be exercised when accessing the contents of this page if the time difference from the present is too great.

Currently, APatch hasn't implemented the "Install" of KPMs, and now you can only use KPMs via "Embed" and "Load". KernelPatch and APatch's Developers is hurry implementing "Install" function, please wait patiently.

:::

### Embed

Embed is a function that embed KPMs directly into `kernel`. KPMs installed by this way will be merged together with patched `kernel` into `boot.img`, and be loaded at boot stage `pre-kernel-init`.

The Embed of KPMs can be done both at first patching `boot.img` and after installation of APatch.

#### Embed KPMs at first patching

1. [Patch](/patch) your `boot.img` following the guidance's "Automatically Patching" part, after done step 4, do not execute the next step immediately.

2. Click the "Embed KPM" button, and select the KPM you want to embed(The suffix name of KPM files is `.kpm`).

3. Comfirm that the KPM is the KPM you want to embed.

4. Complete the rest step of "Automatically patching" part, and it done.

#### Embed KPMs after installation of APatch

After installation of APatch, the way of embedding KPMs is familiar to installing APMs. You can click the lower right corner button, choose "Embed". The rest step can be referred to [Embed KPMs at first patching](/kpm-usage-guide#embed-kpms-at-first-patching).

### Load

Load is a function that let kernel load KPMs directly. KPMs install by this way will be loaded immediately. However, all Loaded KPMs will lost after next reboot.

The way of Load KPMs is familiar to installing APMs, the only difference is you needn't reboot your device after Loading KPMs.

### Install

::: tip Attention

KernelPatch and APatch hasn't implemented the "Install" of KPMs. All of descriptions below is only a description about the behaviour expected of "Install" KPMs.

:::

Install is a function that install KPMs like APM files to `/data/adb/kpmodules` or any similar directories. KPMs installed by this way can be loaded at any special events.