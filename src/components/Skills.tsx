import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, Wrench, SquareChartGantt } from "lucide-react";

const skillCategories = [
  {
    title: "Product & PM Skills",
    icon: Code,
    color: "text-primary",
    skills: [
      "Product Ownership",
      "Requirements Engineering",
      "Jira",
      "ASPICE",
      "Stakeholder Management",
      "Acceptance Criteria",
      "User Stories",
      "Agile / Scrum",
      "Roadmapping & Prioritization",
    ],
  },
  {
    title: "Technical Background",
    icon: Code,
    color: "text-primary",
    skills: [
      "Yocto",
      "C++ / Python / PHP / SQL",
      "Docker",
      "ISO 26262 / Functional Safety",
      "GIT/GITGUB",
      "ARM Architecture",
      "FreeRTOS",
      "Shell / Bash scripting",
      "CI/CD",
      "AUTOSAR",
      "FMEA",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills, Tools & Expertise
        </h2>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
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
