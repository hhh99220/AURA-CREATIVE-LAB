import React from 'react';
import { STREAMER_PRICING } from '../constants';
import { ArrowRight } from 'lucide-react';

const StreamerServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
      {STREAMER_PRICING.map((section, idx) => (
        <div 
          key={idx} 
          className="mac-glass mac-glass-hover rounded-[2rem] p-8 group flex flex-col h-full"
        >
          <div className="mb-6 pb-6 border-b border-white/10">
            <div className="flex justify-between items-center mb-2">
                <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[10px] font-bold tracking-widest uppercase border border-brand-500/20">
                    Category {String(idx + 1).padStart(2, '0')}
                </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {section.title}
            </h3>
          </div>
          
          <ul className="space-y-3 flex-grow">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-center p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500/50 mr-4 group-hover/item:bg-brand-400 transition-colors"></div>
                <div className="flex flex-col">
                  <span className="text-zinc-200 text-sm font-medium group-hover/item:text-white transition-colors">
                    {item.label}
                  </span>
                  {item.detail && (
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5 font-medium">{item.detail}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
             <div className="p-2 rounded-full bg-white/5 text-white/50 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamerServices;