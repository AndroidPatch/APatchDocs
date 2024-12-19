# Instalação

## Preparativos

1. Certifique-se de que seu dispositivo esteja com o bootloader desbloqueado antes de fazer root.

2. [NECESSÁRIO ROOT] Você pode executar o comando `zcat /proc/config.gz | grep CONFIG_KALLSYMS` no terminal para garantir que seu kernel suporta o patch. Se estiver usando ADB, primeiro mude para o modo terminal digitando `adb shell`.

3. [Clique aqui](https://github.com/bmax121/APatch/releases) para obter a versão estável mais recente do APatch.

4. Extraia o `boot.img` de sua ROM ou de outra fonte que contenha o `boot.img` stock do seu dispositivo. Você precisará dele mais tarde para fazer o patch.

5. Faça backup do `boot.img` que você extraiu para um computador, pendrive ou outro dispositivo. Se ocorrer algum problema, você pode flashar seu `boot.img` original via fastboot para recuperar seu dispositivo de um despejo.

::: tip DICA
1. Certifique-se de usar as ferramentas ADB e fastboot mais recentes e ter conhecimento sobre elas para prosseguir para a próxima etapa. Se você ainda não aprendeu sobre elas, recomendamos pesquisar para aprender sobre elas primeiro.

2. APatch sempre corrige o `boot.img` de qualquer dispositivo. Não tente corrigir ou flashar o `init_boot` ou outros arquivos de imagem de partição. Os desenvolvedores do APatch não são responsáveis ​​pela falha do patch e da inicialização resultantes.

3. Evite usar o arquivo `boot.img` que foi corrigido por outros gerenciadores para evitar situações inesperadas.
:::

## Requisitos de instalação

Os requisitos de instalação do APatch são principalmente refletidos na configuração do kernel. Aqui estão os requisitos do kernel:

```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=y
```
ou:
```txt
CONFIG_KALLSYMS=y
CONFIG_KALLSYMS_ALL=n (Suporte inicial)
```
ou:
```txt
CONFIG_KALLSYMS=y
```

::: tip DICA
Você pode executar o comando `zcat /proc/config.gz | grep -w CONFIG_KALLSYMS` no terminal para garantir que seu kernel suporta o patch (necessário root).
:::

::: warning AVISO
**Suporta apenas arquitetura ARM64.**

**Suporta apenas versões do kernel Android 3.18 - 6.1**
:::

## Patch {#how-to-patch}

Existem várias maneiras de corrigir o APatch.

### Patch automático {#automatically-patching}

1. Baixe a versão mais recente do APatch no [GitHub](https://github.com/bmax121/APatch/releases).

2. Clique no botão ![Patch Button](/PButton.png) no canto superior direito, depois em `Selecionar imagem boot para Patch`.

3. Selecione seu `boot.img`.

4. Defina uma SuperKey no cartão "SuperKey". A SuperKey precisa ter **números e letras** e pelo menos **8 caracteres**. Ela será usada posteriormente para desbloquear privilégios root.

:::warning AVISO
É estritamente proibido definir chaves fracas como `12345678`. As versões mais recentes do APatch [obriga o uso de chaves fortes](/pt_BR/warn).
:::

5. Clique em "Iniciar" e aguarde um momento. Depois que o patch for bem-sucedido, o caminho do `boot.img` corrigido será exibido. Por exemplo: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`.

Finalmente, você pode fazer o [Flash](/pt_BR/install#flash) conforme necessário.

### Patch manual

Quando o KernelPatch é atualizado e o gerenciador do APatch permanece inalterado, você pode optar por fazer o patch manualmente do kernel.

Você pode ir até o projeto [KernelPatch](https://github.com/bmax121/KernelPatch/releases) para obter os arquivos `KP` mais recentes.

#### Windows

1. Baixe `kptools-win.zip`, `kpimg-android` e `magiskboot`. Extraia-os no mesmo diretório para o uso.

2. Execute este comando:

```cmd
magiskboot.exe unpack boot.img
```

Descompacte o `boot.img` para obter o arquivo do kernel. Renomeie o kernel para **kernel-b**. (O kernel-b pode ser outro kernel de terceiros, mas os kernels de terceiros não possuem garantias e não serão suportados).

Usuários do Windows podem fazer o patch usando `CMD` ou `PowerShell`.

Execute este comando para corrigir:

```cmd
kptools-x86_64-win.exe -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Alternativamente, é recomendado usar `WSL` com `Linux` para o patch:

```cmd
./kptools-linux -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Se nenhum erro for relatado durante o patch, execute este comando:

```cmd
magiskboot.exe repack boot.img
```

Empacote e gere a imagem. O `new-boot.img` gerado é a imagem corrigida.

---

#### Linux

1. Baixe `kptools-linux`, `kpimg-android` e `magiskboot`.

2. Execute este comando:

```sh
magiskboot unpack boot.img
```

Descompacte o `boot.img` para obter o arquivo do kernel. Renomeie o kernel para **kernel-b**. (Novamente, o kernel-b pode ser outro kernel de terceiros, mas os kernels de terceiros não possuem garantias e não serão suportados).

Execute este comando para corrigir:

```sh
./kptools-linux -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Se nenhum erro for relatado durante o patch, execute este comando:

```sh
magiskboot repack boot.img
```

Empacote e gere a imagem. O `new-boot.img` gerado é a imagem corrigida.

::: info
Você também pode tentar o [patch online](https://kernelpatch-on-web.pages.dev/).
:::

# Comandos e comentários do KP

::: info INFORMAÇÕES
Você pode clicar [aqui](https://exame.apatch.top/) para experimentar.
:::

```
COMANDOS:
  -h, --help                       Imprimir esta mensagem.
  -v, --version                    Imprimir o número da versão. Imprimir a versão do kpimg se -k for especificado.
  -p, --patch                      Patch ou atualização do patch da imagem do kernel (-i) com kpimg(-k) e SuperKey(-s) especificados.
  -u, --unpatch                    Desfazer patch na imagem do kernel(-i).
  -r, --reset-skey                 Redefinir SuperKey da imagem do patch(-i).
  -d, --dump                       Despejar informações do kallsyms da imagem do kernel(-i).
  -l, --list                       Imprimir todas as informações do patch da imagem do kernel se (-i) for especificado.
                                   Imprimir informações extras do item se (-M) for especificado.
                                   Imprimir informações da imagem do KernelPatch se (-k) for especificado.
OPÇÕES:
  -i, --image PATH                 Caminho da imagem do kernel.
  -k, --kpimg PATH                 Caminho da imagem do KernelPatch.
  -s, --skey PATH                  Definir SuperKey e salvar diretamente no boot.img.
  -S, --root-skey KEY              Definir a SuperKey root que usa verificação de hash e a SuperKey pode ser alterada dinamicamente.
  -o, --out PATH                   Caminho da imagem corrigida.
  -a  --addition KEY=VALUE         Adicionar informações adicionais.
  -K, --kpatch PATH                Incorporar binário executável do kpatch no patch.
  -M, --embed-extra-path PATH      Incorporar novo item extra.
  -E, --embeded-extra-name NAME    Preservar e modificar itens extras incorporados.
  -T, --extra-type TYPE            Definir tipo de item extra anterior.
  -N, --extra-name NAME            Definir nome do item extra anterior.
  -V, --extra-event EVENT          Definir evento desencadeador do item extra anterior.
  -A, --extra-args ARGS            Definir argumentos do item extra anterior.
  -D, --extra-detach               Desanexar item extra anterior dos patches.
```

## Flash {#flash}

### Usando fastboot

::: info INFORMAÇÕES
Os comandos fastboot são convenientes, estáveis e fáceis de recuperar em caso de erros. Recomendamos fortemente usar esta forma de flash.
:::

Conecte o seu dispositivo usando o `ADB` e execute o seguinte comando para entrar no modo fastboot:

```sh
adb reboot bootloader
```

Ao entrar no modo fastboot execute este comando:

```sh
fastboot flash boot boot.img
```

::: tip DICA
Se o seu dispositivo suporta `fastboot boot`, você pode primeiro tentar inicializar o sistema usando `fastboot boot boot.img`. Se ocorrerem problemas inesperados, simplesmente reinicie o dispositivo para a inicialização normal.
:::

Quando terminar, reinicie o seu dispositivo:

```sh
fastboot reboot
```

### Flashando diretamente

A versão MAIS RECENTE do APatch suporta atualização direta por meio de recovery de terceiros, por exemplo, TWRP.

::: warning AVISO
O flash direto foi introduzido pela primeira vez na versão `10888` e versões anteriores do APatch **NÃO** suportam este método.
:::

Altere o nome do sufixo do arquivo do APatch (.apk) para `.zip`. Por exemplo:

```
[username@localhost Demo] $ ls
APatch-10888-release.apk
[username@localhost Demo] $ mv APatch-10888-release.apk APatch-10888-release.zip
[username@localhost Demo] $ ls
APatch-10888-release.zip
[username@localhost Demo] $ 
```

Depois de feito isso, você pode flashar este arquivo `.zip` por meio da função Flash do recovery de terceiros. O APatch será instalado automaticamente assim como Magisk.

::: tip DICA
Assim como o Flash, a função `adb sideload` usada pelo recovery fornecida por ROMs semelhantes a AOSP de terceiros também é suportada.
:::

::: warning AVISO
Flashar diretamente **NÃO** é compatível com a personalização da SuperKey! Em vez disso, a SuperKey será definida como uma combinação de números e letras aleatórias.
Se você precisar personalizar a SuperKey, vá para o APatch após a inicialização e repatch para redefinir a SuperKey.
:::

## Desinstalar

### Desinstalar automaticamente

::: warning AVISO
A desinstalação automática foi introduzida pela primeira vez na versão `10888` e versões anteriores do APatch **NÃO** suportam este método.
:::

Altere o nome do sufixo do arquivo do APatch (.apk) para `.zip` e adicione o nome do arquivo modificado a qualquer coisa com `uninstall`. Por exemplo:

```
[username@localhost Demo] $ ls
APatch-10888-release.apk
[username@localhost Demo] $ mv APatch-10888-release.apk APatch-10888-release-uninstall.zip
[username@localhost Demo] $ ls
APatch-10888-release-uninstall.zip
[username@localhost Demo] $ 
```

Depois de feito isso, você pode flashar este arquivo `.zip` por meio da função Flash do recovery de terceiros. O APatch será removido automaticamente assim como Magisk.

::: tip DICA
Assim como o Flash, a função `adb sideload` usada pelo recovery fornecida por ROMs semelhantes a AOSP de terceiros também é suportada.
:::

### Desinstalar manualmente

Flash seu `boot.img` stock no modo `bootloader`.

```sh
fastboot flash boot CAMINHO/DO/boot.img
```

::: warning AVISO
NÃO use `init_boot`!
:::
