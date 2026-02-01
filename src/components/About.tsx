import { Code2, Server, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techStack = [
  "Agile",
  "Scrum",
  "ASPICE",
  "ISO 26262",
  "Requirement Engineering",
  "UML",
  "Jira",
  "Clickup",
  "CI/CD",
  "C++",
  "Python",
  "Docker",
  "Linux",
  "Git",
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
                I’m a Technical Product Manager / Product Owner with a strong engineering foundation in embedded and automotive systems.
                I specialize in translating complex technical and business requirements into clear, actionable product specifications that align engineering execution with customer and stakeholder needs.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I’ve worked across the full product lifecycle—from requirements discovery and definition to system validation and release—within Agile, ASPICE, and ISO 26262 safety-critical environments.
                My experience includes close collaboration with cross-functional teams and global automotive OEMs such as Ferrari and Aston Martin.
                With hands-on technical experience and formal training in Product Management and Requirements Engineering, I bridge the gap between business goals and engineering reality to deliver reliable, high-impact products.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Product Management</h3>
                <p className="text-sm text-muted-foreground">
                  Agile, Scrum, ASPICE, ISO 26262 & Stakeholder Management Roadmapping & Prioritization User Stories Acceptance Criteria
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
