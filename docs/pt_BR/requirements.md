# Requisitos de instalação

Os requisitos de instalação do APatch são principalmente refletidos na configuração do kernel. Aqui estão os requisitos do kernel:

```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
```
ou:
```
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (Suporte inicial)
```

::: warning AVISO
**Suporta apenas arquitetura ARM64.**

**Suporta apenas versões do kernel Android 3.18 - 6.1**
:::
