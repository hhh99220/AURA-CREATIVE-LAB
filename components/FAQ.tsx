import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative reveal">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-lg">Everything you need to know before we start.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`
                mac-glass rounded-3xl overflow-hidden transition-all duration-300
                ${openIndex === idx ? 'bg-white/10 border-white/20' : ''}
              `}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === idx ? 'text-white' : 'text-zinc-300'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-white text-black' : 'bg-white/5 text-zinc-500'}`}>
                    {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5" />
                    ) : (
                    <ChevronDown className="w-5 h-5" />
                    )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-zinc-300 leading-relaxed font-light text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;