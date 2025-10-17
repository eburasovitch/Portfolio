import { FaServer, FaNetworkWired } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";
import { useEffect, useState } from "react";
const AboutSectionTwo = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const darkModeActive = document.documentElement.classList.contains("dark");
        setIsDark(darkModeActive);
    }, []);
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      {isDark && <BackgroundDecorator variant="bubblesGradient" />}
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Texte */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <SectionTitle
              title="Systèmes et Réseaux"
              paragraph="Ces rapports explorent les aspects fondamentaux des systèmes d’exploitation, de la virtualisation et de la mise en place d’infrastructures réseau complètes."
              mb="32px"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              J’y ai appris à installer, configurer et analyser des environnements techniques à travers des outils
              comme VirtualBox, DHCP, FTP et Wireshark.
            </p>
          </div>

          {/* Cartes */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#FFFBF4] dark:bg-[#414141] rounded-2xl shadow-md">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-[#3F3F3F] dark:text-white">
                <FaServer /> Virtualization Survey
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Étude complète des technologies de virtualisation depuis les années 1960 jusqu’à aujourd’hui.
              </p>
              <a href="/Rapport_OS.pdf" download className="text-[#5BAA9C] font-semibold hover:underline">
                Télécharger le rapport
              </a>
            </div>

            <div className="p-6 bg-[#FFFBF4] dark:bg-[#414141] rounded-2xl shadow-md">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-2 text-[#3F3F3F] dark:text-white">
                <FaNetworkWired /> Services Réseau
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Mise en place d’un réseau complet : routage, DHCP, FTP et capture d’analyse via Wireshark.
              </p>
              <a href="/Rapport_Reseau.pdf" download className="text-[#5BAA9C] font-semibold hover:underline">
                Télécharger le rapport
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
