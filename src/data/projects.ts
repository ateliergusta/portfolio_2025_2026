export interface ProjectImage {
  src: string;
  alt: string;
  portrait?: boolean;
  videoSrc?: string;
  fill?: boolean;
}

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
  image: ProjectImage;
  gallery: ProjectImage[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 'Haikus en fleurs',
    number: '01',
    title: 'Haikus en fleurs',
    category: 'Design éditorial',
    year: '2025',
    client: 'Projet étudiant',
    role: 'Design éditorial, Print',
    location: 'Nice, FR',
    shortDesc: 'Création des trois couvertures aux styles graphiques divers.',
    longDesc: 'Appropriation et création des trois visuels graphiques pour une couverture de livre tout en respectant des concepts graphiques tels que le minimalisme, le swiss design et le maximalisme.',
    tags: ['Design', 'PR', 'ART'],
    image: { src: '/projects/Haikus/1.jpg', alt: 'Couverture principale Haikus en fleurs' },
    gallery: [
      { src: '/projects/Haikus/Haikus en fleurs covers4.jpg', alt: 'Couverture minimaliste Haikus en fleurs' },
      { src: '/projects/Haikus/Haikus en fleurs covers.jpg', alt: 'Couverture Haikus en fleurs' },
      { src: '/projects/Haikus/maximalism front 2.png', alt: 'Couverture maximaliste Haikus en fleurs' }
    ],
    color: '#D85A3A'
  },
  {
    id: 'Tarpin',
    number: '02',
    title: 'Tarpin',
    category: 'Design éditorial',
    year: '2024',
    client: 'Projet étudiant AI',
    role: 'Print, Édition, Création de visuels',
    location: 'Marseille, FR',
    shortDesc: 'Magazine marseillais populaire à but touristique.',
    longDesc: 'Un travail autour de la création de visuels dynamiques et colorés qui mettent en avant la ville de Marseille et entraine le lecteur à l\'aventure.',
    tags: ['PRINT', 'Design', 'AI'],
    image: { src: '/projects/Tarpin/mockup tarpin.png', alt: 'Tarpin mockup couverture' },
    gallery: [
      { src: '/projects/Tarpin/Capture d’écran 2026-06-28 à 16.54.15.png', alt: 'Tarpin page intérieure 1' },
      { src: '/projects/Tarpin/couv Papi.png', alt: 'Tarpin couverture Papi' },
      { src: '/projects/Tarpin/Page 12-1.png', alt: 'Tarpin page 12' }
    ],
    color: '#2A2A2A'
  },
  {
    id: 'Bastard',
    number: '03',
    title: 'Bastard',
    category: 'Design éditorial',
    year: '2026',
    client: 'Mufraggi C.',
    role: 'Affiches, Édition',
    location: 'Nice, FR',
    shortDesc: 'Conception édiatoriale d \'une revue trimestrielle. ',
    longDesc: 'Création d\'un magazine autour de l\'univers canin et de sa culture. Plusieurs numéro sont en production avec des visuels colorés et impactants.',
    tags: ['DOG', 'PRINT', 'ÉDITION'],
    image: { src: '/projects/Bastard/bastard couv 2_.png', alt: 'Bastard couverture 2' },
    gallery: [
      { src: '/projects/Bastard/poster san.png', alt: 'Bastard poster' },
      { src: '/projects/Bastard/cover 3.png', alt: 'Bastard couverture 3' },
      { src: '/projects/Bastard/magazine int.png', alt: 'Bastard page intérieure' }
    ],
    color: '#8B4513'
  },
  {
    id: 'Point d\'écrevisse',
    number: '04',
    title: 'Point d\'écrevisse',
    category: 'Identité visuelle',
    year: '2024',
    client: 'Projet personnel',
    role: 'Branding, Logotype',
    location: 'Cagnes-sur-mer, FR',
    shortDesc: 'Création d\'une identité visuelle pour une marque de bébé.',
    longDesc: 'Confection d\'une identité globale axée sur une mascotte colorée et un univers qui casse les codes classiques du secteur des bébés.',
    tags: ['BRAND', 'ILLU', 'IDENT'],
    image: { src: '/projects/Pt-ecrevisse/couche.png', alt: 'Point d\'écrevisse couche' },
    gallery: [
      { src: '/projects/Pt-ecrevisse/poster.png', alt: 'Point d\'écrevisse poster' },
      { src: '/projects/Pt-ecrevisse/porte bb.png', alt: 'Point d\'écrevisse porte bébé' }
    ],
    color: '#000000'
  },
  {
    id: 'Berlinade',
    number: '05',
    title: 'Berlinade',
    category: 'Identité visuelle',
    year: '2025',
    client: 'Projet étudiant PAO',
    role: 'Signalétique, Conception graphique, Identité, Logotype',
    location: 'Nice, FR',
    shortDesc: 'Direction artistique d\'un festival fictif à Berlin.',
    longDesc: 'Création d\'une identité globale d/\'un festival alternatif basé à Berlin sur plusieurs jours. Un langage visuel basé sur des visuels forts et overprintés.',
    tags: ['BRAND', 'LOGO', 'IDENT'],
    image: { src: '/projects/Berlinade/Affiche-Berlinade.png', alt: 'Berlinade affiche' },
    gallery: [
      { src: '/projects/Berlinade/bracelets.png', alt: 'Berlinade bracelets' },
      { src: '/projects/Berlinade/poster-affiches.png', alt: 'Berlinade poster affiches' },
      { src: '/projects/Berlinade/programme-verso-mockup2.png', alt: 'Berlinade programme verso' },
      { src: '/projects/Berlinade/plan-festival.png', alt: 'Berlinade plan festival' }
    ],
    color: '#B03A2E'
  },
  {
    id: 'Photographie',
    number: '06',
    title: 'Archives argentiques',
    category: 'Photographie',
    year: '2022-2024',
    client: 'Projet personnel',
    role: 'Photographie',
    location: 'France, Dolomites, Berlin',
    shortDesc: 'Réalisation d\'une série de photo d\'architecture et de voyage.',
    longDesc: 'Chaque photo a été réalisé à l\’argentique avec différents boitiers et différentes pellicules.',
    tags: ['PHOTO', 'ARGENTIQUE'],
    image: { src: '/projects/revue-argentique/1-nb.jpeg', alt: 'Archives argentiques - photographie noir et blanc' },
    gallery: [
      { src: '/projects/revue-argentique/1-nb.jpeg', alt: 'Photographie NB 1' },
      { src: '/projects/revue-argentique/2-nb.jpg', alt: 'Photographie NB 2' },
      { src: '/projects/revue-argentique/3-nb.jpg', alt: 'Photographie NB 3' },
      { src: '/projects/revue-argentique/4-nb.jpg', alt: 'Photographie NB 4' },
      { src: '/projects/revue-argentique/5-nb.jpg', alt: 'Photographie NB 5' },
      { src: '/projects/revue-argentique/6-nb.jpg', alt: 'Photographie NB 6' },
      { src: '/projects/revue-argentique/7-nb.jpg', alt: 'Photographie NB 7' },
      { src: '/projects/revue-argentique/1-color.jpeg', alt: 'Photographie couleur 1' },
      { src: '/projects/revue-argentique/2-color.jpg', alt: 'Photographie couleur 2' },
      { src: '/projects/revue-argentique/3-color.jpg', alt: 'Photographie couleur 3' },
      { src: '/projects/revue-argentique/4-color.jpg', alt: 'Photographie couleur 4' },
      { src: '/projects/revue-argentique/5-color.jpg', alt: 'Photographie couleur 5' },
      { src: '/projects/revue-argentique/6-color.jpeg', alt: 'Photographie couleur 6' }
    ],
    color: '#333333'
  },
  {
    id: 'SYNC',
    number: '07',
    title: 'SYNC',
    category: 'Logotype',
    year: '2026',
    client: 'Workshop DA',
    role: 'Logotype',
    location: 'Nice, FR',
    shortDesc: 'Conception d\'un logo pour un restaurant.',
    longDesc: 'Création d\'un logo pour un restaurant qui propose une expérience salle d\'arcade et de jeux tradi.',
    tags: ['BRANDING', 'LOGO', 'SCÉNOGRAPHIE'],
    image: { src: '/projects/sync/signboard.png', alt: 'SYNC enseigne', videoSrc: '/projects/sync/comp-1-3.mp4' },
    gallery: [
      { src: '/projects/sync/mockup-resto.png', alt: 'SYNC mockup restaurant' },
      { src: '/projects/sync/sac-papier-rose.png', alt: 'SYNC sac papier' },
      { src: '/projects/sync/logo-2.png', alt: 'SYNC logo' },
      { src: '/projects/sync/etiquette-sync.png', alt: 'SYNC étiquette' }
    ],
    color: '#D35400'
  },
  {
    id: 'Pietra',
    number: '08',
    title: 'Pietra',
    category: 'Packaging',
    year: '2026',
    client: 'Fragonnard (Projet fictif)',
    role: 'Packaging',
    location: 'Grasse, FR',
    shortDesc: 'Packaging pour un parfum Fragonnard.',
    longDesc: 'Création d\'un packaging basé sur un puissant storytelling pour la marque de parfum Fragonnard.',
    tags: ['PACKAGING', 'ARTISANAT', 'ILLU'],
    image: { src: '/projects/pietra/visuel-packaging-fonce.png', alt: 'Pietra visuel packaging' },
    gallery: [
      { src: '/projects/pietra/pietra-mise-en-page.png', alt: 'Pietra mise en page', fill: true },
      { src: '/projects/pietra/R0000693.JPG', alt: 'Pietra photographie 1' },
      { src: '/projects/pietra/R0000703.JPG', alt: 'Pietra photographie 2' },
      { src: '/projects/pietra/R0000711.JPG', alt: 'Pietra photographie 3' },
      { src: '/projects/pietra/img1653470239227.jpg', alt: 'Pietra photographie 4' }
    ],
    color: '#C0392B'
  }
];
