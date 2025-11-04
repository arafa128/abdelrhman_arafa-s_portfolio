import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const Index = () => {
  useScrollToHash();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-16">
        <About />
      </div>
      <div id="skills" className="scroll-mt-16">
        <Skills />
      </div>
      <div id="experience" className="scroll-mt-16">
        <Experience />
      </div>
      <div id="projects" className="scroll-mt-16">
        <Projects />
      </div>
      <div id="certifications" className="scroll-mt-16">
        <Certifications />
      </div>
      <div id="testimonials" className="scroll-mt-16">
        <Testimonials />
      </div>
      <div id="contact" className="scroll-mt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
