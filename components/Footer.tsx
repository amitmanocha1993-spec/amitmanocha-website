'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-[120px] border-t border-outline-variant/10 bg-surface-bright transition-all duration-500 flex flex-col items-center text-center px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
      <div className="mb-8 flex flex-col items-center gap-4">
        <img 
          alt="Amit Manocha Logo" 
          className="h-16 w-auto object-contain" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd4IG71Z796VAv0zTlNjNixZ2qJQcQHzeLdLkYFSPBvyAkvONGJPoZXOLqEvJ9BdMRoH1BI7b55z0dJowxT47bEpgDcjaEBCBWzt-L56z74Y5ILcmXyetSw-_BAqW8qeATV0IHf_OUayt1uUlzv6XDMvsMUd-HezwpSyuN_wBjPtkeqEksJwgsBhEf6KgbHmuznLH2j7NT-K0daBNgiFekr2zTLFJ_xpBflMNucDtV-xbv9DcFMxQF2JxfJ6TontjVtEwl5sXjVg"
        />
        <h2 className="font-headline-md text-headline-md text-primary">Work with Amit Manocha (A.K.A. Aziim Dehlvi)</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl">
          Collaborating at the intersection of design and literature. Amit Manocha is my creative professional name for design and strategy, while Aziim Dehlvi is my literary pen name for poetry and prose.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/portfolio">Portfolio</Link>
        <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/books">Books</Link>
        <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/poetry">Poetry</Link>
        <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/journey">Journey</Link>
        <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact</Link>
      </div>
      
      <p className="font-body-md text-body-md text-on-surface-variant">© 2026 Amit Manocha. All rights reserved.</p>
    </footer>
  );
}
