import React from 'react';
import { ExternalLink, ArrowRight, Layers, Layout, User, Zap } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

const PROJECTS = [
  {
    title: "Apex Predator",
    category: ["IDENTITY", "MASCOT"],
    image: "https://i.postimg.cc/3x54F93k/00affa618e49f39fb8a330dd5d604561.jpg", 
    icon: <User className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Stream HUD V2",
    category: ["UI/UX", "OVERLAY"],
    image: "https://i.postimg.cc/fRntf5Mk/02a184c1b711f80fd40ed78129a2fb19.jpg",
    icon: <Layout className="w-6 h-6 text-brand-300" />
  },
  {
    title: "Project: KITSUNE",
    category: ["CHARACTER", "ART"],
    image: "https://i.postimg.cc/13hnrMyt/2c84d7d58b320d02813ee2898b3b985f.jpg",
    icon: <Layers className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Neon Horizon",
    category: ["MOTION", "BRANDING"],
    image: "https://i.postimg.cc/g2FXH4Gn/7ab5eade409f151d57d42fc63a34f637.jpg",
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 relative reveal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/10 pb-12">
          <div>
            <span className="text-cyan-400 font-mono text-sm tracking-[0.4em] mb-4 block uppercase font-bold">03 — SELECTED WORK</span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">Case Studies</h2>
            <p className="text-zinc-300 mt-6 max-w-xl text-xl font-light leading-relaxed">
              A premium curation of high-fidelity digital identities and immersive systems.
            </p>
          </div>
          <a 
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-4 text-white px-8 py-4 rounded-full border-2 border-white/10 hover:bg-white hover:text-black transition-all font-bold mt-4 md:mt-0 group backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Explore Archives <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="ultra-glass p-3 rounded-[3rem] mb-8 md:mb-10 transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_100px_-20px_rgba(0,210,255,0.2)]">
                  <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-zinc-900">
                     <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
                     />
                     {/* Saturation Layer on Hover */}
                     <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
                     
                     {/* Hover Icon Reveal */}
                     <div className="absolute top-8 right-8 p-5 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0 hidden md:block shadow-2xl">
                        {project.icon}
                     </div>
                  </div>
              </div>
              <div className="flex justify-between items-end px-6">
                 <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <div className="flex gap-3 text-[10px] font-mono font-bold tracking-widest text-cyan-400">
                      {project.category.map((cat, cIdx) => (
                        <span key={cIdx} className="px-3 py-1.5 bg-cyan-500/10 rounded-lg border border-cyan-500/20 uppercase">{cat}</span>
                      ))}
                    </div>
                 </div>
                 <div className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white transition-all bg-white/5 backdrop-blur-xl shadow-2xl group-hover:scale-110">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;