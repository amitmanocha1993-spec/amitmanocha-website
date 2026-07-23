import type { Metadata } from 'next';
import PageStructuredData from '@/components/PageStructuredData';

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Decode the Divorce Industry in India: Law, Reality, Misuse & the Truth Behind Matrimonial Disputes',
  description: 'Marriage in India is not just a bond—it is a legal, social, and emotional institution. But when it breaks, the journey through the legal system can become complex, overwhelming, and, at times, deeply misunderstood. Decode the Divorce Industry in India takes you inside a reality that is rarely discussed openly. This book explores the ground realities of matrimonial disputes in India, the challenges within legal procedures and delays, the growing conversations around misuse and allegations, and the emotional, financial, and psychological impact on individuals.',
  author: {
    '@type': 'Person',
    name: 'Amit Kumar Manocha',
    alternateName: 'Aziim Dehlvi',
  },
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRcxKu9aTHdHRd5_QJTCwxNsot8Cr_eRjHWptmpdx5Zg0txyjZAt94VWJDsWXit1mL6hg26v8ltezOjxOkkFtghDlUx49LqICRME1jnRczYdS3TXO8osUH-qXkFVSIGxwAxS30yE25voR8NWoLDiB699ku3LSC0sXSxtfEAtLVnPMG-aS1vY901OdJ8dbDYn66e0uOcC9HzrDz_hzti2rKz4mf6rS7kNnPgN3_GYLEmWu42xtXR_LJelJYNy-VuC8ImNnCyq6ptA',
  url: 'https://www.amitmanocha.co.in/books',
  datePublished: '2026-03-27',
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: 'Amit Manocha',
  },
  workExample: [
    {
      '@type': 'Book',
      name: 'Decode the Divorce Industry in India - Kindle Edition',
      bookFormat: 'https://schema.org/EBook',
      url: 'https://www.amazon.in/Decode-Divorce-Industry-India-Matrimonial-ebook/dp/B0GV3VTC1T',
      offers: {
        '@type': 'Offer',
        url: 'https://www.amazon.in/Decode-Divorce-Industry-India-Matrimonial-ebook/dp/B0GV3VTC1T',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Book',
      name: 'Decode the Divorce Industry in India - Google Play Books',
      bookFormat: 'https://schema.org/EBook',
      url: 'https://play.google.com/store/books/details/Amit_Kumar_Manocha_Aziim_Dehlvi_Decode_the_Divorce?id=vczREQAAQBAJ&hl=en_IN',
      offers: {
        '@type': 'Offer',
        url: 'https://play.google.com/store/books/details/Amit_Kumar_Manocha_Aziim_Dehlvi_Decode_the_Divorce?id=vczREQAAQBAJ&hl=en_IN',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Book',
      name: 'Decode the Divorce Industry in India - Pothi Paperback',
      isbn: '9789358120318',
      numberOfPages: 204,
      bookFormat: 'https://schema.org/Paperback',
      url: 'https://store.pothi.com/book/amit-kumar-manocha-decode-divorce-industry-india/',
      offers: {
        '@type': 'Offer',
        url: 'https://store.pothi.com/book/amit-kumar-manocha-decode-divorce-industry-india/',
        availability: 'https://schema.org/InStock',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Self Published',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Books by Amit Manocha | Decode the Divorce Industry in India',
  description: 'Discover "Decode the Divorce Industry in India" by Amit Manocha (A.K.A. Aziim Dehlvi) - A comprehensive guide to understanding divorce proceedings, matrimonial disputes, 498A, and family law in India. Available on Amazon, Google Play, and Pothi.',
  keywords: ['Decode the Divorce Industry in India', 'Amit Manocha book', 'divorce law book India', '498A book', 'matrimonial law book India', 'men\'s rights book India', 'family law India', 'divorce proceedings India', 'legal rights India'],
  alternates: {
    canonical: 'https://www.amitmanocha.co.in/books',
  },
  openGraph: {
    title: 'Books by Amit Manocha | Decode the Divorce Industry in India',
    description: 'Discover "Decode the Divorce Industry in India" by Amit Manocha (A.K.A. Aziim Dehlvi) - A comprehensive guide to understanding divorce proceedings, matrimonial disputes, 498A, and family law in India.',
    url: 'https://www.amitmanocha.co.in/books',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRcxKu9aTHdHRd5_QJTCwxNsot8Cr_eRjHWptmpdx5Zg0txyjZAt94VWJDsWXit1mL6hg26v8ltezOjxOkkFtghDlUx49LqICRME1jnRczYdS3TXO8osUH-qXkFVSIGxwAxS30yE25voR8NWoLDiB699ku3LSC0sXSxtfEAtLVnPMG-aS1vY901OdJ8dbDYn66e0uOcC9HzrDz_hzti2rKz4mf6rS7kNnPgN3_GYLEmWu42xtXR_LJelJYNy-VuC8ImNnCyq6ptA',
        width: 1200,
        height: 1800,
        alt: 'Decode the Divorce Industry in India Book Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Books by Amit Manocha | Decode the Divorce Industry in India',
    description: 'Discover "Decode the Divorce Industry in India" by Amit Manocha (A.K.A. Aziim Dehlvi) - A comprehensive guide to understanding divorce proceedings, matrimonial disputes, 498A, and family law in India.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRcxKu9aTHdHRd5_QJTCwxNsot8Cr_eRjHWptmpdx5Zg0txyjZAt94VWJDsWXit1mL6hg26v8ltezOjxOkkFtghDlUx49LqICRME1jnRczYdS3TXO8osUH-qXkFVSIGxwAxS30yE25voR8NWoLDiB699ku3LSC0sXSxtfEAtLVnPMG-aS1vY901OdJ8dbDYn66e0uOcC9HzrDz_hzti2rKz4mf6rS7kNnPgN3_GYLEmWu42xtXR_LJelJYNy-VuC8ImNnCyq6ptA',
    ],
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageStructuredData
        pageName="Books"
        pageUrl="https://www.amitmanocha.co.in/books"
        pageDescription="Explore the literary works of Aziim Dehlvi (Amit Manocha). Discover books on legal analysis, Urdu poetry, and social commentary."
        breadcrumbs={[
          { name: 'Home', url: 'https://www.amitmanocha.co.in' },
          { name: 'Books', url: 'https://www.amitmanocha.co.in/books' },
        ]}
        isCollection={true}
        bookSchema={bookSchema}
      />
      {children}
    </>
  );
}
