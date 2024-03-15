# 安装要求

APatch的要求主要体现于内核的配置。内核要求:
```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
CONFIG_KALLSYMS=y或CONFIG_KALLSYMS_ALL=n(早期支持)
```

::: warning

**仅限 ARM64**

**Android 内核版本 3.18 - 6.1**
:::

