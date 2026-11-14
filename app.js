// FLAG Church - Indoor Media Application Logic

// Official Full Life Centre AG Church Indoor Media Crew Directory & Contacts
const DEFAULT_MEMBER_ROLE = "Media Crew Member";
const CURRENT_MEMBER_ROLES_VERSION = 1;
const CURRENT_CREW_DIRECTORY_VERSION = 2;
const DEFAULT_LEADER_NAME = "Lokesh";
const DEFAULT_LEADER_PHONE = "916380795436";
const SENIOR_PASTOR_NAME = "Rev.N.Johnson";
const OVERALL_DEPT_INCHARGE = "Pastor. Jerry Jemson";

const OFFICIAL_CREW_DIRECTORY = [
  { name: "Lokesh", role: DEFAULT_MEMBER_ROLE, phone: "+91 63807 95436" },
  { name: "Balaji", role: DEFAULT_MEMBER_ROLE, phone: "+91 80560 44254" },
  { name: "Shyam David", role: DEFAULT_MEMBER_ROLE, phone: "+91 86818 54526" },
  { name: "Sam Joshua", role: DEFAULT_MEMBER_ROLE, phone: "+91 81110 63598" },
  { name: "Praveen doss", role: DEFAULT_MEMBER_ROLE, phone: "+91 78100 33166" },
  { name: "Sanjay", role: DEFAULT_MEMBER_ROLE, phone: "+91 70928 15470" },
  { name: "Mathew", role: DEFAULT_MEMBER_ROLE, phone: "+91 96001 34194" },
  { name: "Jose", role: DEFAULT_MEMBER_ROLE, phone: "+91 85319 72562" },
  { name: "Joshua", role: DEFAULT_MEMBER_ROLE, phone: "+91 78718 97417" },
  { name: "Karthik", role: DEFAULT_MEMBER_ROLE, phone: "+91 74181 48641" },
  { name: "Kailash", role: DEFAULT_MEMBER_ROLE, phone: "+91 79045 07246" },
  { name: "Aandross", role: DEFAULT_MEMBER_ROLE, phone: "+91 86675 67203" },
  { name: "Anand", role: DEFAULT_MEMBER_ROLE, phone: "+91 63791 69115" },
  { name: "Aaron", role: DEFAULT_MEMBER_ROLE, phone: "+91 88078 04614" },
  { name: "Yashwanth", role: DEFAULT_MEMBER_ROLE, phone: "+91 70103 68793" },
  { name: "Franklin", role: DEFAULT_MEMBER_ROLE, phone: "" }
];

// Curated Church Festival & Holiday Service Presets
const FESTIVAL_EVENT_TEMPLATES = [
  {
    category: "christmas",
    badgeText: "🎄 Christmas Eve",
    icon: "🎄",
    title: "Christmas Eve Candlelight Service",
    date: "24 Dec 2026",
    time: "06:30 PM - 08:30 PM",
    callTime: "05:45 PM",
    notes: "Carols, Nativity Live Broadcast & Candlelight Blessing"
  },
  {
    category: "christmas",
    badgeText: "🌟 Christmas Day",
    icon: "🌟",
    title: "Christmas Day Celebration Service",
    date: "25 Dec 2026",
    time: "08:30 AM - 11:30 AM",
    callTime: "07:45 AM",
    notes: "Grand Festive Worship & Christmas Broadcast"
  },
  {
    category: "newyear",
    badgeText: "🕊️ Watch Night",
    icon: "🕊️",
    title: "New Year Eve / Watch Night Service",
    date: "31 Dec 2026",
    time: "10:00 PM - 01:30 AM",
    callTime: "09:00 PM",
    notes: "Thanksgiving, Countdown & 2027 Promise Card Blessing"
  },
  {
    category: "newyear",
    badgeText: "🌅 New Year Day",
    icon: "🌅",
    title: "New Year Morning Blessing Service",
    date: "01 Jan 2027",
    time: "08:30 AM - 10:30 AM",
    callTime: "07:45 AM",
    notes: "First Fruits & New Year Covenant Service"
  },
  {
    category: "easter",
    badgeText: "✝️ Good Friday",
    icon: "✝️",
    title: "Good Friday Solemn Service",
    date: "03 Apr 2026",
    time: "11:00 AM - 02:00 PM",
    callTime: "10:15 AM",
    notes: "The 7 Words of the Cross & Holy Communion"
  },
  {
    category: "easter",
    badgeText: "🌅 Easter Sunrise",
    icon: "🌅",
    title: "Easter Resurrection Sunrise Service",
    date: "05 Apr 2026",
    time: "05:00 AM - 07:30 AM",
    callTime: "04:15 AM",
    notes: "He is Risen! Resurrection Sunday Broadcast"
  },
  {
    category: "thanksgiving",
    badgeText: "🌾 Harvest Festival",
    icon: "🌾",
    title: "Annual Harvest Festival & Thanksgiving",
    date: "15 Nov 2026",
    time: "09:00 AM - 01:00 PM",
    callTime: "08:00 AM",
    notes: "Auction, Thanksgiving Praise & Special Video"
  },
  {
    category: "miracle",
    badgeText: "🔥 Miracle Night",
    icon: "🔥",
    title: "All-Night Miracle & Anointing Service",
    date: "31 Oct 2026",
    time: "10:00 PM - 04:00 AM",
    callTime: "09:15 PM",
    notes: "Signs, Wonders & Prophetic Impartation Night"
  },
  {
    category: "convention",
    badgeText: "🩸 Revival Convention",
    icon: "🩸",
    title: "3-Day Fasting & Prayer Revival Convention",
    date: "10 Nov 2026",
    time: "06:30 PM - 09:30 PM",
    callTime: "05:45 PM",
    notes: "Guest Speaker & Special Evening Live Stream"
  },
  {
    category: "youth",
    badgeText: "🕊️ Youth Special",
    icon: "🕊️",
    title: "Youth Sunday & Media Workshop",
    date: "14 Nov 2026",
    time: "09:00 AM - 12:00 PM",
    callTime: "08:15 AM",
    notes: "Youth-Led Worship, Media Production & Drama"
  }
];

function getFestivalCategoryMeta(cat) {
  const c = String(cat || "special").toLowerCase();
  switch (c) {
    case "christmas":
      return { icon: "🎄", label: "Christmas", badgeClass: "badge-christmas", colorTag: "tag-emerald" };
    case "newyear":
      return { icon: "🕊️", label: "New Year", badgeClass: "badge-newyear", colorTag: "tag-purple" };
    case "easter":
      return { icon: "✝️", label: "Easter", badgeClass: "badge-easter", colorTag: "tag-purple" };
    case "miracle":
      return { icon: "🔥", label: "Miracle Night", badgeClass: "badge-miracle", colorTag: "tag-amber" };
    case "thanksgiving":
      return { icon: "🌾", label: "Harvest", badgeClass: "badge-thanksgiving", colorTag: "tag-amber" };
    case "convention":
      return { icon: "🩸", label: "Convention", badgeClass: "badge-convention", colorTag: "tag-special" };
    case "youth":
      return { icon: "🕊️", label: "Youth Special", badgeClass: "badge-youth", colorTag: "tag-blue" };
    case "special":
      return { icon: "🌟", label: "Special Event", badgeClass: "badge-special", colorTag: "tag-purple" };
    default: {
      if (typeof appState !== "undefined" && appState.customFestivalCategories) {
        const found = appState.customFestivalCategories.find(item => {
          const id = (typeof item === 'string' ? item : item.id).toLowerCase();
          return id === c;
        });
        if (found) {
          const label = typeof found === 'string' ? found : found.label;
          const icon = (typeof found === 'object' && found.icon) ? found.icon : "✨";
          return { icon: icon, label: label, badgeClass: "badge-special badge-custom", colorTag: "tag-purple" };
        }
      }
      const prettyLabel = c.startsWith("custom_")
        ? c.replace(/^custom_/, "").replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())
        : c.charAt(0).toUpperCase() + c.slice(1);
      return { icon: "✨", label: prettyLabel, badgeClass: "badge-special badge-custom", colorTag: "tag-purple" };
    }
  }
}

function getAllFestivalCategories() {
  const standard = [
    { val: "christmas", label: "🎄 Christmas", icon: "🎄" },
    { val: "newyear", label: "🕊️ New Year", icon: "🕊️" },
    { val: "easter", label: "✝️ Easter", icon: "✝️" },
    { val: "miracle", label: "🔥 Miracle Night", icon: "🔥" },
    { val: "thanksgiving", label: "🌾 Harvest Festival", icon: "🌾" },
    { val: "convention", label: "🩸 Revival Convention", icon: "🩸" },
    { val: "youth", label: "🕊️ Youth Special", icon: "🕊️" },
    { val: "special", label: "🌟 Special Event", icon: "🌟" }
  ];

  if (typeof appState !== "undefined" && Array.isArray(appState.customFestivalCategories)) {
    appState.customFestivalCategories.forEach(cc => {
      const id = typeof cc === 'string' ? cc : cc.id;
      const label = typeof cc === 'string' ? cc : cc.label;
      const icon = (typeof cc === 'object' && cc.icon) ? cc.icon : "✨";
      standard.push({
        val: id,
        label: `${icon} ${label} (Custom)`,
        icon: icon,
        isCustom: true
      });
    });
  }

  return standard;
}

function promptAddCustomCategory(targetRowIndex) {
  const name = prompt("Enter Custom Category Name (e.g. Baptism, Wedding Special, Dedication, Worship Concert):");
  if (!name || !name.trim()) {
    if (targetRowIndex !== undefined) {
      renderSpecialMeetings();
    }
    return;
  }
  const cleanName = name.trim();
  const slug = "custom_" + cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");

  if (!appState.customFestivalCategories) {
    appState.customFestivalCategories = [];
  }

  let icon = "✨";
  const lower = cleanName.toLowerCase();
  if (lower.includes("baptism") || lower.includes("water")) icon = "🌊";
  else if (lower.includes("wedding") || lower.includes("marriage")) icon = "💍";
  else if (lower.includes("concert") || lower.includes("music") || lower.includes("worship")) icon = "🎵";
  else if (lower.includes("child") || lower.includes("kid") || lower.includes("baby") || lower.includes("dedication")) icon = "👶";
  else if (lower.includes("youth") || lower.includes("teen")) icon = "🕊️";
  else if (lower.includes("revival") || lower.includes("fire") || lower.includes("miracle")) icon = "🔥";
  else if (lower.includes("fasting") || lower.includes("prayer")) icon = "🙏";
  else if (lower.includes("thanksgiving") || lower.includes("harvest")) icon = "🌾";
  else if (lower.includes("christmas")) icon = "🎄";
  else if (lower.includes("easter")) icon = "✝️";

  const existing = appState.customFestivalCategories.find(c => {
    const cid = (typeof c === 'string' ? c : c.id).toLowerCase();
    const clabel = (typeof c === 'string' ? c : c.label).toLowerCase();
    return cid === slug || clabel === lower;
  });

  const catId = existing ? (typeof existing === 'string' ? existing : existing.id) : slug;

  if (!existing) {
    appState.customFestivalCategories.push({
      id: catId,
      label: cleanName,
      icon: icon
    });
  }

  if (targetRowIndex !== undefined && appState.specialMeetings && appState.specialMeetings[targetRowIndex]) {
    appState.specialMeetings[targetRowIndex].category = catId;
  }

  saveState();
  renderAll();
  showToast(`🏷️ Custom category "${icon} ${cleanName}" added!`);
}

function onCategorySelectChange(index, selectedValue) {
  if (selectedValue === "__ADD_NEW_CATEGORY__") {
    promptAddCustomCategory(index);
  } else {
    updateSpecialMeeting(index, 'category', selectedValue);
  }
}

function inferFestivalCategory(title) {
  const t = String(title || "").toLowerCase();
  if (t.includes("christmas") || t.includes("carol") || t.includes("nativity")) return "christmas";
  if (t.includes("new year") || t.includes("watch night") || t.includes("watchnight") || t.includes("31 dec") || t.includes("01 jan")) return "newyear";
  if (t.includes("good friday") || t.includes("easter") || t.includes("resurrection") || t.includes("passion")) return "easter";
  if (t.includes("miracle") || t.includes("all-night") || t.includes("all night") || t.includes("anointing")) return "miracle";
  if (t.includes("harvest") || t.includes("thanksgiving")) return "thanksgiving";
  if (t.includes("convention") || t.includes("revival") || t.includes("fasting")) return "convention";
  if (t.includes("youth") || t.includes("children")) return "youth";
  return "special";
}

function inferFestivalTime(title, category) {
  const cat = category || inferFestivalCategory(title);
  if (cat === "christmas") {
    return String(title).toLowerCase().includes("eve") ? "06:30 PM - 08:30 PM" : "08:30 AM - 11:30 AM";
  }
  if (cat === "newyear") {
    return String(title).toLowerCase().includes("morning") ? "08:30 AM - 10:30 AM" : "10:00 PM - 01:30 AM";
  }
  if (cat === "easter") {
    return String(title).toLowerCase().includes("sunrise") ? "05:00 AM - 07:30 AM" : "11:00 AM - 02:00 PM";
  }
  if (cat === "miracle") return "10:00 PM - 04:00 AM";
  if (cat === "thanksgiving") return "09:00 AM - 01:00 PM";
  if (cat === "convention") return "06:30 PM - 09:30 PM";
  return "06:30 PM - 08:30 PM";
}

function inferFestivalCallTime(title, timeStr) {
  if (timeStr && timeStr.includes("10:00 PM")) return "09:15 PM";
  if (timeStr && timeStr.includes("08:30 AM")) return "07:45 AM";
  if (timeStr && timeStr.includes("05:00 AM")) return "04:15 AM";
  if (timeStr && timeStr.includes("06:30 PM")) return "05:45 PM";
  if (timeStr && timeStr.includes("09:00 AM")) return "08:15 AM";
  if (timeStr && timeStr.includes("11:00 AM")) return "10:15 AM";
  return "45 mins before service";
}

function isAliasMatch(strA, strB) {
  if (!strA || !strB) return false;
  const splitParts = (s) => String(s)
    .split(/\s*&\s*|\s+and\s+/i)
    .map(p => p.replace(/\s*\([^)]*\)\s*/g, "").toLowerCase().trim())
    .filter(Boolean);

  const partsA = splitParts(strA);
  const partsB = splitParts(strB);
  if (partsA.length === 0 || partsB.length === 0) return false;

  const clusters = [
    ["shyam", "shyam david", "shyam davit"],
    ["sam", "sam joshua", "sam davit"],
    ["praveen", "praveen doss"],
    ["andross", "aandross"],
    ["yashwanth", "yashwant"]
  ];

  for (const x of partsA) {
    for (const y of partsB) {
      if (x === y) return true;
      for (const group of clusters) {
        if (group.includes(x) && group.includes(y)) return true;
      }
    }
  }
  return false;
}

function syncOfficialCrewPhoneNumbers(state) {
  if (!state || !Array.isArray(state.members)) return;

  OFFICIAL_CREW_DIRECTORY.forEach(official => {
    let existing = state.members.find(m => isAliasMatch(m.name, official.name));
    if (existing) {
      if (official.phone && !existing.phone) existing.phone = official.phone;
      if (official.name !== existing.name && (["Shyam Davit", "Sam Davit", "Praveen", "Andross"].includes(existing.name) || /^andross$/i.test(existing.name))) {
        existing.name = official.name;
      }
      if (official.role && (!existing.role || existing.role === "Media Volunteer" || existing.role === "Media Crew")) {
        existing.role = official.role;
      }
    } else {
      state.members.push({
        name: official.name,
        role: official.role,
        phone: official.phone || ""
      });
    }
  });
}

// Initial Default State
const defaultState = {
  month: "October 2026",
  leaderName: DEFAULT_LEADER_NAME,
  hideLeaderOnMainPage: false,
  members: JSON.parse(JSON.stringify(OFFICIAL_CREW_DIRECTORY)),
  firstService: [
    { id: 1, date: "04 Oct 2026", cam1: "Balaji", cam2: "Lokesh", gimble: "Shyam Davit", live: "Anand", spot: "Joshua", charging: "Yashwanth & Sam Davit" },
    { id: 2, date: "11 Oct 2026", cam1: "Franklin & Sanjay", cam2: "Shyam Davit", gimble: "Lokesh", live: "Yashwanth", spot: "Joshua", charging: "Yashwanth & Sam Davit" },
    { id: 3, date: "18 Oct 2026", cam1: "Yashwanth", cam2: "Balaji", gimble: "Lokesh", live: "Shyam Davit", spot: "Joshua", charging: "Yashwanth & Sam Davit" },
    { id: 4, date: "25 Oct 2026", cam1: "Balaji & Mathew", cam2: "Anand", gimble: "Lokesh", live: "Yashwanth", spot: "Joshua", charging: "Yashwanth & Sam Davit" }
  ],
  secondService: [
    { id: 1, date: "04 Oct 2026", operator: "Praveen" },
    { id: 2, date: "11 Oct 2026", operator: "Praveen" },
    { id: 3, date: "18 Oct 2026", operator: "Praveen" },
    { id: 4, date: "25 Oct 2026", operator: "Praveen" }
  ],
  thirdService: [
    { id: 1, date: "04 Oct 2026", operator: "Sanjay" },
    { id: 2, date: "11 Oct 2026", operator: "Sanjay" },
    { id: 3, date: "18 Oct 2026", operator: "Franklin" },
    { id: 4, date: "25 Oct 2026", operator: "Franklin" }
  ],
  fridayPrayer: [
    { id: 1, date: "02 Oct 2026", cam1: "Balaji", live: "Anand" },
    { id: 2, date: "09 Oct 2026", cam1: "Shyam Davit", live: "Yashwanth" },
    { id: 3, date: "16 Oct 2026", cam1: "Franklin", live: "Sam Davit" },
    { id: 4, date: "23 Oct 2026", cam1: "Sanjay", live: "Lokesh" },
    { id: 5, date: "30 Oct 2026", cam1: "Balaji", live: "Shyam Davit" }
  ],
  specialMeetings: [],
  specialMeetingsEnabled: true,
  customFestivalCategories: [],
  morningPrayer: {
    enabled: false,
    title: "21 Days Early Morning Prayer",
    days: [
      { id: 1, day: "Monday", cam1: "Balaji", cam2: "Franklin", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 2, day: "Tuesday", cam1: "Sanjay", cam2: "Sam Davit", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 3, day: "Wednesday", cam1: "Franklin", cam2: "Balaji", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 4, day: "Thursday", cam1: "Mathew", cam2: "Franklin", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 5, day: "Friday", cam1: "Balaji", cam2: "Sam Davit", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 6, day: "Saturday", cam1: "Yashwanth", cam2: "Sanjay", gimbal: "Shyam Davit", liveEditor: "Praveen", socialMedia: "Joshua" }
    ]
  },
  crewDirectoryVersion: CURRENT_CREW_DIRECTORY_VERSION,
  memberRolesVersion: CURRENT_MEMBER_ROLES_VERSION,
  checklistTemplateVersion: 3,
  checklists: [
    {
      id: "cam-maint",
      title: "1. Camera Maintenance",
      items: [
        { id: "cm1", text: "Clean all cameras (Camera 1 and Camera 2).", done: false },
        { id: "cm2", text: "Ensure cameras are functioning properly.", done: false }
      ]
    },
    {
      id: "sys-equip",
      title: "2. System & Equipment Cleaning",
      items: [
        { id: "se1", text: "Clean the streaming system / PC.", done: false },
        { id: "se2", text: "Clean all tripods.", done: false },
        { id: "se3", text: "Clean the Setup area.", done: false }
      ]
    },
    {
      id: "charge-batt",
      title: "3. Charging & Battery Preparation",
      items: [
        { id: "cb1", text: "Charge the Gimbal.", done: false },
        { id: "cb2", text: "Charge all camera batteries.", done: false },
        { id: "cb3", text: "Recharge all Mic batteries.", done: false }
      ]
    },
    {
      id: "live-proc",
      title: "4. Sunday Service Live Procedure",
      items: [
        { id: "lp1", text: "Prepare and update the Sunday Service Live Procedure.", done: false },
        { id: "lp2", text: "Verify the streaming workflow.", done: false },
        { id: "lp3", text: "Check audio and video settings.", done: false }
      ]
    },
    {
      id: "outside-tv",
      title: "5. Outside TV & Live Stream Testing",
      items: [
        { id: "ot1", text: "Set up the outside TV.", done: false },
        { id: "ot2", text: "Connect and test the TV display.", done: false },
        { id: "ot3", text: "Check whether the live stream is working properly.", done: false },
        { id: "ot4", text: "Verify audio and video output on the outside TV.", done: false }
      ]
    }
  ],
  gearIssues: [
    {
      id: 1,
      item: "HDMI Cable / Video Sender (Hollyland)",
      urgency: "Medium",
      reporter: "Yashwanth",
      desc: "Transmitter battery plate loose, test with NP-F970 before Sunday service",
      date: "02 Oct 2026",
      status: "Open"
    },
    {
      id: 2,
      item: "Microphone Lapel / Headset Batteries",
      urgency: "Low",
      reporter: "Sam Davit",
      desc: "Restocked 8 fresh rechargeable AA batteries for Pastor mic",
      date: "01 Oct 2026",
      status: "Resolved"
    }
  ],
  weeklyChecks: {},
  weeklyCheckMeta: {},
  swapRequests: [],
  unavailability: {},
  activeWeekDatePinned: false
};

const ADMIN_PIN_LOCAL_KEY = "FLAG_MEDIA_ADMIN_PIN";
let appState = null;
let isAdminLoggedIn = false;

function getLocalAdminPin() {
  try {
    const stored = localStorage.getItem(ADMIN_PIN_LOCAL_KEY);
    if (stored) return stored;
  } catch (e) {}
  return (appState && appState.adminPin) ? String(appState.adminPin) : "1234";
}

function setLocalAdminPin(pin) {
  try {
    localStorage.setItem(ADMIN_PIN_LOCAL_KEY, String(pin));
  } catch (e) {}
  if (appState && "adminPin" in appState) {
    delete appState.adminPin;
  }
}

function sanitizeCloudState(state) {
  if (!state || typeof state !== "object") return state;
  const copy = JSON.parse(JSON.stringify(state));
  delete copy.adminPin;
  return copy;
}

// ================= ADMIN CONSOLE CONTROLS & SECURITY =================
function openAdminPinModal() {
  const input = document.getElementById("adminPinInput");
  const modal = document.getElementById("adminPinModal");
  if (input) input.value = "";
  if (modal) modal.classList.add("show");
  if (input) setTimeout(() => input.focus(), 100);
}

function handleAdminNavClick(btn) {
  if (isAdminLoggedIn) {
    switchView("adminView", btn);
  } else {
    openAdminPinModal();
  }
}

function closeAdminPinModal() {
  document.getElementById("adminPinModal").classList.remove("show");
}

function unlockAdminWithPin() {
  const pinEntered = document.getElementById("adminPinInput").value.trim();
  const currentPin = getLocalAdminPin();

  if (pinEntered === currentPin) {
    isAdminLoggedIn = true;
    closeAdminPinModal();
    updateAdminNavUI();

    const adminBtn = document.getElementById("adminNavBtn");
    switchView("adminView", adminBtn);

    if (window.postLoginRedirectTab) {
      const targetTab = window.postLoginRedirectTab;
      window.postLoginRedirectTab = null;
      const tabBtn = document.querySelector(`.admin-pill-btn[onclick*="${targetTab}"]`);
      switchAdminTab(targetTab, tabBtn);
    }

    renderOpenCoverBoard();
    showToast(`👑 Admin Console Unlocked! Welcome ${getLeaderName()}.`);
  } else {
    alert("Incorrect Admin PIN. Please try again.");
    document.getElementById("adminPinInput").select();
  }
}

function lockAdminConsole() {
  isAdminLoggedIn = false;
  updateAdminNavUI();
  renderOpenCoverBoard();
  const scheduleBtn = document.querySelector(".nav-links .nav-btn:first-child");
  switchView("scheduleView", scheduleBtn);
  showToast("🔒 Admin Console Locked.");
}

function updateAdminNavUI() {
  const btn = document.getElementById("adminNavBtn");
  const text = document.getElementById("adminNavText");
  if (!btn || !text) return;

  if (isAdminLoggedIn) {
    btn.classList.add("active");
    text.innerHTML = `
      <span class="nav-label-long">Admin 🔓 (Unlocked)</span>
      <span class="nav-label-short">Admin 🔓</span>
    `;
  } else {
    btn.classList.remove("active");
    text.innerHTML = `
      <span class="nav-label-long">Admin Console</span>
      <span class="nav-label-short">Admin</span>
    `;
  }
}

function switchAdminTab(tabId, btn) {
  document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".admin-pill-btn").forEach(b => b.classList.remove("active"));

  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
  if (btn) btn.classList.add("active");
}

function openChangePinModal() {
  document.getElementById("oldPinInput").value = "";
  document.getElementById("newPinInput").value = "";
  document.getElementById("changePinModal").classList.add("show");
}

function closeChangePinModal() {
  document.getElementById("changePinModal").classList.remove("show");
}

function saveNewAdminPin() {
  const oldPin = document.getElementById("oldPinInput").value.trim();
  const newPin = document.getElementById("newPinInput").value.trim();
  const currentPin = getLocalAdminPin();

  if (oldPin !== currentPin) {
    alert("Current PIN does not match. Cannot change PIN.");
    return;
  }
  if (!newPin || newPin.length < 3) {
    alert("New PIN must be at least 3 digits.");
    return;
  }

  setLocalAdminPin(newPin);
  saveState(true);
  closeChangePinModal();
  showToast("Admin PIN updated securely on this device!");
}

// Dynamic Media Team Leader helpers & Admin Console changer
function getLeaderName() {
  const raw = appState && typeof appState.leaderName === "string" ? appState.leaderName.trim() : "";
  return raw || DEFAULT_LEADER_NAME;
}

function getLeaderPhoneDigits() {
  const leaderName = getLeaderName();
  const members = (appState && Array.isArray(appState.members)) ? appState.members : [];
  const match = members.find(m => m && m.name && isAliasMatch(m.name, leaderName));
  if (match && match.phone) {
    const clean = String(match.phone).replace(/[^0-9]/g, "");
    if (clean.length === 10) return `91${clean}`;
    if (clean.length >= 11) return clean;
  }
  return isAliasMatch(leaderName, DEFAULT_LEADER_NAME) ? DEFAULT_LEADER_PHONE : "";
}

function openWhatsAppToLeader(messageText) {
  const encoded = encodeURIComponent(messageText || "");
  const digits = getLeaderPhoneDigits();
  const leader = getLeaderName();
  if (digits) {
    window.open(`https://wa.me/${digits}?text=${encoded}`, "_blank");
  } else {
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
    showToast(`ℹ️ No mobile number saved for Leader ${leader} — choose contact in WhatsApp.`);
  }
}

function renderLeaderBadges() {
  const leader = getLeaderName();
  const isBlankOnMain = Boolean(appState && appState.hideLeaderOnMainPage);
  const heroBadge = document.getElementById("heroLeaderBadge");
  const teamBadge = document.getElementById("teamLeaderBadge");
  const adminBadge = document.getElementById("adminLeaderBadge");
  const adminTabBadge = document.getElementById("adminTabLeaderBadge");
  const adminLeaderSelect = document.getElementById("adminTeamLeaderSelect");
  const blankBtn = document.getElementById("btnToggleLeaderBlankMain");
  const modalBlankBtn = document.getElementById("btnModalBlankLeader");
  const printLine = document.getElementById("printLeadershipLine");
  const swapPrompt = document.getElementById("swapLeaderPromptName");
  const swapBtn = document.getElementById("btnSendSwapToLeader");
  const satBtn = document.getElementById("btnSendSatAlertToLeader");

  if (heroBadge) {
    if (isBlankOnMain || !leader) {
      heroBadge.style.display = "none";
      heroBadge.setAttribute("aria-hidden", "true");
    } else {
      heroBadge.style.display = "";
      heroBadge.removeAttribute("aria-hidden");
      heroBadge.innerHTML = `<span class="leader-medallion" aria-hidden="true">👑</span><div class="leader-showcase-text"><span class="leader-role-eyebrow">Team Leader</span><strong class="leader-person-name">${escapeHtml(leader)}</strong></div>`;
    }
  }
  if (teamBadge) {
    teamBadge.innerHTML = `<span class="leader-medallion" aria-hidden="true">👑</span><div class="leader-showcase-text"><span class="leader-role-eyebrow">Team Leader</span><strong class="leader-person-name">${escapeHtml(leader)}</strong></div>`;
  }
  if (adminBadge) {
    adminBadge.textContent = isBlankOnMain
      ? `👑 Team Leader: ${leader} (Blank on Main Page)`
      : `👑 Team Leader: ${leader}`;
  }
  if (adminTabBadge) {
    adminTabBadge.textContent = isBlankOnMain
      ? `👑 Team Leader: ${leader} (Blank on Main Page)`
      : `👑 Team Leader: ${leader}`;
  }
  if (blankBtn) {
    blankBtn.classList.toggle("active", isBlankOnMain);
    blankBtn.textContent = isBlankOnMain ? "👁️ Show on Main Page" : "🚫 Blank on Main Page";
    blankBtn.title = isBlankOnMain
      ? "Currently blank on the main page — click to show Team Leader again"
      : "Hide Team Leader badge on the main page";
  }
  if (modalBlankBtn) {
    modalBlankBtn.classList.toggle("active", isBlankOnMain);
    modalBlankBtn.textContent = isBlankOnMain ? "👁️ Show on Main Page" : "🚫 Blank on Main Page";
  }
  if (printLine) {
    printLine.innerHTML = isBlankOnMain || !leader
      ? `🕊️ Senior Pastor: <strong>${escapeHtml(SENIOR_PASTOR_NAME)}</strong> &bull; ✝️ Overall Media Department Incharge: <strong>${escapeHtml(OVERALL_DEPT_INCHARGE)}</strong>`
      : `🕊️ Senior Pastor: <strong>${escapeHtml(SENIOR_PASTOR_NAME)}</strong> &bull; ✝️ Overall Media Department Incharge: <strong>${escapeHtml(OVERALL_DEPT_INCHARGE)}</strong> &bull; 👑 Team Leader: <strong>${escapeHtml(leader)}</strong>`;
  }
  if (adminLeaderSelect) {
    const members = (appState && Array.isArray(appState.members)) ? appState.members : [];
    const opts = [`<option value="">-- Choose Team Leader --</option>`];
    let hasSelectedMember = false;
    members.forEach(m => {
      if (!m || !m.name) return;
      const isMatch = isAliasMatch(m.name, leader);
      if (isMatch) hasSelectedMember = true;
      opts.push(`<option value="${escapeHtml(m.name)}" ${isMatch ? "selected" : ""}>👑 ${escapeHtml(m.name)}</option>`);
    });
    if (!hasSelectedMember && leader) {
      opts.push(`<option value="${escapeHtml(leader)}" selected>👑 ${escapeHtml(leader)}</option>`);
    }
    adminLeaderSelect.innerHTML = opts.join("");
  }
  if (swapPrompt) swapPrompt.textContent = `Leader ${leader}`;
  if (swapBtn) swapBtn.title = `Send directly to Leader ${leader} on WhatsApp`;
  if (satBtn) satBtn.title = `Send preview to Leader ${leader} on WhatsApp`;
}

function setTeamLeaderByName(name) {
  const newLeader = String(name || "").trim();
  if (!newLeader) return;
  appState.leaderName = newLeader;
  appState.hideLeaderOnMainPage = false;
  saveState(false, { leaderName: appState.leaderName, hideLeaderOnMainPage: false });
  renderAll();
  showToast(`👑 Team Leader saved as ${newLeader}!`);
}

function saveAdminSelectedLeader() {
  const sel = document.getElementById("adminTeamLeaderSelect");
  const picked = sel ? sel.value.trim() : "";
  if (!picked) {
    showToast("⚠️ Please choose a Team Leader from the list first.");
    return;
  }
  setTeamLeaderByName(picked);
}

function toggleLeaderMainPageBlank() {
  appState.hideLeaderOnMainPage = !Boolean(appState.hideLeaderOnMainPage);
  saveState(false, { hideLeaderOnMainPage: appState.hideLeaderOnMainPage });
  renderAll();
  showToast(
    appState.hideLeaderOnMainPage
      ? "🙈 Team Leader is now blank on the Main Page!"
      : `👁️ Team Leader (${getLeaderName()}) is now shown on the Main Page!`
  );
}

function setLeaderBlankFromModal() {
  appState.hideLeaderOnMainPage = !Boolean(appState.hideLeaderOnMainPage);
  saveState(false, { hideLeaderOnMainPage: appState.hideLeaderOnMainPage });
  closeChangeLeaderModal();
  renderAll();
  showToast(
    appState.hideLeaderOnMainPage
      ? "🙈 Team Leader is now blank on the Main Page!"
      : `👁️ Team Leader (${getLeaderName()}) is now shown on the Main Page!`
  );
}

function openChangeLeaderModal() {
  if (!isAdminLoggedIn) {
    openAdminPinModal();
    return;
  }
  const select = document.getElementById("leaderMemberSelect");
  const input = document.getElementById("leaderNameInput");
  const current = getLeaderName();

  if (select) {
    const members = (appState && Array.isArray(appState.members)) ? appState.members : [];
    let html = `<option value="">-- Pick from Team Members --</option>`;
    members.forEach(m => {
      const sel = isAliasMatch(m.name, current) ? "selected" : "";
      html += `<option value="${escapeHtml(m.name)}" ${sel}>${escapeHtml(m.name)}${m.phone ? ` (${escapeHtml(m.phone)})` : ""}</option>`;
    });
    select.innerHTML = html;
  }
  if (input) input.value = current;

  const modal = document.getElementById("changeLeaderModal");
  if (modal) modal.classList.add("show");
  if (input) setTimeout(() => input.focus(), 100);
}

function closeChangeLeaderModal() {
  const modal = document.getElementById("changeLeaderModal");
  if (modal) modal.classList.remove("show");
}

function onLeaderSelectDropdownChange(selectedName) {
  const input = document.getElementById("leaderNameInput");
  if (input && selectedName) {
    input.value = selectedName;
  }
}

function saveNewLeaderName() {
  const input = document.getElementById("leaderNameInput");
  const newLeader = input ? input.value.trim() : "";
  if (!newLeader) {
    alert("Please enter or select a Leader name.");
    return;
  }
  closeChangeLeaderModal();
  setTeamLeaderByName(newLeader);
}

// Helper: Calculate all dates for a given day of the week in a month
// targetDay: 0 = Sunday, 5 = Friday
function calculateDatesInMonth(year, monthIndex, targetDay) {
  const dates = [];
  const date = new Date(year, monthIndex, 1);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mName = monthNames[monthIndex];

  while (date.getMonth() === monthIndex) {
    if (date.getDay() === targetDay) {
      const d = String(date.getDate()).padStart(2, "0");
      dates.push(`${d} ${mName} ${year}`);
    }
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

// ================= LIGHT / DARK THEME =================
function getPreferredTheme() {
  try {
    return localStorage.getItem("FLAG_MEDIA_THEME") || "dark";
  } catch (e) {
    return "dark";
  }
}

function setTheme(theme) {
  const current = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", current);
  document.documentElement.classList.toggle("light-theme", current === "light");
  document.documentElement.classList.toggle("dark-theme", current === "dark");
  
  if (document.body) {
    document.body.setAttribute("data-theme", current);
    document.body.classList.toggle("light-theme", current === "light");
    document.body.classList.toggle("dark-theme", current === "dark");
  }

  try {
    localStorage.setItem("FLAG_MEDIA_THEME", current);
  } catch (e) {}

  const iconEl = document.getElementById("themeToggleIcon");
  const textEl = document.getElementById("themeToggleText");
  const toggleBtn = document.getElementById("themeToggleBtn");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  if (current === "light") {
    if (iconEl) iconEl.textContent = "🌙";
    if (textEl) textEl.textContent = "Dark";
    if (toggleBtn) toggleBtn.setAttribute("title", "Currently in Light Mode &bull; Click for Dark Theme");
    if (metaTheme) metaTheme.setAttribute("content", "#f8fafc");
  } else {
    if (iconEl) iconEl.textContent = "☀️";
    if (textEl) textEl.textContent = "Light";
    if (toggleBtn) toggleBtn.setAttribute("title", "Currently in Dark Mode &bull; Click for Light Theme");
    if (metaTheme) metaTheme.setAttribute("content", "#0f172a");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
  showToast(next === "light" ? "☀️ Light mode activated" : "🌙 Dark mode activated");
}

function initTheme() {
  const preferred = getPreferredTheme();
  setTheme(preferred);
}

// Auto-run theme immediately upon script load to sync icon/text
initTheme();

function ensureStateIntegrity(state) {
  if (!state || typeof state !== "object") return state;

  if (!state.members || !Array.isArray(state.members) || state.members.length === 0) {
    state.members = JSON.parse(JSON.stringify(defaultState.members));
  } else {
    state.members = state.members.filter(m => m && m.name && String(m.name).trim().length > 0);
    if (state.members.length === 0) {
      state.members = JSON.parse(JSON.stringify(defaultState.members));
    }
  }
  if (!state.leaderName || typeof state.leaderName !== "string" || !state.leaderName.trim()) {
    state.leaderName = DEFAULT_LEADER_NAME;
  }
  if (typeof state.hideLeaderOnMainPage !== "boolean") {
    state.hideLeaderOnMainPage = false;
  }
  if (!state.crewDirectoryVersion || state.crewDirectoryVersion < CURRENT_CREW_DIRECTORY_VERSION) {
    state.members = state.members.filter(m => !isAliasMatch(m.name, "Andrew"));
    const lokesh = state.members.find(m => isAliasMatch(m.name, "Lokesh"));
    if (lokesh) {
      const cleanPhone = String(lokesh.phone || "").replace(/[^0-9]/g, "");
      if (!cleanPhone || cleanPhone.endsWith("7010368793")) {
        lokesh.phone = "+91 63807 95436";
      }
    }
    state.members.forEach(m => {
      if (m && m.name && /^andross$/i.test(m.name.trim()) && m.name.trim() !== "Aandross") {
        m.name = "Aandross";
      }
    });
    if (/^andross$/i.test(String(state.leaderName || "").trim())) {
      state.leaderName = "Aandross";
    }
    renameMemberAcrossSchedules("Andross", "Aandross", state);
    state.crewDirectoryVersion = CURRENT_CREW_DIRECTORY_VERSION;
  }
  if (!state.memberRolesVersion || state.memberRolesVersion < CURRENT_MEMBER_ROLES_VERSION) {
    state.members.forEach(m => {
      if (m && typeof m === "object") {
        m.role = DEFAULT_MEMBER_ROLE;
      }
    });
    state.memberRolesVersion = CURRENT_MEMBER_ROLES_VERSION;
  }
  syncOfficialCrewPhoneNumbers(state);

  if (!state.firstService || !Array.isArray(state.firstService)) {
    state.firstService = JSON.parse(JSON.stringify(defaultState.firstService));
  }
  if (!state.secondService || !Array.isArray(state.secondService)) {
    state.secondService = JSON.parse(JSON.stringify(defaultState.secondService));
  }
  if (!state.thirdService || !Array.isArray(state.thirdService)) {
    state.thirdService = JSON.parse(JSON.stringify(defaultState.thirdService));
  }
  if (!state.fridayPrayer || !Array.isArray(state.fridayPrayer)) {
    state.fridayPrayer = JSON.parse(JSON.stringify(defaultState.fridayPrayer));
  }
  if (!state.gearIssues || !Array.isArray(state.gearIssues)) {
    state.gearIssues = [];
  }
  if (typeof state.specialMeetingsEnabled !== "boolean") {
    state.specialMeetingsEnabled = true;
  }
  if (!state.customFestivalCategories || !Array.isArray(state.customFestivalCategories)) {
    state.customFestivalCategories = [];
  }
  if (!state.specialMeetings || !Array.isArray(state.specialMeetings)) {
    state.specialMeetings = [];
  } else {
    state.specialMeetings.forEach((row, idx) => {
      if (!row.id) row.id = Date.now() + idx;
      if (!row.category) row.category = inferFestivalCategory(row.title);
      if (!row.time) row.time = inferFestivalTime(row.title, row.category);
      if (!row.callTime) row.callTime = inferFestivalCallTime(row.title, row.time);
      if (row.notes === undefined) row.notes = "";
    });
  }
  if (!state.morningPrayer) {
    state.morningPrayer = { enabled: false, title: "21 Days Early Morning Prayer", days: [] };
  }
  if (!state.weeklyChecks || typeof state.weeklyChecks !== "object") {
    state.weeklyChecks = {};
  }
  if (!state.weeklyCheckMeta || typeof state.weeklyCheckMeta !== "object") {
    state.weeklyCheckMeta = {};
  }
  if (!state.swapRequests || !Array.isArray(state.swapRequests)) {
    state.swapRequests = [];
  }
  if (!state.unavailability || typeof state.unavailability !== "object") {
    state.unavailability = {};
  } else {
    const cleanUnavail = {};
    Object.keys(state.unavailability).forEach(k => {
      const list = state.unavailability[k];
      if (Array.isArray(list)) {
        const cleaned = [...new Set(list.map(d => String(d || "").trim()).filter(Boolean))];
        if (cleaned.length > 0) cleanUnavail[k] = cleaned;
      }
    });
    state.unavailability = cleanUnavail;
  }
  if ("adminPin" in state && state.adminPin) {
    try {
      if (!localStorage.getItem(ADMIN_PIN_LOCAL_KEY)) {
        localStorage.setItem(ADMIN_PIN_LOCAL_KEY, String(state.adminPin));
      }
    } catch (e) {}
    delete state.adminPin;
  }
  const legacyChecklistIds = new Set(["cam-clean", "sys-clean", "eq-charge", "mic-battery", "live-procedure", "cam-cleaning", "sys-cleaning", "eq-charging", "mic-batteries"]);
  const hasLegacyChecklists = Array.isArray(state.checklists) && state.checklists.some(c => legacyChecklistIds.has(c.id));
  if (!state.checklists || !Array.isArray(state.checklists) || !state.checklistTemplateVersion || state.checklistTemplateVersion < 2 || hasLegacyChecklists) {
    state.checklists = JSON.parse(JSON.stringify(defaultState.checklists || []));
    state.checklistTemplateVersion = 3;
    const validIds = new Set();
    state.checklists.forEach(cl => (cl.items || []).forEach(item => validIds.add(item.id)));
    [state.weeklyChecks, state.weeklyCheckMeta].forEach(mapRoot => {
      if (mapRoot && typeof mapRoot === "object") {
        Object.keys(mapRoot).forEach(wk => {
          const wkMap = mapRoot[wk];
          if (wkMap && typeof wkMap === "object") {
            Object.keys(wkMap).forEach(itemId => {
              if (!validIds.has(itemId)) delete wkMap[itemId];
            });
          }
        });
      }
    });
  } else if (state.checklistTemplateVersion !== 3) {
    state.checklists.forEach(cl => {
      if (cl && typeof cl === "object") {
        delete cl.assignedTo;
        delete cl.incharge;
      }
    });
    state.checklistTemplateVersion = 3;
  }
  return state;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  checkUrlForRosterSync();
  loadState();
  initCalendarSelectors();
  initCloudSync();
  renderAll();
  initPWABanner();
  initSavedVolunteer();
});

function loadState() {
  const saved = localStorage.getItem("FLAG_MEDIA_PORTAL_STATE");
  if (saved) {
    try {
      appState = JSON.parse(saved);
    } catch (e) {
      console.error("Error reading saved state", e);
      appState = JSON.parse(JSON.stringify(defaultState));
    }
  } else {
    appState = JSON.parse(JSON.stringify(defaultState));
  }

  ensureStateIntegrity(appState);

  // Ensure gearIssues array exists
  if (!appState.gearIssues || !Array.isArray(appState.gearIssues)) {
    appState.gearIssues = [
      {
        id: 1,
        item: "HDMI Cable / Video Sender (Hollyland)",
        urgency: "Medium",
        reporter: "Yashwanth",
        desc: "Transmitter battery plate loose, test with NP-F970 before Sunday service",
        date: "02 Oct 2026",
        status: "Open"
      },
      {
        id: 2,
        item: "Microphone Lapel / Headset Batteries",
        urgency: "Low",
        reporter: "Sam Davit",
        desc: "Restocked 8 fresh rechargeable AA batteries for Pastor mic",
        date: "01 Oct 2026",
        status: "Resolved"
      }
    ];
  }

  // Ensure specialMeetings array exists
  if (!appState.specialMeetings || !Array.isArray(appState.specialMeetings)) {
    appState.specialMeetings = [];
  } else {
    // Normalize existing rows with time, callTime and category if missing
    appState.specialMeetings.forEach((row, idx) => {
      if (!row.id) row.id = Date.now() + idx;
      if (!row.category) row.category = inferFestivalCategory(row.title);
      if (!row.time) row.time = inferFestivalTime(row.title, row.category);
      if (!row.callTime) row.callTime = inferFestivalCallTime(row.title, row.time);
      if (row.notes === undefined) row.notes = "";
    });
  }

  if (!appState.morningPrayer) {
    appState.morningPrayer = {
      enabled: false,
      title: "21 Days Early Morning Prayer",
      days: []
    };
  }

  if (appState.morningPrayer.enabled === undefined) {
    appState.morningPrayer.enabled = false;
  }

  // Cleanse any old Day 1, Day 2 rows into the clean Monday - Saturday roster
  const hasDayNumbers = appState.morningPrayer.days && appState.morningPrayer.days.some(d => /^Day\s*\d+/i.test(d.day));
  if (!appState.morningPrayer.days || appState.morningPrayer.days.length === 0 || hasDayNumbers) {
    appState.morningPrayer.days = [
      { id: 1, day: "Monday", cam1: "Balaji", cam2: "Franklin", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 2, day: "Tuesday", cam1: "Sanjay", cam2: "Sam Davit", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 3, day: "Wednesday", cam1: "Franklin", cam2: "Balaji", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 4, day: "Thursday", cam1: "Mathew", cam2: "Franklin", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 5, day: "Friday", cam1: "Balaji", cam2: "Sam Davit", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 6, day: "Saturday", cam1: "Yashwanth", cam2: "Sanjay", gimbal: "Shyam Davit", liveEditor: "Praveen", socialMedia: "Joshua" }
    ];
  }

  // Ensure schedules archive object exists for multi-month support
  if (!appState.schedules) {
    appState.schedules = {};
  }

  // Set default selected month & year if not set
  if (appState.selectedMonth === undefined) appState.selectedMonth = 9; // October (0-indexed)
  if (appState.selectedYear === undefined) appState.selectedYear = 2026;

  const currentKey = `${appState.selectedYear}-${appState.selectedMonth}`;
  if (!appState.schedules[currentKey] && appState.firstService) {
    // Migrate default state into currentKey
    appState.schedules[currentKey] = {
      monthTitle: appState.month || "October 2026",
      firstService: JSON.parse(JSON.stringify(appState.firstService)),
      secondService: JSON.parse(JSON.stringify(appState.secondService)),
      thirdService: JSON.parse(JSON.stringify(appState.thirdService)),
      fridayPrayer: JSON.parse(JSON.stringify(appState.fridayPrayer))
    };
  }

  // Initialize weekly checklists support
  if (!appState.weeklyChecks) {
    appState.weeklyChecks = {};
  }
  if (!appState.activeWeekDate) {
    const firstDate = (appState.firstService && appState.firstService[0]) ? appState.firstService[0].date : "04 Oct 2026";
    appState.activeWeekDate = firstDate;
  }
  if (appState.selectedChecklistWeek === undefined) {
    appState.selectedChecklistWeek = appState.activeWeekDate;
  }
  if (appState.onlyShowActiveWeek === undefined) {
    appState.onlyShowActiveWeek = true;
  }

  // Migrate legacy done states into weeklyChecks[activeWeekDate] if empty
  if (appState.activeWeekDate && (!appState.weeklyChecks[appState.activeWeekDate] || Object.keys(appState.weeklyChecks[appState.activeWeekDate]).length === 0)) {
    const existingChecks = {};
    if (appState.checklists) {
      appState.checklists.forEach(cl => {
        if (cl.items) {
          cl.items.forEach(i => {
            if (i.done) existingChecks[i.id] = true;
          });
        }
      });
    }
    appState.weeklyChecks[appState.activeWeekDate] = existingChecks;
  }

  // Auto-sync official crew phone numbers, roles, and unified spelling in appState.members
  if (appState && appState.members) {
    appState.members.forEach(m => {
      if (m.name === "Yashwant") {
        renameMemberAcrossSchedules("Yashwant", "Yashwanth");
        m.name = "Yashwanth";
      }
    });
    syncOfficialCrewPhoneNumbers(appState);
  }

  saveState(true);
}

/**
 * Persists appState locally and syncs either a granular Firebase patch or full sanitized state.
 */
function saveState(skipCloud = false, cloudPatch = null) {
  // Sync active schedule back to archive
  const currentKey = `${appState.selectedYear}-${appState.selectedMonth}`;
  if (!appState.schedules) appState.schedules = {};
  
  appState.schedules[currentKey] = {
    monthTitle: getMonthName(appState.selectedMonth) + " " + appState.selectedYear,
    firstService: appState.firstService,
    secondService: appState.secondService,
    thirdService: appState.thirdService,
    fridayPrayer: appState.fridayPrayer
  };

  localStorage.setItem("FLAG_MEDIA_PORTAL_STATE", JSON.stringify(appState));
  updateBadges();

  if (!skipCloud) {
    if (cloudPatch && typeof cloudPatch === "object" && Object.keys(cloudPatch).length > 0) {
      saveToCloud(cloudPatch, true);
    } else {
      saveToCloud(appState, false);
    }
  }
}

// Manual Save Handler for Admin Console Button
function manualSaveSchedule() {
  saveState();
  renderAll();

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const statusEl = document.getElementById("saveStatusIndicator");
  if (statusEl) {
    if (cloudSyncConnected) {
      statusEl.innerHTML = `✅ Saved locally &amp; ☁️ Synced to Cloud at <strong>${timeStr}</strong>!`;
    } else {
      statusEl.innerHTML = `✅ All changes successfully saved locally at <strong>${timeStr}</strong>!`;
    }
  }

  const saveBtns = document.querySelectorAll(".btn-save-schedule");
  saveBtns.forEach(btn => {
    btn.classList.add("saved-pulse");
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `✅ Saved!`;
    setTimeout(() => {
      btn.classList.remove("saved-pulse");
      btn.innerHTML = originalHtml;
    }, 1200);
  });

  if (cloudSyncConnected) {
    showToast(`💾 Schedule saved & ☁️ synced to Cloud at ${timeStr}!`);
  } else {
    showToast(`💾 Schedule saved locally at ${timeStr}!`);
  }
}

function getMonthName(mIndex) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[mIndex];
}

function initCalendarSelectors() {
  const mSelect = document.getElementById("selectMonth");
  const ySelect = document.getElementById("selectYear");
  if (mSelect) mSelect.value = String(appState.selectedMonth);
  if (ySelect) ySelect.value = String(appState.selectedYear);
}

// When user selects a new Month or Year from the dropdowns
function onMonthYearChange() {
  const mSelect = document.getElementById("selectMonth");
  const ySelect = document.getElementById("selectYear");
  const newMonth = parseInt(mSelect.value, 10);
  const newYear = parseInt(ySelect.value, 10);

  // Save current active schedule before switching
  saveState();

  appState.selectedMonth = newMonth;
  appState.selectedYear = newYear;
  appState.month = `${getMonthName(newMonth)} ${newYear}`;

  const key = `${newYear}-${newMonth}`;

  // If this month already has a saved schedule, load it!
  if (appState.schedules && appState.schedules[key]) {
    appState.firstService = appState.schedules[key].firstService;
    appState.secondService = appState.schedules[key].secondService;
    appState.thirdService = appState.schedules[key].thirdService;
    appState.fridayPrayer = appState.schedules[key].fridayPrayer;
  } else {
    // Automatically generate all Sunday & Friday dates for this month!
    generateScheduleForMonth(newYear, newMonth);
  }

  saveState();
  renderAll();
  showToast(`Loaded dates for ${getMonthName(newMonth)} ${newYear}!`);
}

// Automatically generate dates for any month & year
function generateScheduleForMonth(year, monthIndex) {
  const sundays = calculateDatesInMonth(year, monthIndex, 0); // 0 = Sunday
  const fridays = calculateDatesInMonth(year, monthIndex, 5); // 5 = Friday

  appState.firstService = sundays.map((dateStr, idx) => ({
    id: Date.now() + idx,
    date: dateStr,
    cam1: "",
    cam2: "",
    gimble: "",
    live: "",
    spot: "",
    charging: ""
  }));

  appState.secondService = sundays.map((dateStr, idx) => ({
    id: Date.now() + idx + 100,
    date: dateStr,
    operator: ""
  }));

  appState.thirdService = sundays.map((dateStr, idx) => ({
    id: Date.now() + idx + 200,
    date: dateStr,
    operator: ""
  }));

  appState.fridayPrayer = fridays.map((dateStr, idx) => ({
    id: Date.now() + idx + 300,
    date: dateStr,
    cam1: "",
    live: ""
  }));
}

// User button to force re-sync dates for current month
function regenerateCurrentMonthDates() {
  if (confirm(`Automatically re-generate all Sunday and Friday dates for ${getMonthName(appState.selectedMonth)} ${appState.selectedYear}? (Current month slots will reset — you can press Undo right after if needed.)`)) {
    pushScheduleUndoSnapshot(`Sync Dates (${getMonthName(appState.selectedMonth)} ${appState.selectedYear})`);
    generateScheduleForMonth(appState.selectedYear, appState.selectedMonth);
    saveState();
    renderAll();
    showToast(`Re-generated all dates for ${getMonthName(appState.selectedMonth)}! (Undo available)`);
  }
}

// ================= TWO-PERSON ON-DEMAND PAIRING =================
let modalTargetContext = null;

function openPairModal(serviceType, index, field) {
  modalTargetContext = { serviceType, index, field };
  const s1 = document.getElementById("modalPairSelect1");
  const s2 = document.getElementById("modalPairSelect2");

  let opts = `<option value="">-- Select Person --</option>`;
  appState.members.forEach(m => {
    opts += `<option value="${m.name}">${m.name}</option>`;
  });

  s1.innerHTML = opts;
  s2.innerHTML = opts;

  if (appState.members.length >= 2) {
    s1.selectedIndex = 1;
    s2.selectedIndex = 2;
  }

  document.getElementById("pairModal").classList.add("show");
}

function closePairModal() {
  document.getElementById("pairModal").classList.remove("show");
  modalTargetContext = null;
  renderAll();
}

function confirmModalPair() {
  if (!modalTargetContext) return;
  const m1 = document.getElementById("modalPairSelect1").value;
  const m2 = document.getElementById("modalPairSelect2").value;

  if (!m1 || !m2) {
    alert("Please select both persons.");
    return;
  }
  if (m1 === m2) {
    alert("Please select two different persons.");
    return;
  }

  const pairName = `${m1} & ${m2}`;
  const { serviceType, index, field } = modalTargetContext;
  pushScheduleUndoSnapshot(`Pair: ${pairName}`);
  if (serviceType === "morningPrayer" && appState.morningPrayer && appState.morningPrayer.days && appState.morningPrayer.days[index]) {
    appState.morningPrayer.days[index][field] = pairName;
  } else if (appState[serviceType] && appState[serviceType][index]) {
    appState[serviceType][index][field] = pairName;
  }

  saveState();
  closePairModal();
  renderAll();
  if (!notifyIfSlotHasConflict(serviceType, index, field)) {
    showToast(`Assigned ${pairName}!`);
  }
}

// Helper to format clean names on Public Roster (Highlights selected volunteer & Away alerts)
function badgeForName(name, dateStr = "") {
  if (!name || name.trim() === "" || name.trim() === "-") {
    return `<span class="roster-empty">&mdash;</span>`;
  }
  const isPersonal = window.currentVolunteerFilter && 
    isAliasMatch(name, window.currentVolunteerFilter);
  const highlightClass = isPersonal ? " roster-highlight-personal" : "";

  let awayBadge = "";
  if (dateStr) {
    const awayPeople = splitAssignedNames(name).filter(p => isMemberUnavailableOnDate(p, dateStr));
    if (awayPeople.length > 0) {
      awayBadge = ` <span class="roster-away-flag" title="${escapeHtml(awayPeople.join(', '))} marked Away on ${escapeHtml(dateStr)}">🚫 Away</span>`;
    }
  }

  if (name.includes("&")) {
    return `<span class="roster-name roster-pair${highlightClass}"><span class="roster-icon">👥</span><span>${name}</span>${awayBadge}</span>`;
  }
  return `<span class="roster-name${highlightClass}"><span>${name}</span>${awayBadge}</span>`;
}

// ================= RENDER PUBLIC READ-ONLY SCHEDULE (VOLUNTEER VIEW) =================
let currentScheduleLayoutMode = localStorage.getItem("FLAG_SCHEDULE_LAYOUT_MODE") || "table";

function setScheduleLayoutMode(mode) {
  currentScheduleLayoutMode = mode || "table";
  try { localStorage.setItem("FLAG_SCHEDULE_LAYOUT_MODE", currentScheduleLayoutMode); } catch (e) {}

  updateScheduleLayoutVisibility();
  showToast(currentScheduleLayoutMode === "card" ? "📱 Switched to Mobile Card View" : "📋 Switched to Table View");
}

function updateScheduleLayoutVisibility() {
  const isCard = currentScheduleLayoutMode === "card";
  const tableWraps = document.querySelectorAll("#scheduleView .table-wrap");
  const cardGrids = document.querySelectorAll("#scheduleView .schedule-cards-grid");
  const tableHints = document.querySelectorAll("#scheduleView .mobile-table-hint");

  tableWraps.forEach(el => el.style.display = isCard ? "none" : "block");
  cardGrids.forEach(el => el.style.display = isCard ? "grid" : "none");
  tableHints.forEach(el => el.style.display = isCard ? "none" : "");

  const tableBtn = document.getElementById("schedViewTableBtn");
  const cardBtn = document.getElementById("schedViewCardBtn");
  if (tableBtn) tableBtn.classList.toggle("active", !isCard);
  if (cardBtn) cardBtn.classList.toggle("active", isCard);
}

function renderPublicSchedule() {
  // 1. 1st Service Public (Table View)
  const t1 = document.getElementById("publicTbody1stService");
  if (t1) {
    t1.innerHTML = "";
    (appState.firstService || []).forEach(r => {
      const prepDate = getPreviousDayDateStr(r.date) || r.date;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-blue">${r.date}</span></td>
        <td>${badgeForName(r.cam1, r.date)}</td>
        <td>${badgeForName(r.cam2, r.date)}</td>
        <td>${badgeForName(r.gimble, r.date)}</td>
        <td>${badgeForName(r.live, r.date)}</td>
        <td>${badgeForName(r.spot, r.date)}</td>
        <td>${badgeForName(r.charging, prepDate)}</td>
      `;
      t1.appendChild(tr);
    });
  }

  // 1st Service Public (Mobile Card View)
  const c1 = document.getElementById("publicCards1stService");
  if (c1) {
    c1.innerHTML = "";
    (appState.firstService || []).forEach(r => {
      const prepDate = getPreviousDayDateStr(r.date) || r.date;
      const card = document.createElement("div");
      card.className = "schedule-service-card card-accent-blue";
      card.innerHTML = `
        <div class="sched-card-top">
          <div class="sched-card-date">📅 ${r.date}</div>
          <span class="duty-badge-time">🙏 Prayer: 05:30 AM | Service: 06:00 AM &ndash; 08:00 AM</span>
        </div>
        <div class="sched-card-roles">
          <div class="sched-role-row">
            <span class="sched-role-label">🎥 1st Cam:</span>
            <div class="sched-role-val">${badgeForName(r.cam1, r.date)}</div>
          </div>
          <div class="sched-role-row">
            <span class="sched-role-label">📹 2nd Cam:</span>
            <div class="sched-role-val">${badgeForName(r.cam2, r.date)}</div>
          </div>
          <div class="sched-role-row">
            <span class="sched-role-label">🎯 Gimble:</span>
            <div class="sched-role-val">${badgeForName(r.gimble, r.date)}</div>
          </div>
          <div class="sched-role-row">
            <span class="sched-role-label">💻 Live System:</span>
            <div class="sched-role-val">${badgeForName(r.live, r.date)}</div>
          </div>
          <div class="sched-role-row">
            <span class="sched-role-label">✂️ Spot Editing:</span>
            <div class="sched-role-val">${badgeForName(r.spot, r.date)}</div>
          </div>
          <div class="sched-role-row">
            <span class="sched-role-label">🔋 Battery & Charging (Sat):</span>
            <div class="sched-role-val">${badgeForName(r.charging, prepDate)}</div>
          </div>
        </div>
      `;
      c1.appendChild(card);
    });
  }

  // 2. 2nd Service Public (Table View)
  const t2 = document.getElementById("publicTbody2ndService");
  if (t2) {
    t2.innerHTML = "";
    (appState.secondService || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-amber">${r.date}</span></td>
        <td>${badgeForName(r.operator, r.date)}</td>
      `;
      t2.appendChild(tr);
    });
  }

  // 2nd Service Public (Mobile Card View)
  const c2 = document.getElementById("publicCards2ndService");
  if (c2) {
    c2.innerHTML = "";
    (appState.secondService || []).forEach(r => {
      const card = document.createElement("div");
      card.className = "schedule-service-card card-accent-amber";
      card.innerHTML = `
        <div class="sched-card-top">
          <div class="sched-card-date">📅 ${r.date}</div>
          <span class="duty-badge-time">🙏 Prayer: 08:00 AM | Service: 08:30 AM &ndash; 10:30 AM</span>
        </div>
        <div class="sched-card-roles">
          <div class="sched-role-row">
            <span class="sched-role-label">🎥 Cam & Live Operator:</span>
            <div class="sched-role-val">${badgeForName(r.operator, r.date)}</div>
          </div>
        </div>
      `;
      c2.appendChild(card);
    });
  }

  // 3. 3rd Service Public (Table View)
  const t3 = document.getElementById("publicTbody3rdService");
  if (t3) {
    t3.innerHTML = "";
    (appState.thirdService || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-purple">${r.date}</span></td>
        <td>${badgeForName(r.operator, r.date)}</td>
      `;
      t3.appendChild(tr);
    });
  }

  // 3rd Service Public (Mobile Card View)
  const c3 = document.getElementById("publicCards3rdService");
  if (c3) {
    c3.innerHTML = "";
    (appState.thirdService || []).forEach(r => {
      const card = document.createElement("div");
      card.className = "schedule-service-card card-accent-purple";
      card.innerHTML = `
        <div class="sched-card-top">
          <div class="sched-card-date">📅 ${r.date}</div>
          <span class="duty-badge-time">🙏 Prayer: 10:30 AM | Service: 11:00 AM &ndash; 01:00 PM</span>
        </div>
        <div class="sched-card-roles">
          <div class="sched-role-row">
            <span class="sched-role-label">🎥 Cam & Live Operator:</span>
            <div class="sched-role-val">${badgeForName(r.operator, r.date)}</div>
          </div>
        </div>
      `;
      c3.appendChild(card);
    });
  }

  // 4. Friday Fasting Public (Table View)
  const tf = document.getElementById("publicTbodyFridayService");
  if (tf) {
    tf.innerHTML = "";
    (appState.fridayPrayer || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-emerald">${r.date}</span></td>
        <td>${badgeForName(r.cam1, r.date)}</td>
        <td>${badgeForName(r.live, r.date)}</td>
      `;
      tf.appendChild(tr);
    });
  }

  // Friday Fasting Public (Mobile Card View)
  const cf = document.getElementById("publicCardsFridayService");
  if (cf) {
    cf.innerHTML = "";
    (appState.fridayPrayer || []).forEach(r => {
      const card = document.createElement("div");
      card.className = "schedule-service-card card-accent-emerald";
      card.innerHTML = `
        <div class="sched-card-top">
          <div class="sched-card-date">📅 ${r.date}</div>
          <span class="duty-badge-time">🙏 Prayer: 09:30 AM | Service: 10:00 AM &ndash; 01:00 PM</span>
        </div>
        <div class="sched-card-roles">
          <div class="sched-role-row">
            <span class="sched-role-label">🎥 1st Cam:</span>
            <div class="sched-role-val">${badgeForName(r.cam1, r.date)}</div>
          </div>
          <div class="sched-role-row">
            <span class="sched-role-label">💻 Live System:</span>
            <div class="sched-role-val">${badgeForName(r.live, r.date)}</div>
          </div>
        </div>
      `;
      cf.appendChild(card);
    });
  }

  // Special Event Services Public
  const publicSpecialCard = document.getElementById("specialEventsSection");
  const isSpecialActive = appState.specialMeetingsEnabled !== false;
  if (publicSpecialCard) {
    publicSpecialCard.style.display = isSpecialActive ? "block" : "none";
  }

  const ts = document.getElementById("publicTbodySpecialMeetings");
  const countEl = document.getElementById("countAllFestivals");
  const allSpecial = appState.specialMeetings || [];
  if (countEl) countEl.textContent = allSpecial.length;

  // Dynamically render festival category filter chips including custom categories
  const filterChipsContainer = document.getElementById("festivalFilterChips");
  const currentFilter = window.currentFestivalFilter || "all";
  if (filterChipsContainer) {
    let chipsHtml = `
      <button type="button" class="festival-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all" onclick="filterFestivalRoster('all', this)">All Events (<span id="countAllFestivals">${allSpecial.length}</span>)</button>
      <button type="button" class="festival-filter-btn ${currentFilter === 'christmas' ? 'active' : ''}" data-filter="christmas" onclick="filterFestivalRoster('christmas', this)">🎄 Christmas</button>
      <button type="button" class="festival-filter-btn ${currentFilter === 'newyear' ? 'active' : ''}" data-filter="newyear" onclick="filterFestivalRoster('newyear', this)">🕊️ New Year</button>
      <button type="button" class="festival-filter-btn ${currentFilter === 'easter' ? 'active' : ''}" data-filter="easter" onclick="filterFestivalRoster('easter', this)">✝️ Easter</button>
      <button type="button" class="festival-filter-btn ${currentFilter === 'miracle' ? 'active' : ''}" data-filter="miracle" onclick="filterFestivalRoster('miracle', this)">🔥 Miracle Nights</button>
    `;
    (appState.customFestivalCategories || []).forEach(cc => {
      const id = (typeof cc === 'string' ? cc : cc.id).toLowerCase();
      const label = typeof cc === 'string' ? cc : cc.label;
      const icon = (typeof cc === 'object' && cc.icon) ? cc.icon : "✨";
      chipsHtml += `<button type="button" class="festival-filter-btn ${currentFilter === id ? 'active' : ''}" data-filter="${escapeHtml(id)}" onclick="filterFestivalRoster('${escapeHtml(id)}', this)">${icon} ${escapeHtml(label)}</button>`;
    });
    chipsHtml += `<button type="button" class="festival-filter-btn ${currentFilter === 'other' ? 'active' : ''}" data-filter="other" onclick="filterFestivalRoster('other', this)">✨ Other Specials</button>`;
    filterChipsContainer.innerHTML = chipsHtml;
  }

  const filteredEvents = allSpecial.filter(r => {
    if (currentFilter === "all") return true;
    const cat = (r.category || inferFestivalCategory(r.title)).toLowerCase();
    if (currentFilter === "other") {
      const standard = ["christmas", "newyear", "easter", "miracle"];
      const customIds = (appState.customFestivalCategories || []).map(c => (typeof c === 'string' ? c : c.id).toLowerCase());
      return !standard.includes(cat) && !customIds.includes(cat);
    }
    return cat === currentFilter.toLowerCase();
  });

  if (ts) {
    ts.innerHTML = "";
    if (filteredEvents.length === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="8" style="text-align: center; padding: 24px; color: var(--text-muted);">
        ✨ No events under filter "<strong>${escapeHtml(currentFilter)}</strong>". Switch to <strong>All Events</strong> or load presets from Admin Console!
      </td>`;
      ts.appendChild(tr);
    } else {
      filteredEvents.forEach(r => {
        const cat = r.category || inferFestivalCategory(r.title);
        const meta = getFestivalCategoryMeta(cat);
        const tr = document.createElement("tr");
        tr.className = `festival-table-row festival-row-${cat}`;
        tr.innerHTML = `
          <td>
            <div class="festival-title-cell">
              <span class="festival-badge ${meta.badgeClass}">${meta.icon} ${meta.label}</span>
              <strong class="festival-name-text">${escapeHtml(r.title || 'Special Event')}</strong>
              ${r.notes ? `<span class="festival-notes-sub">📝 ${escapeHtml(r.notes)}</span>` : ''}
            </div>
          </td>
          <td>
            <div class="festival-datetime-cell">
              <span class="date-chip date-chip-purple">${escapeHtml(r.date)}</span>
              ${r.time ? `<span class="festival-time-sub">⏰ ${escapeHtml(r.time)}</span>` : ''}
            </div>
          </td>
          <td>
            <span class="call-time-badge festival-call-time">🔔 ${escapeHtml(r.callTime || '45m prior')}</span>
          </td>
          <td>${badgeForName(r.cam1, r.date)}</td>
          <td>${badgeForName(r.cam2, r.date)}</td>
          <td>${badgeForName(r.gimble, r.date)}</td>
          <td>${badgeForName(r.live, r.date)}</td>
          <td>${badgeForName(r.spot, r.date)}</td>
        `;
        ts.appendChild(tr);
      });
    }
  }

  // Special Meetings Public (Mobile Card View)
  const cs = document.getElementById("publicCardsSpecialMeetings");
  if (cs) {
    cs.innerHTML = "";
    if (filteredEvents.length === 0) {
      cs.innerHTML = `<div class="card" style="text-align:center; padding: 20px; color: var(--text-muted);">
        ✨ No events under filter "<strong>${escapeHtml(currentFilter)}</strong>".
      </div>`;
    } else {
      filteredEvents.forEach(r => {
        const cat = r.category || inferFestivalCategory(r.title);
        const meta = getFestivalCategoryMeta(cat);
        const card = document.createElement("div");
        card.className = `schedule-service-card card-accent-special festival-card festival-card-${cat}`;
        card.innerHTML = `
          <div class="sched-card-top festival-card-top">
            <div class="festival-card-header-main">
              <span class="festival-badge ${meta.badgeClass}">${meta.icon} ${meta.label}</span>
              <div class="sched-card-date festival-card-title">${escapeHtml(r.title || 'Special Meeting')}</div>
            </div>
            <div class="festival-card-chips">
              <span class="duty-badge-time">📅 ${escapeHtml(r.date)}</span>
              ${r.time ? `<span class="festival-time-chip">⏰ ${escapeHtml(r.time)}</span>` : ''}
              <span class="call-time-badge festival-call-badge">🔔 Call: ${escapeHtml(r.callTime || '45m prior')}</span>
            </div>
            ${r.notes ? `<div class="festival-card-notes">📝 ${escapeHtml(r.notes)}</div>` : ''}
          </div>
          <div class="sched-card-roles">
            <div class="sched-role-row">
              <span class="sched-role-label">🎥 1st Cam:</span>
              <div class="sched-role-val">${badgeForName(r.cam1, r.date)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">📹 2nd Cam:</span>
              <div class="sched-role-val">${badgeForName(r.cam2, r.date)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">🎯 Gimble:</span>
              <div class="sched-role-val">${badgeForName(r.gimble, r.date)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">💻 Live System:</span>
              <div class="sched-role-val">${badgeForName(r.live, r.date)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">✂️ Spot Edit:</span>
              <div class="sched-role-val">${badgeForName(r.spot, r.date)}</div>
            </div>
          </div>
        `;
        cs.appendChild(card);
      });
    }
  }

  // Early Morning Prayer Public (Only shown if enabled)
  const publicMorningCard = document.getElementById("publicMorningPrayerCard");
  const isMorningPrayerActive = !!(appState.morningPrayer && appState.morningPrayer.enabled);
  if (publicMorningCard) {
    publicMorningCard.style.display = isMorningPrayerActive ? "block" : "none";
  }

  // Early Morning Prayer Public (Mobile Card View)
  const cm = document.getElementById("publicCardsMorningPrayer");
  if (cm) {
    cm.innerHTML = "";
    if (appState.morningPrayer && appState.morningPrayer.days) {
      appState.morningPrayer.days.forEach(r => {
        const card = document.createElement("div");
        card.className = "schedule-service-card card-accent-morning";
        card.innerHTML = `
          <div class="sched-card-top">
            <div class="sched-card-date">🌅 ${r.day}</div>
            <span class="duty-badge-time">⏰ Call: 05:00 AM</span>
          </div>
          <div class="sched-card-roles">
            <div class="sched-role-row">
              <span class="sched-role-label">🎥 1st Cam:</span>
              <div class="sched-role-val">${badgeForName(r.cam1)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">📹 2nd Cam:</span>
              <div class="sched-role-val">${badgeForName(r.cam2)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">🎯 Gimble:</span>
              <div class="sched-role-val">${badgeForName(r.gimbal)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">💻 Live Editor:</span>
              <div class="sched-role-val">${badgeForName(r.liveEditor)}</div>
            </div>
            <div class="sched-role-row">
              <span class="sched-role-label">✂️ Social Media:</span>
              <div class="sched-role-val">${badgeForName(r.socialMedia)}</div>
            </div>
          </div>
        `;
        cm.appendChild(card);
      });
    }
  }

  const tm = document.getElementById("publicTbodyMorningPrayer");
  const publicMorningTitleEl = document.getElementById("publicMorningPrayerTitle");
  if (publicMorningTitleEl && appState.morningPrayer && appState.morningPrayer.title) {
    publicMorningTitleEl.textContent = `🌅 ${appState.morningPrayer.title}`;
  }
  if (tm) {
    tm.innerHTML = "";
    if (appState.morningPrayer && appState.morningPrayer.days) {
      appState.morningPrayer.days.forEach(r => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><span class="date-chip date-chip-amber">${r.day}</span></td>
          <td>${badgeForName(r.cam1)}</td>
          <td>${badgeForName(r.cam2)}</td>
          <td>${badgeForName(r.gimbal)}</td>
          <td>${badgeForName(r.liveEditor)}</td>
          <td>${badgeForName(r.socialMedia)}</td>
        `;
        tm.appendChild(tr);
      });
    }
  }

  // Update layout visibility according to current mode
  updateScheduleLayoutVisibility();
}

// ================= SMARTER SCHEDULING, AVAILABILITY, CONFLICTS & UNDO (V4.7) =================
const SCHEDULE_UNDO_STORAGE_KEY = "FLAG_MEDIA_SCHEDULE_UNDO_STACK";
const MAX_SCHEDULE_UNDO = 15;
let scheduleUndoStack = null;

const SERVICE_DURATION_HOURS = {
  firstService: 2.5,
  secondService: 2.5,
  thirdService: 2.5,
  fridayPrayer: 3.5,
  morningPrayer: 1.5,
  specialMeetings: 3.0,
  saturdayPrep: 1.0
};

const SLOT_ROLE_KEYWORDS = {
  cam1: ["camera 1", "camera", "cam"],
  cam2: ["camera 2", "camera", "cam"],
  gimble: ["gimble", "gimbal", "leader"],
  gimbal: ["gimbal", "gimble", "leader"],
  live: ["live in system", "live system", "live", "system", "media tech"],
  liveEditor: ["live in system", "live system", "live", "system"],
  spot: ["spot editing", "spot", "reels", "edit"],
  socialMedia: ["spot editing", "reels", "social", "edit"],
  charging: ["charging", "battery"],
  secondOperator: ["2nd service", "cam & live", "camera", "live"],
  thirdOperator: ["3rd service", "solo", "camera", "live"]
};

function splitAssignedNames(val) {
  if (!val) return [];
  return String(val)
    .split(/\s*&\s*|\s+and\s+/i)
    .map(n => n.trim())
    .filter(n => n && n !== "—" && n !== "--" && n !== "-");
}

function resolveCanonicalMemberName(rawName) {
  const clean = (rawName || "").trim();
  if (!clean) return "";
  if (appState && Array.isArray(appState.members)) {
    const found = appState.members.find(m => isAliasMatch(m.name, clean));
    if (found) return found.name;
  }
  return clean;
}

function normalizeScheduleDateKey(dateStr) {
  const raw = (dateStr || "").trim();
  if (!raw) return "";
  const months = {
    jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
    jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12"
  };
  const isoMatch = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    return `${isoMatch[1]}-${isoMatch[2].padStart(2, "0")}-${isoMatch[3].padStart(2, "0")}`;
  }
  const parts = raw.split(/[\s-]+/);
  if (parts.length >= 3) {
    const day = parts[0].replace(/\D/g, "");
    const mKey = (parts[1] || "").slice(0, 3).toLowerCase();
    const year = parts[2].replace(/\D/g, "");
    if (day && months[mKey] && year.length === 4) {
      return `${year}-${months[mKey]}-${day.padStart(2, "0")}`;
    }
  }
  return "";
}

function formatDateKeyToDisplay(dateKey) {
  const m = String(dateKey || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return dateKey || "";
  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monIdx = parseInt(m[2], 10) - 1;
  return `${m[3]} ${shortMonths[monIdx] || "Jan"} ${m[1]}`;
}

function getPreviousDayDateStr(dateStr) {
  const key = normalizeScheduleDateKey(dateStr);
  if (!key) return "";
  const [y, m, d] = key.split("-").map(Number);
  const prev = new Date(Date.UTC(y, m - 1, d - 1));
  const prevKey = `${prev.getUTCFullYear()}-${String(prev.getUTCMonth() + 1).padStart(2, "0")}-${String(prev.getUTCDate()).padStart(2, "0")}`;
  return formatDateKeyToDisplay(prevKey);
}

function isMemberUnavailableOnDate(memberName, dateStr) {
  const dateKey = normalizeScheduleDateKey(dateStr);
  if (!memberName || !dateKey || !appState || !appState.unavailability) return false;

  return Object.keys(appState.unavailability).some(key => {
    if (!isAliasMatch(key, memberName)) return false;
    const dates = appState.unavailability[key] || [];
    return dates.some(d => normalizeScheduleDateKey(d) === dateKey);
  });
}

function getMemberAwayDatesInMonth(memberName) {
  if (!memberName || !appState || !appState.unavailability) return [];
  const prefix = `${appState.selectedYear}-${String((appState.selectedMonth || 0) + 1).padStart(2, "0")}-`;
  const results = [];
  Object.keys(appState.unavailability).forEach(key => {
    if (!isAliasMatch(key, memberName)) return;
    (appState.unavailability[key] || []).forEach(d => {
      const k = normalizeScheduleDateKey(d);
      if (k && k.startsWith(prefix)) {
        results.push(formatDateKeyToDisplay(k));
      }
    });
  });
  return [...new Set(results)];
}

function getAllActiveMonthAwayEntries() {
  if (!appState || !appState.unavailability) return [];
  const prefix = `${appState.selectedYear}-${String((appState.selectedMonth || 0) + 1).padStart(2, "0")}-`;
  const entries = [];
  Object.keys(appState.unavailability).forEach(memberKey => {
    (appState.unavailability[memberKey] || []).forEach(d => {
      const k = normalizeScheduleDateKey(d);
      if (k && k.startsWith(prefix)) {
        entries.push({ member: resolveCanonicalMemberName(memberKey), dateKey: k, dateLabel: formatDateKeyToDisplay(k) });
      }
    });
  });
  return entries.sort((a, b) => a.dateKey.localeCompare(b.dateKey) || a.member.localeCompare(b.member));
}

function toggleMemberAwayDate(memberName, dateStr) {
  const canonicalMember = resolveCanonicalMemberName(memberName);
  const dateKey = normalizeScheduleDateKey(dateStr);
  if (!canonicalMember || !dateKey) return false;
  if (!appState.unavailability || typeof appState.unavailability !== "object") {
    appState.unavailability = {};
  }

  // Merge any alias keys under canonical name
  const merged = [];
  Object.keys(appState.unavailability).forEach(k => {
    if (isAliasMatch(k, canonicalMember)) {
      (appState.unavailability[k] || []).forEach(d => {
        const dk = normalizeScheduleDateKey(d);
        if (dk && !merged.includes(dk)) merged.push(dk);
      });
      if (k !== canonicalMember) delete appState.unavailability[k];
    }
  });

  const idx = merged.indexOf(dateKey);
  const markedAway = idx === -1;
  if (markedAway) {
    merged.push(dateKey);
  } else {
    merged.splice(idx, 1);
  }
  merged.sort();

  if (merged.length > 0) {
    appState.unavailability[canonicalMember] = merged.map(formatDateKeyToDisplay);
  } else {
    delete appState.unavailability[canonicalMember];
  }

  saveState(false, { unavailability: appState.unavailability });
  renderAll();
  return markedAway;
}

function analyzeScheduleConflicts() {
  const errors = [];
  const warnings = [];
  const cellSeverity = {};
  const rowMemberUsage = {};
  const dateUsage = {};
  const dateSundayServices = {};

  if (!appState) return { errors, warnings, cellSeverity, dateUsage };

  const bumpCell = (key, sev) => {
    if (cellSeverity[key] === "error") return;
    cellSeverity[key] = sev;
  };

  const inspectService = (serviceType, serviceLabel, rows, fields, isSundayMultiTrack) => {
    (rows || []).forEach((row, rowIndex) => {
      const dateStr = row.date || row.day || `Row ${rowIndex + 1}`;
      const dateKey = normalizeScheduleDateKey(dateStr) || `label:${dateStr}`;
      const rowKey = `${serviceType}:${rowIndex}`;
      const seenInRow = {};

      if (!rowMemberUsage[rowKey]) rowMemberUsage[rowKey] = new Set();
      if (!dateUsage[dateKey]) dateUsage[dateKey] = {};

      fields.forEach(field => {
        const rawVal = row[field.key];
        const names = splitAssignedNames(rawVal);
        const slotKey = `${serviceType}:${rowIndex}:${field.key}`;
        const isSatPrep = Boolean(field.saturdayPrep);
        // Saturday prep roles (like Camera Charging) happen the day before Sunday service
        const effectiveDateStr = (isSatPrep && row.date) ? (getPreviousDayDateStr(row.date) || row.date) : row.date;
        const effectiveDateKey = normalizeScheduleDateKey(effectiveDateStr) || dateKey;

        if (!dateUsage[effectiveDateKey]) dateUsage[effectiveDateKey] = {};

        names.forEach(rawPerson => {
          const person = resolveCanonicalMemberName(rawPerson);
          if (!isSatPrep) {
            rowMemberUsage[rowKey].add(person);
          }
          if (!dateUsage[effectiveDateKey][person]) dateUsage[effectiveDateKey][person] = [];
          dateUsage[effectiveDateKey][person].push({ serviceType, serviceLabel, rowIndex, field: field.key, roleLabel: field.label });

          if (!isSatPrep) {
            if (!seenInRow[person]) seenInRow[person] = [];
            seenInRow[person].push({ field: field.key, label: field.label, slotKey });
          }

          if (effectiveDateStr && isMemberUnavailableOnDate(person, effectiveDateStr)) {
            bumpCell(slotKey, "error");
            errors.push({
              level: "error",
              type: "unavailable",
              serviceType,
              rowIndex,
              field: field.key,
              date: effectiveDateStr,
              memberName: person,
              message: `${effectiveDateStr} (${serviceLabel} • ${field.label}): ${person} is marked Away / Unavailable`
            });
          }

          if (!isSatPrep && isSundayMultiTrack && row.date) {
            if (!dateSundayServices[dateKey]) dateSundayServices[dateKey] = {};
            if (!dateSundayServices[dateKey][person]) dateSundayServices[dateKey][person] = [];
            dateSundayServices[dateKey][person].push({ serviceType, serviceLabel, slotKey, date: row.date });
          }
        });
      });

      Object.keys(seenInRow).forEach(person => {
        const slots = seenInRow[person];
        if (slots.length > 1) {
          slots.forEach(s => bumpCell(s.slotKey, "error"));
          errors.push({
            level: "error",
            type: "double-booked",
            serviceType,
            rowIndex,
            field: slots[0].field,
            fields: slots.map(s => s.field),
            date: dateStr,
            memberName: person,
            message: `${dateStr} (${serviceLabel}): ${person} double-booked in ${slots.map(s => s.label).join(" + ")}`
          });
        }
      });
    });
  };

  inspectService("firstService", "1st Service", appState.firstService, [
    { key: "cam1", label: "1st Cam" },
    { key: "cam2", label: "2nd Cam" },
    { key: "gimble", label: "Gimble" },
    { key: "live", label: "Live System" },
    { key: "spot", label: "Spot Editing" },
    { key: "charging", label: "Charging (Sat Prep)", saturdayPrep: true }
  ], true);

  inspectService("secondService", "2nd Service", appState.secondService, [
    { key: "operator", label: "2nd Service Op" }
  ], true);

  inspectService("thirdService", "3rd Service", appState.thirdService, [
    { key: "operator", label: "3rd Service Op" }
  ], true);

  inspectService("fridayPrayer", "Friday Prayer", appState.fridayPrayer, [
    { key: "cam1", label: "1st Cam" },
    { key: "live", label: "Live System" }
  ], false);

  inspectService("specialMeetings", "Special Meeting", appState.specialMeetings, [
    { key: "cam1", label: "1st Cam" },
    { key: "cam2", label: "2nd Cam" },
    { key: "gimble", label: "Gimble" },
    { key: "live", label: "Live System" },
    { key: "spot", label: "Spot Editing" }
  ], false);

  if (appState.morningPrayer && appState.morningPrayer.enabled) {
    inspectService("morningPrayer", "Morning Prayer", appState.morningPrayer.days, [
      { key: "cam1", label: "1st Cam" },
      { key: "cam2", label: "2nd Cam" },
      { key: "gimbal", label: "Gimbal" },
      { key: "liveEditor", label: "Live Editor" },
      { key: "socialMedia", label: "Social Media" }
    ], false);
  }

  // Flag multi-service Sunday overload (assigned across >1 distinct Sunday services on same date)
  Object.keys(dateSundayServices).forEach(dateKey => {
    const byPerson = dateSundayServices[dateKey];
    Object.keys(byPerson).forEach(person => {
      const entries = byPerson[person];
      const distinctServices = [...new Set(entries.map(e => e.serviceType))];
      if (distinctServices.length > 1) {
        entries.forEach(e => bumpCell(e.slotKey, "warn"));
        warnings.push({
          level: "warning",
          type: "multi-service",
          date: entries[0].date,
          memberName: person,
          message: `${entries[0].date}: ${person} is scheduled across ${distinctServices.length} Sunday services (${entries.map(e => e.serviceLabel).filter((v, i, a) => a.indexOf(v) === i).join(" & ")})`
        });
      }
    });
  });

  return { errors, warnings, cellSeverity, dateUsage, rowMemberUsage };
}

function getSlotContextAnnotations(serviceType, rowIndex, field) {
  const info = { dateStr: "", dateKey: "", sameRowOtherNames: new Set(), sameDateNames: new Set(), isSaturdayPrep: false };
  if (!appState || !serviceType || rowIndex === undefined || rowIndex === null) return info;

  const row = serviceType === "morningPrayer"
    ? (appState.morningPrayer && appState.morningPrayer.days ? appState.morningPrayer.days[rowIndex] : null)
    : (appState[serviceType] ? appState[serviceType][rowIndex] : null);
  if (!row) return info;

  const isSatChargingSlot = serviceType === "firstService" && field === "charging";
  info.isSaturdayPrep = isSatChargingSlot;
  info.dateStr = isSatChargingSlot && row.date ? (getPreviousDayDateStr(row.date) || row.date) : (row.date || "");
  info.dateKey = normalizeScheduleDateKey(info.dateStr);

  if (!isSatChargingSlot) {
    Object.keys(row).forEach(k => {
      if (k === "id" || k === "date" || k === "day" || k === "title" || k === field) return;
      if (serviceType === "firstService" && k === "charging") return;
      splitAssignedNames(row[k]).forEach(n => info.sameRowOtherNames.add(resolveCanonicalMemberName(n)));
    });

    if (info.dateKey) {
      const collectDateRows = (type, rows, fields) => {
        (rows || []).forEach((r, idx) => {
          if (normalizeScheduleDateKey(r.date) !== info.dateKey) return;
          fields.forEach(f => {
            if (type === serviceType && idx === rowIndex && f === field) return;
            splitAssignedNames(r[f]).forEach(n => info.sameDateNames.add(resolveCanonicalMemberName(n)));
          });
        });
      };
      collectDateRows("firstService", appState.firstService, ["cam1", "cam2", "gimble", "live", "spot"]);
      collectDateRows("secondService", appState.secondService, ["operator"]);
      collectDateRows("thirdService", appState.thirdService, ["operator"]);
      collectDateRows("fridayPrayer", appState.fridayPrayer, ["cam1", "live"]);
      collectDateRows("specialMeetings", appState.specialMeetings, ["cam1", "cam2", "gimble", "live", "spot"]);
    }
  }

  return info;
}

function applyScheduleSelectConflictClasses(analysis) {
  const result = analysis || analyzeScheduleConflicts();
  document.querySelectorAll("#adminScheduleTab select[data-slot]").forEach(sel => {
    sel.classList.remove("select-conflict-error", "select-conflict-warn");
    const slotKey = sel.getAttribute("data-slot");
    const sev = result.cellSeverity[slotKey];
    if (sev === "error") sel.classList.add("select-conflict-error");
    else if (sev === "warn") sel.classList.add("select-conflict-warn");
  });
}

function renderAdminScheduleHealth() {
  const card = document.getElementById("adminScheduleHealthCard");
  if (!card) return;
  const analysis = analyzeScheduleConflicts();
  applyScheduleSelectConflictClasses(analysis);
  updateAwayCountBadge();

  const awayEntries = getAllActiveMonthAwayEntries();
  const errCount = analysis.errors.length;
  const warnCount = analysis.warnings.length;

  card.classList.remove("health-error", "health-warn");
  if (errCount > 0) card.classList.add("health-error");
  else if (warnCount > 0) card.classList.add("health-warn");

  let statusTitle = "✅ Schedule Health: Zero double-bookings or away-date conflicts";
  let badgeHtml = `<span class="header-tag tag-emerald" style="font-size: 0.75rem;">Clean Roster</span>`;

  if (errCount > 0) {
    statusTitle = `🚨 Schedule Conflict Alert (${errCount} ${errCount === 1 ? "issue" : "issues"}${warnCount > 0 ? `, ${warnCount} overload` : ""})`;
    badgeHtml = `<span class="header-tag tag-amber" style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; border-color: rgba(239, 68, 68, 0.45); font-size: 0.75rem;">Action Needed</span>`;
  } else if (warnCount > 0) {
    statusTitle = `⚠️ Workload Advisory (${warnCount} multi-service Sunday ${warnCount === 1 ? "assignment" : "assignments"})`;
    badgeHtml = `<span class="header-tag tag-amber" style="font-size: 0.75rem;">Check Load</span>`;
  }

  let issuesHtml = "";
  if (errCount > 0 || warnCount > 0) {
    issuesHtml = `<div class="health-issues-list">` +
      analysis.errors.map(e => `<div class="health-issue-item issue-error"><span>🔴</span><span>${escapeHtml(e.message)}</span></div>`).join("") +
      analysis.warnings.map(w => `<div class="health-issue-item issue-warn"><span>⚠️</span><span>${escapeHtml(w.message)}</span></div>`).join("") +
      `</div>`;
  }

  let awayHtml = "";
  if (awayEntries.length > 0) {
    awayHtml = `
      <div class="health-away-strip">
        <strong>🚫 Away this month:</strong>
        ${awayEntries.map(a => `<span class="health-chip-away">${escapeHtml(a.member)} (${escapeHtml(a.dateLabel)})</span>`).join("")}
      </div>
    `;
  }

  card.innerHTML = `
    <div class="health-header-row">
      <div class="health-title">${statusTitle}</div>
      ${badgeHtml}
    </div>
    ${issuesHtml}
    ${awayHtml}
  `;
}

function notifyIfSlotHasConflict(serviceType, rowIndex, field) {
  const analysis = analyzeScheduleConflicts();
  const isSatPrepSlot = serviceType === "firstService" && field === "charging";
  const target = analysis.errors.find(e => e.serviceType === serviceType && e.rowIndex === rowIndex && (e.field === field || (Array.isArray(e.fields) && e.fields.includes(field))))
    || (!isSatPrepSlot && analysis.warnings.find(w => {
      const row = appState[serviceType] && appState[serviceType][rowIndex];
      return row && row.date && w.date === row.date && splitAssignedNames(row[field]).some(n => isAliasMatch(n, w.memberName));
    }));

  if (target) {
    showToast(`${target.level === "error" ? "🔴 Conflict" : "⚠️ Notice"}: ${target.message}`);
    return true;
  }
  return false;
}

function updateAwayCountBadge() {
  const badge = document.getElementById("adminAwayCountBadge");
  if (!badge) return;
  badge.textContent = getAllActiveMonthAwayEntries().length;
}

// ----------------- UNDO / SNAPSHOT ENGINE -----------------
function loadUndoStack() {
  if (scheduleUndoStack !== null) return scheduleUndoStack;
  try {
    const raw = localStorage.getItem(SCHEDULE_UNDO_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    scheduleUndoStack = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    scheduleUndoStack = [];
  }
  return scheduleUndoStack;
}

function saveUndoStack() {
  try {
    localStorage.setItem(SCHEDULE_UNDO_STORAGE_KEY, JSON.stringify((scheduleUndoStack || []).slice(-MAX_SCHEDULE_UNDO)));
  } catch (e) {}
}

function pushScheduleUndoSnapshot(label) {
  if (!appState) return;
  const stack = loadUndoStack();
  stack.push({
    label: label || "Schedule Edit",
    timestamp: Date.now(),
    selectedMonth: appState.selectedMonth,
    selectedYear: appState.selectedYear,
    month: appState.month,
    firstService: JSON.parse(JSON.stringify(appState.firstService || [])),
    secondService: JSON.parse(JSON.stringify(appState.secondService || [])),
    thirdService: JSON.parse(JSON.stringify(appState.thirdService || [])),
    fridayPrayer: JSON.parse(JSON.stringify(appState.fridayPrayer || [])),
    specialMeetings: JSON.parse(JSON.stringify(appState.specialMeetings || [])),
    morningPrayer: JSON.parse(JSON.stringify(appState.morningPrayer || {}))
  });
  if (stack.length > MAX_SCHEDULE_UNDO) {
    stack.splice(0, stack.length - MAX_SCHEDULE_UNDO);
  }
  saveUndoStack();
  updateAdminUndoButton();
}

function undoLastScheduleChange() {
  const stack = loadUndoStack();
  if (stack.length === 0) {
    showToast("Nothing to undo yet.");
    return;
  }
  const snap = stack.pop();
  saveUndoStack();

  appState.selectedMonth = snap.selectedMonth;
  appState.selectedYear = snap.selectedYear;
  appState.month = snap.month;
  appState.firstService = snap.firstService || [];
  appState.secondService = snap.secondService || [];
  appState.thirdService = snap.thirdService || [];
  appState.fridayPrayer = snap.fridayPrayer || [];
  appState.specialMeetings = snap.specialMeetings || [];
  if (snap.morningPrayer) appState.morningPrayer = snap.morningPrayer;

  initCalendarSelectors();
  saveState();
  renderAll();
  showToast(`↩️ Undid: ${snap.label}`);
}

function updateAdminUndoButton() {
  const btn = document.getElementById("adminUndoScheduleBtn");
  if (!btn) return;
  const stack = loadUndoStack();
  if (stack.length === 0) {
    btn.disabled = true;
    btn.textContent = "↩️ Undo";
    btn.title = "No recent schedule changes to undo";
  } else {
    const top = stack[stack.length - 1];
    btn.disabled = false;
    btn.textContent = `↩️ Undo (${stack.length})`;
    btn.title = `Undo last change: ${top.label}`;
  }
}

// ----------------- SMART FAIR AUTO-FILL / ROTATION -----------------
function scoreMemberForSlot(memberObj, roleKeywordKey, dateStr, sundayIdx, tracker) {
  const name = memberObj.name;
  const roleStr = (memberObj.role || "").toLowerCase();
  const keywords = SLOT_ROLE_KEYWORDS[roleKeywordKey] || [];
  const matchesRole = keywords.some(kw => roleStr.includes(kw));

  let score = 0;
  if (matchesRole) score += 100;
  // Penalize high existing workload heavily to keep monthly duty counts balanced
  score -= (tracker.shiftCounts[name] || 0) * 18;
  // Avoid scheduling back-to-back Sundays when equal alternatives exist
  if (sundayIdx >= 0 && tracker.lastSundayIdx[name] === sundayIdx - 1) {
    score -= 12;
  }
  // Slight preference against assigning 2nd/3rd Service on top of 1st Service on the same Sunday
  const dKey = normalizeScheduleDateKey(dateStr);
  if (dKey && tracker.assignedOnDate[dKey] && tracker.assignedOnDate[dKey].has(name)) {
    score -= 45;
  }
  // Tiny diversity offset on same role
  const roleUsageKey = `${roleKeywordKey}:${name}`;
  score -= (tracker.roleRepeats[roleUsageKey] || 0) * 4;
  return score;
}

function autoFillMonthSchedule(overwriteAll = false) {
  if (!appState || !appState.members || appState.members.length === 0) {
    showToast("Add crew members first before auto-filling.");
    return;
  }

  const mName = getMonthName(appState.selectedMonth);
  if (overwriteAll) {
    if (!confirm(`Smart Rotate ALL Sunday & Friday slots for ${mName} ${appState.selectedYear}?\n\nThis fairly balances crew roles and automatically skips members marked Away. An Undo snapshot will be saved first.`)) {
      return;
    }
  }

  if (!appState.firstService || appState.firstService.length === 0) {
    generateScheduleForMonth(appState.selectedYear, appState.selectedMonth);
  }

  pushScheduleUndoSnapshot(overwriteAll ? `Smart Rotate (${mName} ${appState.selectedYear})` : `Auto-Fill Open Slots (${mName})`);

  const tracker = {
    shiftCounts: {},
    lastSundayIdx: {},
    assignedOnDate: {},
    roleRepeats: {}
  };
  appState.members.forEach(m => { tracker.shiftCounts[m.name] = 0; });

  const recordPick = (memberName, dateStr, sundayIdx, roleKeywordKey, rowAssignedSet) => {
    const canonical = resolveCanonicalMemberName(memberName);
    if (!canonical) return;
    tracker.shiftCounts[canonical] = (tracker.shiftCounts[canonical] || 0) + 1;
    if (sundayIdx >= 0) tracker.lastSundayIdx[canonical] = sundayIdx;
    const dKey = normalizeScheduleDateKey(dateStr);
    if (dKey) {
      if (!tracker.assignedOnDate[dKey]) tracker.assignedOnDate[dKey] = new Set();
      tracker.assignedOnDate[dKey].add(canonical);
    }
    if (roleKeywordKey) {
      const rKey = `${roleKeywordKey}:${canonical}`;
      tracker.roleRepeats[rKey] = (tracker.roleRepeats[rKey] || 0) + 1;
    }
    if (rowAssignedSet) rowAssignedSet.add(canonical);
  };

  // Seed pre-existing kept slots into tracker first so Open Slot Fill balances around them
  if (!overwriteAll) {
    const seedRows = (rows, fields, isSunday) => {
      (rows || []).forEach((row, idx) => {
        fields.forEach(f => {
          const isSatPrep = isSunday && f === "charging";
          const effectiveDate = isSatPrep && row.date ? (getPreviousDayDateStr(row.date) || row.date) : row.date;
          splitAssignedNames(row[f]).forEach(n => recordPick(n, effectiveDate, isSatPrep ? -1 : (isSunday ? idx : -1), f, null));
        });
      });
    };
    seedRows(appState.firstService, ["cam1", "cam2", "gimble", "live", "spot", "charging"], true);
    seedRows(appState.secondService, ["operator"], true);
    seedRows(appState.thirdService, ["operator"], true);
    seedRows(appState.fridayPrayer, ["cam1", "live"], false);
  }

  let filledCount = 0;
  let skippedUnavailableCount = 0;

  const pickBestForSlot = (dateStr, sundayIdx, roleKeywordKey, rowAssignedSet) => {
    // Pool 1: Available + not in this service row
    let candidates = appState.members.filter(m =>
      !rowAssignedSet.has(m.name) && !isMemberUnavailableOnDate(m.name, dateStr)
    );
    // Pool 2 fallback: Available on another row if row size somehow exceeded team size
    if (candidates.length === 0) {
      candidates = appState.members.filter(m => !isMemberUnavailableOnDate(m.name, dateStr));
    }
    if (candidates.length === 0) {
      skippedUnavailableCount++;
      return "";
    }

    let best = candidates[0];
    let bestScore = -Infinity;
    candidates.forEach(m => {
      const s = scoreMemberForSlot(m, roleKeywordKey, dateStr, sundayIdx, tracker);
      if (s > bestScore) {
        bestScore = s;
        best = m;
      }
    });
    return best.name;
  };

  // Fill Sundays (1st, 2nd, 3rd Services) and Saturday Charging Prep
  const sundayFirstFields = ["cam1", "cam2", "gimble", "live", "spot"];
  (appState.firstService || []).forEach((row, idx) => {
    const rowUsed = new Set();
    if (!overwriteAll) {
      sundayFirstFields.forEach(f => splitAssignedNames(row[f]).forEach(n => rowUsed.add(resolveCanonicalMemberName(n))));
    }
    sundayFirstFields.forEach(f => {
      if (overwriteAll || !row[f] || !String(row[f]).trim()) {
        const chosen = pickBestForSlot(row.date, idx, f, rowUsed);
        row[f] = chosen;
        if (chosen) {
          recordPick(chosen, row.date, idx, f, rowUsed);
          filledCount++;
        }
      }
    });

    // Camera Charging Incharge happens on Saturday before Sunday service (does not clash with Sunday slots)
    if (overwriteAll || !row.charging || !String(row.charging).trim()) {
      const prepDate = row.date ? (getPreviousDayDateStr(row.date) || row.date) : row.date;
      const chosen = pickBestForSlot(prepDate, -1, "charging", new Set());
      row.charging = chosen;
      if (chosen) {
        recordPick(chosen, prepDate, -1, "charging", null);
        filledCount++;
      }
    }
  });

  (appState.secondService || []).forEach((row, idx) => {
    if (overwriteAll || !row.operator || !String(row.operator).trim()) {
      const rowUsed = new Set();
      const chosen = pickBestForSlot(row.date, idx, "secondOperator", rowUsed);
      row.operator = chosen;
      if (chosen) {
        recordPick(chosen, row.date, idx, "secondOperator", rowUsed);
        filledCount++;
      }
    }
  });

  (appState.thirdService || []).forEach((row, idx) => {
    if (overwriteAll || !row.operator || !String(row.operator).trim()) {
      const rowUsed = new Set();
      const chosen = pickBestForSlot(row.date, idx, "thirdOperator", rowUsed);
      row.operator = chosen;
      if (chosen) {
        recordPick(chosen, row.date, idx, "thirdOperator", rowUsed);
        filledCount++;
      }
    }
  });

  // Fill Fridays
  (appState.fridayPrayer || []).forEach(row => {
    const rowUsed = new Set();
    const fields = ["cam1", "live"];
    if (!overwriteAll) {
      fields.forEach(f => splitAssignedNames(row[f]).forEach(n => rowUsed.add(resolveCanonicalMemberName(n))));
    }
    fields.forEach(f => {
      if (overwriteAll || !row[f] || !String(row[f]).trim()) {
        const chosen = pickBestForSlot(row.date, -1, f, rowUsed);
        row[f] = chosen;
        if (chosen) {
          recordPick(chosen, row.date, -1, f, rowUsed);
          filledCount++;
        }
      }
    });
  });

  saveState();
  renderAll();
  if (filledCount === 0 && skippedUnavailableCount === 0) {
    showToast("✅ All slots are already filled! Use 'Smart Rotate Full Month' to re-balance everything.");
  } else {
    showToast(`✨ ${overwriteAll ? "Rotated" : "Auto-filled"} ${filledCount} slots fairly (respecting roles & Away dates)!`);
  }
}

// ----------------- VOLUNTEER AVAILABILITY MODAL -----------------
let currentAvailabilityMember = "";

function openAvailabilityModal(memberName) {
  const members = (appState && appState.members) || [];
  const select = document.getElementById("availabilityMemberSelect");
  const preferred = resolveCanonicalMemberName(memberName || currentAvailabilityMember || window.currentVolunteerFilter || (members[0] ? members[0].name : ""));

  if (select) {
    select.innerHTML = members.map(m =>
      `<option value="${escapeHtml(m.name)}" ${m.name === preferred ? "selected" : ""}>👤 ${escapeHtml(m.name)} (${escapeHtml(m.role || DEFAULT_MEMBER_ROLE)})</option>`
    ).join("");
  }
  currentAvailabilityMember = preferred;
  renderAvailabilityModalContent();

  const modal = document.getElementById("availabilityModal");
  if (modal) modal.classList.add("show");
}

function closeAvailabilityModal() {
  const modal = document.getElementById("availabilityModal");
  if (modal) modal.classList.remove("show");
}

function onAvailabilityMemberChange(memberName) {
  currentAvailabilityMember = resolveCanonicalMemberName(memberName);
  renderAvailabilityModalContent();
}

function toggleModalAwayDate(dateStr) {
  if (!currentAvailabilityMember) return;
  const markedAway = toggleMemberAwayDate(currentAvailabilityMember, dateStr);
  renderAvailabilityModalContent();

  const dutiesOnDate = getVolunteerDuties(currentAvailabilityMember).filter(d =>
    normalizeScheduleDateKey(d.date) === normalizeScheduleDateKey(dateStr)
  );
  if (markedAway && dutiesOnDate.length > 0) {
    showToast(`🚫 Marked Away on ${dateStr}. Note: you are scheduled (${dutiesOnDate[0].serviceShort}) — tap Swap / Absence to notify the team!`);
  } else {
    showToast(markedAway ? `🚫 Marked ${currentAvailabilityMember} Away on ${dateStr}` : `✅ ${currentAvailabilityMember} marked Available on ${dateStr}`);
  }
}

function addCustomAvailabilityAwayDate() {
  const input = document.getElementById("availabilityCustomDateInput");
  if (!input || !input.value) {
    showToast("Please choose a calendar date first.");
    return;
  }
  const formatted = formatDateKeyToDisplay(input.value);
  if (!isMemberUnavailableOnDate(currentAvailabilityMember, formatted)) {
    toggleModalAwayDate(formatted);
  } else {
    showToast(`${currentAvailabilityMember} is already marked Away on ${formatted}.`);
  }
  input.value = "";
}

function renderAvailabilityModalContent() {
  const grid = document.getElementById("availabilityDatesGrid");
  const summaryEl = document.getElementById("availabilityTeamSummary");
  if (!grid) return;

  // Collect all unique dates in active month (Sundays, Fridays, Special Meetings + member's custom away dates)
  const dateMap = new Map();
  const addDateOption = (rawDate, tag) => {
    const key = normalizeScheduleDateKey(rawDate);
    if (!key) return;
    if (!dateMap.has(key)) {
      dateMap.set(key, { dateKey: key, label: formatDateKeyToDisplay(key), tags: new Set() });
    }
    if (tag) dateMap.get(key).tags.add(tag);
  };

  (appState.firstService || []).forEach(r => addDateOption(r.date, "Sunday"));
  (appState.fridayPrayer || []).forEach(r => addDateOption(r.date, "Friday"));
  (appState.specialMeetings || []).forEach(r => addDateOption(r.date, r.title || "Special"));
  if (appState.unavailability && currentAvailabilityMember) {
    Object.keys(appState.unavailability).forEach(k => {
      if (isAliasMatch(k, currentAvailabilityMember)) {
        (appState.unavailability[k] || []).forEach(d => addDateOption(d, "Custom"));
      }
    });
  }

  const duties = currentAvailabilityMember ? getVolunteerDuties(currentAvailabilityMember) : [];
  const dutyByDate = {};
  duties.forEach(d => {
    const dk = normalizeScheduleDateKey(d.date);
    if (dk) dutyByDate[dk] = d;
  });

  const sortedDates = Array.from(dateMap.values()).sort((a, b) => a.dateKey.localeCompare(b.dateKey));
  if (sortedDates.length === 0) {
    grid.innerHTML = `<div style="color: var(--text-muted); font-size: 0.82rem;">No dated services loaded in this month. Use the date picker below.</div>`;
  } else {
    grid.innerHTML = sortedDates.map(item => {
      const isAway = currentAvailabilityMember && isMemberUnavailableOnDate(currentAvailabilityMember, item.label);
      const assignedDuty = dutyByDate[item.dateKey];
      const tagStr = Array.from(item.tags).join(" • ");
      return `
        <button type="button" class="avail-date-pill ${isAway ? "is-away" : ""} ${assignedDuty ? "has-duty" : ""}"
          onclick="toggleModalAwayDate('${escapeQuotes(item.label)}')">
          <span class="avail-pill-date">${isAway ? "🚫" : "✅"} ${escapeHtml(item.label)}</span>
          <span class="avail-pill-sub">${escapeHtml(tagStr)} &bull; ${isAway ? "Away (Tap to clear)" : "Available"}</span>
          ${assignedDuty ? `<span class="avail-pill-duty-warn">📋 Scheduled: ${escapeHtml(assignedDuty.serviceShort)}</span>` : ""}
        </button>
      `;
    }).join("");
  }

  if (summaryEl) {
    const allAway = getAllActiveMonthAwayEntries();
    if (allAway.length === 0) {
      summaryEl.innerHTML = `<span style="font-size: 0.78rem; color: var(--text-muted);">No team members are marked Away for ${escapeHtml(getMonthName(appState.selectedMonth))} ${appState.selectedYear}. Everyone is available!</span>`;
    } else {
      summaryEl.innerHTML = allAway.map(entry => `
        <span class="avail-team-chip">
          <span><strong>${escapeHtml(entry.member)}</strong>: ${escapeHtml(entry.dateLabel)}</span>
          <button type="button" class="avail-chip-remove" title="Remove away mark"
            onclick="toggleMemberAwayDate('${escapeQuotes(entry.member)}', '${escapeQuotes(entry.dateLabel)}'); renderAvailabilityModalContent();">&times;</button>
        </span>
      `).join("");
    }
  }
}

// Master Render
function renderAll() {
  const mName = getMonthName(appState.selectedMonth);
  const sundaysCount = appState.firstService ? appState.firstService.length : 0;
  const fridaysCount = appState.fridayPrayer ? appState.fridayPrayer.length : 0;
  
  const pill = document.getElementById("autoDatePill");
  if (pill) {
    pill.textContent = `📅 ${mName} ${appState.selectedYear}: ${sundaysCount} Sundays • ${fridaysCount} Fridays`;
  }

  // Render both public view and admin dropdowns
  renderPublicSchedule();
  renderOpenCoverBoard();
  render1stService();
  render2ndService();
  render3rdService();
  renderFridayService();
  renderSpecialMeetings();
  renderMorningPrayer();
  renderAdminScheduleHealth();
  updateAdminUndoButton();
  renderMembers();
  renderPublicTeamDirectory();
  renderLeaderBadges();
  renderWorkloadAnalytics();
  renderGearIssues();
  renderChecklists();
  updateBadges();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
  initVolunteerFilter();
  if (window.currentVolunteerFilter) {
    onVolunteerFilterChange(window.currentVolunteerFilter, false);
  }

  const adminMemberBadge = document.getElementById("adminMemberCountBadge");
  if (adminMemberBadge) adminMemberBadge.textContent = appState.members ? appState.members.length : 0;

  // Update Hero Metrics
  const heroMemberCount = document.getElementById("heroMemberCount");
  if (heroMemberCount) heroMemberCount.textContent = `${appState.members ? appState.members.length : 0} Crew Members`;

  const heroActiveMonth = document.getElementById("heroActiveMonth");
  if (heroActiveMonth) heroActiveMonth.textContent = `${mName} ${appState.selectedYear}`;

  const publicActiveMonthBadge = document.getElementById("publicActiveMonthBadge");
  if (publicActiveMonthBadge) publicActiveMonthBadge.textContent = `${mName} ${appState.selectedYear}`;

  const printActiveMonthYear = document.getElementById("printActiveMonthYear");
  if (printActiveMonthYear) printActiveMonthYear.textContent = `${mName} ${appState.selectedYear}`;
}

// Generate Clean Dropdown Options (Members Only + Conflict/Away Hints + On-Demand Pair Option)
function getMemberOptions(selectedVal, serviceType, rowIndex, field) {
  let html = `<option value="">-- Select Member --</option>`;
  const ctx = getSlotContextAnnotations(serviceType, rowIndex, field);

  // 1. List individual members with conflict/availability annotations
  appState.members.forEach(m => {
    const isSel = (m.name === selectedVal) ? "selected" : "";
    let hint = "";
    if (ctx.dateStr && isMemberUnavailableOnDate(m.name, ctx.dateStr)) {
      hint = " (🚫 Away)";
    } else if (ctx.sameRowOtherNames.has(m.name)) {
      hint = " (🔴 In this service)";
    } else if (ctx.sameDateNames.has(m.name)) {
      hint = " (⚠️ Busy on date)";
    }
    html += `<option value="${m.name}" ${isSel}>${m.name}${hint}</option>`;
  });

  // 2. If this slot currently has two persons assigned (e.g. "Balaji & Lokesh"), keep it selected
  const memberNames = appState.members.map(m => m.name);
  if (selectedVal && selectedVal !== '__custom_pair__' && !memberNames.includes(selectedVal)) {
    html += `<optgroup label="Assigned Pair">`;
    html += `<option value="${selectedVal}" selected>👥 ${selectedVal}</option>`;
    html += `</optgroup>`;
  }

  // 3. Option to pair two persons on demand
  html += `<optgroup label="Combine">`;
  html += `<option value="__custom_pair__">➕ Pair Two Persons...</option>`;
  html += `</optgroup>`;

  return html;
}

// Handlers for Schedule Dropdown Changes
function onScheduleDropdownChange(serviceType, index, field, value) {
  if (value === "__custom_pair__") {
    openPairModal(serviceType, index, field);
    return;
  }
  pushScheduleUndoSnapshot(`Role Edit (${serviceType})`);
  updateRole(serviceType, index, field, value);
  renderPublicSchedule();
  render1stService();
  render2ndService();
  render3rdService();
  renderFridayService();
  renderSpecialMeetings();
  renderAdminScheduleHealth();
  renderWorkloadAnalytics();
  notifyIfSlotHasConflict(serviceType, index, field);
}

// ================= RENDER 1ST SERVICE =================
function render1stService() {
  const tbody = document.getElementById("tbody1stService");
  tbody.innerHTML = "";

  appState.firstService.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <input type="text" class="input-text" style="width: 110px; font-weight: 600;" value="${row.date}" onchange="updateDate('firstService', ${index}, this.value)">
      </td>
      <td>
        <select class="role-select" data-slot="firstService:${index}:cam1" onchange="onScheduleDropdownChange('firstService', ${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'firstService', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="firstService:${index}:cam2" onchange="onScheduleDropdownChange('firstService', ${index}, 'cam2', this.value)">
          ${getMemberOptions(row.cam2, 'firstService', index, 'cam2')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="firstService:${index}:gimble" onchange="onScheduleDropdownChange('firstService', ${index}, 'gimble', this.value)">
          ${getMemberOptions(row.gimble, 'firstService', index, 'gimble')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="firstService:${index}:live" onchange="onScheduleDropdownChange('firstService', ${index}, 'live', this.value)">
          ${getMemberOptions(row.live, 'firstService', index, 'live')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="firstService:${index}:spot" onchange="onScheduleDropdownChange('firstService', ${index}, 'spot', this.value)">
          ${getMemberOptions(row.spot, 'firstService', index, 'spot')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="firstService:${index}:charging" onchange="onScheduleDropdownChange('firstService', ${index}, 'charging', this.value)">
          ${getMemberOptions(row.charging, 'firstService', index, 'charging')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeRow('firstService', ${index})" title="Delete Date">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= RENDER 2ND SERVICE =================
function render2ndService() {
  const tbody = document.getElementById("tbody2ndService");
  tbody.innerHTML = "";

  appState.secondService.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <input type="text" class="input-text" style="width: 110px; font-weight: 600;" value="${row.date}" onchange="updateDate('secondService', ${index}, this.value)">
      </td>
      <td>
        <select class="role-select" data-slot="secondService:${index}:operator" onchange="onScheduleDropdownChange('secondService', ${index}, 'operator', this.value)">
          ${getMemberOptions(row.operator, 'secondService', index, 'operator')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeRow('secondService', ${index})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= RENDER 3RD SERVICE =================
function render3rdService() {
  const tbody = document.getElementById("tbody3rdService");
  tbody.innerHTML = "";

  appState.thirdService.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <input type="text" class="input-text" style="width: 110px; font-weight: 600;" value="${row.date}" onchange="updateDate('thirdService', ${index}, this.value)">
      </td>
      <td>
        <select class="role-select" data-slot="thirdService:${index}:operator" onchange="onScheduleDropdownChange('thirdService', ${index}, 'operator', this.value)">
          ${getMemberOptions(row.operator, 'thirdService', index, 'operator')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeRow('thirdService', ${index})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= RENDER FRIDAY SERVICE =================
function renderFridayService() {
  const tbody = document.getElementById("tbodyFridayService");
  tbody.innerHTML = "";

  appState.fridayPrayer.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <input type="text" class="input-text" style="width: 120px; font-weight: 600;" value="${row.date}" onchange="updateDate('fridayPrayer', ${index}, this.value)">
      </td>
      <td>
        <select class="role-select" data-slot="fridayPrayer:${index}:cam1" onchange="onScheduleDropdownChange('fridayPrayer', ${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'fridayPrayer', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="fridayPrayer:${index}:live" onchange="onScheduleDropdownChange('fridayPrayer', ${index}, 'live', this.value)">
          ${getMemberOptions(row.live, 'fridayPrayer', index, 'live')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeRow('fridayPrayer', ${index})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= RENDER SPECIAL EVENT SERVICES =================
window.currentFestivalFilter = "all";

function filterFestivalRoster(filter, btn) {
  window.currentFestivalFilter = filter || "all";
  const container = document.getElementById("festivalFilterChips");
  if (container) {
    container.querySelectorAll(".festival-filter-btn").forEach(b => b.classList.remove("active"));
  }
  if (btn) btn.classList.add("active");
  renderPublicSchedule();
}

function toggleSpecialMeetingsVisibility() {
  appState.specialMeetingsEnabled = !(appState.specialMeetingsEnabled !== false);
  saveState();
  renderAll();

  if (appState.specialMeetingsEnabled) {
    showToast("🟢 Special Event Services are now VISIBLE on the public schedule!");
  } else {
    showToast("🔴 Special Event Services are now HIDDEN from the public schedule.");
  }
}

function renderSpecialMeetings() {
  const tbody = document.getElementById("tbodySpecialMeetings");
  const statusBadge = document.getElementById("specialMeetingsStatusBadge");
  const toggleBtn = document.getElementById("toggleSpecialMeetingsBtn");

  const isEnabled = appState.specialMeetingsEnabled !== false;
  if (statusBadge) {
    if (isEnabled) {
      statusBadge.className = "header-tag tag-emerald";
      statusBadge.textContent = "🟢 Active & Visible on Public Schedule";
    } else {
      statusBadge.className = "header-tag tag-amber";
      statusBadge.textContent = "🔴 Inactive (Hidden on Public Schedule)";
    }
  }

  if (toggleBtn) {
    if (isEnabled) {
      toggleBtn.className = "btn btn-secondary";
      toggleBtn.textContent = "🚫 Turn OFF (Hide from Schedule)";
    } else {
      toggleBtn.className = "btn btn-primary";
      toggleBtn.textContent = "👁️ Enable & Show on Schedule";
    }
  }

  if (!tbody) return;
  tbody.innerHTML = "";

  if (!appState.specialMeetings) appState.specialMeetings = [];

  if (appState.specialMeetings.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td colspan="11" style="text-align: center; padding: 28px 16px; color: var(--text-muted); font-size: 0.88rem;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <span>✨ <strong>No Special Events in Roster</strong></span>
          <span style="font-size: 0.78rem;">Click <strong>+ Custom Event</strong> to add any special meeting, or <strong>✨ Quick-Load Festival Template</strong> to load holiday presets.</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
    return;
  }

  const categoryOptions = getAllFestivalCategories();

  appState.specialMeetings.forEach((row, index) => {
    const curCat = (row.category || inferFestivalCategory(row.title)).toLowerCase();
    const catOptsHtml = categoryOptions.map(c => 
      `<option value="${escapeHtml(c.val)}" ${c.val.toLowerCase() === curCat ? 'selected' : ''}>${escapeHtml(c.label)}</option>`
    ).join("") + `<option value="__ADD_NEW_CATEGORY__">➕ + Add Custom Category...</option>`;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <input type="text" class="input-text" style="width: 100%; font-weight: 700; min-width: 160px;" placeholder="Event Title" value="${escapeHtml(row.title || '')}" onchange="updateSpecialMeeting(${index}, 'title', this.value)">
        <input type="text" class="input-text" style="width: 100%; font-size: 0.76rem; margin-top: 4px; min-width: 160px;" placeholder="Optional Notes (e.g. Carols, Broadcast)" value="${escapeHtml(row.notes || '')}" onchange="updateSpecialMeeting(${index}, 'notes', this.value)">
      </td>
      <td>
        <select class="role-select" style="width: 100%; font-weight: 600;" onchange="onCategorySelectChange(${index}, this.value)">
          ${catOptsHtml}
        </select>
      </td>
      <td>
        <input type="text" class="input-text" style="width: 105px;" value="${escapeHtml(row.date || '')}" placeholder="Date" onchange="updateSpecialMeeting(${index}, 'date', this.value)">
      </td>
      <td>
        <input type="text" class="input-text" style="width: 125px;" value="${escapeHtml(row.time || '')}" placeholder="Service Time" onchange="updateSpecialMeeting(${index}, 'time', this.value)">
      </td>
      <td>
        <input type="text" class="input-text" style="width: 95px;" value="${escapeHtml(row.callTime || '')}" placeholder="Call Time" onchange="updateSpecialMeeting(${index}, 'callTime', this.value)">
      </td>
      <td>
        <select class="role-select" data-slot="specialMeetings:${index}:cam1" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'specialMeetings', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="specialMeetings:${index}:cam2" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'cam2', this.value)">
          ${getMemberOptions(row.cam2, 'specialMeetings', index, 'cam2')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="specialMeetings:${index}:gimble" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'gimble', this.value)">
          ${getMemberOptions(row.gimble, 'specialMeetings', index, 'gimble')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="specialMeetings:${index}:live" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'live', this.value)">
          ${getMemberOptions(row.live, 'specialMeetings', index, 'live')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="specialMeetings:${index}:spot" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'spot', this.value)">
          ${getMemberOptions(row.spot, 'specialMeetings', index, 'spot')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeSpecialMeeting(${index})" title="Delete Event">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function addSpecialMeetingRow() {
  if (!appState.specialMeetings) appState.specialMeetings = [];
  pushScheduleUndoSnapshot("Add Special Event");
  appState.specialMeetings.push({
    id: Date.now(),
    category: "special",
    title: "Special Meeting",
    date: "Date",
    time: "06:30 PM - 08:30 PM",
    callTime: "05:45 PM",
    notes: "",
    cam1: "",
    cam2: "",
    gimble: "",
    live: "",
    spot: ""
  });
  saveState();
  renderAll();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
  showToast("Added new special event slot!");
}

function updateSpecialMeeting(index, field, value) {
  if (!appState.specialMeetings || !appState.specialMeetings[index]) return;
  appState.specialMeetings[index][field] = value;
  saveState();
  renderPublicSchedule();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
}

function removeSpecialMeeting(index) {
  if (!appState.specialMeetings || !appState.specialMeetings[index]) return;
  pushScheduleUndoSnapshot("Remove Special Event");
  const removedTitle = appState.specialMeetings[index].title || "Special event";
  appState.specialMeetings.splice(index, 1);
  saveState();
  renderAll();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
  showToast(`🗑️ "${removedTitle}" removed. (Tap Undo to restore)`);
}

function clearAllSpecialMeetings() {
  if (!appState.specialMeetings || appState.specialMeetings.length === 0) {
    showToast("No special events to clear.");
    return;
  }
  pushScheduleUndoSnapshot("Clear All Special Events");
  const count = appState.specialMeetings.length;
  appState.specialMeetings = [];
  saveState();
  renderAll();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
  showToast(`🗑️ Cleared all ${count} special event(s). (Tap Undo to restore)`);
}

// 1-Click Festival Template Inserter
function openFestivalTemplateModal() {
  const modal = document.getElementById("festivalTemplateModal");
  const grid = document.getElementById("festivalPresetCardsGrid");
  if (!modal || !grid) return;

  grid.innerHTML = FESTIVAL_EVENT_TEMPLATES.map((tpl, idx) => {
    const meta = getFestivalCategoryMeta(tpl.category);
    return `
      <div class="festival-preset-card">
        <div class="preset-card-top">
          <span class="festival-badge ${meta.badgeClass}">${meta.icon} ${tpl.badgeText || meta.label}</span>
          <span class="preset-date-chip">📅 ${escapeHtml(tpl.date)}</span>
        </div>
        <h4 class="preset-title">${escapeHtml(tpl.title)}</h4>
        <div class="preset-meta-row">
          <span>⏰ <strong>Service:</strong> ${escapeHtml(tpl.time)}</span>
          <span>🔔 <strong>Call:</strong> ${escapeHtml(tpl.callTime)}</span>
        </div>
        <p class="preset-notes">${escapeHtml(tpl.notes || '')}</p>
        <button type="button" class="btn btn-primary btn-sm preset-insert-btn" onclick="addFestivalFromTemplate(${idx})">
          ➕ Insert into Roster
        </button>
      </div>
    `;
  }).join("");

  modal.classList.add("active");
}

function closeFestivalTemplateModal() {
  const modal = document.getElementById("festivalTemplateModal");
  if (modal) modal.classList.remove("active");
}

function addFestivalFromTemplate(idx) {
  const tpl = FESTIVAL_EVENT_TEMPLATES[idx];
  if (!tpl) return;
  if (!appState.specialMeetings) appState.specialMeetings = [];

  const exists = appState.specialMeetings.some(r => r.title.toLowerCase() === tpl.title.toLowerCase());
  if (exists) {
    if (!confirm(`An event titled "${tpl.title}" is already in the roster. Add another slot anyway?`)) {
      return;
    }
  }

  pushScheduleUndoSnapshot(`Add Festival Preset: ${tpl.title}`);
  appState.specialMeetings.push({
    id: Date.now(),
    category: tpl.category,
    title: tpl.title,
    date: tpl.date,
    time: tpl.time,
    callTime: tpl.callTime,
    notes: tpl.notes || "",
    cam1: "",
    cam2: "",
    gimble: "",
    live: "",
    spot: ""
  });
  saveState();
  renderAll();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
  closeFestivalTemplateModal();
  showToast(`🎉 Added "${tpl.title}" to Festival Roster!`);
}

function copyFestivalRosterWhatsApp() {
  const events = appState.specialMeetings || [];
  if (events.length === 0) {
    showToast("ℹ️ No festival or special events scheduled yet.");
    return;
  }
  let text = `🕊️ *FULL LIFE CENTRE AG CHURCH (FLAG)*\n`;
  text += `🌟 *SPECIAL EVENTS & HOLIDAY FESTIVAL MEDIA ROSTER*\n\n`;

  events.forEach((r) => {
    const meta = getFestivalCategoryMeta(r.category || inferFestivalCategory(r.title));
    text += `${meta.icon} *${r.title || 'Special Service'}*\n`;
    text += `📅 Date: ${r.date || '-'}${r.time ? ` | ⏰ ${r.time}` : ''}\n`;
    if (r.callTime) {
      text += `🔔 *Call Time: ${r.callTime} Sharp* (Media Desk)\n`;
    }
    if (r.notes) {
      text += `📝 Notes: ${r.notes}\n`;
    }
    text += `🎥 1st Cam: ${r.cam1 || '—'} | 📹 2nd Cam: ${r.cam2 || '—'}\n`;
    text += `🎯 Gimble: ${r.gimble || '—'} | 💻 Live: ${r.live || '—'}${r.spot ? ` | ✂️ Spot: ${r.spot}` : ''}\n\n`;
  });

  text += `_"Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23_ 🙏✨`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 Festival Roster copied for WhatsApp!");
    }).catch(() => {
      fallbackCopyText(text);
      showToast("📋 Festival Roster copied!");
    });
  } else {
    fallbackCopyText(text);
    showToast("📋 Festival Roster copied!");
  }
}

function exportFestivalCalendar() {
  const events = appState.specialMeetings || [];
  if (events.length === 0) {
    showToast("ℹ️ No festival events to export.");
    return;
  }
  const nowStamp = formatIcsStampNow();
  let vEvents = "";
  events.forEach((r, idx) => {
    const dutyFake = {
      date: r.date,
      service: `🌟 ${r.title || 'Festival Service'}`,
      role: 'Media Ministry Crew',
      callTime: r.callTime || (r.time ? r.time.split('-')[0].trim() : '06:00 PM'),
      serviceEnd: r.time && r.time.includes('-') ? r.time.split('-')[1].trim() : '',
      volunteerName: 'FLAG Media Team'
    };
    vEvents += buildDutyVeventBlock(dutyFake, nowStamp, idx);
  });

  const icsBody = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Full Life Centre AG Church//Festival Media Roster v6.2//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:FLAG Church Festival & Special Events",
    "X-WR-TIMEZONE:Asia/Kolkata",
    vEvents.trim(),
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsBody], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `FLAG_Festival_Media_Roster_2026.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  showToast("📅 Festival Calendar (.ics) downloaded!");
}

// ================= RENDER EARLY MORNING PRAYER (SEASONAL: MON - SAT) =================
function renderMorningPrayer() {
  const tbody = document.getElementById("tbodyMorningPrayer");
  const titleInput = document.getElementById("morningPrayerTitle");
  const statusBadge = document.getElementById("morningPrayerStatusBadge");
  const toggleBtn = document.getElementById("toggleMorningPrayerBtn");

  if (!tbody) return;
  tbody.innerHTML = "";

  if (!appState.morningPrayer) {
    appState.morningPrayer = { enabled: false, title: "21 Days Early Morning Prayer", days: [] };
  }
  if (appState.morningPrayer.enabled === undefined) {
    appState.morningPrayer.enabled = false;
  }

  // Update Status Badge & Toggle Button in Admin Console
  const isEnabled = appState.morningPrayer.enabled;
  if (statusBadge) {
    if (isEnabled) {
      statusBadge.className = "header-tag tag-emerald";
      statusBadge.textContent = "🟢 Active & Visible on Public Schedule";
    } else {
      statusBadge.className = "header-tag tag-amber";
      statusBadge.textContent = "🔴 Inactive (Hidden on Public Schedule)";
    }
  }

  if (toggleBtn) {
    if (isEnabled) {
      toggleBtn.className = "btn btn-secondary";
      toggleBtn.textContent = "🚫 Turn OFF (Hide from Schedule)";
    } else {
      toggleBtn.className = "btn btn-primary";
      toggleBtn.textContent = "👁️ Enable & Show on Schedule";
    }
  }

  if (titleInput && appState.morningPrayer.title) {
    titleInput.value = appState.morningPrayer.title;
  }
  const publicTitle = document.getElementById("publicMorningPrayerTitle");
  if (publicTitle && appState.morningPrayer.title) {
    publicTitle.textContent = "🌅 " + appState.morningPrayer.title;
  }

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  (appState.morningPrayer.days || []).forEach((row, index) => {
    let dayOptions = weekDays.map(d => `<option value="${d}" ${d === row.day ? 'selected' : ''}>${d}</option>`).join("");
    if (row.day && !weekDays.includes(row.day)) {
      dayOptions += `<option value="${row.day}" selected>${row.day}</option>`;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <select class="role-select" style="font-weight: 700; color: #38bdf8;" onchange="updateMorningPrayer(${index}, 'day', this.value)">
          ${dayOptions}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="morningPrayer:${index}:cam1" onchange="updateMorningPrayerRole(${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'morningPrayer', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="morningPrayer:${index}:cam2" onchange="updateMorningPrayerRole(${index}, 'cam2', this.value)">
          ${getMemberOptions(row.cam2, 'morningPrayer', index, 'cam2')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="morningPrayer:${index}:gimbal" onchange="updateMorningPrayerRole(${index}, 'gimbal', this.value)">
          ${getMemberOptions(row.gimbal, 'morningPrayer', index, 'gimbal')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="morningPrayer:${index}:liveEditor" onchange="updateMorningPrayerRole(${index}, 'liveEditor', this.value)">
          ${getMemberOptions(row.liveEditor, 'morningPrayer', index, 'liveEditor')}
        </select>
      </td>
      <td>
        <select class="role-select" data-slot="morningPrayer:${index}:socialMedia" onchange="updateMorningPrayerRole(${index}, 'socialMedia', this.value)">
          ${getMemberOptions(row.socialMedia, 'morningPrayer', index, 'socialMedia')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeMorningPrayerRow(${index})" title="Delete Day">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleMorningPrayerVisibility() {
  if (!appState.morningPrayer) {
    appState.morningPrayer = { enabled: false, title: "21 Days Early Morning Prayer", days: [] };
  }
  appState.morningPrayer.enabled = !appState.morningPrayer.enabled;
  saveState();
  renderAll();

  if (appState.morningPrayer.enabled) {
    showToast("🟢 Early Morning Prayer is now VISIBLE on the public schedule!");
  } else {
    showToast("🔴 Early Morning Prayer is now HIDDEN from the public schedule.");
  }
}

function updateMorningTitle(val) {
  if (!appState.morningPrayer) appState.morningPrayer = {};
  appState.morningPrayer.title = val;
  const publicMorningTitleEl = document.getElementById("publicMorningPrayerTitle");
  if (publicMorningTitleEl) {
    publicMorningTitleEl.textContent = `🌅 ${val || "Early Morning Prayer"}`;
  }
  saveState();
  updateWhatsAppPreview();
}

function setMorningPrayerCampaign(name) {
  if (!appState.morningPrayer) appState.morningPrayer = {};
  appState.morningPrayer.title = name;
  const titleInput = document.getElementById("morningPrayerTitle");
  if (titleInput) titleInput.value = name;
  const publicTitle = document.getElementById("publicMorningPrayerTitle");
  if (publicTitle) publicTitle.textContent = "🌅 " + name;

  saveState();
  updateWhatsAppPreview();
  showToast(`Campaign Name set to: "${name}"`);
}

function resetMorningPrayerToWeekdays() {
  if (confirm("Reset schedule to standard Monday through Saturday (6 days)?")) {
    pushScheduleUndoSnapshot("Reset Morning Prayer");
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    appState.morningPrayer.days = weekDays.map((d, i) => ({
      id: Date.now() + i,
      day: d,
      cam1: "",
      cam2: "",
      gimbal: "",
      liveEditor: "",
      socialMedia: ""
    }));
    saveState();
    renderAll();
    showToast("Reset to Monday - Saturday! (Undo available)");
  }
}

function updateMorningPrayer(index, field, value) {
  pushScheduleUndoSnapshot("Morning Prayer Edit");
  appState.morningPrayer.days[index][field] = value;
  saveState();
  renderAll();
}

function updateMorningPrayerRole(index, field, value) {
  if (value === "__custom_pair__") {
    modalTargetContext = { serviceType: "morningPrayer", index, field };
    openPairModal("morningPrayer", index, field);
    return;
  }
  pushScheduleUndoSnapshot("Morning Prayer Role Edit");
  appState.morningPrayer.days[index][field] = value;
  saveState();
  renderAll();
}

function addMorningPrayerRow() {
  if (!appState.morningPrayer) appState.morningPrayer = { title: "Early Morning Prayer", days: [] };
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const existingDays = (appState.morningPrayer.days || []).map(d => d.day);
  const nextDay = weekDays.find(d => !existingDays.includes(d)) || "Monday";

  appState.morningPrayer.days.push({
    id: Date.now(),
    day: nextDay,
    cam1: "",
    cam2: "",
    gimbal: "",
    liveEditor: "",
    socialMedia: ""
  });
  saveState();
  renderAll();
  showToast(`Added ${nextDay}!`);
}

function removeMorningPrayerRow(index) {
  if (confirm("Remove this day from the morning prayer schedule?")) {
    pushScheduleUndoSnapshot("Remove Morning Prayer Row");
    appState.morningPrayer.days.splice(index, 1);
    saveState();
    renderAll();
    showToast("Day removed. (Undo available)");
  }
}

function setMorningPrayerPreset(presetType) {
  if (presetType === "14days") {
    setMorningPrayerCampaign("14 Days Fasting & Early Morning Prayer");
  } else if (presetType === "21days") {
    setMorningPrayerCampaign("21 Days Early Morning Prayer");
  } else if (presetType === "40days") {
    setMorningPrayerCampaign("40 Days Early Morning Prayer");
  } else {
    setMorningPrayerCampaign("Weekly Early Morning Prayer");
  }
}

// Handlers for Schedule Edits
function updateRole(serviceType, index, field, value) {
  appState[serviceType][index][field] = value;
  saveState();
}

function updateDate(serviceType, index, value) {
  pushScheduleUndoSnapshot(`Edit Date (${serviceType})`);
  appState[serviceType][index].date = value;
  saveState();
  renderAll();
}

function updateMonthTitle(val) {
  appState.month = val;
  saveState();
}

// Add New Sunday Row across 1st, 2nd, and 3rd service
function addNewSundayRow() {
  const newDate = prompt("Enter the new Sunday date (e.g. 01 Nov 2026):", "01 Nov 2026");
  if (!newDate) return;

  pushScheduleUndoSnapshot(`Add Sunday (${newDate})`);
  const newId = Date.now();
  appState.firstService.push({
    id: newId,
    date: newDate,
    cam1: "",
    cam2: "",
    gimble: "",
    live: "",
    spot: "",
    charging: ""
  });

  appState.secondService.push({
    id: newId,
    date: newDate,
    operator: ""
  });

  appState.thirdService.push({
    id: newId,
    date: newDate,
    operator: ""
  });

  saveState();
  renderAll();
  showToast(`Added Sunday ${newDate} to schedule!`);
}

// Add New Friday Row
function addNewFridayRow() {
  const newDate = prompt("Enter the new Friday date (e.g. 06 Nov 2026):", "06 Nov 2026");
  if (!newDate) return;

  pushScheduleUndoSnapshot(`Add Friday (${newDate})`);
  appState.fridayPrayer.push({
    id: Date.now(),
    date: newDate,
    cam1: "",
    live: ""
  });

  saveState();
  renderAll();
  showToast(`Added Friday ${newDate}!`);
}

// Remove Row
function removeRow(serviceType, index) {
  if (confirm("Remove this date from the schedule?")) {
    pushScheduleUndoSnapshot(`Remove Date Row`);
    appState[serviceType].splice(index, 1);
    saveState();
    renderAll();
    showToast("Date removed. (Undo available)");
  }
}

// ================= MEMBERS MANAGER =================
function calculateMemberShifts(name) {
  let count = 0;
  if (!name || !appState) return 0;
  const check = (val) => isAliasMatch(name, val);

  // 1st Service
  ((appState && appState.firstService) || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot', 'charging'].forEach(field => {
      if (check(r[field])) count++;
    });
  });

  // 2nd Service
  ((appState && appState.secondService) || []).forEach(r => {
    if (check(r.operator)) count++;
  });

  // 3rd Service
  ((appState && appState.thirdService) || []).forEach(r => {
    if (check(r.operator)) count++;
  });

  // Friday Fasting
  ((appState && appState.fridayPrayer) || []).forEach(r => {
    if (check(r.cam1)) count++;
    if (check(r.live)) count++;
  });

  // Special Meetings
  ((appState && appState.specialMeetings) || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot'].forEach(field => {
      if (check(r[field])) count++;
    });
  });

  // Early Morning Prayer (only count if seasonal schedule is active)
  if (appState && appState.morningPrayer && appState.morningPrayer.enabled && appState.morningPrayer.days) {
    appState.morningPrayer.days.forEach(r => {
      ['cam1', 'cam2', 'gimbal', 'liveEditor', 'socialMedia'].forEach(field => {
        if (check(r[field])) count++;
      });
    });
  }

  return count;
}

function renderMembers() {
  const grid = document.getElementById("memberGrid");
  if (!grid) return;
  grid.innerHTML = "";

  // Dynamic avatar gradient colors based on name
  const avatarGradients = [
    "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    "linear-gradient(135deg, #10b981, #047857)",
    "linear-gradient(135deg, #f59e0b, #b45309)",
    "linear-gradient(135deg, #ec4899, #be185d)",
    "linear-gradient(135deg, #06b6d4, #0e7490)"
  ];

  const activeLeaderName = getLeaderName();
  appState.members.forEach((m, idx) => {
    const isLeader = isAliasMatch(m.name, activeLeaderName);
    const card = document.createElement("div");
    card.className = "member-card" + (isLeader ? " is-leader-card" : "");
    const initials = m.name.split(" ").map(n => n[0]).join("").toUpperCase();
    const shiftCount = calculateMemberShifts(m.name);
    const gradIndex = Math.abs(m.name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % avatarGradients.length;
    const avatarBg = avatarGradients[gradIndex];

    let shiftBadgeClass = "tag-blue";
    if (shiftCount === 0) shiftBadgeClass = "tag-amber";
    if (shiftCount >= 4) shiftBadgeClass = "tag-purple";

    card.innerHTML = `
      <div class="member-card-main">
        <div class="member-avatar" style="background: ${avatarBg};">${initials}</div>
        <div class="member-info" style="min-width: 0; flex: 1;">
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 6px;">
            <h4 style="margin: 0;">${escapeHtml(m.name)}</h4>
            ${isLeader ? `<span class="team-leader-tag-pill">👑 Team Leader</span>` : ""}
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(m.role || DEFAULT_MEMBER_ROLE)}</div>
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin-top: 5px;">
            ${m.phone ? `
              <span class="member-phone-pill">
                📱 ${escapeHtml(m.phone)}
              </span>
            ` : ''}
            <span class="header-tag ${shiftBadgeClass}" style="font-size: 0.7rem; padding: 2px 8px; display: inline-block; white-space: nowrap;">
              ${shiftCount} ${shiftCount === 1 ? 'Shift' : 'Shifts'} this month
            </span>
          </div>
        </div>
      </div>
      <div class="member-card-actions">
        <button class="btn-icon-leader${isLeader ? ' active' : ''}" onclick="setTeamLeaderByName('${escapeQuotes(m.name)}')" title="${isLeader ? 'Active Team Leader' : 'Set ' + escapeQuotes(m.name) + ' as Team Leader'}">
          <span>👑</span><span>${isLeader ? 'Team Leader' : 'Set Leader'}</span>
        </button>
        <button class="btn-icon-wa" onclick="openDirectReminderModal('${escapeQuotes(m.name)}')" title="Send WhatsApp Duty Reminder">
          💬
        </button>
        <button class="btn-icon-edit" onclick="openEditMemberModal(${idx})" title="Edit Name & Role">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
        <button class="btn-icon-del" onclick="deleteMember(${idx})" title="Remove Member">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  const memberBadge = document.getElementById("adminMemberCountBadge");
  if (memberBadge) {
    memberBadge.textContent = appState.members.length;
  }
}

// ================= PUBLIC MEDIA TEAM DIRECTORY =================
let currentTeamSkillFilter = "all";

function setTeamSkillFilter(filter, btn) {
  currentTeamSkillFilter = filter;
  const buttons = document.querySelectorAll("#teamSkillFilters .gear-filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderPublicTeamDirectory();
}

function filterTeamDirectory() {
  renderPublicTeamDirectory();
}

function memberMatchesSkillFilter(member, skillFilter) {
  if (!skillFilter || skillFilter === "all") return true;
  const roleStr = ((member && member.role) || "").toLowerCase();
  if (skillFilter === "camera") return roleStr.includes("cam") || roleStr.includes("camera");
  if (skillFilter === "live") return roleStr.includes("live") || roleStr.includes("system");
  if (skillFilter === "gimble") return roleStr.includes("gimble") || roleStr.includes("gimbal");
  if (skillFilter === "charging") return roleStr.includes("charg") || roleStr.includes("battery");
  if (skillFilter === "spot") return roleStr.includes("spot") || roleStr.includes("edit");
  return true;
}

function renderPublicTeamDirectory() {
  const container = document.getElementById("publicTeamGrid");
  const countEl = document.getElementById("teamDirectoryCount");
  const badgeEl = document.getElementById("publicMemberCountBadge");

  const membersList = (appState && Array.isArray(appState.members) && appState.members.length > 0)
    ? appState.members
    : defaultState.members;

  const totalMembers = membersList.length;
  if (countEl) countEl.textContent = `${totalMembers} Crew Members`;
  if (badgeEl) badgeEl.textContent = totalMembers;

  // Show only skill filter pills that currently match at least one member's role
  const filterBtns = document.querySelectorAll("#teamSkillFilters .gear-filter-btn");
  let activeFilterStillVisible = currentTeamSkillFilter === "all";
  filterBtns.forEach(btn => {
    const skill = btn.getAttribute("data-skill") || "all";
    const hasMatch = skill === "all" || membersList.some(m => memberMatchesSkillFilter(m, skill));
    btn.style.display = hasMatch ? "" : "none";
    if (skill === currentTeamSkillFilter && hasMatch) activeFilterStillVisible = true;
  });
  if (!activeFilterStillVisible) {
    currentTeamSkillFilter = "all";
    filterBtns.forEach(btn => btn.classList.toggle("active", (btn.getAttribute("data-skill") || "all") === "all"));
  }

  if (!container) return;

  const searchInput = document.getElementById("teamSearchInput");
  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const avatarGradients = [
    "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    "linear-gradient(135deg, #10b981, #047857)",
    "linear-gradient(135deg, #f59e0b, #b45309)",
    "linear-gradient(135deg, #ec4899, #be185d)",
    "linear-gradient(135deg, #06b6d4, #0e7490)"
  ];

  let filtered = membersList;

  // Filter by skill chip
  if (typeof currentTeamSkillFilter !== "undefined" && currentTeamSkillFilter !== "all") {
    filtered = filtered.filter(m => memberMatchesSkillFilter(m, currentTeamSkillFilter));
  }

  // Filter by search text
  if (searchTerm) {
    filtered = filtered.filter(m => {
      const nameMatch = (m.name || "").toLowerCase().includes(searchTerm);
      const roleMatch = (m.role || "").toLowerCase().includes(searchTerm);
      return nameMatch || roleMatch;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 16px; background: rgba(15, 23, 42, 0.4); border-radius: 12px; color: var(--text-muted);">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🔍</span>
        <strong style="font-size: 1rem;">No team members found</strong>
        <p style="font-size: 0.82rem; margin-top: 4px;">Try searching for another name or clearing the skill filter.</p>
      </div>
    `;
    return;
  }

  const mName = getMonthName(appState && appState.selectedMonth !== undefined ? appState.selectedMonth : 9);
  const accentStrips = [
    "linear-gradient(90deg, #3b82f6, #60a5fa)",
    "linear-gradient(90deg, #8b5cf6, #a78bfa)",
    "linear-gradient(90deg, #10b981, #34d399)",
    "linear-gradient(90deg, #f59e0b, #fbbf24)",
    "linear-gradient(90deg, #ec4899, #f472b6)",
    "linear-gradient(90deg, #06b6d4, #22d3ee)"
  ];
  const activeLeaderName = getLeaderName();

  container.innerHTML = filtered.map(m => {
    const rawName = (m.name || "Member").trim();
    const initials = rawName.split(/\s+/).map(n => n[0] || "").join("").toUpperCase() || "M";
    const shiftCount = typeof calculateMemberShifts === "function" ? calculateMemberShifts(rawName) : 0;
    const gradIndex = Math.abs(rawName.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % avatarGradients.length;
    const avatarBg = avatarGradients[gradIndex];
    const cardAccent = accentStrips[gradIndex];
    const isLeader = isAliasMatch(rawName, activeLeaderName);

    let shiftTagClass = "shift-active";
    let shiftTagText = `${shiftCount} ${shiftCount === 1 ? 'shift' : 'shifts'} in ${mName}`;
    if (shiftCount === 0) {
      shiftTagClass = "shift-resting";
      shiftTagText = `Resting in ${mName}`;
    } else if (shiftCount >= 4) {
      shiftTagClass = "shift-heavy";
    }

    const hasPhone = m.phone && m.phone.trim();
    const cleanDigits = hasPhone ? m.phone.replace(/[^0-9]/g, "") : "";
    const intlDigits = cleanDigits 
      ? (cleanDigits.startsWith("91") && cleanDigits.length === 12 ? cleanDigits : `91${cleanDigits.slice(-10)}`)
      : "";

    // Build intelligent church-official WhatsApp message draft
    const duties = typeof getVolunteerDuties === "function" ? getVolunteerDuties(rawName) : [];
    let draft = "";
    if (duties.length > 0) {
      const nextDuty = duties[0];
      const startInfo = nextDuty.serviceStart ? ` (Starts ${nextDuty.serviceStart})` : '';
      draft = `*🕊️ FULL LIFE CENTRE AG CHURCH - INDOOR MEDIA TEAM*\n━━━━━━━━━━━━━━━━━━━━━\nShalom ${rawName}! 👋\n\nReaching out regarding your scheduled Media Team duty:\n📅 *Date:* ${nextDuty.date}\n⛪ *Service:* ${nextDuty.serviceShort}${startInfo}\n🎬 *Role:* ${nextDuty.role}\n⏰ *Call Time:* ${nextDuty.callTime} Sharp\n\nLooking forward to serving together for the Lord! 🙏✨\n_"Whatever you do, work at it with all your heart as for the Lord." - Col 3:23_\n- Full Life Centre AG Church`;
    } else {
      draft = `*🕊️ FULL LIFE CENTRE AG CHURCH - INDOOR MEDIA TEAM*\n━━━━━━━━━━━━━━━━━━━━━\nShalom ${rawName}! 👋\n\nReaching out from the FLAG Church Indoor Media Team regarding our media schedule and upcoming church services.\n\nGod bless you and your ministry! 🙏✨\n_"Colossians 3:23"_\n- Full Life Centre AG Church`;
    }
    const encodedDraft = encodeURIComponent(draft);

    const waUrl = intlDigits 
      ? `https://wa.me/${intlDigits}?text=${encodedDraft}` 
      : `https://wa.me/?text=${encodedDraft}`;

    return `
      <div class="team-member-card-public ${isLeader ? 'is-leader-card' : ''}" style="--member-accent: ${cardAccent};">
        <div class="team-card-top">
          <div class="team-avatar-lg" style="background: ${avatarBg};">
            ${initials}
          </div>
          <div class="team-meta-info">
            <h3>${escapeQuotes(rawName)}</h3>
            <div class="team-badges-wrap">
              <span class="team-role-pill" title="${escapeQuotes(m.role || DEFAULT_MEMBER_ROLE)}">
                ${escapeQuotes(m.role || DEFAULT_MEMBER_ROLE)}
              </span>
              ${isLeader ? `<span class="team-leader-crown-pill">👑 Team Leader</span>` : ''}
            </div>
          </div>
        </div>

        <div class="team-card-details">
          <div class="team-detail-row">
            <span class="team-detail-label">Serving Shifts</span>
            <span class="team-shift-pill ${shiftTagClass}">
              ${shiftTagText}
            </span>
          </div>
          ${hasPhone ? `
            <div class="team-detail-row">
              <span class="team-detail-label">Contact</span>
              <span class="team-phone-value">
                📱 ${escapeHtml(m.phone)}
              </span>
            </div>
          ` : ''}
        </div>

        <div class="team-card-actions">
          <button class="btn btn-secondary btn-sm" style="flex: 1; justify-content: center;" onclick="selectVolunteerForSchedule('${escapeQuotes(rawName)}')">
            👤 View Duties
          </button>
          ${intlDigits ? `
            <a href="tel:+${intlDigits}" class="btn btn-secondary btn-sm" style="text-decoration: none; padding: 6px 11px; gap: 4px;" title="Call ${escapeQuotes(rawName)} directly">
              📞 Call
            </a>
          ` : ''}
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="text-decoration: none; gap: 5px;" title="Open WhatsApp Chat with pre-filled message for ${escapeQuotes(rawName)}">
            💬 WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function selectVolunteerForSchedule(name) {
  // 1. Switch view to schedule
  const scheduleNavBtn = document.querySelectorAll(".nav-btn")[0];
  switchView("scheduleView", scheduleNavBtn);

  // 2. Select in volunteer personal filter
  setTimeout(() => {
    onVolunteerFilterChange(name, true);
    const filterCard = document.getElementById("personalFilterCard");
    if (filterCard) {
      filterCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
}

// Edit Member Modal State & Handlers
let editingMemberIdx = -1;

function openEditMemberModal(idx) {
  if (!appState.members || !appState.members[idx]) return;
  editingMemberIdx = idx;
  const m = appState.members[idx];

  const nameInput = document.getElementById("editMemberName");
  const roleInput = document.getElementById("editMemberRole");
  const phoneInput = document.getElementById("editMemberPhone");
  const leaderChk = document.getElementById("editMemberIsLeader");

  if (nameInput) nameInput.value = m.name || "";
  if (roleInput) roleInput.value = m.role || "";
  if (phoneInput) phoneInput.value = m.phone || "";
  if (leaderChk) leaderChk.checked = isAliasMatch(m.name, getLeaderName());

  document.getElementById("editMemberModal").classList.add("show");
  setTimeout(() => {
    if (nameInput) nameInput.focus();
  }, 100);
}

function closeEditMemberModal() {
  document.getElementById("editMemberModal").classList.remove("show");
  editingMemberIdx = -1;
}

function saveMemberEdit() {
  if (editingMemberIdx < 0 || !appState.members[editingMemberIdx]) return;

  const nameInput = document.getElementById("editMemberName");
  const roleInput = document.getElementById("editMemberRole");
  const phoneInput = document.getElementById("editMemberPhone");
  const leaderChk = document.getElementById("editMemberIsLeader");
  const newName = nameInput.value.trim();
  const newRole = roleInput.value.trim() || DEFAULT_MEMBER_ROLE;
  const newPhone = phoneInput ? phoneInput.value.trim() : "";
  const oldName = appState.members[editingMemberIdx].name;
  const wasLeader = isAliasMatch(oldName, getLeaderName());

  if (!newName) {
    alert("Please enter a valid member name.");
    return;
  }

  // If renaming, check if another member already has this name
  if (newName.toLowerCase() !== oldName.toLowerCase()) {
    const nameExists = appState.members.some((m, i) => i !== editingMemberIdx && m.name.toLowerCase() === newName.toLowerCase());
    if (nameExists) {
      alert(`A member named "${newName}" already exists in the team.`);
      return;
    }

    // Update name and cascade rename through all schedules!
    appState.members[editingMemberIdx].name = newName;
    renameMemberAcrossSchedules(oldName, newName);
  }

  appState.members[editingMemberIdx].role = newRole;
  appState.members[editingMemberIdx].phone = newPhone;
  if (leaderChk && leaderChk.checked) {
    appState.leaderName = newName;
    appState.hideLeaderOnMainPage = false;
  } else if (wasLeader && newName !== oldName) {
    appState.leaderName = newName;
  }
  saveState();
  closeEditMemberModal();
  renderAll();
  showToast(`Updated ${newName}'s details and synced schedules!`);
}

// Cascade Rename Helper: updates member name across all active and archived schedules
function renameMemberAcrossSchedules(oldName, newName, targetState = appState) {
  if (!targetState || !oldName || !newName) return;
  const oldLower = oldName.trim().toLowerCase();
  function replaceInSlot(val) {
    if (!val || typeof val !== "string") return val;
    if (val.trim().toLowerCase() === oldLower) return newName;
    if (val.includes(" & ")) {
      const parts = val.split(" & ");
      const updated = parts.map(p => p.trim().toLowerCase() === oldLower ? newName : p);
      return updated.join(" & ");
    }
    return val;
  }

  // 1st Service
  (targetState.firstService || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot', 'charging'].forEach(f => {
      r[f] = replaceInSlot(r[f]);
    });
  });

  // 2nd Service
  (targetState.secondService || []).forEach(r => {
    r.operator = replaceInSlot(r.operator);
  });

  // 3rd Service
  (targetState.thirdService || []).forEach(r => {
    r.operator = replaceInSlot(r.operator);
  });

  // Friday Fasting
  (targetState.fridayPrayer || []).forEach(r => {
    r.cam1 = replaceInSlot(r.cam1);
    r.live = replaceInSlot(r.live);
  });

  // Special Meetings
  (targetState.specialMeetings || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot'].forEach(f => {
      r[f] = replaceInSlot(r[f]);
    });
  });

  // Early Morning Prayer
  if (targetState.morningPrayer && targetState.morningPrayer.days) {
    targetState.morningPrayer.days.forEach(r => {
      ['cam1', 'cam2', 'gimbal', 'liveEditor', 'socialMedia'].forEach(f => {
        r[f] = replaceInSlot(r[f]);
      });
    });
  }

  // Multi-month archives
  if (targetState.schedules) {
    Object.keys(targetState.schedules).forEach(key => {
      const sch = targetState.schedules[key];
      if (sch.firstService) {
        sch.firstService.forEach(r => {
          ['cam1', 'cam2', 'gimble', 'live', 'spot', 'charging'].forEach(f => {
            r[f] = replaceInSlot(r[f]);
          });
        });
      }
      if (sch.secondService) {
        sch.secondService.forEach(r => { r.operator = replaceInSlot(r.operator); });
      }
      if (sch.thirdService) {
        sch.thirdService.forEach(r => { r.operator = replaceInSlot(r.operator); });
      }
      if (sch.fridayPrayer) {
        sch.fridayPrayer.forEach(r => {
          r.cam1 = replaceInSlot(r.cam1);
          r.live = replaceInSlot(r.live);
        });
      }
    });
  }
}

function addNewMember() {
  const nameInput = document.getElementById("newMemberName");
  const roleInput = document.getElementById("newMemberRole");
  const phoneInput = document.getElementById("newMemberPhone");
  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const phone = phoneInput ? phoneInput.value.trim() : "";

  if (!name) {
    alert("Please enter member name.");
    return;
  }

  // Check if exists
  if (appState.members.some(m => m.name.toLowerCase() === name.toLowerCase())) {
    alert("A member with this name already exists.");
    return;
  }

  appState.members.push({ name, role: role || DEFAULT_MEMBER_ROLE, phone });
  saveState();
  nameInput.value = "";
  roleInput.value = "";
  if (phoneInput) phoneInput.value = "";

  // Re-render everything so all dropdowns immediately get the new member!
  renderAll();
  showToast(`Added ${name} to Media Team!`);
}

function deleteMember(idx) {
  const memberName = appState.members[idx].name;
  if (confirm(`Remove ${memberName} from the team directory?`)) {
    appState.members.splice(idx, 1);
    saveState();
    renderAll();
    showToast(`Removed ${memberName}.`);
  }
}

// ================= CHECKLISTS VIEW & FULL EDIT ENGINE =================
function toggleNewCategoryForm() {
  const card = document.getElementById("newCategoryCard");
  if (!card) return;
  card.style.display = (card.style.display === "none" || !card.style.display) ? "block" : "none";
  if (card.style.display === "block") {
    document.getElementById("newCatTitle").focus();
  }
}

function createChecklistCategory() {
  const titleEl = document.getElementById("newCatTitle");
  const title = titleEl ? titleEl.value.trim() : "";

  if (!title) {
    alert("Please enter a category title (e.g. 6. Stage Lighting).");
    return;
  }

  const newCl = {
    id: "cl-" + Date.now(),
    title: title,
    items: []
  };

  appState.checklists.push(newCl);
  saveState();

  if (titleEl) titleEl.value = "";
  toggleNewCategoryForm();

  renderChecklists();
  showToast(`Created category "${title}"!`);
}

function deleteChecklistCategory(clId) {
  const cl = appState.checklists.find(c => c.id === clId);
  if (!cl) return;

  if (confirm(`Delete the entire category "${cl.title}" and all its tasks?`)) {
    appState.checklists = appState.checklists.filter(c => c.id !== clId);
    saveState();
    renderChecklists();
    showToast(`Deleted category "${cl.title}".`);
  }
}

function addChecklistItem(clId) {
  const input = document.getElementById(`taskInput_${clId}`);
  if (!input) return;
  const text = input.value.trim();

  if (!text) return;

  const cl = appState.checklists.find(c => c.id === clId);
  if (!cl) return;

  cl.items.push({
    id: "item-" + Date.now(),
    text: text,
    done: false
  });

  saveState();
  renderChecklists();
  showToast(`Added task to "${cl.title}"!`);
}

function deleteChecklistItem(clId, itemId) {
  const cl = appState.checklists.find(c => c.id === clId);
  if (!cl) return;

  cl.items = cl.items.filter(i => i.id !== itemId);
  saveState();
  renderChecklists();
}

// ================= SERVICE WEEKS & WEEKLY CHECKLISTS ENGINE =================
function getServiceWeeks() {
  if (appState.firstService && appState.firstService.length > 0) {
    return appState.firstService.map((row, idx) => ({
      index: idx + 1,
      weekNum: idx + 1,
      label: `Week ${idx + 1} (${row.date})`,
      shortLabel: `Week ${idx + 1}`,
      date: row.date
    }));
  }
  return [{ index: 1, weekNum: 1, label: "Week 1", shortLabel: "Week 1", date: "Default Sunday" }];
}

function getActiveWeekDate() {
  const weeks = getServiceWeeks();
  if (appState.activeWeekDatePinned && appState.activeWeekDate && weeks.some(w => w.date === appState.activeWeekDate)) {
    return appState.activeWeekDate;
  }
  const upcoming = (typeof getNextUpcomingSundayDate === "function") ? getNextUpcomingSundayDate() : "";
  if (upcoming && weeks.some(w => w.date === upcoming)) {
    return upcoming;
  }
  if (appState.activeWeekDate && weeks.some(w => w.date === appState.activeWeekDate)) {
    return appState.activeWeekDate;
  }
  return weeks[0] ? weeks[0].date : "04 Oct 2026";
}

function currentViewingWeekDate() {
  const weeks = getServiceWeeks();
  const activeDate = getActiveWeekDate();
  if (appState.onlyShowActiveWeek && !isAdminLoggedIn) {
    return activeDate;
  }
  if (appState.selectedChecklistWeek && weeks.some(w => w.date === appState.selectedChecklistWeek)) {
    return appState.selectedChecklistWeek;
  }
  return activeDate;
}

function setAdminActiveWeek(date) {
  if (!date) {
    const sel = document.getElementById("adminActiveWeekSelect");
    if (sel) date = sel.value;
  }
  if (!date) return;
  setActiveWeekDate(date, true);
}

function setActiveWeekDate(date, isManual = false) {
  appState.activeWeekDate = date;
  appState.selectedChecklistWeek = date;
  appState.activeWeekDatePinned = !!isManual;

  if (!appState.weeklyChecks) appState.weeklyChecks = {};
  if (!appState.weeklyChecks[date]) {
    appState.weeklyChecks[date] = {};
  }

  // Sync item.done for active week
  if (appState.checklists) {
    appState.checklists.forEach(cl => {
      if (cl.items) {
        cl.items.forEach(i => {
          i.done = !!appState.weeklyChecks[date][i.id];
        });
      }
    });
  }

  saveState(false, {
    activeWeekDate: date,
    selectedChecklistWeek: date,
    activeWeekDatePinned: appState.activeWeekDatePinned
  });
  renderChecklists();
  updateBadges();

  const weeks = getServiceWeeks();
  const wObj = weeks.find(w => w.date === date);
  const wName = wObj ? wObj.label : date;
  showToast(`Checklist set to ${wName}!`);
}

let currentChecklistStatusFilter = "all";

function setChecklistStatusFilter(filter, btnEl) {
  currentChecklistStatusFilter = filter || "all";
  document.querySelectorAll(".status-filter-pill").forEach(btn => btn.classList.remove("active"));
  if (btnEl) {
    btnEl.classList.add("active");
  } else {
    const defaultBtn = document.getElementById(
      filter === "pending" ? "filterPendingTasksBtn" : (filter === "done" ? "filterDoneTasksBtn" : "filterAllTasksBtn")
    );
    if (defaultBtn) defaultBtn.classList.add("active");
  }
  renderChecklists();
}

let pendingChecklistAction = null;

function getSavedMemberActorName() {
  let saved = (window.currentVolunteerFilter || "").trim();
  if (!saved) {
    try { saved = (localStorage.getItem("FLAG_SAVED_VOLUNTEER_NAME") || "").trim(); } catch (e) {}
  }
  return saved;
}

function hasSelectedChecklistActor() {
  return !!getSavedMemberActorName() || isAdminLoggedIn;
}

/**
 * Ensures we know which team member is checking tasks before saving a checkmark.
 */
function requireChecklistActorThen(actionFn) {
  if (hasSelectedChecklistActor()) {
    actionFn();
    return;
  }
  pendingChecklistAction = actionFn;
  renderChecklists(); // Keep UI checkboxes accurate until actor picks their name

  const grid = document.getElementById("checklistActorPickerGrid");
  if (grid) {
    const memberNames = (appState.members || []).map(m => m.name).sort((a, b) => a.localeCompare(b));
    grid.innerHTML = memberNames.map(name => `
      <button type="button" class="btn actor-pick-btn" onclick="selectActorAndContinue('${escapeQuotes(name)}')">
        👤 ${escapeHtml(name)}
      </button>
    `).join("");
  }

  const modal = document.getElementById("checklistActorModal");
  if (modal) modal.style.display = "flex";
}

function closeChecklistActorModal() {
  pendingChecklistAction = null;
  const modal = document.getElementById("checklistActorModal");
  if (modal) modal.style.display = "none";
}

function selectActorAndContinue(name) {
  if (!name) return;
  const nextAction = pendingChecklistAction;
  pendingChecklistAction = null;
  const modal = document.getElementById("checklistActorModal");
  if (modal) modal.style.display = "none";
  onVolunteerFilterChange(name, false);
  if (typeof nextAction === "function") {
    nextAction();
  }
}

function getActiveChecklistActor() {
  const saved = getSavedMemberActorName();
  if (saved) return saved;
  return isAdminLoggedIn ? `${getLeaderName()} (Admin)` : "Media Team";
}

function formatChecklistTimestamp() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/**
 * Updates checklist item statuses and who/when attribution for a service week,
 * pushing only changed leaf keys to Firebase RTDB.
 */
function applyChecklistItemStates(viewDate, itemStatusMap) {
  if (!appState.weeklyChecks) appState.weeklyChecks = {};
  if (!appState.weeklyChecks[viewDate]) appState.weeklyChecks[viewDate] = {};
  if (!appState.weeklyCheckMeta) appState.weeklyCheckMeta = {};
  if (!appState.weeklyCheckMeta[viewDate]) appState.weeklyCheckMeta[viewDate] = {};

  const actor = getActiveChecklistActor();
  const timeStr = formatChecklistTimestamp();
  const isActiveWeek = viewDate === getActiveWeekDate();
  const cloudPatch = {};

  Object.keys(itemStatusMap).forEach(itemId => {
    const isDone = !!itemStatusMap[itemId];
    if (isDone) {
      const meta = { by: actor, at: timeStr };
      appState.weeklyChecks[viewDate][itemId] = true;
      appState.weeklyCheckMeta[viewDate][itemId] = meta;
      cloudPatch[`weeklyChecks/${viewDate}/${itemId}`] = true;
      cloudPatch[`weeklyCheckMeta/${viewDate}/${itemId}`] = meta;
    } else {
      delete appState.weeklyChecks[viewDate][itemId];
      delete appState.weeklyCheckMeta[viewDate][itemId];
      cloudPatch[`weeklyChecks/${viewDate}/${itemId}`] = null;
      cloudPatch[`weeklyCheckMeta/${viewDate}/${itemId}`] = null;
    }

    if (isActiveWeek && appState.checklists) {
      appState.checklists.forEach(cl => {
        const item = (cl.items || []).find(i => i.id === itemId);
        if (item) item.done = isDone;
      });
    }
  });

  saveState(false, cloudPatch);
  renderChecklists();
  updateBadges();
}

function toggleCategoryChecklistDone(clId) {
  const viewDate = currentViewingWeekDate();
  const checks = (appState.weeklyChecks && appState.weeklyChecks[viewDate]) || {};

  const cl = (appState.checklists || []).find(c => c.id === clId);
  if (!cl || !cl.items || cl.items.length === 0) return;

  const allCurrentlyDone = cl.items.every(i => !!checks[i.id]);
  const newStatus = !allCurrentlyDone;

  const commitCategoryToggle = () => {
    const itemStatusMap = {};
    cl.items.forEach(i => { itemStatusMap[i.id] = newStatus; });
    applyChecklistItemStates(viewDate, itemStatusMap);

    const cleanTitle = cl.title.replace(/^\d+\.\s*/, '');
    if (newStatus) {
      const actor = getActiveChecklistActor();
      showToast(`✅ "${cleanTitle}" marked complete by ${actor}!`);
    } else {
      showToast(`⏳ "${cleanTitle}" reopened & synced live!`);
    }
  };

  if (newStatus) {
    requireChecklistActorThen(commitCategoryToggle);
  } else {
    commitCategoryToggle();
  }
}

function scrollToChecklistCategory(clId) {
  const el = document.getElementById(`cat-box-${clId}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('highlight-section-pulse');
    setTimeout(() => el.classList.remove('highlight-section-pulse'), 1800);
  }
}

function renderChecklists() {
  const container = document.getElementById("checklistsContainer");
  const adminContainer = document.getElementById("adminChecklistsContainer");

  const weeks = getServiceWeeks();
  const activeDate = getActiveWeekDate();
  const activeWeekObj = weeks.find(w => w.date === activeDate) || weeks[0];

  // 1. Calculate stats for the active week
  const checks = (appState.weeklyChecks && appState.weeklyChecks[activeDate]) || {};
  const checkMeta = (appState.weeklyCheckMeta && appState.weeklyCheckMeta[activeDate]) || {};
  let totalTasks = 0;
  let doneTasks = 0;
  if (appState.checklists) {
    appState.checklists.forEach(cl => {
      if (cl.items) {
        totalTasks += cl.items.length;
        cl.items.forEach(i => {
          if (checks[i.id]) doneTasks++;
        });
      }
    });
  }
  const pct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const pendingTasks = totalTasks - doneTasks;

  // Update Status Filter Counters
  const countAll = document.getElementById("countAllTasks");
  const countPending = document.getElementById("countPendingTasks");
  const countDone = document.getElementById("countDoneTasks");
  if (countAll) countAll.textContent = totalTasks;
  if (countPending) countPending.textContent = pendingTasks;
  if (countDone) countDone.textContent = doneTasks;

  // 2. Update Public Weekly Banner DOM elements
  const bannerTitle = document.getElementById("activeWeekBannerTitle");
  if (bannerTitle) {
    bannerTitle.textContent = `📋 Saturday Preparation Checklist – Sunday Service (${activeWeekObj.label})`;
  }

  const liveBadgeText = document.getElementById("weekLiveBadgeText");
  if (liveBadgeText) {
    liveBadgeText.textContent = "SATURDAY PREPARATION • SUNDAY SERVICE";
  }

  const bannerSub = document.getElementById("activeWeekBannerSub");
  if (bannerSub) {
    bannerSub.textContent = `FLAG Media Team – Saturday Preparation Checklist for Sunday Service (${activeWeekObj.label}). Any team member can complete and update tasks once done. 🙌`;
  }

  const weekProgText = document.getElementById("weekProgressText");
  if (weekProgText) weekProgText.textContent = `${doneTasks} / ${totalTasks}`;

  const weekProgPct = document.getElementById("weekProgressPct");
  if (weekProgPct) weekProgPct.textContent = `${pct}%`;

  const bannerBar = document.getElementById("weekBannerProgressBar");
  if (bannerBar) bannerBar.style.width = `${pct}%`;

  // 3. Render Active Week Tag in Banner
  const pillsWrap = document.getElementById("weekPillsWrap");
  if (pillsWrap) {
    pillsWrap.innerHTML = `
      <span class="week-pill-btn active ongoing" style="cursor: default;">
        <span class="week-pill-dot"></span>
        <span>Active Week: <strong>${activeWeekObj.label}</strong></span>
      </span>
    `;
  }

  // 4. Render 1-Tap Category Readiness Command Box
  const catGrid = document.getElementById("categoryReadinessGrid");
  if (catGrid && appState.checklists) {
    const catIcons = {
      "cam-maint": "📷",
      "sys-equip": "💻",
      "charge-batt": "🔋",
      "live-proc": "🎬",
      "outside-tv": "📺"
    };

    catGrid.innerHTML = appState.checklists.map(cl => {
      const icon = catIcons[cl.id] || "📋";
      const total = cl.items ? cl.items.length : 0;
      let completed = 0;
      const checkersSet = new Set();
      if (cl.items) {
        cl.items.forEach(i => {
          if (checks[i.id]) {
            completed++;
            if (checkMeta[i.id]?.by) checkersSet.add(checkMeta[i.id].by);
          }
        });
      }
      const checkersList = Array.from(checkersSet);
      const allDone = total > 0 && completed === total;
      const catPct = total === 0 ? 0 : Math.round((completed / total) * 100);

      return `
        <div class="cat-readiness-card ${allDone ? 'cat-done' : ''}" onclick="scrollToChecklistCategory('${cl.id}')" title="Click to view & scroll to ${escapeQuotes(cl.title)}">
          <div class="cat-card-header">
            <div class="cat-icon-chip">${icon}</div>
            <div style="flex: 1; min-width: 0;">
              <h4 class="cat-card-title">${escapeHtml(cl.title)}</h4>
              ${checkersList.length ? `<div class="cat-checked-by">👤 ${escapeHtml(checkersList.join(", "))}</div>` : ''}
            </div>
            <span class="cat-status-badge ${allDone ? 'badge-complete' : 'badge-pending'}">
              ${completed}/${total}
            </span>
          </div>

          <div class="cat-progress-track">
            <div class="cat-progress-fill" style="width: ${catPct}%;"></div>
          </div>

          <div class="cat-card-footer">
            <span class="cat-pct-label">${catPct}% Done</span>
            <button type="button" class="btn-cat-action ${allDone ? 'btn-reopen' : 'btn-mark-done'}" onclick="event.stopPropagation(); toggleCategoryChecklistDone('${cl.id}')" title="${allDone ? 'Click to reopen this section' : '1-Tap to mark all ' + total + ' tasks complete'}">
              ${allDone ? '↩️ Reopen' : '✅ Mark Done'}
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // 5. Update Admin Controls
  const adminSelect = document.getElementById("adminActiveWeekSelect");
  if (adminSelect) {
    adminSelect.innerHTML = "";
    weeks.forEach(w => {
      const opt = document.createElement("option");
      opt.value = w.date;
      opt.textContent = `${w.label} ${w.date === activeDate ? '★ (Active)' : ''}`;
      if (w.date === activeDate) opt.selected = true;
      adminSelect.appendChild(opt);
    });
  }

  const adminActiveBadge = document.getElementById("adminActiveWeekBadge");
  if (adminActiveBadge) {
    adminActiveBadge.textContent = `Active: ${activeWeekObj.shortLabel} (${activeDate})`;
  }

  // Helper to build HTML for each checklist box
  function buildChecklistHtml(cl, isAdmin) {
    const total = cl.items ? cl.items.length : 0;
    let completed = 0;
    const sectionCheckersSet = new Set();
    if (cl.items) {
      cl.items.forEach(i => {
        if (checks[i.id]) {
          completed++;
          if (checkMeta[i.id]?.by) sectionCheckersSet.add(checkMeta[i.id].by);
        }
      });
    }
    const sectionCheckers = Array.from(sectionCheckersSet);
    const allDone = total > 0 && completed === total;
    const catPct = total === 0 ? 0 : Math.round((completed / total) * 100);

    let taskHtml = "";
    if (cl.items) {
      const filterMode = currentChecklistStatusFilter || "all";
      let visibleItemCount = 0;

      cl.items.forEach(item => {
        const isDone = !!checks[item.id];
        // Apply live filter: pending only or done only
        if (filterMode === "pending" && isDone) return;
        if (filterMode === "done" && !isDone) return;
        visibleItemCount++;

        const meta = checkMeta[item.id];
        const metaBadgeHtml = isDone
          ? (meta && meta.by
              ? `<span class="task-checked-meta">👤 Checked by <strong>${escapeHtml(meta.by)}</strong>${meta.at ? ` • ${escapeHtml(meta.at)}` : ''}</span>`
              : `<span class="task-checked-meta task-checked-meta-muted">✓ Completed</span>`)
          : '';

        taskHtml += `
          <div class="task-row ${isDone ? 'checked' : ''}">
            <div class="task-main" onclick="toggleCheckItem('${cl.id}', '${item.id}')">
              <input type="checkbox" ${isDone ? 'checked' : ''} onclick="event.stopPropagation(); toggleCheckItem('${cl.id}', '${item.id}')">
              <div class="task-content-wrap">
                <span class="task-text">${escapeHtml(item.text)}</span>
                ${metaBadgeHtml}
              </div>
            </div>
            ${isAdmin ? `<button class="task-del-btn" onclick="deleteChecklistItem('${cl.id}', '${item.id}')" title="Delete this task">&times;</button>` : ''}
          </div>
        `;
      });

      if (visibleItemCount === 0) {
        if (filterMode === "pending") {
          taskHtml = `<p style="font-size: 0.82rem; color: #10b981; padding: 8px 4px; font-weight: 700;">🎉 All tasks completed in this section!</p>`;
        } else if (filterMode === "done") {
          taskHtml = `<p style="font-size: 0.82rem; color: #94a3b8; padding: 8px 4px;">No tasks completed yet in this section.</p>`;
        }
      }
    }

    return `
      <div class="checklist-box ${allDone ? 'box-all-done' : ''}" id="cat-box-${cl.id}">
        <div class="checklist-header">
          <div>
            <h3 class="checklist-title">${cl.title}</h3>
            ${sectionCheckers.length ? `<div class="cat-checked-by-pill">👤 Checked by: <strong>${escapeHtml(sectionCheckers.join(", "))}</strong></div>` : ''}
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <button type="button" class="btn-cat-complete ${allDone ? 'is-complete' : ''}" onclick="toggleCategoryChecklistDone('${cl.id}')" title="${allDone ? 'Click to reopen section' : '1-Tap to mark all ' + total + ' tasks complete'}">
              ${allDone ? '✅ Complete (Undo)' : '⚡ Mark Section Complete'}
            </button>
            <span class="call-time-badge">${completed}/${total}</span>
            ${isAdmin ? `
              <button class="cat-del-btn" onclick="deleteChecklistCategory('${cl.id}')" title="Delete this entire checklist category">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            ` : ''}
          </div>
        </div>

        <div class="progress-track">
          <div class="progress-fill" style="width: ${catPct}%;"></div>
        </div>

        <div class="task-list">
          ${taskHtml || '<p style="font-size: 0.8rem; color: var(--text-dim); padding: 4px;">No tasks yet.</p>'}
        </div>

        ${isAdmin ? `
          <div class="add-task-row">
            <input type="text" id="taskInput_${cl.id}" placeholder="+ Add new task..." class="input-text" style="flex: 1; font-size: 0.8rem; padding: 6px 10px;" onkeydown="if(event.key==='Enter') addChecklistItem('${cl.id}')">
            <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addChecklistItem('${cl.id}')">+ Add</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  // 6. Render Public / Volunteer Checklists
  if (container) {
    container.innerHTML = "";
    if (appState.checklists) {
      appState.checklists.forEach(cl => {
        container.innerHTML += buildChecklistHtml(cl, false);
      });
    }
  }

  // 7. Render Admin Editable Checklists
  if (adminContainer) {
    adminContainer.innerHTML = "";
    if (appState.checklists) {
      appState.checklists.forEach(cl => {
        adminContainer.innerHTML += buildChecklistHtml(cl, true);
      });
    }
  }
}

function toggleCheckItem(clId, itemId) {
  const viewDate = currentViewingWeekDate();
  const checks = (appState.weeklyChecks && appState.weeklyChecks[viewDate]) || {};
  const nextStatus = !checks[itemId];

  const commitItemToggle = () => {
    applyChecklistItemStates(viewDate, { [itemId]: nextStatus });
    if (nextStatus) {
      const actor = getActiveChecklistActor();
      showToast(`✅ Checked by ${actor} & synced live to all crew!`);
    } else {
      showToast("⏳ Task marked pending & synced live!");
    }
  };

  if (nextStatus) {
    requireChecklistActorThen(commitItemToggle);
  } else {
    commitItemToggle();
  }
}

function resetChecklists() {
  const viewDate = currentViewingWeekDate();
  const weeks = getServiceWeeks();
  const wObj = weeks.find(w => w.date === viewDate);
  const wName = wObj ? wObj.label : viewDate;

  if (confirm(`Reset all checklist items for ${wName}?\n\nAll tasks will be unchecked freshly.`)) {
    if (!appState.weeklyChecks) appState.weeklyChecks = {};
    if (!appState.weeklyCheckMeta) appState.weeklyCheckMeta = {};
    appState.weeklyChecks[viewDate] = {};
    appState.weeklyCheckMeta[viewDate] = {};

    if (viewDate === getActiveWeekDate() && appState.checklists) {
      appState.checklists.forEach(cl => {
        if (cl.items) {
          cl.items.forEach(i => i.done = false);
        }
      });
    }

    saveState(false, {
      [`weeklyChecks/${viewDate}`]: null,
      [`weeklyCheckMeta/${viewDate}`]: null
    });
    renderChecklists();
    updateBadges();
    showToast(`Checklist reset to fresh for ${wName}.`);
  }
}

function markAllChecklistsDone() {
  requireChecklistActorThen(() => {
    const viewDate = currentViewingWeekDate();
    const weeks = getServiceWeeks();
    const wObj = weeks.find(w => w.date === viewDate);
    const wName = wObj ? wObj.label : viewDate;

    const itemStatusMap = {};
    (appState.checklists || []).forEach(cl => {
      (cl.items || []).forEach(i => { itemStatusMap[i.id] = true; });
    });

    applyChecklistItemStates(viewDate, itemStatusMap);
    showToast(`All items marked done by ${getActiveChecklistActor()} for ${wName}!`);
  });
}

/**
 * Generates a formatted Saturday Preparation progress report and opens WhatsApp share.
 */
function shareChecklistStatusWhatsApp() {
  const activeDate = getActiveWeekDate();
  const weeks = getServiceWeeks();
  const wObj = weeks.find(w => w.date === activeDate) || { label: activeDate };
  const checks = (appState.weeklyChecks && appState.weeklyChecks[activeDate]) || {};
  const meta = (appState.weeklyCheckMeta && appState.weeklyCheckMeta[activeDate]) || {};

  let total = 0;
  let done = 0;
  const sectionsText = (appState.checklists || []).map(cl => {
    const items = cl.items || [];
    const catDone = items.filter(i => !!checks[i.id]).length;
    total += items.length;
    done += catDone;
    const icon = (items.length > 0 && catDone === items.length) ? "✅" : "⏳";
    const pendingList = items.filter(i => !checks[i.id]).map(i => `   • Pending: ${i.text}`);
    const lastBy = items.map(i => meta[i.id]?.by).filter(Boolean).pop();
    const headerLine = `${icon} *${cl.title}* (${catDone}/${items.length})${lastBy ? ` — _by ${lastBy}_` : ''}`;
    return pendingList.length ? `${headerLine}\n${pendingList.join("\n")}` : headerLine;
  }).join("\n\n");

  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const statusBanner = done === total && total > 0
    ? "🎉 *ALL SATURDAY PREP TASKS COMPLETED — READY FOR SUNDAY!*"
    : `📊 *Progress:* ${done} / ${total} Tasks Completed (${pct}%)`;

  const msg = `*🕊️ FLAG MEDIA TEAM — SATURDAY PREP REPORT*\n` +
    `📅 *Service Week:* ${wObj.label}\n` +
    `${statusBanner}\n━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `${sectionsText}\n\n━━━━━━━━━━━━━━━━━━━━━\n` +
    `_Updated via FLAG Media Portal_ 🙌`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast("📋 Checklist report copied! Opening WhatsApp...");
  }).catch(() => {
    copyFallback(msg);
  });
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
}

function updateBadges() {
  const activeDate = getActiveWeekDate();
  const checks = (appState.weeklyChecks && appState.weeklyChecks[activeDate]) || {};
  let total = 0;
  let done = 0;
  if (appState.checklists) {
    appState.checklists.forEach(cl => {
      if (cl.items) {
        total += cl.items.length;
        cl.items.forEach(i => {
          if (checks[i.id]) done++;
        });
      }
    });
  }

  const el = document.getElementById("checklistProgressBadge");
  if (el) {
    el.textContent = `${done}/${total}`;
  }

  const heroProg = document.getElementById("heroChecklistProgress");
  if (heroProg) {
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    heroProg.textContent = `${done}/${total} Done (${pct}%)`;
  }
}

// ================= VIEW SWITCHER =================
function goHome() {
  switchView("scheduleView");
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function switchView(viewId, btn) {
  document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  const panel = document.getElementById(viewId);
  if (panel) panel.classList.add("active");
  if (btn) {
    btn.classList.add("active");
  } else {
    const matchingBtn = document.querySelector(`.nav-btn[onclick*="${viewId}"]`);
    if (matchingBtn) matchingBtn.classList.add("active");
  }

  if (viewId === "teamView") {
    renderPublicTeamDirectory();
  } else if (viewId === "scheduleView") {
    renderAll();
  }
}

// ================= WHATSAPP EXPORT & LIVE PREVIEW =================
function initWhatsAppControls() {
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
}

function onWhatsAppModeChange() {
  const mode = document.getElementById("waModeSelect").value;
  const dayTypeEl = document.getElementById("waDayTypeSelect");
  const dateEl = document.getElementById("waDateSelect");

  if (mode === "full") {
    dayTypeEl.style.display = "none";
    dateEl.style.display = "none";
  } else {
    dayTypeEl.style.display = "inline-block";
    dateEl.style.display = "inline-block";
    populateWhatsAppDateSelect();
  }
  updateWhatsAppPreview();
}

function onWhatsAppDayTypeChange() {
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
}

function populateWhatsAppDateSelect() {
  const dateSelect = document.getElementById("waDateSelect");
  const dayTypeSelect = document.getElementById("waDayTypeSelect");
  if (!dateSelect || !dayTypeSelect) return;

  // Show/Hide Early Morning Prayer option in dayTypeSelect based on active state
  const waMorningOpt = document.getElementById("waMorningOption");
  const isMorningActive = !!(appState.morningPrayer && appState.morningPrayer.enabled);
  if (waMorningOpt) {
    waMorningOpt.style.display = isMorningActive ? "" : "none";
    if (!isMorningActive && dayTypeSelect.value === "morning") {
      dayTypeSelect.value = "sunday";
      onWhatsAppDayTypeChange();
      return;
    }
  }

  const dayType = dayTypeSelect.value;
  const prevVal = dateSelect.value;
  dateSelect.innerHTML = "";

  if (dayType === "sunday") {
    (appState.firstService || []).forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.date;
      opt.textContent = r.date;
      dateSelect.appendChild(opt);
    });
  } else if (dayType === "friday") {
    (appState.fridayPrayer || []).forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.date;
      opt.textContent = r.date;
      dateSelect.appendChild(opt);
    });
  } else if (dayType === "special") {
    if (appState.specialMeetingsEnabled === false) {
      dateSelect.innerHTML = `<option value="">⚠️ Special Event Services Inactive (Hidden)</option>`;
    } else {
      (appState.specialMeetings || []).forEach(r => {
        const catMeta = getFestivalCategoryMeta(r.category || inferFestivalCategory(r.title));
        const opt = document.createElement("option");
        opt.value = r.title + " - " + r.date;
        opt.textContent = `${catMeta.icon} ${r.title} (${r.date})`;
        dateSelect.appendChild(opt);
      });
      if ((appState.specialMeetings || []).length === 0) {
        dateSelect.innerHTML = `<option value="">No Festival Services</option>`;
      }
    }
  } else if (dayType === "morning") {
    if (appState.morningPrayer && appState.morningPrayer.days) {
      appState.morningPrayer.days.forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.day;
        opt.textContent = r.day;
        dateSelect.appendChild(opt);
      });
    }
  }

  // Restore previous selection if exists
  if (prevVal && Array.from(dateSelect.options).some(o => o.value === prevVal)) {
    dateSelect.value = prevVal;
  }
}

function generateWhatsAppText() {
  const modeEl = document.getElementById("waModeSelect");
  const mode = modeEl ? modeEl.value : "single";
  const m = appState.month || (getMonthName(appState.selectedMonth) + " " + appState.selectedYear);

  // 1. FULL MONTH MODE
  if (mode === "full") {
    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🎥 INDOOR MEDIA TEAM - ${m.toUpperCase()} SCHEDULE\n\n`;

    text += `══════════════════════════════\n`;
    text += `📅 1ST SERVICE (TAMIL) (06:00 AM – 08:00 AM | Prayer: 05:30 AM)\n`;
    text += `══════════════════════════════\n`;

    appState.firstService.forEach(r => {
      text += `• ${r.date}:\n`;
      text += `  - 1st Cam: ${r.cam1 || '-'}\n`;
      text += `  - 2nd Cam: ${r.cam2 || '-'}\n`;
      text += `  - Gimble: ${r.gimble || '-'}\n`;
      text += `  - Live in System: ${r.live || '-'}\n`;
      text += `  - Spot Editing: ${r.spot || '-'}\n`;
      text += `  - Charging Incharge: ${r.charging || '-'}\n\n`;
    });

    text += `══════════════════════════════\n`;
    text += `📅 2ND & 3RD SERVICE (TAMIL) (Prayer: 30 Mins Before Service)\n`;
    text += `══════════════════════════════\n`;
    appState.secondService.forEach((r, idx) => {
      const r3 = appState.thirdService[idx] || {};
      text += `• ${r.date}:\n`;
      text += `  - 2nd Service (Tamil): ${r.operator || '-'}\n`;
      text += `  - 3rd Service (Tamil): ${r3.operator || '-'}\n\n`;
    });

    text += `══════════════════════════════\n`;
    text += `🙏 FRIDAY FASTING PRAYER\n`;
    text += `══════════════════════════════\n`;
    appState.fridayPrayer.forEach(r => {
      text += `• ${r.date}: 1st Cam: ${r.cam1 || '-'} | Live: ${r.live || '-'}\n`;
    });

    // Append Special Meetings if any (and active)
    if (appState.specialMeetingsEnabled !== false && appState.specialMeetings && appState.specialMeetings.length > 0) {
      text += `\n══════════════════════════════\n`;
      text += `🗓️ SPECIAL EVENT SERVICES ROSTER\n`;
      text += `══════════════════════════════\n`;
      appState.specialMeetings.forEach(r => {
        const catMeta = getFestivalCategoryMeta(r.category || inferFestivalCategory(r.title));
        const sTime = r.time || inferFestivalTime(r.title);
        const cTime = r.callTime || inferFestivalCallTime(r.title);
        text += `• ${catMeta.icon} ${r.title} (${r.date}):\n`;
        if (sTime) text += `  ⏰ Service Time: ${sTime}${cTime ? ` | Call Time: ${cTime}` : ''}\n`;
        text += `  - 1st Cam: ${r.cam1 || '-'} | 2nd Cam: ${r.cam2 || '-'}\n`;
        text += `  - Gimble: ${r.gimble || '-'} | Live: ${r.live || '-'} | Spot: ${r.spot || '-'}\n`;
        if (r.notes) text += `  📝 Note: ${r.notes}\n`;
        text += `\n`;
      });
    }

    text += `\nServing together for His glory! 🙌`;
    return text;
  }

  // 2. SINGLE DATE MODE
  const dayTypeEl = document.getElementById("waDayTypeSelect");
  const dayType = dayTypeEl ? dayTypeEl.value : "sunday";
  const dateEl = document.getElementById("waDateSelect");
  const selectedDate = dateEl ? dateEl.value : "";

  if (dayType === "sunday") {
    const s1 = (appState.firstService || []).find(r => r.date === selectedDate) || {};
    const s2 = (appState.secondService || []).find(r => r.date === selectedDate) || {};
    const s3 = (appState.thirdService || []).find(r => r.date === selectedDate) || {};

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🎥 INDOOR MEDIA TEAM - SUNDAY SERVICE\n\n`;
    text += `📅 Date: ${selectedDate}\n\n`;

    text += `══════════════════════════════\n`;
    text += `🌅 1ST SERVICE (TAMIL) (06:00 AM – 08:00 AM | Prayer: 05:30 AM)\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${s1.cam1 || '-'}\n`;
    text += `• 2nd Cam: ${s1.cam2 || '-'}\n`;
    text += `• Gimble: ${s1.gimble || '-'}\n`;
    text += `• Live in System: ${s1.live || '-'}\n`;
    text += `• Spot Editing: ${s1.spot || '-'}\n`;
    text += `• Camera & Battery Incharge: ${s1.charging || '-'}\n\n`;

    text += `══════════════════════════════\n`;
    text += `☀️ 2ND & 3RD SERVICE (TAMIL)\n`;
    text += `══════════════════════════════\n`;
    text += `• 2nd Service (Tamil) (08:30 AM – 10:30 AM | Prayer: 08:00 AM): ${s2.operator || '-'}\n`;
    text += `• 3rd Service (Tamil) (11:00 AM – 01:00 PM | Prayer: 10:30 AM): ${s3.operator || '-'}\n\n`;

    text += `Let's serve with excellence and honor the Lord! 🙌`;
    return text;
  } else if (dayType === "friday") {
    // Friday Fasting Prayer
    const fRow = (appState.fridayPrayer || []).find(r => r.date === selectedDate) || {};

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🙏 FRIDAY FASTING PRAYER\n\n`;
    text += `📅 Date: ${selectedDate}\n\n`;

    text += `══════════════════════════════\n`;
    text += `🎥 MEDIA DUTY SCHEDULE\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${fRow.cam1 || '-'}\n`;
    text += `• Live in System: ${fRow.live || '-'}\n\n`;

    text += `Serving together for His glory! 🙌`;
    return text;
  } else if (dayType === "special") {
    if (appState.specialMeetingsEnabled === false) {
      return "⚠️ Special Event Services schedule is currently inactive.\nYou can turn it ON anytime from the Admin Console.";
    }
    // Special Meeting
    const spec = (appState.specialMeetings || []).find(r => (r.title + " - " + r.date) === selectedDate || r.title === selectedDate || r.date === selectedDate) || {};
    const catMeta = getFestivalCategoryMeta(spec.category || inferFestivalCategory(spec.title));
    const sTime = spec.time || inferFestivalTime(spec.title);
    const cTime = spec.callTime || inferFestivalCallTime(spec.title);

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `${catMeta.icon} ${catMeta.label.toUpperCase()} — MEDIA SCHEDULE\n\n`;
    text += `🎉 Event: ${spec.title || 'Festival Service'}\n`;
    text += `📆 Date: ${spec.date || '-'}\n`;
    if (sTime) text += `⏰ Service Time: ${sTime}\n`;
    if (cTime) text += `⏱️ Crew Call Time: ${cTime}\n`;
    if (spec.notes) text += `📝 Notes: ${spec.notes}\n`;
    text += `\n`;

    text += `══════════════════════════════\n`;
    text += `🎥 MEDIA CREW ON DUTY\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${spec.cam1 || '-'}\n`;
    text += `• 2nd Cam: ${spec.cam2 || '-'}\n`;
    text += `• Gimble: ${spec.gimble || '-'}\n`;
    text += `• Live in System: ${spec.live || '-'}\n`;
    text += `• Spot Editing: ${spec.spot || '-'}\n\n`;

    text += `Let's capture every moment for His glory! 🙌`;
    return text;
  } else if (dayType === "morning") {
    // Early Morning Prayer
    if (!appState.morningPrayer || !appState.morningPrayer.enabled) {
      return "⚠️ Early Morning Prayer schedule is currently inactive.\nYou can turn it ON anytime from the Admin Console.";
    }
    const campaignTitle = (appState.morningPrayer && appState.morningPrayer.title) ? appState.morningPrayer.title : "Early Morning Prayer";
    const dayRow = (appState.morningPrayer && appState.morningPrayer.days ? appState.morningPrayer.days.find(r => r.day === selectedDate) : {}) || {};

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🌅 EARLY MORNING PRAYER MEDIA SCHEDULE\n\n`;
    text += `🔥 Campaign: ${campaignTitle}\n`;
    text += `📅 Scheduled: ${selectedDate}\n\n`;

    text += `══════════════════════════════\n`;
    text += `🎥 MEDIA CREW ASSIGNMENT\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${dayRow.cam1 || '-'}\n`;
    text += `• 2nd Cam: ${dayRow.cam2 || '-'}\n`;
    text += `• Gimbal: ${dayRow.gimbal || '-'}\n`;
    text += `• Live Editor: ${dayRow.liveEditor || '-'}\n`;
    text += `• Social Media: ${dayRow.socialMedia || '-'}\n\n`;

    text += `Serving together for His glory! 🙌`;
    return text;
  }
}

function updateWhatsAppPreview() {
  const el = document.getElementById("whatsappLivePreview");
  if (el) {
    el.textContent = generateWhatsAppText();
  }
}

function copyWhatsAppSchedule() {
  const text = generateWhatsAppText();
  navigator.clipboard.writeText(text).then(() => {
    showToast(`WhatsApp announcement copied to clipboard!`);
  });
}

function openWhatsAppDirect() {
  const text = generateWhatsAppText();
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function toggleWhatsAppPreview() {
  const drawer = document.getElementById("waPreviewDrawer");
  const btn = document.getElementById("waTogglePreviewBtn");
  if (!drawer) return;
  if (drawer.style.display === "none" || drawer.style.display === "") {
    drawer.style.display = "block";
    if (btn) btn.innerHTML = "🙈 Hide";
  } else {
    drawer.style.display = "none";
    if (btn) btn.innerHTML = "👁️ Preview";
  }
}

// ================= SATURDAY EVENING DUTY REMINDER GENERATOR =================
function getNextUpcomingSundayDate() {
  const sundays = (appState.firstService || []).map(r => r.date);
  if (sundays.length === 0) return "";

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  for (let dateStr of sundays) {
    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      parsed.setHours(23, 59, 59, 999);
      if (parsed >= now) {
        return dateStr;
      }
    }
  }
  return sundays[0];
}

function generateSaturdayAlertText(targetDate) {
  const sDate = targetDate || getNextUpcomingSundayDate();
  const s1 = (appState.firstService || []).find(r => r.date === sDate) || (appState.firstService && appState.firstService[0]) || {};
  const s2 = (appState.secondService || []).find(r => r.date === sDate) || (appState.secondService && appState.secondService[0]) || {};
  const s3 = (appState.thirdService || []).find(r => r.date === sDate) || (appState.thirdService && appState.thirdService[0]) || {};

  const activeDateStr = s1.date || sDate || 'This Sunday';

  return `*🕊️ FULL LIFE CENTRE AG CHURCH - INDOOR MEDIA TEAM*
━━━━━━━━━━━━━━━━━━━━━
Shalom Media Team! 👋
*REMINDER: TOMORROW'S SUNDAY MEDIA SERVING CREW*

📅 *Service Date:* ${activeDateStr}
🙏 *1st Service (Tamil):* Starts 06:00 AM (Prayer: 05:30 AM)
🙏 *2nd Service (Tamil):* Starts 08:30 AM (Prayer: 08:00 AM)
🙏 *3rd Service (Tamil):* Starts 11:00 AM (Prayer: 10:30 AM)
📍 *Location:* Indoor Media Control Desk

*🎬 1ST SERVICE (TAMIL) (Prayer: 05:30 AM | Starts 06:00 AM):*
• 🎥 1st Camera: *${s1.cam1 || '-'}*
• 📹 2nd Camera: *${s1.cam2 || '-'}*
• 🎯 Gimble: *${s1.gimble || '-'}*
• 💻 Live in System: *${s1.live || '-'}*
• ✂️ Spot Editing: *${s1.spot || '-'}*
• 🔋 Camera & Battery Charging: *${s1.charging || 'Yashwanth & Sam Joshua'}*

*🎬 2ND SERVICE (TAMIL) (Prayer: 08:00 AM | Starts 08:30 AM):*
• 🎥 Cam & Live Operator: *${s2.operator || '-'}*

*🎬 3RD SERVICE (TAMIL) (Prayer: 10:30 AM | Starts 11:00 AM):*
• 🎥 Cam & Live Operator: *${s3.operator || '-'}*

━━━━━━━━━━━━━━━━━━━━━
⚠️ *Important Team Instructions for Tomorrow:*
• Please be on time before 30 minutes of service and make the arrangement and setup properly.

_"Whatever you do, work at it with all your heart as for the Lord." - Colossians 3:23_ 🙏✨
God bless your faithful ministry!`;
}

function openSaturdayAlertModal() {
  const modal = document.getElementById("saturdayAlertModal");
  const dateSelect = document.getElementById("saturdayAlertDateSelect");
  if (!modal) return;

  if (dateSelect) {
    const nextSunday = getNextUpcomingSundayDate();
    dateSelect.innerHTML = (appState.firstService || []).map(r => `
      <option value="${r.date}" ${r.date === nextSunday ? 'selected' : ''}>
        📅 Sunday, ${r.date} ${r.date === nextSunday ? '★ (Next Service)' : ''}
      </option>
    `).join('');
  }

  updateSaturdayAlertModalPreview();
  modal.style.display = "flex";
}

function closeSaturdayAlertModal() {
  const modal = document.getElementById("saturdayAlertModal");
  if (modal) modal.style.display = "none";
}

function updateSaturdayAlertModalPreview() {
  const dateSelect = document.getElementById("saturdayAlertDateSelect");
  const selectedDate = dateSelect ? dateSelect.value : "";
  const preview = document.getElementById("saturdayAlertPreview");
  if (preview) {
    preview.textContent = generateSaturdayAlertText(selectedDate);
  }
}

function copySaturdayAlertText() {
  const preview = document.getElementById("saturdayAlertPreview");
  if (!preview) return;
  navigator.clipboard.writeText(preview.textContent).then(() => {
    showToast("📋 Saturday reminder broadcast copied to clipboard!");
  }).catch(() => {
    copyFallback(preview.textContent);
    showToast("📋 Saturday reminder broadcast copied!");
  });
}

function sendSaturdayAlertWhatsApp() {
  const preview = document.getElementById("saturdayAlertPreview");
  if (!preview) return;
  const encoded = encodeURIComponent(preview.textContent);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

function sendSaturdayAlertToLeader() {
  const preview = document.getElementById("saturdayAlertPreview");
  if (!preview) return;
  openWhatsAppToLeader(preview.textContent);
}

// ================= EXPORT & IMPORT BACKUP =================
function exportDataJSON() {
  const jsonStr = JSON.stringify(appState, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const monthSafe = (appState.month || 'Schedule').replace(/\s+/g, '_');
  a.href = url;
  a.download = `FLAG_Media_${monthSafe}_Backup.json`;
  a.click();
  showToast("Full backup file downloaded!");
}

function importDataJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.firstService) {
        ensureStateIntegrity(imported);
        appState = imported;
        saveState();
        renderAll();
        showToast("Backup restored successfully!");
      } else {
        alert("Invalid backup file structure.");
      }
    } catch (err) {
      alert("Error reading backup JSON file.");
    }
  };
  reader.readAsText(file);
}

// ================= TOAST =================
function showToast(msg) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toastMsg");
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ================= UTILITY ESCAPE HELPERS =================
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeQuotes(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "\\'");
}

function copyFallback(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
    console.error("Clipboard copy failed", e);
  }
  document.body.removeChild(ta);
}

// ================= CENTRAL VOLUNTEER DUTIES EXTRACTOR =================
function getVolunteerDuties(name) {
  if (!name) return [];
  const duties = [];
  const target = name.trim().toLowerCase();

  const matches = (assigned) => {
    if (!assigned) return false;
    return isAliasMatch(target, assigned);
  };

  // 1st Service
  (appState.firstService || []).forEach(r => {
    const rolesMap = [
      { key: 'cam1', label: '🎥 1st Camera' },
      { key: 'cam2', label: '📹 2nd Camera' },
      { key: 'gimble', label: '🎯 Gimble Operator' },
      { key: 'live', label: '💻 Live in System' },
      { key: 'spot', label: '✂️ Spot Editing' },
      { key: 'charging', label: '🔋 Camera & Battery Charging' }
    ];
    rolesMap.forEach(rm => {
      if (matches(r[rm.key])) {
        const isSatPrep = rm.key === 'charging';
        const dutyDate = isSatPrep ? (getPreviousDayDateStr(r.date) || r.date) : r.date;
        duties.push({
          date: dutyDate,
          service: isSatPrep ? `Saturday Prep (For Sun ${r.date} 1st Service)` : '1st Service (06:00 AM – 08:00 AM)',
          serviceShort: isSatPrep ? 'Saturday Prep' : '1st Service',
          serviceType: 'firstService',
          role: rm.label,
          rawRole: rm.key,
          assignedText: r[rm.key],
          callTime: isSatPrep ? '06:00 PM' : '05:30 AM',
          prayerTime: isSatPrep ? 'Prep Day (Sat)' : '05:45 AM',
          serviceStart: isSatPrep ? '06:00 PM' : '06:00 AM',
          serviceEnd: isSatPrep ? '07:00 PM' : '08:00 AM',
          colorTag: isSatPrep ? 'tag-emerald' : 'tag-blue'
        });
      }
    });
  });

  // 2nd Service
  (appState.secondService || []).forEach(r => {
    if (matches(r.operator)) {
      duties.push({
        date: r.date,
        service: '2nd Service (08:30 AM – 10:30 AM)',
        serviceShort: '2nd Service',
        serviceType: 'secondService',
        role: '🎥 Camera & Live System',
        rawRole: 'operator',
        assignedText: r.operator,
        callTime: '08:00 AM',
        prayerTime: '08:15 AM',
        serviceStart: '08:30 AM',
        serviceEnd: '10:30 AM',
        colorTag: 'tag-amber'
      });
    }
  });

  // 3rd Service
  (appState.thirdService || []).forEach(r => {
    if (matches(r.operator)) {
      duties.push({
        date: r.date,
        service: '3rd Service (11:00 AM – 01:00 PM)',
        serviceShort: '3rd Service',
        serviceType: 'thirdService',
        role: '🎥 Camera & Live System',
        rawRole: 'operator',
        assignedText: r.operator,
        callTime: '10:30 AM',
        prayerTime: '10:45 AM',
        serviceStart: '11:00 AM',
        serviceEnd: '01:00 PM',
        colorTag: 'tag-purple'
      });
    }
  });

  // Friday Fasting Prayer
  (appState.fridayPrayer || []).forEach(r => {
    if (matches(r.cam1)) {
      duties.push({
        date: r.date,
        service: 'Friday Fasting Prayer',
        serviceShort: 'Friday Prayer',
        serviceType: 'fridayPrayer',
        role: '🎥 Camera Operator',
        rawRole: 'cam1',
        assignedText: r.cam1,
        callTime: '09:30 AM',
        prayerTime: '09:45 AM',
        serviceStart: '10:00 AM',
        serviceEnd: '01:00 PM',
        colorTag: 'tag-emerald'
      });
    }
    if (matches(r.live)) {
      duties.push({
        date: r.date,
        service: 'Friday Fasting Prayer',
        serviceShort: 'Friday Prayer',
        serviceType: 'fridayPrayer',
        role: '💻 Live System',
        rawRole: 'live',
        assignedText: r.live,
        callTime: '09:30 AM',
        prayerTime: '09:45 AM',
        serviceStart: '10:00 AM',
        serviceEnd: '01:00 PM',
        colorTag: 'tag-emerald'
      });
    }
  });

  // Special Meetings / Festival Services (if active)
  if (appState.specialMeetingsEnabled !== false) {
    (appState.specialMeetings || []).forEach(r => {
      const rolesMap = [
        { key: 'cam1', label: '🎥 1st Camera' },
        { key: 'cam2', label: '📹 2nd Camera' },
        { key: 'gimble', label: '🎯 Gimble Operator' },
        { key: 'live', label: '💻 Live in System' },
        { key: 'spot', label: '✂️ Spot Editing' }
      ];
      const cat = r.category || inferFestivalCategory(r.title);
      const catMeta = getFestivalCategoryMeta(cat);
      const sTime = r.time || inferFestivalTime(r.title) || '';
      const cTime = r.callTime || inferFestivalCallTime(r.title) || '30 mins before service';

      let sStart = 'TBD';
      let sEnd = 'TBD';
      if (sTime) {
        if (sTime.includes('-')) {
          const parts = sTime.split('-');
          sStart = parts[0].trim();
          sEnd = parts[1].trim();
        } else {
          sStart = sTime.trim();
          sEnd = sTime.trim();
        }
      }

      rolesMap.forEach(rm => {
        if (matches(r[rm.key])) {
          duties.push({
            date: r.date,
            service: `${catMeta.icon} ${r.title || 'Festival Service'}${sTime ? ` (${sTime})` : ''}`,
            serviceShort: r.title || 'Festival Service',
            serviceType: 'specialMeetings',
            category: cat,
            role: rm.label,
            rawRole: rm.key,
            assignedText: r[rm.key],
            callTime: cTime,
            prayerTime: '15 mins before',
            serviceStart: sStart,
            serviceEnd: sEnd,
            notes: r.notes || '',
            colorTag: catMeta.colorTag || 'tag-purple'
          });
        }
      });
    });
  }

  // Early Morning Prayer (if seasonal schedule is active)
  if (appState.morningPrayer && appState.morningPrayer.enabled && appState.morningPrayer.days) {
    const rolesMap = [
      { key: 'cam1', label: '🎥 1st Camera' },
      { key: 'cam2', label: '📹 2nd Camera' },
      { key: 'gimbal', label: '🎯 Gimbal Operator' },
      { key: 'liveEditor', label: '💻 Live in System' },
      { key: 'socialMedia', label: '📱 Social Media & Spot' }
    ];
    appState.morningPrayer.days.forEach(r => {
      rolesMap.forEach(rm => {
        if (matches(r[rm.key])) {
          duties.push({
            date: r.day,
            service: `🌅 ${appState.morningPrayer.title || 'Morning Prayer'}`,
            serviceShort: 'Morning Prayer',
            serviceType: 'morningPrayer',
            role: rm.label,
            rawRole: rm.key,
            assignedText: r[rm.key],
            callTime: '05:00 AM',
            prayerTime: '05:15 AM',
            serviceStart: '05:30 AM',
            serviceEnd: '06:30 AM',
            colorTag: 'tag-amber'
          });
        }
      });
    });
  }

  return duties;
}

// ================= FEATURE 1: 👤 MY SERVING SCHEDULE PERSONAL FILTER =================
window.currentVolunteerFilter = "";

function initVolunteerFilter() {
  const select = document.getElementById("volunteerFilterSelect");
  const actorSelect = document.getElementById("checklistActorSelect");
  if (!select && !actorSelect) return;

  const currentVal = window.currentVolunteerFilter || (select ? select.value : "") || (actorSelect ? actorSelect.value : "") || "";
  const memberNames = (appState.members || []).map(m => m.name).sort((a, b) => a.localeCompare(b));

  const buildOptions = (placeholder) => {
    let html = `<option value="">${placeholder}</option>`;
    memberNames.forEach(m => {
      const isSel = (m === currentVal) ? "selected" : "";
      html += `<option value="${escapeHtml(m)}" ${isSel}>${escapeHtml(m)}</option>`;
    });
    return html;
  };

  if (select) select.innerHTML = buildOptions("👤 Select Your Name...");
  if (actorSelect) actorSelect.innerHTML = buildOptions("Tap to pick your name...");
}

function onVolunteerFilterChange(name, shouldScroll = true) {
  window.currentVolunteerFilter = (name || "").trim();
  try {
    if (window.currentVolunteerFilter) {
      localStorage.setItem("FLAG_SAVED_VOLUNTEER_NAME", window.currentVolunteerFilter);
    } else {
      localStorage.removeItem("FLAG_SAVED_VOLUNTEER_NAME");
    }
  } catch (e) {}

  const clearBtn = document.getElementById("clearVolunteerFilterBtn");
  ["volunteerFilterSelect", "checklistActorSelect"].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value !== window.currentVolunteerFilter) {
      el.value = window.currentVolunteerFilter;
    }
  });

  const box = document.getElementById("volunteerPersonalBox");

  if (!window.currentVolunteerFilter) {
    if (clearBtn) clearBtn.style.display = "none";
    if (box) {
      box.style.display = "none";
      box.innerHTML = "";
    }
    renderPublicSchedule();
    renderOpenCoverBoard();
    return;
  }

  if (clearBtn) clearBtn.style.display = "inline-flex";
  const duties = getVolunteerDuties(window.currentVolunteerFilter);
  renderVolunteerPersonalBox(window.currentVolunteerFilter, duties);
  renderPublicSchedule();
  renderOpenCoverBoard();

  if (shouldScroll && box) {
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function clearVolunteerFilter() {
  const select = document.getElementById("volunteerFilterSelect");
  if (select) select.value = "";
  onVolunteerFilterChange("", false);
  showToast("Showing full church media schedule");
}

function initSavedVolunteer() {
  try {
    const savedVol = localStorage.getItem("FLAG_SAVED_VOLUNTEER_NAME");
    if (savedVol) {
      const select = document.getElementById("volunteerFilterSelect");
      if (select) {
        select.value = savedVol;
        onVolunteerFilterChange(savedVol, false);
      }
    }
  } catch (e) {}
}

function renderVolunteerPersonalBox(name, duties) {
  const box = document.getElementById("volunteerPersonalBox");
  if (!box) return;

  const memberObj = (appState.members || []).find(m => m.name.toLowerCase() === name.toLowerCase()) || { name, role: DEFAULT_MEMBER_ROLE };
  const dutyCount = duties.length;
  const awayInMonth = getMemberAwayDatesInMonth(memberObj.name);

  let dutiesHtml = "";
  if (dutyCount === 0) {
    dutiesHtml = `
      <div style="padding: 16px; text-align: center; color: #94a3b8; background: rgba(15, 23, 42, 0.5); border-radius: 8px; margin-top: 14px; border: 1px dashed rgba(255,255,255,0.15);">
        ℹ️ No duties scheduled for <strong>${escapeHtml(name)}</strong> in ${escapeHtml(appState.month || 'this month')}.
      </div>
    `;
  } else {
    dutiesHtml = `
      <div class="volunteer-duties-grid">
        ${duties.map((d, dIdx) => {
          const isAwayDuty = isMemberUnavailableOnDate(memberObj.name, d.date);
          return `
          <div class="volunteer-duty-item">
            <span class="duty-badge-time">⏰ Call: ${escapeHtml(d.callTime)} | Service: ${escapeHtml(d.serviceStart)}${d.serviceEnd && d.serviceEnd !== 'TBD' ? ' – ' + escapeHtml(d.serviceEnd) : ''}</span>
            <div class="duty-date">📅 ${escapeHtml(d.date)} ${isAwayDuty ? '<span class="roster-away-flag">🚫 Marked Away</span>' : ''}</div>
            <div class="duty-service">${escapeHtml(d.service)}</div>
            <div class="duty-role">${escapeHtml(d.role)}</div>
            ${d.assignedText && d.assignedText.includes('&') ? `<div style="font-size: 0.76rem; opacity: 0.85; margin-top: 2px;">👥 Paired with: <strong>${escapeHtml(d.assignedText)}</strong></div>` : ''}
            <div class="duty-actions-strip">
              <button type="button" class="btn-duty-action" onclick="addSingleDutyToGoogleCalendar('${escapeQuotes(d.date)}', '${escapeQuotes(d.service)}', '${escapeQuotes(d.role)}', '${escapeQuotes(d.callTime)}', '${escapeQuotes(d.prayerTime || '')}', '${escapeQuotes(memberObj.name)}', '${escapeQuotes(d.serviceEnd || '')}')" title="Open this shift directly in Google Calendar">
                📅 Google Cal
              </button>
              <button type="button" class="btn-duty-action" onclick="downloadSingleDutyIcs('${escapeQuotes(d.date)}', '${escapeQuotes(d.service)}', '${escapeQuotes(d.role)}', '${escapeQuotes(d.callTime)}', '${escapeQuotes(d.prayerTime || '')}', '${escapeQuotes(memberObj.name)}', '${escapeQuotes(d.serviceEnd || '')}')" title="Add shift to Phone Calendar & reminders">
                📱 Phone Cal
              </button>
              <button type="button" class="btn-duty-action btn-duty-swap" onclick="openSwapForSpecificDuty('${escapeQuotes(memberObj.name)}', ${dIdx})" title="Request a swap or report absence for this specific shift">
                🔄 Swap / Absent
              </button>
            </div>
          </div>
        `;
        }).join('')}
      </div>
    `;
  }

  const awayStripHtml = awayInMonth.length > 0 ? `
    <div class="personal-away-strip">
      <span>🚫 <strong>Marked Away (${awayInMonth.length}):</strong> ${awayInMonth.map(d => escapeHtml(d)).join(', ')}</span>
      <button type="button" class="btn-remember-switch" onclick="openAvailabilityModal('${escapeQuotes(memberObj.name)}')">Edit Away Dates</button>
    </div>
  ` : '';

  box.innerHTML = `
    <div class="volunteer-summary-header">
      <div class="volunteer-greeting">
        <div class="greeting-avatar">👤</div>
        <div>
          <h3 class="greeting-title">Hello, <span class="highlight-name">${escapeHtml(memberObj.name)}</span></h3>
          <p class="greeting-sub">
            <span class="header-tag tag-purple" style="font-size: 0.74rem; padding: 2px 7px;">${escapeHtml(memberObj.role || DEFAULT_MEMBER_ROLE)}</span>
            • 🎯 <strong>${dutyCount}</strong> ${dutyCount === 1 ? 'duty' : 'duties'} scheduled this month
          </p>
          <div class="device-remember-pill" title="Saved on your device for instant access">
            <span>📌 Saved on this device</span>
            <button type="button" class="btn-remember-switch" onclick="clearVolunteerFilter()">Switch</button>
          </div>
        </div>
      </div>
      <div class="volunteer-actions-row">
        <button class="btn btn-primary" style="padding: 8px 14px; font-size: 0.84rem; background: linear-gradient(135deg, #0284c7, #0369a1);" onclick="addVolunteerNextDutyToGoogleCalendar('${escapeQuotes(memberObj.name)}')">
          📅 Add to Google Cal
        </button>
        <button class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.84rem;" onclick="downloadVolunteerCalendar('${escapeQuotes(memberObj.name)}')">
          📱 Phone Calendar
        </button>
        <button class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.84rem; border-color: rgba(239, 68, 68, 0.4);" onclick="openAvailabilityModal('${escapeQuotes(memberObj.name)}')">
          🚫 My Away Dates
        </button>
        <button class="btn btn-warning" style="padding: 8px 14px; font-size: 0.84rem; background: linear-gradient(135deg, #d97706, #b45309);" onclick="openSwapRequestModal('${escapeQuotes(memberObj.name)}')">
          🔄 Request Swap / Absence
        </button>
        <button class="btn btn-whatsapp" style="padding: 8px 14px; font-size: 0.84rem;" onclick="shareMyScheduleWhatsApp('${escapeQuotes(memberObj.name)}')">
          💬 Share My Schedule
        </button>
      </div>
    </div>
    ${awayStripHtml}
    ${dutiesHtml}
  `;
  box.style.display = "block";
}

// ================= FEATURE 1: 📅 GOOGLE CALENDAR & PHONE (.ICS) EXPORTS =================

function parseClockMinutes(clockStr) {
  const tm = String(clockStr || "").match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!tm) return null;
  let hours = parseInt(tm[1], 10);
  const minutes = parseInt(tm[2], 10);
  const meridiem = (tm[3] || "").toUpperCase();
  if (meridiem === "PM" && hours < 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return (hours * 60) + minutes;
}

function inferServiceDurationHours(serviceHint, callTimeStr, serviceEndStr) {
  const startMins = parseClockMinutes(callTimeStr);
  const endMins = parseClockMinutes(serviceEndStr);
  if (startMins !== null && endMins !== null && endMins > startMins) {
    return Math.round(((endMins - startMins) / 60) * 100) / 100;
  }
  const s = String(serviceHint || "").toLowerCase();
  if (s.includes("saturday")) return SERVICE_DURATION_HOURS.saturdayPrep;
  if (s.includes("friday")) return SERVICE_DURATION_HOURS.fridayPrayer;
  if (s.includes("morning")) return SERVICE_DURATION_HOURS.morningPrayer;
  if (s.includes("special") || s.includes("🌟")) return SERVICE_DURATION_HOURS.specialMeetings;
  return SERVICE_DURATION_HOURS.firstService;
}

// Robust UTC Parser for Indian Standard Time (IST, UTC+05:30)
function parseDutyUtc(dateStr, timeStr, serviceEndStr = "", serviceHint = "") {
  const months = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };
  const weekdayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();

  const rawDate = (dateStr || "").trim();
  const weekdayIdx = weekdayNames.indexOf(rawDate.toLowerCase());
  const parts = rawDate.split(/[\s-]+/);
  if (weekdayIdx !== -1) {
    const diff = (weekdayIdx - now.getDay() + 7) % 7;
    const nextMatch = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
    year = nextMatch.getFullYear();
    month = nextMatch.getMonth();
    day = nextMatch.getDate();
  } else if (parts.length >= 3) {
    if (parts[0].length === 4) {
      // YYYY-MM-DD
      year = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      day = parseInt(parts[2], 10);
    } else {
      // DD Mon YYYY
      day = parseInt(parts[0], 10);
      const mKey = parts[1].slice(0, 3).toLowerCase();
      if (months[mKey] !== undefined) month = months[mKey];
      year = parseInt(parts[2], 10);
    }
  }

  let hours = 18;
  let minutes = 30;
  const parsedStart = parseClockMinutes(timeStr);
  if (parsedStart !== null) {
    hours = Math.floor(parsedStart / 60);
    minutes = parsedStart % 60;
  }

  const durationHours = inferServiceDurationHours(serviceHint, timeStr, serviceEndStr);

  // Offset: IST is UTC+05:30, so UTC time = IST time - 5 hours 30 mins
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const utcMs = Date.UTC(year, month, day, hours, minutes, 0) - istOffsetMs;
  const startUtc = new Date(utcMs);
  const endUtc = new Date(utcMs + (durationHours * 60 * 60 * 1000));

  const pad = n => String(n).padStart(2, '0');
  const formatUtc = (d) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;

  return {
    startUtc: formatUtc(startUtc),
    endUtc: formatUtc(endUtc),
    startDate: startUtc,
    endDate: endUtc,
    durationHours
  };
}

function buildGoogleCalendarUrl(date, service, role, callTime, prayerTime, volunteerName, serviceEnd = "") {
  const utc = parseDutyUtc(date, callTime, serviceEnd, service);
  const title = `FLAG Media: ${role} (${service})`;
  const location = "Full Life Centre AG Church, Indoor Media Desk";
  const details = `Full Life Centre AG Church - Indoor Media Ministry\n\n👤 Volunteer: ${volunteerName || 'Media Team'}\n⛪ Service: ${service}\n🎬 Scheduled Role: ${role}\n⏰ Call Time: ${callTime}${serviceEnd && serviceEnd !== 'TBD' ? `\n🏁 Service Ends: ${serviceEnd}` : ''}\n🙏 Team Prayer: ${prayerTime || '15 mins before call'}\n🔔 Reminder Tip: Set a 12-hour (Saturday eve) or 1-hour reminder in Calendar!\n📍 Location: Indoor Media Desk\n\n"Whatever you do, work at it with all your heart as for the Lord." - Colossians 3:23 🙏✨`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${utc.startUtc}/${utc.endUtc}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
}

function openCalendarUrl(url) {
  const win = window.open(url, '_blank', 'noopener');
  if (!win || win.closed) {
    window.location.href = url;
  }
}

// 1-Click Google Calendar Direct URL Generator
function addSingleDutyToGoogleCalendar(date, service, role, callTime, prayerTime, volunteerName, serviceEnd = "") {
  const gCalUrl = buildGoogleCalendarUrl(date, service, role, callTime, prayerTime, volunteerName, serviceEnd);
  openCalendarUrl(gCalUrl);
  showToast(`📅 Opening Calendar for ${service} on ${date}...`);
}

function addVolunteerNextDutyToGoogleCalendar(name) {
  const volunteer = name || window.currentVolunteerFilter;
  if (!volunteer) {
    showToast("Please select your name first.");
    return;
  }
  const duties = getVolunteerDuties(volunteer);
  if (!duties || duties.length === 0) {
    showToast(`No duties scheduled for ${volunteer}.`);
    return;
  }
  const nextDuty = duties[0];
  addSingleDutyToGoogleCalendar(
    nextDuty.date,
    nextDuty.service,
    nextDuty.role,
    nextDuty.callTime,
    nextDuty.prayerTime,
    volunteer,
    nextDuty.serviceEnd || ""
  );
  if (duties.length > 1) {
    showToast(`📅 Opening duty 1 of ${duties.length} in Calendar. Tap "Phone Calendar" for all shifts!`);
  }
}

function formatIcsStampNow() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${pad(now.getUTCFullYear())}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
}

function buildDutyVeventBlock(duty, nowStamp, idx = 0) {
  const utc = parseDutyUtc(duty.date, duty.callTime, duty.serviceEnd || "", duty.service || "");
  const uid = `flag-media-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 8)}@fulllifecentre.church`;
  const serviceLabel = duty.serviceShort || duty.service;
  const summary = `FLAG Media: ${duty.role} (${serviceLabel})`;
  const description = `Full Life Centre AG Church - Indoor Media Duty\\nService: ${duty.service}\\nRole: ${duty.role}\\nCall Time: ${duty.callTime}\\nTeam Prayer: ${duty.prayerTime || '15 mins before call'}\\nAssigned: ${duty.assignedText || duty.volunteerName || 'Media Team'}\\n\\nPlease arrive promptly. God bless your ministry!`;

  return [
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${nowStamp}`,
    `DTSTART:${utc.startUtc}`,
    `DTEND:${utc.endUtc}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    'LOCATION:Full Life Centre AG Church, Indoor Media Desk',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:FLAG Media Saturday 12hr Reminder: Duty Tomorrow Morning',
    'TRIGGER:-PT12H',
    'END:VALARM',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:FLAG Media Call Time in 60 Mins',
    'TRIGGER:-PT60M',
    'END:VALARM',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:FLAG Media Call Time in 15 Mins',
    'TRIGGER:-PT15M',
    'END:VALARM',
    'END:VEVENT'
  ].join('\r\n');
}

function buildIcsCalendarString(calName, dutiesList) {
  const nowStamp = formatIcsStampNow();
  const vevents = (dutiesList || []).map((d, idx) => buildDutyVeventBlock(d, nowStamp, idx));
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Full Life Centre AG Church//Indoor Media Portal//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${calName}`,
    'X-WR-TIMEZONE:Asia/Kolkata',
    ...vevents,
    'END:VCALENDAR'
  ].join('\r\n');
}

function triggerIcsFileDownload(icsBody, filename) {
  const blob = new Blob([icsBody], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function isIosSafariDirectCalendarSupported() {
  return isIosDevice() && !isIosNonSafariBrowser() && !isInAppBrowser();
}

function openIcsDataUriForIos(icsBody) {
  window.location.href = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsBody)}`;
}

function canShareIcsFiles(filename) {
  try {
    if (!navigator.share || !navigator.canShare || typeof File === 'undefined') return false;
    const probe = new File(['BEGIN:VCALENDAR\r\nEND:VCALENDAR'], filename || 'duty.ics', { type: 'text/calendar' });
    return navigator.canShare({ files: [probe] });
  } catch (e) {
    return false;
  }
}

async function shareIcsViaNativeSheet(icsBody, filename, titleText) {
  try {
    const file = new File([icsBody], filename, { type: 'text/calendar' });
    await navigator.share({
      files: [file],
      title: titleText || 'FLAG Media Duty Reminder',
      text: 'Open with your phone Calendar app to save duty reminders.'
    });
    return true;
  } catch (err) {
    if (err && err.name === 'AbortError') return true; // user cancelled share sheet cleanly
    return false;
  }
}

window.__activeMobileCalendarContext = null;

function openMobileCalendarModal(volunteerName, duties) {
  const modal = document.getElementById('mobileCalendarModal');
  const noteEl = document.getElementById('mobileCalendarNote');
  const listEl = document.getElementById('mobileCalendarDutiesList');
  const shareBtn = document.getElementById('mobileCalShareBtn');
  if (!modal || !listEl) return;

  const safeName = (volunteerName || 'Duty').replace(/[^a-zA-Z0-9]/g, '_');
  const safeMonth = (appState.month || 'Schedule').replace(/[^a-zA-Z0-9]/g, '_');
  const filename = duties.length === 1
    ? `FLAG_Media_${(duties[0].date || 'Duty').replace(/[^a-zA-Z0-9]/g, '_')}.ics`
    : `FLAG_Media_${safeName}_${safeMonth}.ics`;

  const normalizedDuties = duties.map(d => ({
    ...d,
    volunteerName: volunteerName || d.volunteerName || d.assignedText || 'Media Team'
  }));
  const icsBody = buildIcsCalendarString(`FLAG Media - ${volunteerName || 'Duty'}`, normalizedDuties);
  window.__activeMobileCalendarContext = { volunteerName, duties: normalizedDuties, icsBody, filename };

  if (noteEl) {
    if (isIosDevice() && !isIosSafariDirectCalendarSupported()) {
      noteEl.innerHTML = '🍎 <strong>iPhone Tip:</strong> Tap <strong>Open in Calendar</strong> on each shift below, or open this portal in <strong>Safari</strong> to add all shifts into Apple Calendar at once.';
    } else {
      noteEl.innerHTML = '📱 <strong>Tap any shift below</strong> to open it straight inside your phone’s Calendar app & set your reminder — no messy `.ics` download needed!';
    }
  }

  if (shareBtn) {
    shareBtn.style.display = canShareIcsFiles(filename) ? 'inline-flex' : 'none';
  }

  listEl.innerHTML = normalizedDuties.map((d, idx) => `
    <div class="mobile-cal-item">
      <div class="mobile-cal-meta">
        <div class="mobile-cal-date">📅 ${escapeHtml(d.date)} • ${escapeHtml(d.serviceShort || d.service)}</div>
        <div class="mobile-cal-title">${escapeHtml(d.role)}</div>
        <div class="mobile-cal-time">⏰ Call: ${escapeHtml(d.callTime)}${d.serviceEnd && d.serviceEnd !== 'TBD' ? ` (Ends ${escapeHtml(d.serviceEnd)})` : ''}</div>
      </div>
      <button type="button" class="btn btn-primary btn-sm" onclick="openMobileCalendarDutyAtIndex(${idx})">
        📅 Open in Calendar
      </button>
    </div>
  `).join('');

  modal.style.display = 'flex';
}

function openMobileCalendarDutyAtIndex(idx) {
  const ctx = window.__activeMobileCalendarContext;
  if (!ctx || !ctx.duties || !ctx.duties[idx]) return;
  const d = ctx.duties[idx];
  addSingleDutyToGoogleCalendar(d.date, d.service, d.role, d.callTime, d.prayerTime || '', ctx.volunteerName || d.volunteerName, d.serviceEnd || '');
}

async function shareCurrentVolunteerIcs() {
  const ctx = window.__activeMobileCalendarContext;
  if (!ctx) return;
  const shared = await shareIcsViaNativeSheet(ctx.icsBody, ctx.filename, `FLAG Media Schedule - ${ctx.volunteerName || 'Duty'}`);
  if (!shared) {
    triggerIcsFileDownload(ctx.icsBody, ctx.filename);
    showToast('📅 Calendar file saved! Tap it to import into Calendar.');
  }
}

function downloadCurrentVolunteerIcsFile() {
  const ctx = window.__activeMobileCalendarContext;
  if (!ctx) return;
  triggerIcsFileDownload(ctx.icsBody, ctx.filename);
  showToast('📅 .ics file saved! Open the file from Downloads if your phone supports importing .ics.');
}

function closeMobileCalendarModal() {
  const modal = document.getElementById('mobileCalendarModal');
  if (modal) modal.style.display = 'none';
}

// Single-Duty Calendar Handler: opens Calendar app cleanly on mobile, downloads .ics on desktop
function downloadSingleDutyIcs(date, service, role, callTime, prayerTime, volunteerName, serviceEnd = "") {
  const dutyObj = {
    date,
    service,
    serviceShort: service,
    role,
    callTime,
    prayerTime,
    volunteerName,
    assignedText: volunteerName,
    serviceEnd
  };
  const icsBody = buildIcsCalendarString(`FLAG Media - ${volunteerName || 'Duty'}`, [dutyObj]);
  const safeDate = (date || 'Duty').replace(/[^a-zA-Z0-9]/g, '_');

  if (isIosSafariDirectCalendarSupported()) {
    openIcsDataUriForIos(icsBody);
    showToast(`📅 Opening Apple Calendar for ${date}...`);
    return;
  }

  if (isMobileInstallEligible()) {
    openMobileCalendarModal(volunteerName, [dutyObj]);
    return;
  }

  triggerIcsFileDownload(icsBody, `FLAG_Media_${safeDate}.ics`);
  showToast(`📅 Calendar event downloaded for ${date}!`);
}

// Volunteer Month Calendar Handler: opens mobile Calendar chooser/iOS Calendar on phones, downloads .ics on desktop
function downloadVolunteerCalendar(name) {
  const volunteer = name || window.currentVolunteerFilter;
  if (!volunteer) {
    showToast("Please select a volunteer first.");
    return;
  }
  const duties = getVolunteerDuties(volunteer);
  if (!duties || duties.length === 0) {
    showToast(`No duties found for ${volunteer} to export.`);
    return;
  }

  const icsBody = buildIcsCalendarString(`FLAG Media Schedule - ${volunteer}`, duties);
  const safeName = volunteer.replace(/[^a-zA-Z0-9]/g, '_');
  const safeMonth = (appState.month || 'Schedule').replace(/[^a-zA-Z0-9]/g, '_');

  if (isIosSafariDirectCalendarSupported()) {
    openIcsDataUriForIos(icsBody);
    showToast(`📅 Opening Apple Calendar with all ${duties.length} duties...`);
    return;
  }

  if (isMobileInstallEligible()) {
    openMobileCalendarModal(volunteer, duties);
    return;
  }

  triggerIcsFileDownload(icsBody, `FLAG_Media_${safeName}_${safeMonth}.ics`);
  showToast(`📅 Calendar exported for ${volunteer}! Open file to import into phone calendar.`);
}

function shareMyScheduleWhatsApp(name) {
  const volunteer = name || window.currentVolunteerFilter;
  if (!volunteer) return;
  const duties = getVolunteerDuties(volunteer);
  if (!duties || duties.length === 0) {
    showToast(`No duties found for ${volunteer}.`);
    return;
  }

  let text = `*🕊️ MY MEDIA SERVING SCHEDULE - FLAG CHURCH*
━━━━━━━━━━━━━━━━━━━━━
👤 *Volunteer:* ${volunteer}
📅 *Month:* ${appState.month || 'Upcoming'}
🎯 *Total Duties:* ${duties.length}

*SCHEDULED SHIFTS:*`;

  duties.forEach((d, idx) => {
    text += `\n\n${idx + 1}. 📅 *${d.date}* - *${d.serviceShort}*\n   🎬 Role: ${d.role}\n   ⏰ Call Time: ${d.callTime}`;
  });

  text += `\n\n📍 *Location:* Indoor Media Desk\n_"Whatever you do, work at it with all your heart as for the Lord." - Col 3:23_ 🙏✨`;

  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 Schedule copied! Opening WhatsApp...`);
  }).catch(() => {
    copyFallback(text);
  });

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

// ================= FEATURE 2: 🔁 VOLUNTEER SWAP REQUEST / REPORT ABSENCE =================
let currentSwapVolunteer = "";

function openSwapRequestModal(name, preselectDutyIndex) {
  // Populate volunteer select dropdown
  const volSelect = document.getElementById("swapVolunteerSelect");
  const members = appState.members || [];
  const selectedName = name || window.currentVolunteerFilter || (members[0] ? members[0].name : "");

  if (volSelect) {
    volSelect.innerHTML = members.map(m => `
      <option value="${escapeHtml(m.name)}" ${m.name.toLowerCase() === (selectedName || '').toLowerCase() ? 'selected' : ''}>
        👤 ${escapeHtml(m.name)} (${escapeHtml(m.role || 'Crew')})
      </option>
    `).join('');
  }

  currentSwapVolunteer = selectedName || (members[0] ? members[0].name : "");
  populateSwapDutiesDropdown(currentSwapVolunteer, preselectDutyIndex);

  const reasonInput = document.getElementById("swapReasonInput");
  if (reasonInput) reasonInput.value = "";

  const repInput = document.getElementById("swapReplacementInput");
  if (repInput) repInput.value = "";

  const typeSelect = document.getElementById("swapTypeSelect");
  if (typeSelect) typeSelect.value = "swap";

  updateSwapPreview();

  const modal = document.getElementById("swapRequestModal");
  if (modal) modal.style.display = "flex";
}

function openSwapForSpecificDuty(volunteerName, dutyIndex) {
  openSwapRequestModal(volunteerName, dutyIndex);
}

function onSwapVolunteerSelectChange(volunteerName) {
  currentSwapVolunteer = volunteerName;
  populateSwapDutiesDropdown(volunteerName);
  updateSwapPreview();
}

function populateSwapDutiesDropdown(volunteerName, preselectIdx) {
  const select = document.getElementById("swapDutySelect");
  if (!select) return;
  const duties = getVolunteerDuties(volunteerName);
  select.innerHTML = "";
  if (duties.length === 0) {
    select.innerHTML = `<option value="general">No specific duty scheduled (General Request)</option>`;
  } else {
    duties.forEach((d, idx) => {
      const isSelected = (preselectIdx !== undefined && preselectIdx === idx) ? "selected" : "";
      select.innerHTML += `<option value="${idx}" ${isSelected}>📅 ${d.date} - ${d.serviceShort} (${d.role})</option>`;
    });
  }
}

function closeSwapRequestModal() {
  const modal = document.getElementById("swapRequestModal");
  if (modal) modal.style.display = "none";
}

function updateSwapPreview() {
  const duties = getVolunteerDuties(currentSwapVolunteer);
  const select = document.getElementById("swapDutySelect");
  const selectedIdx = select ? parseInt(select.value, 10) : 0;
  const duty = (!isNaN(selectedIdx) && duties[selectedIdx]) ? duties[selectedIdx] : null;

  const typeSelect = document.getElementById("swapTypeSelect");
  const reqType = typeSelect ? typeSelect.value : "swap";
  const isAbsence = reqType === "absence";

  const reasonInput = document.getElementById("swapReasonInput");
  const reason = (reasonInput && reasonInput.value.trim()) 
    ? reasonInput.value.trim() 
    : (isAbsence ? "Emergency personal commitment / unwell" : "Personal schedule clash / need shift cover");

  const repInput = document.getElementById("swapReplacementInput");
  const replacement = repInput ? repInput.value.trim() : "";

  let dutyText = "";
  if (duty) {
    dutyText = `📅 *Date:* ${duty.date}\n⛪ *Service:* ${duty.service}\n🎬 *Scheduled Role:* ${duty.role}\n⏰ *Call Time:* ${duty.callTime}`;
  } else {
    dutyText = `📅 *Month:* ${appState.month || 'Current Month'}\n⛪ *Service:* Media Team Duty`;
  }

  let repLine = "";
  if (replacement) {
    repLine = `\n🤝 *Covered / Swapped With:* ${replacement}`;
  } else if (!isAbsence) {
    repLine = `\n🤝 *Covered By:* Looking for a volunteer to cover or trade shifts`;
  }

  let titleLine = isAbsence 
    ? `*🚫 FLAG MEDIA TEAM - REPORT ABSENCE NOTICE*` 
    : `*🔄 FLAG MEDIA TEAM - VOLUNTEER SWAP REQUEST*`;

  let openingLine = isAbsence
    ? `Shalom Media Team! 👋\n\nI am reporting that I will unfortunately be unable to attend my scheduled media shift due to an emergency:`
    : `Shalom Media Team! 👋\n\nI need a volunteer to kindly swap or cover my scheduled media duty:`;

  const msg = `${titleLine}
━━━━━━━━━━━━━━━━━━━━━
${openingLine}

👤 *Volunteer:* ${currentSwapVolunteer}
${dutyText}
📝 *Reason:* ${reason}${repLine}

${isAbsence ? 'Please pray for me and update the schedule roster accordingly.' : 'Is anyone available to cover or trade shifts with me? Please reply directly.'}

Thank you and God bless! 🙏🕊️
_"Whatever you do, work at it with all your heart as for the Lord." - Col 3:23_`;

  const preview = document.getElementById("swapMessagePreview");
  if (preview) preview.textContent = msg;
}

function copySwapMessage() {
  const preview = document.getElementById("swapMessagePreview");
  if (!preview) return;
  navigator.clipboard.writeText(preview.textContent).then(() => {
    showToast("📋 Swap request copied! Paste in Media WhatsApp group.");
  }).catch(() => {
    copyFallback(preview.textContent);
    showToast("📋 Swap request copied!");
  });
}

function sendSwapToWhatsApp() {
  const preview = document.getElementById("swapMessagePreview");
  if (!preview) return;
  const encoded = encodeURIComponent(preview.textContent);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

function sendSwapToLeaderWhatsApp() {
  const preview = document.getElementById("swapMessagePreview");
  if (!preview) return;
  openWhatsAppToLeader(preview.textContent);
}

/**
 * Posts the active Swap / Cover request to the portal's live Open Cover Board
 * and syncs only `swapRequests` to Firebase RTDB.
 */
function postSwapRequestToPortal() {
  const volunteer = (currentSwapVolunteer || "").trim();
  if (!volunteer) {
    alert("Please select your volunteer name first.");
    return;
  }

  const duties = getVolunteerDuties(volunteer);
  const select = document.getElementById("swapDutySelect");
  const selectedIdx = select ? parseInt(select.value, 10) : 0;
  const duty = (!isNaN(selectedIdx) && duties[selectedIdx]) ? duties[selectedIdx] : null;

  const typeSelect = document.getElementById("swapTypeSelect");
  const reqType = typeSelect ? typeSelect.value : "swap";
  const isAbsence = reqType === "absence";

  const reasonInput = document.getElementById("swapReasonInput");
  const reason = (reasonInput && reasonInput.value.trim())
    ? reasonInput.value.trim()
    : (isAbsence ? "Emergency / unable to attend" : "Schedule clash / need shift cover");

  const repInput = document.getElementById("swapReplacementInput");
  const replacement = repInput ? repInput.value.trim() : "";

  const newReq = {
    id: "sw-" + Date.now(),
    volunteer,
    type: reqType,
    date: duty ? duty.date : (appState.month || "Upcoming"),
    service: duty ? duty.service : "Media Team Duty",
    serviceShort: duty ? duty.serviceShort : "General Duty",
    serviceType: duty ? (duty.serviceType || "") : "",
    rawRole: duty ? (duty.rawRole || "") : "",
    roleLabel: duty ? duty.role : "Any Media Role",
    callTime: duty ? (duty.callTime || "") : "",
    reason,
    status: replacement ? "claimed" : "open",
    coveredBy: replacement,
    createdAt: formatChecklistTimestamp(),
    claimedAt: replacement ? formatChecklistTimestamp() : ""
  };

  if (!Array.isArray(appState.swapRequests)) appState.swapRequests = [];
  appState.swapRequests.unshift(newReq);
  if (appState.swapRequests.length > 25) {
    appState.swapRequests = appState.swapRequests.slice(0, 25);
  }

  saveState(false, { swapRequests: appState.swapRequests });
  renderOpenCoverBoard();
  closeSwapRequestModal();
  showToast(replacement
    ? `📌 Posted cover notice (${replacement} covering) & synced live!`
    : `📌 Posted to Open Cover Board! Team can claim it live.`);
}

function replaceVolunteerInSlot(slotValue, oldName, newName) {
  if (!slotValue) return newName;
  const parts = String(slotValue).split(/\s*&\s*/).map(p => p.trim()).filter(Boolean);
  let replaced = false;
  const updated = parts.map(p => {
    if (!replaced && isAliasMatch(p, oldName)) {
      replaced = true;
      return newName;
    }
    return p;
  });
  return replaced ? updated.join(" & ") : newName;
}

function claimCoverRequest(reqId) {
  const req = (appState.swapRequests || []).find(r => r.id === reqId);
  if (!req) return;

  const sel = document.getElementById(`claimSelect_${reqId}`);
  let claimer = (sel && sel.value) ? sel.value.trim() : (window.currentVolunteerFilter || "").trim();
  if (!claimer) {
    showToast("👤 Please pick your name in the Cover dropdown first.");
    if (sel) sel.focus();
    return;
  }
  if (isAliasMatch(claimer, req.volunteer)) {
    showToast("⚠️ Please choose a teammate to cover this shift.");
    return;
  }

  req.status = "claimed";
  req.coveredBy = claimer;
  req.claimedAt = formatChecklistTimestamp();

  saveState(false, { swapRequests: appState.swapRequests });
  renderOpenCoverBoard();
  showToast(`🤝 Thank you ${claimer}! Marked as covering ${req.volunteer}'s shift.`);
}

function notifyLeaderClaimWhatsApp(reqId) {
  const req = (appState.swapRequests || []).find(r => r.id === reqId);
  if (!req) return;

  const msg = `*✅ FLAG MEDIA — COVER CONFIRMED*\n━━━━━━━━━━━━━━━━━━━━━\n` +
    `📅 *Date:* ${req.date}\n` +
    `⛪ *Service:* ${req.service}\n` +
    `🎬 *Role:* ${req.roleLabel}\n` +
    `👤 *Original Volunteer:* ${req.volunteer}\n` +
    `🤝 *Covered By:* *${req.coveredBy || 'Volunteer'}*\n\n` +
    `Please confirm and apply this cover to the active schedule roster. 🙌`;

  openWhatsAppToLeader(msg);
}

function applyCoverRequestToRoster(reqId) {
  if (!isAdminLoggedIn) {
    openAdminPinModal();
    return;
  }
  const req = (appState.swapRequests || []).find(r => r.id === reqId);
  if (!req || !req.coveredBy || !req.serviceType || !req.rawRole) {
    showToast("⚠️ This general request cannot be auto-applied. Update manually in Admin.");
    return;
  }

  let updated = false;
  if (req.serviceType === "morningPrayer" && appState.morningPrayer && Array.isArray(appState.morningPrayer.days)) {
    const dayRow = appState.morningPrayer.days.find(d => d.day === req.date);
    if (dayRow && req.rawRole in dayRow) {
      dayRow[req.rawRole] = replaceVolunteerInSlot(dayRow[req.rawRole], req.volunteer, req.coveredBy);
      updated = true;
    }
  } else if (Array.isArray(appState[req.serviceType])) {
    const row = appState[req.serviceType].find(r => r.date === req.date);
    if (row && req.rawRole in row) {
      row[req.rawRole] = replaceVolunteerInSlot(row[req.rawRole], req.volunteer, req.coveredBy);
      updated = true;
    }
  }

  if (!updated) {
    showToast("⚠️ Shift row not found in active month. Please update manually in Admin.");
    return;
  }

  appState.swapRequests = (appState.swapRequests || []).filter(r => r.id !== reqId);
  saveState();
  renderAll();
  showToast(`✅ Applied cover: ${req.coveredBy} replaced ${req.volunteer} (${req.serviceShort} on ${req.date})!`);
}

function dismissCoverRequest(reqId) {
  appState.swapRequests = (appState.swapRequests || []).filter(r => r.id !== reqId);
  saveState(false, { swapRequests: appState.swapRequests });
  renderOpenCoverBoard();
  showToast("🗑️ Cover request removed from board.");
}

/**
 * Renders the live Open Shift Cover Board above the schedule when open/claimed requests exist.
 */
function renderOpenCoverBoard() {
  const card = document.getElementById("openCoverBoardCard");
  if (!card) return;

  const activeReqs = (appState.swapRequests || []).filter(r => r && (r.status === "open" || r.status === "claimed"));
  if (activeReqs.length === 0) {
    card.style.display = "none";
    card.innerHTML = "";
    return;
  }

  const openCount = activeReqs.filter(r => r.status === "open").length;
  const memberNames = (appState.members || []).map(m => m.name).sort((a, b) => a.localeCompare(b));

  const itemsHtml = activeReqs.map(req => {
    const isClaimed = req.status === "claimed";
    const isAbsence = req.type === "absence";
    const badgeClass = isClaimed ? "cover-status-claimed" : (isAbsence ? "cover-status-absence" : "cover-status-open");
    const badgeLabel = isClaimed
      ? `🟢 COVERED BY ${escapeHtml(req.coveredBy)}`
      : (isAbsence ? "🔴 ABSENCE REPORTED" : "🟠 NEEDS COVER");

    const canManage = isAdminLoggedIn || isAliasMatch(req.volunteer, window.currentVolunteerFilter);

    let actionArea = "";
    if (!isClaimed) {
      const optionsHtml = [`<option value="">Pick your name...</option>`]
        .concat(
          memberNames
            .filter(m => !isAliasMatch(m, req.volunteer))
            .map(m => {
              const sel = (window.currentVolunteerFilter && isAliasMatch(m, window.currentVolunteerFilter)) ? "selected" : "";
              return `<option value="${escapeHtml(m)}" ${sel}>${escapeHtml(m)}</option>`;
            })
        ).join("");

      actionArea = `
        <div class="cover-req-actions">
          <select id="claimSelect_${escapeHtml(req.id)}" class="role-select cover-claim-select" title="Select your name to cover this shift">
            ${optionsHtml}
          </select>
          <button type="button" class="btn btn-primary btn-sm" onclick="claimCoverRequest('${escapeQuotes(req.id)}')">
            🙋 I Can Cover
          </button>
          ${canManage ? `<button type="button" class="btn btn-secondary btn-sm" onclick="dismissCoverRequest('${escapeQuotes(req.id)}')" title="Cancel this request">✕ Cancel</button>` : ''}
        </div>
      `;
    } else {
      const canAutoApply = isAdminLoggedIn && req.serviceType && req.rawRole;
      actionArea = `
        <div class="cover-req-actions">
          <button type="button" class="btn btn-whatsapp btn-sm" onclick="notifyLeaderClaimWhatsApp('${escapeQuotes(req.id)}')" title="Send confirmation to Leader ${escapeQuotes(getLeaderName())}">
            💬 Notify Leader
          </button>
          ${canAutoApply ? `<button type="button" class="btn btn-primary btn-sm" onclick="applyCoverRequestToRoster('${escapeQuotes(req.id)}')" title="Replace ${escapeQuotes(req.volunteer)} with ${escapeQuotes(req.coveredBy)} in the active roster">✅ Apply to Roster</button>` : ''}
          ${canManage ? `<button type="button" class="btn btn-secondary btn-sm" onclick="dismissCoverRequest('${escapeQuotes(req.id)}')" title="Remove resolved notice">🗑️ Dismiss</button>` : ''}
        </div>
      `;
    }

    return `
      <div class="cover-request-item ${isClaimed ? 'is-claimed' : ''}">
        <div class="cover-req-top">
          <span class="cover-status-pill ${badgeClass}">${badgeLabel}</span>
          <span class="cover-req-time">Posted ${escapeHtml(req.createdAt || 'Recently')}</span>
        </div>
        <div class="cover-req-summary">
          <strong>${escapeHtml(req.volunteer)}</strong> needs cover for
          <span class="cover-highlight">${escapeHtml(req.date)} • ${escapeHtml(req.serviceShort)} (${escapeHtml(req.roleLabel)})</span>
        </div>
        <div class="cover-req-reason">📝 ${escapeHtml(req.reason || 'Schedule cover requested')}</div>
        ${isClaimed ? `<div class="cover-req-claimed-note">🤝 <strong>${escapeHtml(req.coveredBy)}</strong> volunteered to cover${req.claimedAt ? ` • ${escapeHtml(req.claimedAt)}` : ''}.</div>` : ''}
        ${actionArea}
      </div>
    `;
  }).join("");

  card.innerHTML = `
    <div class="cover-board-header">
      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <span class="cover-board-icon">🔁</span>
        <div>
          <h3 class="cover-board-title">Live Shift Cover Requests (${activeReqs.length})</h3>
          <p class="cover-board-sub">
            ${openCount > 0 ? `${openCount} shift${openCount > 1 ? 's' : ''} currently need volunteer cover.` : 'All posted cover requests have a volunteer! Waiting leader confirmation.'}
          </p>
        </div>
      </div>
      <button type="button" class="btn btn-secondary btn-sm" onclick="openSwapRequestModal()">
        + Request Cover
      </button>
    </div>
    <div class="cover-board-list">
      ${itemsHtml}
    </div>
  `;
  card.style.display = "block";
}

// ================= FEATURE 3: 📲 INDIVIDUAL WHATSAPP DIRECT REMINDER =================
let currentReminderVolunteer = "";

function openDirectReminderModal(name) {
  if (!name) return;
  currentReminderVolunteer = name;

  const nameEl = document.getElementById("reminderVolunteerName");
  if (nameEl) nameEl.textContent = name;

  const select = document.getElementById("reminderDutySelect");
  const duties = getVolunteerDuties(name);
  if (select) {
    select.innerHTML = "";
    if (duties.length === 0) {
      select.innerHTML = `<option value="general">No specific shift (General Media Check-in)</option>`;
    } else {
      duties.forEach((d, idx) => {
        select.innerHTML += `<option value="${idx}">${d.date} - ${d.serviceShort} (${d.role})</option>`;
      });
    }
  }

  // Pre-fill phone from member profile if available
  const memberObj = (appState.members || []).find(m => 
    m.name.toLowerCase() === name.toLowerCase() ||
    m.name.toLowerCase().includes(name.toLowerCase()) ||
    name.toLowerCase().includes(m.name.toLowerCase())
  );

  const phoneInput = document.getElementById("reminderPhoneInput");
  if (phoneInput) {
    phoneInput.value = (memberObj && memberObj.phone) ? memberObj.phone : "";
  }

  updateDirectReminderPreview();

  const modal = document.getElementById("directReminderModal");
  if (modal) modal.style.display = "flex";
}

function closeDirectReminderModal() {
  const modal = document.getElementById("directReminderModal");
  if (modal) modal.style.display = "none";
}

function updateDirectReminderPreview() {
  const duties = getVolunteerDuties(currentReminderVolunteer);
  const select = document.getElementById("reminderDutySelect");
  const selectedIdx = select ? parseInt(select.value, 10) : 0;
  const duty = (!isNaN(selectedIdx) && duties[selectedIdx]) ? duties[selectedIdx] : null;

  let dutyText = "";
  if (duty) {
    dutyText = `📅 *Date:* ${duty.date}
⛪ *Service:* ${duty.service}
🎬 *Assigned Role:* ${duty.role}
⏰ *Call Time:* ${duty.callTime}
🙏 *Team Prayer:* ${duty.prayerTime || '15 mins before call time'}`;
  } else {
    dutyText = `📅 *Schedule:* ${appState.month || 'Upcoming Services'}
⛪ *Ministry:* Indoor Media Team`;
  }

  const msg = `*🕊️ FULL LIFE CENTRE AG CHURCH - MEDIA MINISTRY*
━━━━━━━━━━━━━━━━━━━━━
Dear *${currentReminderVolunteer}*, 

Grace and peace to you! This is a gentle reminder regarding your upcoming indoor media ministry duty:

${dutyText}
📍 *Location:* Main Sanctuary • Indoor Media Desk

Kindly report on time for equipment briefing, lens checks, and team prayer. If you need any assistance or have an emergency, please notify the media leader in advance.

_"Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23_

God bless your faithful service! 🙏✨`;

  const preview = document.getElementById("directReminderPreview");
  if (preview) preview.textContent = msg;
}

function copyDirectReminderMessage() {
  const preview = document.getElementById("directReminderPreview");
  if (!preview) return;
  navigator.clipboard.writeText(preview.textContent).then(() => {
    showToast(`📋 Reminder message for ${currentReminderVolunteer} copied!`);
  }).catch(() => {
    copyFallback(preview.textContent);
    showToast("📋 Reminder copied!");
  });
}

function sendDirectReminderWhatsApp() {
  const preview = document.getElementById("directReminderPreview");
  if (!preview) return;
  const phoneInput = document.getElementById("reminderPhoneInput");
  let phone = phoneInput ? phoneInput.value.replace(/[^0-9]/g, "") : "";

  // If 10-digit Indian phone number without country code, prepend 91 for WhatsApp
  if (phone.length === 10) {
    phone = "91" + phone;
  }

  const encoded = encodeURIComponent(preview.textContent);
  if (phone) {
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  } else {
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  }
}

// ================= FEATURE 4: 📱 MOBILE APP EXPERIENCE (PWA) =================
function showPwaUpdateBanner() {
  const banner = document.getElementById("pwaUpdateBanner");
  if (banner) banner.style.display = "flex";
}

function applyPwaUpdateNow() {
  window.location.reload();
}

// Register Service Worker immediately for Offline Access + Fast Mobile PWA Installability
if ('serviceWorker' in navigator) {
  const registerFlagServiceWorker = () => {
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadController) {
        showPwaUpdateBanner();
      }
    });

    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('FLAG Service Worker registered:', reg.scope);
      try { reg.update(); } catch (e) {}
      if (reg.waiting && navigator.serviceWorker.controller) {
        showPwaUpdateBanner();
      }
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showPwaUpdateBanner();
          }
        });
      });
    }, err => console.log('FLAG Service Worker registration failed:', err));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerFlagServiceWorker);
  } else {
    registerFlagServiceWorker();
  }
}

function isPwaInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true ||
         document.referrer.includes('android-app://');
}

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent || '') ||
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isAndroidDevice() {
  return /android/i.test(navigator.userAgent || '');
}

function isIosNonSafariBrowser() {
  return isIosDevice() && /CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(navigator.userAgent || '');
}

function isInAppBrowser() {
  return /FBAN|FBAV|Instagram|WhatsApp|MicroMessenger|Line\/|Telegram|Twitter|Snapchat|; wv\)/i.test(navigator.userAgent || '');
}

function isMobileInstallEligible() {
  const ua = navigator.userAgent || '';
  const isMobileUa = isAndroidDevice() || isIosDevice() || /mobile/i.test(ua);
  const isNarrowViewport = window.matchMedia('(max-width: 768px)').matches || window.innerWidth <= 768;
  return isMobileUa || isNarrowViewport;
}

let deferredPwaPrompt = window.__deferredPwaPrompt || null;

function getDeferredPwaPrompt() {
  return deferredPwaPrompt || window.__deferredPwaPrompt || null;
}

function syncPwaInstallUi() {
  const navBtn = document.getElementById('navInstallPwaBtn');
  const banner = document.getElementById('pwaInstallBanner');
  const showMobileUi = isMobileInstallEligible() && !isPwaInstalled();

  if (navBtn) {
    navBtn.style.display = showMobileUi ? 'inline-flex' : 'none';
  }

  if (banner) {
    const dismissed = sessionStorage.getItem('flag_pwa_dismissed') === 'true';
    banner.style.display = (showMobileUi && !dismissed) ? 'flex' : 'none';
  }

  // Also refresh modal native-install CTA if modal is currently open
  const modal = document.getElementById('pwaDownloadModal');
  const nativeBtn = document.getElementById('pwaModalNativeInstallBtn');
  if (modal && modal.style.display === 'flex' && nativeBtn) {
    nativeBtn.style.display = (!isPwaInstalled() && getDeferredPwaPrompt()) ? 'inline-flex' : 'none';
  }
}

function initPWABanner() {
  syncPwaInstallUi();
}

function handlePwaPromptReady(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
    deferredPwaPrompt = e;
    window.__deferredPwaPrompt = e;
  } else if (window.__deferredPwaPrompt) {
    deferredPwaPrompt = window.__deferredPwaPrompt;
  }
  syncPwaInstallUi();
}

window.addEventListener('beforeinstallprompt', handlePwaPromptReady);
window.addEventListener('flag-pwa-prompt-ready', () => handlePwaPromptReady(window.__deferredPwaPrompt));
window.addEventListener('resize', syncPwaInstallUi);

window.addEventListener('appinstalled', () => {
  deferredPwaPrompt = null;
  window.__deferredPwaPrompt = null;
  closePwaDownloadModal();
  syncPwaInstallUi();
  showToast('🎉 FLAG Media App installed to your device!');
});

async function triggerPWAInstall() {
  const promptEvent = getDeferredPwaPrompt();
  if (promptEvent) {
    deferredPwaPrompt = null;
    window.__deferredPwaPrompt = null;
    try {
      await promptEvent.prompt();
      const choiceResult = await promptEvent.userChoice;
      if (choiceResult && choiceResult.outcome === 'accepted') {
        showToast('🎉 Installing FLAG Media App...');
        closePwaDownloadModal();
        const banner = document.getElementById('pwaInstallBanner');
        if (banner) banner.style.display = 'none';
        return;
      }
    } catch (err) {
      console.warn('PWA native prompt unavailable, falling back to install steps:', err);
    }
  }
  openPwaDownloadModal();
}

function openInAndroidChrome() {
  const rawUrl = getCleanPortalUrl();
  if (!/^https?:\/\//i.test(rawUrl)) {
    copyPortalAppLink();
    return;
  }
  const scheme = window.location.protocol.replace(':', '') || 'https';
  const stripped = rawUrl.replace(/^https?:\/\//i, '');
  const fallback = encodeURIComponent(rawUrl);
  window.location.href = `intent://${stripped}#Intent;scheme=${scheme};package=com.android.chrome;S.browser_fallback_url=${fallback};end`;
}

function openPwaDownloadModal() {
  const statusEl = document.getElementById('pwaDownloadStatusNote');
  const stepsEl = document.getElementById('pwaDownloadSteps');
  const nativeBtn = document.getElementById('pwaModalNativeInstallBtn');
  const chromeBtn = document.getElementById('pwaOpenChromeBtn');

  const hasPrompt = !isPwaInstalled() && !!getDeferredPwaPrompt();
  const inApp = isInAppBrowser();
  const isIos = isIosDevice();
  const iosNonSafari = isIosNonSafariBrowser();

  if (nativeBtn) nativeBtn.style.display = hasPrompt ? 'inline-flex' : 'none';
  if (chromeBtn) chromeBtn.style.display = (!isIos && inApp) ? 'inline-flex' : 'none';

  if (statusEl) {
    if (isPwaInstalled()) {
      statusEl.innerHTML = '✅ <strong>App Already Installed!</strong> Share the link below with other crew members so they can add it to their phone Home Screen too.';
    } else if (hasPrompt) {
      statusEl.innerHTML = '🚀 <strong>Ready to Install!</strong> Tap <strong>📲 Install App Now</strong> below to add FLAG Media directly to your phone Home Screen.';
    } else if (inApp) {
      statusEl.innerHTML = isIos
        ? '⚠️ <strong>Opened Inside App Browser:</strong> Tap the browser/Safari icon or copy link below and open it in <strong>Safari</strong> to install the app.'
        : '⚠️ <strong>Opened Inside App Browser:</strong> Tap <strong>🌐 Open in Chrome</strong> below (or tap <strong>⋮</strong> → <strong>Open in Chrome</strong>) so your phone can download the app.';
    } else if (iosNonSafari) {
      statusEl.innerHTML = '🍎 <strong>Open in Safari Required on iPhone/iPad:</strong> Copy the link below and open it in Apple <strong>Safari</strong> to install to your Home Screen.';
    } else if (isIos) {
      statusEl.innerHTML = '🍎 <strong>iPhone / iPad (Safari):</strong> Follow these 3 quick steps to install FLAG Media onto your Home Screen.';
    } else {
      statusEl.innerHTML = '📱 <strong>Android / Mobile Chrome:</strong> Install FLAG Media to your Home Screen using the browser menu for 1-tap offline & live-sync access.';
    }
  }

  if (stepsEl) {
    let steps;
    if (isIos) {
      steps = (inApp || iosNonSafari)
        ? [
            'Tap <strong>📋 Copy Link</strong> below or tap <strong>Open in Safari</strong> from the corner menu.',
            'Paste and open the link inside <strong>Safari</strong>.',
            'Tap <strong>Share</strong> <span class="ios-icon-pill">📤</span> → <strong style="color: #38bdf8;">"Add to Home Screen"</strong> <span class="ios-icon-pill">➕</span> → <strong>Add</strong>.'
          ]
        : [
            'Stay on this page in <strong>Safari</strong>.',
            'Tap the <strong>Share</strong> button <span class="ios-icon-pill">📤</span> at the bottom (or top-right) bar.',
            'Scroll down and tap <strong style="color: #38bdf8;">"Add to Home Screen"</strong> <span class="ios-icon-pill">➕</span> → <strong>Add</strong>.'
          ];
    } else if (inApp) {
      steps = [
            'Tap <strong>🌐 Open in Chrome</strong> below (or tap <strong>⋮</strong> at top-right → <strong>Open in Chrome</strong>).',
            'Once opened in Chrome, tap <strong>📲 Install App</strong> on the banner or header.',
            'Tap <strong style="color: #34d399;">"Install"</strong> when Android asks to add <strong>FLAG Media</strong>.'
          ];
    } else {
      steps = [
            'Tap the Chrome/Edge menu <span class="ios-icon-pill">⋮</span> in the top-right corner of your phone.',
            'Tap <strong style="color: #34d399;">"Add to Home screen"</strong> or <strong style="color: #34d399;">"Install app"</strong>.',
            'Tap <strong>Install</strong> (or <strong>Add</strong>) — if Chrome says "Create shortcut", refresh once first so offline install activates.'
          ];
    }
    stepsEl.innerHTML = steps.map((txt, idx) => `
      <div class="ios-step-card">
        <div class="ios-step-num">${idx + 1}</div>
        <div class="ios-step-text">${txt}</div>
      </div>
    `).join('');
  }

  const modal = document.getElementById('pwaDownloadModal');
  if (modal) modal.style.display = 'flex';
}

function closePwaDownloadModal() {
  const modal = document.getElementById('pwaDownloadModal');
  if (modal) modal.style.display = 'none';
}

function getCleanPortalUrl() {
  return window.location.href.split('#')[0];
}

function copyPortalAppLink() {
  const url = getCleanPortalUrl();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('📋 App link copied! Open in Chrome/Safari or paste in WhatsApp.');
    }).catch(() => {
      copyFallback(url);
    });
  } else {
    copyFallback(url);
  }
}

function sharePortalAppWhatsApp() {
  const url = getCleanPortalUrl();
  const msg = `📲 *FLAG Media Team Portal App*\nOpen in Chrome (Android) or Safari (iPhone) and tap *📲 App* or *"Add to Home screen"* to install:\n${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}

function openIosInstallModal() {
  openPwaDownloadModal();
}

function closeIosInstallModal() {
  closePwaDownloadModal();
}

function dismissPWABanner() {
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) banner.style.display = 'none';
  sessionStorage.setItem('flag_pwa_dismissed', 'true');
}

// ================= FEATURE 5: 📸 1-CLICK HIGH-RES SCHEDULE IMAGE EXPORT (PNG) =================
function exportScheduleImagePNG() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const isLight = currentTheme === "light";

  showToast(isLight ? "📸 Generating 2X high-resolution Light Theme schedule image..." : "📸 Generating 2X high-resolution schedule image...");

  const mName = getMonthName(appState.selectedMonth) || (appState.month ? appState.month.split(' ')[0] : 'Current');
  const year = appState.selectedYear || (appState.month ? appState.month.split(' ')[1] : '2026');
  const monthTitle = `${mName} ${year}`;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = 1200;
  const padding = 36;
  const innerWidth = width - (padding * 2);

  const sundayCount = (appState.firstService || []).length;
  const fridayCount = (appState.fridayPrayer || []).length;
  const specialCount = (appState.specialMeetings || []).length;
  const morningCount = (appState.morningPrayer && appState.morningPrayer.enabled && appState.morningPrayer.days) ? appState.morningPrayer.days.length : 0;

  const headerH = 125;
  const firstServiceH = 85 + (sundayCount * 46) + 15;
  const secondThirdH = 95 + (Math.max(sundayCount, 1) * 46) + 15;
  const fridayH = 85 + (fridayCount * 46) + 15;
  const specialH = specialCount > 0 ? (75 + specialCount * 46 + 15) : 0;
  const morningH = morningCount > 0 ? (75 + morningCount * 46 + 15) : 0;
  const footerH = 105;
  const sectionGaps = 22 * 4;

  const height = headerH + firstServiceH + secondThirdH + fridayH + specialH + morningH + footerH + sectionGaps + 40;

  // 2X Hi-DPI crisp super-sampling for crystal clear viewing on smartphones & WhatsApp
  const dpr = 2;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // Background gradient (Theme-Aware)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  if (isLight) {
    bgGrad.addColorStop(0, "#ffffff");
    bgGrad.addColorStop(0.5, "#f8fafc");
    bgGrad.addColorStop(1, "#f1f5f9");
  } else {
    bgGrad.addColorStop(0, "#080d1a");
    bgGrad.addColorStop(0.5, "#0d1527");
    bgGrad.addColorStop(1, "#050914");
  }
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle ambient glow orbs
  ctx.save();
  const radGlow1 = ctx.createRadialGradient(200, 150, 10, 200, 150, 350);
  if (isLight) {
    radGlow1.addColorStop(0, "rgba(56, 189, 248, 0.08)");
  } else {
    radGlow1.addColorStop(0, "rgba(56, 189, 248, 0.12)");
  }
  radGlow1.addColorStop(1, "transparent");
  ctx.fillStyle = radGlow1;
  ctx.fillRect(0, 0, 500, 400);

  const radGlow2 = ctx.createRadialGradient(width - 200, height - 200, 10, width - 200, height - 200, 400);
  if (isLight) {
    radGlow2.addColorStop(0, "rgba(245, 158, 11, 0.05)");
  } else {
    radGlow2.addColorStop(0, "rgba(245, 158, 11, 0.08)");
  }
  radGlow2.addColorStop(1, "transparent");
  ctx.fillStyle = radGlow2;
  ctx.fillRect(width - 500, height - 500, 500, 500);
  ctx.restore();

  function roundRect(ctx, x, y, w, h, r, fill, stroke, strokeColor) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) {
      ctx.strokeStyle = strokeColor || (isLight ? "#cbd5e1" : "rgba(255,255,255,0.15)");
      ctx.stroke();
    }
  }

  let curY = padding;

  const logoImg = new Image();
  logoImg.crossOrigin = "anonymous";
  logoImg.src = "logo.png";

  const renderContent = () => {
    // Header Bar
    ctx.save();
    try {
      if (logoImg.complete && logoImg.naturalWidth !== 0) {
        ctx.drawImage(logoImg, padding, curY, 68, 68);
      } else {
        ctx.font = "48px sans-serif";
        ctx.fillText("🕊️", padding + 5, curY + 54);
      }
    } catch (e) {
      ctx.font = "48px sans-serif";
      ctx.fillText("🕊️", padding + 5, curY + 54);
    }

    const textLeft = padding + 85;
    ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
    ctx.font = "900 24px 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    ctx.fillText("FULL LIFE CENTRE ASSEMBLY OF GOD CHURCH 🕊️", textLeft, curY + 28);

    ctx.fillStyle = isLight ? "#0284c7" : "#38bdf8";
    ctx.font = "800 14px 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    ctx.fillText("INDOOR MEDIA TEAM • OFFICIAL BROADCAST SERVING SCHEDULE", textLeft, curY + 54);

    // Month Badge
    const badgeW = 220;
    const badgeX = width - padding - badgeW;
    if (isLight) {
      ctx.fillStyle = "#fffbeb";
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 1.5;
      roundRect(ctx, badgeX, curY + 8, badgeW, 46, 8, true, true, "#f59e0b");
      ctx.fillStyle = "#92400e";
    } else {
      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 1.5;
      roundRect(ctx, badgeX, curY + 8, badgeW, 46, 8, true, true, "#f59e0b");
      ctx.fillStyle = "#fef08a";
    }
    ctx.font = "900 16px 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`📅 ${monthTitle.toUpperCase()}`, badgeX + (badgeW / 2), curY + 36);
    ctx.textAlign = "left";
    ctx.restore();

    curY += 95;

    // Divider
    ctx.strokeStyle = isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, curY);
    ctx.lineTo(width - padding, curY);
    ctx.stroke();

    curY += 22;

    // Section 1: 1st Service Card (Tamil)
    ctx.save();
    ctx.fillStyle = isLight ? "#ffffff" : "rgba(15, 23, 42, 0.85)";
    const stroke1 = isLight ? "#bae6fd" : "rgba(59, 130, 246, 0.4)";
    roundRect(ctx, padding, curY, innerWidth, firstServiceH, 12, true, true, stroke1);

    ctx.fillStyle = isLight ? "#0284c7" : "#3b82f6";
    ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

    ctx.fillStyle = isLight ? "#0369a1" : "#60a5fa";
    ctx.font = "900 16px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("1ST SERVICE (TAMIL)", padding + 18, curY + 34);

    ctx.fillStyle = isLight ? "#334155" : "#cbd5e1";
    ctx.font = "700 13px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("🙏 Prayer: 05:30 AM  |  Service: 06:00 AM – 08:00 AM", padding + 230, curY + 34);

    const colX = [
      padding + 16,
      padding + 130,
      padding + 295,
      padding + 455,
      padding + 615,
      padding + 775,
      padding + 925
    ];

    const tHeaderY = curY + 64;
    ctx.fillStyle = isLight ? "#f1f5f9" : "rgba(30, 41, 59, 0.7)";
    ctx.fillRect(padding + 12, tHeaderY - 18, innerWidth - 24, 26);

    ctx.fillStyle = isLight ? "#0f172a" : "#cbd5e1";
    ctx.font = "800 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DATE", colX[0], tHeaderY);
    ctx.fillText("🎥 1ST CAM", colX[1], tHeaderY);
    ctx.fillText("📹 2ND CAM", colX[2], tHeaderY);
    ctx.fillText("🎯 GIMBLE", colX[3], tHeaderY);
    ctx.fillText("💻 LIVE SYSTEM", colX[4], tHeaderY);
    ctx.fillText("✂️ SPOT EDIT", colX[5], tHeaderY);
    ctx.fillText("🔋 CHARGING", colX[6], tHeaderY);

    let rowY = tHeaderY + 28;
    (appState.firstService || []).forEach((r, idx) => {
      if (idx % 2 === 1) {
        ctx.fillStyle = isLight ? "#f8fafc" : "rgba(255, 255, 255, 0.02)";
        ctx.fillRect(padding + 12, rowY - 18, innerWidth - 24, 38);
      }

      ctx.fillStyle = isLight ? "#eff6ff" : "rgba(59, 130, 246, 0.2)";
      ctx.strokeStyle = isLight ? "#93c5fd" : "rgba(59, 130, 246, 0.4)";
      roundRect(ctx, colX[0] - 4, rowY - 16, 95, 26, 5, true, true);
      ctx.fillStyle = isLight ? "#1d4ed8" : "#93c5fd";
      ctx.font = "800 12px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, colX[0] + 4, rowY + 2);

      ctx.font = "800 13px 'Plus Jakarta Sans', sans-serif";
      const names = [r.cam1, r.cam2, r.gimble, r.live, r.spot, r.charging];
      names.forEach((name, nIdx) => {
        if (!name || name === "—") {
          ctx.fillStyle = isLight ? "#94a3b8" : "#64748b";
        } else if (name.includes("&")) {
          ctx.fillStyle = isLight ? "#b45309" : "#fef08a";
        } else {
          ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        }
        ctx.fillText(name || "—", colX[nIdx + 1], rowY + 2);
      });

      rowY += 46;
    });

    ctx.restore();
    curY += firstServiceH + 20;

    // Section 2: 2nd & 3rd Service Grid
    const colW = (innerWidth - 18) / 2;
    const col2X = padding + colW + 18;

    // 2nd Service
    ctx.save();
    ctx.fillStyle = isLight ? "#ffffff" : "rgba(15, 23, 42, 0.85)";
    const stroke2 = isLight ? "#fde68a" : "rgba(245, 158, 11, 0.4)";
    roundRect(ctx, padding, curY, colW, secondThirdH, 12, true, true, stroke2);
    ctx.fillStyle = isLight ? "#d97706" : "#f59e0b";
    ctx.fillRect(padding + 12, curY, colW - 24, 3);

    ctx.fillStyle = isLight ? "#b45309" : "#fbbf24";
    ctx.font = "900 16px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("2ND SERVICE (TAMIL)", padding + 18, curY + 30);
    ctx.fillStyle = isLight ? "#334155" : "#cbd5e1";
    ctx.font = "700 13px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("🙏 Prayer: 08:00 AM  |  Service: 08:30 AM – 10:30 AM", padding + 18, curY + 52);

    const tHeader2Y = curY + 76;
    ctx.fillStyle = isLight ? "#fef3c7" : "rgba(245, 158, 11, 0.15)";
    ctx.fillRect(padding + 12, tHeader2Y - 18, colW - 24, 26);
    ctx.fillStyle = isLight ? "#92400e" : "#fde68a";
    ctx.font = "800 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DATE", padding + 22, tHeader2Y);
    ctx.fillText("🎥 CAM & LIVE OPERATOR", padding + 140, tHeader2Y);

    let r2Y = tHeader2Y + 28;
    (appState.secondService || []).forEach((r, idx) => {
      if (idx % 2 === 1) {
        ctx.fillStyle = isLight ? "#fffdf5" : "rgba(255, 255, 255, 0.02)";
        ctx.fillRect(padding + 12, r2Y - 18, colW - 24, 38);
      }
      ctx.fillStyle = isLight ? "#fffbeb" : "rgba(245, 158, 11, 0.2)";
      roundRect(ctx, padding + 18, r2Y - 16, 95, 26, 5, true, true, isLight ? "#fcd34d" : "rgba(245, 158, 11, 0.35)");
      ctx.fillStyle = isLight ? "#92400e" : "#fde68a";
      ctx.font = "800 12px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, padding + 26, r2Y + 2);

      ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
      ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(r.operator || "—", padding + 140, r2Y + 2);
      r2Y += 46;
    });

    // 3rd Service (Tamil)
    ctx.fillStyle = isLight ? "#ffffff" : "rgba(15, 23, 42, 0.85)";
    const stroke3 = isLight ? "#e9d5ff" : "rgba(168, 85, 247, 0.4)";
    roundRect(ctx, col2X, curY, colW, secondThirdH, 12, true, true, stroke3);
    ctx.fillStyle = isLight ? "#9333ea" : "#a855f7";
    ctx.fillRect(col2X + 12, curY, colW - 24, 3);

    ctx.fillStyle = isLight ? "#7e22ce" : "#c084fc";
    ctx.font = "900 16px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("3RD SERVICE (TAMIL)", col2X + 18, curY + 30);
    ctx.fillStyle = isLight ? "#334155" : "#cbd5e1";
    ctx.font = "700 13px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("🙏 Prayer: 10:30 AM  |  Service: 11:00 AM – 01:00 PM", col2X + 18, curY + 52);

    const tHeader3Y = curY + 76;
    ctx.fillStyle = isLight ? "#f3e8ff" : "rgba(168, 85, 247, 0.15)";
    ctx.fillRect(col2X + 12, tHeader3Y - 18, colW - 24, 26);
    ctx.fillStyle = isLight ? "#6b21a8" : "#e9d5ff";
    ctx.font = "800 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DATE", col2X + 22, tHeader3Y);
    ctx.fillText("🎥 CAM & LIVE OPERATOR", col2X + 140, tHeader3Y);

    let r3Y = tHeader3Y + 28;
    (appState.thirdService || []).forEach((r, idx) => {
      if (idx % 2 === 1) {
        ctx.fillStyle = isLight ? "#fdfaff" : "rgba(255, 255, 255, 0.02)";
        ctx.fillRect(col2X + 12, r3Y - 18, colW - 24, 38);
      }
      ctx.fillStyle = isLight ? "#faf5ff" : "rgba(168, 85, 247, 0.2)";
      roundRect(ctx, col2X + 18, r3Y - 16, 95, 26, 5, true, true, isLight ? "#d8b4fe" : "rgba(168, 85, 247, 0.35)");
      ctx.fillStyle = isLight ? "#6b21a8" : "#e9d5ff";
      ctx.font = "800 12px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, col2X + 26, r3Y + 2);

      ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
      ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(r.operator || "—", col2X + 140, r3Y + 2);
      r3Y += 46;
    });
    ctx.restore();

    curY += secondThirdH + 20;

    // Section 3: Friday Fasting
    ctx.save();
    ctx.fillStyle = isLight ? "#ffffff" : "rgba(15, 23, 42, 0.85)";
    const strokeF = isLight ? "#bbf7d0" : "rgba(16, 185, 129, 0.4)";
    roundRect(ctx, padding, curY, innerWidth, fridayH, 12, true, true, strokeF);
    ctx.fillStyle = isLight ? "#16a34a" : "#10b981";
    ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

    ctx.fillStyle = isLight ? "#15803d" : "#34d399";
    ctx.font = "900 16px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("FRIDAY FASTING PRAYER", padding + 18, curY + 34);
    ctx.fillStyle = isLight ? "#334155" : "#cbd5e1";
    ctx.font = "700 13px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText("🙏 Prayer: 09:30 AM  |  Service: 10:00 AM – 01:00 PM", padding + 260, curY + 34);

    const fHeaderY = curY + 64;
    ctx.fillStyle = isLight ? "#f0fdf4" : "rgba(16, 185, 129, 0.15)";
    ctx.fillRect(padding + 12, fHeaderY - 18, innerWidth - 24, 26);
    ctx.fillStyle = isLight ? "#166534" : "#a7f3d0";
    ctx.font = "800 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DATE", padding + 24, fHeaderY);
    ctx.fillText("🎥 CAMERA OPERATOR", padding + 240, fHeaderY);
    ctx.fillText("💻 LIVE IN SYSTEM", padding + 600, fHeaderY);

    let rfY = fHeaderY + 28;
    (appState.fridayPrayer || []).forEach((r, idx) => {
      ctx.fillStyle = isLight ? "#f0fdf4" : "rgba(16, 185, 129, 0.18)";
      roundRect(ctx, padding + 24, rfY - 16, 95, 26, 5, true, true, isLight ? "#86efac" : "rgba(16, 185, 129, 0.35)");
      ctx.fillStyle = isLight ? "#166534" : "#a7f3d0";
      ctx.font = "800 12px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, padding + 32, rfY + 2);

      ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
      ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(r.cam1 || "—", padding + 240, rfY + 2);
      ctx.fillText(r.live || "—", padding + 600, rfY + 2);
      rfY += 46;
    });
    ctx.restore();

    curY += fridayH + 20;

    // Special Meetings
    if (specialCount > 0) {
      ctx.save();
      ctx.fillStyle = isLight ? "#ffffff" : "rgba(15, 23, 42, 0.85)";
      const strokeS = isLight ? "#e9d5ff" : "rgba(168, 85, 247, 0.4)";
      roundRect(ctx, padding, curY, innerWidth, specialH, 12, true, true, strokeS);
      ctx.fillStyle = isLight ? "#9333ea" : "#a855f7";
      ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

      ctx.fillStyle = isLight ? "#7e22ce" : "#c084fc";
      ctx.font = "900 16px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("🌟 SPECIAL MEETINGS & CONFERENCES", padding + 18, curY + 30);

      let spY = curY + 60;
      (appState.specialMeetings || []).forEach(r => {
        ctx.fillStyle = isLight ? "#92400e" : "#fef08a";
        ctx.font = "800 13px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`🌟 ${r.title || 'Meeting'} (${r.date})`, padding + 24, spY);

        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`🎥 Cam 1: ${r.cam1 || '—'}  |  📹 Cam 2: ${r.cam2 || '—'}  |  🎯 Gimble: ${r.gimble || '—'}  |  💻 Live: ${r.live || '—'}`, padding + 320, spY);
        spY += 42;
      });
      ctx.restore();
      curY += specialH + 20;
    }

    // Morning Prayer (if enabled)
    if (morningCount > 0) {
      ctx.save();
      ctx.fillStyle = isLight ? "#ffffff" : "rgba(15, 23, 42, 0.85)";
      const strokeM = isLight ? "#fed7aa" : "rgba(249, 115, 22, 0.4)";
      roundRect(ctx, padding, curY, innerWidth, morningH, 12, true, true, strokeM);
      ctx.fillStyle = isLight ? "#ea580c" : "#f97316";
      ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

      ctx.fillStyle = isLight ? "#c2410c" : "#fb923c";
      ctx.font = "900 16px 'Plus Jakarta Sans', sans-serif";
      const mTitle = (appState.morningPrayer && appState.morningPrayer.title) ? appState.morningPrayer.title.toUpperCase() : "EARLY MORNING PRAYER";
      ctx.fillText(`🌅 ${mTitle}`, padding + 18, curY + 30);

      let mpY = curY + 60;
      (appState.morningPrayer.days || []).forEach(r => {
        ctx.fillStyle = isLight ? "#c2410c" : "#fed7aa";
        ctx.font = "800 13px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`🌅 ${r.day || 'Day'}`, padding + 24, mpY);

        ctx.fillStyle = isLight ? "#0f172a" : "#ffffff";
        ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`🎥 Cam 1: ${r.cam1 || '—'}  |  📹 Cam 2: ${r.cam2 || '—'}  |  🎯 Gimble: ${r.gimbal || '—'}  |  💻 Live: ${r.liveEditor || '—'}  |  📱 Social: ${r.socialMedia || '—'}`, padding + 160, mpY);
        mpY += 42;
      });
      ctx.restore();
      curY += morningH + 20;
    }

    // Footer
    curY += 10;
    ctx.strokeStyle = isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.moveTo(padding, curY);
    ctx.lineTo(width - padding, curY);
    ctx.stroke();

    curY += 28;
    ctx.fillStyle = isLight ? "#334155" : "#cbd5e1";
    ctx.font = "italic 700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText('"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23', width / 2, curY);

    curY += 22;
    ctx.fillStyle = isLight ? "#64748b" : "#64748b";
    ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Full Life Centre AG Church • Indoor Media Portal • Media Desk Command Center", width / 2, curY);

    // Export Canvas to Blob
    canvas.toBlob((blob) => {
      if (!blob) {
        showToast("Error generating image.");
        return;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeMonth = monthTitle.replace(/[^a-zA-Z0-9]/g, "_");
      a.href = url;
      a.download = `FLAG_Media_Schedule_${safeMonth}_${isLight ? 'Light' : 'Dark'}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(isLight ? "📸 High-Resolution Light Theme Schedule PNG exported! Ready for WhatsApp Status." : "📸 High-Resolution Dark Theme Schedule PNG exported! Ready for WhatsApp Status.");
    }, "image/png");
  };

  if (logoImg.complete && logoImg.naturalWidth !== 0) {
    renderContent();
  } else {
    logoImg.onload = renderContent;
    logoImg.onerror = renderContent;
  }
}

// ================= CLOUD SYNC (FIREBASE REALTIME DATABASE) =================
let firebaseApp = null;
let firebaseDb = null;
let isSyncingFromCloud = false;
let cloudSyncConnected = false;
const DEFAULT_FIREBASE_DB_URL = "https://flag-church-media-default-rtdb.firebaseio.com";
const FIREBASE_CONFIG_KEY = "FLAG_FIREBASE_DB_URL";
const FIREBASE_DB_NODE = "flag_church_media_portal/state";

function initCloudSync() {
  const savedSetting = localStorage.getItem(FIREBASE_CONFIG_KEY);
  let activeUrl = DEFAULT_FIREBASE_DB_URL;

  if (savedSetting === "OFF") {
    activeUrl = "";
  } else if (savedSetting) {
    activeUrl = savedSetting;
  }

  const inputEl = document.getElementById("firebaseDbUrlInput");
  if (inputEl) {
    inputEl.value = activeUrl || DEFAULT_FIREBASE_DB_URL;
  }

  if (activeUrl) {
    connectFirebaseWithUrl(activeUrl, false);
  } else {
    updateCloudSyncUI(false);
  }
}

function connectFirebaseWithUrl(rawUrl, showToastNotice = true) {
  let dbUrl = (rawUrl || "").trim();
  if (!dbUrl) {
    alert("Please enter a valid Firebase Realtime Database URL.");
    return;
  }

  // Auto-correct missing https:// or trailing slashes
  if (!dbUrl.startsWith("http://") && !dbUrl.startsWith("https://")) {
    dbUrl = "https://" + dbUrl;
  }
  dbUrl = dbUrl.replace(/\/+$/, "");

  try {
    // Check if Firebase Compat SDK is loaded
    if (typeof firebase === "undefined") {
      console.warn("Firebase SDK not loaded yet.");
      updateCloudSyncUI(false, "Firebase library loading...");
      return;
    }

    // Initialize or reuse default app
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp({ databaseURL: dbUrl });
    } else {
      firebaseApp = firebase.app();
    }

    firebaseDb = firebase.database();
    localStorage.setItem(FIREBASE_CONFIG_KEY, dbUrl);

    // Attach Realtime Listener
    const ref = firebaseDb.ref(FIREBASE_DB_NODE);
    
    // Check connection state via Firebase .info/connected
    firebaseDb.ref(".info/connected").on("value", snap => {
      const isOnline = snap.val() === true;
      if (isOnline) {
        cloudSyncConnected = true;
        updateCloudSyncUI(true);
      } else {
        cloudSyncConnected = false;
        updateCloudSyncUI(false, "Reconnecting to Cloud...");
      }
    });

    ref.on("value", snapshot => {
      const cloudState = snapshot.val();
      if (cloudState && !isSyncingFromCloud) {
        console.log("☁️ Real-time cloud sync received:", cloudState);
        const needsCloudCleanup = cloudState.checklistTemplateVersion !== 3
          || !cloudState.memberRolesVersion
          || cloudState.memberRolesVersion < CURRENT_MEMBER_ROLES_VERSION
          || !cloudState.crewDirectoryVersion
          || cloudState.crewDirectoryVersion < CURRENT_CREW_DIRECTORY_VERSION
          || !cloudState.leaderName
          || ("adminPin" in cloudState);
        isSyncingFromCloud = true;
        // Merge received cloud state into appState
        ensureStateIntegrity(cloudState);
        appState = cloudState;
        // Cache to local storage
        localStorage.setItem("FLAG_MEDIA_PORTAL_STATE", JSON.stringify(appState));
        // Re-render whole portal
        renderAll();
        updateCloudSyncUI(true);
        isSyncingFromCloud = false;
        if (needsCloudCleanup) {
          saveToCloud(appState, false);
        }
        showToast("☁️ Real-time schedule updated from Cloud!");
      } else if (!cloudState) {
        // First time cloud initialization - push current local state to cloud!
        ensureStateIntegrity(appState);
        ref.set(sanitizeCloudState(appState)).catch(err => console.warn("Init cloud error:", err));
      }
    }, err => {
      console.error("Firebase sync error:", err);
      updateCloudSyncUI(false, err.message);
    });

    cloudSyncConnected = true;
    updateCloudSyncUI(true);
    if (showToastNotice) {
      showToast("🟢 Connected to Firebase! Cloud Sync is now active across all devices.");
    }
  } catch (err) {
    console.error("Firebase init failed:", err);
    alert("Failed to connect to Firebase: " + err.message);
    updateCloudSyncUI(false, err.message);
  }
}

function saveAndConnectFirebase() {
  const inputEl = document.getElementById("firebaseDbUrlInput");
  const url = inputEl ? inputEl.value.trim() : "";
  if (!url) {
    alert("Please paste your Firebase Database URL (e.g. https://flag-media-default-rtdb.firebaseio.com).");
    return;
  }
  connectFirebaseWithUrl(url, true);
  // Also push current state immediately
  setTimeout(() => {
    saveToCloud(appState);
  }, 800);
}

function syncLocalToCloudNow() {
  if (!firebaseDb) {
    alert("Firebase is not connected yet.");
    return;
  }
  saveToCloud(appState);
  showToast("☁️ Pushed local schedule to Cloud! All volunteers will see this immediately.");
}

function disconnectFirebase() {
  if (confirm("Disconnect Cloud Sync? Your edits will only save locally to this browser until reconnected.")) {
    if (firebaseDb) {
      try {
        firebaseDb.ref(FIREBASE_DB_NODE).off();
      } catch (e) {}
    }
    firebaseDb = null;
    cloudSyncConnected = false;
    localStorage.setItem(FIREBASE_CONFIG_KEY, "OFF");
    const inputEl = document.getElementById("firebaseDbUrlInput");
    if (inputEl) inputEl.value = "";
    updateCloudSyncUI(false);
    showToast("🔌 Cloud Sync disconnected. Running in Local Mode.");
  }
}

/**
 * Writes either a granular key/path update (`isPatch = true`) or the sanitized full state (`isPatch = false`) to Firebase.
 */
function saveToCloud(stateOrPatch, isPatch = false) {
  if (!firebaseDb || !cloudSyncConnected || isSyncingFromCloud) return;
  try {
    const ref = firebaseDb.ref(FIREBASE_DB_NODE);
    const writePromise = isPatch
      ? ref.update(stateOrPatch)
      : ref.set(sanitizeCloudState(stateOrPatch));
    writePromise.then(() => {
      console.log(isPatch ? "☁️ Granular update saved to Firebase Cloud!" : "☁️ Successfully saved to Firebase Cloud!");
    }).catch(err => {
      console.warn("☁️ Failed to push to Firebase Cloud:", err);
    });
  } catch (e) {
    console.warn("saveToCloud error:", e);
  }
}

function updateCloudSyncUI(isConnected, errorMsg) {
  const badge = document.getElementById("cloudStatusBadge");
  const text = document.getElementById("cloudStatusText");
  const navBadge = document.getElementById("navCloudSyncBadge");
  const navText = document.getElementById("navCloudSyncText");
  const btnSync = document.getElementById("btnSyncCloudNow");
  const btnDisc = document.getElementById("btnDisconnectCloud");

  if (isConnected) {
    if (badge) {
      badge.className = "header-tag tag-emerald";
    }
    if (text) text.textContent = "🟢 Live Cloud Connected & Syncing";
    if (navBadge) {
      navBadge.classList.add("connected");
    }
    if (navText) navText.textContent = "☁️ Synced";
    if (btnSync) btnSync.style.display = "inline-flex";
    if (btnDisc) btnDisc.style.display = "inline-flex";
  } else {
    if (badge) {
      badge.className = "header-tag tag-amber";
    }
    if (text) text.textContent = errorMsg ? `⚠️ Error: ${errorMsg}` : "🟡 Local Mode (Ready to Connect)";
    if (navBadge) {
      navBadge.classList.remove("connected");
    }
    if (navText) navText.textContent = "☁️ Local";
    if (btnSync) btnSync.style.display = "none";
    if (btnDisc) btnDisc.style.display = "none";
  }
}

function quickOpenCloudSync() {
  if (isAdminLoggedIn) {
    switchView("adminView");
    const backupTabBtn = document.querySelectorAll(".admin-pill-btn")[4];
    switchAdminTab("adminBackupTab", backupTabBtn);
  } else {
    openAdminPinModal();
    window.postLoginRedirectTab = "adminBackupTab";
  }
}

// 1-Click WhatsApp Team Sync Link & URL Hash Sync
function generateSyncHash(state) {
  try {
    const jsonStr = JSON.stringify(state);
    return encodeURIComponent(btoa(unescape(encodeURIComponent(jsonStr))));
  } catch (e) {
    console.error("Error generating sync hash", e);
    return "";
  }
}

function parseSyncHash(hash) {
  try {
    const raw = hash.replace(/^#sync=/, "");
    const jsonStr = decodeURIComponent(escape(atob(decodeURIComponent(raw))));
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error("Error parsing sync hash", e);
    return null;
  }
}

function getRosterSyncUrl() {
  const hash = generateSyncHash(sanitizeCloudState(appState));
  const base = window.location.origin + window.location.pathname;
  return `${base}#sync=${hash}`;
}

function copyRosterSyncLink() {
  const url = getRosterSyncUrl();
  navigator.clipboard.writeText(url).then(() => {
    showToast("📋 1-Click Team Sync Link copied to clipboard!");
  }).catch(() => {
    prompt("Copy this 1-click sync link:", url);
  });
}

function shareRosterSyncWhatsApp() {
  const url = getRosterSyncUrl();
  const mName = getMonthName(appState.selectedMonth);
  const msg = `🕊️ *Full Life Centre AG Church — Media Schedule Update*\n\nAdmin ${getLeaderName()} has updated the ${mName} ${appState.selectedYear} media schedule!\n\n📲 *Tap this link to sync the latest schedule onto your phone:*\n${url}\n\n_(Opening the link will instantly save the latest duty assignments to your phone)_`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

function checkUrlForRosterSync() {
  if (window.location.hash && window.location.hash.startsWith("#sync=")) {
    const syncedState = parseSyncHash(window.location.hash);
    if (syncedState && syncedState.firstService) {
      ensureStateIntegrity(syncedState);
      appState = syncedState;
      localStorage.setItem("FLAG_MEDIA_PORTAL_STATE", JSON.stringify(appState));
      // Clean up hash from URL bar cleanly
      history.replaceState(null, "", window.location.pathname);
      showToast(`🎉 Successfully synced latest schedule from Admin ${getLeaderName()}!`);
    }
  }
}

// ================= TEAM SERVING ANALYTICS & WORKLOAD BALANCER =================
function renderWorkloadAnalytics() {
  const container = document.getElementById("workloadBarsList");
  const demandContainer = document.getElementById("roleDemandPills");
  if (!container || !appState.members) return;

  const currentYear = appState.selectedYear || 2026;
  const currentMonth = appState.selectedMonth !== undefined ? appState.selectedMonth : 9;
  const mName = getMonthName(currentMonth);

  const monthBadge = document.getElementById("workloadMonthBadge");
  if (monthBadge) monthBadge.textContent = `${mName} ${currentYear}`;

  const totalMembersEl = document.getElementById("workloadTotalMembers");
  if (totalMembersEl) totalMembersEl.textContent = appState.members.length;

  // Track duties per member
  const memberDutyCounts = {};
  appState.members.forEach(m => {
    memberDutyCounts[m.name] = 0;
  });

  // Track demand per role
  const roleDemand = {
    "1st Cam": 0,
    "2nd Cam": 0,
    "Gimble": 0,
    "Live in System": 0,
    "Spot Editing": 0,
    "Charging Incharge": 0
  };

  let totalSlotsAssigned = 0;

  function countPerson(name, roleKey) {
    if (!name) return;
    // Handle combined names like "Balaji & Andrew" or "Andrew & Franklin"
    const splitNames = name.split(/\s*&\s*|\s+and\s+/i);
    splitNames.forEach(n => {
      const clean = n.trim();
      if (clean && clean !== "—" && clean !== "--") {
        if (memberDutyCounts[clean] !== undefined) {
          memberDutyCounts[clean]++;
        } else {
          // If member not in members list, still initialize
          memberDutyCounts[clean] = (memberDutyCounts[clean] || 0) + 1;
        }
        totalSlotsAssigned++;
        if (roleKey && roleDemand[roleKey] !== undefined) {
          roleDemand[roleKey]++;
        }
      }
    });
  }

  // 1st Service
  if (appState.firstService) {
    appState.firstService.forEach(row => {
      countPerson(row.cam1, "1st Cam");
      countPerson(row.cam2, "2nd Cam");
      countPerson(row.gimble, "Gimble");
      countPerson(row.live, "Live in System");
      countPerson(row.spot, "Spot Editing");
      countPerson(row.charging, "Charging Incharge");
    });
  }

  // 2nd Service
  if (appState.secondService) {
    appState.secondService.forEach(row => {
      countPerson(row.operator, "2nd Cam");
    });
  }

  // 3rd Service
  if (appState.thirdService) {
    appState.thirdService.forEach(row => {
      countPerson(row.operator, "2nd Cam");
    });
  }

  // Friday Fasting Prayer
  if (appState.fridayPrayer) {
    appState.fridayPrayer.forEach(row => {
      countPerson(row.cam1, "1st Cam");
      countPerson(row.live, "Live in System");
    });
  }

  // Special Meetings
  if (appState.specialMeetings) {
    appState.specialMeetings.forEach(row => {
      countPerson(row.cam1, "1st Cam");
      countPerson(row.cam2, "2nd Cam");
      countPerson(row.gimble, "Gimble");
      countPerson(row.live, "Live in System");
      countPerson(row.spot, "Spot Editing");
    });
  }

  // Early Morning Prayer (if enabled)
  if (appState.morningPrayer && appState.morningPrayer.enabled && appState.morningPrayer.days) {
    appState.morningPrayer.days.forEach(row => {
      countPerson(row.cam1, "1st Cam");
      countPerson(row.cam2, "2nd Cam");
      countPerson(row.gimbal, "Gimble");
      countPerson(row.liveEditor, "Live in System");
      countPerson(row.socialMedia, "Spot Editing");
    });
  }

  // Summary Metrics Calculation
  const activeVolunteersCount = Object.values(memberDutyCounts).filter(c => c > 0).length;
  const avgSlots = activeVolunteersCount > 0 ? (totalSlotsAssigned / activeVolunteersCount).toFixed(1) : "0.0";

  // Balance status
  const counts = Object.values(memberDutyCounts);
  const maxDuties = Math.max(...counts, 0);
  const minDuties = Math.min(...counts, 0);
  const diff = maxDuties - minDuties;
  let fairnessLabel = "Balanced";
  let fairnessColor = "#10b981";

  if (diff <= 2) {
    fairnessLabel = "Very Fair (≤2 diff)";
    fairnessColor = "#10b981";
  } else if (diff <= 4) {
    fairnessLabel = "Moderate (3-4 diff)";
    fairnessColor = "#f59e0b";
  } else {
    fairnessLabel = "Uneven (Check Load)";
    fairnessColor = "#ef4444";
  }

  // Update Summary DOM
  const elTotalSlots = document.getElementById("ambTotalSlots");
  if (elTotalSlots) elTotalSlots.textContent = totalSlotsAssigned;

  const elActiveVol = document.getElementById("ambActiveVolunteers");
  if (elActiveVol) elActiveVol.textContent = `${activeVolunteersCount} / ${appState.members.length}`;

  const elAvgSlots = document.getElementById("ambAvgSlots");
  if (elAvgSlots) elAvgSlots.textContent = avgSlots;

  const elHealth = document.getElementById("ambRosterHealth");
  if (elHealth) {
    elHealth.textContent = fairnessLabel;
    elHealth.style.color = fairnessColor;
  }

  // Render Member Workload Bars
  // Sort members by duty count descending
  const sortedMembers = [...appState.members].sort((a, b) => {
    return (memberDutyCounts[b.name] || 0) - (memberDutyCounts[a.name] || 0);
  });

  const maxPossible = Math.max(maxDuties, 5);

  container.innerHTML = sortedMembers.map(m => {
    const count = memberDutyCounts[m.name] || 0;
    const pct = Math.min(100, Math.round((count / maxPossible) * 100));

    let statusTag = "";
    let barColor = "#10b981"; // green
    if (count >= 4) {
      statusTag = `<span class="wb-status-tag wb-heavy">Heavy (${count})</span>`;
      barColor = "linear-gradient(90deg, #f59e0b, #d97706)";
    } else if (count >= 2) {
      statusTag = `<span class="wb-status-tag wb-optimal">Optimal (${count})</span>`;
      barColor = "linear-gradient(90deg, #10b981, #059669)";
    } else if (count === 1) {
      statusTag = `<span class="wb-status-tag wb-light">Light (1)</span>`;
      barColor = "linear-gradient(90deg, #38bdf8, #0284c7)";
    } else {
      statusTag = `<span class="wb-status-tag wb-resting">Resting (0)</span>`;
      barColor = "#64748b";
    }

    return `
      <div class="workload-bar-item">
        <div class="wb-header">
          <div class="wb-name-wrap">
            <span class="wb-name">${m.name}</span>
            <span class="wb-role-sub">(${m.role || 'Member'})</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${statusTag}
            <span class="wb-count">${count} slots</span>
          </div>
        </div>
        <div class="wb-track">
          <div class="wb-fill" style="width: ${pct}%; background: ${barColor};"></div>
        </div>
      </div>
    `;
  }).join("");

  // Render Role Demand Breakdown
  if (demandContainer) {
    demandContainer.innerHTML = Object.entries(roleDemand).map(([role, count]) => {
      return `
        <div class="role-demand-pill">
          <span>${role}:</span>
          <strong>${count} services</strong>
        </div>
      `;
    }).join("");
  }
}

// ================= GEAR & EQUIPMENT ISSUE TRACKER =================
let currentGearFilter = "all";

function populateGearReportVolunteers() {
  const sel = document.getElementById("gearReporterSelect");
  if (!sel || !appState.members) return;
  sel.innerHTML = appState.members.map(m => `<option value="${m.name}">${m.name} (${m.role})</option>`).join("");
}

function checkGearCustomItem(val) {
  const customInput = document.getElementById("gearCustomItemInput");
  if (!customInput) return;
  if (val === "Other / Custom Gear") {
    customInput.style.display = "block";
    customInput.focus();
  } else {
    customInput.style.display = "none";
  }
}

function submitGearIssue() {
  const itemSelect = document.getElementById("gearItemSelect");
  const customInput = document.getElementById("gearCustomItemInput");
  const urgencySelect = document.getElementById("gearUrgencySelect");
  const reporterSelect = document.getElementById("gearReporterSelect");
  const descInput = document.getElementById("gearDescInput");

  let item = itemSelect ? itemSelect.value : "";
  if (item === "Other / Custom Gear" && customInput && customInput.value.trim()) {
    item = customInput.value.trim();
  }

  const urgency = urgencySelect ? urgencySelect.value : "Medium";
  const reporter = reporterSelect ? reporterSelect.value : "Lokesh";
  const desc = descInput ? descInput.value.trim() : "";

  if (!desc) {
    alert("Please enter a brief description of the equipment problem and required action.");
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  const newIssue = {
    id: Date.now(),
    item,
    urgency,
    reporter,
    desc,
    date: dateStr,
    status: "Open"
  };

  if (!appState.gearIssues) appState.gearIssues = [];
  appState.gearIssues.unshift(newIssue);

  saveState(false, { gearIssues: appState.gearIssues });
  renderGearIssues();

  if (descInput) descInput.value = "";
  if (customInput) customInput.value = "";
  if (itemSelect) itemSelect.value = "Main Camera 1 (Sony A7 / FX3)";
  checkGearCustomItem("Main Camera 1 (Sony A7 / FX3)");

  showToast(`🛠️ Equipment issue logged! Click "Alert Yashwanth" to send WhatsApp message.`);
}

function setGearFilter(filter, btn) {
  currentGearFilter = filter;
  const buttons = document.querySelectorAll(".gear-filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderGearIssues();
}

function toggleGearIssueStatus(id) {
  if (!appState.gearIssues) return;
  const issue = appState.gearIssues.find(i => i.id === id);
  if (!issue) return;

  if (issue.status === "Open") {
    issue.status = "In Progress";
  } else if (issue.status === "In Progress") {
    issue.status = "Resolved";
  } else {
    issue.status = "Open";
  }

  saveState(false, { gearIssues: appState.gearIssues });
  renderGearIssues();
  showToast(`Gear status updated to: ${issue.status}`);
}

function deleteGearIssue(id) {
  if (!confirm("Are you sure you want to delete this equipment issue log?")) return;
  appState.gearIssues = appState.gearIssues.filter(i => i.id !== id);
  saveState(false, { gearIssues: appState.gearIssues });
  renderGearIssues();
  showToast("Equipment issue log deleted.");
}

function sendGearIssueWhatsApp(id) {
  if (!appState.gearIssues) return;
  const issue = appState.gearIssues.find(i => i.id === id);
  if (!issue) return;

  const phone = "917010368793"; // Yashwanth
  const urgencyIcon = issue.urgency === "Critical" ? "🚨 CRITICAL FAULT" : (issue.urgency === "Medium" ? "⚠️ MEDIUM ATTENTION" : "ℹ️ ROUTINE MAINTENANCE");

  const msg = `🛠️ *FLAG CHURCH MEDIA — GEAR MAINTENANCE ALERT*\n\n` +
    `To: *Yashwanth & Sam Joshua* (Equipment Incharge)\n` +
    `Status Alert: *${urgencyIcon}*\n\n` +
    `📦 *Equipment:* ${issue.item}\n` +
    `📅 *Logged Date:* ${issue.date}\n` +
    `👤 *Reported By:* ${issue.reporter}\n` +
    `📝 *Issue & Action Needed:*\n${issue.desc}\n\n` +
    `Current Status: *${issue.status.toUpperCase()}*\n\n` +
    `_Please check and test this before next Sunday service. Thank you!_`;

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

function renderGearIssues() {
  const container = document.getElementById("gearIssuesList");
  const badge = document.getElementById("adminGearIssueBadge");
  const openCountBadge = document.getElementById("gearOpenCountBadge");
  populateGearReportVolunteers();

  if (!appState.gearIssues) {
    appState.gearIssues = [];
  }

  const openCount = appState.gearIssues.filter(i => i.status !== "Resolved").length;
  if (badge) badge.textContent = openCount;
  if (openCountBadge) openCountBadge.textContent = `${openCount} Open`;

  if (!container) return;

  let filtered = appState.gearIssues;
  if (currentGearFilter === "open") {
    filtered = filtered.filter(i => i.status === "Open");
  } else if (currentGearFilter === "progress") {
    filtered = filtered.filter(i => i.status === "In Progress");
  } else if (currentGearFilter === "resolved") {
    filtered = filtered.filter(i => i.status === "Resolved");
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted); background: rgba(15, 23, 42, 0.4); border-radius: 8px;">
        <span style="font-size: 2rem; display: block; margin-bottom: 8px;">🎉</span>
        <strong style="font-size: 0.95rem;">No equipment issues logged in this view!</strong>
        <p style="font-size: 0.8rem; margin-top: 4px;">All media gear is in top shape or no matching issues found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(issue => {
    let urgencyClass = "urgency-medium";
    let urgencyChipClass = "chip-medium";
    if (issue.urgency === "Critical") {
      urgencyClass = "urgency-critical";
      urgencyChipClass = "chip-critical";
    } else if (issue.urgency === "Low") {
      urgencyClass = "urgency-low";
      urgencyChipClass = "chip-low";
    }

    let statusChipStyle = "background: #2563eb; color: #fff;";
    if (issue.status === "In Progress") {
      statusChipStyle = "background: #d97706; color: #fff;";
    } else if (issue.status === "Resolved") {
      statusChipStyle = "background: #059669; color: #fff;";
    }

    const isResolved = issue.status === "Resolved";

    return `
      <div class="gear-issue-card ${urgencyClass} ${isResolved ? 'status-resolved' : ''}">
        <div class="gear-card-top">
          <div class="gear-card-title-wrap">
            <span class="gear-urgency-chip ${urgencyChipClass}">${issue.urgency}</span>
            <span class="gear-card-item-title">${issue.item}</span>
            <span class="gear-status-chip" style="${statusChipStyle}">${issue.status}</span>
          </div>
          <div class="gear-card-meta">
            📅 ${issue.date} &bull; Reported by <strong class="gear-reporter-name">${issue.reporter}</strong>
          </div>
        </div>

        <div class="gear-card-desc">
          ${issue.desc}
        </div>

        <div class="gear-card-actions">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" onclick="toggleGearIssueStatus(${issue.id})" title="Click to cycle status: Open -> In Progress -> Resolved">
              🔄 Status: <strong>${issue.status}</strong>
            </button>
            <button class="btn btn-whatsapp btn-sm" onclick="sendGearIssueWhatsApp(${issue.id})" title="Send WhatsApp alert to Yashwanth (7010368793)">
              💬 Alert Incharge (Yashwanth)
            </button>
          </div>
          <button class="btn btn-secondary btn-sm" style="color: #ef4444;" onclick="deleteGearIssue(${issue.id})" title="Delete issue">
            🗑️ Delete
          </button>
        </div>
      </div>
    `;
  }).join("");
}
