const CvPage = () => (
  <div className="relative flex flex-col items-center justify-start min-h-screen 
                  bg-gradient-to-b from-[#FFFBEB] to-[#FAF9F6] 
                  dark:from-[#292929] dark:to-[#181818] p-8">
    
    {/* Header */}
    
    <header className="w-full text-left max-w-6xl mb-12">
        <div className="h-2 w-32 bg-[#5BAA9C] dark:bg-[#1DCF8E] my-6 rounded"></div>
      <h1 className="text-5xl font-extrabold text-[#3F3F3F] dark:text-gray-50 mb-4">
        Ewan Burasovitch
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        Développeur Full Stack Junior - Portfolio & CV
      </p>
    </header>

    {/* Section résumé / introduction */}
    <section className="w-full max-w-4xl mb-12 text-left">
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Passionné par le développement web et les technologies modernes, je me spécialise en
        développement full stack et je cherche à continuer à apprendre aux côtés de développeurs expérimentés.
      </p>
    </section>

    {/* Section CV */}
    <section className="relative w-full flex justify-center mb-12">
      <div className="relative w-[50vw] h-[120vh] rounded-xl overflow-hidden shadow-2xl z-10">
        <img
          src="/images/CV_Ewan_BURASOVITCH_fr.png"
          alt="CV Ewan Burasovitch"
          className="object-contain w-full h-full"
        />
      </div>
    </section>

    {/* Bouton de téléchargement */}
    <section className="mb-16">
      <a
        href="/images/CV_Ewan_BURASOVITCH_fr.png"
        download
        className="px-6 py-3 rounded-lg bg-[#5BAA9C] dark:bg-[#1DCF8E] text-white font-semibold hover:bg-[#065F46] transition-colors"
      >
        Télécharger le CV
      </a>
    </section>
  </div>
);

export default CvPage;
