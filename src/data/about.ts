export interface Expertise {
  number: string;
  category: string;
  title: string;
  description: string;
}

export interface Photo {
  src: string;
  alt: string;
  fig: string;
}

export interface AboutData {
  title: string;
  bio: string[];
  expertiseTitle: string;
  expertises: Expertise[];
  photos: Photo[];
}

export const about: AboutData = {
  title: "À Propos",
  bio: [
    "Directrice artistique & designer graphique basée à Nice. Mère d'un poilu et toujours partante pour une nouvelle aventute. ",
    "Passionnée par le design éditorial, l'identité visuelle et l'artisanat, je m'efforce de créer des designs innovants et intemporels.",
    "J'apporte à chaque étape de la conception graphique une attention particulière aux détails afin de rendre chaque projet unique.  "
  ],
  expertiseTitle: "Expertises",
  expertises: [
    {
      number: "01",
      category: "DESIGN",
      title: "Identité Visuelle",
      description: "Création de systèmes visuels complets, logotypes, charte graphique et direction artistique globale pour marques et institutions."
    },
    {
      number: "02",
      category: "ILLUSTRATION",
      title: "Illustration & Matières",
      description: "Exploration de formes et de textures à travers l'illustration manuelle et les techniques artisanales — pour l'édition, l'objet et la signalétique."
    },
    {
      number: "03",
      category: "PRINT",
      title: "Éditorial",
      description: "Mise en page, conception d'ouvrages, affiches et sérigraphie. Le travail de la grille typographique au service de la lecture."
    }
  ],
  photos: [
    { src: "/about/fig1.JPG", alt: "Portrait", fig: "FIG. 1" },
    { src: "/about/fig2.jpg", alt: "Detail 1", fig: "FIG. 2" },
    { src: "/about/fig3.jpg", alt: "Detail 2", fig: "FIG. 3" }
  ]
};
