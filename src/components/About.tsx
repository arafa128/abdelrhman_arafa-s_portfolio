import { Code2, Server, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techStack = [
  "C",
  "C++",
  "Python",
  "Yocto",
  "Docker",
  "Linux",
  "UML",
  "Git",
  "Jira",
  "Embedded Android",
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <Card className="mb-12 border-accent/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Passionate Software Engineer with strong focus on LINUX OS experienced in Embedded systems,
                SDLC,STLC processes, C, Cpp,Yocto, Docker, Git,and ASPICE .with a proven track record of collaboration
                with top OEMs such as Ferrari and Aston Martin.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Excited about creating efficient, scalable solutions and
                continuously improving my skills in the software industry.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Programming</h3>
                <p className="text-sm text-muted-foreground">
                  C, C++, Python, Shell Scripting
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Server className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2">Requirement Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Jira, Clickup, Requirement Analysis & Management
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Cpu className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Embedded Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Automotive, Linux & Embedded Android Systems
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Tech I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
