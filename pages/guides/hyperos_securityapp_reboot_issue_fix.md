# HyperOS Security App Reboot Fix

If you are using a ported HyperOS ROM and experiencing random reboots (especially when clearing RAM or running virus scans), the culprit is usually an incompatible `Joyose` or Security App background service.

## The Fix
You need to replace the ported Security app with a stable global variant.

1. Download the `Security_Fix_Begonia.apk` from the [Telegram Dump](https://t.me/begoniadump789).
2. Install it as a normal update.
3. If it fails to install, you must push it manually:
   - Root your device.
   - Use a root file explorer to navigate to `/system/product/priv-app/SecurityCoreAdd/`.
   - Replace the APK inside with the fixed version.
   - Set permissions to `rw-r--r--` (644).
   - Reboot.
