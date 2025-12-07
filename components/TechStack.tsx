import React from 'react';
import { Cpu } from 'lucide-react';

const tools = [
  "Adobe Photoshop", "Adobe Illustrator", "After Effects", "Figma", 
  "React", "TypeScript", "Tailwind CSS", "Blender", "DaVinci Resolve"
];

const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-10">
        <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4" />
            Powered by Industry Standard Tools
        </p>
      </div>
      
      {/* Infinite Scroll Wrapper */}
      <div className="relative flex overflow-x-hidden group py-4">
         {/* Gradient Masks */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

        <div className="animate-marquee whitespace-nowrap flex gap-6 px-8">
          {/* First set of items */}
          {tools.map((tool, idx) => (
            <span key={idx} className="mac-glass px-6 py-3 rounded-full text-zinc-300 font-mono text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default shadow-lg backdrop-blur-md">
              {tool}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {tools.map((tool, idx) => (
            <span key={`dup-${idx}`} className="mac-glass px-6 py-3 rounded-full text-zinc-300 font-mono text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default shadow-lg backdrop-blur-md">
              {tool}
            </span>
          ))}
           {/* Triplicate set for wider screens */}
           {tools.map((tool, idx) => (
            <span key={`tri-${idx}`} className="mac-glass px-6 py-3 rounded-full text-zinc-300 font-mono text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default shadow-lg backdrop-blur-md">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;