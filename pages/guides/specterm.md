# SpecTerm (Terminal Guide)

SpecTerm is a highly optimized terminal emulator for Android, preferred by many developers over Termux for executing local shell scripts.

## Usage for Begonia
Many advanced optimizations (like [DexPot](#dexpot)) require running `.sh` scripts.

1. Download SpecTerm from the Telegram dump.
2. Open the app and grant Storage permissions.
3. Type `su` to request Magisk root access.
4. To run a script located in your downloads folder, use:
   ```bash
   sh /storage/emulated/0/Download/script_name.sh
   ```
