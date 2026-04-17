import { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Phone, Send, Clock, Facebook, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

// Import logos
import logoTransparent from "/lowerysmasonrybadgelogotransparent.png";
import logoFull from "/lowerysmasonrylogo.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
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
    setSubmitStatus({ type: null, message: '' });

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

      setSubmitStatus({ 
        type: 'success', 
        message: "✅ Message sent successfully! Roosevelt will get back to you soon." 
      });
      
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

    } catch (err: any) {
      console.error(err);
      setSubmitStatus({ 
        type: 'error', 
        message: "❌ Failed to send message. Please call us directly or try again." 
      });
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
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16">
        <div
          ref={pageRef}
          className="w-full max-w-6xl opacity-0 translate-y-8 transition-all duration-1000 ease-out
                     [&.page-visible]:opacity-100 [&.page-visible]:translate-y-0"
        >
          <ContactHeader />
          
          <div className="grid lg:grid-cols-5 gap-8">
            <ContactInfoSidebar />
            <div className="lg:col-span-3">
              <ContactForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                activeField={activeField}
                setActiveField={setActiveField}
              />
            </div>
          </div>
          
          <AlternativeContact />
        </div>
      </div>
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 mb-6 bg-[muted]/10 backdrop-blur-sm px-6 py-2.5 rounded-full">
        <div className="w-2 h-2 bg-[primary] rounded-full animate-pulse" />
        <span className="text-xs uppercase tracking-[0.3em] text-[primary] font-mono font-semibold">
          Get In Touch
        </span>
      </div>

      <div className="flex justify-center mb-4">
        <img src={logoFull} alt="Lowery's Masonry Logo" className="h-24 w-auto" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="text-gray-800">Contact </span>
        <span className="text-[primary]">Lowery's Masonry</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Ready to start your project? Have questions about our services? 
        We're here to help. Contact us today for a free estimate.
      </p>
    </div>
  );
}

function ContactInfoSidebar() {
  const infoItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "(850) 999-1234",
      subtext: "Call or text for quick response",
      action: "tel:+18509991234",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "roosevelt@lowerysmasonry.com",
      subtext: "We'll respond within 24 hours",
      action: "mailto:roosevelt@lowerysmasonry.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Crawfordville, FL",
      subtext: "Serving the Big Bend Region",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      content: "Mon - Fri: 7AM - 6PM",
      subtext: "Saturday by appointment",
    },
  ];

  return (
    <div className="lg:col-span-2 space-y-4">
      {/* Logo Badge */}
      <div className="flex justify-center mb-6 lg:mb-4">
        <img 
          src={logoTransparent} 
          alt="Lowery's Masonry Badge" 
          className="h-32 w-auto opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      {infoItems.map((item, index) => (
        <div key={index} className="group relative">
          {item.action ? (
            <a
              href={item.action}
              className="relative block bg-white rounded-2xl p-6 border border-gray-200
                       hover:border-[muted]/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[muted]/10 rounded-xl text-[primary] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {item.content}
                  </p>
                  <p className="text-sm text-gray-600">{item.subtext}</p>
                </div>
              </div>
            </a>
          ) : (
            <div className="relative bg-white rounded-2xl p-6 border border-gray-200
                          hover:border-[muted]/30 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[muted]/10 rounded-xl text-[primary] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {item.content}
                  </p>
                  <p className="text-sm text-gray-600">{item.subtext}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-6 p-6 bg-gradient-to-br from-[#06D6A0]/5 to-[#00FF22]/5 rounded-2xl border border-gray-900">
        <div className="text-center">
          <div className="text-3xl font-bold text-[primary] mb-2 border-b border-[primary]">
            Free Estimates
          </div>
          <p className="text-sm text-gray-600">
            We provide complimentary consultations and estimates for all projects.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ form, handleChange, handleSubmit, isSubmitting, submitStatus, activeField, setActiveField }: any) {
  return (
    <div className="relative group">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[muted]/10 rounded-lg">
            <Mail className="w-5 h-5 text-[primary]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Request a Quote</h2>
            <p className="text-sm text-gray-600">Tell us about your project</p>
          </div>
        </div>

        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-xl ${
            submitStatus.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
          }`}>
            <div className="flex items-center gap-2">
              {submitStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
              <span>{submitStatus.message}</span>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <FormField
            label="Full Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            activeField={activeField}
            setActiveField={setActiveField}
            icon="👤"
            required
          />

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
            required
          />

          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(850) 999-1234"
            activeField={activeField}
            setActiveField={setActiveField}
            icon="📞"
            required
          />

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-lg">🏗️</span>
              Service Needed
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800
                       focus:outline-none focus:ring-2 focus:ring-[muted]/50 focus:border-[primary]
                       transition-all duration-300 cursor-pointer"
            >
              <option value="">Select a service...</option>
              <option value="full-home-bricking">🏠 Full Home Bricking</option>
              <option value="chimney">🔥 Chimney Construction/Repair</option>
              <option value="stone-work">🪨 Stone Work</option>
              <option value="repairs">🔧 Repairs & Restoration</option>
              <option value="estimate">📋 Free Estimate</option>
              <option value="other">💬 Other Inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span className="text-lg">💬</span>
              Project Details
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
                className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-800 placeholder-gray-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-[muted]/50
                         transition-all duration-300
                         ${activeField === 'message' ? 'border-[primary] shadow-md' : 'border-gray-200'}`}
                placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {form.message.length} characters
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full group/btn overflow-hidden rounded-xl"
          >
            <div className="relative px-6 py-4 bg-[primary] rounded-xl
                          flex items-center justify-center gap-3 text-white font-semibold
                          hover:bg-[#6B1010] transition-colors duration-300
                          disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </div>
          </button>

          <p className="text-xs text-center text-gray-500">
            By sending a message, you agree to our{" "}
            <a href="#" className="text-[primary] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, name, type, value, onChange, placeholder, activeField, setActiveField, icon, required }: any) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <span className="text-lg">{icon}</span>
        {label} {required && <span className="text-[primary]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setActiveField(name)}
        onBlur={() => setActiveField(null)}
        required={required}
        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-800 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-[muted]/50
                   transition-all duration-300
                   ${activeField === name ? 'border-[primary] shadow-md' : 'border-gray-200'}`}
        placeholder={placeholder}
      />
    </div>
  );
}

function AlternativeContact() {
  const platforms = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "#", color: "hover:text-[#1877f2]" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "#", color: "hover:text-[#e4405f]" },
    { name: "Messenger", icon: <MessageCircle className="w-5 h-5" />, url: "#", color: "hover:text-[#0084ff]" },
  ];

  return (
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-2 mb-6">
        <div className="h-px w-8 bg-gray-300" />
        <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">
          Connect With Us
        </span>
        <div className="h-px w-8 bg-gray-300" />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            className={`group px-6 py-3 bg-white rounded-full border border-gray-700
                     transition-all duration-300 hover:scale-105 hover:shadow-md ${platform.color}`}
          >
            <span className="flex items-center gap-2">
              {platform.icon}
              <span className="text-sm text-gray-800 group-hover:text-inherit transition-colors">
                {platform.name}
              </span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Lowery's Masonry. All rights reserved.
        <br className="sm:hidden" />
        <span className="hidden sm:inline mx-2">•</span>
        Crawfordville, FL • Quality Masonry Since the 1960s
      </p>
    </div>
  );
}

export default Contact;