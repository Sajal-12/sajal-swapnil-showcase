
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Wrench, 
  Blocks,
  Brain,
  Cloud
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "JavaScript", "TypeScript", "SQL", "Solidity"]
    },
    {
      title: "Frontend Frameworks",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"]
    },
    {
      title: "Blockchain & Web3",
      icon: <Blocks className="h-6 w-6" />,
      skills: ["Solidity", "Smart Contracts", "DApps", "Web3.js", "Ethereum"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Android", "Java", "Kotlin", "React Native"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Google Cloud"]
    },
    {
      title: "AI & Analytics",
      icon: <Brain className="h-6 w-6" />,
      skills: ["ChatGPT", "Gemini", "Prompt Engineering", "Google Analytics"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Google Cloud", "Digital Marketing", "SEO", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-card/80 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
