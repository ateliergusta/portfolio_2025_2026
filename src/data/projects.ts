export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  location: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  imageUrl: string;
  galleryImages: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 'galerie-pli',
    number: '01',
    title: 'Galerie Pli',
    category: 'Application',
    year: '2023',
    client: 'Galerie Pli Contemporain',
    role: 'Design UI/UX, Dev',
    location: 'Paris, FR',
    shortDesc: 'Application de visite pour une galerie d\'art contemporain.',
    longDesc: 'Une expérience de visite augmentée pour une galerie d\'art contemporain. Le design s\'efface derrière les œuvres tout en proposant une navigation intuitive et architecturale.',
    tags: ['APP', 'UI', 'ART'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544377193-33dce4d95d0c?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#D85A3A'
  },
  {
    id: 'papier-carbone',
    number: '02',
    title: 'Papier Carbone',
    category: 'Sérigraphie',
    year: '2022',
    client: 'Atelier Papier Carbone',
    role: 'Affiches, Édition',
    location: 'Toulouse, FR',
    shortDesc: 'Série d\'affiches en édition limitée tirées à la main.',
    longDesc: 'Un travail sur la superposition d\'encres et les repères de calage transformés en motif. L\'esthétique brute de la sérigraphie mise en avant.',
    tags: ['PRINT', 'SÉRIGRAPHIE', 'AFFICHE'],
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621532813588-66af76a26d70?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#2A2A2A'
  },
  {
    id: 'maison-verdure',
    number: '03',
    title: 'Maison Verdure',
    category: 'Identité Visuelle',
    year: '2024',
    client: 'Maison Verdure',
    role: 'Branding, Packaging',
    location: 'Lyon, FR',
    shortDesc: 'Identité visuelle pour un fleuriste éco-responsable.',
    longDesc: 'Création d\'une identité globale axée sur des formes organiques et une typographie audacieuse pour rompre avec les codes classiques du secteur floral.',
    tags: ['BRANDING', 'PRINT', 'PACKAGING'],
    imageUrl: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#8B4513'
  },
  {
    id: 'atlas-type',
    number: '04',
    title: 'Atlas Type',
    category: 'Typographie',
    year: '2023',
    client: 'Type Foundry',
    role: 'Design Typographique',
    location: 'Berlin, DE',
    shortDesc: 'Création d\'une police de caractères modulaire.',
    longDesc: 'Développement d\'une fonte expérimentale basée sur une grille stricte, inspirée de l\'architecture brutaliste.',
    tags: ['TYPE', 'FONTS', 'EXPÉRIMENTAL'],
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#000000'
  },
  {
    id: 'studio-brut',
    number: '05',
    title: 'Studio Brut',
    category: 'Site Web',
    year: '2024',
    client: 'Studio Brut Architecture',
    role: 'Design & Dev',
    location: 'Lyon, FR',
    shortDesc: 'Refonte du site d\'un studio d\'architecture brutaliste.',
    longDesc: 'Grille stricte, transitions sèches et typographie monumentale pour mettre en valeur la matière béton.',
    tags: ['WEB', 'UI', 'MOTION'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#B03A2E'
  },
  {
    id: 'revue-marges',
    number: '06',
    title: 'Revue Marges',
    category: 'Édition',
    year: '2023',
    client: 'Éditions Marges',
    role: 'Direction Artistique',
    location: 'Paris, FR',
    shortDesc: 'Conception éditoriale d\'une revue semestrielle.',
    longDesc: 'Chaque numéro explore une nouvelle grille tout en gardant une signature reconnaissable. Un travail minutieux sur la hiérarchie des textes.',
    tags: ['PRINT', 'ÉDITORIAL'],
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#333333'
  },
  {
    id: 'festival-lumen',
    number: '07',
    title: 'Festival Lumen',
    category: 'Direction Artistique',
    year: '2022',
    client: 'Festival Lumen',
    role: 'Identité, Signalétique',
    location: 'Nantes, FR',
    shortDesc: 'Direction artistique d\'un festival de lumière.',
    longDesc: 'Un langage visuel basé sur les faisceaux et la trame, décliné de l\'affiche à la signalétique in situ.',
    tags: ['BRANDING', 'AFFICHE', 'SIGNALÉTIQUE'],
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#D35400'
  },
  {
    id: 'onde-sonore',
    number: '08',
    title: 'Onde Sonore',
    category: 'Identité de Label',
    year: '2024',
    client: 'Onde Sonore Records',
    role: 'Branding',
    location: 'Londres, UK',
    shortDesc: 'Identité visuelle pour un label de musique électronique.',
    longDesc: 'Création d\'un système visuel génératif réagissant aux fréquences sonores, décliné sur les pochettes de vinyles.',
    tags: ['MUSIC', 'BRANDING', 'GÉNÉRATIF'],
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop'
    ],
    color: '#C0392B'
  }
];
