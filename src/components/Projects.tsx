import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import weatherImg from "@/assets/project-weather.jpg";

type Project = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const fallbackProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, fully responsive e-commerce website with product listings, shopping cart, and secure checkout. Built with HTML, CSS, and JavaScript featuring smooth animations and intuitive user experience.",
    image: ecommerceImg,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with beautiful UI and weather animations. Features location-based forecasts, 7-day predictions, and interactive weather maps designed in Figma.",
    image: weatherImg,
    tags: ["JavaScript", "API Integration", "Figma", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Failed to load projects");
        const data = await res.json();
        if (Array.isArray(data?.projects) && data.projects.length > 0) {
          setProjects(
            data.projects.map((p: any) => ({
              title: p.title,
              description: p.description,
              image: p.image,
              tags: p.tags ?? [],
              liveUrl: p.liveUrl,
              githubUrl: p.githubUrl,
            }))
          );
        }
      } catch (e: any) {
        setError(e?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {loading && (
            <div className="text-center text-muted-foreground animate-fade-in">
              Loading projects...
            </div>
          )}
          {!loading && projects.length === 0 && (
            <div className="text-center text-muted-foreground animate-fade-in">
              No projects found. Add them to <code>/public/projects.json</code>.
            </div>
          )}
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card gradient-border rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-500 animate-fade-in ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
              style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="lg:w-1/2 relative group overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ transformOrigin: "center" }}
                    onMouseMove={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const rect = target.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width - 0.5;
                      const y = (e.clientY - rect.top) / rect.height - 0.5;
                      target.style.transform = `scale(1.05) rotateX(${
                        y * -3
                      }deg) rotateY(${x * 3}deg)`;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.transform = "";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-xl bg-primary/20 ring-1 ring-primary/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                      asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
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
