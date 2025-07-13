
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sajalswapnil@gmail.com",
      href: "mailto:sajalswapnil@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/Sajal-12",
      href: "https://github.com/Sajal-12"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sajal-swapnil",
      href: "https://www.linkedin.com/in/sajal-swapnil-a93a741ba/"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's work together
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="p-3 bg-purple-600 rounded-lg mr-4 group-hover:bg-purple-500 transition-colors duration-300 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2024 Sajal Swapnil. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
