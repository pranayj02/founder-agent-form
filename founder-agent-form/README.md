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
ID: 1J6ZRCsMuLAt1_uXfJTGP31cbx2vtcjam2rK8sOiBq48

### 2. Create a Google Cloud service account
1. Go to console.cloud.google.com → create or select a project
2. APIs & Services → Library → search "Google Sheets API" → Enable
3. APIs & Services → Credentials → Create Credentials → Service Account
4. On the service account page → Keys → Add Key → JSON → download the file

### 3. Share your Sheet with the service account
Open your Sheet → Share → paste the `client_email` from the JSON file → give Editor access.

### 4. Set environment variables in .env.local
```
GOOGLE_SERVICE_ACCOUNT_EMAIL= service-account@tidal-analogy-304407.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRlL9pKvddueMN\nLf1G0XnpbKE4TFYeG4uYFeamPugpfgb2gCyvxvZpPjg5PfM1oIj9fDKWcmMmoD0i\ns2+0HIDSD6+Y9w82NEDEFc7pSodHLAU2lbi0I3Z3vcMxAiqMODIqVzLInY8M5J0X\n/N3qBv88PkgInq5xp+Ir432VH6XkkgJMfxm5QdWYNPv3HX6lsRFw0uJTIFzi4BKE\nKEwWoyQS7DL1sRZJYDTIS6qAfBFjWr58XFUvuLcAjA7LHkvDx9Q/TZvBfUAf2gRL\nEkkoOMxMKOKMtDU2ok/u8aST4ghK654lfhjU2dLBz+BRBIX6jCew28EB4lN8YzfI\no9r8VBsZAgMBAAECggEAGTC/ov866pqNq7IJPSpaH2WNqTZ6VrW+h8IAzkmbCRBb\nUOSOD8tNJyWHMiYmkJ23lCmJ67ha/4kHYB+Lf8K59HBV4v+1uzD4+eNEfUOWfUZR\naBgDMoUIAmjIyHViB3w3rLbSD/fpekYTiw8QiJuyW5uBd/vEAZLeu0y6yveaA8jA\njiRgnGSesltstsUW9EcbYHQvoW+9Ihz7F9SiyTD6ltsz8YELRmPDPllZm0s5oomr\nZLWdtCo0OL/r3H0uOM/ARBuOcMjClmYksRg8mKxjGRiFxRC4yAG3/f25E6FusaE0\n/4Q/aso3lazdJ+sbJxXcOSzrrILCEPW37KpciP9c4wKBgQDv8weowzbH3CT0eImQ\n7C2G36sphBWXks/8eDPERGPMNeF0jCNwD13jiIIPShuctQccwu9q2WXmqENTWabt\nvAKaS7fNt+8woXY9RSY2ZFX8JXwpocYx1Dq/fVxP/+4Cz8Zo9Jmh1vSzJq7KzKtq\nNbk3NODW6WY+Yu4bIR11pMFOXwKBgQDfma5tP1ezGeC653xOLjoAehAFoIH8UnVp\nScWMqfCo0YGT1Pfj6tGQhsixPfcg/M1HGA6KhsWLXgP6Gq0lcyoKiN6iLgBee5Zb\n8oy3DO71egqh7sEKIwKE/IPT1R/NoomPfjXcVrMXBNbcoRAx1bkZG1yCJlvKy1N3\n6PELrpOZhwKBgEhuXUaFPxkPjBw78pLLqGaJR/qtQ3NQvvXgNwgs+M8hCKCM2Pmv\nudDAWTpSTYl9X9s/wNPJMihxbHlRm8Exurtm1eIEfvB4HOAb6pAKs6X8jsFmcxSB\nkwZQyjff8rHolGUESQgAgjc+Gw9evvO9qd5PWPum0tVMOcH4uhLUHAITAoGBANQR\ngOJyei4OtBrwY/AOXcqH+lwr4Dy8xEjIxAlmQC8NDTV1fmp3Eq1deEjKOXHa8qKk\nCV6O9hr5XxI9bMyhDlWRfH4a3RS/aFrqj1UpehXt2tm8hO+lRsV0bV9iulgg+RDU\nJidFP3PsjhAQ3jg1uOk8DyANW2/aKd8HWl63A5xPAoGBAI8MHKqjUw2LcpDbaqlJ\n0gxAS+paNnT9kXrnVIcCAcm7J0dXf0uZWLt2P3jpQmY1XEwtIpMULc7Xf3bJlFbl\nAWAgUuprpUZSz2FFjtIwb4vnAwN2+CFMmGtAMH9xWp87xZdMlJ+4iccN6e3+Znka\nMb73qF4kx6yr6sDhpm9IixQr\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID= 1J6ZRCsMuLAt1_uXfJTGP31cbx2vtcjam2rK8sOiBq48
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
