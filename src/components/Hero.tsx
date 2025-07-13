
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 animate-pulse"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SS</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Sajal Swapnil
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          Full Stack Developer & Tech Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          Passionate about creating innovative web solutions with modern technologies. 
          Experienced in React, Node.js, and cloud platforms.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="https://github.com/Sajal-12" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
        
        <div className="animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
            <ArrowDown className="mx-auto h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
