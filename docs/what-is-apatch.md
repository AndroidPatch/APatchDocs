# What is APatch?

APatch is a kernel-based root solution for Android devices that works in kernel mode and grants root privileges to user space apps directly in kernel space.

## Features

Compatible with most Android devices, not just limited to devices with GKI kernel.

Supports APModule (APM) similar to Magisk modules.

Supports KPModule (KPM), which allows to inject any code into kernel (Provides kernel function `inline-hook` and `syscall-table-hook`).

APatch relies on KernelPatch.

The APatch UI and the APModule source code have been derived and modified from KernelSU.

## How to use APatch?

Please read this: [Installation](/install)

## How to patch?

Please read this: [Patch](/install#how-to-patch)

## License

```
Copyright (C) 2023 - Present bmax121 and APatch Developers

APatch is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

## Important notice

APatch is a free software, allows everyone to create their forks under GNU GPLv3 we used or seperately permit from rights holder(s).

APatch developers are difficult to review the code of every third-party distributions of APatch (regardless its free or not), APatch developers will have no responsibility about any issues occured when you using any third-party distribution of APatch, and APatch developers do **NOT** provide and warrenty to third-party distributions, you need to directly make a feedback to the author(s) of the third-party distribution you are using.
