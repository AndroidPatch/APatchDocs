# Perguntas frequentes

[[toc]]

## O que é APatch?

::: info INFORMAÇÕES
[Aqui](/pt_BR/what-is-apatch) tem uma introdução mais completa.
:::

O APatch é uma solução root semelhante ao Magisk ou KernelSU que une o melhor de ambos. Ele combina o método de instalação fácil e conveniente do Magisk por meio do `boot.img` com as poderosas habilidades de patch de kernel do KernelSU.

## Qual é a diferença entre APatch e Magisk?

Magisk modifica o sistema `init` com um patch no `ramdisk` da sua imagem de inicialização. APatch corrige diretamente o kernel Android.

## Qual é a diferença entre APatch e KernelSU?

Enquanto o KernelSU exige o código-fonte do kernel de seu dispositivo, que nem sempre é fornecido pelo fabricante, o APatch precisa apenas do `boot.img` stock.

## Qual é a diferença entre APatch, Magisk e KernelSU?

O APatch permite opcionalmente não modificar o SELinux. Isso significa que o thread do app pode ser rooteado sem a necessidade de `libsu` e `IPC`.

**KPMódulo** fornecido.

## O que é KPMódulo?

KPM é um módulo que roda no espaço do kernel, permitindo que o código seja executado no espaço do kernel, semelhante ao **Loadable Kernel Modules** (LKM).

Além disso, o KPMódulo fornece a capacidade de executar `inline-hook` e `syscall-table-hook` no espaço do kernel.

Para mais informações, veja [como escrever um KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md).

## Qual é a relação entre APatch e KernelPatch?

APatch depende do KernelPatch. Ele herda todas as suas capacidades e foi expandido.

Você pode instalar apenas o KernelPatch, mas isso não permitirá o uso do APMódulo.

[Saiba mais sobre o KernelPatch](https://github.com/bmax121/KernelPatch).

## O que é SuperKey?

KernelPatch conecta chamadas do sistema (syscall) para fornecer todos os recursos para apps e programas no espaço do usuário, e essa chamada do sistema é conhecida como **SuperCall**. Quando um app/programa tenta invocar a SuperCall, é necessário fornecer uma credencial conhecida como **SuperKey**. A invocação da SuperCall só será bem-sucedida quando a SuperKey estiver correta. Caso a SuperKey esteja incorreta, o chamador não será afetado.

## Como o SELinux é processado?

O KernelPatch não modifica o contexto do SELinux, mas o ignora via hook. Isso permite que você faça root em um thread do Android dentro do contexto de um app, sem a necessidade de usar `libsu` para iniciar um novo processo e executar o `IPC`.

Além disso, o APatch usa diretamente o `magiskpolicy` para fornecer suporte adicional ao SELinux.

## WebUI do APMódulo/KPMódulo

O código-fonte do APatch foi derivado e modificado a partir do KernelSU, e o APatch introduziu o recurso WebUI na versão [10568](https://github.com/bmax121/APatch/releases/tag/10568), após o KernelSU ter feito o mesmo.

A implementação e os requisitos do WebUI do APatch são idênticos aos do KernelSU, o que significa que os WebUIs projetados para os módulos do KernelSU funcionarão perfeitamente no APatch.

Se você deseja usar o WebUI para o APMódulo ou KPMódulo, consulte a [introdução do WebUI](https://kernelsu.org/pt_BR/guide/module-webui.html) do KernelSU para mais informações.

## Não consigo instalar módulos (Erro do OS 05/02/22)

Revogue o privilégio root do app "Shell" na página SuperUsuário.

## O app automaticamente obtém e perde permissões root após o reinício do dispositivo

Para mais detalhes, leia [isto](https://t.me/APatchChannel/74).

## Posso usar o LSPosed?

O LSPosed depende do Riru ou Zygisk para funcionar. No entanto, o APatch não oferece suporte ao Riru ou Zygisk por padrão, portanto, você não pode usar o LSPosed diretamente.

No entanto, o APatch pode adicionar suporte ao Zygisk ou permitir que o LSPosed seja executado sem qualquer implementação do Zygisk, por meio da instalação de APMs.

Aqui estão duas soluções para executar o LSPosed no APatch:

1. Consulte a seção [Suporta Zygisk?](#zygisk-support) para adicionar suporte ao Zygisk.
2. Se você só precisa usar o LSPosed sem os outros recursos do Zygisk, você pode tentar o [Zloader](https://github.com/Mufanc/z-loader) [para o LSPosed](https://t.me/mufanc_chan/28).

::: warning AVISO
O Zloader **NÃO** é compatível com nenhuma implementação do Zygisk, e você também não pode usar nenhum APMódulo que dependa do Zygisk. Por favor, desative ou desinstale qualquer implementação do Zygisk antes de usar o Zloader.
:::

::: danger PERIGO
O Zloader **NÃO** recebeu commits de código ou lançamentos de novas versões após a versão `0.1.3`.

Não recomendamos mais o uso deste método. Por favor, considere usar o Zygisk.
:::

## Não é possível usar Shamiko?

Não podemos oferecer suporte ao Shamiko devido devido ao seu proprietário.

::: danger PERIGO
**Qualquer problema causado pelo uso do Shamiko não será suportado pelos desenvolvedores do APatch. Use por sua conta e risco.**
:::

## Suporta Zygisk? {#zygisk-support}

Assim como o KernelSU, o APatch não possui suporte integrado ao Zygisk.

Graças ao empenho da comunidade, já existem vários APMs ou módulos Magisk compatíveis com o APatch, que permitem adicionar suporte ao Zygisk. Abaixo estão alguns APMs que oferecem suporte ao Zygisk para o APatch:

- [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext): O primeiro APM a fornecer um ambiente Zygisk para o KernelSU, com suporte para as funções mais completas. É uma implementação completa da API Zygisk, incluindo recursos adicionais, tanto baseados no Zygisk quanto fora dele. A versão `0.9.1.1` e todas as versões anteriores são de código aberto, enquanto versões posteriores a essa se tornaram proprietárias. Este APM oferece suporte ao APatch a partir da versão `1.0.3`.

- [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod): Antes do ZygiskNext oferecer suporte oficial ao APatch, este APM foi configurado para fornecer o ambiente Zygisk para o APatch. Com o suporte oficial do ZygiskNext, o Zygisk_mod foi descontinuado, mas ainda está disponível.

- [ReZygisk](https://github.com/PerformanC/ReZygisk): Uma implementação gratuita do Zygisk que surgiu após o ZygiskNext se tornar proprietário. Ainda em desenvolvimento inicial, este APM não suporta alguns recursos presentes no ZygiskNext.

- [NeoZygisk](https://github.com/JingMatrix/NeoZygisk): Uma outra implementação gratuita do Zygisk após as implementações acima, com o objetivo de fornecer apenas uma API Zygisk mínima e remover outras funcionalidades. Seu design de API Zygisk é inspirado diretamente na API Zygisk do Magisk, tornando essa implementação teoricamente mais semelhante ao Zygisk integrado no Magisk.

Você pode escolher uma das implementações do Zygisk acima, ou usar sua própria implementação do Zygisk.

::: warning AVISO
Como mencionado anteriormente, o APatch **NÃO** oferece suporte nativo ao Zygisk, portanto, **NÃO PODEMOS** e **NÃO VAMOS** garantir a disponibilidade, funcionalidade, estabilidade ou quaisquer outras responsabilidades relacionadas a elementos do Zygisk.  

Caso enfrente problemas ao usar o APatch com qualquer implementação do Zygisk ou módulos dependentes do Zygisk, **NÃO** relate seu bug diretamente para nós, em vez disso, relate o bug ao(s) desenvolvedor(es) do APM primeiro.
:::

## O software de detecção de root falha

Se o seu software está funcionando corretamente, não se preocupe muito com o software de detecção.
