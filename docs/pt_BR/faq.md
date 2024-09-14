# Perguntas frequentes

## O que é APatch?

::: info INFORMAÇÕES
[Aqui](/pt_BR/what-is-apatch) tem uma introdução mais completa.
:::

APatch é uma solução root semelhante ao Magisk ou KernelSU que une o melhor de ambos. Ele combina o método de instalação fácil e conveniente do Magisk por meio do `boot.img` com as poderosas habilidades de patch de kernel do KernelSU.

## Qual é a diferença entre APatch e Magisk?

Magisk modifica o sistema `init` com um patch no `ramdisk` da sua imagem de inicialização. APatch corrige diretamente o kernel Android.

## Qual é a diferença entre APatch e KernelSU?

KernelSU requer o código-fonte do kernel de seu dispositivo, que nem sempre é fornecido pelo OEM. APatch só precisa de seu `boot.img` stock.

## Qual é a diferença entre APatch, Magisk e KernelSU?

APatch permite opcionalmente não modificar o SELinux, isso significa que o thread do app pode ser rooteado sem `libsu` e `IPC`.

**KPMódulo** fornecido.

## O que é KPMódulo?

KPM é um módulo que roda no espaço do kernel e permite que o código seja executado no espaço do kernel, semelhante ao **Loadable Kernel Modules** (LKM).

Além disso, o KPMódulo fornece a capacidade de executar `inline-hook` e `syscall-table-hook` no espaço do kernel.

Para mais informações, veja [como escrever um KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md).

## Qual é a relação entre APatch e KernelPatch?

APatch depende do KernelPatch. Ele herda todas as suas capacidades e foi expandido.

Você pode instalar apenas o KernelPatch, mas isso não permitirá o uso do APMódulo.

[Saiba mais sobre o KernelPatch](https://github.com/bmax121/KernelPatch).

## O que é SuperKey?

KernelPatch conecta chamadas do sistema para fornecer todos os recursos ao espaço do usuário, e essa chamada do sistema é chamada de **SuperCall**. Invocar o SuperCall requer a passagem de uma credencial, conhecida como **SuperKey**. SuperCall só pode ser invocado com sucesso quando a SuperKey estiver correta. Se a SuperKey estiver incorreta, o chamador não será afetado.

## Como processar o SELinux?

KernelPatch não modifica o contexto do SELinux mas ignora o SELinux via hook. Isso permite que você faça root em um thread do Android dentro do contexto de um app sem a necessidade de usar `libsu` para iniciar um novo processo e então executar o `IPC`.

Além disso, o APatch utiliza diretamente o `magiskpolicy` para fornecer suporte adicional ao SELinux.

## WebUI do APMódulo/KPMódulo

O código-fonte do APatch foi derivado e modificado do KernelSU, então o APatch introduziu o recurso WebUI na versão [10568](https://github.com/bmax121/APatch/releases/tag/10568) depois que o KernelSU introduziu o recurso WebUI.

A implementação e os requisitos do WebUI do APatch são completamente iguais aos do KernelSU, o WebUI projetado para os módulos do KernelSU podem funcionar perfeitamente no APatch.

Se você deseja usar o WebUI para o APMódulo ou KPMódulo, consulte a [introdução do WebUI](https://kernelsu.org/pt_BR/guide/module-webui.html) do KernelSU para obter mais informações.

## O módulo não pode ser instalado (Erro do OS 05/02/22)

Revogue o privilégio root do app "Shell" na página SuperUsuário.

## O app automaticamente obtém e perde permissões root após o reinício do dispositivo

Leia [isto](https://t.me/APatchChannel/74) para mais detalhes.

## Posso usar o LSPosed?

LSPosed depende do Riru ou Zygisk para ser executado, porém, APatch não suporta Riru ou Zygisk por padrão, então você não pode usar o LSPosed diretamente.

No entanto, o APatch pode adicionar suporte ao Zygisk ou permitir que o LSPosed seja executado sem qualquer implementação do Zygisk habilitada pela instalação de APMs.

Aqui estão duas soluções sobre como executar o LSPosed no APatch:

1. Consulte a parte [Suporta Zygisk?](#zygisk-support) para adicionar suporte ao Zygisk.
2. Se você só precisa usar o LSPosed sem os outros recursos do Zygisk, você pode tentar o [Zloader](https://github.com/Mufanc/z-loader) [para o LSPosed](https://t.me/mufanc_chan/28).

::: warning AVISO
O Zloader **NÃO** é compatível com nenhuma implementação do Zygisk, por exemplo, ZygiskNext ou Zygisk_mod, e você também não pode usar nenhum APMódulo que dependa do Zygisk. Por favor, desative ou desinstale qualquer implementação do Zygisk antes de usar o Zloader.
:::

::: info INFORMAÇÕES
Zloader ainda está em desenvolvimento inicial. Sinta-se à vontade para enviar Pull requests aos desenvolvedores do Zloader ou abrir um problema.
:::

## Não é possível usar Shamiko?

Não podemos oferecer suporte ao Shamiko devido devido ao seu proprietário e por estar sem atualizações.

::: danger PERIGO
**Quaisquer problemas causados ​​pelo uso do Shamiko não serão suportados pelos desenvolvedores do APatch, use por sua própria conta e risco.**
:::

## Suporta Zygisk? {#zygisk-support}

Assim como o KernelSU, APatch não possui suporte integrado ao Zygisk.

APatch pode usar o [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) para adicionar suporte ao Zygisk.

APatch também pode usar o [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod) para adicionar suporte ao Zygisk.

APatch também pode usar o [ReZygisk](https://github.com/PerformanC/ReZygisk) para adicionar suporte ao Zygisk.

::: info INFORMAÇÕES
ReZygisk ainda está em desenvolvimento inicial. Sinta-se à vontade para enviar Pull requests aos desenvolvedores do ReZygisk ou abrir um problema.
:::

## O software de detecção de root falha

Se o seu software está funcionando corretamente, não se preocupe muito com o software de detecção.
