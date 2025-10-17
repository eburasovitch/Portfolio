import {
  AboutSectionOne,
  AboutSectionTwo,
  AboutSectionThree,
  AboutSectionFour,
} from "../features/projectSBD";

export default function ProjectSbd() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#232526] to-[#141414] px-4">
      <div className="max-w-6xl mx-auto">
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutSectionFour />
      </div>
    </main>
  );
}
