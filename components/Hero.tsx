import React from 'react';
import { ArrowDownRight, Globe, Hexagon, Code2, PenTool, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToServices: () => void;
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToServices, scrollToContact }) => {
  const tags = [
    { label: 'STRATEGY', icon: <Hexagon className="w-3 h-3 text-white" /> },
    { label: 'DESIGN', icon: <PenTool className="w-3 h-3 text-white" /> },
    { label: 'DEVELOPMENT', icon: <Code2 className="w-3 h-3 text-white" /> },
    { label: 'MOTION', icon: <Sparkles className="w-3 h-3 text-white" /> }
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-36 pb-32 md:pt-28 md:pb-12 overflow-hidden bg-black">
      
      {/* --- ENHANCED CELESTIAL HORIZON EFFECT --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The Arc Light - Multi-layered for depth */}
        <div 
          className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[180%] aspect-square rounded-[100%] border-t-[2px] border-white/40"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.6) 0%, rgba(0, 85, 255, 0.2) 30%, transparent 60%)',
            filter: 'blur(90px)',
            opacity: 0.9
          }}
        ></div>
        
        {/* Intense Core Center Flare */}
        <div 
          className="absolute top-[41.5%] left-1/2 -translate-x-1/2 w-[40%] h-[100px] bg-white rounded-full"
          style={{
            filter: 'blur(45px) drop-shadow(0 0 60px #00d2ff)',
            opacity: 0.7
          }}
        ></div>

        {/* Sharp Horizontal Line for Contrast */}
        <div 
          className="absolute top-[41.8%] left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ opacity: 0.8 }}
        ></div>

        {/* Ambient Darkened Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="hidden md:flex absolute top-[15%] right-[15%] w-44 h-44 ultra-glass rounded-[3.5rem] items-center justify-center animate-float z-10 opacity-70 hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-[3.5rem]"></div>
        <Sparkles className="w-10 h-10 text-white drop-shadow-[0_0_15px_#00d2ff]" />
      </div>
      <div className="hidden md:flex absolute bottom-[20%] left-[10%] w-28 h-28 ultra-glass rounded-[2.5rem] items-center justify-center animate-float-delayed z-10 opacity-60 hover:opacity-90 transition-opacity duration-700">
         <div className="absolute inset-0 bg-gradient-to-bl from-accent-blue/20 to-transparent rounded-[2.5rem]"></div>
         <Hexagon className="w-8 h-8 text-white drop-shadow-[0_0_15px_#0055ff]" />
      </div>

      <div className="absolute top-24 md:top-32 left-0 w-full flex justify-center pointer-events-none z-20 opacity-0 animate-fade-in [animation-delay:800ms] animate-fill-mode-forwards">
         <div className="flex items-center gap-3 px-7 py-3 rounded-full ultra-glass bg-black/50 backdrop-blur-3xl shadow-[0_0_30px_rgba(0,210,255,0.2)] transform hover:scale-105 transition-transform duration-500 pointer-events-auto border border-white/20">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </div>
            <span className="text-[11px] font-bold text-white tracking-[0.25em] font-mono uppercase">System Active</span>
         </div>
      </div>

      <div className="container mx-auto px-6 z-30 mt-4 md:mt-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[13vw] md:text-[9.5rem] lg:text-[11rem] font-black leading-[0.85] md:leading-[0.82] tracking-tighter text-white mb-6 md:mb-12 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] text-center md:text-left">
            <span className="block animate-fade-in-up [animation-delay:100ms] opacity-0 text-white">DIGITAL</span>
            <span className="block animate-fade-in-up [animation-delay:300ms] opacity-0 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-text-shine bg-[length:200%_auto]">
                ALCHEMY.
              </span>
              <span className="absolute -inset-4 bg-cyan-500/20 blur-[100px] rounded-full opacity-30 animate-pulse-slow pointer-events-none"></span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
            <div className="md:col-span-7 animate-fade-in-up [animation-delay:400ms] opacity-0">
               <div className="pl-6 md:pl-3 border-l-4 border-cyan-500/70">
                 <p className="text-lg md:text-3xl lg:text-4xl text-zinc-100 font-light leading-snug max-w-2xl">
                   Transmuting raw ideas into <span className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]">visual gold</span>. 
                   We craft premium identities and brand experiences that defy convention.
                 </p>
               </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-10 animate-fade-in-up [animation-delay:600ms] opacity-0 items-start md:items-end">
              <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                 {tags.map((tag) => (
                    <div key={tag.label} className="group flex items-center gap-2.5 px-4 py-3 md:px-6 md:py-3.5 rounded-full ultra-glass bg-white/0 hover:bg-cyan-500/10 transition-all duration-500 cursor-default hover:scale-110">
                      <div className="group-hover:text-cyan-400 transition-colors">{tag.icon}</div>
                      <span className="text-[10px] md:text-[11px] text-zinc-300 group-hover:text-white transition-colors font-mono tracking-widest">{tag.label}</span>
                    </div>
                 ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 mt-2 w-full sm:w-auto">
                <button 
                  onClick={scrollToContact}
                  className="group relative px-10 py-5 md:px-12 md:py-6 bg-white text-black font-black text-xl rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] w-full sm:w-auto text-center justify-center flex"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Initiate Project
                    <ArrowDownRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
                  </span>
                </button>
                <button 
                  onClick={scrollToServices}
                  className="px-10 py-5 md:px-12 md:py-6 text-white rounded-full ultra-glass border-white/20 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.05] flex items-center justify-center gap-3 group w-full sm:w-auto"
                >
                  <span className="font-bold">Explore Services</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_#00d2ff]"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center pointer-events-none animate-fade-in [animation-delay:1200ms] opacity-0 z-40">
          <div className="flex flex-col items-center gap-3">
              <div className="w-7 h-12 rounded-full border-2 border-white/20 flex justify-center p-1.5 bg-black/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                 <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce"></div>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono tracking-[0.4em] uppercase">Scroll</span>
          </div>
      </div>
    </section>
  );
};

export default Hero;