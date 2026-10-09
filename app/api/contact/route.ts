import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Get email config from environment variables
    const ownerEmail = process.env.OWNER_EMAIL;
    const emailService = process.env.EMAIL_SERVICE;
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    // Debug: Log which variables are missing
    if (!ownerEmail || !emailService || !emailUser || !emailPassword) {
      console.error("❌ Missing email configuration:");
      console.error("  OWNER_EMAIL:", ownerEmail ? "✓" : "MISSING");
      console.error("  EMAIL_SERVICE:", emailService ? "✓" : "MISSING");
      console.error("  EMAIL_USER:", emailUser ? "✓" : "MISSING");
      console.error(
        "  EMAIL_PASSWORD:",
        emailPassword ? "✓ (length: " + emailPassword?.length + ")" : "MISSING",
      );

      return NextResponse.json(
        {
          error: "Email configuration missing. Check .env.local file.",
          details: {
            hasOwnerEmail: !!ownerEmail,
            hasEmailService: !!emailService,
            hasEmailUser: !!emailUser,
            hasEmailPassword: !!emailPassword,
            passwordHint: emailPassword?.includes("your_app_password")
              ? "Using placeholder - need real password"
              : undefined,
          },
        },
        { status: 500 },
      );
    }

    // Check if password is still placeholder
    if (emailPassword.includes("your_app_password")) {
      console.error("❌ EMAIL_PASSWORD is still using placeholder value!");
      return NextResponse.json(
        {
          error:
            "Gmail app password not configured. Replace 'your_app_password_here' with actual 16-character password from https://myaccount.google.com/apppasswords",
        },
        { status: 500 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Email to owner (Bernard)
    const ownerMailOptions = {
      from: emailUser,
      to: ownerEmail,
      subject: `New Message from ${name} - Portfolio Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #38bdf8; border-bottom: 2px solid #38bdf8; padding-bottom: 10px;">New Portfolio Contact Message</h2>
            
            <div style="margin-top: 20px;">
              <p><strong style="color: #333;">From:</strong> ${name}</p>
              <p><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></p>
            </div>

            <div style="margin-top: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #38bdf8; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word;">
                ${message}
              </div>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This message was sent through your portfolio contact form.</p>
              <p>Reply directly to ${email} to get in touch with the sender.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: emailUser,
      to: email,
      subject: `Message Received - Bernard's Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #38bdf8; border-bottom: 2px solid #38bdf8; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
            
            <p>Hi ${name},</p>
            
            <p style="margin-top: 15px; line-height: 1.6; color: #333;">
              I've received your message and appreciate you taking the time to get in touch. 
              I'll review your message and respond as soon as possible.
            </p>

            <p style="margin-top: 15px; line-height: 1.6; color: #333;">
              <strong>Your Message:</strong>
            </p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #38bdf8; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word;">
              ${message}
            </div>

            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              Looking forward to connecting!<br/>
              <strong style="color: #38bdf8;">KWIZERA Bernard</strong><br/>
              Full-Stack Web Developer & IoT Specialist<br/>
              IPRC Kigali • Kigali, Rwanda
            </p>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; color: #999; font-size: 12px; text-align: center;">
              <p>© ${new Date().getFullYear()} KWIZERA Bernard. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    try {
      console.log("📧 Attempting to send owner notification...");
      await transporter.sendMail(ownerMailOptions);
      console.log("✅ Owner email sent to:", ownerEmail);

      console.log("📧 Attempting to send confirmation email...");
      await transporter.sendMail(senderMailOptions);
      console.log("✅ Confirmation email sent to:", email);
    } catch (emailError) {
      console.error("❌ Email sending failed:");
      if (emailError instanceof Error) {
        console.error("  Error:", emailError.message);
        console.error("  Code:", (emailError as any).code);
        console.error("  Command:", (emailError as any).command);

        // Gmail specific errors
        if (
          emailError.message.includes("Invalid login") ||
          emailError.message.includes("invalid credentials")
        ) {
          throw new Error(
            "Invalid Gmail credentials. Check EMAIL_USER and EMAIL_PASSWORD are correct. App password must be from https://myaccount.google.com/apppasswords",
          );
        }
        if (emailError.message.includes("AppPassword")) {
          throw new Error(
            "App password issue. Use 16-character password from https://myaccount.google.com/apppasswords, not your regular password",
          );
        }
      }
      throw emailError;
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully. Check your email for confirmation.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ CONTACT FORM ERROR:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to send message. Please try again later.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
