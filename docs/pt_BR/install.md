# Instalação

## Preparativos

1. Certifique-se de que seu dispositivo esteja com o bootloader desbloqueado antes de fazer root.

2. Você pode digitar no terminal ou via ADB `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` para verificar se o seu kernel suporta o patch (necessário root).

3. [Clique aqui](https://github.com/bmax121/APatch/releases) para obter a versão estável mais recente do APatch.

4. Extraia o `boot.img` de sua ROM ou de outra fonte que contenha o `boot.img` stock do seu dispositivo. Você precisará dele mais tarde para fazer o patch.

5. Faça backup do `boot.img` que você extraiu para um computador, pendrive ou outro dispositivo. Se ocorrer algum problema, você pode flashar seu `boot.img` original via fastboot para recuperar seu dispositivo de um despejo.

## Lembrete

1. Certifique-se de usar as ferramentas ADB e fastboot mais recentes e ter conhecimento sobre elas para prosseguir para a próxima etapa. Se você ainda não aprendeu sobre elas, recomendamos pesquisar para aprender sobre elas primeiro.

2. APatch sempre corrige o `boot.img` de qualquer dispositivo. Não tente corrigir ou flashar o `init_boot` ou outros arquivos de imagem de partição. Os desenvolvedores do APatch não são responsáveis ​​pela falha do patch e da inicialização resultantes.

3. Evite usar o arquivo `boot.img` que foi corrigido por outros gerenciadores para evitar situações inesperadas.
