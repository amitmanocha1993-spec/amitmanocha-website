import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the portfolio of Amit Manocha (A.K.A. Aziim Dehlvi) - Creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
  alternates: {
    canonical: 'https://amitmanocha.co.in',
  },
  openGraph: {
    title: 'Home | Amit Manocha',
    description: 'Welcome to the portfolio of Amit Manocha (A.K.A. Aziim Dehlvi) - Creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
    url: 'https://amitmanocha.co.in',
  },
  twitter: {
    title: 'Home | Amit Manocha',
    description: 'Welcome to the portfolio of Amit Manocha (A.K.A. Aziim Dehlvi) - Creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
