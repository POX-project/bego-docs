# Play Integrity & Hide Setup Guide

If you're having trouble with bank apps detecting root or failing SafetyNet/Play Integrity checks, follow this complete setup guide to hide your root and pass device integrity.

### Step-by-Step Setup

1. **Enable Zygisk:** Open your Magisk settings, enable Zygisk, and reboot your device.
2. **Install Hide Modules:** Open Magisk and flash the following modules (depending on your preference):
   - **PlayIntegrityFork:** The core fix for passing Play Integrity.
   - **Shamiko:** Excellent for hiding root without manually configuring a denylist.
   - **ZygiskNext** (Optional): Depending on your setup.
3. **Hide the Magisk App:** Go to Magisk settings, tap "Hide the Magisk app," and give it a random, inconspicuous name.
4. **TrickyStore (Optional for Strong Integrity):** If your specific bank app requires `MEETS_STRONG_INTEGRITY`:
   - Flash the **TrickyStore** module.
   - Place a valid `keybox.xml` file inside `/data/adb/tricky_store/` using a root file manager or TWRP.
5. **Reboot:** Restart your device to apply all the module changes.
6. **Verify:** Download the "Play Integrity API Checker" from the Google Play Store. Run a test and verify that you pass at least `MEETS_DEVICE_INTEGRITY`.

---

> [!TIP]
> You can find the latest download links for these hide modules in the **Bank apps detect root** page under the Troubleshooting section!
