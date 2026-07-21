import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View the creative portfolio of Amit Manocha featuring multidisciplinary design projects in branding, digital design, print design, and cricket. Explore visual narratives and creative works.',
  alternates: {
    canonical: 'https://www.amitmanocha.co.in/portfolio',
  },
  openGraph: {
    title: 'Portfolio | Amit Manocha',
    description: 'View the creative portfolio of Amit Manocha featuring multidisciplinary design projects in branding, digital design, print design, and cricket.',
    url: 'https://www.amitmanocha.co.in/portfolio',
  },
  twitter: {
    title: 'Portfolio | Amit Manocha',
    description: 'View the creative portfolio of Amit Manocha featuring multidisciplinary design projects in branding, digital design, print design, and cricket.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
