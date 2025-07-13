
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "YouTube Clone",
      description: "A full-featured YouTube clone with video streaming capabilities, user authentication, video upload, and responsive design. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      github: "https://github.com/Sajal-12/youtube-clone",
      live: "#",
      image: "bg-gradient-to-r from-red-600 to-pink-600"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, user authentication, message history, and emoji support. Features instant messaging with WebSocket integration.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Sajal-12/chat-app",
      live: "#",
      image: "bg-gradient-to-r from-blue-600 to-cyan-600"
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with product catalog, shopping cart, payment integration, order management, and admin dashboard for inventory control.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
      github: "https://github.com/Sajal-12/ecommerce-platform",
      live: "#",
      image: "bg-gradient-to-r from-green-600 to-emerald-600"
    },
    {
      title: "Weather App",
      description: "Responsive weather application with location-based forecasts, detailed weather information, 7-day predictions, and interactive weather maps using OpenWeather API.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Geolocation"],
      github: "https://github.com/Sajal-12/weather-app",
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
