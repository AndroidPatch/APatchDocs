# Requisitos de instalação

Os requisitos de instalação do APatch são principalmente refletidos na configuração do kernel. Os requisitos do kernel são:

```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (Suporte antecipado)
```

::: warning AVISO
**Suporta apenas arquitetura ARM64.**

**Suporta apenas versões do kernel Android 3.18 - 6.1**
:::
