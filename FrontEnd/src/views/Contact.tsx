// Contact.tsx
import { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Clock, Send, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    console.log("Server response:", data);

    // Success message
    alert("✅ Message sent successfully!");

    // Optional: still show Linktree if you want
    const userConfirmed = window.confirm(
      "Want to connect with us on Linktree as well?"
    );

    if (userConfirmed) {
      window.open("https://linktr.ee/happyfuturesrobotics", "_blank");
    }

    // Reset form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (err: any) {
    console.error(err);
    alert("❌ Failed to send message. Try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("page-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) observer.observe(pageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-gradient bg-fixed relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-highlight/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow/3 rounded-full blur-3xl animate-pulse delay-500" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Main Content */}
      <div
        ref={pageRef}
        className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16
                   opacity-0 translate-y-8 transition-all duration-1000 ease-out
                   [&.page-visible]:opacity-100 [&.page-visible]:translate-y-0"
      >
        <div className="w-full max-w-6xl">
          {/* Header */}
          <ContactHeader />

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info Sidebar */}
            <ContactInfoSidebar />

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                activeField={activeField}
                setActiveField={setActiveField}
              />
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <AlternativeContact />
        </div>
      </div>
    </div>
  );
}

// Header Component
function ContactHeader() {
  return (
    <div className="text-center mb-12">
      {/* Badge */}
      <div className="inline-flex items-center gap-3 mb-6 bg-surface/30 backdrop-blur-sm px-6 py-2.5 rounded-full border border-border/30">
        <div className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
        <span className="text-xs uppercase tracking-[0.3em] text-highlight font-mono">
          Get in Touch
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="bg-gradient-to-r from-foreground via-highlight to-glow bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          Let's Build the Future
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
        Have questions about our technology? Interested in partnering with us? 
        We'd love to hear from you.
      </p>
    </div>
  );
}

// Contact Info Sidebar
function ContactInfoSidebar() {
  const infoItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "New Orleans, LA",
      subtext: "Innovation Hub",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      content: "Within 24-48 hours",
      subtext: "Mon - Fri, 9AM - 6PM CST",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Connect Now",
      content: "Linktree",
      subtext: "All our platforms in one place",
      link: "https://linktr.ee/happyfuturesrobotics",
    },
  ];

  return (
    <div className="lg:col-span-2 space-y-4">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="group relative"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-highlight/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-surface/20 backdrop-blur-sm rounded-2xl p-6 
                       border border-border/30 hover:border-highlight/50 
                       transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl text-highlight group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm uppercase tracking-wider text-muted font-mono mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    {item.content}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-sm text-muted">{item.subtext}</p>
                </div>
              </div>
            </a>
          ) : (
            <div className="relative bg-surface/20 backdrop-blur-sm rounded-2xl p-6 
                          border border-border/30 hover:border-highlight/50 
                          transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl text-highlight group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted font-mono mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {item.content}
                  </p>
                  <p className="text-sm text-muted">{item.subtext}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Stats/Trust Indicators */}
      <div className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-highlight/10 rounded-2xl border border-border/30">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-highlight to-glow bg-clip-text text-transparent mb-2">
            100% Human
          </div>
          <p className="text-sm text-muted">
            Every message is read by our team. We value genuine connections.
          </p>
        </div>
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm({ 
  form, 
  handleChange, 
  handleSubmit, 
  isSubmitting, 
  activeField, 
  setActiveField 
}: any) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-highlight to-glow rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-700" />
      
      <form
        onSubmit={handleSubmit}
        className="relative bg-surface/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 
                   border border-border/30 shadow-2xl"
      >
        {/* Form Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-highlight/10 rounded-lg">
            <Mail className="w-5 h-5 text-highlight" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
            <p className="text-sm text-muted">We'll get back to you as soon as possible</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name Input */}
          <FormField
            label="Full Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            activeField={activeField}
            setActiveField={setActiveField}
            icon="👤"
          />

          {/* Email Input */}
          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            activeField={activeField}
            setActiveField={setActiveField}
            icon="📧"
          />

          {/* Subject Select */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-muted">
              <span className="text-lg">📋</span>
              Subject
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm 
                       border border-border text-foreground
                       focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-highlight
                       transition-all duration-300 cursor-pointer"
            >
              <option value="">Select a topic...</option>
              <option value="partnership">🤝 Partnership Inquiry</option>
              <option value="investment">💰 Investment Opportunity</option>
              <option value="technology">🔧 Technology Questions</option>
              <option value="careers">💼 Careers</option>
              <option value="other">💬 General Inquiry</option>
            </select>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-muted">
              <span className="text-lg">💬</span>
              Message
            </label>
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm 
                         border text-foreground placeholder-muted/50 resize-none
                         focus:outline-none focus:ring-2 focus:ring-highlight/50
                         transition-all duration-300
                         ${activeField === 'message' ? 'border-highlight shadow-glow' : 'border-border'}`}
                placeholder="Tell us about your project, question, or opportunity..."
              />
              <div className="absolute bottom-3 right-3 text-xs text-muted">
                {form.message.length} characters
              </div>
            </div>
          </div>

          {/* Linktree Notice - Elegant way to handle the temporary situation */}
          <div className="p-4 bg-gradient-to-r from-primary/10 to-highlight/10 rounded-xl border border-border/30">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-highlight/20 rounded-lg">
                <Sparkles className="w-4 h-4 text-highlight" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground mb-2">
                  <span className="font-semibold text-highlight">🚀 Beta Access:</span> Connect with us instantly
                </p>
                <p className="text-xs text-muted mb-3">
                  While we finalize our email system, find all our platforms and updates on Linktree.
                </p>
                <a
                  href="https://linktr.ee/happyfuturesrobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-highlight hover:text-glow transition-colors group"
                >
                  Visit our Linktree
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full group/btn overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-highlight to-glow opacity-80 group-hover/btn:opacity-100 transition-opacity" />
            <div className="relative px-6 py-4 bg-gradient-to-r from-primary to-primaryDark rounded-xl m-[1px]
                          flex items-center justify-center gap-3 text-foreground font-semibold
                          group-hover/btn:scale-[0.98] transition-transform duration-300">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  <span>Send Message</span>
                </>
              )}
            </div>
          </button>

          {/* Trust Message */}
          <p className="text-xs text-center text-muted">
            By sending a message, you agree to our{" "}
            <a href="#" className="text-highlight hover:underline">Privacy Policy</a>
            {" "}and{" "}
            <a href="#" className="text-highlight hover:underline">Terms of Service</a>
          </p>
        </div>
      </form>
    </div>
  );
}

// Form Field Component
function FormField({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  placeholder, 
  activeField, 
  setActiveField,
  icon 
}: any) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-muted">
        <span className="text-lg">{icon}</span>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setActiveField(name)}
        onBlur={() => setActiveField(null)}
        required
        className={`w-full px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm 
                   border text-foreground placeholder-muted/50
                   focus:outline-none focus:ring-2 focus:ring-highlight/50
                   transition-all duration-300
                   ${activeField === name ? 'border-highlight shadow-glow' : 'border-border'}`}
        placeholder={placeholder}
      />
    </div>
  );
}

// Alternative Contact Methods
function AlternativeContact() {
  const platforms = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter/X", icon: "🐦", url: "https://x.com/HFR_NOLA" },
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/Happyfuturesrobotics" },
  ];

  return (
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-2 mb-6">
        <div className="h-px w-8 bg-border" />
        <span className="text-xs uppercase tracking-wider text-muted font-mono">
          Also Find Us On
        </span>
        <div className="h-px w-8 bg-border" />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            className="group px-6 py-3 bg-surface/20 backdrop-blur-sm rounded-full 
                     border border-border/30 hover:border-highlight/50
                     transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">{platform.icon}</span>
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                {platform.name}
              </span>
            </span>
          </a>
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-xs text-muted/60">
        © 2026 Happy Futures Robotics. All rights reserved. 
        <br className="sm:hidden" />
        <span className="hidden sm:inline mx-2">•</span>
        New Orleans, LA • Building the future of autonomous robotics
      </p>
    </div>
  );
}

export default Contact;