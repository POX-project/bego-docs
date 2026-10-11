# HyperOS Glass Blur Enabler

Many HyperOS and MIUI 14 ports for Begonia disable the beautiful real-time Gaussian blur effects in the Control Center and Recents menu to save memory on 6GB RAM variants.

## Enabling the Blur
This Magisk module injects the necessary properties into `build.prop` to trick the system into thinking it is a high-end flagship device.

1. Download `HyperOS_Blur_Enabler_Begonia.zip`.
2. Flash via Magisk.
3. Reboot.

If the blur is still grey:
1. Open a root terminal.
2. Run: `setprop ro.surface_flinger.has_wide_color_display true`
3. Restart the system UI: `killall com.android.systemui`
