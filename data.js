// Initial default data for FLAG Church Indoor Media Dashboard
const initialData = {
  churchName: "Full Life Centre AG Church (FLAG)",
  department: "Indoor Media Command Center",
  leader: "Lokesh",
  teamMembers: [
    { id: 1, name: "Lokesh", roles: ["Leader", "Gimbal", "Camera 2"], phone: "" },
    { id: 2, name: "Anand", roles: ["Live in System", "Camera 2"], phone: "" },
    { id: 3, name: "Yashwanth", roles: ["Live in System", "Camera 1", "Battery Incharge"], phone: "7010368793" },
    { id: 4, name: "Shyam Davit", roles: ["Gimbal", "Live in System", "Camera 2"], phone: "" },
    { id: 5, name: "Sam Davit", roles: ["Battery Incharge", "Trainee Editor"], phone: "" },
    { id: 6, name: "Balaji", roles: ["Camera 1", "Camera 2"], phone: "" },
    { id: 7, name: "Andrew", roles: ["Camera 1", "3rd Service Solo"], phone: "" },
    { id: 8, name: "Franklin", roles: ["Camera 1", "3rd Service Solo"], phone: "" },
    { id: 9, name: "Joshua", roles: ["Spot Editing", "Reels Producer"], phone: "" },
    { id: 10, name: "Praveen", roles: ["2nd Service Broadcaster"], phone: "" }
  ],
  roster: {
    month: "October 2026",
    firstService: [
      {
        date: "04 Oct 2026",
        cam1: "Balaji",
        cam2: "Lokesh",
        gimbal: "Shyam Davit",
        liveSystem: "Anand",
        spotEdit: "Joshua",
        charging: "Yashwanth & Sam Davit",
        outsideTv: "Franklin"
      },
      {
        date: "11 Oct 2026",
        cam1: "Andrew & Franklin",
        cam2: "Shyam Davit",
        gimbal: "Lokesh",
        liveSystem: "Yashwanth",
        spotEdit: "Joshua",
        charging: "Yashwanth & Sam Davit",
        outsideTv: "Balaji"
      },
      {
        date: "18 Oct 2026",
        cam1: "Yashwanth",
        cam2: "Balaji",
        gimbal: "Lokesh",
        liveSystem: "Shyam Davit",
        spotEdit: "Joshua",
        charging: "Yashwanth & Sam Davit",
        outsideTv: "Anand"
      },
      {
        date: "25 Oct 2026",
        cam1: "Balaji & Andrew",
        cam2: "Anand",
        gimbal: "Lokesh",
        liveSystem: "Yashwanth & Franklin",
        spotEdit: "Joshua",
        charging: "Yashwanth & Sam Davit",
        outsideTv: "Sam Davit"
      }
    ],
    secondService: [
      { date: "04 Oct 2026", operator: "Praveen", support: "Sam Davit (Trainee)" },
      { date: "11 Oct 2026", operator: "Praveen", support: "Franklin (Support)" },
      { date: "18 Oct 2026", operator: "Praveen", support: "Sam Davit (Trainee)" },
      { date: "25 Oct 2026", operator: "Praveen", support: "Andrew (Support)" }
    ],
    thirdService: [
      { date: "04 Oct 2026", operator: "Andrew", support: "Balaji (Backup)" },
      { date: "11 Oct 2026", operator: "Andrew", support: "Yashwant (Backup)" },
      { date: "18 Oct 2026", operator: "Franklin", support: "Shyam Davit (Backup)" },
      { date: "25 Oct 2026", operator: "Franklin", support: "Anand (Backup)" }
    ],
    fridayPrayer: [
      { date: "02 Oct 2026", cam: "Balaji", live: "Anand" },
      { date: "09 Oct 2026", cam: "Shyam Davit", live: "Yashwant" },
      { date: "16 Oct 2026", cam: "Franklin", live: "Sam Davit" },
      { date: "23 Oct 2026", cam: "Andrew", live: "Lokesh" },
      { date: "30 Oct 2026", cam: "Balaji", live: "Shyam Davit" }
    ]
  },
  checklists: [
    {
      id: "cam-cleaning",
      title: "1. Camera Cleaning",
      incharge: "1st Cam & 2nd Cam Operators",
      timing: "Saturday Evening & Sunday T-75 min",
      items: [
        { id: "cc1", text: "Outer body & tripod wipe-down with dry microfiber cloth", done: false },
        { id: "cc2", text: "Air-blower used on front lens elements to remove loose grit/dust", done: false },
        { id: "cc3", text: "Lens glass cleaned with optical fluid and gentle circular wipe", done: false },
        { id: "cc4", text: "Camera LCD viewfinders degreased and fingerprint-free", done: false },
        { id: "cc5", text: "Tripod pan/tilt locks and quick-release plates verified tight", done: false },
        { id: "cc6", text: "Lens caps reattached after pack-down", done: false }
      ]
    },
    {
      id: "sys-cleaning",
      title: "2. System Cleaning & PC Maintenance",
      incharge: "Live in System Operators (Anand / Yashwant)",
      timing: "Friday Evening & Sunday T-60 min",
      items: [
        { id: "sc1", text: "Recording drive free space checked (> 50 GB available)", done: false },
        { id: "sc2", text: "Previous week recordings archived to church backup drive/NAS", done: false },
        { id: "sc3", text: "OBS / vMix temporary cache and replay buffers cleared", done: false },
        { id: "sc4", text: "PC vents and cooling fans dusted / checked for airflow", done: false },
        { id: "sc5", text: "Fresh PC restart completed at T-60 min before service", done: false },
        { id: "sc6", text: "Windows Updates paused / verified not pending mid-service", done: false }
      ]
    },
    {
      id: "eq-charging",
      title: "3. Equipment Charging",
      incharge: "Yashwant & Sam Davit",
      timing: "Saturday by 7:00 PM & Sunday T-75 min",
      items: [
        { id: "ec1", text: "All primary camera batteries charged to 100% full indicator", done: false },
        { id: "ec2", text: "At least 3-4 spare camera batteries charged and packed in bag", done: false },
        { id: "ec3", text: "Gimbal 3-axis battery handle charged to 100%", done: false },
        { id: "ec4", text: "Director field monitors & wireless video transmitters charged", done: false },
        { id: "ec5", text: "Friday prayer drained batteries docked and recharged", done: false },
        { id: "ec6", text: "Media desk UPS power strip firmly connected and functional", done: false }
      ]
    },
    {
      id: "mic-batteries",
      title: "4. Recharge Mic Batteries",
      incharge: "Charging Incharge & Sound/Live Tech",
      timing: "Saturday Evening & Sunday T-60 min",
      items: [
        { id: "mb1", text: "Preacher wireless lapel/headset transmitter loaded with fresh cells", done: false },
        { id: "mb2", text: "Worship leader & pulpit stage handheld mics battery levels checked", done: false },
        { id: "mb3", text: "Emergency 8-pack fresh AA battery caddy present at media desk", done: false },
        { id: "mb4", text: "Wireless receiver rack displays solid green RF and full battery icon", done: false },
        { id: "mb5", text: "Preacher audio test completed on headphones with zero hiss/crackle", done: false }
      ]
    },
    {
      id: "outside-tv",
      title: "5. Set Up Outside TV & Live Stream Verification",
      incharge: "Assigned Floater / Support Tech",
      timing: "Sunday T-45 min to T-20 min",
      items: [
        { id: "ot1", text: "Outside TV display powered on; HDMI/wireless receiver connected", done: false },
        { id: "ot2", text: "Outdoor HDMI cables taped down securely to prevent tripping hazard", done: false },
        { id: "ot3", text: "Live feed displayed on outside screen at 1080p with no stutter", done: false },
        { id: "ot4", text: "Outdoor audio walk test done during worship soundcheck", done: false },
        { id: "ot5", text: "Volume calibrated loud & clear over street/lobby ambient noise", done: false },
        { id: "ot6", text: "Mid-service verification done during sermon (15 mins in)", done: false }
      ]
    },
    {
      id: "live-procedure",
      title: "6. Sunday Service Live Procedure",
      incharge: "Media Director & Entire Indoor Crew",
      timing: "Sunday T-90 min to T+30 min",
      items: [
        { id: "lp1", text: "T-90 min: Team arrival, devotional scripture, and pre-service prayer", done: false },
        { id: "lp2", text: "T-75 min: Power on switcher, PCs, cameras, and Outside TV", done: false },
        { id: "lp3", text: "T-60 min: Camera white balance matched (4500K-5600K) & focus locked", done: false },
        { id: "lp4", text: "T-45 min: Broadcast audio check on headphones (levels at -18 to -12 dBFS)", done: false },
        { id: "lp5", text: "T-30 min: Sermon slides loaded & lyric lower-thirds tested", done: false },
        { id: "lp6", text: "T-15 min: Pre-service countdown stream started with music loop", done: false },
        { id: "lp7", text: "T-00 min: SERVICE BEGINS - Cam 1 taken as worship team opens", done: false },
        { id: "lp8", text: "Post-Service: Stop Stream ➔ Stop Local Recording ➔ Verify SSD file", done: false },
        { id: "lp9", text: "Post-Service: Hand master video to Joshua (Spot Editor) & pack down gear", done: false }
      ]
    }
  ],
  inventory: [
    { id: "CAM-01", name: "Primary Wide Camera (Sony A7IV)", status: "In Booth", battery: "100%", loc: "Balcony Tripod" },
    { id: "CAM-02", name: "Medium Close-up Camera (Sony A6400)", status: "In Booth", battery: "100%", loc: "Stage Floor Tripod" },
    { id: "CAM-03", name: "Roaming / Gimbal Camera (Sony A7C)", status: "In Booth", battery: "95%", loc: "Media Cabinet" },
    { id: "GMB-01", name: "Motorized 3-Axis Gimbal (DJI RS3)", status: "In Booth", battery: "100%", loc: "Media Case A" },
    { id: "SW-01", name: "Blackmagic ATEM Mini Pro Switcher", status: "Active", battery: "AC Power", loc: "Control Desk" },
    { id: "MIC-01", name: "Wireless Lapel / Headset Transmitter", status: "Ready", battery: "100%", loc: "Sound Rack" },
    { id: "AUD-01", name: "Ambient Room Condensers (Pair)", status: "Mounted", battery: "Phantom 48V", loc: "Sanctuary Truss" },
    { id: "BAT-01", name: "Camera Battery Charging Bank (6-Slot)", status: "Docked", battery: "Active", loc: "Charging Shelf" }
  ],
  spotLogs: [
    {
      time: "00:38:15",
      speaker: "Senior Pastor",
      topic: "Your storm is not your tomb, it is your classroom",
      rating: 5,
      status: "Ingested"
    },
    {
      time: "00:52:20",
      speaker: "Senior Pastor",
      topic: "Closing prophetic declaration over youth & children",
      rating: 4,
      status: "Ready for Reel"
    }
  ],
  cueSheet: [
    { time: "07:00 AM", duration: "15m", segment: "Pre-Service Countdown Loop", camCue: "Scene 1: Countdown Video", audioCue: "Instrumental BGM (-16 dBFS)", done: false },
    { time: "07:15 AM", duration: "15m", segment: "Opening Prayer & Fast Praise", camCue: "Cam 1 Wide ➔ Cam 3 Gimbal (Fast Cuts)", audioCue: "Full Band + Ambient Mics Up", done: false },
    { time: "07:30 AM", duration: "15m", segment: "Deep Worship & Adoration", camCue: "Cam 2 Lead Tight (Slow Cross-Dissolves)", audioCue: "Ambient Room Mics at -10 dB", done: false },
    { time: "07:45 AM", duration: "10m", segment: "Welcome & Announcements", camCue: "Cam 1 Medium Wide (Centered)", audioCue: "Room Mics Down (-25 dB)", done: false },
    { time: "07:55 AM", duration: "10m", segment: "Tithe & Offering Song", camCue: "Cam 3 Instrument Focus + Giving Slide", audioCue: "Balanced Music Mix", done: false },
    { time: "08:05 AM", duration: "40m", segment: "The Sermon (God's Word)", camCue: "75% Cam 2 (Preacher Chest-Up)", audioCue: "Preacher Mic Priority (-14 dBFS)", done: false },
    { time: "08:45 AM", duration: "10m", segment: "Altar Call & Ministry Prayer", camCue: "Cam 1 Wide Stage + Cam 2", audioCue: "Soft Acoustic Pad / Prayer", done: false },
    { time: "08:55 AM", duration: "05m", segment: "Benediction & Stream Outro", camCue: "Scene 6: Outro Slide & Giving QR Code", audioCue: "Outro Worship Loop 60s", done: false }
  ]
};

