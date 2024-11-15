# 对 CI build 10977 及以后版本的特别说明

::: info 提醒
我们曾经在 [其他注意事项](zh_CN/update#Miscellaneous) 中提醒过类似情况。
:::

APatch 在提交 [b843480](https://github.com/bmax121/APatch/commit/b843480c4f56b6190add41366e3eb7148ebc9b87) 之后放弃了对 `module.img` 的支持，所以任何在此版本之前的 APatch 实例中安装的 APM 在升级到 `10977` 及其后续版本后都将**彻底丢失**。

你将需要重新安装你以前安装的所有 APM.