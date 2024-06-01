# 安装要求

APatch的要求主要体现于内核的配置。内核配置的要求如下:
```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
```
或：
```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (初步支持)
```

::: warning

**仅支持 ARM64 架构。**

**仅支持 Android 内核版本 3.18 - 6.1**
:::

