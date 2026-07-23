interface PageStructuredDataProps {
  pageName: string;
  pageUrl: string;
  pageDescription: string;
  breadcrumbs: { name: string; url: string }[];
  isCollection?: boolean;
  primaryImage?: string;
  bookSchema?: any;
}

export default function PageStructuredData({
  pageName,
  pageUrl,
  pageDescription,
  breadcrumbs,
  isCollection = false,
  primaryImage,
  bookSchema,
}: PageStructuredDataProps) {
  const webPageSchema: any = {
    '@context': 'https://schema.org',
    '@type': isCollection ? 'CollectionPage' : 'WebPage',
    name: pageName,
    description: pageDescription,
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Amit Manocha',
      url: 'https://www.amitmanocha.co.in',
    },
    about: {
      '@type': 'Person',
      name: 'Amit Manocha',
      alternateName: 'Aziim Dehlvi',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Amit Manocha',
      url: 'https://www.amitmanocha.co.in',
    },
  };

  if (primaryImage) {
    webPageSchema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: primaryImage,
    };
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  const schemas = [webPageSchema, breadcrumbSchema];

  if (bookSchema) {
    schemas.push(bookSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
