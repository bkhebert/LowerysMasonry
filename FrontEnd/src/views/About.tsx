import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Award, Hammer, Users, Clock, MapPin, BrickWall, Heart, GraduationCap, Newspaper, Footprints } from 'lucide-react';

// Import images
import rooseveltCloseup from "/rooseveltcloseup.png";
import rooseveltSuit from "/RooseveltLoweryInASuit.png";
import newspaperCloseup from "/picofrooseveltinnewspapercloseup.jpg";
import newspaperFull from "/RooseveltLoweryInNewsPaperFullArticle.jpg";
import workCompilation from "/lowerydoingconstructioncompilationof4photos.jpg";
import teamWorking from "/LoweryAndHisTeamWorking.png";
import famuFan from "/RooseveltFAMUFootballfan.png";
import famuInvestment from "/lowerysmasonryinvestingintofloridauniversity.jpg";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 ">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <HeroAboutSection />
        <ValuesSection />
        
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[primary] font-mono font-semibold bg-[muted]/10 px-4 py-2 rounded-full">
              Meet The Team
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
            The People Behind <span className="text-[primary]">The Craft</span>
          </h2>
          <div className="h-0.5 w-24 bg-[primary] mx-auto mt-6" />
        </div>
        
        <TeamSection />
        <CompanyStorySection />
        <CommunityImpactSection />
        <JoinUsSection />
      </div>
    </div>
  );
}

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
      <div className="inline-flex items-center gap-3 mb-8 bg-[muted]/10 backdrop-blur-sm px-6 py-3 rounded-full">
        <div className="w-2 h-2 bg-[primary] rounded-full animate-pulse border border-black" />
        <span className="text-sm uppercase tracking-wider text-[primary] font-mono font-semibold">
          Our Story
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/3">
          <div className="relative rounded-2xl overflow-hidden border-4 border-[muted]/20 shadow-xl">
            <img 
              src={rooseveltCloseup} 
              alt="Roosevelt Lowery - Master Mason"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:w-2/3 text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gray-800">About </span>
            <span className="text-[primary]">Roosevelt Lowery</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master Mason, Community Pillar, and Family Man with over 60 years of 
            dedication to the craft of masonry and the people of North Florida.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
        <StatCard number="60+" label="Years of Experience" />
        <StatCard number="1000+" label="Projects Completed" />
        <StatCard number="100%" label="Customer Satisfaction" />
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="group relative">
      <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-md
                    hover:shadow-lg hover:border-[muted]/20 transition-all duration-300">
        <div className="text-4xl font-bold text-[primary] mb-2">
          {number}
        </div>
        <div className="text-sm text-gray-600 font-mono uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );
}

function CompanyStorySection() {
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
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[primary]" />
            <span className="text-sm uppercase tracking-wider text-[primary] font-mono font-semibold">
              A Legacy of Excellence
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            From Humble Beginnings to Master Mason
          </h3>
          
          <div className="relative">
            <p className="text-lg text-gray-700 leading-relaxed mb-4
                        bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
              Roosevelt Lowery's journey in masonry began over 60 years ago in New Orleans, 
              where he learned the trade from master craftsmen and developed a passion for 
              building lasting structures. After contributing to numerous iconic projects 
              throughout the Crescent City, he brought his expertise to North Florida, 
              where he has since become a trusted name in masonry.
            </p>
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[muted]/50 rounded-tl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[muted]/50 rounded-br" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <img 
                src={rooseveltSuit} 
                alt="Roosevelt Lowery professional"
                className="w-full h-70 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <img 
                src={newspaperCloseup} 
                alt="Roosevelt featured in newspaper"
                className="w-full h-70 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden border-2 border-[muted]/20 shadow-lg">
            <img 
              src={workCompilation} 
              alt="Roosevelt Lowery working on masonry projects compilation"
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-gradient-to-r from-[#878787]/5 to-[#5B5B67]/5 p-6 rounded-xl border border-gray-200">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-[primary] flex-shrink-0 mt-1" />
              <p className="text-gray-700 italic">
                "Building with integrity, one brick at a time — that's the Lowery family promise. 
                I treat every home like it's my own, because your family deserves the same quality 
                I'd want for mine."
              </p>
            </div>
            <p className="text-right text-[primary] font-semibold mt-3">— Roosevelt Lowery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityImpactSection() {
  const impactRef = useRef<HTMLDivElement>(null);

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

    if (impactRef.current) observer.observe(impactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={impactRef}
      className="mb-24 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200
                 [&.section-visible]:opacity-100 [&.section-visible]:translate-y-0"
    >
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[primary] font-mono font-semibold">
            Beyond Brick & Mortar
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          A Pillar of <span className="text-[primary]">The Community</span>
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Roosevelt's impact extends far beyond the homes he builds. He's dedicated to 
          uplifting Crawfordville, Tallahassee, and the surrounding communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* First Card - FAMU Investment */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
          <div className="w-full overflow-hidden bg-gray-100">
            <img 
              src={famuInvestment} 
              alt="Roosevelt Lowery investing in Florida A&M University"
              className="w-full object-contain hover:scale-105 transition-transform duration-500"
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="p-6 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-[primary]" />
              <span className="text-sm font-semibold text-[primary]">Education & Youth</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Investing in Future Generations</h4>
            <p className="text-gray-600">
              Roosevelt has been a proud supporter of Florida A&M University and local 
              educational initiatives, believing that strong communities start with 
              strong educational opportunities for our youth.
            </p>
          </div>
        </div>

        {/* Second Card - FAMU Football Fan */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
          <div className="w-full overflow-hidden bg-gray-100">
            <img 
              src={famuFan} 
              alt="Roosevelt Lowery at FAMU football game"
              className="w-full object-contain hover:scale-105 transition-transform duration-500"
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="p-6 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Footprints className="w-5 h-5 text-[primary]" />
              <span className="text-sm font-semibold text-[primary]">Community Spirit</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">A True Rattler at Heart</h4>
            <p className="text-gray-600">
              A passionate Florida A&M University supporter, Roosevelt can often be found 
              cheering on the Rattlers, embodying the spirit and pride of our local HBCU 
              community.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Newspaper Article Section */}
      <div className="mt-8 bg-gradient-to-r from-[#878787]/5 to-[#5B5B67]/5 rounded-2xl p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img 
                src={newspaperFull} 
                alt="Full newspaper article featuring Roosevelt Lowery"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <Newspaper className="w-8 h-8 text-[primary] mb-3" />
            <h4 className="text-2xl font-bold text-gray-800 mb-3">Recognized for Excellence</h4>
            <p className="text-gray-700 leading-relaxed">
              Roosevelt's dedication to quality craftsmanship and community service has 
              been featured in local newspapers and publications throughout North Florida. 
              His story serves as an inspiration to aspiring masons and entrepreneurs 
              across the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every brick laid with precision and care, built to last for generations",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Family Values",
      description: "Treating every client like family, with honesty and respect",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Community First",
      description: "Investing time and resources into making North Florida stronger",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[primary] font-mono font-semibold">
            What Drives Us
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Core Values
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="group relative">
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200
                          hover:border-[muted]/20 hover:shadow-xl transition-all duration-300 h-full">
              <div className="text-[primary] mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      name: "Roosevelt Lowery",
      title: "Founder & Master Mason",
      image: rooseveltCloseup,
      bio: "With over 60 years of experience, Roosevelt is the heart and soul of Lowery's Masonry. His journey from apprentice to master mason is a testament to hard work, dedication, and an unwavering commitment to quality. Known for his strong moral character and positive attitude, Roosevelt treats every project—and every client—like family.",
      expertise: ["Master Masonry", "Structural Engineering", "Historic Restoration", "Project Management", "Custom Design"],
    },
    {
      name: "The Lowery Team",
      title: "Skilled Craftsmen",
      image: teamWorking,
      bio: "Working alongside Roosevelt is a dedicated team of skilled craftsmen who share his commitment to quality and attention to detail. Together, they bring decades of combined experience to every project, ensuring that each job is completed to the highest standards of craftsmanship.",
      expertise: ["Brick Laying", "Stone Veneer", "Chimney Repair", "Concrete Work", "Tuckpointing"],
    },
  ];

  return (
    <div className="space-y-16">
      {teamMembers.map((member, index) => (
        <div key={index} className="group">
          <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start
                        bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200
                        hover:shadow-2xl transition-all duration-300">
            
            <div className="flex flex-col items-center md:w-80 flex-shrink-0">
              <div className="relative mb-6 w-full">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[muted]/20
                              group-hover:border-[muted]/40 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-1 text-center">
                {member.name}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[primary] rounded-full animate-pulse" />
                <p className="text-[primary] font-mono text-sm uppercase tracking-wider font-semibold">
                  {member.title}
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="relative">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
                <span className="absolute -top-4 -left-2 text-6xl text-[muted]/10 font-serif">"</span>
                <span className="absolute -bottom-4 -right-2 text-6xl text-[muted]/10 font-serif rotate-180">"</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px w-4 bg-[muted]/50" />
                  <span className="text-xs uppercase tracking-wider text-[primary] font-mono font-semibold">
                    Expertise
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[muted]/5 rounded-lg 
                               text-sm text-gray-700 border border-[muted]/10
                               hover:border-[muted]/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {member.name === "Roosevelt Lowery" && (
                <div className="mt-6 p-4 bg-gradient-to-r from-[#878787]/5 to-[#5B5B67]/5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    "Roosevelt's work ethic and moral character are unmatched. He's not just building walls — 
                    he's building trust in our community, one project at a time."
                  </p>
                  <p className="text-right text-[primary] font-semibold text-sm mt-2">
                    — Longtime Customer
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function JoinUsSection() {
  return (
    <div className="mt-24 text-center">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[muted]/10 to-[#A9A9A9]/10 
                    backdrop-blur-sm border border-gray-200 p-12 md:p-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Ready to <span className="text-[primary]">Build Something</span> Great?
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Contact us today for a free estimate. Let our family help build your dream project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="px-8 py-3 bg-[#00FF22] rounded-xl text-black font-semibold shadow-lg
                             hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Free Estimate
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-3 border-2 border-[primary] rounded-xl text-[primary] font-semibold
                             hover:bg-[primary] hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;