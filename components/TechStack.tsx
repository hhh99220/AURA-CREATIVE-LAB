import React from 'react';
import { Cpu } from 'lucide-react';

const tools = [
  "Adobe Photoshop", "Adobe Illustrator", "After Effects", "Figma", 
  "React", "TypeScript", "Tailwind CSS", "Blender", "DaVinci Resolve",
  "Cinema 4D", "Procreate", "Live2D", "Unreal Engine"
];

const TechStack: React.FC = () => {
  return (
    <section className="py-12 bg-zinc-950/50 border-y border-white/5 overflow-hidden relative backdrop-blur-sm reveal">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-2 opacity-70">
            <Cpu className="w-3 h-3" />
            Industry Standard Arsenal
        </p>
      </div>
      
      {/* Infinite Scroll Wrapper */}
      <div className="relative flex w-full overflow-hidden group">
         {/* Gradient Masks for Fade Effect */}
         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>

         <div className="flex min-w-full hover-pause">
            {/* List 1 */}
            <div className="flex gap-4 md:gap-8 px-2 md:px-4 shrink-0 animate-marquee">
               {tools.map((tool, idx) => (
               <span key={`1-${idx}`} className="mac-glass px-5 py-2.5 rounded-full text-zinc-400 font-mono text-xs md:text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-all cursor-default whitespace-nowrap hover:border-white/20">
                  {tool}
               </span>
               ))}
            </div>
            
            {/* List 2 (Identical Duplicate) */}
            <div className="flex gap-4 md:gap-8 px-2 md:px-4 shrink-0 animate-marquee">
               {tools.map((tool, idx) => (
               <span key={`2-${idx}`} className="mac-glass px-5 py-2.5 rounded-full text-zinc-400 font-mono text-xs md:text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-all cursor-default whitespace-nowrap hover:border-white/20">
                  {tool}
               </span>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default TechStack;