# Notas especiais sobre CI build após a versão 10977

::: info INFORMAÇÕES
Notamos esse problema em [Diversos](/pt_BR/update#Miscellaneous) antes.
:::

O APatch abandonou o suporte para `module.img` desde o commit [b843480](https://github.com/bmax121/APatch/commit/b843480c4f56b6190add41366e3eb7148ebc9b87). Portanto, qualquer APMódulo instalado em versões anteriores será **COMPLETAMENTE PERDIDO** após a atualização para a versão `10977` ou posterior.

Será necessário reinstalar todos os APMódulos instalados anteriormente.
