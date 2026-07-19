'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
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

  return (
    <main className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Contact Hero */}
      <section className="relative min-h-[60vh] flex items-center mesh-gradient pt-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px] w-full">
          <div className="text-center">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h1 className="font-display-lg-mobile md:text-display-lg text-primary mb-6">Contact</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Let's create something meaningful together. Reach out for collaborations, inquiries, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-bright">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border border-outline-variant/30 bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body-md text-body-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border border-outline-variant/30 bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body-md text-body-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border border-outline-variant/30 bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body-md text-body-md"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-lg border border-outline-variant/30 bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body-md text-body-md resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-primary text-on-primary font-body-md hover:bg-deep-navy transition-all duration-300 shadow-[0_12px_24px_rgba(0,17,58,0.15)] hover:shadow-[0_16px_32px_rgba(0,17,58,0.25)] hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-headline-md text-2xl text-primary mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary icon-filled text-2xl" size={24} />
                    <div>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-1">Design & Business</p>
                      <a href="mailto:amietmanochaa@gmail.com" className="font-body-md text-body-md text-primary hover:text-secondary transition-colors">
                        amietmanochaa@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-secondary icon-filled text-2xl" size={24} />
                    <div>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-1">Literary & Poetry</p>
                      <a href="mailto:aziimdehlvi@gmail.com" className="font-body-md text-body-md text-primary hover:text-secondary transition-colors">
                        aziimdehlvi@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-headline-md text-2xl text-primary mb-6">Social Media</h3>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/in/amit-manocha-b67a5a68/" className="flex items-center gap-4 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    <svg className="text-secondary icon-filled" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/amit.manocha.yg" className="flex items-center gap-4 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    <svg className="text-secondary icon-filled" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/amitmanocha.yg/" className="flex items-center gap-4 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    <svg className="text-secondary icon-filled" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-headline-md text-2xl text-primary mb-6">Working Hours</h3>
                <div className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
