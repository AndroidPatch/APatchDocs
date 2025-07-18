# Atualizar

[[toc]]

## Atualização normal do APatch

::: info INFORMAÇÕES
Você pode atualizar diretamente no app.
:::

1. Baixe a nova versão do APatch

> Por favor, reconfirme a SuperKey, se necessário.

2. Clique no botão no canto superior direito ![Patch Button](/PButton.png)

3. Selecione `Patch e instalação`

## Atualização OTA mantém o APatch

::: tip DICA
Mantenha a atualização OTA do root do APatch consistente com o Magisk.
:::

1. Baixe e inicie o processo de instalação da atualização OTA através do software de sua ROM

2. Após a conclusão de instalação da atualização OTA (quando solicitado a reiniciar), abra o APatch e clique no botão no canto superior direito ![Patch Button](/PButton.png)

3. Selecione `Instalar no slot inativo (Após o OTA)`

::: warning AVISO
A funcionalidade de atualização OTA está atualmente instável e pode causar problemas. Se ocorrerem problemas, [vá para o repositório do APatch no GitHub para enviar um problema](https://github.com/bmax121/APatch/issues/new/choose).
:::

::: info PRESTE ATENÇÃO
Para usuários da MIUI/Xiaomi HyperOS, preste atenção aos seguintes pontos:

Diferente do Magisk/KernelSU, o APatch atualmente não realiza o backup automático do `boot.img` stock ao corrigi-lo. Se você não restaurou manualmente o `boot.img` stock antes de uma atualização do sistema, a verificação falhará e você será forçado a usar uma ROM completa para concluir o processo de atualização.

Se você estiver usando MIUI/Xiaomi HyperOS (especialmente a versão Dev Edition), recomendamos restaurar manualmente o `boot.img` stock antes de realizar a atualização do sistema.
:::

## Diversos {#Miscellaneous}

::: info INFORMAÇÕES
Este documento foi atualizado pela última vez em 18/05/2024 às 22:30. Deve-se ter cuidado ao acessar o conteúdo desta página se a diferença de horário em relação ao presente for muito grande.
:::

O conteúdo descrito neste documento é baseado na versão mais recente do APatch. Se você não conseguir encontrar os botões mencionados neste documento, ![Patch Button](/PButton.png) significa que a versão do APatch que você está usando é muito antiga.

::: warning AVISO
Versões mais antigas não são mais suportadas, e há risco de comprometer a SuperKey.
:::

Em algumas atualizações importantes, as versões mais recentes do KernelPatch podem não ser compatíveis com versões mais antigas, **causando a perda do root** após a atualização. Caso essa incompatibilidade ocorra, ela será mencionada especificamente nas notas de lançamento. Se isso acontecer, recomendamos que você refaça as etapas de instalação usando o `boot.img` stock.

**Há um número muito pequeno de casos em que a troca de slot OTA não funciona.** A amostra é muito pequena para determinarmos exatamente qual é o problema. Se isso acontecer, reinstale o app manualmente. Além disso, se desejar, você pode relatar o problema e anexar os logs na página [Issues](https://github.com/bmax121/APatch/issues/new/choose) do GitHub.

Precisamos de sua ajuda.
