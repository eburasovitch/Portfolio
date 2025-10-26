import { FaFileDownload } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";

const AboutSectionTwo = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <BackgroundDecorator variant="bubblesGradient" />
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* IMAGE */}
          <div className="w-full px-0 lg:w-3/5">
            <div className="relative mx-auto mb-5 aspect-[25/24] max-w-[600px] text-center lg:m-0">
              <img
                src="/images/simpleChoice.png"
                alt="Aperçu du projet Connect UNITA"
                className="w-500 h-auto drop-shadow-three rounded-xl"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="w-full px-0 lg:w-2/5">
            <div className="max-w-[600px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Application Web Connect UNITA
                </h3>
                <p className="text-base font-medium leading-relaxed text-black dark:text-gray-300 sm:text-lg">
                  Développée pour faciliter l’hybridation des cours universitaires,
                  l’application <strong>Connect UNITA</strong> automatise la création de
                  vidéos pédagogiques interactives. Elle permet de générer des
                  fichiers <strong>H5P</strong> intégrables dans Moodle, avec des questions
                  interactives et sous-titres multilingues.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Fonctionnalités principales
                </h3>
                <ul className="list-disc pl-6 text-base font-medium leading-relaxed text-black dark:text-gray-300 sm:text-lg">
                  <li>Création automatique de questions à choix simple et multiple</li>
                  <li>Génération de quiz par IA (modèle Llama3 local)</li>
                  <li>Traduction automatique via LibreTranslate</li>
                  <li>Gestion des sous-titres multilingues</li>
                  <li>Intégration directe dans Moodle via API Flask</li>
                </ul>
              </div>

              <div className="flex gap-6 mt-8">
                <a
                  href="/pdf/BURASOVITCH_EWAN_RAPPORT_DE_STAGE.pdf"
                  download
                  className="inline-flex items-center gap-3 text-lg font-semibold text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <FaFileDownload size={26} />
                  Télécharger le rapport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
