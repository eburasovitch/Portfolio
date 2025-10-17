import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-8 py-16 pt-16 md:pt-20 lg:pt-28 
      bg-gradient-to-b from-[#FAF9F6] to-[#FFFBEB]
      dark:from-[#181818] dark:to-[#292929]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <header className="w-full max-w-5xl text-left mb-12">
          <div className="h-2 w-32 bg-[#5BAA9C] dark:bg-[#1DCF8E] my-6 rounded"></div>
          <h1 className="text-5xl font-extrabold text-[#3F3F3F] dark:text-gray-50 mb-4">
            Réalisations
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Projets universitaires – Stage international
          </p>
        </header>

        {/* ✅ Grille flexible */}
        <div className="columns-1 md:columns-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                height: project.rowHeight || "300px",
              }}
            >
              <Link to={project.link || "/"}>

                {/* 🟤 Overlay derrière */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-[#eee3d4] via-[#eee3cd] to-transparent
                  dark:from-[#1E1E1E] dark:via-[#252525] dark:to-transparent
                  group-hover:from-[#E6DCC8] group-hover:via-[#F2E9DC] group-hover:to-transparent
                  dark:group-hover:from-[#333333] dark:group-hover:via-[#2A2A2A] dark:group-hover:to-transparent
                  transition-all duration-500 z-0"
                ></div>

                {/* 🖼️ Image CLAIRE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 dark:hidden"
                  style={{
                    transform: `scale(${project.imageScale || 1})`,
                    objectPosition: project.imagePosition || "center",
                  }}
                />

                {/* 🌑 Image SOMBRE (si définie) */}
                {project.imageDark && (
                  <img
                    src={project.imageDark}
                    alt={project.title}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 hidden dark:block"
                    style={{
                      transform: `scale(${project.imageScale || 1})`,
                      objectPosition: project.imagePosition || "center",
                    }}
                  />
                )}

                {/* 📝 Texte DEVANT */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h2 className="text-xl font-bold text-[#3F3F3F] dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
