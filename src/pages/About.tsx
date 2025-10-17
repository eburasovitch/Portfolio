import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 py-16 pt-16 md:pt-20 lg:pt-70
            bg-gradient-to-b from-[#EDE9E3] to-[#EDE9E3]
            dark:from-[#e4e4e4] dark:to-gray-100">
      {/* Section principale */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Texte */}
        <motion.div
          className="-mt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold mb-6 text-[#3F3F3F] dark:text-[#1DCF8E]">
            À propos de moi
          </h1>
          <p className="text-lg text-gray-600 dark:text-[#ADADAD] leading-relaxed">
            Je suis passionné par le développement web et la création
            d’expériences utilisateurs modernes. Ici, tu peux ajouter une
            présentation de ton parcours, tes compétences principales, ou même
            ton objectif professionnel.
          </p>
        </motion.div>
      </div>

      {/* Image Kilroy en absolute */}
      <div className="relative w-full flex justify-center">
        <img
          src="/images/kilroy.png"
          alt="Kilroy"
          className="absolute top-[-90px] left-[1000px] z-20 h-[160px]" 
          // ↑ ajuste -top et h-[xxx] pour aligner la ligne du dessin avec tes cases
        />
      </div>

      {/* Bloc complet avec ombre */}
      <div className="max-w-6xl w-full shadow-lg rounded-lg overflow-hidden relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {aboutData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`p-6 flex flex-col items-center text-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              {item.icon && (
                <item.icon className="w-10 h-10 text-[#5BAA9C] dark:text-green-500 mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
