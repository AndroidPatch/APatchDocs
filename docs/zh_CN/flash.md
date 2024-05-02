# 刷入

以任何方式刷入之前，请先确认您已经按照步骤 [修补](/zh_CN/patch.md) 了您的镜像。

## fastboot 命令刷入

::: info
fastboot命令方便稳定，出错便于补救，是最理想的刷入方式
:::

使用 `adb` 连接您的设备，然后执行:

```
adb reboot bootloader
```

以进入 fastboot 模式，然后使用此命令刷入:

```
fastboot flash boot boot.img
```

*如果你的设备支持 `fastboot boot`，可以先使用 `fastboot boot boot.img` 来先尝试使用 `boot.img` 引导系统，如果出现意外，再重启一次即可开机。*

## 第三方Recovery刷入

如果你的设备有第三方recovery(比如TWRP),这时你可以通过TWRP刷写boot分区来获取root权限。

## Magisk 用户转 APatch

::: warning
本方案仅推荐有`init_boot`分区的设备且已经刷入`TWRP`的设备尝试
:::

1. Magisk 点击卸载 还原原厂镜像
2. 将你的原厂 Boot 参照 [此处](/zh_CN/patch.md) 修补
3. 重启设备到 `TWRP` 刷入修补过的 `Boot` 到 `Boot 分区`

::: danger
此方案有概率变砖，谨慎尝试
:::
