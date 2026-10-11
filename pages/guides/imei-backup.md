# IMEI / NVRAM Backup

> [!CAUTION]
> This is the most critical step before modding a MediaTek device. If you wipe the `nvdata` or `nvram` partitions by mistake, you will lose your IMEI, cellular signal, and MAC addresses permanently.

## How to Backup in BRP TWRP
1. Boot into [BRP TWRP](#brp_twrp).
2. Tap **Backup**.
3. Select the following partitions:
   - `nvram`
   - `nvdata`
   - `nvcfg`
   - `protect_f`
   - `protect_s`
   - `persist`
4. Swipe to backup.
5. **CRITICAL:** Connect your phone to your PC and copy the `TWRP` folder from your internal storage to your computer's hard drive or cloud storage. Do not leave the only copy on your phone!
