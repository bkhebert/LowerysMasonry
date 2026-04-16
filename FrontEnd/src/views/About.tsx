// About.tsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
type TeamMember = {
  name: string;
  title: string;
  image: string;
  description: string;
  bio?: string;
  expertise?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

const team: TeamMember[] = [
  {
    name: "Max Dandry",
    title: "Founder / CEO / Lead Engineer",
    image: "/MaxProfilePic.png",
    description: "Builder focused on practical, real-world robotics.",
    bio: "Max Dandry is a hands-on builder with a background in fabrication, electrical work, and rapid prototyping. He builds complete robotic systems from the ground up, combining mechanical design, electronics, and software into working machines. His approach is rooted in real-world testing, fast iteration, and solving practical problems. He leads technical direction while maintaining direct ownership of system-level integration and testing.",
    expertise: [
    "Robotics Prototyping",
    "Mechanical Fabrication",
    "Electrical Wiring & Integration",
    "System Integration",
    "Rapid Iteration & Testing"
  ],
  },
  {
    name: "Barrington Hebert",
    title: "Software Engineer / DevOps",
    image: "BarryProfilePic.png",
    description: "Software developer and Marine veteran architecting scalable digital systems.",
    bio: "Barrington Hebert is a Marine veteran and software developer responsible for the company's digital infrastructure — from web and backend systems to data pipelines that support analysis and product development. His work ensures that operational and business systems scale together, with practical, maintainable architecture. Directly partnered with the CEO on technical execution.",
    expertise:[
    "Full-Stack Development",
    "API Dsegn & Integration",
    "Data Handling & Analysis",
    "Cloud Infrastructure & Deployment",
    "CyberSecurity",
  ],
  },
  {
    name: "Justin Tortorich",
    title: "IT & Business Development",
    image: "/JustinProfilePic.jpg",
    description: "IT leader and Army veteran building secure, scalable systems for robotics operations.",
    bio: "Justin Tortorich brings over a decade of IT leadership, most recently as VP of IT at M.S. Rau, where he managed infrastructure, security, and CRM operations. A veteran of Operation Iraqi Freedom and Operation New Dawn, he now leads IT and business development — aligning secure, scalable systems with growth strategy. Currently completing his Executive MBA at Tulane.",
    expertise: [
      "IT Infrastructure & Security",
      "Systems Integration",
      "Salesforce Administration",
      "Project Management",
      "Veteran Leadership"
    ],
  }
];

// Company values
const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries of what's possible in autonomous robotics",
    icon: "⚡",
  },
  {
    title: "Human-Centric Design",
    description: "Building robots that work alongside people, not against them",
    icon: "🤝",
  },
  {
    title: "Sustainable Future",
    description: "Creating technology that benefits both humanity and our planet",
    icon: "🌍",
  },
];

// Company milestones
const milestones = [
  { year: "2024", event: "Company Founded in New Orleans" },
  { year: "2025", event: "First Prototype Development" },
  { year: "2026", event: "Autonomous Navigation Breakthrough" },
];

function About() {
  return (
    <div className="min-h-screen bg-dark-gradient bg-fixed">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-highlight/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-glow/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <HeroAboutSection />

        {/* Company Story Section */}
        <CompanyStorySection milestones={milestones} />

        {/* Values Section */}
        <ValuesSection values={values} />

        {/* Team Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-highlight font-mono bg-surface/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30">
              The Minds Behind the Mission
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-highlight to-glow bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-highlight to-transparent mx-auto mt-6" />
        </div>

        {/* Team Members Grid */}
        <div className="space-y-20">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Join Us CTA */}
        <JoinUsSection />
      </div>
    </div>
  );
}

// Hero About Section
function HeroAboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="text-center mb-24 opacity-0 translate-y-8 transition-all duration-1000 ease-out
                 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
    >
      {/* Logo/Badge */}
      <div className="inline-flex items-center gap-3 mb-8 bg-surface/30 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30">
        <div className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
        <span className="text-sm uppercase tracking-wider text-muted font-mono">
          Our Story
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-6xl md:text-8xl font-bold mb-8">
        <span className="bg-gradient-to-r from-foreground via-highlight to-glow bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          About Us
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed
                    bg-surface/20 backdrop-blur-sm p-8 rounded-2xl border border-border/30">
        We're not just building robots. We're crafting the future of autonomous 
        mobility, one breakthrough at a time. Based in New Orleans, our team of 
        visionaries and engineers is redefining what's possible in robotics.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
        <StatCard number="2+" label="Years of Innovation" />
        <StatCard number="5+" label="Patents Pending" />
        <StatCard number="∞" label="Future Potential" />
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-highlight/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-border/30
                    hover:border-highlight/50 transition-all duration-300">
        <div className="text-4xl font-bold bg-gradient-to-r from-highlight to-glow bg-clip-text text-transparent mb-2">
          {number}
        </div>
        <div className="text-sm text-muted font-mono uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );
}

// Company Story Section
function CompanyStorySection({ milestones }: { milestones: Array<{ year: string; event: string }> }) {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) observer.observe(storyRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={storyRef}
      className="mb-24 opacity-0 translate-y-8 transition-all duration-700 ease-out
                 [&.section-visible]:opacity-100 [&.section-visible]:translate-y-0"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Story */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-highlight" />
            <span className="text-sm uppercase tracking-wider text-highlight font-mono">
              Our Journey
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            From Vision to Reality
          </h3>
          
          <div className="relative">
            <p className="text-lg text-muted leading-relaxed
                        bg-surface/20 backdrop-blur-sm p-6 rounded-xl border border-border/30">
              Founded in 2024 with a simple yet ambitious goal: to revolutionize 
              how robots navigate and interact with the real world. What started 
              as a passion project in a New Orleans garage has evolved into a 
              cutting-edge robotics company pushing the boundaries of autonomous 
              mobility.
            </p>
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-highlight/50 rounded-tl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-highlight/50 rounded-br" />
          </div>
        </div>

        {/* Right - Milestones */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-highlight" />
            <span className="text-sm uppercase tracking-wider text-highlight font-mono">
              Milestones
            </span>
          </div>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-surface/30 backdrop-blur-sm rounded-xl 
                              border border-border/30 flex items-center justify-center
                              group-hover:border-highlight/50 group-hover:shadow-glow 
                              transition-all duration-300">
                  <span className="text-2xl font-bold text-highlight font-mono">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-foreground font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Values Section
function ValuesSection({ values }: { values: Array<{ title: string; description: string; icon: string }> }) {
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={valuesRef}
      className="mb-24 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200
                 [&.section-visible]:opacity-100 [&.section-visible]:translate-y-0"
    >
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-xs uppercase tracking-[0.3em] text-highlight font-mono">
            What Drives Us
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-highlight bg-clip-text text-transparent">
          Our Core Values
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20 
                          rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-surface/20 backdrop-blur-sm rounded-2xl p-8 border border-border/30
                          hover:border-highlight/30 transition-all duration-300 h-full">
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out
                 [&.card-visible]:opacity-100 [&.card-visible]:translate-y-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative group">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-highlight/10 to-glow/10 
                      rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
        
        <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start
                      bg-surface/20 backdrop-blur-sm rounded-3xl p-8 md:p-10
                      border border-border/30 hover:border-highlight/30 transition-all duration-300">
          
          {/* Left Side - Image & Basic Info */}
          <div className="flex flex-col items-center md:w-64 flex-shrink-0">
            {/* Image with animated border */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-highlight to-glow 
                            rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-border/50
                            group-hover:border-highlight/50 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="text-2xl font-bold text-foreground mb-1 text-center">
              {member.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
              <p className="text-highlight font-mono text-sm uppercase tracking-wider">
                {member.title}
              </p>
            </div>

            {/* Social Links (placeholder) */}
            <div className="flex gap-3 mt-2">
              <div className="w-8 h-8 bg-surface/30 rounded-lg border border-border/30 
                            flex items-center justify-center cursor-pointer
                            hover:border-highlight/50 hover:bg-highlight/10 transition-all">
                <span className="text-muted text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-surface/30 rounded-lg border border-border/30 
                            flex items-center justify-center cursor-pointer
                            hover:border-highlight/50 hover:bg-highlight/10 transition-all">
                <span className="text-muted text-sm">𝕏</span>
              </div>
            </div>
          </div>

          {/* Right Side - Bio & Expertise */}
          <div className="flex-1 space-y-6">
            {/* Bio */}
            <div className="relative">
              <p className="text-lg text-muted leading-relaxed">
                {member.bio || member.description}
              </p>
              {/* Decorative quote marks */}
              <span className="absolute -top-4 -left-2 text-6xl text-highlight/10 font-serif">"</span>
              <span className="absolute -bottom-4 -right-2 text-6xl text-highlight/10 font-serif rotate-180">"</span>
            </div>

            {/* Expertise Tags */}
            {member.expertise && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px w-4 bg-highlight/50" />
                  <span className="text-xs uppercase tracking-wider text-highlight font-mono">
                    Expertise
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-surface/30 backdrop-blur-sm rounded-lg 
                               text-sm text-foreground border border-border/30
                               hover:border-highlight/50 hover:bg-highlight/5 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quote/Testimonial */}
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-highlight/10 rounded-xl border border-border/20">
              <p className="text-sm text-muted italic">
                "Driven by the belief that autonomous systems should enhance human potential, 
                not replace it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Join Us CTA Section
function JoinUsSection() {
  return (
    <div className="mt-24 text-center">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface/50 to-background/50 
                    backdrop-blur-xl border border-border/30 p-12 md:p-16">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-highlight to-glow 
                     bg-clip-text text-transparent">
          Join Our Mission
        </h3>
        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
          We're always looking for passionate individuals who want to shape the future 
          of autonomous robotics. Ready to make an impact?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
          <button className="px-8 py-3 bg-gradient-to-r from-highlight to-glow rounded-xl 
                           text-background font-semibold shadow-glow
                           hover:scale-105 transition-all duration-300">
            View Open Positions
          </button>
          </Link>
          <Link to="/contact">
          <button className="px-8 py-3 border border-highlight/50 rounded-xl text-highlight font-semibold
                           backdrop-blur-sm bg-surface/20 hover:bg-highlight/10 
                           transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;