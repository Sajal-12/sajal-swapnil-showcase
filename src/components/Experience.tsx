
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      period: "2022 - Present",
      description: "Developed multiple web applications using React, Node.js, and MongoDB. Focused on creating responsive and user-friendly interfaces with modern design principles.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      period: "2021 - 2022",
      description: "Built various frontend applications and contributed to open-source projects. Learned modern JavaScript frameworks and responsive design techniques.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        className="bg-slate-700 hover:bg-purple-600 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
