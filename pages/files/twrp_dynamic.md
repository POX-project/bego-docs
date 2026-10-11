# TWRP (Dynamic)

If you prefer the classic TWRP interface over BRP, this is a modified version of the official TWRP codebase specifically patched to support Retrofit Dynamic Partitions on Begonia.

## Features
- Full support for wiping/flashing logical partitions (`system_a`, `vendor_a`, etc).
- F2FS filesystem compression support.
- Decryption for Android 12+.

## Installation
1. Reboot to Fastboot.
2. Run: `fastboot flash recovery twrp_dynamic_begonia.img`
3. Hold Volume Up + Power to boot directly into recovery.
