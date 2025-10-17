// src/data/aboutData.ts

import {
    Braces,
    FileCode,
    Database,
    Boxes,
    TerminalSquare,
    Globe,
    FileText,
    Box,
    Smartphone,
    Cloud,
} from "lucide-react";

export interface AboutItem {
    id: number;
    title: string;
    description: string;
    icon?: any; // composant React (icône)
}

export const aboutData: AboutItem[] = [
    {
        id: 1,
        title: "Frontend",
        description:
            "Expérience en développement frontend moderne avec ReactJS et Quasar. Création d’interfaces dynamiques, ergonomiques et responsives.",
        icon: Globe,
    },
    {
        id: 2,
        title: "Backend & API",
        description:
            "Mise en place d’architectures backend robustes, développement et intégration d’API REST.",
        icon: Braces,
    },
    {
        id: 3,
        title: "Bases de données & Tools",
        description:
            "Pratique sur MongoDB, PlanetScale et PostgreSQL. Conception, gestion et optimisation de bases relationnelles et NoSQL.",
        icon: Database,
    },
    {
        id: 4,
        title: "C++",
        description:
            "Solides bases en programmation C++ pour la création d’applications performantes et optimisées.",
        icon: TerminalSquare,
    },
    {
        id: 5,
        title: "HTML & CSS",
        description:
            "Maîtrise des fondations du web pour structurer et styliser des interfaces accessibles et modernes.",
        icon: FileCode,
    },
    {
        id: 6,
        title: "Python",
        description:
            "Utilisation de Python pour scripts, automatisation, data processing et prototypage rapide.",
        icon: Boxes,
    },
    {
        id: 7,
        title: "SQL Développeur",
        description:
            "Conception de schémas, optimisation de requêtes et gestion de données complexes avec SQL.",
        icon: Database,
    },
    {
        id: 8,
        title: "JavaScript",
        description:
            "Langage central pour le web moderne. Expérience en vanilla JS ainsi qu’avec de multiples frameworks.",
        icon: Braces,
    },
    {
        id: 9,
        title: "Documentation technique",
        description:
            "Rédaction claire et structurée de documents techniques pour faciliter la transmission de connaissances.",
        icon: FileText,
    },
    {
        id: 10,
        title: "Docker",
        description:
            "Création et gestion de conteneurs pour standardiser les environnements de développement et déploiement.",
        icon: Box,
    },
    {
        id: 11,
        title: "Kotlin (Android Studio)",
        description:
            "Développement d’applications mobiles Android en Kotlin avec Android Studio.",
        icon: Smartphone,
    },
    {
        id: 12,
        title: "Azure DevOps",
        description:
            "Gestion de projets, intégration continue et déploiement avec Azure DevOps.",
        icon: Cloud,
    },
];
