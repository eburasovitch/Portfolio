import { FaGithub, FaTrello, FaUsers } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";
import { useEffect, useState } from "react";

const AboutSectionFour = () => {
  const [isDark, setIsDark] = useState(false);
  
      useEffect(() => {
          const darkModeActive = document.documentElement.classList.contains("dark");
          setIsDark(darkModeActive);
      }, []);
  return (
    <section
      className="relative py-16 md:py-20 lg:py-28
      bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8]
      dark:from-[#1a1a1a] dark:to-[#1a1a1a]"
    >
      {isDark && <BackgroundDecorator variant="bubblesGradient" />}
      <div className="container text-center">
        <SectionTitle
          title="Outils, Collaboration et Bilan"
          paragraph="Le stage m’a permis de travailler au sein d’une équipe multidisciplinaire en utilisant des outils modernes de gestion et de développement collaboratif."
          mb="64px"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black dark:text-white">
              <FaGithub /> Gestion de version
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Utilisation de GitHub pour le suivi des branches, la relecture du code et l’intégration continue.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black dark:text-white">
              <FaTrello /> Organisation du projet
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Gestion agile via Trello, avec un tableau structuré en “À faire”, “En cours”, “Terminé”.
              Chaque tâche était liée à une issue GitHub.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-black dark:text-white">
              <FaUsers /> Collaboration & Communication
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Collaboration internationale entre étudiants français et canadiens, en visioconférences hebdomadaires et partage de code via GitHub.
            </p>
          </div>
        </div>

        <p className="mt-12 text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
          Ce stage m’a offert une expérience concrète de recherche appliquée en algorithmique, 
          tout en renforçant mes compétences en travail collaboratif et en gestion de projet logiciel.
        </p>
      </div>
    </section>
  );
};

export default AboutSectionFour;
