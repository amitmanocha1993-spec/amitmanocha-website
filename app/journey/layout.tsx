import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Follow the professional and creative journey of Amit Manocha (Aziim Dehlvi). Explore milestones in design, literature, poetry, and creative arts.',
  alternates: {
    canonical: 'https://amitmanocha.co.in/journey',
  },
  openGraph: {
    title: 'Journey | Amit Manocha',
    description: 'Follow the professional and creative journey of Amit Manocha (Aziim Dehlvi). Explore milestones in design, literature, poetry, and creative arts.',
    url: 'https://amitmanocha.co.in/journey',
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
  return children;
}
