// src/pages/ProjectNetflix.tsx
import { AboutSectionOne, AboutSectionTwo } from "../features/projectNetflix";
export default function ProjectNetflix() {
  return (
    <main className="min-h-screen bg-gradient-to-br 
                 from-[#F3EFE8] to-[#F3EFE8] 
                 dark:from-[#0f0f0f] dark:to-[#0f0f0f] px-4">
      <div className="max-w-6xl mx-auto py-16">
        <h1 className="mt-16 text-4xl md:text-5xl font-bold text-[#E50914] mb-0">
          Netflix Clone
        </h1>

        <AboutSectionOne />
        <AboutSectionTwo />
      </div>
    </main>
  );
}