# Full Life Centre AG Church (FLAG) - Indoor Media Portal

Welcome to the official **Indoor Media Management Web Portal** for **Full Life Centre AG Church (FLAG)**.

```
       FLAG Church Media Ecosystem
      ─────────────────────────────
         [ INDOOR MEDIA (FLAG) ]  <── You Are Here
            ├── Sunday Live Streams (1st, 2nd, 3rd)
            ├── Friday Fasting Prayer Live Broadcast
            ├── Master Audio & Video Archiving
            │
            ├── ➔ feeds [ OUTDOOR MEDIA ] (Short Films, Song Shoots, Promos)
            │
            └── ➔ feeds [ WEB MEDIA ] (Church Web App, Live Portal, Sermon Feeds)
```

---

## 🌐 The Indoor Media Website

A clean, responsive web application built specifically for your weekly church media operations. It runs locally in your browser with zero installation, saves all your work automatically, and works completely offline.

### How to Access the Website:
* **On your PC:** Open **[http://localhost:8000](http://localhost:8000)**  
  *(or double-click **[run_localhost.bat](run_localhost.bat)** / **[index.html](index.html)**).*
* **On your Phone (Same Wi-Fi):** Open **`http://192.168.1.103:8000`** in your phone's browser!

---

## ✨ Features & Capabilities:

### 1. 📅 Auto-Generating Calendar Schedule (Admin Controlled)
* **Admin Month Control:** In the **Admin Console** under **Edit Schedules**, select any **Month** (January–December) and **Year** (2025–2030).
* The portal **automatically calculates and populates all the Sunday dates** (for 1st, 2nd, and 3rd Services) and **all the Friday dates** (for Friday Fasting Prayer).
* **Public Display:** The public view displays whatever month the Admin has selected, keeping the roster organized and tamper-proof.
* **Multi-Month Memory:** Each month saves independently so you can plan months in advance without losing previous rosters.
* **Service Themes & Notes:** Add special event tags to any Sunday (e.g. *Communion Sunday*, *Youth Service*, *Baptism Sunday*).

### 2. 👥 Simple Dropdown Selectors & On-Demand Pairing
* Every service role features a clean dropdown listing all active team members:
  * `1st Cam`, `2nd Cam`, `Gimble`, `Live in System`, `Spot Editing`, `Camera Charging Incharge`.
* **On-Demand Pairing:** When you need two persons for a duty (e.g., Charging or 1st Cam):
  * Select **`➕ Pair Two Persons...`** at the bottom of the dropdown.
  * Pick Person 1 and Person 2 in the popup and click **"Assign to Slot"**!
* **Add Future Members:** Go to the **Team Members** tab, type a new member's name, and click **"+ Add to Team"**. Their name **immediately syncs into every dropdown across all schedules**!
* **Workload Balancer:** Automatically calculates how many shifts each member is serving this month to prevent burnout.

### 3. 💬 Selective WhatsApp Group Announcement Generator
* **Specific Date vs. Full Month:** Choose whether to generate an announcement for a single upcoming service or the whole month.
* **Sunday vs. Friday Filter:**
  * **Sunday Service:** Formats 1st (05:30 AM Call), 2nd (08:00 AM Call), and 3rd (10:30 AM Call) services cleanly without bulky reminders or brackets.
  * **Friday Fasting:** Formats 1st Cam, Live System, and 09:30 AM call time.
* **Compact Toolbar:** Designed as a sleek ~50px toolbar with instant 1-click **`📋 Copy`**, **`💬 Open in WhatsApp`**, and a collapsible preview drawer.

### 4. 👑 Admin Console (Header Only)
* Protected by Admin PIN (changeable anytime).
* Located strictly in the top navigation header to keep the public schedule clean and uncluttered.
* **Edit & Rename Members:** Rename member full name or role with instant cascading updates across all existing rosters.
* **Save Schedule Now:** Dedicated green save bar with active pulsing beacon dot for locking in changes.

### 5. ✅ Weekly Service Checklists (Admin Controlled)
Switch to the **Service Checklists** tab for control over weekly Sunday service operations:
* **Admin Week Setting:** In the **Admin Console** under **Customize Checklists**, choose which Sunday week to set for the service checklist (e.g. *Week 1*, *Week 2*, *Week 3*, *Week 4*). The volunteer checklist page immediately updates to that week.
* **Independent Weekly Tracking:** Each Sunday service week preserves its own checkmarks.
* **Custom Categories & Tasks:** In the Admin Console, create new categories (e.g. *Stage Lighting*, *Projector & Screens*) or add tasks to any existing checklist category.
* **1-Click Reset & Mark All Done:** Quickly reset checks or mark all tasks complete for the current viewing service.

### 6. 🖨️ A4 Paper Print Layout
* Click the **"Print Schedule"** button in the top navigation bar.
* The website automatically strips dark backgrounds, menus, and buttons, printing a clean, high-contrast, ink-friendly black-and-white schedule featuring the official church logo at the top—ready for the control booth noticeboard!

### 7. 👤 "My Serving Schedule" Personal Filter & Calendar Sync
* **Quick Member Filter:** Select your name from the dedicated filter card at the top of the schedule.
* **Glowing Roster Highlights:** Your assigned duties across all tables glow with an animated amber highlight (`.roster-highlight-personal`), so you can locate your dates instantly.
* **Personalized Summary:** Shows your primary role, total duties for the month, call times, and paired crew members.
* **📅 Add to Calendar (.ics):** Generates and downloads standard Apple/Google/Outlook iCal files with **60-minute pre-call alarms**.
* **💬 Share My Schedule:** One-click formatted WhatsApp text summary of all your scheduled shifts to share with family or prayer partners.

### 8. 🔁 WhatsApp Volunteer Swap Request
* **One-Click Swap Modal:** Click **"🔁 Request Swap"** directly from your personal serving box.
* **Automated Group Message:** Automatically formats a professional request with your scheduled date, service, role, call time, and optional reason (e.g. *Out of station*), with instant **"📋 Copy Message"** and **"💬 Open in WhatsApp"** dispatch into the church media WhatsApp group.

### 9. 📲 Individual WhatsApp Direct Reminder
* **Personal Volunteer Reminders:** In the **Admin Console &rarr; Team Members** tab, every member card features a green WhatsApp reminder button (**`💬`**).
* **Targeted Dispatch:** Select which upcoming duty to remind them about, add their WhatsApp phone number (optional), and generate an encouraging personal reminder with call time, prayer time, and scripture (*Colossians 3:23*).

### 10. 📱 Mobile App Experience (PWA)
* **Install as Mobile App:** Add the portal directly to your phone's Home Screen with the official church icon and standalone display.
* **Offline Service Worker:** Core files are cached locally so volunteers can check their duties even when mobile data or sanctuary Wi-Fi is patchy.

### 11. 📸 1-Click High-Res Schedule Image Export (PNG)
* **Branded PNG Image Generation:** Click **"📸 Export Image"** in the top navbar or **"📸 Download Image (PNG)"** on the schedule header.
* **Studio-Quality Graphic:** Uses a client-side HTML5 canvas to generate a 1200px wide, high-resolution graphic card complete with official church Dove branding, active month badge, 1st/2nd/3rd/Friday service tables, call times, and scripture (*Colossians 3:23*).
* **WhatsApp Status & Story Ready:** Perfect for sharing in the church media WhatsApp group, Instagram stories, or saving to phones.

### 12. ☁️ Live Multi-Device Cloud Sync (Firebase Realtime Database)
* **Real-Time Cross-Device Sync:** When deployed to Netlify or opened across multiple volunteers' phones, changes made by Admin Lokesh sync across all devices in real time.
* **Powered by Google Firebase Realtime Database (100% Free):** Zero server maintenance, free forever for church team sizes.
* **Instant 1-Click WhatsApp Team Sync Link:** Admin can generate a 1-click sync link that encodes the latest roster into WhatsApp—volunteers tap the link on their phones to instantly update their schedules!

### 13. 📊 Team Serving Analytics & Workload Balancer
* **Roster Health Metrics:** View Total Serving Slots, Active Volunteers, and Average Slots per volunteer in the Admin Console.
* **Visual Workload Bars:** Color-coded progress bars (Optimal, Heavy, Light, Resting) to ensure balanced, fair scheduling across all 10 crew members.
* **Role Demand Breakdown:** Live count of demand across 1st Cam, 2nd Cam, Gimble, Live System, Spot Editing, and Charging.

### 14. 🛠️ Equipment Maintenance & Gear Issue Log
* **Fault Tracker:** Log faulty cables, battery health, camera firmware, or switcher issues before Sunday service.
* **Direct WhatsApp Dispatch:** One-click WhatsApp alert formatted directly to Equipment Incharges (**Yashwanth & Sam Davit** at `7010368793`).
* **Lifecycle Tracking:** Cycle issue status smoothly between `Open` ➔ `In Progress` ➔ `Resolved`.

### 15. 💾 JSON Backup & Restore
* In the **Admin Console** under **Cloud Sync & Backup**, click **`💾 Download Full Backup (.JSON)`** to download your full schedules, gear logs, and member directories as a file.
* Click **`📂 Restore Backup from File`** anytime to load it onto another church computer or laptop!

---

## 📚 Master Church Operational Documentation

All operational standards are organized inside the [docs/](docs/) folder:

| Document | Description |
| :--- | :--- |
| 🕊️ [logo.png](logo.png) | Official Full Life Centre AG Church Dove Logo |
| 📖 [docs/README.md](docs/README.md) | Master Table of Contents & Operations Index |
| 📋 [docs/FLAG_Sunday_Service_Cue_Sheet.md](docs/FLAG_Sunday_Service_Cue_Sheet.md) | Minute-by-minute Sunday run-sheet (07:00 AM to 08:56 AM) |
| 📋 [docs/FLAG_Indoor_Media_Operations_Manual.md](docs/FLAG_Indoor_Media_Operations_Manual.md) | Standard Operating Procedures, pre/in/post-service timelines |
| 🎥 [docs/Camera_Framing_and_Switching_Guide.md](docs/Camera_Framing_and_Switching_Guide.md) | Rules of thirds, headroom, and director "Ready... Take" comms |
| 🎙️ [docs/Broadcast_Audio_Mixing_Guide.md](docs/Broadcast_Audio_Mixing_Guide.md) | Dedicated broadcast aux mix, room mics, and lip-sync calibration |
| 💻 [docs/Streaming_PC_and_Switcher_Configuration.md](docs/Streaming_PC_and_Switcher_Configuration.md) | OBS/vMix 1080p60 encoding, bitrate, and dual local recording |
| ⚡ [docs/Camera_Charging_and_Gear_Maintenance_SOP.md](docs/Camera_Charging_and_Gear_Maintenance_SOP.md) | Battery charging schedules, lens cleaning, and SD formatting |
| ✂️ [docs/Spot_Editing_and_Social_Clips_Guide.md](docs/Spot_Editing_and_Social_Clips_Guide.md) | Rapid workflow for cutting 9:16 vertical sermon reels with captions |
| 📦 [docs/FLAG_Equipment_Inventory_and_Signout_Log.md](docs/FLAG_Equipment_Inventory_and_Signout_Log.md) | Equipment inventory and borrow register for Outdoor Media |
| 🤝 [docs/Inter_Department_Workflow_FLAG.md](docs/Inter_Department_Workflow_FLAG.md) | Handoff protocols to Outdoor and Web Media teams |
| 🎓 [docs/Indoor_Media_Cross_Training_Plan.md](docs/Indoor_Media_Cross_Training_Plan.md) | 4-week volunteer cross-training plan to prevent burnout |
| 🗣️ [docs/Indoor_Media_Team_Meeting_Agenda.md](docs/Indoor_Media_Team_Meeting_Agenda.md) | Agenda for your first team meeting as new leader |
