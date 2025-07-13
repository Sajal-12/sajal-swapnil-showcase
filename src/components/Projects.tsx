
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "SmartJobber – Job Tracker Web App",
      description: "A comprehensive job tracking application built with React.js and Supabase. Features real-time job application tracking, status updates, and analytics dashboard for job seekers.",
      technologies: ["React.js", "Supabase", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveDemo: "https://lucent-kitten-5ba2da.netlify.app",
      github: "https://github.com/Sajal-12/smartjobber",
      featured: true
    },
    {
      title: "JKS Restaurant – Full Stack Web App",
      description: "Modern restaurant management system with blockchain integration. Features online ordering, payment processing, inventory management, and customer reviews system.",
      technologies: ["MERN Stack", "Blockchain", "Smart Contracts", "MongoDB", "Express.js"],
      liveDemo: "https://lucent-kitten-5ba2da.netlify.app",
      github: "https://github.com/Sajal-12/JKS---Restaurant",
      featured: true
    },
    {
      title: "Pathfinding Visualizer",
      description: "Interactive visualization tool for pathfinding algorithms including Dijkstra, A*, and BFS. Built with React.js and implements various data structures and algorithms.",
      technologies: ["React.js", "Tailwind CSS", "Data Structures", "Algorithms", "JavaScript"],
      liveDemo: "https://pathfinding-visualizer-ss.netlify.app",
      github: "https://github.com/Sajal-12/PathfindingVisualizer",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills. Built with React and Tailwind CSS, featuring dark/light mode and smooth animations.",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design", "TypeScript", "Vite"],
      liveDemo: "https://v0-portfolio-f7zt6e.vercel.app",
      github: "https://github.com/Sajal-12",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group ${
                project.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    {project.featured && (
                      <Badge variant="default" className="text-xs">Featured</Badge>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
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
