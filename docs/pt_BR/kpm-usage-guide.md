# Guia de uso de módulos KernelPatch

[[toc]]

---

APatch depende do KernelPatch, herdando todas as suas funcionalidades e expandindo suas capacidades. Portanto, o APatch também oferece suporte ao KPMódulo (KPM). A seguir, apresentamos uma introdução sobre o uso do KPMódulo.

## O que é KPMódulo?

O KPMódulo (KPM) é um tipo de módulo que permite que o código seja executado no espaço do kernel, semelhante ao Loadable Kernel Modules (LKM). Eles podem realizar algumas operações que o APMódulo (APM) não pode realizar (ex.: proteção da imagem de partição).

## Como usar o KPMódulo?

Existem 3 maneiras de usar o KPMódulo: Incorporar, Carregar e Instalar.

::: tip SOBRE "INSTALAR"
Atualmente, o APatch não implementou a função "Instalar" para KPMs, e você só pode usar KPMs via "Incorporar" ou "Carregar". Os desenvolvedores do KernelPatch e do APatch estão trabalhando rapidamente para implementar a função "Instalar". Por favor, espere pacientemente.
:::

### Incorporar

`Incorporar` é uma função que incorpora KPMs diretamente no `kernel`. KPMs instalados desta forma serão mesclados com o `kernel` corrigido no `boot.img`, e serão carregados no estágio de inicialização `pre-kernel-init`.

A incorporação de KPMs pode ser feita tanto na primeira aplicação do patch no `boot.img` quanto após a instalação do APatch.

#### Incorporar KPMs no primeiro patch {#embed-kpms-at-first-patching}

1. Faça o [Patch](/pt_BR/install#patch) de seu `boot.img` seguindo o guia [Patch automático](/pt_BR/install#automatically-patching). Após concluir a etapa 4, **NÃO** prossiga para a próxima etapa imediatamente.

2. Clique no botão "Incorporar KPM" e selecione o KPM que deseja incorporar (Os arquivos KPM possuem o sufixo `.kpm`).

3. Verifique se o KPM selecionado é realmente o que deseja incorporar.

4. Complete as etapas restantes do guia "Patch automático" e pronto!

#### Incorporar KPMs após a instalação do APatch

Após instalar o APatch, a forma de incorporar os KPMs é familiar à instalação de APMs. Você pode clicar no botão no canto inferior direito e escolher "Incorporar". Os passos restantes podem ser consultados em [Incorporar KPMs no primeiro patch](/pt_BR/kpm-usage-guide#embed-kpms-at-first-patching).

### Carregar

`Carregar` é uma função que permite ao kernel carregar KPMs diretamente. Os KPMs instalados dessa forma são carregados imediatamente. No entanto, todos os KPMs carregados serão perdidos após a próxima reinicialização.

A forma de carregar os KPMs é familiar à instalação de APMs, a única diferença é que você não precisa reiniciar o dispositivo após carregar os KPMs.

### Instalar

::: tip ATENÇÃO
KernelPatch e APatch ainda não implementaram a função "Instalar" para KPMs. Todas as descrições abaixo são especulativas e descrevem o comportamento esperado da opção "Instalar" para KPMs.
:::

`Instalar` é uma função que permite instalar KPMs de forma semelhante aos arquivos APMs, em diretórios como `/data/adb/kpmodules` ou qualquer diretório semelhante. KPMs instalados dessa maneira podem ser carregados durante eventos especiais.
