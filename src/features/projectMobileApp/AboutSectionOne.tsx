// src/features/projectKotlin/AboutSectionOne.tsx
import SectionTitle from "../../components/common/SectionTitle";
import BackgroundDecorator from "../../components/background/BackgroundDecor";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-gray-700 dark:text-gray-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[#5BAA9C]/10 text-[#5BAA9C]">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="relative pt-16 md:pt-20 lg:pt-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]"
    >
      <BackgroundDecorator variant="bubblesMinimal" />
      <div className="container">
        <div className="border-b border-gray-300/[.35] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Texte */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Application mobile Kotlin - To-Do List Contextuelle"
                paragraph="Projet académique réalisé en 3e année : une application mobile développée en Kotlin avec Jetpack Compose. Elle permet la gestion de tâches personnelles avec synchronisation Google Calendar, intégration de Google Maps et un système de succès pour gamifier l’expérience utilisateur."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  {/* Colonne 1 */}
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Kotlin & Jetpack Compose" />
                    <List text="Room (base de données locale)" />
                    <List text="Flow & StateFlow" />
                  </div>
                  {/* Colonne 2 */}
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Navigation Compose" />
                    <List text="Google Calendar API" />
                    <List text="Google Maps API" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <img
                  src="/images/KotlinScreen2.png"
                  alt="aperçu application Kotlin"
                  className="w-64 h-auto drop-shadow-three rounded-xl bg-[#FFFBF4] dark:bg-[#2b2b2b] p-4 shadow-lg"
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
