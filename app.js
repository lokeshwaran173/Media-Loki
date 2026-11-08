// FLAG Church - Indoor Media Application Logic

// Initial Default State
const defaultState = {
  month: "October 2026",
  members: [
    { name: "Lokesh", role: "Leader & Gimble" },
    { name: "Balaji", role: "Camera 1 & 2" },
    { name: "Shyam Davit", role: "Gimble & Live System" },
    { name: "Sam Davit", role: "Charging Incharge" },
    { name: "Anand", role: "Live in System" },
    { name: "Yashwanth", role: "Live in System & Charging", phone: "7010368793" },
    { name: "Andrew", role: "Camera 1 & 3rd Service" },
    { name: "Franklin", role: "Camera 1 & 3rd Service" },
    { name: "Joshua", role: "Spot Editing" },
    { name: "Praveen", role: "2nd Service Cam & Live" }
  ],
  firstService: [
    { id: 1, date: "04 Oct 2026", cam1: "Balaji", cam2: "Lokesh", gimble: "Shyam Davit", live: "Anand", spot: "Joshua", charging: "Yashwanth & Sam Davit" },
    { id: 2, date: "11 Oct 2026", cam1: "Andrew & Franklin", cam2: "Shyam Davit", gimble: "Lokesh", live: "Yashwanth", spot: "Joshua", charging: "Yashwanth & Sam Davit" },
    { id: 3, date: "18 Oct 2026", cam1: "Yashwanth", cam2: "Balaji", gimble: "Lokesh", live: "Shyam Davit", spot: "Joshua", charging: "Yashwanth & Sam Davit" },
    { id: 4, date: "25 Oct 2026", cam1: "Balaji & Andrew", cam2: "Anand", gimble: "Lokesh", live: "Yashwanth", spot: "Joshua", charging: "Yashwanth & Sam Davit" }
  ],
  secondService: [
    { id: 1, date: "04 Oct 2026", operator: "Praveen" },
    { id: 2, date: "11 Oct 2026", operator: "Praveen" },
    { id: 3, date: "18 Oct 2026", operator: "Praveen" },
    { id: 4, date: "25 Oct 2026", operator: "Praveen" }
  ],
  thirdService: [
    { id: 1, date: "04 Oct 2026", operator: "Andrew" },
    { id: 2, date: "11 Oct 2026", operator: "Andrew" },
    { id: 3, date: "18 Oct 2026", operator: "Franklin" },
    { id: 4, date: "25 Oct 2026", operator: "Franklin" }
  ],
  fridayPrayer: [
    { id: 1, date: "02 Oct 2026", cam1: "Balaji", live: "Anand" },
    { id: 2, date: "09 Oct 2026", cam1: "Shyam Davit", live: "Yashwanth" },
    { id: 3, date: "16 Oct 2026", cam1: "Franklin", live: "Sam Davit" },
    { id: 4, date: "23 Oct 2026", cam1: "Andrew", live: "Lokesh" },
    { id: 5, date: "30 Oct 2026", cam1: "Balaji", live: "Shyam Davit" }
  ],
  specialMeetings: [
    { id: 1, title: "All-Night Miracle Service", date: "31 Oct 2026", cam1: "Balaji", cam2: "Lokesh", gimble: "Shyam Davit", live: "Anand", spot: "Joshua" }
  ],
  morningPrayer: {
    enabled: false,
    title: "21 Days Early Morning Prayer",
    days: [
      { id: 1, day: "Monday", cam1: "Balaji", cam2: "Franklin", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 2, day: "Tuesday", cam1: "Andrew", cam2: "Sam Davit", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 3, day: "Wednesday", cam1: "Franklin", cam2: "Balaji", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 4, day: "Thursday", cam1: "Andrew", cam2: "Franklin", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 5, day: "Friday", cam1: "Balaji", cam2: "Sam Davit", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 6, day: "Saturday", cam1: "Yashwanth", cam2: "Andrew", gimbal: "Shyam Davit", liveEditor: "Praveen", socialMedia: "Joshua" }
    ]
  },
  checklists: [
    {
      id: "cam-clean",
      title: "1. Camera Cleaning",
      assignedTo: "Camera Operators",
      items: [
        { id: "c1", text: "Clean lens glass with air blower first (remove dust grit)", done: false },
        { id: "c2", text: "Wipe lens with optical fluid & microfiber in circular motion", done: false },
        { id: "c3", text: "Clean LCD viewfinders & flip monitors", done: false },
        { id: "c4", text: "Wipe tripod legs, check fluid head pan/tilt locks", done: false },
        { id: "c5", text: "Reattach lens caps after service pack-down", done: false }
      ]
    },
    {
      id: "sys-clean",
      title: "2. System Cleaning",
      assignedTo: "Live System Operators",
      items: [
        { id: "s1", text: "Verify recording hard drive space has > 50 GB free", done: false },
        { id: "s2", text: "Clear OBS / vMix temporary cache and replay buffers", done: false },
        { id: "s3", text: "Restart streaming computer 60 mins before service", done: false },
        { id: "s4", text: "Verify Windows auto-updates are paused", done: false },
        { id: "s5", text: "Dust PC tower fans and inspect rear USB/HDMI cables", done: false }
      ]
    },
    {
      id: "eq-charge",
      title: "3. Equipment Charging",
      assignedTo: "Yashwanth & Sam Davit",
      items: [
        { id: "e1", text: "Charge all camera main batteries to 100% (Saturday evening)", done: false },
        { id: "e2", text: "Pack at least 3-4 fully charged spare camera batteries", done: false },
        { id: "e3", text: "Charge 3-axis motorized Gimbal handle to 100%", done: false },
        { id: "e4", text: "Charge director field monitors & wireless video transmitters", done: false },
        { id: "e5", text: "Verify media desk UPS power strip is switched on", done: false }
      ]
    },
    {
      id: "mic-battery",
      title: "4. Recharge the Mic Batteries",
      assignedTo: "Charging Incharge & Audio Tech",
      items: [
        { id: "m1", text: "Insert fresh 100% batteries into pastor's lapel/headset transmitter", done: false },
        { id: "m2", text: "Check battery indicators on all stage wireless handheld mics", done: false },
        { id: "m3", text: "Verify emergency 8-pack fresh AA batteries is at media desk", done: false },
        { id: "m4", text: "Confirm receiver displays solid green RF and full battery bars", done: false },
        { id: "m5", text: "Test audio signal on headphones for zero hiss or dropouts", done: false }
      ]
    },
    {
      id: "outside-tv",
      title: "5. Set up Outside TV & Check Live Stream Working Properly",
      assignedTo: "Assigned Floater / Tech",
      items: [
        { id: "t1", text: "Power on outside TV in porch / lobby", done: false },
        { id: "t2", text: "Connect HDMI / wireless stream receiver securely", done: false },
        { id: "t3", text: "Tape down outdoor cables firmly to prevent tripping hazard", done: false },
        { id: "t4", text: "Verify video feed is sharp 1080p without buffering stutter", done: false },
        { id: "t5", text: "Calibrate outdoor speaker volume during worship soundcheck", done: false },
        { id: "t6", text: "Mid-service check: verify TV is active 15 mins into sermon", done: false }
      ]
    },
    {
      id: "live-procedure",
      title: "6. Sunday Service Live Procedure",
      assignedTo: "Team Leader & All Crew",
      items: [
        { id: "p1", text: "05:30 AM: Team arrival & 5-minute pre-service prayer", done: false },
        { id: "p2", text: "07:15 AM: Power on switchers, PCs, cameras, and Outside TV", done: false },
        { id: "p3", text: "07:30 AM: Match camera white balance (4500K-5600K) & lock focus", done: false },
        { id: "p4", text: "07:45 AM: Soundcheck broadcast audio levels (-18 to -12 dBFS)", done: false },
        { id: "p5", text: "08:00 AM: Load sermon notes & test lyric lower-third overlays", done: false },
        { id: "p6", text: "08:15 AM: Start YouTube countdown stream with music loop", done: false },
        { id: "p7", text: "Post-Service: Stop stream ➔ Stop local recording ➔ Verify SSD file", done: false },
        { id: "p8", text: "Post-Service: Transfer raw file to Joshua & pack down equipment", done: false }
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
  ]
};

let appState = null;
let isAdminLoggedIn = false;

// ================= ADMIN CONSOLE CONTROLS & SECURITY =================
function handleAdminNavClick(btn) {
  if (isAdminLoggedIn) {
    switchView("adminView", btn);
  } else {
    document.getElementById("adminPinInput").value = "";
    document.getElementById("adminPinModal").classList.add("show");
    setTimeout(() => document.getElementById("adminPinInput").focus(), 100);
  }
}

function closeAdminPinModal() {
  document.getElementById("adminPinModal").classList.remove("show");
}

function unlockAdminWithPin() {
  const pinEntered = document.getElementById("adminPinInput").value.trim();
  const currentPin = appState.adminPin || "1234";

  if (pinEntered === currentPin) {
    isAdminLoggedIn = true;
    closeAdminPinModal();
    updateAdminNavUI();

    const adminBtn = document.getElementById("adminNavBtn");
    switchView("adminView", adminBtn);
    showToast("👑 Admin Console Unlocked! Welcome Lokesh.");
  } else {
    alert("Incorrect Admin PIN. Please try again.");
    document.getElementById("adminPinInput").select();
  }
}

function lockAdminConsole() {
  isAdminLoggedIn = false;
  updateAdminNavUI();
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
    text.textContent = window.innerWidth <= 480 ? "Admin 🔓" : "Admin (Unlocked)";
  } else {
    btn.classList.remove("active");
    text.textContent = "Admin Console";
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
  const currentPin = appState.adminPin || "1234";

  if (oldPin !== currentPin) {
    alert("Current PIN does not match. Cannot change PIN.");
    return;
  }
  if (!newPin || newPin.length < 3) {
    alert("New PIN must be at least 3 digits.");
    return;
  }

  appState.adminPin = newPin;
  saveState();
  closeChangePinModal();
  showToast("Admin PIN updated successfully!");
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

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkUrlForRosterSync();
  loadState();
  initCalendarSelectors();
  initCloudSync();
  renderAll();
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

  // Ensure specialMeetings and morningPrayer exist
  if (!appState.specialMeetings) {
    appState.specialMeetings = [
      { id: 1, title: "All-Night Miracle Service", date: "31 Oct 2026", cam1: "Balaji", cam2: "Lokesh", gimble: "Shyam Davit", live: "Anand", spot: "Joshua" }
    ];
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

  // Auto-sync checklist p1 arrival time if still on old 07:00 AM
  if (appState.checklists) {
    appState.checklists.forEach(cl => {
      if (cl.id === "live-procedure" && cl.items) {
        cl.items.forEach(i => {
          if (i.id === "p1" && i.text && i.text.includes("07:00 AM")) {
            i.text = "05:30 AM: Team arrival & 5-minute pre-service prayer";
          }
        });
      }
    });
  }

  // Cleanse any old Day 1, Day 2 rows into the clean Monday - Saturday roster
  const hasDayNumbers = appState.morningPrayer.days && appState.morningPrayer.days.some(d => /^Day\s*\d+/i.test(d.day));
  if (!appState.morningPrayer.days || appState.morningPrayer.days.length === 0 || hasDayNumbers) {
    appState.morningPrayer.days = [
      { id: 1, day: "Monday", cam1: "Balaji", cam2: "Franklin", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 2, day: "Tuesday", cam1: "Andrew", cam2: "Sam Davit", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 3, day: "Wednesday", cam1: "Franklin", cam2: "Balaji", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 4, day: "Thursday", cam1: "Andrew", cam2: "Franklin", gimbal: "Shyam Davit", liveEditor: "Yashwanth", socialMedia: "Joshua" },
      { id: 5, day: "Friday", cam1: "Balaji", cam2: "Sam Davit", gimbal: "Lokesh", liveEditor: "Anand", socialMedia: "Joshua" },
      { id: 6, day: "Saturday", cam1: "Yashwanth", cam2: "Andrew", gimbal: "Shyam Davit", liveEditor: "Praveen", socialMedia: "Joshua" }
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

  // Auto-sync Yashwanth's phone number & unified spelling in appState.members
  if (appState && appState.members) {
    appState.members.forEach(m => {
      if (m.name === "Yashwant") {
        renameMemberAcrossSchedules("Yashwant", "Yashwanth");
        m.name = "Yashwanth";
      }
      if (m.name.toLowerCase() === "yashwanth" || m.name.toLowerCase() === "yashwant") {
        m.phone = "7010368793";
      }
    });
  }

  saveState();
}

function saveState(skipCloud = false) {
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
    saveToCloud(appState);
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
  if (confirm(`Automatically re-generate all Sunday and Friday dates for ${getMonthName(appState.selectedMonth)} ${appState.selectedYear}?`)) {
    generateScheduleForMonth(appState.selectedYear, appState.selectedMonth);
    saveState();
    renderAll();
    showToast(`Re-generated all dates for ${getMonthName(appState.selectedMonth)}!`);
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
  appState[serviceType][index][field] = pairName;

  saveState();
  closePairModal();
  renderAll();
  showToast(`Assigned ${pairName}!`);
}

// Helper to format clean names on Public Roster (Highlights selected volunteer with glowing amber)
function badgeForName(name) {
  if (!name || name.trim() === "" || name.trim() === "-") {
    return `<span class="roster-empty">&mdash;</span>`;
  }
  const isPersonal = window.currentVolunteerFilter && 
    name.toLowerCase().includes(window.currentVolunteerFilter.toLowerCase());
  const highlightClass = isPersonal ? " roster-highlight-personal" : "";

  if (name.includes("&")) {
    return `<span class="roster-name roster-pair${highlightClass}"><span class="roster-icon">👥</span><span>${name}</span></span>`;
  }
  return `<span class="roster-name${highlightClass}"><span>${name}</span></span>`;
}

// ================= RENDER PUBLIC READ-ONLY SCHEDULE (VOLUNTEER VIEW) =================
function renderPublicSchedule() {
  // 1st Service Public
  const t1 = document.getElementById("publicTbody1stService");
  if (t1) {
    t1.innerHTML = "";
    (appState.firstService || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-blue">${r.date}</span></td>
        <td>${badgeForName(r.cam1)}</td>
        <td>${badgeForName(r.cam2)}</td>
        <td>${badgeForName(r.gimble)}</td>
        <td>${badgeForName(r.live)}</td>
        <td>${badgeForName(r.spot)}</td>
        <td>${badgeForName(r.charging)}</td>
      `;
      t1.appendChild(tr);
    });
  }

  // 2nd Service Public
  const t2 = document.getElementById("publicTbody2ndService");
  if (t2) {
    t2.innerHTML = "";
    (appState.secondService || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-amber">${r.date}</span></td>
        <td>${badgeForName(r.operator)}</td>
      `;
      t2.appendChild(tr);
    });
  }

  // 3rd Service Public
  const t3 = document.getElementById("publicTbody3rdService");
  if (t3) {
    t3.innerHTML = "";
    (appState.thirdService || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-purple">${r.date}</span></td>
        <td>${badgeForName(r.operator)}</td>
      `;
      t3.appendChild(tr);
    });
  }

  // Friday Fasting Public
  const tf = document.getElementById("publicTbodyFridayService");
  if (tf) {
    tf.innerHTML = "";
    (appState.fridayPrayer || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="date-chip date-chip-emerald">${r.date}</span></td>
        <td>${badgeForName(r.cam1)}</td>
        <td>${badgeForName(r.live)}</td>
      `;
      tf.appendChild(tr);
    });
  }

  // Special Meetings Public
  const ts = document.getElementById("publicTbodySpecialMeetings");
  if (ts) {
    ts.innerHTML = "";
    (appState.specialMeetings || []).forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong style="color: #67e8f9; font-weight: 700;">🌟 ${r.title}</strong></td>
        <td><span class="date-chip date-chip-purple">${r.date}</span></td>
        <td>${badgeForName(r.cam1)}</td>
        <td>${badgeForName(r.cam2)}</td>
        <td>${badgeForName(r.gimble)}</td>
        <td>${badgeForName(r.live)}</td>
        <td>${badgeForName(r.spot)}</td>
      `;
      ts.appendChild(tr);
    });
  }

  // Early Morning Prayer Public (Only shown if enabled)
  const publicMorningCard = document.getElementById("publicMorningPrayerCard");
  const isMorningPrayerActive = !!(appState.morningPrayer && appState.morningPrayer.enabled);
  if (publicMorningCard) {
    publicMorningCard.style.display = isMorningPrayerActive ? "block" : "none";
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
  render1stService();
  render2ndService();
  render3rdService();
  renderFridayService();
  renderSpecialMeetings();
  renderMorningPrayer();
  renderMembers();
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

// Generate Clean Dropdown Options (Members Only + On-Demand Pair Option)
function getMemberOptions(selectedVal) {
  let html = `<option value="">-- Select Member --</option>`;

  // 1. List individual members
  appState.members.forEach(m => {
    const isSel = (m.name === selectedVal) ? "selected" : "";
    html += `<option value="${m.name}" ${isSel}>${m.name}</option>`;
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
  updateRole(serviceType, index, field, value);
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
        <select class="role-select" onchange="onScheduleDropdownChange('firstService', ${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'firstService', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('firstService', ${index}, 'cam2', this.value)">
          ${getMemberOptions(row.cam2, 'firstService', index, 'cam2')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('firstService', ${index}, 'gimble', this.value)">
          ${getMemberOptions(row.gimble, 'firstService', index, 'gimble')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('firstService', ${index}, 'live', this.value)">
          ${getMemberOptions(row.live, 'firstService', index, 'live')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('firstService', ${index}, 'spot', this.value)">
          ${getMemberOptions(row.spot, 'firstService', index, 'spot')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('firstService', ${index}, 'charging', this.value)">
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
        <select class="role-select" onchange="onScheduleDropdownChange('secondService', ${index}, 'operator', this.value)">
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
        <select class="role-select" onchange="onScheduleDropdownChange('thirdService', ${index}, 'operator', this.value)">
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
        <select class="role-select" onchange="onScheduleDropdownChange('fridayPrayer', ${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'fridayPrayer', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('fridayPrayer', ${index}, 'live', this.value)">
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

// ================= RENDER SPECIAL MEETINGS =================
function renderSpecialMeetings() {
  const tbody = document.getElementById("tbodySpecialMeetings");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!appState.specialMeetings) appState.specialMeetings = [];

  appState.specialMeetings.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <input type="text" class="input-text" style="width: 100%; font-weight: 600;" placeholder="Meeting Name (e.g. Anointing Night)" value="${row.title || ''}" onchange="updateSpecialMeeting(${index}, 'title', this.value)">
      </td>
      <td>
        <input type="text" class="input-text" style="width: 110px;" value="${row.date || ''}" placeholder="Date" onchange="updateSpecialMeeting(${index}, 'date', this.value)">
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1, 'specialMeetings', index, 'cam1')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'cam2', this.value)">
          ${getMemberOptions(row.cam2, 'specialMeetings', index, 'cam2')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'gimble', this.value)">
          ${getMemberOptions(row.gimble, 'specialMeetings', index, 'gimble')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'live', this.value)">
          ${getMemberOptions(row.live, 'specialMeetings', index, 'live')}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="onScheduleDropdownChange('specialMeetings', ${index}, 'spot', this.value)">
          ${getMemberOptions(row.spot, 'specialMeetings', index, 'spot')}
        </select>
      </td>
      <td>
        <button class="btn-icon-del" onclick="removeSpecialMeeting(${index})" title="Delete Special Meeting">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function addSpecialMeetingRow() {
  if (!appState.specialMeetings) appState.specialMeetings = [];
  appState.specialMeetings.push({
    id: Date.now(),
    title: "Special Meeting",
    date: "Date",
    cam1: "",
    cam2: "",
    gimble: "",
    live: "",
    spot: ""
  });
  saveState();
  renderSpecialMeetings();
  populateWhatsAppDateSelect();
  updateWhatsAppPreview();
  showToast("Added new special meeting slot!");
}

function updateSpecialMeeting(index, field, value) {
  appState.specialMeetings[index][field] = value;
  saveState();
  updateWhatsAppPreview();
}

function removeSpecialMeeting(index) {
  if (confirm("Remove this special meeting?")) {
    appState.specialMeetings.splice(index, 1);
    saveState();
    renderSpecialMeetings();
    populateWhatsAppDateSelect();
    updateWhatsAppPreview();
    showToast("Special meeting removed.");
  }
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

  // Auto-sync checklist p1 arrival time if still on old 07:00 AM
  if (appState.checklists) {
    appState.checklists.forEach(cl => {
      if (cl.id === "live-procedure" && cl.items) {
        cl.items.forEach(i => {
          if (i.id === "p1" && i.text && i.text.includes("07:00 AM")) {
            i.text = "05:30 AM: Team arrival & 5-minute pre-service prayer";
          }
        });
      }
    });
  }

  // Update Status Badge & Toggle Button in Admin Console
  const isEnabled = appState.morningPrayer.enabled;
  if (statusBadge) {
    if (isEnabled) {
      statusBadge.className = "header-tag tag-emerald";
      statusBadge.textContent = "🟢 Active & Visible on Public Roster";
    } else {
      statusBadge.className = "header-tag tag-amber";
      statusBadge.textContent = "🔴 Inactive (Hidden on Public Roster)";
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
        <select class="role-select" onchange="updateMorningPrayerRole(${index}, 'cam1', this.value)">
          ${getMemberOptions(row.cam1)}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="updateMorningPrayerRole(${index}, 'cam2', this.value)">
          ${getMemberOptions(row.cam2)}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="updateMorningPrayerRole(${index}, 'gimbal', this.value)">
          ${getMemberOptions(row.gimbal)}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="updateMorningPrayerRole(${index}, 'liveEditor', this.value)">
          ${getMemberOptions(row.liveEditor)}
        </select>
      </td>
      <td>
        <select class="role-select" onchange="updateMorningPrayerRole(${index}, 'socialMedia', this.value)">
          ${getMemberOptions(row.socialMedia)}
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
    showToast("🟢 Early Morning Prayer is now VISIBLE on the public roster!");
  } else {
    showToast("🔴 Early Morning Prayer is now HIDDEN from the public roster.");
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
  if (confirm("Reset roster to standard Monday through Saturday (6 days)?")) {
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
    showToast("Reset to Monday - Saturday!");
  }
}

function updateMorningPrayer(index, field, value) {
  appState.morningPrayer.days[index][field] = value;
  saveState();
  renderPublicSchedule();
  updateWhatsAppPreview();
}

function updateMorningPrayerRole(index, field, value) {
  if (value === "__custom_pair__") {
    modalTargetContext = { serviceType: "morningPrayer", index, field };
    openPairModal("morningPrayer", index, field);
    return;
  }
  appState.morningPrayer.days[index][field] = value;
  saveState();
  renderPublicSchedule();
  updateWhatsAppPreview();
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
    appState.morningPrayer.days.splice(index, 1);
    saveState();
    renderAll();
    showToast("Day removed.");
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
  appState[serviceType][index].date = value;
  saveState();
}

function updateMonthTitle(val) {
  appState.month = val;
  saveState();
}

// Add New Sunday Row across 1st, 2nd, and 3rd service
function addNewSundayRow() {
  const newDate = prompt("Enter the new Sunday date (e.g. 01 Nov 2026):", "01 Nov 2026");
  if (!newDate) return;

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
  render1stService();
  render2ndService();
  render3rdService();
  showToast(`Added Sunday ${newDate} to schedule!`);
}

// Add New Friday Row
function addNewFridayRow() {
  const newDate = prompt("Enter the new Friday date (e.g. 06 Nov 2026):", "06 Nov 2026");
  if (!newDate) return;

  appState.fridayPrayer.push({
    id: Date.now(),
    date: newDate,
    cam1: "",
    live: ""
  });

  saveState();
  renderFridayService();
  showToast(`Added Friday ${newDate}!`);
}

// Remove Row
function removeRow(serviceType, index) {
  if (confirm("Remove this date from the schedule?")) {
    appState[serviceType].splice(index, 1);
    saveState();
    if (serviceType === 'firstService') render1stService();
    if (serviceType === 'secondService') render2ndService();
    if (serviceType === 'thirdService') render3rdService();
    if (serviceType === 'fridayPrayer') renderFridayService();
    showToast("Date removed.");
  }
}

// ================= MEMBERS MANAGER =================
function calculateMemberShifts(name) {
  let count = 0;
  if (!name) return 0;

  // 1st Service
  (appState.firstService || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot', 'charging'].forEach(field => {
      if (r[field] && r[field].includes(name)) count++;
    });
  });

  // 2nd Service
  (appState.secondService || []).forEach(r => {
    if (r.operator && r.operator.includes(name)) count++;
  });

  // 3rd Service
  (appState.thirdService || []).forEach(r => {
    if (r.operator && r.operator.includes(name)) count++;
  });

  // Friday Fasting
  (appState.fridayPrayer || []).forEach(r => {
    if (r.cam1 && r.cam1.includes(name)) count++;
    if (r.live && r.live.includes(name)) count++;
  });

  // Special Meetings
  (appState.specialMeetings || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot'].forEach(field => {
      if (r[field] && r[field].includes(name)) count++;
    });
  });

  // Early Morning Prayer (only count if seasonal schedule is active)
  if (appState.morningPrayer && appState.morningPrayer.enabled && appState.morningPrayer.days) {
    appState.morningPrayer.days.forEach(r => {
      ['cam1', 'cam2', 'gimbal', 'liveEditor', 'socialMedia'].forEach(field => {
        if (r[field] && r[field].includes(name)) count++;
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

  appState.members.forEach((m, idx) => {
    const card = document.createElement("div");
    card.className = "member-card";
    const initials = m.name.split(" ").map(n => n[0]).join("").toUpperCase();
    const shiftCount = calculateMemberShifts(m.name);
    const gradIndex = Math.abs(m.name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % avatarGradients.length;
    const avatarBg = avatarGradients[gradIndex];

    let shiftBadgeClass = "tag-blue";
    if (shiftCount === 0) shiftBadgeClass = "tag-amber";
    if (shiftCount >= 4) shiftBadgeClass = "tag-purple";

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
        <div class="member-avatar" style="background: ${avatarBg};">${initials}</div>
        <div class="member-info" style="min-width: 0;">
          <h4 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.name}</h4>
          <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.role || 'Media Volunteer'}</p>
          ${m.phone ? `
            <div style="margin-top: 3px;">
              <span style="font-size: 0.72rem; color: #4ade80; font-family: var(--font-mono); font-weight: 700; background: rgba(34, 197, 94, 0.12); padding: 1px 6px; border-radius: 4px; border: 1px solid rgba(34, 197, 94, 0.28); display: inline-flex; align-items: center; gap: 4px;">
                📱 ${m.phone}
              </span>
            </div>
          ` : ''}
          <span class="header-tag ${shiftBadgeClass}" style="font-size: 0.7rem; padding: 2px 8px; margin-top: 4px; display: inline-block;">
            ${shiftCount} ${shiftCount === 1 ? 'Shift' : 'Shifts'} this month
          </span>
        </div>
      </div>
      <div style="display: flex; gap: 4px; align-items: center; flex-shrink: 0;">
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

// Edit Member Modal State & Handlers
let editingMemberIdx = -1;

function openEditMemberModal(idx) {
  if (!appState.members || !appState.members[idx]) return;
  editingMemberIdx = idx;
  const m = appState.members[idx];

  const nameInput = document.getElementById("editMemberName");
  const roleInput = document.getElementById("editMemberRole");
  const phoneInput = document.getElementById("editMemberPhone");

  if (nameInput) nameInput.value = m.name || "";
  if (roleInput) roleInput.value = m.role || "";
  if (phoneInput) phoneInput.value = m.phone || "";

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
  const newName = nameInput.value.trim();
  const newRole = roleInput.value.trim() || "Media Volunteer";
  const newPhone = phoneInput ? phoneInput.value.trim() : "";
  const oldName = appState.members[editingMemberIdx].name;

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
  saveState();
  closeEditMemberModal();
  renderAll();
  showToast(`Updated ${newName}'s details and synced schedules!`);
}

// Cascade Rename Helper: updates member name across all active and archived schedules
function renameMemberAcrossSchedules(oldName, newName) {
  function replaceInSlot(val) {
    if (!val || typeof val !== "string") return val;
    if (val === oldName) return newName;
    if (val.includes(" & ")) {
      const parts = val.split(" & ");
      const updated = parts.map(p => p.trim() === oldName ? newName : p);
      return updated.join(" & ");
    }
    return val;
  }

  // 1st Service
  (appState.firstService || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot', 'charging'].forEach(f => {
      r[f] = replaceInSlot(r[f]);
    });
  });

  // 2nd Service
  (appState.secondService || []).forEach(r => {
    r.operator = replaceInSlot(r.operator);
  });

  // 3rd Service
  (appState.thirdService || []).forEach(r => {
    r.operator = replaceInSlot(r.operator);
  });

  // Friday Fasting
  (appState.fridayPrayer || []).forEach(r => {
    r.cam1 = replaceInSlot(r.cam1);
    r.live = replaceInSlot(r.live);
  });

  // Special Meetings
  (appState.specialMeetings || []).forEach(r => {
    ['cam1', 'cam2', 'gimble', 'live', 'spot'].forEach(f => {
      r[f] = replaceInSlot(r[f]);
    });
  });

  // Early Morning Prayer
  if (appState.morningPrayer && appState.morningPrayer.days) {
    appState.morningPrayer.days.forEach(r => {
      ['cam1', 'cam2', 'gimbal', 'liveEditor', 'socialMedia'].forEach(f => {
        r[f] = replaceInSlot(r[f]);
      });
    });
  }

  // Multi-month archives
  if (appState.schedules) {
    Object.keys(appState.schedules).forEach(key => {
      const sch = appState.schedules[key];
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

  appState.members.push({ name, role: role || "Media Crew", phone });
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
  const title = document.getElementById("newCatTitle").value.trim();
  const incharge = document.getElementById("newCatIncharge").value.trim() || "Assigned Crew";

  if (!title) {
    alert("Please enter a category title (e.g. 7. Stage Lighting).");
    return;
  }

  const newCl = {
    id: "cl-" + Date.now(),
    title: title,
    assignedTo: incharge,
    items: []
  };

  appState.checklists.push(newCl);
  saveState();

  document.getElementById("newCatTitle").value = "";
  document.getElementById("newCatIncharge").value = "";
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
  setActiveWeekDate(date);
}

function setActiveWeekDate(date) {
  appState.activeWeekDate = date;
  appState.selectedChecklistWeek = date;

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

  saveState();
  renderChecklists();
  updateBadges();

  const weeks = getServiceWeeks();
  const wObj = weeks.find(w => w.date === date);
  const wName = wObj ? wObj.label : date;
  showToast(`Checklist set to ${wName}!`);
}

function renderChecklists() {
  const container = document.getElementById("checklistsContainer");
  const adminContainer = document.getElementById("adminChecklistsContainer");

  const weeks = getServiceWeeks();
  const activeDate = getActiveWeekDate();
  const activeWeekObj = weeks.find(w => w.date === activeDate) || weeks[0];

  // 1. Calculate stats for the active week
  const checks = (appState.weeklyChecks && appState.weeklyChecks[activeDate]) || {};
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

  // 2. Update Public Weekly Banner DOM elements
  const bannerTitle = document.getElementById("activeWeekBannerTitle");
  if (bannerTitle) {
    bannerTitle.textContent = `📅 Sunday Checklist: ${activeWeekObj.label}`;
  }

  const liveBadgeText = document.getElementById("weekLiveBadgeText");
  if (liveBadgeText) {
    liveBadgeText.textContent = "SERVICE IN PROGRESS";
  }

  const bannerSub = document.getElementById("activeWeekBannerSub");
  if (bannerSub) {
    bannerSub.textContent = `Sunday operational checklists for ${activeWeekObj.label}. Volunteers can check off completed tasks during service. Week is configured in Admin Console.`;
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

  // 4. Update Admin Controls
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
    if (cl.items) {
      cl.items.forEach(i => {
        if (checks[i.id]) completed++;
      });
    }
    const catPct = total === 0 ? 0 : Math.round((completed / total) * 100);

    let taskHtml = "";
    if (cl.items) {
      cl.items.forEach(item => {
        const isDone = !!checks[item.id];
        taskHtml += `
          <div class="task-row ${isDone ? 'checked' : ''}">
            <div class="task-main" onclick="toggleCheckItem('${cl.id}', '${item.id}')">
              <input type="checkbox" ${isDone ? 'checked' : ''} onclick="event.stopPropagation(); toggleCheckItem('${cl.id}', '${item.id}')">
              <span class="task-text">${item.text}</span>
            </div>
            ${isAdmin ? `<button class="task-del-btn" onclick="deleteChecklistItem('${cl.id}', '${item.id}')" title="Delete this task">&times;</button>` : ''}
          </div>
        `;
      });
    }

    return `
      <div class="checklist-box">
        <div class="checklist-header">
          <div>
            <h3 class="checklist-title">${cl.title}</h3>
            <p class="checklist-assigned">👤 Incharge: ${cl.assignedTo}</p>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
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

  // 5. Render Public / Volunteer Checklists
  if (container) {
    container.innerHTML = "";
    if (appState.checklists) {
      appState.checklists.forEach(cl => {
        container.innerHTML += buildChecklistHtml(cl, false);
      });
    }
  }

  // 6. Render Admin Editable Checklists
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
  if (!appState.weeklyChecks) appState.weeklyChecks = {};
  if (!appState.weeklyChecks[viewDate]) appState.weeklyChecks[viewDate] = {};

  const currentStatus = !!appState.weeklyChecks[viewDate][itemId];
  appState.weeklyChecks[viewDate][itemId] = !currentStatus;

  // Also sync item.done if viewing active week for backward compatibility
  if (viewDate === getActiveWeekDate() && appState.checklists) {
    const cl = appState.checklists.find(c => c.id === clId);
    if (cl && cl.items) {
      const item = cl.items.find(i => i.id === itemId);
      if (item) item.done = appState.weeklyChecks[viewDate][itemId];
    }
  }

  saveState();
  renderChecklists();
  updateBadges();
}

function resetChecklists() {
  const viewDate = currentViewingWeekDate();
  const weeks = getServiceWeeks();
  const wObj = weeks.find(w => w.date === viewDate);
  const wName = wObj ? wObj.label : viewDate;

  if (confirm(`Reset all checklist items for ${wName}?\n\nAll tasks will be unchecked freshly.`)) {
    if (!appState.weeklyChecks) appState.weeklyChecks = {};
    appState.weeklyChecks[viewDate] = {};

    if (viewDate === getActiveWeekDate() && appState.checklists) {
      appState.checklists.forEach(cl => {
        if (cl.items) {
          cl.items.forEach(i => i.done = false);
        }
      });
    }

    saveState();
    renderChecklists();
    updateBadges();
    showToast(`Checklist reset to fresh for ${wName}.`);
  }
}

function markAllChecklistsDone() {
  const viewDate = currentViewingWeekDate();
  const weeks = getServiceWeeks();
  const wObj = weeks.find(w => w.date === viewDate);
  const wName = wObj ? wObj.label : viewDate;

  if (!appState.weeklyChecks) appState.weeklyChecks = {};
  if (!appState.weeklyChecks[viewDate]) appState.weeklyChecks[viewDate] = {};

  if (appState.checklists) {
    appState.checklists.forEach(cl => {
      if (cl.items) {
        cl.items.forEach(i => {
          appState.weeklyChecks[viewDate][i.id] = true;
          if (viewDate === getActiveWeekDate()) {
            i.done = true;
          }
        });
      }
    });
  }

  saveState();
  renderChecklists();
  updateBadges();
  showToast(`All items marked done for ${wName}!`);
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
    const weeks = getServiceWeeks();
    const wObj = weeks.find(w => w.date === activeDate);
    const wTag = wObj ? `(${wObj.shortLabel})` : '';
    heroProg.textContent = `${done}/${total} Tasks Done (${pct}%) ${wTag}`.trim();
  }
}

// ================= VIEW SWITCHER =================
function switchView(viewId, btn) {
  document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  document.getElementById(viewId).classList.add("active");
  btn.classList.add("active");
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
    (appState.specialMeetings || []).forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.title + " - " + r.date;
      opt.textContent = `${r.title} (${r.date})`;
      dateSelect.appendChild(opt);
    });
    if ((appState.specialMeetings || []).length === 0) {
      dateSelect.innerHTML = `<option value="">No Special Meetings</option>`;
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
    text += `📅 1ST SERVICE SCHEDULE\n`;
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
    text += `📅 2ND & 3RD SERVICE\n`;
    text += `══════════════════════════════\n`;
    appState.secondService.forEach((r, idx) => {
      const r3 = appState.thirdService[idx] || {};
      text += `• ${r.date}:\n`;
      text += `  - 2nd Service: ${r.operator || '-'}\n`;
      text += `  - 3rd Service: ${r3.operator || '-'}\n\n`;
    });

    text += `══════════════════════════════\n`;
    text += `🙏 FRIDAY FASTING PRAYER\n`;
    text += `══════════════════════════════\n`;
    appState.fridayPrayer.forEach(r => {
      text += `• ${r.date}: 1st Cam: ${r.cam1 || '-'} | Live: ${r.live || '-'}\n`;
    });

    // Append Special Meetings if any
    if (appState.specialMeetings && appState.specialMeetings.length > 0) {
      text += `\n══════════════════════════════\n`;
      text += `🌟 SPECIAL MEETINGS & CONFERENCES\n`;
      text += `══════════════════════════════\n`;
      appState.specialMeetings.forEach(r => {
        text += `• ${r.title} (${r.date}):\n`;
        text += `  - 1st Cam: ${r.cam1 || '-'} | 2nd Cam: ${r.cam2 || '-'}\n`;
        text += `  - Gimble: ${r.gimble || '-'} | Live: ${r.live || '-'} | Spot: ${r.spot || '-'}\n\n`;
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
    text += `🎥 INDOOR MEDIA TEAM - SUNDAY ROSTER\n\n`;
    text += `📅 Date: ${selectedDate}\n\n`;

    text += `══════════════════════════════\n`;
    text += `🌅 1ST SERVICE\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${s1.cam1 || '-'}\n`;
    text += `• 2nd Cam: ${s1.cam2 || '-'}\n`;
    text += `• Gimble: ${s1.gimble || '-'}\n`;
    text += `• Live in System: ${s1.live || '-'}\n`;
    text += `• Spot Editing: ${s1.spot || '-'}\n`;
    text += `• Camera & Battery Incharge: ${s1.charging || '-'}\n\n`;

    text += `══════════════════════════════\n`;
    text += `☀️ 2ND & 3RD SERVICE\n`;
    text += `══════════════════════════════\n`;
    text += `• 2nd Service: ${s2.operator || '-'}\n`;
    text += `• 3rd Service: ${s3.operator || '-'}\n\n`;

    text += `Let's serve with excellence and honor the Lord! 🙌`;
    return text;
  } else if (dayType === "friday") {
    // Friday Fasting Prayer
    const fRow = (appState.fridayPrayer || []).find(r => r.date === selectedDate) || {};

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🙏 FRIDAY FASTING PRAYER\n\n`;
    text += `📅 Date: ${selectedDate}\n\n`;

    text += `══════════════════════════════\n`;
    text += `🎥 MEDIA DUTY ROSTER\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${fRow.cam1 || '-'}\n`;
    text += `• Live in System: ${fRow.live || '-'}\n\n`;

    text += `Serving together for His glory! 🙌`;
    return text;
  } else if (dayType === "special") {
    // Special Meeting
    const spec = (appState.specialMeetings || []).find(r => (r.title + " - " + r.date) === selectedDate || r.title === selectedDate || r.date === selectedDate) || {};

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🌟 SPECIAL MEETING MEDIA ROSTER\n\n`;
    text += `📅 Meeting: ${spec.title || 'Special Meeting'}\n`;
    text += `📆 Date: ${spec.date || '-'}\n\n`;

    text += `══════════════════════════════\n`;
    text += `🎥 MEDIA CREW\n`;
    text += `══════════════════════════════\n`;
    text += `• 1st Cam: ${spec.cam1 || '-'}\n`;
    text += `• 2nd Cam: ${spec.cam2 || '-'}\n`;
    text += `• Gimble: ${spec.gimble || '-'}\n`;
    text += `• Live in System: ${spec.live || '-'}\n`;
    text += `• Spot Editing: ${spec.spot || '-'}\n\n`;

    text += `Serving together for His glory! 🙌`;
    return text;
  } else if (dayType === "morning") {
    // Early Morning Prayer
    if (!appState.morningPrayer || !appState.morningPrayer.enabled) {
      return "⚠️ Early Morning Prayer schedule is currently inactive.\nYou can turn it ON anytime from the Admin Console.";
    }
    const campaignTitle = (appState.morningPrayer && appState.morningPrayer.title) ? appState.morningPrayer.title : "Early Morning Prayer";
    const dayRow = (appState.morningPrayer && appState.morningPrayer.days ? appState.morningPrayer.days.find(r => r.day === selectedDate) : {}) || {};

    let text = `🕊️ FULL LIFE CENTRE AG CHURCH (FLAG)\n`;
    text += `🌅 EARLY MORNING PRAYER MEDIA ROSTER\n\n`;
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
      if (imported.firstService && imported.members) {
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
    return assigned.toLowerCase().includes(target);
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
        duties.push({
          date: r.date,
          service: '1st Service (English/Tamil)',
          serviceShort: '1st Service',
          role: rm.label,
          rawRole: rm.key,
          assignedText: r[rm.key],
          callTime: '05:30 AM',
          prayerTime: '05:45 AM',
          serviceStart: '06:30 AM',
          serviceEnd: '08:00 AM',
          colorTag: 'tag-blue'
        });
      }
    });
  });

  // 2nd Service
  (appState.secondService || []).forEach(r => {
    if (matches(r.operator)) {
      duties.push({
        date: r.date,
        service: '2nd Service (Tamil)',
        serviceShort: '2nd Service',
        role: '🎥 Camera & Live System',
        rawRole: 'operator',
        assignedText: r.operator,
        callTime: '08:00 AM',
        prayerTime: '08:15 AM',
        serviceStart: '08:45 AM',
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
        service: '3rd Service (English)',
        serviceShort: '3rd Service',
        role: '🎥 Camera & Live System',
        rawRole: 'operator',
        assignedText: r.operator,
        callTime: '10:30 AM',
        prayerTime: '10:45 AM',
        serviceStart: '11:15 AM',
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

  // Special Meetings
  (appState.specialMeetings || []).forEach(r => {
    const rolesMap = [
      { key: 'cam1', label: '🎥 1st Camera' },
      { key: 'cam2', label: '📹 2nd Camera' },
      { key: 'gimble', label: '🎯 Gimble Operator' },
      { key: 'live', label: '💻 Live in System' },
      { key: 'spot', label: '✂️ Spot Editing' }
    ];
    rolesMap.forEach(rm => {
      if (matches(r[rm.key])) {
        duties.push({
          date: r.date,
          service: `🌟 ${r.title || 'Special Meeting'}`,
          serviceShort: r.title || 'Special Meeting',
          role: rm.label,
          rawRole: rm.key,
          assignedText: r[rm.key],
          callTime: '30 mins before service',
          prayerTime: '15 mins before',
          serviceStart: 'TBD',
          serviceEnd: 'TBD',
          colorTag: 'tag-purple'
        });
      }
    });
  });

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
  if (!select) return;
  const currentVal = window.currentVolunteerFilter || select.value || "";

  // Get sorted unique member names
  const memberNames = (appState.members || []).map(m => m.name).sort((a, b) => a.localeCompare(b));
  
  let html = `<option value="">👤 Select Your Name...</option>`;
  memberNames.forEach(m => {
    const isSel = (m === currentVal) ? "selected" : "";
    html += `<option value="${escapeHtml(m)}" ${isSel}>${escapeHtml(m)}</option>`;
  });
  select.innerHTML = html;
}

function onVolunteerFilterChange(name, shouldScroll = true) {
  window.currentVolunteerFilter = name || "";
  const clearBtn = document.getElementById("clearVolunteerFilterBtn");
  const select = document.getElementById("volunteerFilterSelect");
  if (select && select.value !== window.currentVolunteerFilter) {
    select.value = window.currentVolunteerFilter;
  }

  const box = document.getElementById("volunteerPersonalBox");

  if (!window.currentVolunteerFilter) {
    if (clearBtn) clearBtn.style.display = "none";
    if (box) {
      box.style.display = "none";
      box.innerHTML = "";
    }
    renderPublicSchedule();
    return;
  }

  if (clearBtn) clearBtn.style.display = "inline-flex";
  const duties = getVolunteerDuties(window.currentVolunteerFilter);
  renderVolunteerPersonalBox(window.currentVolunteerFilter, duties);
  renderPublicSchedule();

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

function renderVolunteerPersonalBox(name, duties) {
  const box = document.getElementById("volunteerPersonalBox");
  if (!box) return;

  const memberObj = (appState.members || []).find(m => m.name.toLowerCase() === name.toLowerCase()) || { name, role: 'Media Volunteer' };
  const dutyCount = duties.length;

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
        ${duties.map(d => `
          <div class="volunteer-duty-item">
            <span class="duty-badge-time">⏰ Call: ${escapeHtml(d.callTime)}</span>
            <div class="duty-date">📅 ${escapeHtml(d.date)}</div>
            <div class="duty-service">${escapeHtml(d.service)}</div>
            <div class="duty-role">${escapeHtml(d.role)}</div>
            ${d.assignedText && d.assignedText.includes('&') ? `<div style="font-size: 0.76rem; color: #cbd5e1; margin-top: 2px;">👥 Paired with: <strong>${escapeHtml(d.assignedText)}</strong></div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  box.innerHTML = `
    <div class="volunteer-summary-header">
      <div class="volunteer-greeting">
        <div class="greeting-avatar">👤</div>
        <div>
          <h3 class="greeting-title">Hello, <span class="highlight-name">${escapeHtml(memberObj.name)}</span></h3>
          <p class="greeting-sub">
            <span class="header-tag tag-purple" style="font-size: 0.74rem; padding: 2px 7px;">${escapeHtml(memberObj.role || 'Media Crew')}</span>
            • 🎯 <strong>${dutyCount}</strong> ${dutyCount === 1 ? 'duty' : 'duties'} scheduled this month
          </p>
        </div>
      </div>
      <div class="volunteer-actions-row">
        <button class="btn btn-primary" style="padding: 8px 14px; font-size: 0.84rem; background: linear-gradient(135deg, #0284c7, #0369a1);" onclick="downloadVolunteerCalendar('${escapeQuotes(memberObj.name)}')">
          📅 Add to Calendar (.ics)
        </button>
        <button class="btn btn-warning" style="padding: 8px 14px; font-size: 0.84rem; background: linear-gradient(135deg, #d97706, #b45309);" onclick="openSwapRequestModal('${escapeQuotes(memberObj.name)}')">
          🔁 Request Swap
        </button>
        <button class="btn btn-whatsapp" style="padding: 8px 14px; font-size: 0.84rem;" onclick="shareMyScheduleWhatsApp('${escapeQuotes(memberObj.name)}')">
          💬 Share My Schedule
        </button>
      </div>
    </div>
    ${dutiesHtml}
  `;
  box.style.display = "block";
}

// Calendar Generator (.ics) with 60-min Pre-Call Alarms
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

  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const nowStamp = `${pad(now.getUTCFullYear())}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

  let icsEvents = [];
  duties.forEach((d, idx) => {
    // Parse call time
    let cleanTime = "08:00 AM";
    if (d.callTime) {
      const matchTime = d.callTime.match(/(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)/i);
      if (matchTime) cleanTime = matchTime[1];
    }
    const startObj = new Date(`${d.date} ${cleanTime}`);
    
    let dtStart = "";
    let dtEnd = "";
    if (!isNaN(startObj.getTime())) {
      const startLocal = `${pad(startObj.getFullYear())}${pad(startObj.getMonth() + 1)}${pad(startObj.getDate())}T${pad(startObj.getHours())}${pad(startObj.getMinutes())}00`;
      const endObj = new Date(startObj.getTime() + 2.5 * 60 * 60 * 1000); // 2.5 hours default
      const endLocal = `${pad(endObj.getFullYear())}${pad(endObj.getMonth() + 1)}${pad(endObj.getDate())}T${pad(endObj.getHours())}${pad(endObj.getMinutes())}00`;
      dtStart = startLocal;
      dtEnd = endLocal;
    } else {
      return; // Skip non-parseable entries
    }

    const uid = `flag-media-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 8)}@fulllifecentre.church`;
    const summary = `FLAG Media: ${d.role} (${d.serviceShort})`;
    const description = `Full Life Centre AG Church - Indoor Media Duty\\nService: ${d.service}\\nRole: ${d.role}\\nCall Time: ${d.callTime}\\nTeam Prayer: ${d.prayerTime || '15 mins before call'}\\nAssigned: ${d.assignedText || volunteer}\\n\\nPlease arrive promptly. God bless your ministry!`;

    icsEvents.push(`BEGIN:VEVENT
UID:${uid}
DTSTAMP:${nowStamp}
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${summary}
DESCRIPTION:${description}
LOCATION:Full Life Centre AG Church, Indoor Media Desk
STATUS:CONFIRMED
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:FLAG Media Call Time in 60 Mins
TRIGGER:-PT60M
END:VALARM
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:FLAG Media Call Time in 15 Mins
TRIGGER:-PT15M
END:VALARM
END:VEVENT`);
  });

  if (icsEvents.length === 0) {
    showToast(`Could not format calendar dates for ${volunteer}.`);
    return;
  }

  const icsBody = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Full Life Centre AG Church//Indoor Media Portal//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:FLAG Media Schedule - ' + volunteer,
    'X-WR-TIMEZONE:Asia/Kolkata',
    ...icsEvents,
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsBody], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = volunteer.replace(/[^a-zA-Z0-9]/g, '_');
  const safeMonth = (appState.month || 'Schedule').replace(/[^a-zA-Z0-9]/g, '_');
  a.href = url;
  a.download = `FLAG_Media_${safeName}_${safeMonth}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

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

// ================= FEATURE 2: 🔁 WHATSAPP VOLUNTEER SWAP REQUEST =================
let currentSwapVolunteer = "";

function openSwapRequestModal(name) {
  const volunteer = name || window.currentVolunteerFilter || (appState.members && appState.members[0] ? appState.members[0].name : "");
  if (!volunteer) {
    showToast("Please select a volunteer first.");
    return;
  }
  currentSwapVolunteer = volunteer;

  const select = document.getElementById("swapDutySelect");
  const duties = getVolunteerDuties(volunteer);
  if (select) {
    select.innerHTML = "";
    if (duties.length === 0) {
      select.innerHTML = `<option value="general">No specific duty scheduled (General Request)</option>`;
    } else {
      duties.forEach((d, idx) => {
        select.innerHTML += `<option value="${idx}">${d.date} - ${d.serviceShort} (${d.role})</option>`;
      });
    }
  }

  const reasonInput = document.getElementById("swapReasonInput");
  if (reasonInput) reasonInput.value = "";

  updateSwapPreview();

  const modal = document.getElementById("swapRequestModal");
  if (modal) modal.style.display = "flex";
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

  const reasonInput = document.getElementById("swapReasonInput");
  const reason = (reasonInput && reasonInput.value.trim()) ? reasonInput.value.trim() : "Personal emergency / urgent commitment";

  let dutyText = "";
  if (duty) {
    dutyText = `📅 *Date:* ${duty.date}\n⛪ *Service:* ${duty.service}\n🎬 *Scheduled Role:* ${duty.role}\n⏰ *Call Time:* ${duty.callTime}`;
  } else {
    dutyText = `📅 *Month:* ${appState.month || 'Current Month'}\n⛪ *Service:* Media Team Duty`;
  }

  const msg = `*🔄 FLAG MEDIA TEAM - VOLUNTEER SWAP REQUEST*
━━━━━━━━━━━━━━━━━━━━━
Shalom Media Team! 👋

I need a volunteer to kindly swap or cover my scheduled media duty:

👤 *Volunteer:* ${currentSwapVolunteer}
${dutyText}
📝 *Reason:* ${reason}

Is anyone available to cover or trade shifts with me? Please let me know or reply directly. 

Thank you and God bless! 🙏🕊️`;

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
// Register Service Worker for Offline Access
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(
      reg => console.log('FLAG Service Worker registered:', reg.scope),
      err => console.log('FLAG Service Worker registration failed:', err)
    );
  });
}

let deferredPwaPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;
  const banner = document.getElementById('pwaInstallBanner');
  if (banner && !sessionStorage.getItem('flag_pwa_dismissed')) {
    banner.style.display = 'flex';
  }
});

window.addEventListener('appinstalled', () => {
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) banner.style.display = 'none';
  deferredPwaPrompt = null;
  showToast('🎉 FLAG Media App installed to your device!');
});

function triggerPWAInstall() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('Thank you for installing FLAG Media App!');
      }
      deferredPwaPrompt = null;
      const banner = document.getElementById('pwaInstallBanner');
      if (banner) banner.style.display = 'none';
    });
  } else {
    showToast('📱 To install on iOS/Android: Tap Share or Menu (⋮) and select "Add to Home Screen"');
  }
}

function dismissPWABanner() {
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) banner.style.display = 'none';
  sessionStorage.setItem('flag_pwa_dismissed', 'true');
}

// ================= FEATURE 5: 📸 1-CLICK HIGH-RES SCHEDULE IMAGE EXPORT (PNG) =================
function exportScheduleImagePNG() {
  showToast("📸 Generating high-resolution schedule image...");

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

  const headerH = 120;
  const firstServiceH = 75 + (sundayCount * 46) + 15;
  const secondThirdH = 75 + (Math.max(sundayCount, 1) * 44) + 15;
  const fridayH = 75 + (fridayCount * 44) + 15;
  const specialH = specialCount > 0 ? (65 + specialCount * 44 + 15) : 0;
  const morningH = morningCount > 0 ? (65 + morningCount * 44 + 15) : 0;
  const footerH = 100;
  const sectionGaps = 20 * 4;

  const height = headerH + firstServiceH + secondThirdH + fridayH + specialH + morningH + footerH + sectionGaps + 40;
  canvas.width = width;
  canvas.height = height;

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, "#080d1a");
  bgGrad.addColorStop(0.5, "#0d1527");
  bgGrad.addColorStop(1, "#050914");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle ambient glow orbs
  ctx.save();
  const radGlow1 = ctx.createRadialGradient(200, 150, 10, 200, 150, 350);
  radGlow1.addColorStop(0, "rgba(56, 189, 248, 0.12)");
  radGlow1.addColorStop(1, "transparent");
  ctx.fillStyle = radGlow1;
  ctx.fillRect(0, 0, 500, 400);

  const radGlow2 = ctx.createRadialGradient(width - 200, height - 200, 10, width - 200, height - 200, 400);
  radGlow2.addColorStop(0, "rgba(245, 158, 11, 0.08)");
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
      ctx.strokeStyle = strokeColor || "rgba(255,255,255,0.15)";
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
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 24px 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    ctx.fillText("FULL LIFE CENTRE ASSEMBLY OF GOD CHURCH 🕊️", textLeft, curY + 28);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "700 14px 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    ctx.fillText("INDOOR MEDIA TEAM • OFFICIAL BROADCAST SERVING SCHEDULE", textLeft, curY + 52);

    // Month Badge
    const badgeW = 210;
    const badgeX = width - padding - badgeW;
    ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1.5;
    roundRect(ctx, badgeX, curY + 8, badgeW, 46, 8, true, true, "#f59e0b");

    ctx.fillStyle = "#fef08a";
    ctx.font = "800 16px 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`📅 ${monthTitle.toUpperCase()}`, badgeX + (badgeW / 2), curY + 36);
    ctx.textAlign = "left";
    ctx.restore();

    curY += 95;

    // Divider
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, curY);
    ctx.lineTo(width - padding, curY);
    ctx.stroke();

    curY += 22;

    // Section 1: 1st Service Card
    ctx.save();
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    roundRect(ctx, padding, curY, innerWidth, firstServiceH, 12, true, true, "rgba(59, 130, 246, 0.4)");

    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

    ctx.fillStyle = "#60a5fa";
    ctx.font = "800 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("1ST SERVICE (ENGLISH/TAMIL)", padding + 18, curY + 32);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("⏰ Call Time: 05:30 AM  |  Prayer: 05:45 AM  |  Broadcast: 06:30 AM – 08:00 AM", padding + 265, curY + 32);

    const colX = [
      padding + 16,
      padding + 130,
      padding + 295,
      padding + 455,
      padding + 615,
      padding + 775,
      padding + 925
    ];

    const tHeaderY = curY + 60;
    ctx.fillStyle = "rgba(30, 41, 59, 0.7)";
    ctx.fillRect(padding + 12, tHeaderY - 18, innerWidth - 24, 26);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
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
        ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
        ctx.fillRect(padding + 12, rowY - 18, innerWidth - 24, 38);
      }

      ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
      ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
      roundRect(ctx, colX[0] - 4, rowY - 16, 95, 24, 5, true, true);
      ctx.fillStyle = "#93c5fd";
      ctx.font = "800 11px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, colX[0] + 4, rowY);

      ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
      const names = [r.cam1, r.cam2, r.gimble, r.live, r.spot, r.charging];
      names.forEach((name, nIdx) => {
        ctx.fillStyle = (name && name.includes("&")) ? "#fef08a" : "#ffffff";
        ctx.fillText(name || "—", colX[nIdx + 1], rowY);
      });

      rowY += 44;
    });

    ctx.restore();
    curY += firstServiceH + 20;

    // Section 2: 2nd & 3rd Service Grid
    const colW = (innerWidth - 18) / 2;
    const col2X = padding + colW + 18;

    // 2nd Service
    ctx.save();
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    roundRect(ctx, padding, curY, colW, secondThirdH, 12, true, true, "rgba(245, 158, 11, 0.4)");
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(padding + 12, curY, colW - 24, 3);

    ctx.fillStyle = "#fbbf24";
    ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("2ND SERVICE (TAMIL)", padding + 18, curY + 28);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("⏰ Call: 08:00 AM | Service: 08:45 – 10:30 AM", padding + 18, curY + 46);

    let r2Y = curY + 76;
    (appState.secondService || []).forEach((r, idx) => {
      ctx.fillStyle = "rgba(245, 158, 11, 0.18)";
      roundRect(ctx, padding + 18, r2Y - 16, 95, 24, 5, true, true, "rgba(245, 158, 11, 0.35)");
      ctx.fillStyle = "#fde68a";
      ctx.font = "800 11px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, padding + 26, r2Y);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(r.operator || "—", padding + 130, r2Y);
      r2Y += 42;
    });

    // 3rd Service
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    roundRect(ctx, col2X, curY, colW, secondThirdH, 12, true, true, "rgba(168, 85, 247, 0.4)");
    ctx.fillStyle = "#a855f7";
    ctx.fillRect(col2X + 12, curY, colW - 24, 3);

    ctx.fillStyle = "#c084fc";
    ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("3RD SERVICE (ENGLISH)", col2X + 18, curY + 28);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("⏰ Call: 10:30 AM | Service: 11:15 AM – 01:00 PM", col2X + 18, curY + 46);

    let r3Y = curY + 76;
    (appState.thirdService || []).forEach((r, idx) => {
      ctx.fillStyle = "rgba(168, 85, 247, 0.18)";
      roundRect(ctx, col2X + 18, r3Y - 16, 95, 24, 5, true, true, "rgba(168, 85, 247, 0.35)");
      ctx.fillStyle = "#e9d5ff";
      ctx.font = "800 11px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, col2X + 26, r3Y);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(r.operator || "—", col2X + 130, r3Y);
      r3Y += 42;
    });
    ctx.restore();

    curY += secondThirdH + 20;

    // Section 3: Friday Fasting
    ctx.save();
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    roundRect(ctx, padding, curY, innerWidth, fridayH, 12, true, true, "rgba(16, 185, 129, 0.4)");
    ctx.fillStyle = "#10b981";
    ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

    ctx.fillStyle = "#34d399";
    ctx.font = "800 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("FRIDAY FASTING PRAYER", padding + 18, curY + 30);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("⏰ Call Time: 09:30 AM  |  Service: 10:00 AM – 01:00 PM", padding + 225, curY + 30);

    const fHeaderY = curY + 58;
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DATE", padding + 24, fHeaderY);
    ctx.fillText("🎥 CAMERA OPERATOR", padding + 240, fHeaderY);
    ctx.fillText("💻 LIVE IN SYSTEM", padding + 600, fHeaderY);

    let rfY = fHeaderY + 28;
    (appState.fridayPrayer || []).forEach((r, idx) => {
      ctx.fillStyle = "rgba(16, 185, 129, 0.18)";
      roundRect(ctx, padding + 24, rfY - 16, 95, 24, 5, true, true, "rgba(16, 185, 129, 0.35)");
      ctx.fillStyle = "#a7f3d0";
      ctx.font = "800 11px 'JetBrains Mono', monospace";
      ctx.fillText(r.date, padding + 32, rfY);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(r.cam1 || "—", padding + 240, rfY);
      ctx.fillText(r.live || "—", padding + 600, rfY);
      rfY += 40;
    });
    ctx.restore();

    curY += fridayH + 20;

    // Special Meetings
    if (specialCount > 0) {
      ctx.save();
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      roundRect(ctx, padding, curY, innerWidth, specialH, 12, true, true, "rgba(168, 85, 247, 0.4)");
      ctx.fillStyle = "#a855f7";
      ctx.fillRect(padding + 12, curY, innerWidth - 24, 3);

      ctx.fillStyle = "#c084fc";
      ctx.font = "800 15px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("🌟 SPECIAL MEETINGS & CONFERENCES", padding + 18, curY + 30);

      let spY = curY + 60;
      (appState.specialMeetings || []).forEach(r => {
        ctx.fillStyle = "#fef08a";
        ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`🌟 ${r.title || 'Meeting'} (${r.date})`, padding + 24, spY);

        ctx.fillStyle = "#ffffff";
        ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(`🎥 Cam 1: ${r.cam1 || '—'}  |  📹 Cam 2: ${r.cam2 || '—'}  |  🎯 Gimble: ${r.gimble || '—'}  |  💻 Live: ${r.live || '—'}`, padding + 320, spY);
        spY += 40;
      });
      ctx.restore();
      curY += specialH + 20;
    }

    // Footer
    curY += 10;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.moveTo(padding, curY);
    ctx.lineTo(width - padding, curY);
    ctx.stroke();

    curY += 28;
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "italic 600 13px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText('"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23', width / 2, curY);

    curY += 22;
    ctx.fillStyle = "#64748b";
    ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
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
      a.download = `FLAG_Media_Schedule_${safeMonth}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("📸 High-Resolution Schedule PNG exported! Ready for WhatsApp Status.");
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
      }
    });

    ref.on("value", snapshot => {
      const cloudState = snapshot.val();
      if (cloudState && !isSyncingFromCloud) {
        console.log("☁️ Real-time cloud sync received:", cloudState);
        isSyncingFromCloud = true;
        // Merge received cloud state into appState
        appState = cloudState;
        // Cache to local storage
        localStorage.setItem("FLAG_MEDIA_PORTAL_STATE", JSON.stringify(appState));
        // Re-render whole portal
        renderAll();
        updateCloudSyncUI(true);
        isSyncingFromCloud = false;
        showToast("☁️ Real-time schedule updated from Cloud!");
      } else if (!cloudState) {
        // First time cloud initialization - push current local state to cloud!
        ref.set(appState).catch(err => console.warn("Init cloud error:", err));
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
  showToast("☁️ Pushed local roster to Cloud! All volunteers will see this immediately.");
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

function saveToCloud(state) {
  if (!firebaseDb || !cloudSyncConnected || isSyncingFromCloud) return;
  try {
    firebaseDb.ref(FIREBASE_DB_NODE).set(state).then(() => {
      console.log("☁️ Successfully saved to Firebase Cloud!");
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
    if (navText) navText.textContent = "☁️ Cloud Synced";
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
    if (navText) navText.textContent = "☁️ Local Mode";
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
  const hash = generateSyncHash(appState);
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
  const msg = `🕊️ *Full Life Centre AG Church — Media Roster Update*\n\nAdmin Lokesh has updated the ${mName} ${appState.selectedYear} media schedule!\n\n📲 *Tap this link to sync the latest roster onto your phone:*\n${url}\n\n_(Opening the link will instantly save the latest duty assignments to your phone)_`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

function checkUrlForRosterSync() {
  if (window.location.hash && window.location.hash.startsWith("#sync=")) {
    const syncedState = parseSyncHash(window.location.hash);
    if (syncedState && syncedState.firstService) {
      appState = syncedState;
      localStorage.setItem("FLAG_MEDIA_PORTAL_STATE", JSON.stringify(appState));
      // Clean up hash from URL bar cleanly
      history.replaceState(null, "", window.location.pathname);
      showToast("🎉 Successfully synced latest schedule from Admin Lokesh!");
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
      statusTag = `<span class="wb-status-tag" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4);">Heavy (${count})</span>`;
      barColor = "linear-gradient(90deg, #f59e0b, #d97706)";
    } else if (count >= 2) {
      statusTag = `<span class="wb-status-tag" style="background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);">Optimal (${count})</span>`;
      barColor = "linear-gradient(90deg, #10b981, #059669)";
    } else if (count === 1) {
      statusTag = `<span class="wb-status-tag" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4);">Light (1)</span>`;
      barColor = "linear-gradient(90deg, #38bdf8, #0284c7)";
    } else {
      statusTag = `<span class="wb-status-tag" style="background: rgba(100, 116, 139, 0.2); color: #94a3b8; border: 1px solid rgba(100, 116, 139, 0.4);">Resting (0)</span>`;
      barColor = "#475569";
    }

    return `
      <div class="workload-bar-item">
        <div class="wb-header">
          <div class="wb-name-wrap">
            <span class="wb-name">${m.name}</span>
            <span style="font-size: 0.72rem; color: #94a3b8;">(${m.role || 'Member'})</span>
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

  saveState();
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

  saveState();
  renderGearIssues();
  showToast(`Gear status updated to: ${issue.status}`);
}

function deleteGearIssue(id) {
  if (!confirm("Are you sure you want to delete this equipment issue log?")) return;
  appState.gearIssues = appState.gearIssues.filter(i => i.id !== id);
  saveState();
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
    `To: *Yashwanth & Sam Davit* (Equipment Incharge)\n` +
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
        <strong style="color: #f1f5f9; font-size: 0.95rem;">No equipment issues logged in this view!</strong>
        <p style="font-size: 0.8rem; margin-top: 4px;">All media gear is in top shape or no matching issues found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(issue => {
    let urgencyClass = "urgency-medium";
    let urgencyChipStyle = "background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4);";
    if (issue.urgency === "Critical") {
      urgencyClass = "urgency-critical";
      urgencyChipStyle = "background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);";
    } else if (issue.urgency === "Low") {
      urgencyClass = "urgency-low";
      urgencyChipStyle = "background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);";
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
            <span class="gear-urgency-chip" style="${urgencyChipStyle}">${issue.urgency}</span>
            <span class="gear-card-item-title">${issue.item}</span>
            <span class="gear-status-chip" style="${statusChipStyle}">${issue.status}</span>
          </div>
          <div class="gear-card-meta">
            📅 ${issue.date} &bull; Reported by <strong style="color: #38bdf8;">${issue.reporter}</strong>
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
