require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

// Middleware
const allowedOrigins = [
  'http://localhost:4173',     // Vite preview
  'http://localhost:5173',     // Vite dev
  'http://localhost:3000',     // React dev
  'https://lowerysmasonry.onrender.com',     // Your Render deployment
  'https://www.lowerysmasonry.com',          // Custom domain
  'https://lowerysmasonry.com',              // Custom domain without www
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error('CORS policy violation'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ 
    message: "Lowery's Masonry API is running!", 
    status: "active",
    endpoints: ["/api/contact", "/api/health"]
  });
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Contact route - Updated for Lowery's Masonry
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Please provide name, email, and message" 
    });
  }
  
  console.log("📧 New contact form submission:");
  console.log({ name, email, phone, service, message });
  
  // Get OAuth credentials from environment variables
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
  
  // Check if credentials exist
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.error("❌ Missing OAuth credentials in environment variables");
    return res.status(500).json({ 
      success: false, 
      message: "Server configuration error. Please try again later or call us directly." 
    });
  }
  
  // Create transporter with OAuth2
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER || "lowerysmasonry@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
    },
  });
  
  // Format service selection nicely
  const serviceMap = {
    "full-home-bricking": "🏠 Full Home Bricking",
    "chimney": "🔥 Chimney Construction/Repair",
    "stone-work": "🪨 Stone Work",
    "repairs": "🔧 Repairs & Restoration",
    "estimate": "📋 Free Estimate",
    "other": "💬 Other Inquiry"
  };
  
  const formattedService = serviceMap[service] || service || "Not specified";
  
  // Email to the business (Roosevelt)
  const businessMailOptions = {
    from: `"Lowery's Masonry Website" <${process.env.EMAIL_USER || "lowerysmasonry@gmail.com"}>`,
    to: process.env.NOTIFICATION_EMAIL || "lowerysmasonry@gmail.com",
    replyTo: email,
    subject: `🔨 New Masonry Inquiry from ${name} - ${formattedService}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service Needed: ${formattedService}

Message:
${message}

---
This inquiry came from the Lowery's Masonry website contact form.
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #7B1414; color: white; padding: 20px; text-align: center; border-radius: 5px; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #7B1414; }
          .value { margin-top: 5px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #7B1414; margin-top: 10px; }
          .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔨 New Masonry Inquiry</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Service Needed:</div>
              <div class="value">${formattedService}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>Reply directly to this email to respond to ${name} at ${email}</p>
            <p>📱 Call them at ${phone || "the provided email address"}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
  
  // Auto-reply to the customer
  const customerMailOptions = {
    from: `"Roosevelt Lowery - Lowery's Masonry" <${process.env.EMAIL_USER || "lowerysmasonry@gmail.com"}>`,
    to: email,
    subject: "Thank you for contacting Lowery's Masonry!",
    text: `
Dear ${name},

Thank you for reaching out to Lowery's Masonry! 

Roosevelt has received your inquiry about ${formattedService} and will get back to you within 24-48 hours.

In the meantime, if you need immediate assistance, please don't hesitate to call us at ${process.env.BUSINESS_PHONE || "(850) 567-6080"}.

We look forward to discussing your masonry project!

Best regards,
Roosevelt Lowery
Lowery's Masonry
${process.env.BUSINESS_PHONE || "(850) 567-6080"}
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #7B1414; color: white; padding: 20px; text-align: center; border-radius: 5px; }
          .content { padding: 20px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Lowery's Masonry! 🧱</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Lowery's Masonry! Roosevelt has received your inquiry about <strong>${formattedService}</strong> and will get back to you within 24-48 hours.</p>
            <p>In the meantime, if you need immediate assistance, please don't hesitate to call us at:</p>
            <p style="font-size: 20px; font-weight: bold; color: #7B1414;">${process.env.BUSINESS_PHONE || "(850) 567-6080"}</p>
            <p>We look forward to discussing your masonry project!</p>
            <br>
            <p>Best regards,<br>
            <strong>Roosevelt Lowery</strong><br>
            Lowery's Masonry<br>
            <a href="tel:${process.env.BUSINESS_PHONE || "18505676080"}">${process.env.BUSINESS_PHONE || "(850) 567-6080"}</a></p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Lowery's Masonry | Quality Masonry Since the 1960s</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
  
  try {
    // Send email to the business
    await transporter.sendMail(businessMailOptions);
    console.log("✅ Email sent to business successfully!");
    
    // Send auto-reply to customer
    await transporter.sendMail(customerMailOptions);
    console.log("✅ Auto-reply sent to customer successfully!");
    
    res.json({ 
      success: true, 
      message: "Your inquiry has been sent! Roosevelt will get back to you soon." 
    });
  } catch (error) {
    console.error("❌ Email error:", error);
    
    // Send more detailed error for debugging (but hide sensitive info)
    res.status(500).json({ 
      success: false, 
      message: "Unable to send message at this time. Please call us directly at " + (process.env.BUSINESS_PHONE || "(850) 567-6080"),
     
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ 
    success: false, 
    message: "An unexpected error occurred" 
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Lowery's Masonry API running on port ${PORT}`);
  console.log(`📧 Email notifications will be sent to: ${process.env.NOTIFICATION_EMAIL || "lowerysmasonry@gmail.com"}`);
  console.log(`📱 Business phone: ${process.env.BUSINESS_PHONE || "(850) 567-6080"}`);
});