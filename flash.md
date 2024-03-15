# 刷入
## fastboot命令刷入

**fastboot命令方便稳定，出错便于补救，是最理想的刷入方式**


使用 adb 连接您的设备，然后执行 adb reboot bootloader 进入 fastboot 模式，然后使用此命令刷入:

fastboot flash boot boot.img


*如果你的设备支持 fastboot boot，可以先使用 fastboot boot boot.img 来先尝试使用 boot.img 引导系统，如果出现意外，再重启一次即可开机。*

## twrp刷入

如果你的设备有第三方recovery(比如Twrp),这时你可以通过Twrp刷写boot分区来获取root权限。

## Magisk用户转Apatch

**本方案仅推荐有init_boot分区的设备尝试**

1.安装kernelflash并授予root权限

2.选择你正在使用的卡槽，并点击查看，然后选择备份boot分区

3.备份好的文件在/sdcrad/kernelflasher/里面修补方法和上面一样，刷写boot可以直接使用kernelflaher刷入boot，同样你也可以用fastboot刷入，刷入无问题后可以将面具完全卸载。