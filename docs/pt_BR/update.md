# Atualizar

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

1. Baixe e comece a instalar a atualização OTA através do software de sua ROM

2. Após a conclusão de instalação da atualização OTA (quando solicitado a reiniciar), abra o APatch e clique no botão no canto superior direito ![Patch Button](/PButton.png)

3. Selecione `Instalar no slot inativo (após o OTA)`

::: warning AVISO
A funcionalidade de atualização OTA está atualmente instável e pode causar problemas. Se problemas ocorrerem [vá para o repositório do APatch no GitHub para enviar um problema](https://github.com/bmax121/APatch/issues/new/choose).
:::

::: info PRESTE ATENÇÃO
Para usuários da MIUI/Xiaomi HyperOS, aqui está o que você precisa prestar mais atenção:

Diferente do Magisk/KernelSU, o APatch atualmente não fará backup automático do `boot.img` stock ao corrigi-lo. Se você não restaurou manualmente o `boot.img` stock antes de uma atualização do sistema, a verificação falhará e você será forçado a usar uma ROM completa para concluir o processo de atualização.

Se você estiver usando MIUI/Xiaomi HyperOS (especialmente Dev Edition), recomendamos restaurar o `boot.img` stock manualmente antes da atualização do sistema.
:::

## Diversos

:::info INFORMAÇÕES
Este documento foi atualizado pela última vez em 18/05/2024 às 22h30. Deve-se ter cuidado ao acessar o conteúdo desta página se a diferença horária em relação ao presente for muito grande.
:::

O conteúdo descrito neste documento é baseado na versão mais recente do APatch. Se você não conseguir encontrar os botões mencionados neste documento, ![Patch Button](/PButton.png) significa que a versão do APatch que você está usando é muito baixa.

::: warning AVISO
Versões mais antigas não são mais suportadas e existe o risco de comprometer a SuperKey.
:::

Em algumas atualizações importantes, as versões mais recentes do KernelPatch podem não ser compatíveis com versões mais antigas, **causando a perda do root** após a atualização. Se esta incompatibilidade existir, iremos mencioná-la especificamente nas notas de lançamento. Se tal problema ocorrer, recomendamos que você refaça as etapas de instalação usando a imagem `boot` stock.

**Há um número muito pequeno de casos em que a troca de slot OTA não funciona.** A amostra é muito pequena para determinarmos exatamente qual é o problema. Se isso falhar, reinstale o app manualmente. Além disso, se desejar, você pode relatar o problema e anexar os logs na página [Issues](https://github.com/bmax121/APatch/issues/new/choose) do GitHub.

Precisamos de sua ajuda.
