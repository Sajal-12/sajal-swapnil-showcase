
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Blockchain and Full-Stack Developer with a B.E. in Computer Science 
              from Chandigarh University (2020–2024). I specialize in Web3 technologies, React 
              development, and creating innovative solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently focused on blockchain development, smart contracts, and building 
              decentralized applications. I'm also active in the open-source community with 
              contributions to 70+ GitHub repositories.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Blockchain Developer</Badge>
              <Badge variant="secondary">Full-Stack Developer</Badge>
              <Badge variant="secondary">Open Source Contributor</Badge>
              <Badge variant="secondary">Technical Writer</Badge>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href="https://medium.com/@sajalvictorious83" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Medium
                </a>
              </Button>
              
              <Button asChild variant="outline" size="sm">
                <a href="mailto:sajalvictorious83@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Education</span>
                <span className="text-foreground">B.E. Computer Science</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">University</span>
                <span className="text-foreground">Chandigarh University</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Year</span>
                <span className="text-foreground">2020–2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Location</span>
                <span className="text-foreground">Bihar, India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Role</span>
                <span className="text-foreground">Technical Team Lead</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
