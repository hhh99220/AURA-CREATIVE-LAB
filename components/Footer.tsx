import React from 'react';
import { Twitter, Instagram, Twitch, Linkedin } from 'lucide-react';
import { PORTFOLIO_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">AURA CREATIVE LAB</h3>
            <p className="text-zinc-500 text-sm">Elevating digital identities since 2024.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href={PORTFOLIO_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-500 transition-colors">
               <span className="font-bold text-sm">Be</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          © {new Date().getFullYear()} Aura Creative Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;