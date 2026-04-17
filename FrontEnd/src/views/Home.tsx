import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Award, Clock, Hammer, Home as HomeIcon, BrickWall, Building2 } from 'lucide-react';

// Import images
import workExample1 from "/workexample1.png";
import workExample2 from "/workexample2.png";
import workExample3 from "/workexample3.png";
import closeupBrickwork from "/closupofbrickwork.jpg";
import garden1 from "/garden.png";
import repair1 from "/repair.png";
import brickhouse1 from "/brickhouse.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <ServicesSection />
        <ServiceAreasSection />
        <WhyChooseUsSection />
        <CTASection />
      </div>
    </div>
  );
}

function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center px-6 py-24 min-h-[90vh]">
      <div className="flex-1 flex flex-col gap-8 items-start">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-muted/10 backdrop-blur-sm rounded-xl border border-muted/20">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-semibold">
            Est. 1960s • Crawfordville, FL
          </span>
        </div>
        
        <div
          ref={titleRef}
          className="w-full flex flex-col items-center text-center opacity-0 translate-y-4 transition-all duration-1000 ease-out
                     [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <img 
            src="/lowerysmasonrylogo.png" 
            alt="Lowery's Masonry" 
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 max-w-2xl h-auto mx-auto"
          />
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-mono font-semibold">
              60+ Years of Excellence
            </span>
            <div className="h-0.5 w-12 bg-primary" />
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl 
                      bg-surface/80 backdrop-blur-sm p-6 rounded-2xl border border-border
                      shadow-lg">
          Expert masonry services throughout Crawfordville, Tallahassee, and surrounding areas. 
          From complete home bricking and chimney construction to custom stonework, 
          Roosevelt Lowery and his team bring over six decades of craftsmanship to every project.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/contact">
            <button className="group relative px-8 py-4 bg-[#00FF22] rounded-xl text-black font-semibold overflow-hidden
                             transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10">Get Free Estimate</span>
            </button>
          </Link>
          <a href="tel:+18509991234">
            <button className="px-8 py-4 border-2 border-primary rounded-xl text-primary font-semibold
                             hover:bg-primary hover:text-white transition-all duration-300">
              <Phone className="inline-block w-4 h-4 mr-2" />
              Call Now
            </button>
          </a>
        </div>
        
        <div className="flex flex-wrap gap-6 pt-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/70">60+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/70">Family Owned</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/70">Licensed & Insured</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-muted/20 rounded-2xl blur-2xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-muted/5 to-highlight/5 rounded-2xl p-2
                      border-2 border-muted/20 overflow-hidden">
          <img 
            src={workExample1} 
            alt="Lowery's Masonry brick work example"
            className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Full Home Bricking",
      description: "Complete brick exterior installation for new homes or renovation projects.",
      image: brickhouse1,
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Chimney Construction",
      description: "Custom chimney design and construction, including repairs and restoration.",
      image: workExample2,
    },
    {
      icon: <BrickWall className="w-8 h-8" />,
      title: "Brick & Stone Work",
      description: "Decorative brick patterns, stone veneers, and custom masonry features.",
      image: garden1,
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Repairs & Restoration",
      description: "Professional repair of existing masonry structures, tuckpointing, and sealing.",
      image: repair1,
    },
  ];
  
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4 bg-muted/10 px-6 py-2 rounded-full border border-black">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-semibold">
            Our Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Quality Masonry Work
        </h2>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          From historic restoration to new construction, we bring expertise and precision to every project
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-surface rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                     border border-border hover:border-muted/20 overflow-hidden"
          >
            {service.image && (
              <div className="mb-4 rounded-lg overflow-hidden h-32">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            )}
            <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-foreground/70">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceAreasSection() {
  const areas = [
    "Crawfordville, FL",
    "Tallahassee, FL",
    "Wakulla County",
    "Leon County",
    "Surrounding Areas"
  ];
  
  return (
    <div className="w-full bg-muted/5 py-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 bg-surface/80 px-6 py-2 rounded-full border border-black">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-semibold">
              Service Areas
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proudly Serving North Florida
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Based in Crawfordville, we provide expert masonry services throughout the Big Bend region
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg p-4 text-center shadow-md border border-border
                       hover:shadow-lg hover:border-muted/20 transition-all"
            >
              <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-foreground font-medium">{area}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-foreground/70">
            Don't see your area? Contact us to see if we can help with your project!
          </p>
        </div>
      </div>
    </div>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      title: "60+ Years of Experience",
      description: "Master craftsman with over six decades of hands-on masonry expertise.",
    },
    {
      title: "Family-Owned & Operated",
      description: "Personal attention and pride in every project we undertake.",
    },
    {
      title: "Local Expertise",
      description: "Deep knowledge of North Florida architecture and building standards.",
    },
    {
      title: "Quality Guaranteed",
      description: "We stand behind our work with complete customer satisfaction.",
    },
  ];
  
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 mb-4 bg-muted/10 px-6 py-2 rounded-full border border-black">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-semibold">
              Why Lowery's Masonry
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Craftsmanship That Stands the Test of Time
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            For over 60 years, Roosevelt Lowery has been building lasting relationships 
            and beautiful masonry structures throughout North Florida. From historic 
            homes in New Orleans to new developments in Tallahassee, our work speaks 
            for itself.
          </p>
          
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-surface rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="bg-gradient-to-br from-muted/5 to-highlight/5 rounded-2xl p-2
                        border-2 border-muted/20 overflow-hidden">
            <img 
              src={workExample3} 
              alt="Lowery's Masonry craftsmanship example"
              className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="w-full relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${closeupBrickwork})` }}
      >
        <div className="absolute inset-0 bg-muted/90" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us today for a free estimate. Let our family help build your dream home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="px-10 py-5 bg-surface text-primary rounded-xl font-bold text-lg
                             hover:shadow-xl transition-all duration-300">
              Get Free Estimate
            </button>
          </Link>
          <a href="tel:+18509991234">
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg
                             hover:bg-white hover:text-primary transition-all duration-300">
              Call: (850) 999-1234
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;