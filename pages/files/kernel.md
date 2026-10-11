# Custom Kernels

Replacing the stock kernel on the Redmi Note 8 Pro can drastically improve battery life, gaming performance, and thermal management. 

## Supported Custom Kernels

Because Begonia uses the MediaTek G90T, the custom kernel scene is smaller than Snapdragon devices, but highly optimized.

- **Foxy Kernel:** Known for extreme gaming performance and overclocking capabilities.
- **KSU Kernels:** Any kernel compiled with **KernelSU (KSU)**. This allows for root access operating purely at the kernel level, hiding it completely from banking apps and SafetyNet without needing Magisk.

## Flashing a Kernel

1. Download the kernel `.zip` file.
2. Reboot into your custom recovery (e.g., BRP).
3. Tap **Install** and select the kernel ZIP.
4. Swipe to flash.
5. Reboot to System.

> [!NOTE]
> If you experience bootloops after flashing a custom kernel, simply return to recovery and dirty flash your ROM's `.zip` file again. This will overwrite the custom kernel with the ROM's default boot.img.

## Compiling from Source

If you want to compile your own kernel for Begonia, you need a Linux environment (Ubuntu 20.04+ recommended) and the appropriate toolchains.

1. **Clone the Source:**
   ```bash
   git clone https://github.com/begonia-dev/android_kernel_redmi_mt6785.git -b lineage-19.1 kernel_begonia
   ```
2. **Setup Toolchain:**
   Download and export the Clang compiler (e.g., Proton Clang).
   ```bash
   export PATH="/path/to/proton-clang/bin:$PATH"
   ```
3. **Compile:**
   ```bash
   cd kernel_begonia
   make O=out ARCH=arm64 begonia_defconfig
   make -j$(nproc --all) O=out ARCH=arm64 CC=clang CROSS_COMPILE=aarch64-linux-gnu- CROSS_COMPILE_ARM32=arm-linux-gnueabi-
   ```
4. **Pack:**
   The resulting `Image.gz-dtb` will be in `out/arch/arm64/boot/`. Use AnyKernel3 to package it into a flashable ZIP.


## Recent Telegram Kernels

- **#ColorOS**: [Download](https://drive.google.com/file/d/1Yb7MSwSVg3n__jf4XwMmOq-WRQvr-lr9/view?usp=drivesdk)
- **#HyperOS**: [Download](https://drive.google.com/file/d/1eBx6eZkk2vXQ0ovMVJ_Shv4nU6UU5Zeg/view?usp=drivesdk)
- **#HyperOS**: [Download](http://2.0.200.0/)
- **#HyperOS**: [Download](http://2.0.200.0/)
- **#HyperOS**: [Download](https://drive.google.com/file/d/1SfhYZfeUoKnIV49yackAWWkR7S21h2Cm/view?usp=drivesdk)
- **#ColorOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/ColorOS/20260725/begonia-ota_full-ColorOS_PLF110_16.0.9.402%28CN01%29-16.0-R1-f859ca176b.zip/download)
- **#ColorOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/ColorOS/20260806/begonia-ota_full-ColorOS_PLF110_16.0.9.402%28CN01%29-16.0-R2-876cd0e7bd.zip/download)
- **#Suzaku**: [Download](https://pixeldrain.com/u/XYWyGVzo)
- **#HyperOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/HyperOS/3.0/20260811/)
- **#Avium**: [Download](https://aviumui.org/download)
- **#HyperOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/HyperOS/2.0/20260703/begonia-ota_full-OS2.0.200.0.UGGCNXM-user-14.0-R9-1c047a3467.zip/download)
- **#HyperOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/HyperOS/3.0/20260710/begonia-ota_full-OS3.0.304.0.WGGCNXM-user-16.0-R1-26e42358a2.zip/download)
- **#HyperOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/HyperOS/3.0/20260713/)
- **#EvolutionX**: [Download](https://pixeldrain.com/u/qzB8PfT4)
- **#EvolutionX**: [Download](https://pixeldrain.com/u/55R5MNkK)
- **#PixelOS**: [Download](https://pixeldrain.com/u/Lige6UaZ)
- **Natively supports Linux containers on DroidSpaces**: [Download](https://github.com/ravindu644/Droidspaces-OSS)
- **#Suzaku**: [Download](https://pixeldrain.com/u/eGFJXx9r)
- **#Suzaku**: [Download](https://pixeldrain.com/u/HSruDCdf)
- **#PixelOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/PixelOS/20260515/PixelOS_begonia-16.2-20260515-0620.zip/download)
- **#EvolutionX**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/EvolutionX/20260526/EvolutionX-16.0-20260525-begonia-11.7-Unofficial.zip/download)
- **#PixelOS**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/PixelOS/20260612/PixelOS_begonia-16.2-20260612-1405.zip/download)
- **#crDroid**: [Download](https://sourceforge.net/projects/wuxin-roms/files/begonia/crDroid/20260619/crDroidAndroid-16.0-20260619-begonia-v12.11.zip/download)
- **#Avium**: [Download](https://aviumui.org/download)
- **#PixelOS**: [Download](https://pixeldrain.com/u/jKSJ1o65)
- **#PixelOS**: [Download](https://pixeldrain.com/u/RdxRwg2P)
- **#HyperOS**: [Download](https://pixeldrain.com/u/mxCSXjmT)