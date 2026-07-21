export default function StructuredData() {
  const schema = {
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
