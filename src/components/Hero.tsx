import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shaili-chaudhary-2a8a70327/",
    },
    { label: "Gmail", href: "mailto:shailichaudhary78190@gmail.com" },
    { label: "Portfolio", href: "https://shailichaudhary.me" },
  ];

  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      el.style.setProperty("--parallax-x", `${x}px`);
      el.style.setProperty("--parallax-y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-20"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}></div>
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}></div>

      {/* Content with parallax container */}
      <div
        ref={sceneRef}
        className="container mx-auto px-4 z-10"
        style={{
          transform: `translate3d(var(--parallax-x, 0), var(--parallax-y, 0), 0)`,
        }}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Left: text */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium tracking-wider">
                Hello, I'm
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Shaili Chaudhary
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Web Designer & Developer
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mb-8">
              MCA 2nd Year Student crafting beautiful and functional web
              experiences with modern technologies and creative design.
            </p>

            <div className="flex gap-3 md:gap-4 justify-center md:justify-start mb-8 flex-wrap">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover-glow"
                asChild>
                <a href="mailto:shailichaudhary78190@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 hover-glow gradient-border">
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover-glow gradient-border"
                asChild>
                <a href="/Shaili_CV.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-3 md:gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer">
                <Github className="h-6 w-6" />
              </a>
              <a
                href={socials[0].href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={socials[1].href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div
            className="flex justify-center md:justify-end animate-fade-in"
            style={{ animationDelay: "0.2s" }}>
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
              <img
                src="/profile-placeholder.jpg"
                alt="Profile placeholder"
                className="relative z-10 w-full h-full rounded-full object-cover ring-1 ring-border shadow-xl animate-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
