import SectionTitle from "../../components/common/SectionTitle";
import BackgroundDecorator from "../../components/background/BackgroundDecor";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color dark:text-gray-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="relative pt-16 md:pt-20 lg:pt-28 mt-27">
      <BackgroundDecorator variant="bubblesMinimal" />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Texte */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Projet de Stage - Connect UNITA"
                paragraph="Stage réalisé à l’Université de Pau et des Pays de l’Adour (UPPA) au sein de l’alliance européenne UNITA. Mon travail s’inscrit dans le projet Connect-UNITA, visant à développer des outils pédagogiques interactifs et multilingues pour favoriser l’hybridation des enseignements et l’analyse des apprentissages (Learning Analytics)."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Projet européen Connect-UNITA" />
                    <List text="Stage de 10 semaines (mai à juillet 2024)" />
                    <List text="Encadrants : Ernesto Exposito & Mamadou Lamine Gueye" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Objectif : automatiser la création de contenus H5P" />
                    <List text="Intégration dans Moodle via API Python" />
                    <List text="Collaboration avec le projet Irekia" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <img
                  src="/images/logo_unita.jpg"
                  alt="Logo Connect UNITA"
                  className="w-100 h-auto drop-shadow-three"
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
