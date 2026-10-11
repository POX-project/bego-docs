# Sandboxed GMS (Google Mobile Services)

For users running privacy-focused ROMs like [/e/OS](#rom_mirror) or LineageOS without GApps, you may still need Google Play Services for push notifications or specific banking apps.

## MicroG
Instead of installing full GApps, use **MicroG**, a lightweight, open-source clone of Google Play Services.

1. If your ROM supports Signature Spoofing (most custom ROMs do), download the `MinMicroG` Magisk module.
2. Flash it via Magisk.
3. Open the MicroG settings app and enable **Google Device Registration** and **Cloud Messaging** for push notifications to work.

This gives you the benefits of Google services without the battery drain and telemetry of the official GApps packages.
