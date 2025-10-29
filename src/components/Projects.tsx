import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
	{
		title: "Katas - CodeWars",
		description:
			"Repositorio con ejercicios de programación de la plataforma CodeWars resueltos en Java. Una colección de soluciones a diversos desafíos algorítmicos.",
		tech: ["Java", "Algoritmos"],
		link: "https://github.com/pepvillalonga/Katas",
	},

	{
		title: "Proyecto Portafolio",
		description:
			"Aqui esta el repositorio alberga el código de mi portafolio personal, una aplicación web construida con React para mostrar mis habilidades, experiencia y los proyectos más destacados en los que he trabajado.",
		tech: ["React", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "Vite", "ESLint"],
		link: "https://github.com/pepvillalonga/portafolio",
	},

	{
		title: "Visit Binissalem",
		description:
			"Sitio web oficial para el Ayuntamiento de Binissalem. Portal turístico desarrollado con WordPress y PHP para promover el municipio.",
		tech: ["WordPress", "PHP", "CSS", "JavaScript"],
		link: "https://visitbinissalem.com/es/",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-20 px-6 bg-muted/30">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-12 text-center text-foreground">Proyectos</h2>
				<div className="flex flex-col md:flex-row md:justify-center gap-6">
					{projects.map((project) => (
						<Card key={project.title} className="flex flex-col md:w-[320px]">
							<CardHeader>
								<CardTitle className="text-foreground">{project.title}</CardTitle>
								<CardDescription>{project.description}</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow flex flex-col justify-between">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
								{project.link && (
									<Button variant="outline" className="w-full" asChild>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
										</a>
									</Button>
								)}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
