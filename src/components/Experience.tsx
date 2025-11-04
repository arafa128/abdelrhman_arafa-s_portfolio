import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Teaching Assistant",
    company: "Zewail City of Science and Technology",
    period: "Feb 2025 – Jun 2025",
    description:
      "Taught Embedded Systems and C++ material. Developed and guided students through practical applications and labs.",
  },
  {
    title: "Embedded Automotive Software Engineer",
    company: "Methode Electronics",
    period: "Jun 2022 – May 2024",
    description:
      "Created CANalyzer configurations and CAPL scripts for OEMs like AML & Ferrari. Designed UML diagrams, SRS, SDD, and SHLD documents. Worked on ASIL-B safety-critical systems, diagnostics, and ECU layer modules.",
    tools: "LDRA, TESSY, CANoe, CAPL, UML",
  },
  {
    title: "Embedded Linux Engineer",
    company: "Freelance",
    period: "Nov 2022 – Jan 2023",
    description:
      "Developed surgical room control GUI using Qt and Python on Raspberry Pi with touchscreen.",
  },
  {
    title: "Embedded System Engineer Intern",
    company: "ITI",
    period: "Nov 2021 – Mar 2022",
    description:
      "Developed ATM Software GUI in Python and Clinic Management System in C. Graduation project: FOTA system for STM32 via ESP8266.",
  },
  {
    title: "BMS Engineer Intern",
    company: "Shaker Consultancy Group",
    period: "Sep 2021 – Nov 2021",
    description:
      "Assisted in automation and control systems integration.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-1/2 hidden sm:block" />

                <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl ml-8 md:ml-0">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-2">{exp.description}</p>
                    {exp.tools && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Tools:</span> {exp.tools}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
