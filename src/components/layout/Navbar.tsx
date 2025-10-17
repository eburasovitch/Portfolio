import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Auto-scroll vers la section après chargement de la page
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        // Délai pour s'assurer que le DOM est prêt
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-end h-17 p-4 bg-white/50 backdrop-blur-md shadow z-50 dark:bg-[#3B3B3B]/0">
      {/* Logo complètement à gauche */}
      <div className="flex-shrink-0 ml-55">
        <a href="/#home" className="font-bold text-xl text-[#5BAA9C] dark:text-[#5AE4AA]">MonLogo</a>
      </div>
      
      {/* Liens de navigation, légèrement à gauche du centre */}
      <div className="flex gap-15 ml-50">
        <a href="/#home" className="text-[#374151] hover:text-[#2F6B5F] transition dark:text-[#C7C7C7] dark:hover:text-[#5AE4AA]">
          Accueil
        </a>
        <a href="/#about" className="text-[#374151] hover:text-[#2F6B5F] transition dark:text-[#C7C7C7] dark:hover:text-[#5AE4AA]">
          À propos
        </a>
        <a href="/#contact" className="text-[#374151] hover:text-[#2F6B5F] transition dark:text-[#C7C7C7] dark:hover:text-[#5AE4AA]">
          Contact
        </a>
      </div>
    </nav>
  );
}