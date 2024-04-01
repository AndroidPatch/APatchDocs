# Patch

## Patch automático

1. Baixe o gerenciador mais recente no [GitHub](https://github.com/bmax121/APatch/releases).

2. Clique em Patch para definir a SuperKey. A SuperKey precisa ter **números e letras** e pelo menos **8 caracteres**. Ela será usada posteriormente para desbloquear permissões root.

:::warning Aviso
É proibido definir senhas fracas como `114514`. As versões mais recentes do APatch obriga o uso de senhas fortes. [Motivo](/warn).
:::

3. Selecione seu boot.img, confirme e aguarde a conclusão do patch. Depois que o patch for bem-sucedido, o caminho da boot.img corrigida será exibida. Por exemplo: `/storage/emulated/0/Download/apatch_version_version_randomletter.img`

Finalmente, você pode fazer o [flash](/flash) conforme necessário.

## Patch manual

**Quando o patch do kernel é atualizado e o gerenciador permanece inalterado, você pode optar por fazer o patch manualmente do kernel.**

Você pode ir para o projeto [KernelPatch](https://github.com/bmax121/KernelPatch/releases) para obter os arquivos `KP` mais recentes.

### Windows

1. Baixe `kptools-win.zip`, `kpimg-android` e `magiskboot`. Extraia-os no diretório atual para o uso.

2. Execute

```
magiskboot.exe unpack boot.img
```

Descompacte o boot e renomeie o kernel para kernel-b (O kernel-b pode ser outro kernel de terceiro, mas os kernels de terceiros não possuem garantias e não serão suportados).

Os usuários do Windows podem fazer o patch usando CMD ou PowerShell.

Execute

```
kptools-x86_64-win.exe -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Alternativamente, é recomendado usar `WSL` com `Linux` para o patch.

```
./kptools-linux -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Após o patch ser concluído sem erros, finalmente, use.

```
magiskboot.exe repack boot.img
```

Empacote e gere a imagem. O `new-boot.img` gerado é a imagem corrigida.

---

### Linux

1. Baixe `kptools-linux`, `kpimg-android` e `magiskboot`.

2. Execute

```
magiskboot unpack boot.img
```

Descompacte o boot para obter o arquivo do kernel. Renomeie o kernel para kernel-b.

Use o seguinte comando para corrigir a imagem do kernel:

```
./kptools-linux -p --image kernel-b --skey "SuaChave" --kpimg kpimg-android --out kernel
```

Após o patch ser concluído sem erros, finalmente, use.

```
magiskboot repack boot.img
```

Empacote e gere a imagem. O `new-boot.img` gerado é a imagem corrigida.

::: warning AVISO
Novamente, é estritamente proibido definir senhas fracas como `114514`.
:::

# Comandos e comentários do KP

::: info INFORMAÇÕES
[Você pode tentar aqui](https://exame.apatch.top/).
:::

```
-h，——help imprimir esta informação.

-v，——version imprimir o número da versão. Se -k for especificado, a versão kimpg será impressa.

-p，——patch para fazer patch ou flashar uma imagem de kernel (-i), especifique o kimpg (-k) e a SuperKey (-s).

-u，——unpatch desfazendo o patch na imagem do kernel (-i).

-r，——Reset -skey redefina a SuperKey da imagem do patch (-i).

-d，——dump dump informações do kallsyms para a imagem do kernel (-i).

-l，——list se (-i) for especificado, imprima todas as informações do patch da imagem do kernel.
Se (-M) for especificado, informações adicionais do projeto serão impressas.
Se (-k) for especificado, as informações da imagem do KernelPatch serão impressas.
Opções: -i，——image PATH caminho da imagem do kernel.

-k，——kimpg PATH caminho da imagem do patch do kernel.

-s，——skey PATH defina a SuperKey.

-o，——out PATH caminho da imagem do patch.

-a，——Add KEY=VALUE adicione informações adicionais.

-K，——kpatch PATH incorpore o binário executável do kpatch no patch.

-M，——Embed -extra- PATH PATH incorpore novos extras.

-E，——embed -extra- NAME NAME preserve e modifique extras incorporados.

-T，——extra- TYPE TYPE defina o tipo do anexo anterior.

-N，——extra- NAME NAME defina o nome do anexo anterior.

-V，——extra- EVENT EVENT defina o evento acionador para o item extra anterior.

-A，——extra- ARGS ARGS defina os parâmetros do extra anterior.

-D，——extra- Detach separe os itens extras anteriores do patch.
```
