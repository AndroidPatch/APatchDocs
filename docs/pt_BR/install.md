# Instalação

## Preparativos antes de instalar

1. Por favor, certifique-se de que seu telefone esteja desbloqueado antes de fazer root.

2. Você pode digitar no terminal ou via adb `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` para verificar se o seu kernel suporta o patch (necessita de root).

3. [Clique aqui](https://github.com/bmax121/APatch/releases) para obter a versão estável mais recente do APatch.

4. Extraia o boot.img de sua ROM ou de outra fonte que contenha o boot.img original de fábrica do seu dispositivo. Você precisará dele mais tarde para corrigir.

5. Faça backup do `boot.img` que você extraiu para um computador, pendrive ou outro dispositivo. Se houver qualquer problema durante o processo de instalação, você pode restaurar o sistema para a imagem original de fábrica usando o fastboot.

## Lembrete

1. Certifique-se de usar as ferramentas ADB e fastboot mais recentes e ter conhecimento sobre elas para prosseguir para a próxima etapa. Se você ainda não aprendeu sobre elas, recomendamos pesquisar para aprender sobre elas primeiro.

2. O APatch corrige o `boot` independentemente de qualquer dispositivo. Não tente corrigir ou flashar o `init_boot` ou outros arquivos de imagem de partição. Os desenvolvedores do APatch não são responsáveis ​​pelas falhas de patch e inicialização resultantes.

3. Evite usar o `arquivo boot` que foi corrigido por outros gerenciadores para evitar situações inesperadas.
