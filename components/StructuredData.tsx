export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amit Manocha',
    alternateName: 'Aziim Dehlvi',
    url: 'https://www.amitmanocha.co.in',
    jobTitle: ['Creative Designer', 'Author', 'Poet'],
    description: 'Amit Manocha (A.K.A. Aziim Dehlvi) is a creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
    image: 'https://www.amitmanocha.co.in/icon.png',
    worksFor: {
      '@type': 'Organization',
      name: 'Amit Manocha',
      url: 'https://www.amitmanocha.co.in',
    },
    sameAs: [
      'https://www.amitmanocha.co.in',
      'https://www.linkedin.com/in/amit-manocha-b67a5a68/',
      'https://www.instagram.com/amit.manocha.yg',
      'https://www.facebook.com/amitmanocha.yg/',
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amit Manocha',
    url: 'https://www.amitmanocha.co.in',
    logo: 'https://www.amitmanocha.co.in/icon.png',
    description: 'Creative Designer, Motion Designer, Author, Urdu Poet and Visual Storyteller.',
    founder: {
      '@type': 'Person',
      name: 'Amit Manocha',
    },
    email: 'amietmanochaa@gmail.com',
    sameAs: [
      'https://www.amitmanocha.co.in',
      'https://www.linkedin.com/in/amit-manocha-b67a5a68/',
      'https://www.instagram.com/amit.manocha.yg',
      'https://www.facebook.com/amitmanocha.yg/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amit Manocha',
    url: 'https://www.amitmanocha.co.in',
    description: 'Portfolio of Amit Manocha (A.K.A. Aziim Dehlvi) - Creative Designer, Author, and Poet',
    publisher: {
      '@type': 'Organization',
      name: 'Amit Manocha',
      url: 'https://www.amitmanocha.co.in',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.amitmanocha.co.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const schema = [personSchema, organizationSchema, websiteSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
