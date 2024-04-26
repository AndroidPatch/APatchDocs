# Perguntas frequentes

## O que é APatch?

::: info INFORMAÇÕES
[Aqui](/pt_BR/what-is-apatch) tem uma introdução mais completa.
:::

APatch é uma solução root semelhante ao Magisk ou KernelSU que une o melhor de ambos. Ele combina o método de instalação fácil e conveniente do Magisk por meio do `boot.img` com as poderosas habilidades de patch de kernel do KernelSU.

## Qual é a diferença entre APatch e Magisk?

Magisk modifica o sistema `init` com um patch no `ramdisk` da sua imagem de inicialização, enquanto APatch corrige diretamente o kernel Android.

## Qual é a diferença entre APatch e KernelSU?

KernelSU requer o código-fonte do kernel de seu dispositivo, que nem sempre é fornecido pelo OEM. APatch funciona apenas com seu `boot.img` stock.

## Qual é a diferença entre APatch, Magisk e KernelSU?

APatch permite opcionalmente não modificar o SELinux, isso significa que o thread do app pode ser rooteado, libsu e IPC não são necessários.

**KPMódulo** fornecido.

## O que é KPMódulo?

Alguns códigos são executados no espaço do kernel, semelhante ao **Loadable Kernel Modules** (LKM).

Além disso, o KPMódulo fornece a capacidade de executar `inline-hook` e `syscall-table-hook` no espaço do kernel.

Para mais informações, veja [como escrever um KPM](https://github.com/bmax121/KernelPatch/blob/main/doc/zh-CN/module.md).

## A relação entre APatch e KernelPatch

APatch depende do KernelPatch. Ele herda todas as suas capacidades e foi expandido.

Você pode instalar apenas o KernelPatch, mas isso não permitirá o uso do APM.

Para usar o gerenciamento de SuperUsuário, você precisa instalar o APatch e depois desinstalar o KernelPatch.

[Saiba mais sobre o KernelPatch](https://github.com/bmax121/KernelPatch).

## O que é SuperKey?

KernelPatch conecta chamadas do sistema para fornecer todos os recursos ao espaço do usuário, e essa chamada do sistema é chamada de **SuperCall**. Invocar o SuperCall requer a passagem de uma credencial, conhecida como **SuperKey**. SuperCall só pode ser invocado com sucesso quando a SuperKey estiver correta. Se a SuperKey estiver incorreta, o chamador não será afetado.

## O que é SELinux?

KernelPatch não modifica o contexto do SELinux e ignora o SELinux via hook. Isso permite que você faça root em um thread do Android dentro do contexto do app sem a necessidade de usar `libsu` para iniciar um novo processo e então executar o `IPC`.

Além disso, o APatch utiliza diretamente o `magiskpolicy` para fornecer suporte adicional ao SELinux.

## O módulo não pode ser instalado

Revogue as permissões de root para o shell na página de autorização root.

## O app automaticamente obtém e perde permissões root após o reinício do telefone

Veja [aqui](https://t.me/APatchChannel/74).

## Não é possível usar Shamiko

Shamiko é de código fechado e parou de ser atualizado, portanto, não pode ser adaptado.

::: info INFORMAÇÕES
Se você precisar usá-lo, use o Shamiko [0.7.4](https://github.com/LSPosed/LSPosed.github.io/releases/tag/shamiko-188).
:::

## Suporta Zygisk?

APatch pode usar a versão oficial do [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext).

::: warning AVISO
Sempre que possível, use a versão oficial em vez de modificações de terceiros, a menos que tenha certeza de que a versão modificada é inofensiva. Por alguns motivos, recomendamos usar a versão [0.9.1.1](https://github.com/Dr-TSNG/ZygiskNext/releases/tag/v4-0.9.1.1) do ZygiskNext se nenhum problema sério aparecer.
:::

## O software de detecção de root falha

Se o seu software está funcionando corretamente, não se preocupe muito com o software de detecção.
