import { RevealOnScroll } from "../RevealOnScroll";
import TransformerLogo from "../../assets/projects/transformer2.jpeg";
import FitnessTrackerLogo from "../../assets/projects/Fitness_Tracker2.png";
import MusicVisualLogo from "../../assets/projects/Music_Visual.png";

const projects = [
	{
		id: 1,
		title: "LLM From Scratch",
		description:
			"A 16M parameter LLM trained on 400M tokens, insipired by GPT-2 124M model code",
		image: TransformerLogo,
		tags: ["Python", "Transformer Architecture", "PyTorch"],
		GitHubUrl: "https://github.com/AaronConnolly/LLM_From_Scratch",
	},
	{
		id: 2,
		title: "Music Visual Project",
		description:
			"Visualisaton of Bohemian Rhapsody using frequency and amplitude",
		image: MusicVisualLogo,
		tags: ["Java", "Group Project"],
		GitHubUrl: "https://github.com/AaronConnolly/MusicVisuals",
	},
	{
		id: 3,
		title: "Fitness Tracker App",
		description:
			"Mobile app that includes a step tracker and workout mode which calculates distance, time and calories burnt during workout",
		image: FitnessTrackerLogo,
		tags: ["Kotlin", "GPS", "Spedometer"],
		GitHubUrl: "https://github.com/AaronConnolly/Fitness_Tracker_App",
	},
];

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

					<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
						Here are some of my recent projects. Each project was carefully
						crafted with attention to detail, performance, and user experience.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, key) => (
							<div
								key={key}
								className="group bg-card rounded-lg overflow-hidden shadow-lg border border-gray-700"
							>
								{/* Image Section */}
								<div className="h-48 overflow-hidden border-b border-gray-700">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>

								{/* Tags Section */}
								<div className="flex flex-wrap gap-2 p-4 border-b border-gray-700">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs font-medium rounded-full text-white border border-gray-700"
										>
											{tag}
										</span>
									))}
								</div>

								{/* Description Section */}
								<div className="p-6">
									<h3 className="text-lg font-bold mb-2">
										{project.title}
									</h3>
									<p className="text-sm text-gray-400">
										{project.description}
									</p>
									<a
										href={project.GitHubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-300 transition-colors mt-4 block"
									>
										View Project →
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
