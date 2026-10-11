# Dynamic Partitions on Begonia

Dynamic partitions are a userspace partitioning system introduced by Google that allows creating, destroying, and resizing partitions during over-the-air (OTA) updates. 

Instead of having hardcoded sizes for `system`, `vendor`, and `product` partitions, Android groups them into a single, massive physical partition called `super`.

## Native vs Retrofit Dynamic

The Redmi Note 8 Pro (Begonia) launched with Android 9, meaning it **did not** have dynamic partitions out of the box (native dynamic). 

To support modern Android 12, 13, and 14 custom ROMs, the Begonia development community utilizes **Retrofit Dynamic Partitions**. 

### How Retrofit Works
Since Begonia lacks a physical `super` partition, retrofit dynamic ROMs spoof the partition layout. They take the existing physical `system` and `vendor` partitions and combine them logically into a virtual `super` partition. 

This allows modern AOSP ROMs to dynamically size their system and vendor images inside that combined space without requiring the user to re-partition the actual eMMC flash storage at a low level, which is highly dangerous on MediaTek devices.

## Requirements for Flashing Dynamic ROMs

If you are transitioning from an older, non-dynamic Android 10 ROM to a modern dynamic ROM, you must:

1. **Use a Dynamic Recovery:** Standard TWRP cannot understand virtual super partitions. You must use [BRP TWRP](#brp_twrp) or a dedicated dynamic recovery.
2. **Format Data:** Because the partition mapping fundamentally changes in the kernel and recovery, you must format data (typing "yes") when switching to your first dynamic ROM.

> [!NOTE]
> Once you are on a dynamic partition setup, flashing updates (dirty flashing) within the same ROM family works exactly the same as it always has. The recovery handles the dynamic resizing in the background.
