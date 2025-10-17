import SectionTitle from "../../components/common/SectionTitle";
import BackgroundDecorator from "../../components/background/BackgroundDecor";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-black dark:text-gray-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary/10 text-primary dark:bg-primary dark:bg-opacity-10">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 lg:py-28 
      bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] 
      dark:from-[#1a1a1a] dark:to-[#1a1a1a] mt-27"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundDecorator variant="bubblesMinimal" />
      </div>
      <div className="container">
        <div className="border-b border-gray-300/[.25] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* TEXTE */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Stage de recherche – Université du Québec à Chicoutimi (UQAC)"
                paragraph="Stage de recherche réalisé à l’UQAC en collaboration avec le laboratoire LERIA, portant sur la conception d’une librairie Python dédiée aux algorithmes d’exploration adverse. Ce projet s’inscrit dans une démarche scientifique visant à rendre accessibles les outils d’intelligence artificielle pour l’enseignement et la recherche."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Durée : 10 semaines (mai – juillet 2024)" />
                    <List text="Encadrant : Prof. Kevin Bouchard" />
                    <List text="Lieu : Département d’informatique et de mathématiques, UQAC" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Projet : PyAdverseSearch" />
                    <List text="Langage : Python (3.11)" />
                    <List text="Thématique : Intelligence artificielle & jeux adverses" />
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <img
                  src="/images/uqacCampus.jpg"
                  alt="Campus UQAC"
                  className="w-400 h-auto rounded-xl drop-shadow-three dark:drop-shadow-lg"
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
