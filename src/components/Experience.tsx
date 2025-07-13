
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Blockchain Developer Intern",
      company: "Simplilearn",
      period: "Mar 2022 – Aug 2022",
      description: "Built a blockchain-based hospital management system with tokenized medical records. Developed and deployed smart contracts using Solidity on Ethereum. Integrated a decentralized frontend using React.js and Web3.js.",
      technologies: ["Solidity", "Ethereum", "React.js", "Web3.js", "Smart Contracts"],
      certificate: "https://simpli-web.app.link/e/VNwTa5PAXUb"
    },
    {
      title: "Java Project Intern",
      company: "Learnmall",
      period: "Jan 2021 – Mar 2021",
      description: "Built a console-based Java application using File Handling, Exception Handling, and OOPs Concepts. Gained hands-on experience with JDBC, modularization, and debugging.",
      technologies: ["Java", "JDBC", "OOPs", "File Handling", "Exception Handling"],
      certificate: "https://learnmall.in/cert/FHH963903"
    }
  ];

  const leadership = {
    title: "Technical Team Lead",
    organization: "HackOverflow Society",
    description: "Leading technical initiatives and mentoring junior developers. Organizing hackathons and coding workshops for the developer community.",
    achievements: ["Contributed to 70+ GitHub repositories", "Active in open source community", "Technical content writer on Medium"]
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          Experience & Leadership
        </h2>
        
        <div className="space-y-8">
          {/* Leadership Role */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {leadership.title}
                    </h3>
                    <p className="text-primary font-medium">{leadership.organization}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">Current</Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {leadership.description}
                </p>
                
                <div className="space-y-2">
                  {leadership.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Internship Experience */}
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Briefcase className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" size="sm">
                    <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
