// Initial default data for FLAG Church Indoor Media Dashboard
const initialData = {
  churchName: "Full Life Centre AG Church (FLAG)",
  department: "Indoor Media Command Center",
  leader: "Lokesh",
  teamMembers: [
    { id: 1, name: "Lokesh", roles: ["Leader", "Gimbal", "Camera 2"], phone: "+91 70103 68793" },
    { id: 2, name: "Balaji", roles: ["Camera 1", "Camera 2"], phone: "+91 80560 44254" },
    { id: 3, name: "Shyam David", roles: ["Gimbal", "Live in System", "Camera 2"], phone: "+91 86818 54526" },
    { id: 4, name: "Sam Joshua", roles: ["Battery Incharge", "Camera"], phone: "+91 81110 63598" },
    { id: 5, name: "Praveen doss", roles: ["2nd Service Cam & Live"], phone: "+91 78100 33166" },
    { id: 6, name: "Sanjay", roles: ["Gimble", "Camera"], phone: "+91 70928 15470" },
    { id: 7, name: "Mathew", roles: ["Camera", "Live in System"], phone: "+91 96001 34194" },
    { id: 8, name: "Jose", roles: ["Camera", "Media Operations"], phone: "+91 85319 72562" },
    { id: 9, name: "Joshua", roles: ["Spot Editing", "Reels Producer"], phone: "+91 78718 97417" },
    { id: 10, name: "Karthik", roles: ["Live System", "Media Tech"], phone: "+91 74181 48641" },
    { id: 11, name: "Kailash", roles: ["Camera", "Spot Editing"], phone: "+91 79045 07246" },
    { id: 12, name: "Aandross", roles: ["2nd Service Cam & Live"], phone: "+91 86675 67203" },
    { id: 13, name: "Anand", roles: ["Live in System", "Camera 2"], phone: "+91 63791 69115" },
    { id: 14, name: "Aaron", roles: ["Camera", "Live in System"], phone: "+91 88078 04614" },
    { id: 15, name: "Yashwanth", roles: ["Live in System", "Camera 1", "Battery Incharge"], phone: "+91 70103 68793" },
    { id: 16, name: "Andrew", roles: ["Camera 1", "3rd Service Solo"], phone: "" },
    { id: 17, name: "Franklin", roles: ["Camera 1", "3rd Service Solo"], phone: "" }
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
      id: "cam-maint",
      title: "1. Camera Maintenance",
      timing: "Every Saturday Preparation",
      items: [
        { id: "cm1", text: "Clean all cameras (Camera 1 and Camera 2).", done: false },
        { id: "cm2", text: "Ensure cameras are functioning properly.", done: false }
      ]
    },
    {
      id: "sys-equip",
      title: "2. System & Equipment Cleaning",
      timing: "Every Saturday Preparation",
      items: [
        { id: "se1", text: "Clean the streaming system / PC.", done: false },
        { id: "se2", text: "Clean all tripods.", done: false },
        { id: "se3", text: "Clean the Setup area.", done: false }
      ]
    },
    {
      id: "charge-batt",
      title: "3. Charging & Battery Preparation",
      timing: "Every Saturday Preparation",
      items: [
        { id: "cb1", text: "Charge the Gimbal.", done: false },
        { id: "cb2", text: "Charge all camera batteries.", done: false },
        { id: "cb3", text: "Recharge all Mic batteries.", done: false }
      ]
    },
    {
      id: "live-proc",
      title: "4. Sunday Service Live Procedure",
      timing: "Every Saturday Preparation",
      items: [
        { id: "lp1", text: "Prepare and update the Sunday Service Live Procedure.", done: false },
        { id: "lp2", text: "Verify the streaming workflow.", done: false },
        { id: "lp3", text: "Check audio and video settings.", done: false }
      ]
    },
    {
      id: "outside-tv",
      title: "5. Outside TV & Live Stream Testing",
      timing: "Every Saturday Preparation",
      items: [
        { id: "ot1", text: "Set up the outside TV.", done: false },
        { id: "ot2", text: "Connect and test the TV display.", done: false },
        { id: "ot3", text: "Check whether the live stream is working properly.", done: false },
        { id: "ot4", text: "Verify audio and video output on the outside TV.", done: false }
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

