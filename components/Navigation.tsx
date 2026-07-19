'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/books', label: 'Books' },
    { href: '/poetry', label: 'Poetry' },
    { href: '/journey', label: 'Journey' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20 bg-glass-white/80 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center px-[24px] md:px-[80px] py-4 max-w-[1440px] mx-auto">
          <Link className="flex items-center gap-3 group" href="/">
            <img 
              alt="Amit Manocha Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3stHPcuBEqD11nvNxItK30E_zLIohPjRHI3GJ_bVCBmJ8tKumRl8ic_8ioQiK6UcNXOPjLVW5mNsazjxbmW-eGJjypfU2FOBZ9ec6NkPvl40EXKS7DluDUyXrJdQ_NvbOgZPUb4iuXLWyN0TBmkRX0Fhern3jzF8yiBzIOuDNh8qjoQc1w55zWm2YnnTM1vSSOoV3PE-YxA4tYujHeb92Gqc1j5cdVq2DuQfhi99M7KmtO91oi0kEw3bdwkVP9ZKm4xptcDtOWg"
            />
            <span className="font-headline-md text-2xl md:text-3xl font-bold text-primary">Amit Manocha</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`font-body-md text-body-md ${
                  isActive(link.href) 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-primary transition-colors'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link href="/contact" className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-on-primary font-body-md hover:bg-deep-navy transition-colors shadow-lg shadow-primary/10">
            Let's Talk
          </Link>
          
          <button 
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-[60] flex flex-col p-8 md:hidden">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`font-display-lg-mobile text-display-lg-mobile ${
                  isActive(link.href) ? 'text-primary font-bold' : 'text-primary'
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
