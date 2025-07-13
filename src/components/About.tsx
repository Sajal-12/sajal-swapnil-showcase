
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I enjoy creating scalable applications and solving complex problems with elegant solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing my degree while continuously learning and implementing 
              cutting-edge technologies. I have experience with both frontend and backend 
              development, with a strong focus on user experience and performance optimization.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white">React</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Node.js</Badge>
              <Badge className="bg-green-600 hover:bg-green-700 text-white">MongoDB</Badge>
              <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white">JavaScript</Badge>
              <Badge className="bg-red-600 hover:bg-red-700 text-white">Python</Badge>
            </div>
          </div>
          
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Location</span>
                <span className="text-white">India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">2+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Education</span>
                <span className="text-white">Computer Science</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Specialization</span>
                <span className="text-white">Full Stack Development</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
