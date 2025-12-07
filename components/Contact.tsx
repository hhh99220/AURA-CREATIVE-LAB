import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, CheckCircle, Loader } from 'lucide-react';

// Replace this with your preferred email if different
const CONTACT_EMAIL = "hhh99220@gmail.com";

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
    <section id="contact" className="py-32 relative overflow-hidden reveal">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mac-glass rounded-[3rem] p-8 md:p-20 border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Let's Create Together</h2>
            <p className="text-zinc-400 text-lg font-light">
              Ready to elevate your brand or stream?
            </p>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2 group">
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-brand-400 transition-colors">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-xl focus:outline-none focus:border-white/50 transition-all placeholder:text-zinc-700"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 group">
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-brand-400 transition-colors">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-xl focus:outline-none focus:border-white/50 transition-all placeholder:text-zinc-700"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-brand-400 transition-colors">Service Type</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-xl focus:outline-none focus:border-white/50 transition-all appearance-none cursor-pointer"
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
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1 group-focus-within:text-brand-400 transition-colors">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-white text-xl focus:outline-none focus:border-white/50 transition-all resize-none placeholder:text-zinc-700"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`
                    w-full font-bold text-lg py-6 rounded-2xl transition-all duration-500 transform flex items-center justify-center gap-3 mt-8
                    ${formState === 'success' 
                        ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]' 
                        : 'bg-white text-black hover:-translate-y-1 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]'}
                `}
            >
              {formState === 'idle' && (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
              )}
              {formState === 'sending' && (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Opening Email...
                  </>
              )}
              {formState === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Email Client Opened
                  </>
              )}
            </button>
          </form>

          <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
            <span className="text-zinc-500 text-sm flex items-center gap-2 font-mono tracking-widest uppercase">
              <MessageSquare className="w-3 h-3" />
              Direct contact available
            </span>
            <a 
              href="tel:+923052765925" 
              className="flex items-center gap-3 text-2xl font-bold text-white hover:text-brand-400 transition-colors"
            >
              <Phone className="w-6 h-6 text-brand-500" />
              +92 305 2765925
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;