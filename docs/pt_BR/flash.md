# Flash

Por favor, antes de flashar por qualquer método, confirme se você [corrigiu](/pt_BR/patch.md) sua imagem corretamente.

## Usando fastboot

::: info INFORMAÇÕES
Os comandos fastboot são convenientes, estáveis e fáceis de recuperar em caso de erros. Recomendamos fortemente usar esta forma de flash.
:::

Conecte o seu dispositivo usando o `ADB` e execute o seguinte comando:

```
adb reboot bootloader
```

Ao entrar no modo fastboot execute este comando:

```
fastboot flash boot boot.img
```

Se o seu dispositivo suporta `fastboot boot`, você pode primeiro tentar inicializar o sistema usando `fastboot boot boot.img`. Se ocorrerem problemas inesperados, simplesmente reinicie o dispositivo para a inicialização normal.

## Usando recovery de terceiros

Se o seu dispositivo tiver um sistema de recovery de terceiros (como o TWRP), você pode usar o TWRP para flashar a partição `boot.img` e obter acesso root.

## Usuários do Magisk mudando para o APatch

::: warning AVISO
Esta solução é recomendada apenas para dispositivos com uma partição `init_boot` e dispositivos que foram flashados com recovery de terceiros.
:::

1. Abra o Magisk, escolha **Desinstalar Magisk** e escolha **Restaurar imagens**.
2. Consulte [aqui](/pt_BR/patch.md) para corrigir seu boot.img original.
3. Reinicie o dispositivo no `recovery de terceiros` e instale o `boot.img` corrigido na `partição boot`.

::: danger PERIGO
Este método tem chance de deixar seu dispositivo inutilizável, por isso, tente com cuidado.
:::
