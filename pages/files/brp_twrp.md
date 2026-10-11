# BRP TWRP (Begonia Recovery Project)

The **Begonia Recovery Project (BRP)** is a custom recovery built specifically for the Redmi Note 8 Pro. Based on TWRP, it has been highly modified by developers like Santoshhh000 to handle the unique quirks of the MediaTek G90T chipset and modern partition layouts.

## Why BRP instead of official TWRP?

As Android progressed from A10 to A11 and beyond, Xiaomi introduced structural changes to the firmware. Standard TWRP builds often struggle with decryption on Android 11/12+ and frequently fail to properly manage retrofit dynamic partitions on Begonia.

BRP specifically includes:
- Out-of-the-box support for MIUI 12.5 A11 firmware.
- Full support for reading, formatting, and flashing dynamic partitions (super partition).
- Working decryption for Android 11, 12, and 13 data formats.
- Specialized formatting scripts to prevent MediaTek preloader bricks.

## Installation via Fastboot

To install BRP, you must have an unlocked bootloader.

1. Download the latest `BRP-fastboot.zip` from XDA or Telegram.
2. Extract the ZIP file on your Windows PC.
3. Reboot your phone into Fastboot mode (Hold **Power** + **Volume Down**).
4. Connect the phone to your PC.
5. In the extracted folder, run the provided `.bat` file (e.g., `1.FlashBRPMiuiA11Unified.bat`).
6. The script will flash the recovery image to the `recovery` partition and automatically reboot the device into BRP.

> [!WARNING]
> The first time you boot into BRP, you must back up your `NVRAM`, `NVDATA`, and `persist` partitions to external storage. Losing these partitions will result in a loss of your IMEI and cellular connectivity, which is extremely difficult to recover on MediaTek devices without SP Flash Tool authorized accounts.
