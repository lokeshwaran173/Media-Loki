# FLAG Church - Streaming PC & Switcher Configuration Guide
**Church:** Full Life Centre AG Church (FLAG)  
**Applicable To:** Live System Operators (Anand, Yashwant, Shyam Davit, Praveen, Andrew, Franklin)

---

## 1. Optimal Stream Encoder Settings (OBS Studio / vMix)

### Video Output Standards (YouTube & Facebook Live)

| Setting | Recommended Value | Reason |
| :--- | :--- | :--- |
| **Base Canvas Resolution** | `1920 x 1080` | Native 1080p HD |
| **Output (Scaled) Resolution**| `1920 x 1080` | Crisp readability on smart TVs & desktop monitors |
| **Frame Rate (FPS)** | `50 fps` or `60 fps` (or `30 fps` if internet < 10 Mbps upload) | Smooth motion for worship team & instruments |
| **Rate Control** | **CBR** (Constant Bitrate) | Crucial for streaming stability without buffer stutter |
| **Bitrate** | **6,000 Kbps** (6.0 Mbps) | Perfect balance for 1080p60 on YouTube Live |
| **Keyframe Interval** | **2 seconds** | Mandatory standard for YouTube and Facebook streaming |
| **Encoder** | **NVIDIA NVENC H.264** (or AMD AMF / Apple Silicon) | Offloads encoding from CPU to GPU, preventing frame drops |
| **Preset** | `P5: Slow (Good Quality)` or `Max Quality` | Clean picture without pixelation |
| **Tuning** | `High Quality` | Maximum visual clarity |

---

## 2. Standard Scene Architecture in OBS / Switcher

To keep the live broadcast clean and predictable, program your software with these standard scenes:

```
[ Scene 1: PRE-SERVICE COUNTDOWN ]
  ├── 10-Minute Video Countdown Timer
  ├── Background Worship Instrumental Audio
  └── Lower-Third Church Logo & Welcome Message

[ Scene 2: STAGE MASTER (WIDE) ]
  ├── Video: Camera 1 (Center Balcony/Floor Wide)
  ├── Audio: Broadcast Master Mix
  └── Overlay: Song Lyric Lower-Thirds (Transparent NDI/Chroma Key)

[ Scene 3: PREACHER FOCUS (MEDIUM) ]
  ├── Video: Camera 2 (Chest-up on Preacher)
  ├── Audio: Broadcast Master Mix
  └── Overlay: Preacher Name & Title Lower-Third

[ Scene 4: DYNAMIC / WORSHIP (SIDE) ]
  ├── Video: Camera 3 (Gimbal / 45-degree angle / Musicians)
  ├── Audio: Broadcast Master Mix
  └── Overlay: Song Lyric Lower-Thirds

[ Scene 5: SPLIT SCREEN (PREACHER + SLIDE) ]
  ├── Left 60%: Camera 2 (Preacher cropped)
  ├── Right 40%: Presentation Slide / Scripture (ProPresenter/PowerPoint)
  └── Audio: Broadcast Master Mix

[ Scene 6: POST-SERVICE / THANKS FOR WATCHING ]
  ├── Outro Graphic / Giving Details (GPay/UPI/Bank Transfer)
  ├── Background Instrumental Music
  └── Social Media Handles (@FLAGChurch)
```

---

## 3. Redundant Dual-Recording Configuration

**Never rely only on YouTube's cloud archive.** In OBS / vMix, always configure independent local recording settings:

1. Go to **Settings ➔ Output ➔ Recording Tab**.
2. **Recording Path:** Set to a fast dedicated external SSD or secondary internal drive (e.g., `D:/FLAG_Recordings/`).
3. **Recording Format:** Select **MKV** (or Fragmented MP4).
   * *Why MKV?* If the power accidentally cuts or the PC crashes mid-service, an MKV file remains completely safe and uncorrupted up to the exact second of the crash. Standard MP4 files corrupt completely if not cleanly closed.
4. **Auto-Remux to MP4:** Enable *"Automatically remux to mp4 in Advanced Settings"* so OBS converts the finished file to MP4 automatically when you press "Stop Recording".
5. **Video Quality:** Set to **High Quality / Indistinguishable Quality** (CQC / CQP 18-20) for 1080p archival.

---

## 4. 15-Minute Pre-Stream Sanity Check
Before clicking "Start Streaming", the Live System Operator must verify:
- [ ] Network connection is **wired Ethernet** (Wi-Fi turned OFF on the streaming PC).
- [ ] Speedtest verified upload speed is **at least 2x the stream bitrate** (e.g., at least 15–20 Mbps upload).
- [ ] Stream title, description, and thumbnail updated in YouTube Studio.
- [ ] Audio meters bouncing healthily between **-18 dB and -12 dB** (no red clipping).
- [ ] Recording drive has at least **30 GB of free space**.

