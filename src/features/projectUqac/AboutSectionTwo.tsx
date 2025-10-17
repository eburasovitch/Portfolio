import { FaPython } from "react-icons/fa";
import BackgroundDecorator from "../../components/background/BackgroundDecor";
import { FaFileDownload } from "react-icons/fa";
const AboutSectionTwo = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-28">
            <div className="absolute inset-0 z-0">
                <BackgroundDecorator variant="bubblesMinimal" />
            </div>
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    {/* IMAGE */}
                    <div className="w-full px-0 lg:w-3/5">
                        <div className="relative mx-auto mb-5 aspect-[25/24] max-w-[600px] text-center lg:m-0">
                            <img
                                src="/images/DiagrammeUqac.png"
                                alt="Architecture PyAdverseSearch"
                                className="w-500 h-auto drop-shadow-three rounded-xl"
                            />
                        </div>
                    </div>

                    {/* TEXTE */}
                    <div className="w-full px-0 lg:w-2/5">
                        <div className="max-w-[600px]">
                            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                                Librairie PyAdverseSearch
                            </h3>
                            <p className="text-base font-medium leading-relaxed text-black dark:text-gray-300 sm:text-lg mb-6">
                                Le projet <strong>PyAdverseSearch</strong> vise à créer une librairie Python modulaire permettant d’expérimenter avec les algorithmes de jeux adverses.
                                Son architecture repose sur cinq classes principales : <em>Game</em>, <em>State</em>, <em>Node</em>, <em>Tree</em> et <em>Algorithm</em>.
                            </p>

                            <ul className="list-disc pl-6 text-base font-medium leading-relaxed text-black dark:text-gray-300 sm:text-lg mb-8">
                                <li>Structure orientée objet claire et évolutive</li>
                                <li>Prise en charge de différents environnements de jeu</li>
                                <li>Interface unifiée pour tester plusieurs algorithmes</li>
                                <li>Documentation intégrée et typage strict</li>
                            </ul>
                            <div className="flex flex-col justify-center gap-10 mt-12">
                                <a
                                    href="https://github.com/ewanburasovitch/PyAdverseSearch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-lg font-semibold text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                                >
                                    <FaPython size={26} />
                                    Voir le code sur GitHub
                                </a>
                                <a
                                    href="/BURASOVITCH_EWAN_RAPPORT_DE_STAGE.pdf"
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
