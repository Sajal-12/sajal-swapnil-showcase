
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Smartphone } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      skills: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 60 },
        { name: "Progressive Web Apps", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600 rounded-lg mr-4 group-hover:bg-purple-500 transition-colors duration-300 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-slate-700"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
