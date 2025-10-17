import { motion } from "framer-motion";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
const AboutSectionThree = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      <BackgroundDecorator variant="bubblesMinimal" />
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-[#232526] rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-[#5BAA9C] mb-4">
                Stack technique
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Langage : <strong>JS</strong></li>
                <li>Framework web : <strong>React</strong></li>
                <li>Gestion des versions : <strong>Git / GitHub</strong></li>
                <li>Déploiement : <strong>Vercel</strong></li>
              </ul>
              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                Une attention particulière a été portée à l’optimisation des requêtes SQL 
                et à la gestion des transactions pour garantir la cohérence et la rapidité 
                du système.
              </p>
            </div>
          </motion.div>

          {/* Image technique */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/projects/SBDAccueil.png"
              alt="Schéma technique du projet SBD"
              className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
