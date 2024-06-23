# 修补

## 自动修补 {#automatically-patching}

1. 前往[GitHub](https://github.com/bmax121/APatch/releases)下载最新管理器。

2. 点击主页右上角的 ![Patch Button](/PButton.png) 按钮，之后选择`选择一个启动镜像并修补`选项。

3. 选择你的 `boot.img`。

4. 在“超级密钥”卡片中设置一个密码，之后 APatch 管理器会将其作为超级密钥以解锁 root。

:::warning 
禁止设置 `114514` 等弱密码，新版 APatch 管理器 已强制使用强密码  [原因](/zh_CN/warn)。
:::

5. 点击“开始修补”并等待修补完成。修补成功后会显示修补后的 img 镜像 路径。例如: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`

最后按你的实际情况[刷入](/zh_CN/flash)即可。

## 手动修补

**当 KernelPatch 更新后，管理器仍未更新时，你可以选择手动修补内核。**

你可以前往[KernelPatch](https://github.com/bmax121/KernelPatch/releases)项目获取最新的`KP`文件。

### Windows

1. 下载 `kptools-win.zip` 和 `kpimg-android` ，并解压到当前目录使用，同时下载 `magiskboot(Windows)` 。

2. 执行:

```
magiskboot.exe unpack boot.img
```

解压 boot，然后将 kernel 改名为 kernel-b (kernel-b可以是其他第三方内核，但是第三方内核不做任何保证，也不会受到支持)。

Windows可以使用 `CMD` 或 `PowerShell` 进行修补。

执行:

```
kptools-x86_64-win.exe -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

或者更推荐的，使用 `WSL` 的`Linux`修补:

```
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

修补后无报错，最后用:

```
magiskboot.exe repack boot.img
```

打包生成镜像，生成的 **new-boot.img** 即为修补好的镜像。

---

### Linux

1. 下载 `kptools-linux` 和 `kpimg-android` ，并下载 `magiskboot`。

2. 执行:

```
magiskboot unpack boot.img
```

解包boot，获取kernel文件。将kernel改名为kernel-b。

使用以下命令来修补内核镜像:

```
./kptools-linux -p --image kernel-b --skey "YourKey" --kpimg kpimg-android --out kernel
```

修补后无报错，最后用:

```
magiskboot repack boot.img
```

打包生成镜像，生成的 `new-boot.img` 即是修补好的镜像。

::: warning 
再次强调 严禁设置`114514`等弱密码。
:::

::: info
你也可以尝试[在线修补](https://kernelpatch-on-web.pages.dev/)。
:::

# KP命令及注解
::: info
[你可以点此尝试](https://exame.apatch.top/)。
:::

```
命令:
  -h, --help                       打印此信息。
  -v, --version                    打印版本号。如果指定了-k，则打印kimpg版本。
  -p, --patch                      丁或更新内核映像的补丁(-i)，指定kimpg (-k)和超级键(-s)。
  -u, --unpatch                    解除补丁后的内核映像(-i)。
  -r, --reset-skey                 重置补丁映像的超级密钥(-i)。
  -d, --dump                       内核镜像的kallsyms信息(-i)。
  -l, --list                       如果指定(-i)，打印内核镜像的所有补丁信息。
                                   如果指定了(-M)，则打印额外的项目信息。
                                   如果指定(-k)，则打印KernelPatch映像信息。
选项:
  -i, --image PATH                 内核镜像路径。
  -k, --kpimg PATH                 内核补丁镜像路径。
  -s, --skey PATH                  设置超级键。
  -o, --out PATH                   补丁镜像路径。
  -a  --addition KEY=VALUE         添加附加信息。
  -K, --kpatch PATH                将kpatch可执行二进制文件嵌入补丁中。
  -M, --embed-extra-path PATH      嵌入新的额外项。
  -E, --embeded-extra-name NAME    保留和修改嵌入的额外项。
  -T, --extra-type TYPE            设置上一个附加项的类型。
  -N, --extra-name NAME            设置前一个附加项的名称。
  -V, --extra-event EVENT          设置前一个额外项的触发事件。
  -A, --extra-args ARGS            设置前一个额外项的参数。
  -D, --extra-detach               从补丁中分离先前的额外项目。
```
