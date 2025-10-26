// src/features/projectKotlin/AboutSectionTwo.tsx
import { FaGithub } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import { useEffect, useState } from "react";
const AboutSectionTwo = () => {
  const [isDark, setIsDark] = useState(false);
  
      useEffect(() => {
          const darkModeActive = document.documentElement.classList.contains("dark");
          setIsDark(darkModeActive);
      }, []);
  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      {isDark && <BackgroundDecorator variant="bubblesGradient" />}

      {/* Image décorative */}
      <img
        src="/images/github.png"
        alt="Décoration visuelle Kotlin"
        className="absolute top-100 bottom-4 left-210 w-100 h-max opacity-80 pointer-events-none select-none"
      />

      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* IMAGE */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <img
                src="/images/KotlinScreen.png"
                alt="Aperçu application Kotlin To-Do"
                className="w-64 h-auto drop-shadow-three rounded-xl bg-[#FFFBF4] dark:bg-[#2b2b2b] p-4 shadow-lg"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="max-w-[470px]">
              {/* Présentation */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-[#3F3F3F] dark:text-white sm:text-2xl">
                  Application mobile Kotlin
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
                  Réalisée en 3e année lors de travaux pratiques, cette
                  application mobile est une{" "}
                  <strong>to-do list avancée</strong> développée en Kotlin. Elle
                  combine une gestion locale des données avec{" "}
                  <strong>Room</strong> et des fonctionnalités connectées via
                  l’API Google.
                </p>
              </div>

              {/* Fonctionnalités */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-[#3F3F3F] dark:text-white sm:text-2xl">
                  Fonctionnalités clés
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
                  - Synchronisation avec <strong>Google Calendar</strong> <br />
                  - Intégration de <strong>Google Maps</strong> dans
                  l’application <br />
                  - Système de <strong>succès (achievements)</strong> pour
                  motiver l’utilisateur
                </p>
              </div>

              {/* Technique */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-[#3F3F3F] dark:text-white sm:text-2xl">
                  Architecture & Techniques
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
                  Utilisation de <strong>Room</strong> pour la persistance des
                  données, <strong>Flow</strong> pour la réactivité, et{" "}
                  <strong>Navigation Compose</strong> pour une expérience fluide
                  entre les écrans (création, édition, consultation des tâches).
                </p>
              </div>

              {/* 🔗 Lien GitHub */}
              <div className="mt-8">
                <a
                  href="https://github.com/eburasovitch/Project-Kotlin-UQAC/tree/tp3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg font-semibold text-[#5BAA9C] hover:text-[#4a998d] dark:text-gray-300 dark:hover:text-white transition"
                >
                  <FaGithub size={28} />
                  Voir le projet sur GitHub
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
