# DexPot (Dalvik Explorer & Optimizer)

DexPot is a specialized script designed to aggressively optimize the Dalvik cache and ART runtime for MediaTek devices, leading to faster app launch times and reduced jitter.

## How it works
It forces the Android runtime to compile all installed applications using the `speed-profile` or `everything` filter rather than the default `quicken` filter.

## Usage
1. Open a terminal emulator (like Termux) or connect via `adb shell`.
2. Type `su` to grant root access.
3. Run the DexPot script:
   ```bash
   sh /sdcard/Download/dexpot.sh
   ```
4. Wait for the compilation to finish. It may take 10-15 minutes and your device will get warm.

> [!WARNING]
> Do not interrupt the script while it is optimizing packages, as it may result in apps force-closing.
