# What is AndroidPatch(APatch)?

AndroidPatch(APatch) is a new Root solution based on Android Kernel, it can works in Kernel mode, and grant the root permission for user space applications in kernel space directly.

## Features

Works on most of Android devices, not only on GKI Kernel devices.

Supports AndroidPatch Modules(APM) similar to Magisk Modules.

Supports KernelPatch Modules(KPM), which allows to inject any code into Kernel (Requires Kernel function `inline-hook` and `syscall-table-hook` is enabled).

APatch depends on KernelPatch.

The source code of APatch UI and APM is based and modified on the source code of KernelSU Manager and KernelSU.

## How to use?

Please read this: [Installation Guide](/en/install).

## How to patch?

Please read this: [Patch Guide](/en/patch).
