import React, { useState } from 'react';
import { ServiceCategory } from '../types';
import StreamerServices from './StreamerServices';
import BrandServices from './BrandServices';

const Services: React.FC = () => {
  // CHANGED DEFAULT TO BRAND for Agency Focus
  const [activeTab, setActiveTab] = useState<ServiceCategory>(ServiceCategory.BRAND);

  return (
    <section id="services" className="py-40 relative reveal">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div>
            <span className="text-brand-400 font-mono text-xs tracking-[0.2em] mb-4 block opacity-80 uppercase">01 — What We Do</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-2xl">
              Curated Services
            </h2>
          </div>
          
          {/* Custom Toggle - Liquid Glass Pill */}
          <div className="mac-glass p-1.5 rounded-full inline-flex relative bg-black/40 border border-white/10">
            {/* Sliding Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 ease-elegant z-0`}
              style={{
                left: activeTab === ServiceCategory.BRAND ? '6px' : '50%',
                width: 'calc(50% - 9px)'
              }}
            ></div>

            <button
              onClick={() => setActiveTab(ServiceCategory.BRAND)}
              className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold transition-colors duration-500 ${
                activeTab === ServiceCategory.BRAND ? 'text-black' : 'text-zinc-500 hover:text-white'
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => setActiveTab(ServiceCategory.STREAMER)}
              className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold transition-colors duration-500 ${
                activeTab === ServiceCategory.STREAMER ? 'text-black' : 'text-zinc-500 hover:text-white'
              }`}
            >
              For Creators
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px] transition-all duration-700 ease-elegant">
          {activeTab === ServiceCategory.BRAND ? <BrandServices /> : <StreamerServices />}
        </div>
      </div>
    </section>
  );
};

export default Services;