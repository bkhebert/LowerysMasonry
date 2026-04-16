// SectionRow.tsx
import { useEffect, useRef } from "react";

type SectionRowProps = {
  title: string;
  description: string;
  image: string;
  logo?: string;
  reverse?: boolean;
};

function SectionRow({
  title,
  description,
  image,
  logo,
  reverse = false,
}: SectionRowProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center px-6 py-20
                 opacity-0 translate-y-8 transition-all duration-700 ease-out
                 [&.section-visible]:opacity-100 [&.section-visible]:translate-y-0
                 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* TEXT SIDE */}
      <div className="flex-1 flex flex-col gap-6 items-start">
        {/* Section Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-[0.2em] text-highlight font-mono">
            {reverse ? "Innovation" : "Technology"}
          </span>
          <div className="h-px w-8 bg-highlight/30" />
        </div>

        {/* TITLE with gradient */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-highlight 
                     bg-clip-text text-transparent">
          {title}
        </h2>

        {/* DESCRIPTION with improved readability */}
        <div className="relative">
          <p className="text-lg text-muted leading-relaxed max-w-xl
                      bg-surface/20 backdrop-blur-sm p-6 rounded-xl border border-border/20">
            {description}
          </p>
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-highlight/50 rounded-tl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-highlight/50 rounded-br" />
        </div>

        {/* LOGO (if provided) */}
        {logo && (
          <div className="flex items-center gap-3 mt-4">
            <div className="p-3 bg-surface/30 backdrop-blur-sm rounded-xl border border-border/30">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-sm text-muted font-mono">Official Partner</span>
          </div>
        )}
      </div>

      {/* IMAGE SIDE - Enhanced */}
      <div className="flex-1 relative">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-highlight/20 
                        rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
          
          {/* Image container */}
          <div className="relative overflow-hidden rounded-2xl border border-border/30 shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full object-cover transform transition-transform duration-700
                       group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-highlight/20 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  );
}

export default SectionRow;