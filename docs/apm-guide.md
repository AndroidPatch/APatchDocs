# APM Module guide {#introduction}

APatch provides a modular mechanism (AndroidPatch Module) for modifying a system partition while preserving its integrity. This mechanism is often referred to as `systemless`.

APatch module implementation copied and modified from [KernelSU](https://github.com/tiann/KernelSU).
The modified code can be found here:
KernelSU: [https://github.com/tiann/KernelSU/tree/main/userspace/ksud](https://github.com/tiann/KernelSU/tree/main/userspace/ksud)
APatch: [https://github.com/bmax121/APatch/tree/main/apd](https://github.com/bmax121/APatch/tree/main/apd)

The following documentation is copied and modified from the KernelSU documentation, and much of the content is the same. The main points to note are as follows:

1. File location
2. Environment variables
3. SELinux support, APatch directly uses `magiskpolicy`

The mechanism of APatch modules operation is almost the same as Magisk. If you are familiar with the development of Magisk modules, the development of APatch modules is very similar. You can skip the presentation of the modules below, just read what the differences are.

## WebUI

APatch modules support interface display and user interaction, see [WebUI](/module-webui.md).

## Busybox

APatch provides a fully functional BusyBox binary (including full SELinux support). The executable is located at `/data/adb/ap/bin/busybox`.
APatch's BusyBox supports a runtime switchable “ASH Standalone Shell Mode”.
This standalone mode means that when running in the `ash` BusyBox shell, each command will directly use the applet inside BusyBox, regardless of what is set as `PATH`.
For example, commands such as `ls`, `rm`, `chmod`, etc. will not use the commands defined in the PATH (in the case of Android, the defaults are `/system/bin/ls`, `/system/bin/rm` and `/system/bin/chmod`, respectively), but instead directly call the built-in BusyBox applets.
This ensures that the script always runs in a predictable environment and always has a full set of commands, no matter what version of Android it is running on.
To force the command to not use BusyBox, you must call the executable with the full path.

Every shell script run in the APatch context will be executed in the BusyBox `ash` shell with standalone mode enabled. For what is relevant to 3rd party developers, this includes all boot scripts and module installation scripts.

For those who want to use this "Standalone Mode" feature outside of APatch, there are 2 ways to enable it:

1. Set the `ASH_STANDALONE` environment variable to `1`. Example: `ASH_STANDALONE=1 /data/adb/ap/bin/busybox sh <script>`.
2. Toggle with command-line options:`/data/adb/ap/bin/busybox sh -o standalone <script>`

To make sure all subsequent `sh` shell executed also runs in standalone mode, option 1 is the preferred method (and this is what APatch and the APatch Manager internally use) as environment variables are inherited down to child processes.

::: tip Differences with KernelSU
The location of busybox has been changed from `/data/adb/ksu/bin/busybox` to `/data/adb/ap/bin/busybox`.
:::

::: tip Differences with Magisk
APatch's BusyBox is now a binary compiled directly from the Magisk project, **thanks to Magisk!**
So you don't have to worry about compatibility of BusyBox scripts with Magisk and APatch scripts, because they are exactly the same!
:::

## APM Modules {#APatch-modules}

The APatch module is a folder inside `/data/adb/modules` with the following structure:

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
│   ├── skip_mount          <--- If this file exists, the `/system` folder of the module will not be mounted
│   ├── disable             <--- If this file exists, the module is disabled
│   ├── remove              <--- If this file exists, the module will be deleted on the next reboot
│   │
│   │      *** Optional Files ***
│   │
│   ├── post-fs-data.sh     <--- This script will be executed in post-fs-data
│   ├── post-mount.sh       <--- This script will be executed in post-mount
│   ├── service.sh          <--- This script will be executed in late_start service
│   ├── boot-completed.sh   <--- This script will be executed on boot completed
|   ├── uninstall.sh        <--- This script will be executed when APatch removes your module
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

::: tip Differences with Magisk
APatch does not have native Zygisk support, so there is no Zygisk-related content in the module.
However, you can use [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) or [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod) to support Zygisk modules. In this case, the contents of the Zygisk module are identical to those supported by Magisk.
:::

### module.prop

module.prop is the module configuration file. If a module does not contain this file, it will not be recognized as a module. The format of this file is as follows:

```txt
id=<string>
name=<string>
version=<string>
versionCode=<int>
author=<string>
description=<string>
```

- `id` has to match this regular expression: `^[a-zA-Z][a-zA-Z0-9._-]+$`<br>
  ex: ✓ `a_module`, ✓ `a.module`, ✓ `module-101`, ✗ `a module`, ✗ `1_module`, ✗ `-a-module`<br>
  This is the **unique identifier** of your module. You should not change it once published.
- `versionCode` has to be an **integer**. This is used to compare versions
- Others that weren't mentioned above can be any **single line** string.
- Make sure to use the `UNIX (LF)` line break type and not the `Windows (CR+LF)` or `Macintosh (CR)`.

### Shell scripts {#shell-scripts}

The differences between `post-fs-data.sh`, `post-mount.sh`, `service.sh` and `boot-completed.sh` are described in [boot-scripts](#boot-scripts). For most module developers, `service.sh` should be good enough if you just need to run a boot script, if you need to run the script after boot completed, please use `boot-completed.sh`. If you want to do something after mounting overlayfs, please use `post-mount.sh`.

In all scripts of your module, please use `MODDIR=${0%/*}` to get your module's base directory path; do **NOT** hardcode your module path in scripts.

:::tip Differences with Magisk, KernelSU
You can determine if the script is running in APatch by using the `APATCH` environment variable, if it is running in APatch, this value will be set to `true`.
:::

### `system` directory {#system-directories}

The contents of this directory will be overlaid on top of the system's /system partition using overlayfs after the system is booted. This means that:

1. Files with the same name as those in the corresponding directory in the system will be overwritten by the files in this directory.
2. Folders with the same name as those in the corresponding directory in the system will be merged with the folders in this directory.

If you want to delete a file or folder in the original system directory, you need to create a file with the same name as the file/folder in the module directory using `mknod filename c 0 0`. This way, the overlayfs system will automatically "whiteout" this file as if it has been deleted (the /system partition is not actually changed).

You can also declare a variable named `REMOVE` containing a list of directories in `customize.sh` to execute removal operations, and APatch will automatically execute `mknod <TARGET> c 0 0` in the corresponding directories of the module. For example:

```sh
REMOVE="
/system/app/YouTube
/system/app/Bloatware
"
```

In the above example, the commands `mknod $MODPATH/system/app/YouTuBe c 0 0` and `mknod $MODPATH/system/app/Bloatware c 0 0` would be executed; however, `/system/app/YouTube` and `/system/app/Bloatware` would be removed after the module takes effect.

If you want to replace a directory on the system, you must create a directory with the same path in the module directory, and then set the `setfattr -n trusted.overlay.opaque -v y <TARGET>` attribute for that directory. This way, overlayfs will automatically replace the corresponding directory on the system (without modifying the /system partition).

You can declare in the `customize.sh` file a variable named `REPLACE` containing a list of replaceable directories, and APatch will automatically perform the appropriate operations on your module's directory. For example:

```sh
REPLACE="
/system/app/YouTube
/system/app/Bloatware
"
```

In this example, the `$MODPATH/system/app/YouTube` and `$MODPATH/system/app/Bloatware` directories will be automatically created and then the `setfattr -n trusted.overlay.opaque -v y $MODPATH/system/app/YouTube` and `setfattr -n trusted.overlay.opaque -v y $MODPATH/system/app/Bloatware` commands will be executed. After the module takes effect, the `/system/app/YouTube` and `/system/app/Bloatware` directories will be replaced with empty ones.

:::tip Differences with Magisk

The APatch systemless mechanism is implemented via kernel overlayfs, while Magisk currently uses bind mount. There is a huge difference between these two implementations, but the end goal is essentially the same: to modify the `/system` file without changing the `/system` physical partition.
:::

If you are interested in overlayfs, it is recommended to read the Linux Kernel's [documentation on overlayfs](https://docs.kernel.org/filesystems/overlayfs.html).

### system.prop

This file follows the same format as `build.prop`. Each line comprises of `[key]=[value]`.

### sepolicy.rule

If your module requires some additional sepolicy patches, please add those rules into this file. Each line in this file will be treated as a policy statement.

## Module installer {#module-installer}

The APatch module installation package is a zip file that can be flashed through the APatch Manager, and the format of this zip file is as follows:

```txt
module.zip
│
├── customize.sh                       <--- (Optional, more details later)
│                                           This script will be sourced by update-binary
├── ...
├── ...  /* The rest of module's files */
│
```

:::warning
The APatch module is NOT supported for installation in Recovery!
:::

### Customization {#customizing-installation}

If you need to customize the module installation process, optionally you can create a script in the installer named `customize.sh`. This script will be _sourced_ (not executed!) by the module installer script after all files are extracted and default permissions and secontext are applied. This is very useful if your module require additional setup based on the device ABI, or you need to set special permissions/secontext for some of your module files.

If you would like to fully control and customize the installation process, declare `SKIPUNZIP=1` in `customize.sh` to skip all default installation steps. By doing so, your `customize.sh` will be responsible to install everything by itself.

The `customize.sh` script runs in APatch's BusyBox `ash` shell with "Standalone Mode" enabled. The following variables and functions are available:

#### Variables {#variables}

- `KERNELPATCH` (bool): Mark this script to run in the APatch environment, and the value of this variable will always be `true`.
- `KERNEL_VERSION` (hex): Inherited from KernelPatch, the kernel version number (e.g. `50a01` means 5.10.1)
- `KERNELPATCH_VERSION` (hex): Inherited from KernelPatch, the version number of KernelPatch (e.g. `a05` means 0.10.5).
- `SUPERKEY` (string): Inherited from KernelPatch, used to call kpatch or supercall.

- `APATCH` (bool): Mark this script to run in the APatch environment, and the value of this variable will always be `true`.
- `APATCH_VER_CODE` (int): Current APatch version number (e.g. `10672`)
- `APATCH_VER` (string): The name of the current version of APatch (e.g. `10672`)

- `BOOTMODE` (bool): In APatch, this variable will always have the value `true`.
- `MODPATH` (path): Installation directory of the current module
- `TMPDIR` (path): A directory where temporary files can be stored
- `ZIPFILE` (path): Installation package file for the current module
- `ARCH` (string): Device processor architecture, `arm64` only.
- `IS64BIT` (bool): Is this device 64-bit
- `API` (int): Current Android API version of the device (e.g. `23` on Android 6.0)

::: warning
In APatch, `MAGISK_VER_CODE` has a value of `27000` and `MAGISK_VER` has a value of `27.0`.
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

There are two types of scripts in APatch depending on their mode of operation: post-fs-data mode and late_start service mode.

- post-fs-data mode

  - This stage is BLOCKING. The boot process is paused before execution is done, or 10 seconds have passed.
  - Scripts run before any modules are mounted. This allows a module developer to dynamically adjust their modules before it gets mounted.
  - This stage happens before Zygote is started, which pretty much means everything in Android
  - **WARNING:** using `setprop` will deadlock the boot process! Please use `resetprop -n <prop_name> <prop_value>` instead.
  - **Only run scripts in this mode if necessary.**

- late_start service mode

  - This stage is NON-BLOCKING. Your script runs in parallel with the rest of the booting process.
  - **This is the recommended stage to run most scripts.**

APatch has two more types of start scripts depending on where they are stored: general scripts and module scripts.

- General Scripts

  - Placed in `/data/adb/post-fs-data.d`, `/data/adb/service.d`, `/data/adb/post-mount.d` or `/data/adb/boot-completed.d`
  - Only executed if the script is set as executable (`chmod +x script.sh`)
  - Scripts in `post-fs-data.d` runs in post-fs-data mode, and scripts in `service.d` runs in late_start service mode.
  - Modules should **NOT** add general scripts during installation

- Module Scripts
  - Placed in the module's own folder
  - Only executed if the module is enabled
  - `post-fs-data.sh` runs in post-fs-data mode, `post-mount.sh` runs in post-mount mode, and `service.sh` runs in late_start service mode, and `boot-completed` runs in service mode after the Android boot is complete.

All startup scripts will run in the BusyBox ash shell from APatch with “offline mode” enabled.
