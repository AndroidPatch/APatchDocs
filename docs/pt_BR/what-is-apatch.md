# O que é APatch?

APatch é uma solução root baseada em kernel para dispositivos Android que funciona no modo kernel e concede privilégios root para apps do espaço do usuário diretamente no espaço do kernel.

## Características

Compatível com a maioria dos dispositivos Android, não apenas limitado a dispositivos com kernel GKI.

Suporta APMódulo (APM) semelhante aos módulos do Magisk.

Suporta KPMódulo (KPM), que permite injetar qualquer código no kernel (Fornece as funções do kernel `inline-hook` e `syscall-table-hook`).

APatch depende do KernelPatch.

A interface de usuário do APatch e o código-fonte do APMódulo foram derivados e modificados a partir do KernelSU.

## Como usar o APatch?

Por favor, consulte: [Instalação](/pt_BR/install)

## Como fazer patch?

Por favor, consulte: [Patch](/pt_BR/install#how-to-patch)

## Licença

```
Copyright (C) 2023 - Presente bmax121 e desenvolvedores do APatch

APatch é um software gratuito: você pode redistribuí-lo e/ou modificá-lo sob os termos da Licença Pública Geral GNU publicada pela Free Software Foundation, versão 3.

Este programa é distribuído na esperança de que seja útil,
mas SEM QUALQUER GARANTIA; mesmo sem a garantia implícita de COMERCIALIZAÇÃO ou ADEQUAÇÃO A UM DETERMINADO FIM.  Veja a Licença Pública Geral GNU para mais detalhes.

Você deverá ter recebido uma cópia da Licença Pública Geral GNU junto com este programa.  Caso contrário, consulte <https://www.gnu.org/licenses/>.
```

## Aviso importante

APatch é um software gratuito, permitindo que todos criem seus forks sob a licença GNU GPLv3, que usamos ou permitimos separadamente do(s) detentor(es) dos direitos.

Os desenvolvedores do APatch enfrentam dificuldades em revisar o código de todas as distribuições de terceiros do APatch (independentemente de ser gratuito ou não). Portanto, os desenvolvedores do APatch não se responsabilizam por quaisquer problemas ocorridos ao usar distribuições de terceiros e **NÃO** fornecem garantia para essas distribuições. Caso tenha problemas, você deve enviar feedback diretamente ao(s) autor(es) da distribuição de terceiros que está usando.
