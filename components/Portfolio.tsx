import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="text-brand-400 font-mono text-sm tracking-widest mb-3 block opacity-80">03 — SELECTED WORK</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-xl">Case Studies</h2>
          </div>
          <a 
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 text-white px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all font-medium mt-4 md:mt-0 group backdrop-blur-md"
          >
            View Archives <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          
          {/* Project 1 - Large */}
          <div className="group cursor-pointer">
            <div className="mac-glass p-2 rounded-[2.5rem] mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-zinc-900">
                   <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Brand Identity Project" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-0 transition-opacity"></div>
                </div>
            </div>
            <div className="flex justify-between items-end px-4">
               <div>
                  <h3 className="text-3xl font-bold text-white mb-2">TechFlow Corporate</h3>
                  <div className="flex gap-2 text-xs font-mono text-white/60">
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">IDENTITY</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">WEB_DESIGN</span>
                  </div>
               </div>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all bg-white/5 backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
               </div>
            </div>
          </div>

          {/* Project 2 - Offset */}
          <div className="group cursor-pointer md:mt-32">
            <div className="mac-glass p-2 rounded-[2.5rem] mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-zinc-900">
                   <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="UI/UX Project" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                   />
                </div>
            </div>
             <div className="flex justify-between items-end px-4">
               <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Neon Nexus Store</h3>
                  <div className="flex gap-2 text-xs font-mono text-white/60">
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">ECOMMERCE</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">UI/UX</span>
                  </div>
               </div>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all bg-white/5 backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
               </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="mac-glass p-2 rounded-[2.5rem] mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9] bg-zinc-900">
                   <img 
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Gaming Asset Project" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                   />
                </div>
            </div>
             <div className="flex justify-between items-end px-4">
               <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Valkyrie VTuber</h3>
                  <div className="flex gap-2 text-xs font-mono text-white/60">
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">ILLUSTRATION</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">RIGGING</span>
                  </div>
               </div>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all bg-white/5 backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
               </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group cursor-pointer md:mt-32">
            <div className="mac-glass p-2 rounded-[2.5rem] mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9] bg-zinc-900">
                   <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Social Media Project" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                   />
                </div>
            </div>
             <div className="flex justify-between items-end px-4">
               <div>
                  <h3 className="text-3xl font-bold text-white mb-2">HypeBeast Motion</h3>
                  <div className="flex gap-2 text-xs font-mono text-white/60">
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">MOTION</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">SOCIAL</span>
                  </div>
               </div>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all bg-white/5 backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center md:hidden">
           <a 
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold shadow-lg"
          >
            Full Portfolio <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;