import { AboutSectionOne, AboutSectionTwo, AboutSectionThree, AboutSectionFour } from "../features/projectUqac";

export default function ProjectUqac() {
  return (
    <main className="min-h-screen bg-gradient-to-br 
                 from-[#F3EFE8] to-[#F3EFE8] 
                 dark:from-[#1a1a1a] dark:to-[#1a1a1a] px-4">
      <div className="max-w-6xl mx-auto py-16">

        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutSectionFour />
      </div>
    </main>
  );
}
