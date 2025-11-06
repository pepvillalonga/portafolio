import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
	return (
		<section id="contact" className="py-20 px-6">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-bold mb-12 text-center text-foreground">Contacto</h2>
				<Card>
					<CardHeader className="text-center">
						<CardTitle>¿Trabajamos juntos?</CardTitle>
						<CardDescription>
							Estoy siempre abierto a nuevas oportunidades y colaboraciones
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<Button variant="default" size="lg" className="w-full" asChild>
							<a href="mailto:info@pepvillalonga.es">
								<Mail className="mr-2 h-5 w-5" />
								info@pepvillalonga.es
							</a>
						</Button>
						<div className="grid grid-cols-2 gap-4">
							<Button variant="outline" size="lg" asChild>
								<a
									href="https://github.com/pepvillalonga"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-5 w-5" />
									GitHub
								</a>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<a
									href="https://www.linkedin.com/in/pepvillalonga/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="mr-2 h-5 w-5" />
									LinkedIn
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default Contact;
