# 📧 Contact Form Backend Setup Guide

## Overview

Your portfolio contact form now has full backend functionality! When someone submits the form, you'll receive an email with their message, and they'll get a confirmation email.

## What's Been Set Up

✅ **Backend API Route** - `/app/api/contact/route.ts`

- Handles form submissions securely
- Sends confirmation email to the sender
- Sends notification email to you (Bernard)
- Built-in validation and error handling

✅ **Frontend Integration** - Updated `Contact.tsx`

- Real API calls to backend
- Loading states and error messages
- Form validation before submission
- Success/failure feedback

✅ **Email Service** - Nodemailer

- Professional HTML emails with formatting
- Async email delivery
- Error handling and logging

---

## Configuration Steps (IMPORTANT!)

### Step 1: Get Your Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go back to Security → App passwords
4. Select "Mail" and "Windows Computer"
5. Google will generate a 16-character password
6. Copy this password (it won't be shown again!)

### Step 2: Update `.env.local`

Open the `.env.local` file in your project root and fill in:

```
OWNER_EMAIL=kwizerabernard207@gmail.com
EMAIL_SERVICE=gmail
EMAIL_USER=kwizerabernard207@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Replace `EMAIL_PASSWORD` with the 16-character password from Step 1.

### Step 3: Test the Configuration

1. Start your development server: `npm run dev`
2. Go to your portfolio's Contact section
3. Fill in the form and click "Send Message"
4. Check your email inbox for:
   - **Confirmation email** (sent to the visitor)
   - **Notification email** (sent to you with the message)

---

## File Structure

```
portifolio-website/
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          (New - Backend API)
├── components/
│   └── Contact.tsx               (Updated - Now calls API)
├── .env.local                    (New - Email credentials)
├── .env.example                  (New - Template/reference)
└── package.json                  (Updated - nodemailer added)
```

---

## How It Works

### When a Visitor Submits the Form:

1. **Form Submission** → Contact component calls `/api/contact` with:
   - Visitor's name
   - Visitor's email
   - Message content

2. **Backend Processing** → API route:
   - Validates all fields
   - Checks email format
   - Loads email credentials from `.env.local`

3. **Email Delivery** → Nodemailer sends:
   - **To Visitor**: Confirmation email acknowledging receipt
   - **To Bernard** (OWNER_EMAIL): Notification with full details

4. **Response** → Shows success/error to visitor

### Email Templates

Both emails have professional HTML formatting with:

- Styled headers with your brand colors (#38bdf8 cyan)
- Clear message formatting
- Contact information
- Footer with copyright

---

## Features & Security

✅ **Only Owner Gets Original Messages** - Visitors only receive confirmation emails  
✅ **Input Validation** - Checks name, email, and message format  
✅ **Email Validation** - Prevents invalid email addresses  
✅ **Error Handling** - Shows friendly errors to users  
✅ **Environment Variables** - Credentials kept secure, not in code  
✅ **Async Processing** - Non-blocking email delivery  
✅ **Professional Templates** - Beautiful, branded emails

---

## Troubleshooting

### "Email service not configured" Error

- Check `.env.local` exists and has all 4 variables filled
- Verify EMAIL_PASSWORD is the 16-character app password (not your regular password)
- Restart the dev server after changing `.env.local`

### "Failed to send message" but form shows success

- Check Gmail app password is correct
- Verify internet connection
- Check email address format is valid
- Try sending again (sometimes SMTP has delays)

### Not Receiving Emails

- Check OWNER_EMAIL is your correct email address
- Check spam/junk folders
- Verify SENDER_EMAIL is also a valid Gmail account
- Allow Less Secure Apps if needed (older Gmail settings)

### "Invalid email address"

- Ensure visitor enters valid email format: `name@domain.com`
- Frontend also validates before sending

---

## Next Steps (Optional Enhancements)

1. **Database Storage** - Save messages to a database for backup
2. **Rate Limiting** - Prevent spam submissions
3. **Attachments** - Allow file uploads with messages
4. **SMS Notifications** - Get text alerts for new messages
5. **Custom Email Domain** - Use your own email service provider

---

## Important Security Notes

🔒 **NEVER commit `.env.local` to version control**
🔒 **NEVER share your app password publicly**
🔒 **Keep EMAIL_PASSWORD safe** - treat it like a password
🔒 **Use Gmail App Passwords**, not your regular password

The `.gitignore` file should already ignore `.env.local`. Verify:

```
# .gitignore should include:
.env.local
```

---

## Support

If you need to modify email templates, edit: `/app/api/contact/route.ts`

The HTML email templates are in the `ownerMailOptions` and `senderMailOptions` objects.

Good luck with your portfolio! 🚀
