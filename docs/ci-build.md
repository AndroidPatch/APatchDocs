# Special notes about CI build after version 10977

::: info
We have noticed about this issue at [Miscellaneous](update#miscellaneous) before.
:::

APatch droped support to `module.img` since commit [b843480](https://github.com/bmax121/APatch/commit/b843480c4f56b6190add41366e3eb7148ebc9b87), so any APModules installed during using any APatch instances before this version will **COMPLETELY LOST** after update to version `10977` and later.

You will need to reinstall all APModules which you installed before.