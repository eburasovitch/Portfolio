import { Database, FileCode, LayoutGrid, LineChart } from "lucide-react";

const features = [
  {
    icon: <Database className="text-[#5BAA9C] w-8 h-8" />,
    title: "Conception du modèle",
    desc: "Création du modèle conceptuel de données (MCD) et du schéma relationnel normalisé.",
  },
  {
    icon: <FileCode className="text-[#5BAA9C] w-8 h-8" />,
    title: "Implémentation SQL",
    desc: "Rédaction des scripts SQL : tables, vues, triggers, fonctions et contraintes d’intégrité.",
  },
  {
    icon: <LayoutGrid className="text-[#5BAA9C] w-8 h-8" />,
    title: "Interface web",
    desc: "Développement d’une application Flask pour interagir dynamiquement avec la base.",
  },
  {
    icon: <LineChart className="text-[#5BAA9C] w-8 h-8" />,
    title: "Analyse & Visualisation",
    desc: "Création de tableaux de bord et statistiques à partir de requêtes avancées.",
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F3EFE8] dark:bg-[#1c1c1c]">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#5BAA9C] mb-10">Contexte et Objectifs</h2>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-16">
          Le projet SBD s’inscrit dans une démarche complète de conception et 
          d’exploitation d’une base de données relationnelle, avec un accent sur 
          la rigueur méthodologique, la qualité du modèle et la performance des requêtes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#232526] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-[#5BAA9C]">{f.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
