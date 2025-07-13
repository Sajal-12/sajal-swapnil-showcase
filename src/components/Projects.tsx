
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/Sajal-12",
      live: "#",
      image: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com/Sajal-12",
      live: "#",
      image: "bg-gradient-to-r from-green-600 to-blue-600"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics, post scheduling, and engagement tracking.",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      github: "https://github.com/Sajal-12",
      live: "#",
      image: "bg-gradient-to-r from-pink-600 to-red-600"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "https://github.com/Sajal-12",
      live: "#",
      image: "bg-gradient-to-r from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white/80 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      className="bg-slate-700 hover:bg-purple-600 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-slate-700 hover:bg-purple-600 text-white transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
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
