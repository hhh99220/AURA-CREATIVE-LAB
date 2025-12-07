import React, { useRef, useState } from 'react';
import { Linkedin, Sparkles, Palette, Layers } from 'lucide-react';

const MASCOT_IMAGE_URL = "https://i.postimg.cc/135PSQz4/mascot.png";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smoother parallax tilt
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="py-16 md:py-40 relative overflow-hidden reveal">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-500/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
          
          {/* 1. Mascot / Image Side - VISIBLE FIRST ON MOBILE NOW */}
          <div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end perspective-1000 mb-8 lg:mb-0"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
             {/* 
                Mobile: Adjusted max-width to be larger but contained. 
                Added a subtle bottom gradient to anchor the mascot so it doesn't float weirdly.
             */}
             <div 
                className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-none aspect-[4/5] transition-transform duration-500 ease-out-expo lg:scale-[1.35] origin-center"
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
             >
                {/* Glow behind character */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-full blur-[60px] md:blur-[80px] animate-pulse-slow"></div>
                
                <img 
                  src={MASCOT_IMAGE_URL}
                  alt="Hamza Hussain Creative Head" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                />
                
                {/* Mobile-only anchor shadow/gradient at feet */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-[100%] md:hidden"></div>

                {/* Floating Info Cards - Visible on Mobile Now */}
                <div className="absolute top-[25%] -left-6 md:top-[20%] md:-left-4 z-50 ultra-glass p-2 pr-4 md:p-4 md:pr-6 rounded-xl md:rounded-2xl animate-float-delayed flex items-center gap-3 md:gap-4 backdrop-blur-2xl transition-transform hover:scale-105 duration-300 ring-1 ring-white/10">
                    <div className="bg-brand-500/10 p-2 md:p-3 rounded-lg md:rounded-xl border border-brand-500/20 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                        <Palette className="w-3 h-3 md:w-5 md:h-5 text-brand-400" />
                    </div>
                    <div>
                        <div className="text-[8px] md:text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-0.5 md:mb-1">Role</div>
                        <div className="text-white font-bold text-xs md:text-sm tracking-wide whitespace-nowrap">Creative Head</div>
                    </div>
                </div>

                <div className="absolute bottom-[20%] -right-6 md:bottom-[25%] md:-right-4 z-50 ultra-glass p-2 pr-4 md:p-4 md:pr-6 rounded-xl md:rounded-2xl animate-float flex items-center gap-3 md:gap-4 backdrop-blur-2xl transition-transform hover:scale-105 duration-300 ring-1 ring-white/10">
                    <div className="bg-purple-500/10 p-2 md:p-3 rounded-lg md:rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <Layers className="w-3 h-3 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-[8px] md:text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-0.5 md:mb-1">Expertise</div>
                        <div className="text-white font-bold text-xs md:text-sm tracking-wide whitespace-nowrap">Versatile Graphic Designer</div>
                    </div>
                </div>
             </div>
          </div>

          {/* 2. Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-300 text-[10px] font-mono tracking-[0.2em] mb-6 md:mb-8 shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                <Sparkles className="w-3 h-3" />
                VISIONARY
             </div>

             <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 md:mb-8 leading-[0.9]">
               Hamza<br/>Hussain
             </h2>
             
             {/* The "Manifesto" Card */}
             <div className="ultra-glass p-6 md:p-8 rounded-3xl border-l-2 border-l-brand-500 mb-8 md:mb-10 relative group hover:bg-white/5 transition-all duration-500 w-full">
                <p className="text-zinc-200 text-lg md:text-xl italic leading-relaxed mb-4 md:mb-6 relative z-10 font-light">
                  "Design isn't just about aesthetics; it's about engineering perception."
                </p>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                   <div className="h-px bg-white/10 w-12 lg:flex-grow"></div>
                   <p className="text-white font-bold tracking-tight text-sm md:text-base">Crafting the intangible.</p>
                </div>
             </div>

             <p className="text-zinc-400 leading-relaxed mb-8 md:mb-10 text-base md:text-lg font-light max-w-lg">
                I bridge the gap between imagination and execution. Leading a collective of digital artisans, I help brands, creators, and businesses establish a dominant visual presence. From complex brand systems to immersive web experiences.
             </p>

             {/* Tech Stack Mini-Cloud */}
             <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 md:mb-12">
                {['Brand Strategy', 'Visual Identity', 'Web Experience', 'Motion Design', 'Creative Direction'].map((tool) => (
                  <span key={tool} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/5 rounded-lg text-[10px] md:text-xs font-mono text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all cursor-default">
                    {tool}
                  </span>
                ))}
             </div>

             <a 
               href="https://www.linkedin.com/in/hamzajutt4144/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#0077b5] hover:bg-[#006097] text-white rounded-full font-bold shadow-[0_0_30px_rgba(0,119,181,0.3)] hover:shadow-[0_0_50px_rgba(0,119,181,0.5)] hover:-translate-y-1 transition-all duration-300 group text-sm md:text-base"
             >
               <Linkedin className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
               Connect on LinkedIn
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
