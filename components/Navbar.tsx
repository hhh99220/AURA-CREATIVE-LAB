import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
            className={`md:hidden text-white p-2.5 rounded-full transition-all duration-300 mr-1 relative z-[60] ${isMobileMenuOpen ? 'bg-white/10 rotate-90' : 'hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Liquid Glass Theme */}
      <div 
        className={`
            fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center
            transition-all duration-700 ease-elegant
            ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
         {/* Glass Background Layer */}
         <div className="absolute inset-0 bg-black/40 backdrop-blur-[40px]"></div>
         
         {/* Liquid Blobs Animation */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-brand-500/20 rounded-full blur-[80px] mix-blend-screen animate-blob transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-purple-500/20 rounded-full blur-[80px] mix-blend-screen animate-blob animation-delay-2000 transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
         </div>

         {/* Menu Content */}
         <div className="relative z-50 flex flex-col items-center gap-6 w-full px-8">
             {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    text-4xl font-bold text-white/50 hover:text-white transition-all duration-700 ease-out transform
                    hover:scale-110 hover:tracking-wide
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-sm'}
                  `}
                  style={{ transitionDelay: `${100 + (idx * 100)}ms` }}
                >
                  {link.label}
                </button>
              ))}

              <div 
                className={`w-full max-w-xs mt-8 transition-all duration-1000 delay-500 ease-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="w-full py-5 bg-white text-black rounded-2xl text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group active:scale-95 transition-transform"
                  >
                    Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
         </div>
         
         {/* Footer Info inside Menu */}
         <div className={`absolute bottom-10 left-0 right-0 text-center transition-all duration-1000 delay-700 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white">Aura Creative Lab</p>
         </div>
      </div>
    </>
  );
};

export default Navbar;
