# Idle Optimizer (Doze Tweaks)

MediaTek devices are notorious for high idle drain, especially on custom AOSP ROMs where the vendor ril (cellular radio) keeps the device awake.

## Universal GMS Doze
The most effective way to fix this is by forcing Google Play Services to sleep.

1. Install the **Universal GMS Doze** Magisk module.
2. Reboot.

## Advanced Wakeblocker
If you are still losing more than 1% battery per hour overnight:
1. Download [Franco Kernel Manager](https://play.google.com/store/apps/details?id=fk.kernel.manager).
2. Go to **Wakelocks**.
3. Block the following MTK-specific wakelocks:
   - `mtk_rild_wakelock`
   - `wlan_rx_wake` (Only if Wi-Fi drain is high)
