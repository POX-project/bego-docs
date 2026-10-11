# Stuck on bootanimation for 30+ minutes

**Cause:** Incompatible Gapps or Magisk

**Fix:** Reboot to recovery. Flash ROM again without Gapps and Magisk. Boot once. Then flash Gapps and Magisk.


---

### Important Tips & Notes
1. **Flash order:** Firmware > ROM > GAPPS > Magisk
2. Use TWRP 3.7.0 by nebrassy. It is the most stable for begonia.
3. **Do not** flash ROMs for other devices like beryllium or lavender. It will brick the phone.
4. Always take Nandroid backup in TWRP before flashing anything new.
5. For Android 13 and 14 ROMs you must flash 12.5.8 Firmware first.
6. For SafetyNet/Play Integrity: Enable Zygisk in Magisk. Install Play Integrity Fix and TrickyStore modules.
7. If you want MIUI apps on AOSP use MIUI Core for A13/A14 only.
8. begonia and begoniaglobal use the same files. But check maintainer notes.
9. Do not mix MIUI firmware with wrong Android version.
10. Clean flash is better than dirty flash when switching ROMs.
