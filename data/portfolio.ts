export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Branding' | 'Digital Design' | 'Print Design' | 'Cricket';
  imagePath: string;
  folder: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  // Branding Projects
  {
    id: 'branding-1',
    title: 'Logo Design 01',
    category: 'Branding',
    imagePath: '/portfolio/branding/logo-01.png',
    folder: 'Branding',
    featured: true
  },
  {
    id: 'branding-2',
    title: 'Logo Design 02',
    category: 'Branding',
    imagePath: '/portfolio/branding/logo-02.png',
    folder: 'Branding',
    featured: true
  },

  // Cricket Projects
  {
    id: 'cricket-1',
    title: 'JPL Design 01',
    category: 'Cricket',
    imagePath: '/portfolio/cricket/jpl-01.png',
    folder: 'Cricket',
    featured: true
  },
  {
    id: 'cricket-2',
    title: 'JPL Design 02',
    category: 'Cricket',
    imagePath: '/portfolio/cricket/jpl-02.png',
    folder: 'Cricket',
    featured: true
  },
  {
    id: 'cricket-3',
    title: 'JPL Design 03',
    category: 'Cricket',
    imagePath: '/portfolio/cricket/jpl-03.png',
    folder: 'Cricket',
    featured: true
  },
  {
    id: 'cricket-4',
    title: 'JPL Design 04',
    category: 'Cricket',
    imagePath: '/portfolio/cricket/jpl-04.png',
    folder: 'Cricket',
    featured: false
  },
  {
    id: 'cricket-5',
    title: 'JPL Design 05',
    category: 'Cricket',
    imagePath: '/portfolio/cricket/jpl-05.png',
    folder: 'Cricket',
    featured: false
  },
  {
    id: 'cricket-6',
    title: 'JPL Design 06',
    category: 'Cricket',
    imagePath: '/portfolio/cricket/jpl-06.png',
    folder: 'Cricket',
    featured: false
  },

  // Digital Design Projects
  {
    id: 'digital-1',
    title: 'Digital Design 01',
    category: 'Digital Design',
    imagePath: '/portfolio/digital-design/digital-01.png',
    folder: 'Digital Design',
    featured: true
  },
  {
    id: 'digital-2',
    title: 'Digital Design 02',
    category: 'Digital Design',
    imagePath: '/portfolio/digital-design/digital-02.png',
    folder: 'Digital Design',
    featured: true
  },
  {
    id: 'digital-3',
    title: 'Digital Design 03',
    category: 'Digital Design',
    imagePath: '/portfolio/digital-design/digital-03.png',
    folder: 'Digital Design',
    featured: true
  },
  {
    id: 'digital-4',
    title: 'Digital Design 04',
    category: 'Digital Design',
    imagePath: '/portfolio/digital-design/digital-04.png',
    folder: 'Digital Design',
    featured: false
  },
  {
    id: 'digital-5',
    title: 'Digital Design 05',
    category: 'Digital Design',
    imagePath: '/portfolio/digital-design/digital-05.png',
    folder: 'Digital Design',
    featured: false
  },

  // Print Design Projects
  {
    id: 'print-1',
    title: 'Print Design 01',
    category: 'Print Design',
    imagePath: '/portfolio/print-design/print-01.png',
    folder: 'Print Design',
    featured: true
  },
  {
    id: 'print-2',
    title: 'Print Design 02',
    category: 'Print Design',
    imagePath: '/portfolio/print-design/print-02.png',
    folder: 'Print Design',
    featured: true
  },
  {
    id: 'print-3',
    title: 'Print Design 03',
    category: 'Print Design',
    imagePath: '/portfolio/print-design/print-03.png',
    folder: 'Print Design',
    featured: false
  }
];

export const portfolioCategories = [
  'All Works',
  'Branding',
  'Digital Design',
  'Print Design',
  'Cricket'
] as const;

export type PortfolioCategory = typeof portfolioCategories[number];

export const getProjectsByCategory = (category: PortfolioCategory): PortfolioProject[] => {
  if (category === 'All Works') {
    return portfolioProjects;
  }
  return portfolioProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.featured);
};
