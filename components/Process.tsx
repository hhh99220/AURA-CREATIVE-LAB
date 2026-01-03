import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const icons = [Search, Lightbulb, PenTool, Rocket];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative reveal">
      <div className="container mx-auto px-6">
         <div className="mb-12 md:mb-16">
            <span className="text-brand-500 font-mono text-sm tracking-[0.3em] mb-4 block opacity-80 uppercase">04 — Methodology</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">Strategic Flow</h2>
         </div>

        <div className="relative">
          {/* Central Line with Gradient */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <div key={idx} className="relative group">
                  
                  {/* Floating Glass Number/Icon Bubble */}
                  <div className="hidden md:flex absolute left-1/2 -top-4 -translate-x-1/2 z-10 w-16 h-16 ultra-glass rounded-full items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-700 bg-black/40">
                    <Icon className="w-6 h-6 text-white group-hover:text-brand-400 transition-colors" />
                  </div>
                  
                  {/* Mobile Line Indicator */}
                  <div className="md:hidden w-[2px] h-full absolute left-4 top-0 bg-gradient-to-b from-brand-500/50 to-transparent"></div>
                  
                  <div className="pl-12 md:pl-0 md:pt-20 md:text-center">
                    <div className="ultra-glass rounded-[2rem] p-8 h-full relative overflow-hidden group-hover:bg-white/5 transition-all duration-500">
                       <div className="absolute top-[-10px] right-[-10px] opacity-5 font-bold text-7xl text-white select-none group-hover:opacity-10 transition-opacity">
                         {step.number}
                       </div>
                       
                       {/* Mobile Icon */}
                       <div className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                          <Icon className="w-5 h-5 text-white" />
                       </div>

                       <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-tight">{step.title}</h3>
                       <p className="text-zinc-400 text-sm leading-relaxed font-light">
                         {step.description}
                       </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;