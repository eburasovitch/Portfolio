import { FaProjectDiagram, FaUsers } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";

const AboutSectionFour = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      <BackgroundDecorator variant="bubblesGradient" />
      <div className="container">
        <SectionTitle
          title="Gestion, Organisation et Économie"
          paragraph="Ces rapports mettent en avant les dimensions managériales, organisationnelles et économiques de l’informatique dans le milieu professionnel."
          mb="64px"
        />

        <div className="relative border-l-4 border-[#5BAA9C] pl-10 space-y-10 bg-[#FFFBF4] dark:bg-[#414141] rounded-2xl shadow-md p-6 max-w-3xl">
          <div className="relative max-w-3xl">
            <div className="absolute -left-[38px] bg-[#5BAA9C] text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaProjectDiagram />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-[#3F3F3F] dark:text-white">
              Gestion de production dans l’industrie du numérique
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Projet mené avec Colas et Eratech pour moderniser les outils de suivi des chantiers.
              Travail sur la communication, les besoins utilisateurs et la modélisation de la solution.
            </p>
            <a
              href="/pdf/Rapport_Gestion.pdf"
              download
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#5BAA9C] to-[#4a998d] text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#5AE4AA] hover:shadow-2xl"
            >
              Télécharger
            </a>
          </div>

          <div className="relative max-w-3xl">
            <div className="absolute -left-[38px] bg-[#5BAA9C] text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaUsers />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-[#3F3F3F] dark:text-white">
              SAE 1.06 – Environnement économique et écologique
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Étude d’entreprise (Avenir Data) et analyse économique et écologique du secteur numérique.
              Compréhension du rôle des données et des enjeux environnementaux.
            </p>
            <a
              href="/pdf/CompteRenduEconomiqueEcologique.pdf"
              download
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#5BAA9C] to-[#4a998d] text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#5AE4AA] hover:shadow-2xl"
            >
              Télécharger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
