# AndroidPatch Module Development Guide {#introduction}

APatch provides a modular mechanism (AndroidPatch Module) for modifying a system partition while preserving its integrity. This mechanism is often referred to as `systemless`.

APatch module implementation copied and modified from [KernelSU](https://github.com/tiann/KernelSU).

The modified code can be found here:

KernelSU: [https://github.com/tiann/KernelSU/tree/main/userspace/ksud](https://github.com/tiann/KernelSU/tree/main/userspace/ksud)  
APatch: [https://github.com/bmax121/APatch/tree/main/apd](https://github.com/bmax121/APatch/tree/main/apd)  

The following documentation was copied and modified from the KernelSU documentation, and much of the content is the same. The main points to note are as follows:

1. File location
2. Environment variables
3. SELinux support, APatch directly uses `magiskpolicy`

The mechanism of APatch modules operation is almost the same as Magisk. If you are familiar with the development of Magisk modules, the development of APatch modules is very similar. You can skip the presentation of the modules below, just read what the differences are.

[[toc]]

## BusyBox

APatch ships with a feature-complete BusyBox binary (including full SELinux support). The executable is located at `/data/adb/ap/bin/busybox`.
APatch's BusyBox supports runtime toggle-able "ASH Standalone Shell Mode".
What this Standalone Mode means is that when running in the `ash` shell of BusyBox, every single command will directly use the applet within BusyBox, regardless of what is set as `PATH`.
For example, commands like `ls`, `rm`, `chmod` will **NOT** use what is in `PATH` (in the case of Android by default it will be `/system/bin/ls`, `/system/bin/rm` and `/system/bin/chmod`, respectively), but will instead directly call internal BusyBox applets.
This makes sure that scripts always run in a predictable environment and always have the full suite of commands no matter which Android version it is running on.
To force a command not to use BusyBox, you have to call the executable with full paths.

Every single shell script running in the context of APatch will be executed in BusyBox's `ash` shell with Standalone Mode enabled. For what is relevant to 3rd party developers, this includes all boot scripts and module installation scripts.

For those who want to use this Standalone Mode feature outside of APatch, there are 2 ways to enable it:

1. Set environment variable `ASH_STANDALONE` to `1`.<br>Example: `ASH_STANDALONE=1 /data/adb/ap/bin/busybox sh <script>`
2. Toggle with command-line options:`/data/adb/ap/bin/busybox sh -o standalone <script>`

To make sure all subsequent `sh` shell executed also runs in Standalone Mode, option 1 is the preferred method (and this is what APatch and the APatch Manager internally use) as environment variables are inherited down to child processes.

::: tip DIFFERENCES WITH KERNELSU
The location of BusyBox has been changed from `/data/adb/ksu/bin/busybox` to `/data/adb/ap/bin/busybox`.
:::

::: tip DIFFERENCES WITH MAGISK
APatch's BusyBox is now using the binary file compiled directly from the Magisk project. **Thanks to Magisk!** Therefore, you don't need to worry about compatibility issues between BusyBox scripts in Magisk and APatch, as they're exactly the same!
:::

## APM Modules {#APatch-modules}

A APatch module is a folder placed in `/data/adb/modules` with the structure below:

```txt
/data/adb/modules
├── .
├── .
|
├── $MODID                  <--- The folder is named with the ID of the module
│   │
│   │      *** Module Identity ***
│   │
│   ├── module.prop         <--- This file stores the metadata of the module
│   │
│   │      *** Main Contents ***
│   │
│   ├── system              <--- This folder will be mounted if skip_mount does not exist
│   │   ├── ...
│   │   ├── ...
│   │   └── ...
│   │
│   │      *** Status Flags ***
│   │
│   ├── skip_mount          <--- If exists, the `/system` folder of the module will not be mounted
│   ├── disable             <--- If exists, the module will be disabled
│   ├── remove              <--- If exists, the module will be removed next reboot
│   │
│   │      *** Optional Files ***
│   │
│   ├── post-fs-data.sh     <--- This script will be executed in post-fs-data
│   ├── post-mount.sh       <--- This script will be executed in post-mount
│   ├── service.sh          <--- This script will be executed in late_start service
│   ├── boot-completed.sh   <--- This script will be executed on boot completed
|   ├── uninstall.sh        <--- This script will be executed when APatch removes your module
|   ├── action.sh           <--- This script will be executed when user click the Action button in APatch Manager
│   ├── system.prop         <--- Properties in this file will be loaded as system properties by resetprop
│   ├── sepolicy.rule       <--- Additional custom sepolicy rules
│   │
│   │      *** Auto Generated, DO NOT MANUALLY CREATE OR MODIFY ***
│   │
│   ├── vendor              <--- A symlink to $MODID/system/vendor
│   ├── product             <--- A symlink to $MODID/system/product
│   ├── system_ext          <--- A symlink to $MODID/system/system_ext
│   │
│   │      *** Any additional files / folders are allowed ***
│   │
│   ├── ...
│   └── ...
|
├── another_module
│   ├── .
│   └── .
├── .
├── .
```

::: tip DIFFERENCES WITH MAGISK
APatch doesn't have built-in support for Zygisk, so there is no content related to Zygisk in the module.
However, you can follow this: [Zygisk Support?](faq#zygisk-support) to support Zygisk modules. In this case, the content of the Zygisk module is identical to that supported by Magisk.
:::

### module.prop

`module.prop` is a configuration file for a module. In APatch, if a module doesn't contain this file, it won't be recognized as a module. The format of this file is as follows:

```txt
id=<string>
name=<string>
version=<string>
versionCode=<int>
author=<string>
description=<string>
```

- `id` has to match this regular expression: `^[a-zA-Z][a-zA-Z0-9._-]+$`<br>
  Example: ✓ `a_module`, ✓ `a.module`, ✓ `module-101`, ✗ `a module`, ✗ `1_module`, ✗ `-a-module`<br>
  This is the **unique identifier** of your module. You should not change it once published.
- `versionCode` has to be an **integer**. This is used to compare versions.
- Others that were not mentioned above can be any **single line** string.
- Make sure to use the `UNIX (LF)` line break type and not the `Windows (CR+LF)` or `Macintosh (CR)`.

### Shell scripts {#shell-scripts}

The differences between `post-fs-data.sh`, `post-mount.sh`, `service.sh` and `boot-completed.sh` are described in [Boot scripts](#boot-scripts). For most module developers, `service.sh` should be good enough if you just need to run a boot script, if you need to run the script after boot completed, please use `boot-completed.sh`. If you want to do something after mounting OverlayFS, please use `post-mount.sh`.

In all scripts of your module, please use `MODDIR=${0%/*}` to get your module's base directory path; do **NOT** hardcode your module path in scripts.

::: tip DIFFERENCES WITH MAGISK AND KERNELSU
You can determine if the script is running in APatch by using the `APATCH` environment variable. If running in APatch, this value will be set to `true`.
:::

### `system` directory {#system-directories}

The contents of this directory will be overlaid on top of the system's `/system` partition using OverlayFS after the system is booted. This means that:

1. Files with the same name as those in the corresponding directory in the system will be overwritten by the files in this directory.
2. Folders with the same name as those in the corresponding directory in the system will be merged with the folders in this directory.

If you want to delete a file or folder in the original system directory, you need to create a file with the same name as the file/folder in the module directory using `mknod filename c 0 0`. This way, the OverlayFS system will automatically "whiteout" this file as if it has been deleted (the /system partition isn't actually changed).

You can also declare a variable named `REMOVE` containing a list of directories in `customize.sh` to execute removal operations, and APatch will automatically execute `mknod <TARGET> c 0 0` in the corresponding directories of the module. For example:

```sh
REMOVE="
/system/app/YouTube
/system/app/Bloatware
"
```

The above list will execute `mknod $MODPATH/system/app/YouTube c 0 0` and `mknod $MODPATH/system/app/Bloatware c 0 0`, `/system/app/YouTube` and `/system/app/Bloatware` will be removed after the module takes effect.

If you want to replace a directory in the system, you need to create a directory with the same path in your module directory, and then set the attribute `setfattr -n trusted.overlay.opaque -v y <TARGET>` for this directory. This way, the OverlayFS system will automatically replace the corresponding directory in the system (without changing the /system partition).

You can declare a variable named `REPLACE` in your `customize.sh` file, which includes a list of directories to be replaced, and APatch will automatically perform the corresponding operations in your module directory. For example:

```sh
REPLACE="
/system/app/YouTube
/system/app/Bloatware
"
```

This list will automatically create the directories `$MODPATH/system/app/YouTube` and `$MODPATH/system/app/Bloatware`, and then execute `setfattr -n trusted.overlay.opaque -v y $MODPATH/system/app/YouTube` and `setfattr -n trusted.overlay.opaque -v y $MODPATH/system/app/Bloatware`. After the module takes effect, `/system/app/YouTube` and `/system/app/Bloatware` will be replaced with empty directories.

::: tip DIFFERENCES WITH MAGISK
APatch's systemless mechanism is implemented through the kernel's OverlayFS, while Magisk currently uses magic mount (bind mount). These two implementation methods have significant differences, but the ultimate goal is the same: modifying `/system` files without physically modifying the `/system` partition.
:::

If you're interested in OverlayFS, it's recommended to read the Linux Kernel's [documentation on OverlayFS](https://docs.kernel.org/filesystems/overlayfs.html).

### system.prop

This file follows the same format as `build.prop`. Each line comprises of `[key]=[value]`.

### sepolicy.rule

If your module requires some additional sepolicy patches, please add those rules into this file. Each line in this file will be treated as a policy statement.

## Module installer {#module-installer}

The APatch module installation package is a ZIP file that can be flashed through the APatch Manager, and the format of this ZIP file is as follows:

```txt
module.zip
│
├── customize.sh                       <--- (Optional, more details later)
│                                           This script will be sourced by update-binary
├── ...
├── ...  /* The rest of module's files */
│
```

::: warning
APatch module is **NOT** compatible for installation in a custom Recovery!
:::

### Customization {#customizing-installation}

If you need to customize the module installation process, optionally you can create a script in the installer named `customize.sh`. This script will be **sourced** (not executed) by the module installer script after all files are extracted and default permissions and secontext are applied. This is very useful if your module requires additional setup based on the device ABI, or you need to set special permissions/secontext for some of your module files.

If you would like to fully control and customize the installation process, declare `SKIPUNZIP=1` in `customize.sh` to skip all default installation steps. By doing so, your `customize.sh` will be responsible to install everything by itself.

The `customize.sh` script runs in APatch's BusyBox `ash` shell with Standalone Mode enabled. The following variables and functions are available:

#### Variables {#variables}

- `KERNELPATCH` (bool): Mark this script to run in the APatch environment, and the value of this variable will always be `true`.
- `KERNEL_VERSION` (hex): Inherited from KernelPatch, the kernel version number (e.g. `50a01` means 5.10.1).
- `KERNELPATCH_VERSION` (hex): Inherited from KernelPatch, the version number of KernelPatch (e.g. `a05` means 0.10.5).
- `SUPERKEY` (string): Inherited from KernelPatch, used to call kpatch or supercall.

- `APATCH` (bool): Mark this script to run in the APatch environment, and the value of this variable will always be `true`.
- `APATCH_VER_CODE` (int): Current APatch version number (e.g. `10672`).
- `APATCH_VER` (string): The name of the current version of APatch (e.g. `10672`).

- `BOOTMODE` (bool): In APatch, this variable will always have the value `true`.
- `MODPATH` (path): Installation directory of the current module.
- `TMPDIR` (path): A directory where temporary files can be stored.
- `ZIPFILE` (path): Installation package file for the current module.
- `ARCH` (string): Device processor architecture, `arm64` only.
- `IS64BIT` (bool): Is this device 64-bit.
- `API` (int): Current Android API version of the device (e.g. `23` on Android 6.0).

::: warning
In APatch, `MAGISK_VER_CODE` is always `27000`, and `MAGISK_VER` is always `v27.0`.
:::

#### Functions {#functions}

```txt
ui_print <msg>
    print <msg> to console
    Avoid using 'echo' as it will not display in custom recovery's console

abort <msg>
    print error message <msg> to console and terminate the installation
    Avoid using 'exit' as it will skip the termination cleanup steps

set_perm <target> <owner> <group> <permission> [context]
    if [context] is not set, the default is "u:object_r:system_file:s0"
    this function is a shorthand for the following commands:
       chown owner.group target
       chmod permission target
       chcon context target

set_perm_recursive <directory> <owner> <group> <dirpermission> <filepermission> [context]
    if [context] is not set, the default is "u:object_r:system_file:s0"
    for all files in <directory>, it will call:
       set_perm file owner group filepermission context
    for all directories in <directory> (including itself), it will call:
       set_perm dir owner group dirpermission context
```

## Boot scripts {#boot-scripts}

In APatch, scripts are divided into two types based on their running mode: post-fs-data mode and late_start service mode.

- post-fs-data mode

  - This stage is BLOCKING. The boot process is paused before execution is done or after 10 seconds.
  - Scripts run before any modules are mounted. This allows a module developer to dynamically adjust their modules before it gets mounted.
  - This stage happens before Zygote is started, which pretty much means everything in Android.
  - **WARNING:** Using `setprop` will deadlock the boot process! Please use `resetprop -n <prop_name> <prop_value>` instead.
  - **Only run scripts in this mode if necessary**.

- late_start service mode

  - This stage is NON-BLOCKING. Your script runs in parallel with the rest of the booting process.
  - **This is the recommended stage to run most scripts**.

In APatch, startup scripts are divided into two types based on their storage location: General scripts and Module scripts.

- General scripts
  - Placed in `/data/adb/post-fs-data.d`, `/data/adb/service.d`, `/data/adb/post-mount.d` or `/data/adb/boot-completed.d`.
  - Only executed if the script is set as executable (`chmod +x script.sh`).
  - Scripts in `post-fs-data.d` runs in post-fs-data mode, and scripts in `service.d` runs in late_start service mode.
  - Modules should **NOT** add general scripts during installation.

- Module scripts
  - Placed in the module's own folder.
  - Only executed if the module is enabled.
  - `post-fs-data.sh` runs in post-fs-data mode, `post-mount.sh` runs in post-mount mode, and `service.sh` runs in late_start service mode, and `boot-completed` runs in service mode after the Android boot is complete.

All boot scripts will run in APatch's BusyBox `ash` shell with Standalone Mode enabled.
