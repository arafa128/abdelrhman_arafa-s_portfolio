import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground/80">
              © {currentYear} Abdelrhman Arafa. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/arafa128"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrhman-arafa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:abdelrhman.ali.arafa@gmail.com"
              className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
                        <a
              href="00201022330582"
              className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
