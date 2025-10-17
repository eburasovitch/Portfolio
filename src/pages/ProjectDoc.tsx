// src/pages/ProjectDoc.tsx
import {
  AboutSectionOne,
  AboutSectionTwo,
  AboutSectionThree,
  AboutSectionFour,
} from "../features/projectDoc";

export default function ProjectDoc() {
  return (
    <main className="min-h-screen px-4
                 bg-gradient-to-br 
                 from-[#F3EFE8] to-[#F3EFE8] 
                 dark:from-[#1c1c1c] dark:to-[#1c1c1c]">
      <div className="max-w-6xl mx-auto py-16">

        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutSectionFour />
      </div>
    </main>
  );
}
