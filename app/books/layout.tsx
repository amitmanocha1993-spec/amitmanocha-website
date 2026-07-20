import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Explore the literary works of Aziim Dehlvi (Amit Manocha). Discover books on legal analysis, Urdu poetry, and social commentary including "Decode the Divorce Industry in India" and "Kafan Mein Lipti Shayari".',
  alternates: {
    canonical: 'https://amitmanocha.co.in/books',
  },
  openGraph: {
    title: 'Books | Amit Manocha',
    description: 'Explore the literary works of Aziim Dehlvi (Amit Manocha). Discover books on legal analysis, Urdu poetry, and social commentary.',
    url: 'https://amitmanocha.co.in/books',
  },
  twitter: {
    title: 'Books | Amit Manocha',
    description: 'Explore the literary works of Aziim Dehlvi (Amit Manocha). Discover books on legal analysis, Urdu poetry, and social commentary.',
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
