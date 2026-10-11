# GSI & ROM Porting Guide

Porting a Generic System Image (GSI) or bringing up a new device tree for the Redmi Note 8 Pro requires a solid understanding of the MediaTek platform and Android's Project Treble architecture.

## Generic System Images (GSI)

The easiest way to port a new Android version to Begonia is by flashing a GSI over a stable vendor base.

### Flashing a GSI
1. Download an ARM64 A/B (or AB) GSI from the Phhusson Treble forums.
2. Download a stable, Begonia-specific vendor image (usually extracted from a stable LineageOS or MIUI 12.5 build).
3. In BRP TWRP, flash the vendor image to the `Vendor` partition.
4. Flash the GSI `.img` file to the `System` partition.
5. Format Data and reboot.

> [!WARNING]
> GSIs are generic. Expect hardware-specific bugs such as Bluetooth audio issues, broken VoLTE, or camera artifacting due to missing MTK vendor blobs.

## Device Tree Bring-up

If you are compiling a ROM from source, you will need a device tree, vendor tree, and kernel source.

### MediaTek Vendor Blobs
The Helio G90T is notorious for its complex, closed-source vendor blobs. When porting or rebasing to a new Android version (e.g., A13 to A14), you must heavily rely on the `vndk` (Vendor NDK) compatibility matrix. 

Key proprietary blobs you must retain and inject into your build include:
- `libcam.hal3a.so` (and associated camera dependencies)
- MTK Audio HALs
- RIL (Radio Interface Layer) blobs for cellular connectivity.

### Essential Repositories
- **Device Tree:** Check the `begonia-dev` GitHub organizations for the most up-to-date AOSP device trees.
- **Kernel:** The pre-built kernel provided in most device trees is stable, but compiling your own using the [Kernel Guide](#kernel) is recommended for debugging.
