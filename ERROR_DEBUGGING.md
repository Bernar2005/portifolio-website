# 🔧 Contact Form Debugging Guide

## Your Current Error

```
Failed to send message. Please try again later.
```

This error means the API failed, but we now have better logging to see exactly why.

---

## 🎯 Step-by-Step Fix

### STEP 1: Verify `.env.local` Has Real Password

**File:** `portifolio-website/.env.local`

**Currently shows:**

```
EMAIL_PASSWORD=your_app_password_here
```

**This is WRONG!** ❌

---

### STEP 2: Get Real Gmail App Password

**⏰ Takes 2 minutes**

1. **Go to:** https://myaccount.google.com/apppasswords
2. **Sign in** as: `kwizerabernard207@gmail.com`
3. **You MUST have 2-Step Verification enabled** (follow prompts if not)
4. **Select dropdown options:**
   - App: `Mail`
   - Device: `Windows Computer`
5. **Click "Generate"**
6. **Google shows a 16-character password:** `xxxx xxxx xxxx xxxx`
7. **COPY THIS PASSWORD** (won't show again!)

---

### STEP 3: Update `.env.local`

**Open:** `portifolio-website/.env.local`

**REPLACE THIS LINE:**

```
EMAIL_PASSWORD=your_app_password_here
```

**WITH THIS:**

```
EMAIL_PASSWORD=zxcv asdf qwer tyui
```

_(Use YOUR actual 16-character password from Step 2)_

**SAVE THE FILE**

---

### STEP 4: RESTART Dev Server (CRITICAL!)

**In your terminal (PowerShell):**

```bash
# Stop the server by pressing: Ctrl+C

# Then run:
npm run dev
```

**Look for:**

```
✓ Ready in X.Xs
```

---

## 🔍 Check Terminal Errors

After restarting server, try sending the form again.

### Look at Terminal Output

**If you see this:**

```
✅ Owner email sent to: kwizerabernard207@gmail.com
✅ Confirmation email sent to: [visitor email]
```

✅ **SUCCESS!** Everything is working!

---

**If you see this:**

```
❌ Missing email configuration:
  OWNER_EMAIL: ✓
  EMAIL_SERVICE: ✓
  EMAIL_USER: ✓
  EMAIL_PASSWORD: ✓ (length: 23)
```

Means `.env.local` was found but one variable missing. Check file again.

---

**If you see this:**

```
❌ Invalid Gmail credentials. Check EMAIL_USER and EMAIL_PASSWORD are correct.
App password must be from https://myaccount.google.com/apppasswords
```

**Solution:**

1. Generate NEW app password from: https://myaccount.google.com/apppasswords
2. Replace EMAIL_PASSWORD in `.env.local`
3. Restart dev server
4. Try again

---

**If you see this:**

```
❌ App password issue. Use 16-character password from
https://myaccount.google.com/apppasswords, not your regular password
```

**Solution:**

- Do NOT use your regular Gmail password
- MUST use the 16-character app password
- Get it from: https://myaccount.google.com/apppasswords

---

## 📋 Common Issues & Fixes

| Error in Terminal                        | Cause                                          | Fix                                                        |
| ---------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| `EMAIL_PASSWORD: MISSING`                | `.env.local` file not found                    | File must be in `portifolio-website/` folder               |
| `using placeholder`                      | Still has `your_app_password_here`             | Generate real password, update file                        |
| `Invalid login` or `invalid credentials` | Wrong app password                             | Generate NEW password from apppasswords link               |
| `AppPassword` mentioned                  | Using regular password instead of app password | Use 16-char from https://myaccount.google.com/apppasswords |
| `ENOTFOUND` or `getaddrinfo`             | No internet connection or DNS issue            | Check WiFi, restart server                                 |

---

## ✅ Verification Checklist

- [ ] Went to https://myaccount.google.com/apppasswords
- [ ] Successfully generated 16-character password
- [ ] Copied the password (not typing it, COPIED!)
- [ ] Opened `.env.local` file
- [ ] Replaced `your_app_password_here` with actual password
- [ ] SAVED the `.env.local` file
- [ ] Stopped dev server (Ctrl+C)
- [ ] Restarted dev server (`npm run dev`)
- [ ] Waited for "✓ Ready" message
- [ ] Tried sending form again
- [ ] Check terminal for ✅ Success message

---

## 🧪 Test with DEBUG Enabled

The API now logs detailed debug info. Check terminal after form submission:

**Success looks like:**

```
POST /api/contact 200
📧 Attempting to send owner notification...
✅ Owner email sent to: kwizerabernard207@gmail.com
📧 Attempting to send confirmation email...
✅ Confirmation email sent to: testsender@gmail.com
```

**Error looks like:**

```
POST /api/contact 500
❌ Missing email configuration:
  OWNER_EMAIL: ✓
  EMAIL_SERVICE: ✓
  EMAIL_USER: ✓
  EMAIL_PASSWORD: MISSING
```

---

## 🚨 Still Not Working?

### Debug Step 1: Verify File Saved

```bash
# In PowerShell, run:
cat portifolio-website\.env.local
```

**Should show YOUR password, NOT "your_app_password_here"**

---

### Debug Step 2: Verify Dev Server Restarted

Look for in terminal:

```
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 2.3s
```

If `.env.local` is NOT listed, your environment file wasn't loaded.

---

### Debug Step 3: Check Browser Console

1. Open portfolio: http://localhost:3000
2. Press F12 (Developer Tools)
3. Go to "Console" tab
4. Submit form
5. Look for errors being logged

---

## 📧 Test Email Should Show

**In your email inbox (kwizerabernard207@gmail.com):**

You should receive an email with subject:

```
New Message from [Test Name] - Portfolio Contact Form
```

If you don't see it:

1. Check SPAM folder
2. Check sender email in `.env.local` is correct
3. Verify app password one more time

---

## 🎯 Quick Wins to Try

| Try This                                   | Result                  |
| ------------------------------------------ | ----------------------- |
| Restart dev server after .env.local change | 90% of issues fixed     |
| Generate NEW app password                  | Fixes credential issues |
| Clear browser cache (Ctrl+Shift+Delete)    | Sometimes helps         |
| Try in incognito/private browser window    | Eliminates cache issues |
| Use different test email address           | Rules out email issue   |

---

## ✅ Once It Works

You'll see:

1. ✅ Browser: "✓ Message Sent!" message
2. ✅ Terminal: Success logs with checkmarks
3. ✅ Email: 2 emails arrive in your inbox

That's it! Form is now fully operational! 🎉

---

## 📞 Still Stuck?

The most common reason is:
**`.env.local` was not properly updated OR dev server was not restarted**

Try this:

```bash
# 1. Stop server (Ctrl+C)
# 2. Edit .env.local directly - replace the password line
# 3. Save file (Ctrl+S)
# 4. Check file contents:
cat portifolio-website\.env.local
# 5. Start server again:
npm run dev
```

That fixes 95% of issues. The improved error messages will show you exactly what's wrong! 🚀
