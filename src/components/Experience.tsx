import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Freelance",
    period: "Sep 2025 – Dec 2025",
    description:
      "Developing POS systems, focusing on reliability and user experience.",
    tools: "PHP, Laravel, MySQL",
  },
  {
    title: "Teaching Assistant",
    company: "Zewail City of Science and Technology",
    period: "Feb 2025 – Jun 2025",
    description:
      "Delivered structured technical content and adapted course material based on feedback and learning outcomes ,Simplified complex technical concepts into clear explanations, strengthening communication and stakeholder-alignment skills",
    tools: "C++, Embedded Systems",
  },
  {
    title: "Embedded Automotive Software Engineer",
    company: "Methode Electronics",
    period: "Jun 2022 – May 2024",
    description:
      "Collaborated with cross-functional teams (software, hardware, validation, production, EOL) to deliver automotive ECUs for multiple OEMs, including Ferrari and Aston Martin Owned the creation and maintenance of product and system documentation (SRS, SDD, SHLD, UML, flowcharts, release notes), ensuring alignment between stakeholder expectations and engineering delivery Worked closely with validation teams to define test plans, test cases, and acceptance criteria,supporting system-level integration and quality assurance Contributed to ASIL-B safety-critical projects, applying ISO 26262 principles to risk assessment, functional safety requirements, and mitigation strategies Translated OEM and system-level requirements into clear functional and non-functional specifications consumable by development and validation teams Supported production readiness by coordinating requirement clarification and issue resolution with EOL and manufacturing teams Worked in Agile/Scrum environments using Jira to track requirements, delivery progress, and cross-team dependencies",
    tools: "C, FMEA, LDRA, TESSY, CANoe, CAPL, UML",
  },
  {
    title: "Embedded Linux Engineer",
    company: "Freelance",
    period: "Nov 2022 – Jan 2023",
    description:
      "Prioritized features to deliver an MVP that met core user needs while respecting technical and time constraints .Delivered a Surgical Room Control System based on stakeholder and user requirements using Linux, Raspberry Pi, QT, and Python. Collaborated with stakeholders to define system behavior, UI expectations, and operational constraints.",
    tools: "Python, QT, Raspberry Pi",
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
