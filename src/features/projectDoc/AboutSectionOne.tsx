import { FaUniversity, FaBookOpen, FaLightbulb } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";

const aboutCards = [
  {
    icon: <FaUniversity />,
    title: "Formation & Objectifs",
    desc: "Ces projets ont été menés dans le cadre du BUT Informatique, avec pour objectif de montrer mes comptences sur la documentation techniques. Certain sont ici pour les conserver, malgres leurs faibles valeurs.",
    gradient: "from-[#CFEAE4]/40 to-transparent",
  },
  {
    icon: <FaBookOpen />,
    title: "Approche pédagogique",
    desc: "Les SAE ont favorisé une approche par projet, en liant théorie et pratique, à travers des rendus documentés et évalués en groupe.",
    gradient: "from-[#F5EBDC]/50 to-transparent",
  },
  {
    icon: <FaLightbulb />,
    title: "Compétences développées",
    desc: "Ces rapports couvrent un large éventail de compétences : algorithmique, réseau, programmation, conception logicielle et communication technique.",
    gradient: "from-[#FFD9C4]/50 to-transparent",
  },
];

const AboutSectionOne = () => {
  return (
    <section id="about" className="relative pt-16 md:pt-20 lg:pt-28 mt-27 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      <BackgroundDecorator variant="bubblesMinimal" />
      <div className="container text-left">
        <SectionTitle
          title="Rapports Techniques – Parcours BUT Informatique"
          paragraph="Durant mes années à l’IUT de Bayonne, ainsi que mes années a l'international, j’ai réalisé plusieurs rapports techniques explorant les différents domaines de l’informatique : du système à la gestion de projet. Chaque document représente une étape de ma progression."
          mb="64px"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-8 rounded-2xl shadow-lg bg-[#FFFBF4] dark:bg-[#2b2b2b] transition-transform duration-300 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-70 rounded-2xl pointer-events-none`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl text-[#5BAA9C] mb-4 bg-white dark:bg-[#3b3b3b] rounded-full p-4 shadow-md">
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#3F3F3F] dark:text-white">
                  {card.title}
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
