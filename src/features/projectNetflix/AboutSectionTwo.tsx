import BackgroundDecorator from "../../components/background/BackgroundDecor";

const AboutSectionTwo = () => {
  return (
    <section
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#0f0f0f] dark:to-[#0f0f0f]"
    >
      {/* Décor sous le fond */}
      <div className="absolute inset-0 z-0">
        <BackgroundDecorator variant="bubblesGradient" />
      </div>

      <div className="relative container z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image à gauche */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <img
                src="/images/Project_site_web_netflix.png"
                alt="aperçu de l'application"
                className="drop-shadow-xl rounded-lg dark:hidden"
              />
              <img
                src="/images/Project_site_web_netflix.png"
                alt="aperçu de l'application dark"
                className="drop-shadow-xl rounded-lg hidden dark:block"
              />
            </div>
          </div>

          {/* Texte à droite */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Authentification et gestion des utilisateurs
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  L’application utilise NextAuth pour l’inscription et la connexion via Google ou GitHub.
                  Chaque utilisateur possède un profil, un historique et des favoris persistants en base de données.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Ajout et lecture de films
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Un panneau d’administration permet d’ajouter des films (titre, description, durée, genre, image, vidéo).
                  Les utilisateurs peuvent ensuite parcourir, lancer la lecture et interagir avec le contenu.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Stack technique moderne
                </h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Le projet s’appuie sur Next.js pour le rendu SSR, TailwindCSS pour le design réactif,
                  Prisma pour la gestion des données et MongoDB pour le stockage des utilisateurs et vidéos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
