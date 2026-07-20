import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poetry',
  description: 'Experience Urdu poetry by Aziim Dehlvi (Amit Manocha). Read Nazm, Ghazal, Rubai, and Couplet collections exploring themes of love, mortality, and the human condition.',
  alternates: {
    canonical: 'https://amitmanocha.co.in/poetry',
  },
  openGraph: {
    title: 'Poetry | Amit Manocha',
    description: 'Experience Urdu poetry by Aziim Dehlvi (Amit Manocha). Read Nazm, Ghazal, Rubai, and Couplet collections exploring themes of love, mortality, and the human condition.',
    url: 'https://amitmanocha.co.in/poetry',
  },
  twitter: {
    title: 'Poetry | Amit Manocha',
    description: 'Experience Urdu poetry by Aziim Dehlvi (Amit Manocha). Read Nazm, Ghazal, Rubai, and Couplet collections exploring themes of love, mortality, and the human condition.',
  },
};

export default function PoetryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
