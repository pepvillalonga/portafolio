import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Pep Villalonga Amorós
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Estudiante de Desarrollo de Aplicaciones Web
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Desarrollador apasionado por la tecnología y el aprendizaje constante. 
          Me gusta transformar ideas en código funcional, limpio y eficiente.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="https://github.com/pepvillalonga" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/pepvillalonga/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:info@pepvillalonga.es">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
