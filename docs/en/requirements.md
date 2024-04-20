# Install requirements

APatch installation requirements are mainly reflected in the kernel configuration. The kernel requirements are:

```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (Initial support)
```

::: warning
**Only supports the ARM64 architecture.**

**Only supports Android kernel versions 3.18 - 6.1**
:::
