# My Journey This Year — Deployment Guide

A fully offline-capable PWA (Progressive Web App) that works like a native app on iOS, Android, and desktop.

---

## 📁 File Structure

```
journey-app/
├── public/
│   ├── index.html       ← The entire app
│   ├── sw.js            ← Service worker (offline support)
│   ├── manifest.json    ← PWA manifest (makes it installable)
│   ├── icon-192.svg     ← App icon (home screen)
│   └── icon-512.svg     ← App icon (splash screen)
├── vercel.json          ← Vercel routing config
└── README.md            ← This file
```

---

## 🚀 Deploy to Vercel (Free — No Credit Card)

### Step 1 — Create a GitHub account (if you don't have one)
1. Go to **https://github.com**
2. Click **Sign up** and create a free account

### Step 2 — Create a new GitHub repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `my-journey-app` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On the empty repo page, click **uploading an existing file**
2. Drag and drop ALL files maintaining this structure:
   - Upload `vercel.json` at the root
   - Create a `public` folder: click **Add file → Create new file**, type `public/` then type a filename to create the folder, then upload your files into it
   
   **OR use GitHub Desktop (easier):**
   - Download GitHub Desktop from https://desktop.github.com
   - Clone your new repo
   - Copy all files into the cloned folder
   - Commit and Push

### Step 4 — Create a Vercel account
1. Go to **https://vercel.com**
2. Click **Sign Up** → choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub

### Step 5 — Deploy
1. On the Vercel dashboard, click **Add New → Project**
2. Find and select your `my-journey-app` repository
3. Click **Import**
4. On the Configure Project page:
   - **Framework Preset**: Select `Other`
   - **Root Directory**: Leave as `.` (default)
   - **Output Directory**: Type `public`
   - Leave everything else as default
5. Click **Deploy**
6. Wait ~30 seconds — Vercel will give you a live URL like:
   `https://my-journey-app.vercel.app`

### Step 6 — Done! 🎉
Your app is live. Every time you push changes to GitHub, Vercel auto-redeploys.

---

## 📱 Install as App on Your Phone

### Android (Chrome)
1. Open your Vercel URL in Chrome
2. Tap the **⋮ menu** (top right) → **Add to Home Screen**
3. Tap **Install** on the popup
4. The app icon appears on your home screen — opens fullscreen like a native app!

### iPhone / iPad (Safari)
1. Open your Vercel URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (box with arrow at bottom)
3. Scroll down → tap **Add to Home Screen**
4. Tap **Add** (top right)
5. App icon appears on home screen!

### Desktop (Chrome / Edge)
1. Open your Vercel URL
2. Look for the **install icon** in the address bar (right side) — it looks like a monitor with a down arrow
3. Click it → **Install**
4. App opens in its own window without browser UI

---

## 🔄 Updating the App

1. Edit `public/index.html` on your computer
2. Push to GitHub (or re-upload the file)
3. Vercel auto-deploys within ~30 seconds
4. On your phone, the app updates automatically next time you open it with internet

---

## 💡 Tips

- **Offline**: The app works fully offline after first visit — all data stored locally on your device
- **Data backup**: Your data lives in your browser's localStorage. To back it up, use the browser's export tools or add a JSON export feature later
- **Custom domain**: Vercel lets you add a free custom subdomain under vercel.app, or connect your own domain for free
