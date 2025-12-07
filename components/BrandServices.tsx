import React from 'react';
import { BRAND_SERVICES } from '../constants';
import { Palette, Monitor, Video, Code, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Palette': <Palette className="w-5 h-5" />,
  'Monitor': <Monitor className="w-5 h-5" />,
  'Video': <Video className="w-5 h-5" />,
  'Code': <Code className="w-5 h-5" />,
};

const BrandServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
      {BRAND_SERVICES.map((service, idx) => (
        <div 
          key={idx}
          className={`
            ultra-glass
            group relative p-8 rounded-[2rem] overflow-hidden flex flex-col justify-between
            ${idx === 0 || idx === 3 ? 'lg:col-span-2' : 'lg:col-span-2'}
          `}
        >
          {/* Liquid Gradient Blob Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] group-hover:bg-brand-500/20 transition-all duration-1000 group-hover:scale-150 pointer-events-none mix-blend-screen"></div>
          
          <div className="relative z-10 mb-8">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                {iconMap[service.icon]}
              </div>
              <div className="p-2.5 rounded-full bg-transparent group-hover:bg-white/10 text-zinc-600 group-hover:text-white transition-all duration-500">
                 <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light opacity-90">
              {service.description}
            </p>
          </div>
          
          <div className="relative z-10 flex flex-wrap gap-2 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
            {service.features.map((feature, fIdx) => (
              <span key={fIdx} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-zinc-300 flex items-center gap-1.5 hover:bg-white/10 transition-colors cursor-default font-medium">
                {feature}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandServices;