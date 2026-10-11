# Gamers Extreme Tuning

Begonia's Helio G90T is a powerhouse, but aggressive thermal throttling holds it back in heavy games like Genshin Impact or PUBG Mobile.

## The Gamers Extreme Setup
For the absolute highest framerates, you need a combination of a custom kernel and thermal unthrottling.

1. **Kernel:** Flash [Foxy Kernel](#kernel) via TWRP.
2. **Thermals:** Install the `Begonia_NoThermal_Extreme.zip` Magisk module.
3. **GPU Governor:** Use a kernel manager (like FKM) to set the GPU governor to `performance`.

> [!CAUTION]
> This setup completely disables thermal throttling. Your device WILL get extremely hot (50°C+). You must use a physical thermoelectric cooling fan (like a BlackShark cooler) to prevent hardware damage or motherboard warping.
