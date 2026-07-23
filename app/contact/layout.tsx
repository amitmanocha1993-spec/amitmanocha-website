import type { Metadata } from 'next';
import PageStructuredData from '@/components/PageStructuredData';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Amit Manocha (Aziim Dehlvi). Reach out for design collaborations, literary projects, poetry inquiries, or creative partnerships.',
  alternates: {
    canonical: 'https://www.amitmanocha.co.in/contact',
  },
  openGraph: {
    title: 'Contact | Amit Manocha',
    description: 'Get in touch with Amit Manocha (Aziim Dehlvi). Reach out for design collaborations, literary projects, poetry inquiries, or creative partnerships.',
    url: 'https://www.amitmanocha.co.in/contact',
  },
  twitter: {
    title: 'Contact | Amit Manocha',
    description: 'Get in touch with Amit Manocha (Aziim Dehlvi). Reach out for design collaborations, literary projects, poetry inquiries, or creative partnerships.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        pageName="Contact"
        pageUrl="https://www.amitmanocha.co.in/contact"
        pageDescription="Get in touch with Amit Manocha (Aziim Dehlvi). Reach out for design collaborations, literary projects, poetry inquiries, or creative partnerships."
        breadcrumbs={[
          { name: 'Home', url: 'https://www.amitmanocha.co.in' },
          { name: 'Contact', url: 'https://www.amitmanocha.co.in/contact' },
        ]}
      />
      {children}
    </>
  );
}
