import { RevealOnScroll } from "../RevealOnScroll";
import TuDublinLogo from "../../assets/Transformer.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition-all"
            >
              {/* Add the TuDublin logo with improved styling */}
              <img
                src={TuDublinLogo}
                alt="TuDublin Logo"
                className="w-32 h-32 mb-6 mx-auto rounded-full shadow-lg border border-blue-500/20"
              />
              <h3 className="text-xl font-bold mb-2">LLM From Scratch</h3>
              <p className="text-gray-400 mb-4">
                A 16M parameter GPT-2 inspired <br></br>
                llm from scratch
              </p>
              <div>
                {["Python", "Transformer architecture", "PyTorch"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                               hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/AaronConnolly/LLM_From_Scratch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2"> Music Visual Project</h3>
              <p className="text-gray-400 mb-4">
                Visualisaton of Bohemian Rhapsody <br></br>
                using frequency and amplitude{" "}
              </p>
              <div>
                {["Java", "Group Project"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                               hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/AaronConnolly/MusicVisuals"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2"> Fitness Tracker App</h3>
              <p className="text-gray-400 mb-4">
                Mobile app that includes a step tracker and workout mode which
                calculates distance, time and calories burnt during workout
              </p>
              <div className="flex flex-wrap gap-2mb-4">
                {["Kotlin", "GPS", "Spedometer"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                               hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
