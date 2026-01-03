
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:px-6 md:py-6 transition-all duration-700 ease-elegant pointer-events-none">
        <div className={`
          relative flex items-center justify-between
          mac-glass pointer-events-auto
          transition-all duration-700 ease-elegant rounded-full px-4 py-2
          ${isScrolled ? 'w-full max-w-2xl bg-black/80 backdrop-blur-3xl' : 'w-full max-w-5xl bg-black/20 backdrop-blur-md'}
        `}>
          
          {/* Logo - Size Increased */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group px-2 py-1 rounded-full transition-all duration-500"
          >
            <div className="w-14 h-14 md:w-24 md:h-24 relative flex items-center justify-center transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-brand-500/10 blur-2xl rounded-full group-hover:bg-brand-500/20 transition-all duration-500"></div>
              <img 
                src={LOGO_URL} 
                alt="Aura Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(84,9,159,0.4)]"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3 bg-white text-black rounded-full text-xs font-black hover:bg-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden text-white p-3 rounded-full transition-all duration-300 relative z-[60] ${isMobileMenuOpen ? 'bg-white/10' : 'hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
            fixed inset-0 z-[55] md:hidden flex flex-col items-center justify-center
            transition-all duration-700 ease-elegant
            ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
         <div className="absolute inset-0 bg-black/95 backdrop-blur-[50px]"></div>
         
         <div className="relative z-50 flex flex-col items-center gap-6 w-full px-8">
             {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    text-5xl font-black text-white transition-all duration-700 ease-out transform
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-md'}
                  `}
                  style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
                >
                  <span className="hover:text-cyan-400 transition-colors">{link.label}</span>
                </button>
              ))}

              <div 
                className={`w-full max-w-xs mt-12 transition-all duration-1000 delay-300 ease-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="w-full py-6 bg-cyan-500 text-white rounded-3xl text-xl font-black shadow-[0_20px_40px_rgba(0,210,255,0.2)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    Let's Talk <ArrowRight className="w-6 h-6" />
                  </button>
              </div>
         </div>
      </div>
    </>
  );
};

export default Navbar;
