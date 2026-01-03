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
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="py-24 md:py-48 relative overflow-hidden reveal">
      {/* Intense Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[900px] md:h-[900px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-40">
          
          <div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end perspective-1000"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
             <div 
                className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-xl lg:max-w-none aspect-[4/5] transition-transform duration-700 ease-elegant lg:scale-[1.4] origin-center"
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
             >
                {/* Intense Multi-Color Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-brand-500/30 rounded-full blur-[90px] animate-pulse-slow"></div>
                
                <img 
                  src={MASCOT_IMAGE_URL}
                  alt="Hamza Hussain Creative Head" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                />

                {/* Vibrant Floating Info Cards */}
                <div className="absolute top-[20%] -left-8 z-50 ultra-glass p-3 pr-6 rounded-2xl animate-float-delayed flex items-center gap-4 backdrop-blur-3xl ring-2 ring-cyan-500/20 shadow-[0_0_40px_rgba(0,210,255,0.2)]">
                    <div className="bg-cyan-500/20 p-3 rounded-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                        <Palette className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-cyan-300 font-bold tracking-[0.2em] uppercase mb-1">Role</div>
                        <div className="text-white font-black text-sm tracking-wide whitespace-nowrap">Creative Head</div>
                    </div>
                </div>

                <div className="absolute bottom-[20%] -right-8 z-50 ultra-glass p-3 pr-6 rounded-2xl animate-float flex items-center gap-4 backdrop-blur-3xl ring-2 ring-purple-500/20 shadow-[0_0_40px_rgba(125,0,255,0.2)]">
                    <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/40 shadow-[0_0_20px_rgba(125,0,255,0.4)]">
                        <Layers className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-purple-300 font-bold tracking-[0.2em] uppercase mb-1">Expertise</div>
                        <div className="text-white font-black text-sm tracking-wide whitespace-nowrap">Visual Alchemist</div>
                    </div>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-black tracking-[0.3em] mb-8 shadow-[0_0_30px_rgba(0,210,255,0.15)]">
                <Sparkles className="w-4 h-4 animate-pulse" />
                VISIONARY DIRECTOR
             </div>

             <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85] drop-shadow-2xl">
               Hamza<br/>Hussain
             </h2>
             
             <div className="ultra-glass p-8 md:p-10 rounded-[2.5rem] border-l-4 border-l-cyan-500 mb-10 relative group hover:bg-cyan-500/5 transition-all duration-700 w-full shadow-2xl">
                <p className="text-white text-xl md:text-2xl italic leading-relaxed mb-6 font-light">
                  "Design is the <span className="text-cyan-400 font-bold">engineering of perception</span>."
                </p>
                <div className="flex items-center gap-6">
                   <div className="h-[2px] bg-gradient-to-r from-cyan-500 to-transparent flex-grow"></div>
                   <p className="text-zinc-400 font-bold tracking-widest text-xs uppercase">Est. MMXXIV</p>
                </div>
             </div>

             <p className="text-zinc-300 leading-relaxed mb-12 text-lg md:text-xl font-light max-w-xl">
                I bridge the absolute void between imagination and execution. Leading a collective of elite digital artisans to establish dominant visual presence for world-class brands.
             </p>

             <a 
               href="https://www.linkedin.com/in/hamzajutt4144/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-4 px-10 py-5 bg-[#0077b5] hover:bg-[#00a0dc] text-white rounded-full font-black shadow-[0_0_40px_rgba(0,119,181,0.4)] hover:shadow-[0_0_60px_rgba(0,160,220,0.6)] hover:-translate-y-2 transition-all duration-500 group text-lg"
             >
               <Linkedin className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-500" />
               Connect on LinkedIn
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;