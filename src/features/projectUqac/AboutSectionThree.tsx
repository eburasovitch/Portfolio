import BackgroundDecorator from "../../components/background/BackgroundDecor";
import SectionTitle from "../../components/common/SectionTitle";

const AboutSectionThree = () => {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-28 
      bg-gradient-to-b from-[#F3EFE8] to-[#F3EFE8] 
      dark:from-[#1a1a1a] dark:to-[#0f0f0f]"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundDecorator variant="bubblesMinimal" />
      </div>
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Algorithmes implémentés"
            paragraph="Deux algorithmes d’intelligence artificielle ont été développés au sein du projet : le Minimax et le Monte Carlo Tree Search (MCTS)."
            mb="64px"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">♟️ Minimax</h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              L’algorithme Minimax explore exhaustivement l’arbre des coups possibles afin d’évaluer la meilleure action à entreprendre en supposant un adversaire parfait.
            </p>
            <img
              src="/images/minimax.png"
              alt="Propagation Minimax"
              className="mt-4 h-70 rounded-lg shadow-md"
            />
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#414141]">
            <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">🎲 Monte Carlo Tree Search</h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              MCTS repose sur des simulations aléatoires répétées et combine quatre étapes :
              <strong> Sélection</strong>, <strong>Expansion</strong>,
              <strong> Simulation</strong> et <strong>Backpropagation</strong>.
            </p>
            <img
              src="/images/MCTS.png"
              alt="Étapes MCTS"
              className="mt-10 h-70 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
