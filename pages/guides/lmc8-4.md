# GCam (LMC 8.4) Setup Guide

The Redmi Note 8 Pro features a powerful 64MP Samsung GW1 sensor. While the stock MIUI camera is decent, using a Google Camera (GCam) port unlocks vastly superior dynamic range, low-light performance, and detail.

For Begonia, the **LMC 8.4** port by Hasli is widely considered the most stable and feature-rich option.

## 1. Install LMC 8.4 APK

1. Download the latest LMC 8.4 APK (e.g., Release 18) from the trusted [Celso Azevedo GCam Hub](https://www.celsoazevedo.com/files/android/google-camera/dev-hasli/).
2. Locate the downloaded `.apk` file in your File Manager and tap to install it.
3. If prompted, grant your File Manager permission to "Install from Unknown Sources".

> [!WARNING]
> Only download GCam APKs from trusted community repositories like Celso Azevedo. Do not download "Premium" or "Pro" GCam apps from random websites, as they often contain malware.

## 2. Setting up the XML Configuration

GCam ports require custom XML configuration files to know how to properly utilize the specific hardware lenses of the Redmi Note 8 Pro. 

1. Open your device's **File Manager**.
2. Navigate to your **Internal Storage** (the root directory).
3. Create a new folder and name it exactly: `LMC8.4` (case-sensitive).
4. Open the `LMC8.4` folder and create a sub-folder inside it named: `Configs`.
5. Download your preferred XML config file for Begonia (often found in Begonia Telegram groups or XDA).
6. Move the downloaded `.xml` file into the `/Internal Storage/LMC8.4/Configs/` folder.

## 3. Importing the Config

Now that your XML file is in the correct location, you must load it into the camera app.

1. Open the **LMC 8.4** camera app.
2. Grant all necessary permissions (Camera, Microphone, Storage) when prompted.
3. **Double-tap** on the dark, empty space right next to the shutter button at the bottom of the screen.
4. A dialog box will pop up displaying the XML files located in your `Configs` folder.
5. Select the XML file you want to use and tap **Import**.

> [!NOTE]
> The camera app will quickly restart. Your XML configuration is now applied! You can store multiple XML files in the Configs folder (e.g., one for daytime, one for night mode) and easily switch between them using the double-tap method.
