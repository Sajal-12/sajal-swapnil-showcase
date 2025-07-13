
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Send, MapPin } from "lucide-react";
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
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "sajalvictorious83@gmail.com",
      href: "mailto:sajalvictorious83@gmail.com"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/Sajal-12",
      href: "https://github.com/Sajal-12"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Sajal Swapnil",
      href: "https://www.linkedin.com/in/sajal-swapnil-a93a741ba"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      title: "Medium",
      value: "Technical Blog",
      href: "https://medium.com/@sajalvictorious83"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Hajipur, Bihar, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities, exciting projects, and collaborations. 
                Whether you have a question about blockchain development, want to discuss a project, 
                or just want to connect, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group hover:scale-105 transition-transform duration-200">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{info.title}</p>
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-colors duration-300 focus:ring-2 focus:ring-primary"
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
                  className="transition-colors duration-300 focus:ring-2 focus:ring-primary"
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
                  className="transition-colors duration-300 focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t">
          <p className="text-muted-foreground text-sm">
            © 2024 Sajal Swapnil. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
