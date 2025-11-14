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
		title: "RolodexImporter",
		description:
			"Rolodex Importer es una aplicación Java de línea de comandos diseñada para facilitar la digitalización de contactos físicos.",
		tech: ["Java"],
		link: "https://github.com/pepvillalonga/RolodexImporter",
	},

	{
		title: "Proyecto Portafolio",
		description:
			"Aqui esta el repositorio alberga el código de mi portafolio personal, una aplicación web construida con React para mostrar mis habilidades, experiencia y los proyectos.",
		tech: ["React", "HTML5", "CSS3", "TypeScript", "Tailwind CSS"],
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{projects.map((project) => (
						<Card key={project.title} className="flex flex-col">
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
