import { FaGithub, FaGlobe } from "react-icons/fa";

const AboutSectionFour = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F3EFE8] dark:bg-[#1c1c1c]">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-[#5BAA9C]">Liens et ressources</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          Le code source du projet ainsi qu’une version hébergée de la base sont disponibles ci-dessous.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://github.com/eburasovitch/projet_web_S1_uqac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5BAA9C] text-white font-semibold rounded-2xl shadow-md hover:bg-[#4a9489] transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            Voir le code
          </a>

          <a
            href="https://projet-web-s1-uqac.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-2xl shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            <FaGlobe className="text-xl" />
            Voir le site
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
