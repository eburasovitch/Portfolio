import { FaCode, FaMobileAlt, FaCogs } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";

const devProjects = [
  {
    icon: <FaCode />,
    title: "SAE 2.01 – Lecteur de diaporamas",
    desc: "Application en C++/Qt gérant l'affichage et la navigation d’un diaporama, intégrant la gestion d’états, les signaux/slots et une interface graphique.",
    link: "/Rapport_S201.pdf",
    gradient: "from-[#CFEAE4]/50 to-transparent",
  },
  {
    icon: <FaMobileAlt />,
    title: "Capteurs Android",
    desc: "Application mobile expérimentale développée sous Android Studio. Mesure et affichage de données issues de capteurs physiques tels que la pression atmosphérique et le compteur de pas.",
    link: "/Rapport_Capteurs.pdf",
    gradient: "from-[#E2EBF9]/50 to-transparent",
  },
  {
    icon: <FaCogs />,
    title: "Développement Web – R1.02",
    desc: "Création d’un site web complet : zoning, wireframes, charte graphique et prototype. Application des bonnes pratiques de conception front-end et accessibilité.",
    link: "/pdf/Rapport_Web_Wankel.pdf",
    gradient: "from-[#FCEED2]/50 to-transparent",
  },
  {
    icon: <FaCogs />,
    title: "SAE 2.05 – Gestion de projet",
    desc: "Rapport complet sur la conduite du projet Euskal Laguna : étude de l’existant, cahier des charges fonctionnel, planification, et analyse budgétaire.",
    link: "/RapportFinalProjet11.pdf",
    gradient: "from-[#DCE9F5]/50 to-transparent",
  },

];

const AboutSectionThree = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      <BackgroundDecorator variant="bubblesGradient" />
      <div className="container">
        <SectionTitle
          title="Développement et Logiciel"
          paragraph="Des projets concrets alliant créativité et rigueur technique. Ces réalisations m’ont permis d’approfondir la programmation orientée objet, le développement mobile et la conception d’interfaces web modernes."
          mb="56px"
        />

        <div className="flex flex-col gap-8">
          {devProjects.map((proj, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row items-center md:items-start p-6 rounded-2xl shadow-lg bg-[#FFFBF4] dark:bg-[#2b2b2b] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône */}
              <div className="relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-30 rounded-full pointer-events-none`}
                ></div>
                <div className="relative text-4xl text-[#5BAA9C] bg-white dark:bg-[#3b3b3b] rounded-full p-4 shadow-md">
                  {proj.icon}
                </div>
              </div>

              {/* Texte */}
              <div className="flex-1 text-left">
                <h4 className="text-xl font-semibold mb-2 text-[#3F3F3F] dark:text-white">
                  {proj.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {proj.desc}
                </p>
                <a
                  href={proj.link}
                  download
                  className="px-4 py-2 rounded-md bg-[#5BAA9C] text-white font-medium shadow hover:opacity-90 hover:bg-[#4a998d] transition"
                >
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
