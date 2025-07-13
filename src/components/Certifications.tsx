
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and responsive web design principles.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
      credential: "#",
      image: "bg-gradient-to-r from-orange-600 to-red-600"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Advanced JavaScript certification focusing on ES6+ features, algorithms, data structures, and functional programming concepts.",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Functional Programming"],
      credential: "#",
      image: "bg-gradient-to-r from-yellow-600 to-orange-600"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "Certification covering modern CSS techniques, Flexbox, Grid, responsive design principles, and accessibility standards.",
      skills: ["CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Accessibility"],
      credential: "#",
      image: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      title: "React Development",
      issuer: "Online Certification",
      date: "2023",
      description: "Specialized certification in React.js covering hooks, state management, component lifecycle, and modern React patterns.",
      skills: ["React", "JSX", "Hooks", "State Management", "Component Design"],
      credential: "#",
      image: "bg-gradient-to-r from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Certifications & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className={`h-32 ${cert.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-12 w-12 text-white/80 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      className="bg-slate-700 hover:bg-purple-600 text-gray-300 hover:text-white transition-colors duration-300 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  asChild
                  size="sm"
                  className="bg-slate-700 hover:bg-purple-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Credential
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
