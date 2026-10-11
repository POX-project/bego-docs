# Reset Battery Cycles

If you have physically replaced the battery in your Begonia, the charging IC still remembers the degraded stats of the old battery, leading to inaccurate battery percentages and premature shut-offs.

## How to Reset
You need root access to reset the PMIC (Power Management IC) stats.

1. Open a terminal emulator (Termux).
2. Type `su` to grant root.
3. Run the following commands to delete the battery stat binaries:
   ```bash
   rm /data/system/batterystats.bin
   rm /data/vendor/nvram/APCFG/APRDEB/battery_cycle
   ```
4. Turn off the phone.
5. Charge it to 100% while powered off.
6. Turn it on. The system will rebuild fresh battery statistics.
