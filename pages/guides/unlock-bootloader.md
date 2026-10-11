# Bootloader Unlock Guide

To install custom ROMs, kernels, or recoveries on your Redmi Note 8 Pro (Begonia), you must first unlock the bootloader. 

> [!WARNING]
> Unlocking your bootloader will **completely wipe all data** on your device (Factory Reset). Please ensure you have backed up your photos, contacts, and important files to your PC or a cloud service before proceeding.

## Prerequisites

1. A Mi Account bound to your device.
2. A Windows PC and a reliable USB cable.
3. Developer Options enabled on your phone.

## Step-by-step Guide

### 1. Enable Developer Options & OEM Unlocking
1. Go to **Settings > About Phone**.
2. Tap on the **MIUI Version** 7 times continuously until you see the pop-up: *"You are now a developer!"*
3. Go back to **Settings > Additional Settings > Developer Options**.
4. Enable **OEM Unlocking** and **USB Debugging**.

### 2. Bind your Mi Account
1. In the Developer Options menu, tap on **Mi Unlock Status**.
2. Agree to the permissions and tap **Add account and device**. 
3. *Note: Ensure you are using mobile data (turn off Wi-Fi) during this step.*

### 3. Download the Mi Unlock Tool
1. On your Windows PC, download the official [Mi Unlock Tool](https://en.miui.com/unlock/download_en.html).
2. Extract the ZIP file and run `miflash_unlock.exe`.
3. Sign in to the tool using the *exact same* Mi Account you bound to your phone.

### 4. Enter Fastboot Mode
1. Turn off your Redmi Note 8 Pro.
2. Press and hold the **Power** + **Volume Down** buttons simultaneously.
3. Release the buttons when you see the "FASTBOOT" logo (the Xiaomi rabbit).
4. Connect your phone to your PC via USB.

### 5. Unlock
1. The Mi Unlock Tool should now display "Phone connected".
2. Click the **Unlock** button.
3. The tool will verify your device and begin the unlock process.

> [!NOTE]
> Xiaomi enforces a mandatory waiting period for new device bindings (typically 168 hours / 7 days). If the tool stops at 99% and gives you a wait time, you must wait the specified number of hours before trying again. **Do not unbind your account or factory reset your phone during this waiting period, or the timer will reset!**
