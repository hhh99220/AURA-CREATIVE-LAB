import React from 'react';
import { ArrowDownRight, Globe, Sparkles, Code, Ghost, Zap, MousePointer2, Layers } from 'lucide-react';

interface HeroProps {
  scrollToServices: () => void;
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToServices, scrollToContact }) => {
  const tags = [
    { label: 'BRANDING', icon: <Sparkles className="w-3 h-3 text-white" /> },
    { label: 'WEB_DEV', icon: <Code className="w-3 h-3 text-white" /> },
    { label: 'VTUBING', icon: <Ghost className="w-3 h-3 text-white" /> },
    { label: 'MOTION', icon: <Zap className="w-3 h-3 text-white" /> }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 overflow-hidden perspective-1000">
      
      {/* Floating Decorative Glass Elements */}
      <div className="absolute top-[20%] right-[10%] w-32 h-32 mac-glass rounded-[2.5rem] flex items-center justify-center animate-float z-0 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <MousePointer2 className="w-12 h-12 text-white/10" />
      </div>
      <div className="absolute bottom-[20%] left-[8%] w-24 h-24 mac-glass rounded-[2rem] flex items-center justify-center animate-float-delayed z-0 opacity-30 hover:opacity-80 transition-opacity duration-700">
        <Layers className="w-10 h-10 text-white/10" />
      </div>

      {/* Dynamic Island Status Bar */}
      <div className="absolute top-32 left-0 w-full flex justify-center pointer-events-none z-10 opacity-0 animate-fade-in [animation-delay:800ms] animate-fill-mode-forwards">
         <div className="flex items-center gap-3 px-5 py-2 rounded-full mac-glass bg-black/40 backdrop-blur-2xl border border-white/5 shadow-2xl transform hover:scale-105 transition-transform duration-500 pointer-events-auto">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-medium text-white/80 tracking-widest font-mono uppercase">Accepting Q2 Projects</span>
         </div>
      </div>

      <div className="container mx-auto px-6 z-10 mt-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Typography */}
          <h1 className="text-[10vw] md:text-[8rem] lg:text-[9rem] font-bold leading-[0.9] tracking-tighter text-white mb-12 drop-shadow-2xl">
            <span className="block animate-fade-in-up [animation-delay:100ms] opacity-0">DIGITAL</span>
            {/* Wrapper span handles the fade-in entrance */}
            <span className="block animate-fade-in-up [animation-delay:300ms] opacity-0">
              {/* Inner span handles the gradient shine effect */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400 animate-text-shine bg-[length:200%_auto]">
                ALCHEMY.
              </span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7 animate-fade-in-up [animation-delay:400ms] opacity-0">
               <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                 We transform ambitious ideas into <span className="text-white font-medium">unforgettable brands</span>. 
                 A multidisciplinary studio operating at the intersection of design, motion, and technology.
               </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-8 animate-fade-in-up [animation-delay:600ms] opacity-0 items-start md:items-end">
              <div className="flex flex-wrap gap-2 md:justify-end">
                 {tags.map((tag) => (
                    <div key={tag.label} className="group flex items-center gap-2 px-4 py-2 rounded-full mac-glass bg-white/0 hover:bg-white/5 transition-all duration-500 cursor-default hover:scale-105 border-white/5 hover:border-white/20">
                      {tag.icon}
                      <span className="text-[10px] text-zinc-400 group-hover:text-white transition-colors font-mono tracking-widest">{tag.label}</span>
                    </div>
                 ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <button 
                  onClick={scrollToContact}
                  className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Start Project 
                    <ArrowDownRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
                  </span>
                </button>
                <button 
                  onClick={scrollToServices}
                  className="px-10 py-5 text-white rounded-full mac-glass hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] flex items-center gap-3 group border border-white/10"
                >
                  <span>Explore Services</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="absolute bottom-10 left-10 hidden md:block animate-fade-in [animation-delay:1200ms] opacity-0">
         <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] tracking-widest px-4 py-2 rounded-full mac-glass hover:bg-white/5 transition-colors cursor-help uppercase">
            <Globe className="w-3 h-3 animate-pulse-slow text-zinc-400" />
            <span>Global Service • Est 2024</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;