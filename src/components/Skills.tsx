import { Card } from "@/components/ui/card";

const skills = [
	{ category: "Frontend", items: ["JavaScript", "HTML5", "CSS3"] },
	{ category: "Backend", items: ["PHP", "Java"] },
	{ category: "Databases", items: ["MongoDB", "MariaDB", "JSON"] },
	{ category: "Tools", items: ["Git", "GitHub", "Synology NAS"] },
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-12 text-center text-foreground">
					Habilidades
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skillGroup) => (
						<Card key={skillGroup.category} className="p-6">
							<h3 className="text-xl font-semibold mb-4 text-foreground">
								{skillGroup.category}
							</h3>
							<ul className="space-y-2">
								{skillGroup.items.map((skill) => (
									<li key={skill} className="text-muted-foreground">
										{skill}
									</li>
								))}
							</ul>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
