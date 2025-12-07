import React, { useState } from 'react';
import { PRICING_DATA } from '../constants';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  // CHANGED DEFAULT TO BRANDING
  const [activeCategory, setActiveCategory] = useState<keyof typeof PRICING_DATA>('branding');
  // Initialize subcategory index for each main category to 0
  const [activeSubIndices, setActiveSubIndices] = useState<Record<string, number>>({
    branding: 0,
    web: 0,
    video: 0,
    stream: 0
  });

  // Explicitly defining the order to put Branding/Web first
  const categories: (keyof typeof PRICING_DATA)[] = ['branding', 'web', 'video', 'stream'];
  
  const currentCategoryData = PRICING_DATA[activeCategory];
  const activeSubIndex = activeSubIndices[activeCategory];
  const currentSubcategory = currentCategoryData.subcategories[activeSubIndex];

  const handleSubCategoryChange = (index: number) => {
    setActiveSubIndices(prev => ({
      ...prev,
      [activeCategory]: index
    }));
  };

  return (
    <section id="pricing" className="py-32 relative overflow-hidden reveal">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-brand-400 font-mono text-sm tracking-widest mb-3 block opacity-80">02 — INVESTMENT</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Transparent Pricing</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Choose the perfect package for your needs. No hidden fees, just clear value.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="mac-glass p-1.5 rounded-full inline-flex flex-wrap justify-center gap-1 border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative
                  ${activeCategory === cat 
                    ? 'text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {activeCategory === cat && (
                  <div className="absolute inset-0 bg-white rounded-full z-0"></div>
                )}
                <span className="relative z-10">{PRICING_DATA[cat].label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory Pills */}
        {currentCategoryData.subcategories.length > 1 && (
          <div className="flex justify-center mb-12 animate-fade-in">
             <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
                {currentCategoryData.subcategories.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSubCategoryChange(idx)}
                    className={`
                      px-5 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap
                      ${activeSubIndex === idx
                        ? 'bg-brand-500/10 border-brand-500/50 text-brand-200 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'}
                    `}
                  >
                    {sub.title}
                  </button>
                ))}
             </div>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSubcategory.tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`
                ultra-glass rounded-[2rem] p-8 relative group transition-all duration-500 flex flex-col
                ${tier.highlight 
                  ? 'border-brand-500/40 shadow-[0_0_40px_rgba(14,165,233,0.1)] md:-translate-y-4' 
                  : 'hover:-translate-y-2'}
              `}
            >
              {/* Highlight Tag */}
              {tier.highlight && (
                <div className="absolute top-6 right-6 z-20">
                  <span className="px-3 py-1 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1 animate-pulse-slow">
                    <Sparkles className="w-3 h-3 fill-white" /> Popular
                  </span>
                </div>
              )}
              
              {/* Highlight Glow Background */}
              {tier.highlight && (
                 <div className="absolute inset-0 bg-brand-500/5 rounded-[2rem] pointer-events-none"></div>
              )}

              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 pr-20">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                  {tier.period && <span className="text-zinc-500">{tier.period}</span>}
                </div>
                <p className="text-sm text-brand-300 font-medium font-mono">{tier.description}</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

              <ul className="space-y-4 mb-8 relative z-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${tier.highlight ? 'bg-brand-500/20 text-brand-400' : 'bg-white/10 text-zinc-400'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`
                w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all relative z-10 group-hover:scale-[1.02] mt-auto
                ${tier.highlight
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]'
                  : 'mac-inset hover:bg-white/10 hover:text-white text-zinc-300'}
              `}>
                Select Package <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Custom Quote Strip */}
        <div className="mt-16 ultra-glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <Zap className="w-6 h-6 text-yellow-400" />
             </div>
             <div>
               <h4 className="text-lg font-bold text-white">Need a Custom Solution?</h4>
               <p className="text-zinc-400 text-sm">For enterprise needs or specific requirements, let's talk custom.</p>
             </div>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors border border-white/5 whitespace-nowrap">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;