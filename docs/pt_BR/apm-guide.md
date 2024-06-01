# Guia APMódulo {#introduction}

APatch fornece um mecanismo de módulo (AndroidPatch Module) que consegue modificar o diretório do sistema enquanto mantém a integridade da partição do sistema. Este mecanismo é conhecido como `sem sistema`.

A implementação de módulos do APatch foi copiada e modificada do [KernelSU](https://github.com/tiann/KernelSU).

O código modificado pode ser encontrado aqui:

KernelSU: [https://github.com/tiann/KernelSU/tree/main/userspace/ksud](https://github.com/tiann/KernelSU/tree/main/userspace/ksud)  
APatch: [https://github.com/bmax121/APatch/tree/main/apd](https://github.com/bmax121/APatch/tree/main/apd)  

A documentação a seguir foi copiada e modificada da documentação do KernelSU e grande parte do conteúdo é o mesmo. Os principais pontos a serem observados são os seguintes:

1. Localização dos arquivos
2. Variáveis de ​​ambiente
3. Suporte ao SELinux, APatch usa diretamente o `magiskpolicy`

O mecanismo de módulos do APatch é quase o mesmo do Magisk. Se você está familiarizado com o desenvolvimento de módulos Magisk, o desenvolvimento de módulos APatch é muito semelhante. Você pode pular a introdução dos módulos abaixo e só precisa ler quais são as diferenças.

## BusyBox

O APatch vem com um recurso binário BusyBox completo (incluindo suporte completo ao SELinux). O executável está localizado em `/data/adb/ap/bin/busybox`.
O BusyBox do APatch suporta "ASH Standalone Shell Mode" alternável em tempo de execução.
O que este Modo Autônomo significa é que ao executar no shell `ash` do BusyBox, cada comando usará diretamente o miniaplicativo dentro do BusyBox, independentemente do que estiver definido em `PATH`.
Por exemplo, comandos como `ls`, `rm`, `chmod`, etc. **NÃO** usarão o que está em `PATH` (no caso do Android, por padrão será `/system/bin/ls`, `/system/bin/rm` e `/system/bin/chmod` respectivamente), mas em vez disso chamará diretamente os miniaplicativos internos do BusyBox.
Isso garante que os scripts sempre sejam executados em um ambiente previsível e sempre tenham o conjunto completo de comandos, independentemente da versão do Android em que estão sendo executados.
Para forçar um comando a **NÃO** usar o BusyBox, você deve chamar o executável com caminhos completos.

Cada script shell executado no contexto do APatch será executado no shell `ash` do BusyBox com o Modo Autônomo ativado. Para o que é relevante para desenvolvedores terceirizados, isso inclui todos os scripts de inicialização e scripts de instalação de módulos.

Para aqueles que desejam usar o recurso Modo Autônomo fora do APatch, existem 2 maneiras de ativá-los:

1. Definir a variável de ambiente `ASH_STANDALONE` como `1`.<br>Exemplo: `ASH_STANDALONE=1 /data/adb/ap/bin/busybox sh <script>`.
2. Alternar com opções de linha de comando: `/data/adb/ap/bin/busybox sh -o standalone <script>`

Para garantir que todos os shells `sh` subsequentes executados também sejam executados no Modo Autônomo, a opção 1 é o método preferido (e é isso que o APatch e o gerenciador do APatch usam internamente), pois as variáveis ​​de ambiente são herdadas para os subprocesso.

::: tip DIFERENÇAS COM KERNELSU
A localização do BusyBox foi alterada de `/data/adb/ksu/bin/busybox` para `/data/adb/ap/bin/busybox`.
:::

::: tip DIFERENÇAS COM MAGISK
O BusyBox do APatch agora está usando o arquivo binário compilado diretamente do projeto Magisk. **Obrigado ao Magisk!**
Portanto, você não precisa se preocupar com problemas de compatibilidade entre scripts BusyBox no Magisk e APatch porque eles são exatamente iguais!
:::

## APMódulo {#APatch-modules}

Um módulo APatch é uma pasta colocada em `/data/adb/modules` com a estrutura abaixo:

```txt
/data/adb/modules
├── .
├── .
|
├── $MODID                  <--- A pasta é nomeada com o ID do módulo
│   │
│   │      *** Identidade do módulo ***
│   │
│   ├── module.prop         <--- Este arquivo armazena os metadados do módulo
│   │
│   │      *** Conteúdo principal ***
│   │
│   ├── system              <--- Esta pasta será montada se skip_mount não existir
│   │   ├── ...
│   │   ├── ...
│   │   └── ...
│   │
│   │      *** Sinalizadores de status ***
│   │
│   ├── skip_mount          <--- Se existir, a pasta /system do módulo não será montada
│   ├── disable             <--- Se existir, o módulo será desativado
│   ├── remove              <--- Se existir, o módulo será removido na próxima reinicialização
│   │
│   │      *** Arquivos opcionais ***
│   │
│   ├── post-fs-data.sh     <--- Este script será executado em post-fs-data
│   ├── post-mount.sh       <--- Este script será executado em post-mount
│   ├── service.sh          <--- Este script será executado no serviço late_start
│   ├── boot-completed.sh   <--- Este script será executado na inicialização concluída
|   ├── uninstall.sh        <--- Este script será executado quando o APatch remover seu módulo
│   ├── system.prop         <--- As propriedades neste arquivo serão carregadas como propriedades do sistema por resetprop
│   ├── sepolicy.rule       <--- Regras adicionais do sepolicy personalizadas
│   │
│   │      *** Gerado automaticamente, NÃO CRIE OU MODIFIQUE MANUALMENTE ***
│   │
│   ├── vendor              <--- Um link simbólico para $MODID/system/vendor
│   ├── product             <--- Um link simbólico para $MODID/system/product
│   ├── system_ext          <--- Um link simbólico para $MODID/system/system_ext
│   │
│   │      *** Quaisquer arquivos/pastas adicionais são permitidos ***
│   │
│   ├── ...
│   └── ...
|
├── another_module
│   ├── .
│   └── .
├── .
├── .
```

::: tip DIFERENÇAS COM MAGISK
O APatch não possui suporte integrado para o Zygisk, portanto não há conteúdo relacionado ao Zygisk no módulo.
No entanto, você pode usar [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) ou [Zygisk_mod](https://github.com/Admirepowered/Zygisk_mod) para suportar módulos Zygisk. Neste caso, o conteúdo do módulo Zygisk é idêntico ao suportado pelo Magisk.
:::

### module.prop

`module.prop` é um arquivo de configuração para um módulo. No APatch, se um módulo não contiver este arquivo, ele não será reconhecido como um módulo. O formato deste arquivo é o seguinte:

```txt
id=<string>
name=<string>
version=<string>
versionCode=<int>
author=<string>
description=<string>
```

- `id` deve corresponder a esta expressão regular: `^[a-zA-Z][a-zA-Z0-9._-]+$`<br>
  Exemplo: ✓ `a_module`, ✓ `a.module`, ✓ `module-101`, ✗ `a module`, ✗ `1_module`, ✗ `-a-module`<br>
  Este é o **identificador exclusivo** do seu módulo. Você não deve alterá-lo depois de publicado.
- `versionCode` deve ser um **número inteiro**. Isso é usado para comparar versões.
- Outros que não foram mencionados acima podem ser qualquer string de **linha única**.
- Certifique-se de usar o tipo de quebra de linha `UNIX (LF)` e não o `Windows (CR+LF)` ou `Macintosh (CR)`.

### Shell scripts {#shell-scripts}

As diferenças entre `post-fs-data.sh`, `post-mount.sh`, `service.sh` e `boot-completed.sh` estão descritas em [Scripts de inicialização](#boot-scripts). Para a maioria dos desenvolvedores de módulos, `service.sh` deve ser bom o suficiente se você precisar apenas executar um script de inicialização. Se precisar executar o script após a inicialização ser concluída, use `boot-completed.sh`. Se você quiser fazer algo após montar OverlayFS, use `post-mount.sh`.

Em todos os scripts do seu módulo, use `MODDIR=${0%/*}` para obter o caminho do diretório base do seu módulo, **NÃO** codifique o caminho do seu módulo nos scripts.

:::tip DIFERENÇAS COM MAGISK E KERNELSU
Você pode determinar se o script está sendo executado no APatch usando a variável de ambiente `APATCH`. Se estiver sendo executado no APatch, esse valor será definido como `true`.
:::

### Diretório `system` {#system-directories}

O conteúdo deste diretório será sobreposto à partição `/system` do sistema usando OverlayFS após a inicialização do sistema. Isso significa que:

1. Arquivos com o mesmo nome daqueles no diretório correspondente no sistema serão substituídos pelos arquivos deste diretório.
2. Pastas com o mesmo nome daquelas no diretório correspondente no sistema serão mescladas com as pastas neste diretório.

Se você deseja excluir um arquivo ou pasta no diretório original do sistema, você precisa criar um arquivo com o mesmo nome do arquivo/pasta no diretório do módulo usando `mknod filename c 0 0`. Dessa forma, o sistema OverlayFS irá automaticamente "branquear" este arquivo como se ele tivesse sido excluído (a partição /system não foi realmente alterada).

Você também pode declarar uma variável chamada `REMOVE` contendo uma lista de diretórios em `customize.sh` para executar operações de remoção, e o APatch executará automaticamente `mknod <TARGET> c 0 0` nos diretórios correspondentes do módulo. Por exemplo:

```sh
REMOVE="
/system/app/YouTube
/system/app/Bloatware
"
```

A lista acima irá executar `mknod $MODPATH/system/app/YouTube c 0 0` e `mknod $MODPATH/system/app/Bloatware c 0 0`; `/system/app/YouTube` e `/system/app/Bloatware` serão removidos após o módulo entrar em vigor.

Se você deseja substituir um diretório no sistema, você precisa criar um diretório com o mesmo caminho no diretório do módulo e, em seguida, definir o atributo `setfattr -n trusted.overlay.opaque -v y <TARGET>` para este diretório. Desta forma, o sistema OverlayFS substituirá automaticamente o diretório correspondente no sistema (sem alterar a partição /system).

Você pode declarar uma variável chamada `REPLACE` em seu arquivo `customize.sh`, que inclui uma lista de diretórios a serem substituídos, e o APatch executará automaticamente as operações correspondentes em seu diretório de módulo. Por exemplo:

```sh
REPLACE="
/system/app/YouTube
/system/app/Bloatware
"
```

Esta lista criará automaticamente os diretórios `$MODPATH/system/app/YouTube` e `$MODPATH/system/app/Bloatware` e, em seguida, executará `setfattr -n trusted.overlay.opaque -v y $MODPATH/system/app/YouTube` e `setfattr -n trusted.overlay.opaque -v y $MODPATH/system/app/Bloatware`. Após o módulo entrar em vigor, `/system/app/YouTube` e `/system/app/Bloatware` serão substituídos por diretórios vazios.

:::tip DIFERENÇAS COM MAGISK
O mecanismo sem sistema do APatch é implementado através do OverlayFS do kernel, enquanto o Magisk atualmente usa montagem mágica. Há uma enorme diferença entre essas duas implementações, mas o objetivo final é o mesmo: modificar os arquivos `/system` sem modificar fisicamente a partição `/system`.
:::

Se você estiver interessado em OverlayFS, é recomendável ler a [documentação sobre OverlayFS](https://docs.kernel.org/filesystems/overlayfs.html) do kernel Linux.

### system.prop

Este arquivo segue o mesmo formato de `build.prop`. Cada linha é composta por `[key]=[value]`.

### sepolicy.rule

Se o seu módulo exigir alguns patches adicionais do sepolicy, adicione essas regras a este arquivo. Cada linha neste arquivo será tratada como uma declaração de política.

## Instalador do módulo {#module-installer}

Um instalador do módulo APatch é um módulo APatch empacotado em um arquivo ZIP que pode ser atualizado no gerenciador do APatch. O formato deste arquivo ZIP é o seguinte:

```txt
module.zip
│
├── customize.sh                       <--- (Opcional, mais detalhes posteriormente)
│                                           Este script será fornecido por update-binary
├── ...
├── ...  /* O resto dos arquivos do módulo */
│
```

:::warning AVISO
O módulo APatch **NÃO** é compatível para instalação no Recovery personalizado!
:::

### Personalização {#customizing-installation}

Se você precisar personalizar o processo de instalação do módulo, opcionalmente você pode criar um script no instalador chamado `customize.sh`. Este script será **sourced** (não executado!) pelo script do instalador do módulo depois que todos os arquivos forem extraídos e as permissões padrão e o contexto secundário forem aplicados. Isso é muito útil se o seu módulo exigir configuração adicional com base na API do dispositivo ou se você precisar definir permissões/secontext especiais para alguns dos arquivos do seu módulo.

Se você quiser controlar e personalizar totalmente o processo de instalação, declare `SKIPUNZIP=1` em `customize.sh` para pular todas as etapas de instalação padrão. Ao fazer isso, seu `customize.sh` será responsável por instalar tudo sozinho.

O script `customize.sh` é executado no shell BusyBox `ash` do APatch com o Modo Autônomo ativado. As seguintes variáveis ​​e funções estão disponíveis:

#### Variáveis {#variables}

- `KERNELPATCH` (bool): Marque este script para rodar no ambiente do APatch, e o valor desta variável será sempre `true`.
- `KERNEL_VERSION` (hex): Herdado do KernelPatch, o número da versão do kernel (ex.: `50a01` significa `5.10.1`).
- `KERNELPATCH_VERSION` (hex): Herdado do KernelPatch, o número da versão do KernelPatch (ex.: `a05` significa `0.10.5`).
- `SUPERKEY` (string): Herdado do KernelPatch, usado para chamar kpatch ou supercall.

- `APATCH` (bool): Marque este script para rodar no ambiente do APatch, e o valor desta variável será sempre `true`.
- `APATCH_VER_CODE` (int): Número da versão atual do APatch (ex.: `10672`).
- `APATCH_VER` (string): O nome da versão atual do APatch (ex.: `10672`).

- `BOOTMODE` (bool): No APatch, esta variável sempre terá o valor `true`.
- `MODPATH` (path): Diretório de instalação do módulo atual.
- `TMPDIR` (path): Um diretório onde arquivos temporários podem ser armazenados.
- `ZIPFILE` (path): Arquivo do pacote de instalação para o módulo atual.
- `ARCH` (string): Arquitetura do processador do dispositivo, somente `arm64`.
- `IS64BIT` (bool): Este dispositivo é de 64 bits.
- `API` (int): Versão atual da API Android do dispositivo (ex.: `23` no Android 6.0).

::: warning AVISO
No APatch, `MAGISK_VER_CODE` tem um valor de `27000` e `MAGISK_VER` tem um valor de `27.0`.
:::

#### Funções {#functions}

```txt
ui_print <msg>
    imprima <msg> no console
    Evite usar 'echo', pois ele não será exibido no console de recovery personalizado

abort <msg>
    imprima mensagem de erro <msg> para consolar e encerrar a instalação
    Evite usar 'exit', pois isso irá pular as etapas de limpeza de encerramento

set_perm <target> <owner> <group> <permission> [context]
    se [context] não estiver definido, o padrão é "u:object_r:system_file:s0"
    esta função é uma abreviação para os seguintes comandos:
       chown owner.group target
       chmod permission target
       chcon context target

set_perm_recursive <directory> <owner> <group> <dirpermission> <filepermission> [context]
    se [context] não está definido, o padrão é "u:object_r:system_file:s0"
    para todos os arquivos em <directory>, ele chamará:
       set_perm arquivo proprietário do grupo filepermission
    para todos os diretórios em <directory> (incluindo ele mesmo), ele vai ligar:
       set_perm dir owner group dirpermission context
```

## Scripts de inicialização {#boot-scripts}

No APatch, os scripts são divididos em dois tipos com base em seu modo de execução: modo post-fs-data e modo de serviço late_start:

- modo post-fs-data

  - Esta etapa está BLOQUEANDO. O processo de inicialização é pausado antes da execução ser concluída ou 10 segundos se passaram.
  - Os scripts são executados antes de qualquer módulo ser montado. Isso permite que um desenvolvedor de módulo ajuste dinamicamente seus módulos antes de serem montados.
  - Este estágio acontece antes do início do Zygote, o que significa praticamente tudo no Android.
  - **AVISO:** Usar `setprop` irá bloquear o processo de inicialização! Por favor, use `resetprop -n <prop_name> <prop_value>` em vez disso.
  - **Execute scripts neste modo apenas se necessário.**

- modo de serviço late_start

  - Esta etapa é SEM BLOQUEIO. Seu script é executado em paralelo com o restante do processo de inicialização.
  - **Este é o estágio recomendado para executar a maioria dos scripts**.

APatch possui mais dois tipos de scripts de início dependendo de onde estão armazenados: scripts gerais e scripts de módulo.

- Scripts gerais

  - Colocado em `/data/adb/post-fs-data.d`, `/data/adb/service.d`, `/data/adb/post-mount.d` ou `/data/adb/boot-completed.d`.
  - Somente executado se o script estiver definido como executável (`chmod +x script.sh`).
  - Os scripts em `post-fs-data.d` são executados no modo post-fs-data e os scripts em `service.d` são executados no modo de serviço late_start.
  - Os módulos **NÃO** devem adicionar scripts gerais durante a instalação.

- Scripts de módulo

  - Colocado na própria pasta do módulo.
  - Executado apenas se o módulo estiver ativado.
  - `post-fs-data.sh` é executado no modo post-fs-data, `post-mount.sh` é executado no modo post-mount e `service.sh` é executado no modo de serviço late_start e `boot-completed` é executado no modo de serviço após a conclusão da inicialização do Android.

Todos os scripts de inicialização serão executados no shell BusyBox `ash` do APatch com o Modo Autônomo ativado.
