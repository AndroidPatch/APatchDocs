# Metamódulos

Os metamódulos são um recurso revolucionário no KernelSU que transfere capacidades críticas do sistema de módulos do núcleo para módulos conectáveis. Essa mudança arquitetural mantém a estabilidade e a segurança do KernelSU, liberando um maior potencial de inovação para o ecossistema de módulos.

Posteriormente, o APatch também adotou esse mecanismo de metamódulos, desacoplando a lógica integrada de montagem de partições do seu daemon principal (`apd`) para metamódulos independentes, mantendo compatibilidade com os metamódulos desenvolvidos para o KernelSU. Portanto, nas versões mais recentes do APatch, se você utilizar módulos APM comuns que modificam arquivos do `/system` ou de outras partições, **deve primeiro escolher e instalar um metamódulo** (como uma das implementações de OverlayFS, Magic Mount ou Hybrid Mount abaixo; apenas um metamódulo pode ficar ativo por vez), caso contrário a montagem de arquivos dos módulos não terá efeito.

::: warning AVISO
Após instalar um metamódulo, você precisa reiniciar o dispositivo antes de continuar instalando outros módulos.
:::

A tabela abaixo fornece os metamódulos disponíveis atualmente.

| Metamódulos Disponíveis |
| --- |
| [overlayfs](https://github.com/KernelSU-Modules-Repo/meta-overlayfs) |
| [mountify](https://github.com/backslashxx/mountify) |
| [magic mount](https://github.com/7a72/meta-magic_mount) |
| [magic mount rs](https://github.com/Tools-cx-app/meta-magic_mount) |
| [hybrid mount](https://github.com/YuzakiKokuban/meta-hybrid_mount) |
