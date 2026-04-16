# Founder Agent — Onboarding Form

A multi-step intake form for founders. Built with Next.js 15 + TypeScript + Tailwind, deployed on Vercel, submissions saved to Google Sheets.

---

## Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **API route**: `/api/submit` writes to Google Sheets
- **Hosting**: Vercel (free hobby tier)

---

## Local setup

```bash
npm install
cp .env.example .env.local
# fill in env vars (see below)
npm run dev
```

---

## Google Sheets setup (~10 min, one-time)

### 1. Create a Google Sheet
Go to sheets.google.com, create a new sheet, and copy the Sheet ID from the URL:
`https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`

### 2. Create a Google Cloud service account
1. Go to console.cloud.google.com → create or select a project
2. APIs & Services → Library → search "Google Sheets API" → Enable
3. APIs & Services → Credentials → Create Credentials → Service Account
4. On the service account page → Keys → Add Key → JSON → download the file

### 3. Share your Sheet with the service account
Open your Sheet → Share → paste the `client_email` from the JSON file → give Editor access.

### 4. Set environment variables in .env.local
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id
```
Keep the GOOGLE_PRIVATE_KEY in double quotes with literal \n characters (not real newlines).

---

## Deploy to Vercel

```bash
git init && git add . && git commit -m "init"
git remote add origin https://github.com/you/founder-agent-form.git
git push -u origin main
```

1. vercel.com → Add New Project → import your repo → Deploy
2. Settings → Environment Variables → add the 3 vars above
3. Redeploy from the Deployments tab

Live at https://your-project.vercel.app

---

## Customise the form

All questions, options and labels live in one file: `types/form.ts`
Edit the arrays there — the UI updates automatically.

---

## Sheet columns

Submitted At, Name, WhatsApp, Company, Stage, Capabilities, Custom Capabilities, Tools, Other Tools, Brief Time, Response Style, Autonomy, More Time For, Time Cost, Never Touch.

Headers are auto-created on the first submission.
