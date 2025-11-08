import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import fotaImage from "@/assets/project-fota.jpg";
import surgicalImage from "@/assets/project-surgical.jpg";
import vehicleImage from "@/assets/project-vehicle.jpg";
import smarthouseImage from "@/assets/project-smarthouse.jpg";

const projects = [
  {
    title: "FOTA-STM32",
    subtitle: "ITI Graduation Project",
    description:
      "Updating STM32 IoT Applications via firmware-over-the-air (ESP8266, UART, Flash driver, TFT).",
    image: fotaImage,
    link: "https://github.com/arafa128",
  },
  {
    title: "Surgical Room Control GUI",
    subtitle: "Freelance",
    description:
      "Qt/Python GUI for Raspberry Pi controlling medical room environment.",
    image: surgicalImage,
  },
  {
    title: "Maneuvering Vehicle System",
    subtitle: "Academic Project",
    description:
      "Microcontroller-based vehicle control system with C programming.",
    image: vehicleImage,
  },
  {
    title: "Smart House System",
    subtitle: "Academic Project",
    description:
      "Automated control of home appliances using microcontroller logic.",
    image: smarthouseImage,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <div className="text-xl mb-1">{project.title}</div>
                    <div className="text-sm text-accent font-normal">
                      {project.subtitle}
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
