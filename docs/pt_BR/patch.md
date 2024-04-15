# Patch

## Patch automático

1. Baixe o gerenciador mais recente no [GitHub](https://github.com/bmax121/APatch/releases).

2. Clique em Patch para definir a SuperKey. A SuperKey precisa ter **números e letras** e pelo menos **8 caracteres**. Ela será usada posteriormente para desbloquear privilégios root.

:::warning AVISO
É proibido definir senhas fracas como `12345678`. As versões mais recentes do APatch [obriga o uso de senhas fortes](/pt_BR/warn).
:::

3. Selecione o `boot.img` de sua ROM, confirme e aguarde a conclusão do patch. Depois que o patch for bem-sucedido, o caminho do boot.img corrigido será exibido. Por exemplo: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`

Finalmente, você pode fazer o [Flash](/pt_BR/flash) conforme necessário.

## Patch manual

Quando o patch do kernel é atualizado e o gerenciador permanece inalterado, você pode optar por fazer o patch manualmente do kernel.

Você pode ir até o projeto [KernelPatch](https://github.com/bmax121/KernelPatch/releases) para obter os arquivos `KP` mais recentes.

### Windows

1. Baixe `kptools-win.zip`, `kpimg-android` e `magiskboot`. Extraia-os no diretório atual para o uso.

2. Execute este comando:

```
magiskboot.exe unpack boot.img
```

Descompacte o `boot.img` para obter o arquivo do kernel. Renomeie o kernel para **kernel-b**. (O kernel-b pode ser outro kernel de terceiros, mas os kernels de terceiros não possuem garantias e não serão suportados).

Usuários do Windows podem fazer o patch usando `CMD` ou `PowerShell`.

Execute este comando para corrigir:

```
kptools-x86_64-win.exe -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Alternativamente, é recomendado usar `WSL` com `Linux` para o patch:

```
./kptools-linux -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Se nenhum erro for relatado durante o patch, execute este comando:

```
magiskboot.exe repack boot.img
```

Empacote e gere a imagem. O `new-boot.img` gerado é a imagem corrigida.

---

### Linux

1. Baixe `kptools-linux`, `kpimg-android` e `magiskboot`.

2. Execute este comando:

```
magiskboot unpack boot.img
```

Descompacte o `boot.img` para obter o arquivo do kernel. Renomeie o kernel para **kernel-b**.

Execute este comando para corrigir:

```
./kptools-linux -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Após o patch ser concluído sem erros, execute este comando:

```
magiskboot repack boot.img
```

Empacote e gere a imagem. O `new-boot.img` gerado é a imagem corrigida.

::: warning AVISO
Novamente, é estritamente proibido definir senhas fracas como `12345678`.
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
  -s, --skey KEY                   Definir SuperKey e salve-a diretamente no boot.img.
  -S, --root-skey KEY              Definir SuperKey root que usa verificação de hash e a SuperKey que pode ser alterada dinamicamente.
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
