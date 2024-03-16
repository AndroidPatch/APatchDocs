# 安装

## 刷入前的准备工作

1. 进行 Root 之前请确保你的手机已处于 BL 解锁状态

2. 你可以在终端输入或者adb输入 `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` 查询你的内核是否支持修补 （需ROOT）

3. [点击此处](https://github.com/bmax121/APatch/releases)以获取最新稳定版本的APatch管理器

4. 从刷机包或者其他方式提取你手机原厂的 `boot.img` ，稍后需要对进行修补

5. 将你提取的 `boot.img` 备份到 电脑、U盘 等其他设备，如果后续刷机出现了任何问题，你可以通过使用 fastboot 刷回原厂 boot 来恢复系统

## 提醒

1. 进行下一步之前请确认你会使用 ADB 和 fastboot 工具，具有刷机方面的相关经验。如果你没有了解过，建议使用搜索引擎先学习相关知识

2. APatch 无论任何设备都是修补 `boot`，不要尝试修补和刷入`init_boot`或者其他分区的镜像文件，APatch 开发者对由此导致的修补及启动失败不负任何责任

3. 避免使用被其他管理器修补过 `Boot 文件` 进行修补，防止出现意料之外的情况
