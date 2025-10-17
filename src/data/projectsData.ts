export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageDark?: string;
  link?: string;
  rowHeight?: string | number;
  imageScale?: number;
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet Netflix Clone",
    description: "Projet de deuxieme année de formation, un clone de Netflix en React.",
    image: "/images/LogoNetflix.png",
    imageDark: "/images/LogoNetflix.png",
    link: "/Project_netflix",
    rowHeight: "500px",
    imageScale: 0.8,
    imagePosition: "top"
  },
  {
    id: 2,
    title: "Projet Kotlin To-Do List",
    description: "Présentation rapide du projet 2, ses objectifs et résultats.",
    image: "/images/Mobile.png",
    imageDark: "/images/Mobile.png",
    link: "/Project_kotlin",
    rowHeight: "600px",
    imageScale: 1.2,
  },
  {
    id: 3,
    title: "Projet Stage Unita",
    description: "Quelques détails sur mon stage au seins de l'unita, impliquant un projet web.",
    image: "/images/logo_unita.jpg",
    imageDark: "/images/logo_unita.jpg",
    link: "/ProjectUnita",
    rowHeight: "450px",
    imageScale: 0.9,
    imagePosition: "top"
  },
  {
    id: 4,
    title: "Projet Stage UQAC",
    description: "Description courte du projet 4, compétences utilisées.",
    image: "/images/uqac.png",
    imageDark: "/images/uqac.png",
    link: "/ProjectUqac",
    rowHeight: "400px",
    imageScale: 0.85,
  },
  {
    id: 5,
    title: "Rapports projects",
    description: "Résumé du projet 5 avec ses fonctionnalités principales.",
    image: "/images/DocDark.png",
    imageDark: "/images/Doc.png",
    link: "/ProjectDoc",
    rowHeight: "450px",
    imageScale: 0.85,
    imagePosition: "top"
  },
  {
    id: 6,
    title: "Projet SBD Site Web",
    description: "Détails sur le projet 6 et ce qu’il démontre.",
    image: "/images/dumbbell.png",
    imageDark: "/images/dumbbell.png",
    link: "/ProjectSbd",
    rowHeight: "400px",
    imageScale: 0.85,
  },
];
