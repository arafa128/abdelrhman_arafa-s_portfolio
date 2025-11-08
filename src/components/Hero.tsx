import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
            Abdelrhman Arafa
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
            Embedded Systems | Requirement & Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Results-driven Requirement Engineer with hands-on experience in embedded
            systems, Linux, and Software Engineering. Passionate about building scalable,
            efficient software and delivering reliable Software solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1g0N0FIn9ySbubILrSrqoubWqPm9Hb1qa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            {/* <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button> */}
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/arafa128"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrhman-arafa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};
