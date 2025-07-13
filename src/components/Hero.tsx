
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse">
            <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">SS</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Sajal Swapnil
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium">
            Blockchain & Full‑Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            B.E. (Computer Science) | Passionate about Web3, Java, React, and building intuitive UI experiences.
          </p>
          
          <p className="text-muted-foreground">
            📍 Hajipur, Bihar, India
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="https://v0-resume-in-aarush-style.vercel.app" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="https://github.com/Sajal-12" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
