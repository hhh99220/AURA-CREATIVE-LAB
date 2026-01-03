import React, { useState } from 'react';
import { Mail, MessageSquare, MessageCircle, CheckCircle, Loader } from 'lucide-react';

// Replace this with your preferred email if different
const CONTACT_EMAIL = "hhh99220@gmail.com";
const WHATSAPP_NUMBER = "923052765925";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Streamer Branding (Logo, Overlay, etc.)',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    // Simulate a brief network delay for better UX, then trigger the mail client
    setTimeout(() => {
        const subject = `Project Inquiry: ${formData.service} - ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        
        // Open default email client
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        setFormState('success');
        
        // Reset form after delay
        setTimeout(() => {
          setFormState('idle');
          setFormData({
            name: '',
            email: '',
            service: 'Streamer Branding (Logo, Overlay, etc.)',
            message: ''
          });
        }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden reveal">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mac-glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tighter drop-shadow-2xl">Let's Create Together</h2>
            <p className="text-zinc-400 text-lg font-light">
              Ready to elevate your brand or stream?
            </p>
          </div>

          <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="space-y-2 group">
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-cyan-400 transition-colors">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-base md:text-xl focus:outline-none focus:border-white/50 transition-all placeholder:text-zinc-800"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 group">
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-cyan-400 transition-colors">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-base md:text-xl focus:outline-none focus:border-white/50 transition-all placeholder:text-zinc-800"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-cyan-400 transition-colors">Service Type</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-base md:text-xl focus:outline-none focus:border-white/50 transition-all appearance-none cursor-pointer"
                >
                    <option className="bg-zinc-900 text-zinc-400" value="" disabled>Select a Service...</option>
                    <option className="bg-zinc-900" value="Streamer Branding">Streamer Branding (Logo, Overlay, etc.)</option>
                    <option className="bg-zinc-900" value="VTuber Model">VTuber Model</option>
                    <option className="bg-zinc-900" value="Corporate Branding">Corporate Branding</option>
                    <option className="bg-zinc-900" value="Video Editing">Video Editing</option>
                    <option className="bg-zinc-900" value="Web Development">Web Development</option>
                    <option className="bg-zinc-900" value="Other">Other</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-cyan-400 transition-colors">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-base md:text-xl focus:outline-none focus:border-white/50 transition-all resize-none placeholder:text-zinc-800"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`
                    w-full font-black text-xl py-5 md:py-6 rounded-2xl transition-all duration-500 transform flex items-center justify-center gap-3 mt-8
                    ${formState === 'success' 
                        ? 'bg-emerald-500 text-white shadow-[0_0_50px_rgba(16,185,129,0.5)]' 
                        : 'bg-white text-black hover:-translate-y-1 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]'}
                `}
            >
              {formState === 'idle' && (
                  <>
                    <Mail className="w-6 h-6" />
                    Send Inquiry
                  </>
              )}
              {formState === 'sending' && (
                  <>
                    <Loader className="w-6 h-6 animate-spin" />
                    Opening Mail...
                  </>
              )}
              {formState === 'success' && (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Client Opened
                  </>
              )}
            </button>
          </form>

          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex flex-col items-center gap-6">
            <span className="text-zinc-500 text-xs flex items-center gap-3 font-mono tracking-[0.4em] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
              Instant Response
            </span>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-black shadow-[0_15px_40px_rgba(37,211,102,0.25)] hover:shadow-[0_20px_60px_rgba(37,211,102,0.4)] hover:-translate-y-2 transition-all duration-500 text-xl md:text-2xl"
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-125 transition-transform duration-500" />
              WhatsApp Me
            </a>
            <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">+92 305 2765925</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
