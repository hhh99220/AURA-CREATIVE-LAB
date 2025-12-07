import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Stories</h2>
          <p className="text-zinc-400 text-lg">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="mac-glass mac-glass-hover p-8 rounded-[2rem] relative"
            >
              <div className="absolute top-8 right-8 p-2 rounded-full bg-white/5">
                 <Quote className="w-5 h-5 text-white/40" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                ))}
              </div>

              <p className="text-zinc-200 mb-8 leading-relaxed font-light text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-inner border border-white/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{testimonial.role}</p>
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