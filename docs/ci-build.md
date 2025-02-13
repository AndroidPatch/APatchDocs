# Special notes about CI build after version 10977

::: info
We've noticed this issue in [Miscellaneous](update#miscellaneous) before.
:::

APatch has dropped support to `module.img` since commit [b843480](https://github.com/bmax121/APatch/commit/b843480c4f56b6190add41366e3eb7148ebc9b87). Therefore, any APModule installed in previous versions will be **COMPLETELY LOST** after updating to version `10977` or later.

You will need to reinstall all APModules that were installed previously.
