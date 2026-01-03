import React from 'react';
import { Linkedin } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

const LINKEDIN_URL = "https://www.linkedin.com/in/hamzajutt4144/";
const LOGO_URL = "https://i.ibb.co/vpd6D5N/Logo-PNG.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 py-24 mt-12 bg-black">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             {/* Logo - Removed bounding box, increased size further */}
             <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center group mb-8">
               <div className="absolute inset-0 bg-brand-500/10 blur-[50px] rounded-full group-hover:bg-brand-500/20 transition-all duration-700"></div>
               <img 
                src={LOGO_URL} 
                alt="Aura Logo" 
                className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_30px_rgba(84,9,159,0.3)]" 
               />
             </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed opacity-60">Transmuting visions into elite digital experiences. Est. 2024.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-10">
            <div className="flex items-center gap-12">
              {/* Behance Link */}
              <a 
                href={PORTFOLIO_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-500 hover:text-white transition-all duration-300 group flex items-center gap-2"
                aria-label="Behance"
              >
                <span className="font-black text-4xl tracking-tighter group-hover:scale-110 transition-transform group-hover:text-brand-400">Be</span>
              </a>

              {/* LinkedIn Link */}
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-500 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-10 h-10 group-hover:scale-110 transition-transform group-hover:text-[#0077b5]" />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-10 text-[12px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                <a href="#contact" className="hover:text-white transition-colors">Hire Me</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-zinc-700 text-[10px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} Aura Creative Lab. Digital Alchemy Engaged.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;