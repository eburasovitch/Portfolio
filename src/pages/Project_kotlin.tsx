// src/pages/ProjectKotlin.tsx
import { AboutSectionOne, AboutSectionTwo } from "../features/projectMobileApp";

export default function ProjectKotlin() {
  return (
    <main className="min-h-screen bg-gradient-to-br 
                 from-[#F3EFE8] to-[#F3EFE8] 
                 dark:from-[#1c1c1c] dark:to-[#1c1c1c] px-4">
      <div className="max-w-6xl mx-auto py-16">
        <h1 className="mt-16 text-4xl md:text-5xl font-bold text-[#3DDC84] mb-0">
          Kotlin To-Do List App
        </h1>

        <AboutSectionOne />
        <AboutSectionTwo />
      </div>
    </main>
  );
}