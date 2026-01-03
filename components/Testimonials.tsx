import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-500 font-mono text-sm tracking-[0.3em] mb-4 block opacity-80 uppercase">05 — VOICES</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">Collaborative Success</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto font-light">Validation from brands and creators who redefined their identity with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="ultra-glass p-10 rounded-[2.5rem] relative group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="absolute top-10 right-10 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                 <Quote className="w-6 h-6 text-brand-500/50" />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                ))}
              </div>

              <p className="text-zinc-200 mb-10 leading-relaxed font-light text-xl italic opacity-90">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center font-bold text-white text-xl shadow-2xl border border-white/10 group-hover:border-brand-500/30 transition-colors">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base tracking-tight">{testimonial.name}</h4>
                  <p className="text-brand-400 text-[10px] font-mono uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;