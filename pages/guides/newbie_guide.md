# Newbie Install Guide

## Clean Flashing guide for MIUI

1. **Unlock Bootloader**
2. Firstly Update your phone to latest MIUI 12.5 Android 11 as this method will not work on older Android versions below Android 11.
3. Download `BRP3.5.2v3.1-fastboot.zip` from [Here](https://www.pling.com/p/1556862/) (By @Santoshhh000)
4. Press and hold **Power + Volume Down** buttons on phone to boot into fastboot mode and connect your phone to PC through USB Cable.
5. Extract the recovery zip in PC and open the extracted folder.
6. Double click on `1.FlashBRPMiuiA11Unified.bat` and your device will reboot into custom recovery.

> [!WARNING]
> It's important to backup your IMEI before flashing anything! In the recovery click on **Backup** and then select `NVDATA`, `NVRAM`, `NVCFG`, `protect_f`, `protect_s`, `persist`. Swipe to start the backup process. After the backup of these partitions is completed, transfer the TWRP folder containing the backup files from your internal storage to a safe location, such as your PC or Google Drive.

Now transfer your rom zip through PC to phone and follow below Clean Flashing for custom rom steps properly.

## Clean Flashing for Custom Roms

1. Boot into your custom recovery
2. Select **Wipe** > **Advance Wipe**
3. Select `System`, `Vendor`, `Data`, `Dalvik`, `Cache`
4. Swipe to Wipe
5. Select **Install** > **Flash ROM**
6. Reboot to Recovery
7. Select **Wipe** > **Format Data** > Type "yes"
8. Reboot to System.
9. Flash any KSU kernel if you want root
10. Flash Magisk (if needed) only after booting to system

## Dirty Flashing

1. Reboot to Recovery
2. Select **Install** > Select the ROM file > Swipe to Flash
3. Flash KSU kernel OR Magisk (if flashed previously)
4. Reboot to System

> [!NOTE]
> To turn off Blur: **Settings** > **Display** > turn off "Allow window-level blurs"
