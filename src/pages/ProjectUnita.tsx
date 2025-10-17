// src/pages/ProjectKotlin.tsx
import { AboutSectionOne, AboutSectionTwo, AboutSectionThree } from "../features/projectUnita";

export default function ProjectUnita() {
  return (
    <main className="min-h-screen bg-gradient-to-br 
                 from-[#F3EFE8] to-[#F3EFE8] 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 px-4">
      <div className="max-w-6xl mx-auto py-16">
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
      </div>
    </main>
  );
}