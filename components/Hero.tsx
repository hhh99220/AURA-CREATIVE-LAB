import React from 'react';
import { ArrowDownRight, Globe, Hexagon, Code2, PenTool, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToServices: () => void;
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToServices, scrollToContact }) => {
  // Broader, more premium tags
  const tags = [
    { label: 'STRATEGY', icon: <Hexagon className="w-3 h-3 text-white" /> },
    { label: 'DESIGN', icon: <PenTool className="w-3 h-3 text-white" /> },
    { label: 'DEVELOPMENT', icon: <Code2 className="w-3 h-3 text-white" /> },
    { label: 'MOTION', icon: <Sparkles className="w-3 h-3 text-white" /> }
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-36 pb-32 md:pt-28 md:pb-12 overflow-hidden perspective-1000">
      
      {/* Background Atmosphere - Conic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-conic from-brand-900/20 via-purple-900/10 to-brand-900/20 rounded-full blur-[80px] md:blur-[100px] animate-spin-slow opacity-60 pointer-events-none"></div>

      {/* Floating Decorative Glass Elements - Hidden on small mobile to reduce clutter */}
      <div className="hidden md:flex absolute top-[15%] right-[15%] w-40 h-40 ultra-glass rounded-[3rem] items-center justify-center animate-float z-0 opacity-60 hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem]"></div>
      </div>
      <div className="hidden md:flex absolute bottom-[20%] left-[10%] w-24 h-24 ultra-glass rounded-[2rem] items-center justify-center animate-float-delayed z-0 opacity-50 hover:opacity-80 transition-opacity duration-700">
         <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent rounded-[2rem]"></div>
      </div>

      {/* Dynamic Island Status Bar - Adjusted for Mobile Clearance */}
      <div className="absolute top-24 md:top-32 left-0 w-full flex justify-center pointer-events-none z-10 opacity-0 animate-fade-in [animation-delay:800ms] animate-fill-mode-forwards">
         <div className="flex items-center gap-3 px-6 py-2.5 rounded-full ultra-glass bg-black/20 backdrop-blur-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 pointer-events-auto border border-white/10">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-bold text-white tracking-[0.2em] font-mono uppercase">System Operational</span>
         </div>
      </div>

      <div className="container mx-auto px-6 z-10 mt-4 md:mt-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Typography */}
          <h1 className="text-[12vw] md:text-[8.5rem] lg:text-[10rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-white mb-6 md:mb-10 drop-shadow-2xl text-center md:text-left">
            <span className="block animate-fade-in-up [animation-delay:100ms] opacity-0 mix-blend-overlay text-white/90">DIGITAL</span>
            {/* Wrapper span handles the fade-in entrance */}
            <span className="block animate-fade-in-up [animation-delay:300ms] opacity-0 relative">
              {/* Inner span handles the gradient shine effect */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400 animate-text-shine bg-[length:200%_auto]">
                ALCHEMY.
              </span>
              <span className="absolute -inset-2 bg-white/5 blur-3xl rounded-full opacity-20 animate-pulse-slow pointer-events-none"></span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-7 animate-fade-in-up [animation-delay:400ms] opacity-0">
               <div className="pl-4 md:pl-2 border-l-2 border-brand-500/50">
                 <p className="text-base md:text-3xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                   Transmuting raw ideas into <span className="text-white font-medium glow-text">visual gold</span>. 
                   We craft premium identities, immersive webs, and brand experiences that defy convention.
                 </p>
               </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-8 animate-fade-in-up [animation-delay:600ms] opacity-0 items-start md:items-end">
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                 {tags.map((tag) => (
                    <div key={tag.label} className="group flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full ultra-glass bg-white/0 hover:bg-white/5 transition-all duration-500 cursor-default hover:scale-105">
                      {tag.icon}
                      <span className="text-[9px] md:text-[10px] text-zinc-400 group-hover:text-white transition-colors font-mono tracking-widest">{tag.label}</span>
                    </div>
                 ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                <button 
                  onClick={scrollToContact}
                  className="group relative px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] w-full sm:w-auto text-center justify-center flex"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Initiate Project
                    <ArrowDownRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
                  </span>
                </button>
                <button 
                  onClick={scrollToServices}
                  className="px-8 py-4 md:px-10 md:py-5 text-white rounded-full ultra-glass hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] flex items-center justify-center gap-3 group w-full sm:w-auto"
                >
                  <span>Explore Services</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-500 shadow-[0_0_10px_white]"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom / Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-0 right-0 flex justify-center pointer-events-none animate-fade-in [animation-delay:1200ms] opacity-0 z-20">
          <div className="flex flex-col items-center gap-2 p-4 md:p-0">
              <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1 bg-black/20 backdrop-blur-md">
                 <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Scroll</span>
          </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block animate-fade-in [animation-delay:1200ms] opacity-0">
         <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] tracking-widest px-4 py-2 rounded-full ultra-glass hover:bg-white/5 transition-colors cursor-help uppercase pointer-events-auto">
            <Globe className="w-3 h-3 animate-pulse-slow text-zinc-400" />
            <span>Global Service • Est 2024</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;