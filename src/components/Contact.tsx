import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      const response = await fetch("https://formspree.io/f/mrbongny", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-accent/20 h-fit">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid gap-6 content-start">
            <Card className="border-accent/20 hover:border-accent/50 transition-colors h-[100px]">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-4 h-full">
                  <Mail className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:abdelrhman.ali.arafa@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      abdelrhman.ali.arafa@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-colors h-[100px]">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-4 h-full">
                  <MapPin className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Giza, Egypt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-colors h-[100px]">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-4 h-full">
                  <div className="flex-grow">
                    <h3 className="font-semibold mb-2">Connect With Me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/arafa128"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
                      >
                        <Github className="h-6 w-6" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/abdelrhman-arafa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="tel:00201022330582"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-110"
                      >
                        <Phone className="h-6 w-6" />
                        <span>00201022330582</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
