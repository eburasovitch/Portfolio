import SectionTitle from "../../components/common/SectionTitle";
import BackgroundDecorator from "../../components/background/BackgroundDecor";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-gray-700 dark:text-gray-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[#c2410c]/10 text-[#c2410c] dark:bg-primary/10 dark:text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#0f0f0f] dark:to-[#0f0f0f]"
    >
      {/* Décor en fond, sous les éléments */}
      <div className="absolute inset-0 z-0">
        <BackgroundDecorator variant="bubblesMinimal" />
      </div>

      <div className="relative container z-10">
        <div className="border-b border-gray-300/40 dark:border-white/20 pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Texte */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Projet Web – Clone Netflix"
                paragraph="Développement d’une application web inspirée de Netflix, permettant de gérer un catalogue de films, d’ajouter du contenu et d’offrir une expérience utilisateur complète : authentification, streaming, recherche et favoris."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Projet personnel complet" />
                    <List text="Développé en Next.js & TypeScript" />
                    <List text="Base de données MongoDB via Prisma" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Authentification via NextAuth (Google & GitHub)" />
                    <List text="Ajout et gestion de films" />
                    <List text="Interface inspirée de Netflix" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px]">
                <img
                  src="/images/Project_site_web_netflix.png"
                  alt="Capture du projet Netflix Clone"
                  className="mx-auto max-w-full drop-shadow-xl rounded-lg dark:hidden"
                />
                <img
                  src="/images/Project_site_web_netflix.png"
                  alt="Capture du projet Netflix Clone (dark)"
                  className="mx-auto hidden max-w-full drop-shadow-xl rounded-lg dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
