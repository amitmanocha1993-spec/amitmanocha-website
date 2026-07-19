'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Mail, Send } from 'lucide-react';

export default function JourneyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/journey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    // Subtle scroll effect for the header
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add('py-4');
          nav.classList.remove('py-6');
          nav.classList.add('shadow-md');
        } else {
          nav.classList.add('py-6');
          nav.classList.remove('py-4');
          nav.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    // Simple Fade-in Observer for Timeline
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .timeline-line').forEach(el => {
      el.classList.add('opacity-0', 'transition-all', 'duration-1000');
      if (el.classList.contains('glass-card')) el.classList.add('translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background text-on-background font-body-md overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto pt-32 mb-[120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest uppercase">The Evolution of a Creative</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 max-w-4xl italic">A Journey Through Time.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Whether you're looking for cinematic design, poetic insight under my pen name Aziim Dehlvi, or a creative partnership with Amit Manocha, my door is always open. Let's craft something memorable through our shared vision.</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto mb-[120px] relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 timeline-line hidden md:block transition-all duration-1000 opacity-100 translate-y-0"></div>
        <div className="space-y-32 relative">
          {/* 1. 1993 - Roots & Beginnings */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">1993</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Roots & Beginnings</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Born in Delhi with family roots in Chiniot, a rich blend of cultures laid the foundation for a life steeped in heritage and artistic inquiry.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 flex justify-center md:justify-start pl-0 md:pl-12">
              <img alt="Roots & Beginnings" className="rounded-[24px] w-full max-w-[500px] aspect-video object-cover shadow-sm transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEylu-5IZ8WtmCiVAvvoLfOD5JmbNjiLBn-EzMFjzxwlYRrIFPW8hvxleJ6fB6xRy6rqRUW5kwtbVb78EXksuCCC097lJPz3HzBIdh9vfRO1DFrvBa8oqVIjwWL0z4EItK50S2t_8LIhmUQfNgCoMyrgd0R_tVrla8j4LmSaR_1WrF6Mu9X9f52C7uxuaon-2_HF9T5Lt5gqiqlxGFcw01QYqptDa5no_ICDjX2-bakhz53OPdefc_DMjGLH26nX7ydspgooeU7Q" />
            </div>
          </div>

          {/* 2. 2006 - Discovering Design */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-3">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">2006</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Discovering Design</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Stepped into the world of graphic design, ignited by a profound passion for typography, visual hierarchy, and the art of branding.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 md:order-1 flex justify-center md:justify-end pr-0 md:pr-12">
              <img alt="Discovering Design" className="rounded-[24px] w-full max-w-[500px] aspect-video object-cover shadow-sm transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9F4zInoamDhza7TilJH7AeHjg04fzygdDWslp-VaFeDdNUwwFn5LSsRh0RzU_1nthsedwEzhWRxmXuEWCi4dhyDAat4Vc6Pa7bNIXViWHy29s8Ak_2lnk35nzE4PXeC1g78F_U3VmU35exqJX21KvL8Vx-_SVZ1H5-X5uQYlfrK55E1TiRKo3L1z-0tMR3WkqE6lHLs0a6dHExIwUulbG_nMaiO6HqEex93-C3TUs8lODBzNKTIW_HBuE-SEB2X4PqNJbY7t0ew" />
            </div>
          </div>

          {/* 3. 2011 - Professional Career Begins */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">2011</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Professional Career Begins</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Joined Anand Diaries Pvt. Ltd, where raw creativity was forged into a professional discipline, managing high-stakes production and design.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3"><div className="flex justify-center md:justify-start pl-0 md:pl-12"><img alt="Anand Diaries Logo" className="rounded-[24px] w-full max-w-[500px] aspect-video object-contain bg-white p-8 shadow-sm transition-all duration-700" src="/Journey-page-elements/anand diaries logo.webp" /></div></div>
          </div>

          {/* 4. 2015 - Building Brand Decorator */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-3">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">2015</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Building Brand Decorator</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Launched Brand Decorator, marking the start of a thriving freelance journey and establishing a unique voice in the creative industry.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 md:order-1"><div className="flex justify-center md:justify-end pr-0 md:pr-12"><img alt="Brand Decorator Logo" className="rounded-[24px] w-full max-w-[500px] aspect-video object-contain bg-primary p-8 shadow-sm transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD62Vk2h_Mspu0_flHZXxlfvsrLUhLlJogbtwp2ia5gi173R61dQTzhEmQkXeeTvAjyVG7ZvMX_mF8THdCpnEjbffJQPZhscZbpOMdRJNnEcPPEPRSf3uL4Wz56XHlSdVXpBhKLBfRVLeJSDiQQDpI2_FJ7Kte8XGRwVnzSAJVCFn5Y3IAEbzfg5cBydHqWrqNOZUs-D5WkrQM9frsZF8XUQ5jT5PupB1164BQzq4oo2ifiCy5fZtW4pRwza-_gfsv9wfPpxf_pw" /></div></div>
          </div>

          {/* 5. 2019 - Exploring Language, Poetry & Culture */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">2019</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Language & Culture</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Deep immersion into Urdu and Persian literature. The name 'Aziim Dehlvi' emerges, reflecting a deep connection to Indo-Persian heritage.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 flex justify-center md:justify-start pl-0 md:pl-12">
              <img alt="Poetry & Culture" className="rounded-[24px] w-full max-w-[500px] aspect-video object-cover shadow-sm transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOGm6NYKld0CmPJh3KGPeezBiTFQ8vG6QJKsw7WjA_nsIN587P63kflqnmW5EEV4_DH9zgcUR-ABRfwwfwWTjGBZzwmarvwpjTJJ1Oi477cLVyUlSUzZVOqCWamcZLYmZxuOC4isMgjKWHKOxJBCr04559nKoplRQEbU2PPs5CMsvnpLg7q1q8UXBfGgyOutBlMfjkeIfkEaMgWHQmHMaGBc3BhLm7PYByfkltIRGMkLyw4Yyo5gW2dqlt1YIPM_nk4FvrRyS0Q" />
            </div>
          </div>

          {/* 6. 2025 - First Qawwali Composition */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-3">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">2025</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Qawwali Composition</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A spiritual milestone: writing a Qawwali for master Sant Rajinder Singh Ji Maharaj, with music composed by the renowned Aman Pant.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 md:order-1 flex justify-center md:justify-end pr-0 md:pr-12">
              <img alt="Qawwali Composition" className="rounded-[24px] w-full max-w-[500px] aspect-video object-cover shadow-sm transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt0TNABH8pS-JTm5OLrPT3aOTmAF-yq0Dx2PEJnm1UpxuxaVB7QSh43Taez91Br3ntNsGbCTBWLOmWP3fHVW_283wUvK4dTVdMpBJfLPFKcfnb4X4AVUszH7giAB99Q2S8dTs4rfC8ZuNyyFmaqsIiGsXrYgLZy-A_32ix_Mcci8R7DKB5JzzBeGLbvjWnVrYKK_TnPLdeFC0gT-iZVGZKmPoJRZj0RhucIBI1YnGDcsxrITdFxoyTiYw8Tq7TvU5BgOgJ8KbT2w" />
            </div>
          </div>

          {/* 7. 2026 - Becoming an Author */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">2026</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Becoming an Author</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Published 'Decode the Divorce Industry in India', a critical look at modern societal challenges through a legal and social lens.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 flex justify-center md:justify-start pl-0 md:pl-12">
              <img alt="Book Mockup" className="rounded-[24px] w-full max-w-[350px] object-contain shadow-sm transition-all duration-700" src="/Journey-page-elements/DECODE THE DIVORCE INDUSTRY IN INDIA Book Front Cover (1).webp" />
            </div>
          </div>

          {/* 8. Today - Intersection */}
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">
            <div className="md:w-[45%] order-2 md:order-3">
              <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 duration-1000 opacity-100 translate-y-0">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">TODAY</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Design, Literature & Creative Direction</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">The final convergence of all mediums — where cinematic design meets poetic truth and strategic creative direction.</p>
              </div>
            </div>
            <div className="z-10 bg-primary w-4 h-4 rounded-full ring-8 ring-background mb-8 md:mb-0 order-1 md:order-2"></div>
            <div className="md:w-[45%] order-3 md:order-1 flex justify-center md:justify-end pr-0 md:pr-12">
              <div className="bg-primary/5 rounded-[24px] p-8 flex items-center justify-center">
                <img alt="Aziim Dehlvi Logo" className="w-48 h-auto opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwjEcTlj55WwEo9u5LgIx5NOkchKuTJnp6_01FX8D6FLsAUjiU7wy8pQypF_aZpwPI6GJS5JS5P_Ulw2_MvECITNNb7Vt3RIXre-TWuyFq9B_4H6dhDWary2JZcnP_2ULiayVKgqB9gMfn8s61ZsTOG8VsXWUxln_x9n1XBO9P450A9FuTIUmSTSg8tBzjGIcCq2_8nrJF-y9IOw5ecDn1ae9USEqTJ087R2Ooks8XWv80p_sayqeGLOg-KJJ5bHCIRs6l2d9iQ" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto mb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Collaborate with Amit Manocha&nbsp;</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Whether you're looking for cinematic design, poetic insight under my pen name Aziim Dehlvi, or a creative partnership with Amit Manocha, my door is always open. Let's craft something memorable through our shared vision.</p>
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-outline uppercase">Primary Inquiries</p>
                  <a className="font-body-lg text-body-lg text-primary hover:text-secondary transition-colors" href="mailto:amietmanochaa@gmail.com">amietmanochaa@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-outline uppercase">Collaborations</p>
                  <a className="font-body-lg text-body-lg text-primary hover:text-secondary transition-colors" href="mailto:aziimdehlvi@gmail.com">aziimdehlvi@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[24px] transition-all duration-1000 opacity-100 translate-y-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-primary">NAME</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary transition-all outline-none" 
                    placeholder="Your name" 
                    type="text" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-primary">EMAIL</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary transition-all outline-none" 
                    placeholder="your@email.com" 
                    type="email" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-primary">SUBJECT</label>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary transition-all outline-none" 
                  placeholder="Project or Poetry" 
                  type="text" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-primary">MESSAGE</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary transition-all outline-none" 
                  placeholder="Tell me about your vision..." 
                  rows={5}
                  required
                ></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full font-body-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-[120px] bg-surface-bright border-t border-outline-variant/10 transition-all duration-500 ease-out">
        <div className="flex flex-col items-center text-center px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
          <img alt="Amit Manocha Logo" className="h-16 w-auto mb-8 grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwjEcTlj55WwEo9u5LgIx5NOkchKuTJnp6_01FX8D6FLsAUjiU7wy8pQypF_aZpwPI6GJS5JS5P_Ulw2_MvECITNNb7Vt3RIXre-TWuyFq9B_4H6dhDWary2JZcnP_2ULiayVKgqB9gMfn8s61ZsTOG8VsXWUxln_x9n1XBO9P450A9FuTIUmSTSg8tBzjGIcCq2_8nrJF-y9IOw5ecDn1ae9USEqTJ087R2Ooks8XWv80p_sayqeGLOg-KJJ5bHCIRs6l2d9iQ" />
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Amit Manocha</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 italic">A.K.A. Aziim Dehlvi</p>
          <div className="flex flex-col gap-2 mb-8">
            <a className="font-body-md text-primary hover:text-secondary transition-colors" href="mailto:amietmanochaa@gmail.com">amietmanochaa@gmail.com</a>
            <a className="font-body-md text-primary hover:text-secondary transition-colors" href="mailto:aziimdehlvi@gmail.com">aziimdehlvi@gmail.com</a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="https://www.linkedin.com/in/amit-manocha-b67a5a68/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="https://www.instagram.com/amit.manocha.yg" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="https://www.facebook.com/amitmanocha.yg/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact</Link>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
            © 2026 Amit Manocha. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
