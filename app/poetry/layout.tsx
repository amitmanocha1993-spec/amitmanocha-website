import type { Metadata } from 'next';
import PageStructuredData from '@/components/PageStructuredData';

export const metadata: Metadata = {
  title: 'Poetry',
  description: 'Experience Urdu poetry by Aziim Dehlvi (Amit Manocha). Read Nazm, Ghazal, Rubai, and Couplet collections exploring themes of love, mortality, and the human condition.',
  alternates: {
    canonical: 'https://www.amitmanocha.co.in/poetry',
  },
  openGraph: {
    title: 'Poetry | Amit Manocha',
    description: 'Experience Urdu poetry by Aziim Dehlvi (Amit Manocha). Read Nazm, Ghazal, Rubai, and Couplet collections exploring themes of love, mortality, and the human condition.',
    url: 'https://www.amitmanocha.co.in/poetry',
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
  return (
    <>
      <PageStructuredData
        pageName="Poetry"
        pageUrl="https://www.amitmanocha.co.in/poetry"
        pageDescription="Experience Urdu poetry by Aziim Dehlvi (Amit Manocha). Read Nazm, Ghazal, Rubai, and Couplet collections exploring themes of love, mortality, and the human condition."
        breadcrumbs={[
          { name: 'Home', url: 'https://www.amitmanocha.co.in' },
          { name: 'Poetry', url: 'https://www.amitmanocha.co.in/poetry' },
        ]}
      />
      {children}
    </>
  );
}
