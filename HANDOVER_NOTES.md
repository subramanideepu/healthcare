# Aadhira Wellness - Developer & AI Agent Handover Notes

## 1. Project Summary
* **Client / Clinic:** Aadhira Wellness Physio • Rehab Center (*Recover • Rehab • Rejoice*)
* **Doctor:** Dr. Santhosh Balaji .K, BPT MIAP KTP (Reg. No: L-53036)
* **Specialty:** Myofascial Release (MFR) Therapy, Neuro & Stroke Rehab, Fracture Care, House Visits
* **Address:** No.34 Mookambikai Nagar, Moondramkattalai, Kundrathur Main Road, Chennai - 600128 (Near Prathap Palace)
* **Phone / WhatsApp:** +91 90803 09274
* **Official Email:** info@aadhirawellness.com (Hostinger SMTP SSL on port 465)
* **Live Demo URL (GitHub Pages):** https://subramanideepu.github.io/healthcare/
* **Git Repository:** https://github.com/subramanideepu/healthcare.git (Branch: `main`)

---

## 2. Architecture & File Structure
```text
healthcare_demo_sites/
├── aadhira-wellness-frontend/       <-- Complete React.js Multi-Page App (Source Code)
│   ├── src/
│   │   ├── pages/                   <-- 4 Dedicated Pages:
│   │   │   ├── HomePage.jsx         <-- Hero, Badges, Doctor Card, Quick Bar, Stats, Services Preview
│   │   │   ├── AboutPage.jsx        <-- Clinic Story, Dr. Santhosh Bio, 4 Pillars, House Visits
│   │   │   ├── ServicesPage.jsx     <-- All 16+ Clinical Modalities & FAQ
│   │   │   └── ContactPage.jsx      <-- Email Booking Form + Google Maps Embed
│   │   ├── components/              <-- Navbar (Mobile Drawer), TopBar, Footer, Floating WhatsApp, etc.
│   │   └── index.css                <-- Full responsive stylesheet (Desktop, Tablet, Mobile <= 768px, <= 480px)
│   └── dist/                        <-- Built production bundle
│
├── send_mail.php                    <-- Lightweight Form Handler with Direct Hostinger SSL SMTP Integration
├── leads_backup.json                <-- JSON backup of all form enquiries
│
├── index.html                       <-- Root entry point serving production bundle for GitHub Pages
├── 404.html                         <-- SPA client-side routing fallback for GitHub Pages deep links
└── assets/                          <-- Root production assets (CSS & JS bundles + images/)
```

---

## 3. Workflow for Making Changes & Deploying
Whenever you make changes to React components or CSS in `aadhira-wellness-frontend/`:
1. Open terminal inside `aadhira-wellness-frontend`:
   ```bash
   npm run build
   ```
2. Copy the new build files from `aadhira-wellness-frontend/dist/` to root:
   - Copy `dist/index.html` -> `./index.html`
   - Copy `dist/assets/*` -> `./assets/`
3. Commit and push to Git:
   ```bash
   git add .
   git commit -m "feat: your change summary"
   git push origin main
   ```
4. GitHub Pages will automatically update within 1-2 minutes!

---

## 4. Setup Instructions on Home PC
1. **Clone repository:**
   ```bash
   git clone https://github.com/subramanideepu/healthcare.git
   cd healthcare
   ```
2. **Install Frontend Dependencies:**
   ```bash
   cd aadhira-wellness-frontend
   npm install
   ```
   *(Note: Use Node.js v18+ or v22. Avoid Node v16 due to Vite crypto compatibility).*
3. **Run Local Dev Server:**
   ```bash
   npm run dev
   ```
4. **Backend `.env`:**
   In `aadhira-wellness-backend/.env`, ensure Hostinger mail settings are set:
   ```env
   MAIL_MAILER=smtp
   MAIL_HOST=smtp.hostinger.com
   MAIL_PORT=465
   MAIL_USERNAME=info@aadhirawellness.com
   MAIL_PASSWORD="Drr*AXYJtE=N8+Vu"
   MAIL_ENCRYPTION=ssl
   MAIL_FROM_ADDRESS="info@aadhirawellness.com"
   MAIL_FROM_NAME="Aadhira Wellness Physio • Rehab Center"
   CLINIC_NOTIFICATION_EMAIL="info@aadhirawellness.com"
   ```

---

## 5. Ready-to-Paste Prompt for Antigravity AI on Home PC
When you open Antigravity on your Home PC, start a new chat in this workspace and simply copy-paste this prompt:

```text
Hi Antigravity! I am continuing work on the Aadhira Wellness Physio • Rehab Center website project.
Here is the project status:
- Multi-page React.js Vite application in `aadhira-wellness-frontend/` with 4 dedicated pages: Home (/), About (/about), Services (/services), and Contact (/contact).
- Fully responsive across desktop, tablet, and mobile devices (hamburger menu drawer, 1-col layouts).
- Official Email: info@aadhirawellness.com configured with Hostinger SSL SMTP (port 465) in send_mail.php and aadhira-wellness-backend/.env.
- Clinic details: Dr. Santhosh Balaji .K (BPT MIAP KTP, Reg. No: L-53036), Kundrathur, Chennai, Mobile: 90803 09274.
- Live demo URL: https://subramanideepu.github.io/healthcare/
- Git branch: main
Please read HANDOVER_NOTES.md and review the latest codebase. I will tell you what we want to build or polish next!
```
