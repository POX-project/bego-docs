# KProfiles Guide

KProfiles is a kernel-level framework that allows you to switch between predefined performance profiles (Battery, Balanced, Performance) without manually tweaking CPU frequencies.

## Setup
1. Ensure your custom kernel supports KProfiles (check the release notes of your kernel).
2. Flash the kernel.
3. Go to **Settings** > **Display**. If the kernel supports it, you will see a new menu called **KProfiles** injected directly into your Android settings.
4. Alternatively, you can use the KProfiles QS (Quick Settings) tile to switch modes on the fly from your notification shade.

- **Battery:** Limits CPU clocks, forces aggressive Doze.
- **Balanced:** The default stock experience.
- **Performance:** Pins CPU frequencies to maximum for gaming.
