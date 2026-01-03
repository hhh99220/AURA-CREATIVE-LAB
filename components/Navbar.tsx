import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const LOGO_URL = "https://i.ibb.co/vpd6D5N/Logo-PNG.png";

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
          transition-all duration-700 ease-elegant rounded-full px-4 py-2
          ${isScrolled ? 'w-full max-w-3xl py-1 bg-black/60 backdrop-blur-3xl' : 'w-full max-w-5xl py-2'}
        `}>
          
          {/* Logo - Increased Size, Removed Text */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group px-2 py-1 rounded-full transition-all duration-500"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-brand-500/10 blur-xl rounded-full group-hover:bg-brand-500/20 transition-all duration-500"></div>
              <img 
                src={LOGO_URL} 
                alt="Aura Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_12px_rgba(84,9,159,0.3)]"
              />
            </div>
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`
            fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center
            transition-all duration-1000 ease-elegant
            ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
         <div className={`absolute inset-0 bg-black/80 backdrop-blur-[60px] transition-transform duration-1000 ${isMobileMenuOpen ? 'scale-100' : 'scale-110'}`}></div>
         
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-[-20%] left-[-20%] w-[120vw] h-[120vw] bg-brand-900/40 rounded-full blur-[100px] mix-blend-screen animate-blob transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`absolute bottom-[-20%] right-[-20%] w-[120vw] h-[120vw] bg-brand-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000 transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
         </div>

         <div className="relative z-50 flex flex-col items-center gap-4 w-full px-8">
             <div className="mb-12 transition-all duration-1000 delay-100">
                <img src={LOGO_URL} alt="Aura Logo" className="w-24 h-24 object-contain drop-shadow-[0_0_25px_rgba(84,9,159,0.5)]" />
             </div>
             
             {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ease-out transform
                    hover:scale-105 active:scale-95
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-24 opacity-0 blur-md'}
                  `}
                  style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">{link.label}</span>
                </button>
              ))}

              <div 
                className={`w-full max-w-xs mt-12 transition-all duration-1000 delay-700 ease-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
              >
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="w-full py-5 bg-white text-black rounded-3xl text-lg font-bold shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    Start Project <ArrowRight className="w-5 h-5" />
                  </button>
              </div>
         </div>
         
         <div className={`absolute bottom-12 left-0 right-0 text-center transition-all duration-1000 delay-1000 ${isMobileMenuOpen ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white">Digital Alchemy 2024</p>
         </div>
      </div>
    </>
  );
};

export default Navbar;