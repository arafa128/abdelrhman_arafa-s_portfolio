import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "AUTOSAR Master Class",
    issuer: "Sprints",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7187000144414855168/",
  },
  {
    name: "Overview of Automotive SPICE",
    issuer: "EDUCBA",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7198609741432946689/",
  },
  {
    name: "Product Management",
    issuer: "Sprints",
    link: "https://www.linkedin.com/posts/abdelrhman-arafa_im-happy-to-share-that-ive-obtained-a-new-activity-7377343626789593089-ftx3/",
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
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline hover:no-underline"
            >
              <Card
                className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 text-center cursor-pointer h-full"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                  <Award className="h-12 w-12 mb-4 text-accent" />
                  <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
