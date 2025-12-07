import React from 'react';
import { ExternalLink, ArrowRight, Layers, Layout, User, Zap } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

// --- CONFIGURATION: REPLACE THESE URLS WITH YOUR GALLERY IMAGES ---
// Gallery: https://postimg.cc/gallery/329G1C3
const PROJECTS = [
  {
    title: "Apex Predator",
    category: ["IDENTITY", "MASCOT"],
    image: "https://i.postimg.cc/3x54F93k/00affa618e49f39fb8a330dd5d604561.jpg", 
    icon: <User className="w-5 h-5 text-brand-400" />
  },
  {
    title: "Stream HUD V2",
    category: ["UI/UX", "OVERLAY"],
    image: "https://i.postimg.cc/fRntf5Mk/02a184c1b711f80fd40ed78129a2fb19.jpg",
    icon: <Layout className="w-5 h-5 text-purple-400" />
  },
  {
    title: "Project: KITSUNE",
    category: ["CHARACTER", "ART"],
    image: "https://i.postimg.cc/13hnrMyt/2c84d7d58b320d02813ee2898b3b985f.jpg",
    icon: <Layers className="w-5 h-5 text-emerald-400" />
  },
  {
    title: "Neon Horizon",
    category: ["MOTION", "BRANDING"],
    image: "https://i.postimg.cc/g2FXH4Gn/7ab5eade409f151d57d42fc63a34f637.jpg",
    icon: <Zap className="w-5 h-5 text-yellow-400" />
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative reveal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="text-brand-400 font-mono text-sm tracking-widest mb-3 block opacity-80">03 — SELECTED WORK</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter drop-shadow-xl">Case Studies</h2>
            <p className="text-zinc-400 mt-4 max-w-lg text-lg font-light">
              A curation of digital identities, immersive environments, and brand systems.
            </p>
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
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="ultra-glass p-2 rounded-[2.5rem] mb-6 md:mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_80px_-10px_rgba(255,255,255,0.1)]">
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-zinc-900">
                     <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out grayscale-[30%] group-hover:grayscale-0" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                     
                     {/* Hover Icon Reveal */}
                     <div className="absolute top-6 right-6 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hidden md:block">
                        {project.icon}
                     </div>
                  </div>
              </div>
              <div className="flex justify-between items-end px-4">
                 <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex gap-2 text-xs font-mono text-white/60">
                      {project.category.map((cat, cIdx) => (
                        <span key={cIdx} className="px-2 py-1 bg-white/5 rounded-md border border-white/5">{cat}</span>
                      ))}
                    </div>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all bg-white/5 backdrop-blur-sm">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
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