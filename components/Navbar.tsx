import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Work', id: 'portfolio' },
    { label: 'Process', id: 'process' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-6 transition-all duration-700 ease-elegant`}>
        <div className={`
          relative flex items-center justify-between
          mac-glass
          transition-all duration-700 ease-elegant rounded-full px-2 py-2
          ${isScrolled ? 'w-full max-w-3xl py-2 bg-black/60 backdrop-blur-3xl' : 'w-full max-w-5xl py-3'}
        `}>
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group px-4 py-1 rounded-full hover:bg-white/5 transition-colors duration-500"
          >
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black font-black text-xs shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-500">
              A
            </div>
            <span className="font-bold text-white tracking-tight text-sm hidden sm:block opacity-90 group-hover:opacity-100">AURA LAB</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-5 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center pr-1.5">
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-zinc-200 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2.5 rounded-full hover:bg-white/10 transition-colors mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-3xl z-40 transition-all duration-700 ease-elegant md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
         {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-3xl font-bold text-white/50 hover:text-white transition-all duration-500 transform hover:scale-105"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="mt-8 px-10 py-4 bg-white text-black rounded-full text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Start Project
          </button>
      </div>
    </>
  );
};

export default Navbar;