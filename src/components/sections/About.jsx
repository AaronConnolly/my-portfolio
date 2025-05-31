import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS"];
  const backendSkills = ["C", "Python", "Java"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with a strong problem solving ability and a
              drive to continue to learn and better myself
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                               hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                               hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Education</h3>
              <ul className="list-desc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Technological University of Dublin (TuDublin) </strong> -{" "}
                  Dublin, Ireland
                </li>
                <li>Bachelor of Computer Science - Expected May 2026</li>
                <li>
                  <strong>Relevant Coursework</strong> - Software Engineering,
                  Introduction to AI, Algorithms & Data Structures, Databases,
                  Programming/
                  OOP, Cloud Computing, Client Server Programming
                </li>
                <li>
                  Grade - First Class Honours (1:1), in year 3. (Equivalent 4.0
                  GPA)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <ul className="list-desc list-inside text-gray-300 space-y-4">
                  <li>
                    <strong>Workhuman</strong> - (#1 Employee Recognition Software)
                  </li>
                  <li>
                    <strong>Role:</strong> Software Engineer Intern (AI-Assistant
                    Team)
                  </li>
                  <li>
                    <strong>Key Contributions:</strong>
                    <ul className="list-disc list-inside pl-4 space-y-2">
                      <li>
                        Enhanced AI response accuracy and user experience by
                        modifying positional embeddings for semantic routing and
                        prompt engineering for LLM routing within an agentic AI
                        architecture.
                      </li>
                      <li>
                        Improved system reliability and stability by conducting root
                        cause analysis on RAG generative-AI components, creating
                        detailed technical stories, and implementing fixes to
                        resolve critical system failures.
                      </li>
                      <li>
                        Optimized AWS ECS cluster performance through JMeter load
                        testing and fine-tuning configurations based on performance
                        data analysis.
                      </li>
                      <li>
                        Boosted team collaboration and project velocity by actively
                        participating in daily scrum meetings, briefly acting as
                        Scrum Master, and contributing to agile development
                        processes during the critical pre-launch period.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
