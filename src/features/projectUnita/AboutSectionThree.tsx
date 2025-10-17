import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";

const AboutSectionThree = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <BackgroundDecorator variant="bubblesMinimal" />
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Architecture & Technologies du Projet"
            paragraph="Le projet Connect UNITA repose sur une architecture Dockerisée combinant un backend Python Flask, un frontend ReactJS et des modèles d’intelligence artificielle déployés localement. Cette approche garantit la souveraineté des données tout en permettant une automatisation avancée de la création de contenus pédagogiques."
            mb="64px"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left ">
          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3">🧠 Intelligence Artificielle</h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Déploiement local du modèle <strong>Llama3</strong> pour la génération de
              questions et réponses automatiques à partir de vidéos transcrites.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3">🐳 Docker & Infrastructure</h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Utilisation de <strong>Docker Compose</strong> pour orchestrer les services :
              API Python, serveur web Nginx, IA locale et front React. Déploiement sur
              serveurs Ubuntu connectés via SSH.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3">💻 Technologies utilisées</h4>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>ReactJS / TypeScript</li>
              <li>Python (Flask, Pandas, MoviePy)</li>
              <li>Whisper pour Speech-to-Text</li>
              <li>LibreTranslate pour la traduction</li>
              <li>Moodle & H5P</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
          Ce stage m’a permis de mettre en œuvre mes compétences en développement
          full-stack, gestion d’API, déploiement d’applications distribuées et
          d’expérimenter l’usage de l’intelligence artificielle dans un contexte éducatif
          concret. Il s’inscrit dans une démarche d’innovation pédagogique européenne.
        </p>
      </div>
    </section>
  );
};

export default AboutSectionThree;
