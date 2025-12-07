import React, { useRef, useState, useEffect } from 'react';
import { Linkedin, Sparkles, Palette, Zap, AlertCircle } from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [imgSrc, setImgSrc] = useState<string>("mascot.png");
  const [imgError, setImgError] = useState<boolean>(false);

  // Effect to retry loading if needed, or handle cache busting logic if we wanted to be complex.
  // For now, we rely on the onError handler.

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

  const handleImageError = () => {
    if (!imgError) {
      console.warn("Could not load mascot.png. Switching to fallback.");
      setImgError(true);
      // Fallback to a high-quality 3D avatar from Unsplash that matches the vibe
      setImgSrc("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"); 
    }
  };

  return (
    <section id="about" className="py-40 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* 1. Mascot / Image Side */}
          <div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end perspective-1000"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
             <div 
                className="relative w-full max-w-md aspect-[4/5] transition-transform duration-500 ease-out-expo"
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
             >
                {/* Glow behind character */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-purple-500/10 rounded-full blur-[80px] animate-pulse-slow"></div>
                
                {/* 
                   Dynamic Image Component
                   Tries to load 'mascot.png'. If it fails, loads a fallback and shows a warning.
                */}
                <img 
                  src={imgSrc}
                  onError={handleImageError}
                  alt="Hamza Hussain Mascot" 
                  className={`relative z-10 w-full h-full object-contain animate-float drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] transform scale-105 ${imgError ? 'opacity-80 grayscale-[0.2]' : ''}`}
                />

                {/* Error Indicator / Helper UI */}
                {imgError && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/30 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 z-50 animate-fade-in-up">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-mono text-red-200">mascot.png not found</span>
                  </div>
                )}

                {/* Floating Info Cards attached to the 3D space */}
                <div className="absolute top-24 -left-8 mac-glass p-4 pr-6 rounded-2xl animate-float-delayed flex items-center gap-4 backdrop-blur-2xl border border-white/10 shadow-2xl transition-transform hover:scale-105 duration-300">
                    <div className="bg-brand-500/10 p-3 rounded-xl border border-brand-500/20">
                        <Palette className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-1">Role</div>
                        <div className="text-white font-bold text-sm tracking-wide">Creative Head</div>
                    </div>
                </div>

                <div className="absolute bottom-32 -right-8 mac-glass p-4 pr-6 rounded-2xl animate-float flex items-center gap-4 backdrop-blur-2xl border border-white/10 shadow-2xl transition-transform hover:scale-105 duration-300">
                    <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                        <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-1">Experience</div>
                        <div className="text-white font-bold text-sm tracking-wide">5+ Years</div>
                    </div>
                </div>
             </div>
          </div>

          {/* 2. Content Side */}
          <div className="w-full lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-300 text-[10px] font-mono tracking-[0.2em] mb-8">
                <Sparkles className="w-3 h-3" />
                THE CREATIVE LEAD
             </div>

             <h2 className="text-5xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
               Hamza<br/>Hussain
             </h2>
             
             {/* The "Manifesto" Card */}
             <div className="mac-glass p-8 rounded-3xl border-l-2 border-l-brand-500 mb-10 relative group hover:bg-white/5 transition-all duration-500">
                <p className="text-zinc-200 text-xl italic leading-relaxed mb-6 relative z-10 font-light">
                  "Graphic designers aren’t video editors, motion artists, or brand strategists..."
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-px bg-white/10 flex-grow"></div>
                   <p className="text-white font-bold tracking-tight">I missed that memo.</p>
                </div>
             </div>

             <p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light max-w-lg">
                I’m a multidisciplinary designer who creates visuals that get results. No silos. No ego. Just high-end design, motion, and branding delivered with speed and range.
             </p>

             {/* Tech Stack Mini-Cloud */}
             <div className="flex flex-wrap gap-2 mb-12">
                {['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Figma', 'Blender'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-mono text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all cursor-default">
                    {tool}
                  </span>
                ))}
             </div>

             <a 
               href="https://www.linkedin.com/in/hamzajutt4144/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077b5] hover:bg-[#006097] text-white rounded-full font-bold shadow-[0_0_30px_rgba(0,119,181,0.3)] hover:shadow-[0_0_50px_rgba(0,119,181,0.5)] hover:-translate-y-1 transition-all duration-300 group"
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