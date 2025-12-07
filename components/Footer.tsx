import React from 'react';
import { Linkedin } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

const LINKEDIN_URL = "https://www.linkedin.com/in/hamzajutt4144/";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 py-12 mt-12">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2 justify-center md:justify-start">
               <div className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_10px_#0ea5e9]"></div>
               AURA CREATIVE LAB
            </h3>
            <p className="text-zinc-500 text-sm">Elevating digital identities since 2024.</p>
          </div>

          <div className="flex items-center gap-8">
            {/* Behance Link */}
            <a 
              href={PORTFOLIO_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-[#1769ff] transition-colors group flex items-center gap-2"
              aria-label="Behance"
            >
               <span className="font-black text-xl tracking-tighter group-hover:scale-110 transition-transform">Be</span>
            </a>

            {/* LinkedIn Link */}
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-[#0077b5] transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm font-light">
          © {new Date().getFullYear()} Aura Creative Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
