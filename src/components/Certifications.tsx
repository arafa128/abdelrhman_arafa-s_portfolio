import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "AUTOSAR Master Class",
    issuer: "Sprints",
  },
  {
    name: "Overview of Automotive SPICE",
    issuer: "EDUCBA",
  },
  {
    name: "Product Management",
    issuer: "Sprints",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications & Learning
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <CardContent className="p-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
