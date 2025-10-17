import SectionTitle from "../../components/common/SectionTitle";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import { motion } from "framer-motion";

const AboutSectionOne = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      <BackgroundDecorator variant="bubblesMinimal" />

      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle
          title="Projet SBD – Système de Base de Données"
          paragraph="Conception et développement d’une base de données complète, du modèle conceptuel à la mise en œuvre applicative, dans le cadre d’un projet universitaire centré sur la manipulation et la visualisation des données."
          mb="64px"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ">
          {/* Image animée */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/SbdPage.png"
              alt="Aperçu du projet SBD"
              className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </motion.div>

          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-[#232526] rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-[#5BAA9C] mb-4">
                Présentation du projet
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Le projet visait à concevoir un système complet de gestion de données 
                à partir d’un besoin réel. Après la phase de modélisation (MCD / MLD), 
                la base a été implémentée en <strong>PostgreSQL</strong>, puis reliée à 
                une interface web permettant la consultation, l’ajout et la mise à jour 
                des enregistrements.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ce projet a permis de combiner <strong>analyse conceptuelle</strong>, 
                <strong>optimisation SQL</strong> et <strong>développement applicatif</strong>, 
                dans une approche proche de la réalité professionnelle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
