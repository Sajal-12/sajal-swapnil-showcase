
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Facilitator Program",
      issuer: "Google Cloud",
      date: "2022",
      description: "Completed comprehensive cloud computing training program covering Google Cloud Platform services, architecture, and best practices.",
      skills: ["Google Cloud Platform", "Cloud Architecture", "DevOps", "Cloud Security"],
      type: "Program",
      featured: true
    },
    {
      title: "Blockchain Developer Intern",
      issuer: "Simplilearn",
      date: "2022",
      description: "Comprehensive blockchain development certification covering smart contracts, DApps, and Ethereum ecosystem development.",
      skills: ["Blockchain", "Solidity", "Smart Contracts", "Ethereum", "Web3.js"],
      certificate: "https://simpli-web.app.link/e/VNwTa5PAXUb",
      type: "Internship Certificate",
      featured: true
    },
    {
      title: "Java Developer Intern",
      issuer: "Learnmall",
      date: "2021",
      description: "Java development internship focusing on core Java concepts, OOPs principles, and practical application development.",
      skills: ["Java", "OOPs", "JDBC", "Exception Handling", "File Handling"],
      certificate: "https://learnmall.in/cert/FHH963903",
      type: "Internship Certificate",
      featured: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          Certifications & Programs
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group ${
                cert.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              <Badge variant="secondary" className="mb-3 text-xs">
                {cert.type}
              </Badge>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-primary font-medium mb-3 text-sm">{cert.issuer}</p>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {cert.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              {cert.certificate && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105"
                >
                  <a href={cert.certificate} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
