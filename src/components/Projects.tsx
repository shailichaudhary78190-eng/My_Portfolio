import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import weatherImg from "@/assets/project-weather.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, fully responsive e-commerce website with product listings, shopping cart, and secure checkout. Built with HTML, CSS, and JavaScript featuring smooth animations and intuitive user experience.",
    image: ecommerceImg,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with beautiful UI and weather animations. Features location-based forecasts, 7-day predictions, and interactive weather maps designed in Figma.",
    image: weatherImg,
    tags: ["JavaScript", "API Integration", "Figma", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 animate-fade-in ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="lg:w-1/2 relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
