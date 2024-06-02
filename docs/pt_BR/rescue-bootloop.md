# Resgate do bootloop

O APatch possui um mecanismo de resgate de bootloop integrado que pode ajudá-lo a desativar rapidamente todos os módulos e reiniciar o dispositivo se algum módulo malicioso for flashado e o dispositivo não inicializar.

:::warning AVISO
Isso só pode ajudá-lo **quando o dispositivo não pode ser inicializado devido a módulos maliciosos ou conflitante**. Porém, este guia **não pode ajudá-lo a resolver problemas como a restauração de fábrica ou perda de dados!**
:::

## Mecanismos integrados

- Pressionando o botão de diminuir volume

Após **pressionar longamente o botão liga/desliga e a tela ligar, pressione e solte continuamente até que a primeira tela acenda**. Desta forma, o Modo de Segurança integrado do APatch será ativado e todos os módulos serão desativados.

:::info INFORMAÇÕES
O APatch tem uma ampla gama de detecção para os botões de volume. Mesmo que o `post-fs` tenha sido executado, o APatch irá desfazer as alterações feitas na fase `post-fs` se um sinal do Modo de Segurança for detectado.

Em outras palavras, é válido antes de `sys.boot_completed=1`.
:::

- Entrando no Modo de Segurança

Algumas ROMs, como a MIUI/HyperOS, podem ativar o Modo de Segurança em seu recovery. Reiniciar para o recovery e ativar o Modo de Segurança que vem com a ROM também iniciará o Modo de Segurança do APatch.

---

:::tip DICA
Após entrar no Modo de Segurança, todos os módulos na página de módulos do sistema do APatch serão desativados, mas você pode realizar a operação "Desinstalar" para desinstalar os módulos que podem estar causando problemas.
:::

## Alguns problemas

### Mesmo depois de ativar o Modo de Segurança, o sistema ainda pode travar.

Pode ser devido à falha em reverter as modificações do `post-fs`, causando o travamento. Reiniciar forçadamente novamente deve resolver.

### Não consigo ver o APatch após entrar no Modo de Segurança via recovery.

Você pode entrar no Modo de Segurança do Android.

Ao entrar no Modo de Segurança do Android, há uma regra aplicável: Após entrar no Modo de Segurança, todos os apps que não sejam do sistema serão desativados pelo Android. O APatch não se encaixará como um app do sistema, portanto, esta regra resultará na desativação do APatch após entrar no Modo de Segurança.

Esse comportamento é normal e mostra que tanto o Modo de Segurança do Android quanto o Modo de Segurança do APatch funcionam bem se você não tiver consolidado o APatch em um app do sistema. O que você precisa fazer é apenas reiniciar o dispositivo novamente e o Android sairá do Modo de Segurança com o APatch recuperado. No entanto, o APatch não sairá do Modo de Segurança ao mesmo tempo, então você pode desabilitar qualquer APMódulo que tenha causado problemas neste caso.
