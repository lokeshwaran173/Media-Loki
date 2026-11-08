# FLAG Church - Broadcast Audio Mixing & Sync Guide
**Church:** Full Life Centre AG Church (FLAG)  
**Applicable To:** Sound Engineers, Live System Switchers (Anand, Yashwant, Shyam Davit), and Team Leader (Lokesh)

---

## 1. The Fundamental Problem: Sanctuary vs. Broadcast Sound

Why does the livestream sound thin, dry, or out of balance even when it sounds great inside the church hall?

* **Inside the Sanctuary (FOH):** Drums, electric guitar amplifiers, and acoustic choir voices are naturally loud in the room. The sound engineer turns them down in the house speakers.
* **On the Live Stream:** Because those instruments were turned down on the main mixer, the online viewer hears only faint drums, loud vocals, and complete dead silence from the congregation.

---

## 2. The Broadcast Audio Architecture

```
[ Sanctuary Sound Mixer (Behringer X32 / Allen & Heath / Yamaha / Analog) ]
                               │
               ┌───────────────┴───────────────┐
               │                               │
       [ Main FOH Stereo ]             [ Aux / Matrix Send 1-2 ]
               │                               │
      (Sanctuary Speakers)           (Dedicated Broadcast Mix)
                                               │
                                      + [ Ambient Room Mics ]
                                               │
                                     [ Audio Interface / PC ]
                                               │
                                     [ Sync Delay Buffer ] (120-250ms)
                                               │
                                       [ Live Stream OBS/vMix ]
```

---

## 3. Dedicated Broadcast Mix Settings

### A. Ambient Room Microphones (The "Church Atmosphere")
* **Placement:** Position two boundary or cardioid condenser microphones on either side of the stage or hung from the ceiling, **facing the congregation** (away from stage monitors).
* **Mixing Rule:**
  * When the worship team is singing, bring the room mics up to **-10 dB** to capture the church singing along.
  * When the pastor begins speaking or praying, pull the room mics down to **-25 dB** to prevent hollow room echo.

### B. Target Decibel Levels (LUFS & dBFS)

| Target Metric | Ideal Value | Purpose |
| :--- | :--- | :--- |
| **Average Stream Loudness** | **-14 LUFS** (or -16 LUFS) | Matches YouTube & Facebook native normalization standards. |
| **Peak Ceiling** | **-1.0 dB True Peak** | Never allow audio to hit 0.0 dBFS (causes digital distortion/crunch). |
| **Pastor / Preacher Dialogue** | **-18 dBFS to -14 dBFS** | Crisp, intimate, easily understandable on mobile phones. |
| **Full Worship Climax** | **-14 dBFS to -10 dBFS** | Full, powerful, energetic without distorting. |

### C. Master Broadcast Bus Processing Chain
1. **High-Pass Filter (HPF):** Cut all frequencies below **60 Hz** to eliminate stage footstep rumble and air conditioner thumps.
2. **Parametric EQ:** Gentle scoop at **300 Hz - 400 Hz** to remove boxiness/muffiness from vocals.
3. **Master Bus Compressor:**
   * Ratio: `2:1` or `3:1`
   * Attack: `30ms` (allows natural vocal transients through)
   * Release: `100ms`
   * Gain Reduction: No more than `2 - 4 dB` on peaks.
4. **Brickwall Limiter:** Set ceiling at `-1.0 dB`. This protects online listeners from unexpected microphone drops or loud shouting.

---

## 4. Lip-Sync & Video Delay Calibration (Crucial)

HDMI and SDI capture cards take longer to process video frames than an audio card takes to process sound. As a result, **audio almost always arrives 80ms to 250ms faster than the video** (the pastor's lips move after you hear the words).

### How to Fix Lip-Sync in OBS Studio / vMix:
1. In OBS Studio, click the **Gear Icon** next to the Audio Mixer ➔ Select **Advanced Audio Properties**.
2. Locate the **Broadcast Audio Input** channel.
3. Adjust the **Sync Offset (ms)**:
   * Typical starting value: **`150 ms` to `200 ms`**.
4. **The "Hand Clap" Test:**
   * Have someone stand in front of Camera 1 on stage and clap their hands loudly 3 times.
   * Record a 15-second test clip.
   * Play it back frame-by-frame: adjust the sync offset until the exact frame the two hands meet aligns perfectly with the audio spike of the clap.

