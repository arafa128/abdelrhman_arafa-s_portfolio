import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "text-primary",
    skills: [
      "C",
      "C++",
      "Python",
      "PHP",
      "Laravel",
      "OOP",
      "SQL",
      "Modern C++",
      "ARM Architecture",
      "FreeRTOS",
    ],
  },
  {
    title: "Linux & DevOps",
    icon: Terminal,
    color: "text-accent",
    skills: [
      "Yocto",
      "Docker",
      "Kubernetes",
      "Shell/Bash scripting",
      "U-Boot",
      "CI/CD",
      "Process Management",
      "System Monitoring",
    ],
  },
  {
    title: "Other Skills",
    icon: Wrench,
    color: "text-primary",
    skills: [
      "UML",
      "ASPICE",
      "UDS",
      "SOMEIP",
      "Functional Safety (ISO26262)",
      "Unit & Integration Testing",
      "Jira",
      "Agile/Scrum",
      "Design Patterns",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <category.icon className={`h-10 w-10 mb-2 ${category.color}`} />
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-accent/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
