# Dynamic Clean Flash

Flashing a new dynamic ROM on a device that originally shipped with non-dynamic partitions requires a specific sequence of wipes to avoid corrupting the virtual super partition.

## Step-by-Step
1. Boot into a dynamic-supported recovery (like [BRP TWRP](#brp_twrp)).
2. Go to **Wipe** > **Advanced Wipe**.
3. Select `Dalvik / ART Cache`, `Cache`, `System`, `Vendor`, and `Data`. Swipe to wipe.
4. Go back to the main menu and select **Install**.
5. Flash your Dynamic ROM `.zip`.
6. Go back to **Wipe** > **Format Data** and type `yes`.

> [!CAUTION]
> If you are coming from a non-dynamic ROM (like official MIUI 12.0), you MUST flash the MIUI 12.5 A11 firmware FIRST before attempting a dynamic clean flash.
