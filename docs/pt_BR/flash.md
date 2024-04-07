# Flash

## Usando fastboot

::: info INFORMAÇÕES
Os comandos fastboot são convenientes, estáveis e fáceis de recuperar em caso de erros, tornando-os o método ideal para flashar.
:::

Conecte o seu dispositivo usando o ADB e execute o seguinte comando:

```
adb reboot bootloader
```

Ao entrar no modo fastboot execute este comando:

```
fastboot flash boot boot.img
```

Se o seu dispositivo suporta `fastboot boot`, você pode primeiro tentar inicializar o sistema usando `fastboot boot boot.img`. Se ocorrerem problemas inesperados, simplesmente reinicie o dispositivo para a inicialização normal.

## Usando TWRP

Se o seu dispositivo tiver um sistema de recovery de terceiros (como o TWRP), você pode usar o TWRP para flashar a partição `boot.img` e obter acesso root.

## Usuários do Magisk mudando para o APatch

::: warning AVISO
Esta solução é recomendada apenas para dispositivos com uma partição `init_boot` e dispositivos que foram flashados com o `TWRP`.
:::

1. Clique em **Desinstalar Magisk** para restaurar a imagem original de fábrica.
2. Consulte [aqui](/pt_BR/patch.md) para corrigir seu boot.img original.
3. Reinicie o dispositivo no `TWRP` e instale o `boot.img` corrigido na `partição boot`.

::: danger PERIGO
Este método tem chance de deixar seu dispositivo inutilizável, por isso, tente com cuidado.
:::
