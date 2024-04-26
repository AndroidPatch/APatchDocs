# O que é APatch?

APatch é uma solução root **baseada em kernel** para dispositivos Android que funciona no modo kernel e concede privilégios root para apps do espaço do usuário diretamente no espaço do kernel.

## Características

Compatível com a maioria dos dispositivos Android, não apenas limitado a dispositivos com kernel GKI.

Suporta APMódulo (APM) semelhante aos módulos do Magisk.

Suporta KPMódulo (KPM), que permite injetar qualquer código no kernel (Requer que as funções do kernel `inline-hook` e `syscall-table-hook` estejam ativadas).

APatch depende do KernelPatch.

A interface de usuário do APatch e o código-fonte do APMódulo foram derivados e modificados a partir do KernelSU.

## Como usar o APatch?

Por favor, consulte: [Instalação](/pt_BR/install)

## Como fazer patch?

Por favor, consulte: [Patch](/pt_BR/patch)
