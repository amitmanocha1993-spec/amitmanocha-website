import type { Metadata } from 'next';
import PageStructuredData from '@/components/PageStructuredData';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Follow the professional and creative journey of Amit Manocha (Aziim Dehlvi). Explore milestones in design, literature, poetry, and creative arts.',
  alternates: {
    canonical: 'https://www.amitmanocha.co.in/journey',
  },
  openGraph: {
    title: 'Journey | Amit Manocha',
    description: 'Follow the professional and creative journey of Amit Manocha (Aziim Dehlvi). Explore milestones in design, literature, poetry, and creative arts.',
    url: 'https://www.amitmanocha.co.in/journey',
  },
  twitter: {
    title: 'Journey | Amit Manocha',
    description: 'Follow the professional and creative journey of Amit Manocha (Aziim Dehlvi). Explore milestones in design, literature, poetry, and creative arts.',
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        pageName="Journey"
        pageUrl="https://www.amitmanocha.co.in/journey"
        pageDescription="Follow the professional and creative journey of Amit Manocha (Aziim Dehlvi). Explore milestones in design, literature, poetry, and creative arts."
        breadcrumbs={[
          { name: 'Home', url: 'https://www.amitmanocha.co.in' },
          { name: 'Journey', url: 'https://www.amitmanocha.co.in/journey' },
        ]}
      />
      {children}
    </>
  );
}
