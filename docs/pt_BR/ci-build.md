# Notas especiais sobre CI build após a versão 10977

::: info INFORMAÇÕES
Já notamos esse problema em [Diversos](/pt_BR/update#miscellaneous) antes.
:::

O APatch abandonou o suporte para `module.img` desde o commit [b843480](https://github.com/bmax121/APatch/commit/b843480c4f56b6190add41366e3eb7148ebc9b87), portanto, qualquer APMódulo instalado durante o uso de qualquer instância do APatch antes desta versão será **COMPLETAMENTE PERDIDO** após a atualização para a versão `10977` e posterior.

Você precisará reinstalar todos os APMódulo que instalou antes.
