# APatch 安装指南

[[toc]]

## 安装前的准备工作

1. 进行 Root 之前请确保你的手机已处于 BL 解锁状态。

2. 你可以在终端输入或者adb输入 `zcat /proc/config.gz | grep CONFIG_KALLSYMS` 查询你的内核是否支持修补 （需ROOT）。

3. [点击此处](https://github.com/bmax121/APatch/releases)以获取最新稳定版本的APatch管理器。

4. 从刷机包或者其他方式提取你手机原厂的 `boot.img` ，稍后需要对进行修补。

5. 将你提取的 `boot.img` 备份到 电脑、U盘 等其他设备，如果后续刷机出现了任何问题，你可以通过使用 fastboot 刷回原厂 boot 来恢复系统。

::: tip
1. 进行下一步之前请确认你会使用 ADB 和 fastboot 工具，具有刷机方面的相关经验。如果你没有了解过，建议使用搜索引擎先学习相关知识。

2. APatch 无论任何设备都是修补 `boot`，不要尝试修补和刷入`init_boot`或者其他分区的镜像文件，APatch 开发者对由此导致的修补及启动失败不负任何责任。

3. 避免使用被其他管理器修补过 `Boot 文件` 进行修补，防止出现意料之外的情况。
:::

## 安装要求

APatch 的要求主要体现于内核的配置。内核配置的要求如下:

```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
```
或：
```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (初步支持)
```

:::tip
你可以在终端输入或者 adb 输入 `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` 查询你的内核是否支持修补 （需 ROOT ）。
:::

::: warning
**仅支持 ARM64 架构。**

**仅支持 Android 内核版本 3.18 - 6.6。**
:::

::: danger 关于 6.6 内核适用性的说明
对于 6.6 版本的内核，仅在小米和一加设备上测试过。对于其他品牌的设备，请以实际情况为准。
:::

## 修补 {#how-to-patch}

APatch 有多种修补方法。

### 自动修补

1. 前往[GitHub](https://github.com/bmax121/APatch/releases)下载最新管理器。

2. 点击主页右上角的 ![Patch Button](/PButton.png) 按钮，之后选择`选择一个启动镜像并修补`选项。

3. 选择你的 `boot.img`。

4. 在“超级密钥”卡片中设置一个密码，之后 APatch 管理器会将其作为超级密钥以解锁 root。

:::warning 
禁止设置 `12345678` 等弱密码，新版 APatch 管理器 已强制使用强密码  [原因](/zh_CN/warn)。
:::

5. 点击“开始修补”并等待修补完成。修补成功后会显示修补后的 img 镜像 路径。例如: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`

最后按你的实际情况[刷入](#刷入)即可。

### 手动修补

当 KernelPatch 更新后，管理器仍未更新时，你可以选择手动修补内核。

你可以前往[KernelPatch](https://github.com/bmax121/KernelPatch/releases)项目获取最新的`KP`文件。

#### Windows

1. 下载 `kptools-win.zip` 和 `kpimg-android` ，并解压到当前目录使用，同时下载 `magiskboot(Windows)` 。

2. 执行:

```cmd
magiskboot.exe unpack boot.img
```

解压 boot，然后将 kernel 改名为 kernel-b (kernel-b可以是其他第三方内核，但是第三方内核不做任何保证，也不会受到支持)。

Windows可以使用 `CMD` 或 `PowerShell` 进行修补。

执行:

```cmd
kptools-x86_64-win.exe -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

或者更推荐的，使用 `WSL` 的`Linux`修补:

```cmd
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

修补后无报错，最后用:

```cmd
magiskboot.exe repack boot.img
```

打包生成镜像，生成的 **new-boot.img** 即为修补好的镜像。

---

#### Linux

1. 下载 `kptools-linux` 和 `kpimg-android` ，并下载 `magiskboot`。

2. 执行:

```sh
magiskboot unpack boot.img
```

解包boot，获取kernel文件。将kernel改名为kernel-b。

使用以下命令来修补内核镜像:

```sh
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

修补后无报错，最后用:

```sh
magiskboot repack boot.img
```

打包生成镜像，生成的 `new-boot.img` 即是修补好的镜像。

::: info
你也可以试试[在线修补](https://kernelpatch-on-web.pages.dev/)。
:::

::: tip
你可以传入参数 `--help`，即 `kptools --help` 来获取全部可用参数。
:::

## 刷入

### 刷入镜像

使用 adb 连接您的设备，然后执行 `adb reboot bootloader` 进入 fastboot 模式，然后使用此命令刷入 修补过的镜像：

```sh
fastboot flash boot PATH/TO/boot.img
```

::: tip
如果你的设备支持 fastboot boot，可以先使用 `fastboot boot boot.img` 来先尝试使用 boot.img 引导系统，如果出现意外，再重启一次即可开机。
:::

刷入完成后，您应该重新启动您的设备：

```sh
fastboot reboot
```

### 直接刷入

最新版本的 APatch 支持从 TWRP 等第三方 REC 一键刷入。

::: warning
此功能于版本 `10888` 引入，更早的版本不支持这种方式。
:::

将下载的 APatch 安装包 (.apk) 后缀改为 .zip，例如从 `APatch-10888-release.apk` 到 `APatch-10888-release.zip`，随后使用第三方 REC 的刷入功能即可自动刷入安装 APatch。

::: tip
同样的，第三方类原生 ROM 的 REC(例如 LineageOS)所使用的 `adb sideload` 方法也支持。
:::

::: warning
**注意 自动刷入不会使用固定的超级密钥！相反的，使用此方式得到的超级密钥为随机数字 + 字母的组合。**  
如果您需要自定义自己的超级密钥，请在开机后手动进入 APatch 管理器并重新修补，以此设置你自己的超级密钥。
:::

## 卸载

### 自动卸载

::: warning
此功能于版本 `10888` 引入，更早的版本不支持这种方式。
:::

下载 APatch 安装包，将安装包后缀改为zip，并将安装包文件名改为带有 `uninstall` 字样的名字。例如，从 `APatch-10888-release.apk` 到 `APatch-10888-release-uninstall.zip`，随后使用 REC 刷入即可。

::: tip
同样的，和安装一样，卸载也支持使用 `adb sideload`。
:::

### 手动卸载

进入 `bootloader` 模式恢复当前 ROM 的原 boot 镜像即可。

```sh
fastboot flash boot PATH/TO/boot.img
```

:::warning
不要使用 `init_boot`！
:::
