# 🎯 STEP-BY-STEP VISUAL GUIDE (Copy & Paste Ready)

## 📍 STEP 1: Prepare Project (5 min)

### Command 1: Check Build

```bash
cd e:\Portifolio_Website\portifolio-website
npm run build
```

**Wait for:** `✓ Built successfully`

---

## 📍 STEP 2: Create GitHub Account (5 min)

### Go to:

**https://github.com/signup**

### Fill in:

```
Email → kwizerabernard207@gmail.com
Username → KwizerabernardPortfolio
Password → Create strong password (save it!)
```

### Verify email (check inbox)

---

## 📍 STEP 3: Create GitHub Repository (2 min)

### Go to:

**https://github.com/new**

### Fill in:

```
Repository name → portfolio-website
Description → Full-Stack Web Developer Portfolio with Contact Form
Visibility → PUBLIC (select this!)
Initialize with → Leave all unchecked
```

### Click: **"Create repository"**

You'll see a screen with instructions. Keep this open for reference.

---

## 📍 STEP 4: Push Code to GitHub (5 min)

### In PowerShell, Run These Commands One by One:

**Command 1: Initialize Git**

```bash
cd e:\Portifolio_Website\portifolio-website
git init
```

**Command 2: Add all files**

```bash
git add .
```

**Command 3: Create commit**

```bash
git commit -m "Initial commit: Portfolio website with contact form and email backend"
```

**Command 4: Set main branch**

```bash
git branch -M main
```

**Command 5: Add GitHub remote**

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

⚠️ **REPLACE `YOUR_USERNAME` with your actual GitHub username!**

Example: If username is `bernard-dev`, use:

```bash
git remote add origin https://github.com/bernard-dev/portfolio-website.git
```

**Command 6: Push to GitHub**

```bash
git push -u origin main
```

**Expect:** GitHub authentication window

- Click "Authorize" or use Personal Access Token
- Wait for push to complete

### Verify on GitHub

1. Go to: `https://github.com/YOUR_USERNAME/portfolio-website`
2. Should see all your files! ✅

---

## 📍 STEP 5: Create Vercel Account (3 min)

### Go to:

**https://vercel.com/signup**

### Click:

**"Continue with GitHub"**

### Authorize:

- GitHub will ask permission
- Click "Authorize Vercel"
- Complete Vercel signup

---

## 📍 STEP 6: Deploy to Vercel (5 min)

### Go to:

**https://vercel.com/new**

### Click:

**"Import an existing project"**

### Paste GitHub URL:

```
https://github.com/YOUR_USERNAME/portfolio-website
```

### Click: **"Continue"**

---

## 📍 STEP 7: Add Environment Variables (3 min)

### Look for: "Environment Variables" section

### Click: **"Add"**

### Add EXACTLY these 4 variables:

**Variable 1:**

```
Name: OWNER_EMAIL
Value: kwizerabernard207@gmail.com
```

Click "Save"

**Variable 2:**

```
Name: EMAIL_SERVICE
Value: gmail
```

Click "Save"

**Variable 3:**

```
Name: EMAIL_USER
Value: kwizerabernard207@gmail.com
```

Click "Save"

**Variable 4:**

```
Name: EMAIL_PASSWORD
Value: [Paste your 16-character app password here]
```

Click "Save"

⚠️ **APP PASSWORD:** From https://myaccount.google.com/apppasswords

---

## 📍 STEP 8: Deploy! (2 min)

### Click: **"Deploy"**

### Watch the logs:

```
Building project...
Installing dependencies...
Building application...
✓ Deployment successful!
```

### You'll see:

```
Congratulations! Your site is live.
```

**Copy your live URL:**

```
https://portfolio-website-YOUR_USERNAME.vercel.app
```

---

## 📍 STEP 9: Test Live Site (3 min)

### Open the live URL in browser

```
https://portfolio-website-YOUR_USERNAME.vercel.app
```

### Check:

- [ ] Page loads
- [ ] Navbar works
- [ ] Contact section visible
- [ ] Looks good

### Test Contact Form:

1. Scroll to Contact section
2. Fill form:
   ```
   Name: Test User
   Email: testuser@gmail.com
   Message: Testing live deployment!
   ```
3. Click "Send Message"

### Expected Results:

- Browser shows: "✓ Message Sent!"
- Email arrives in your inbox (2 emails)
- Within 30 seconds

---

## 📍 STEP 10: Add README to GitHub (3 min)

### Create file: `README.md` in project root

### Add content:

````markdown
# KWIZERA Bernard - Portfolio Website

Full-Stack Web Developer & IoT Specialist | IPRC Kigali

## 🌐 Live Portfolio

👉 **[Visit Live Portfolio](https://portfolio-website-YOUR_USERNAME.vercel.app)**

## 💻 Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Nodemailer, Gmail SMTP
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## ✨ Features

✅ Responsive Design  
✅ Dark Mode Theme  
✅ Contact Form with Email Notifications  
✅ Project Showcase  
✅ Skills Display  
✅ Smooth Animations

## 📧 Contact Me

- **Email:** kwizerabernard207@gmail.com
- **Location:** Kigali, Rwanda 🇷🇼
- **GitHub:** [GitHub Profile](https://github.com/YOUR_USERNAME)

## 🚀 Getting Started Locally

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Create .env.local file and add email variables
# (See CONTACT_SETUP.md for details)

# Run development server
npm run dev

# Open http://localhost:3000
```
````

## 📄 License

MIT License - Feel free to use as template

---

Made with ❤️ by KWIZERA Bernard

````

### Push to GitHub:
```bash
git add README.md
git commit -m "Add professional README"
git push
````

---

## 🎉 DONE! YOU'RE LIVE!

### Your Links:

**GitHub:** https://github.com/YOUR_USERNAME/portfolio-website  
**Live Portfolio:** https://portfolio-website-YOUR_USERNAME.vercel.app

### Share with Employers:

- Copy live URL
- Paste in resume/LinkedIn
- Send in job applications
- Include in email signature

### Future Updates:

```bash
# Make changes locally
npm run dev

# Commit & push
git add .
git commit -m "Added new project"
git push

# Vercel auto-deploys! (within 1 minute)
```

---

## ✅ VERIFICATION CHECKLIST

- [ ] GitHub repo created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Live site loads
- [ ] Contact form works
- [ ] Emails arrive
- [ ] README added to GitHub
- [ ] Ready to share!

---

**Congratulations! Your portfolio is now live and ready to impress employers!** 🎊

Need help? Check the detailed guides:

- `DEPLOYMENT_GUIDE.md` - Full information
- `DEPLOYMENT_CHECKLIST.md` - Checklist version
- This file - Step-by-step visual guide
