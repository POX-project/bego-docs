# Fast Charging Module

By default, Xiaomi limits the thermal thresholds for charging to protect battery health, which drastically slows down charging speeds when the screen is on or the device is slightly warm.

## The Fix
This Magisk module overrides the thermal engine configurations specifically for the `mt6360` charging IC on Begonia.

1. Download `Bego_FastCharge_Unlock.zip` from the community dump.
2. Flash it via Magisk/KernelSU.
3. Reboot.

> [!WARNING]
> This module allows the battery to reach higher temperatures (up to 45°C) during fast charging. Do not use your phone for heavy gaming while charging with this module active, as extreme heat degrades battery health rapidly.
