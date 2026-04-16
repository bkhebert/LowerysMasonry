// Home.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionRow from "../components/SectionRow";
import productImage from "/yearofthewagon.jpg";
import productImage2 from "/yearofthewagon2.jpg";
import productImage3 from "/yearofthewagon3.jpg";
import logo from "/hflogosmall.png";

function Home() {
  return (
    <div className="min-h-screen bg-dark-gradient bg-fixed">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-highlight/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        {/* HERO SECTION - Special treatment */}
        <HeroSection
          title="Happy Futures Robotics"
          description="Happy Futures Robotics is an emerging technology company focused on the development of intelligent, autonomous robotic systems. The company is currently designing a next-generation mobile robot capable of navigating real-world environments independently using advanced AI and sensor integration. Currently it is Real-world tested, core behaviors are working, and it acts as an autonomous robot that follows humans intelligently. Contact us for product demonstrations or other inquiries."
          image={productImage}
          logo={logo}
        />

        {/* Divider with gradient */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* OTHER SECTIONS */}
        <SectionRow
          title="What We Do"
          description="As a small, self-funded team, we are currently in the early stages of designing and prototyping a mobile robot capable of navigating environments independently through the integration of robotics, artificial intelligence, and advanced sensor technologies. Our work is driven by a hands-on, iterative development process, allowing us to rapidly test, refine, and improve our systems without the constraints of traditional funding structures. By combining practical engineering with emerging AI capabilities, we are building a foundation for scalable solutions in autonomous mobility."
          image={productImage2}
          reverse
        />

        {/* Divider with gradient */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <SectionRow
          title="Why Choose Us"
          description="Happy Futures Robotics is a New Orleans–based startup focused on developing intelligent, autonomous robotic systems for real-world applications. While still in its early phase, Happy Futures Robotics is actively positioning itself to enter the growing market of last-mile automation, with the long-term goal of delivering efficient, adaptable robotic platforms that can operate in dynamic, real-world settings."
          image={productImage3}
        />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}

// Special Hero Section with animations
function HeroSection({ title, description, image, logo }: any) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center px-6 py-24 min-h-[90vh]">
      {/* TEXT SIDE */}
      <div className="flex-1 flex flex-col gap-8 items-start">
        {/* Logo Badge */}
        {logo && (
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-surface/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-glow">
              <img
                src={logo}
                alt="HFR Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted font-mono">
              Est. 2024 • New Orleans
            </span>
          </div>
        )}

        {/* Animated Title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold leading-tight opacity-0 translate-y-4 transition-all duration-1000 ease-out
                     [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <span className="bg-gradient-to-r from-foreground via-highlight to-glow bg-clip-text text-transparent animate-rainbow">
            {title}
          </span>
        </h1>

        {/* Subtitle line */}
        <div className="flex items-center gap-4">
          <div className="h-0.5 w-12 bg-gradient-to-r from-highlight to-transparent" />
          <span className="text-sm uppercase tracking-wider text-highlight font-mono">
            Autonomous Robotics
          </span>
        </div>

        {/* Description with glass effect */}
        <p className="text-lg md:text-xl text-muted/90 leading-relaxed max-w-2xl 
                      bg-surface/30 backdrop-blur-sm p-6 rounded-2xl border border-border/30
                      shadow-lg">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 pt-4">
          <Link to="/about">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primaryDark 
                           rounded-xl text-foreground font-semibold overflow-hidden
                           transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <span className="relative z-10">Explore Technology</span>
            <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-glow/20 
                          translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          </Link>
          <Link to="/about">
          <button className="px-8 py-4 border border-highlight/50 rounded-xl text-highlight font-semibold
                           backdrop-blur-sm bg-surface/20 hover:bg-highlight/10 
                           transition-all duration-300 hover:scale-105 hover:border-highlight">
            Meet the Team
          </button>
          </Link>
        </div>
      </div>

      {/* IMAGE SIDE - Enhanced with 3D effect */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-highlight/20 rounded-2xl blur-2xl animate-pulse" />
        <div
          ref={imageRef}
          className="relative opacity-0 scale-95 transition-all duration-1000 ease-out delay-300
                     [&.animate-in]:opacity-100 [&.animate-in]:scale-100"
        >
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-highlight to-glow 
                          rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            <img
              src={image}
              alt={title}
              className="relative w-full max-w-lg rounded-2xl border border-border/50 
                       shadow-2xl transform transition-transform duration-500
                       group-hover:scale-[1.02] group-hover:rotate-1"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent 
                          rounded-2xl opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}

// CTA Section
function CTASection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface/50 to-background/50 
                    backdrop-blur-xl border border-border/30 p-16 text-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-highlight to-glow 
                     bg-clip-text text-transparent">
          Ready to Shape the Future?
        </h2>
        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Join us in revolutionizing autonomous robotics. Be part of the next breakthrough in mobile AI technology.
        </p>
        <Link to="/contact">
        <button className="px-10 py-5 bg-gradient-to-r from-highlight to-glow rounded-xl 
                         text-background font-bold text-lg shadow-glow
                         hover:scale-105 hover:shadow-2xl transition-all duration-300
                         animate-pulse">
          Partner With Us
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;