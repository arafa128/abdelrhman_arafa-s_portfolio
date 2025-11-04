import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Testimonials
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-accent mb-6" />
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                "Arafa worked for Methode Electronics for two years and showed
                strong embedded development skills. He delivered quality results on
                time, was eager to learn, and often explored new topics like
                AUTOSAR independently. A great team player with solid technical and
                personal skills."
              </p>
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-lg">Tamas Calin</p>
                <p className="text-muted-foreground">
                  Director of Global Software Engineering
                </p>
                <p className="text-accent">Methode Electronics</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
