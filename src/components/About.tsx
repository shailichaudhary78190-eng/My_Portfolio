import { useRevealOnScroll } from "../hooks/use-reveal";

const About = () => {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12 rounded-3xl animate-scale-in hover:scale-[1.02] transition-all duration-500">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-primary font-semibold">
                  Web Designer and Developer
                </span>{" "}
                currently pursuing my MCA (Master of Computer Applications) in
                my second year. I love creating beautiful, functional, and
                user-centered digital experiences.
              </p>

              <p>
                With expertise in{" "}
                <span className="text-secondary font-semibold">
                  front-end development
                </span>{" "}
                and
                <span className="text-accent font-semibold"> design tools</span>
                , I bring ideas to life through clean code and creative design.
                I'm constantly learning and exploring new technologies to stay
                ahead in the ever-evolving world of web development.
              </p>

              <p>
                When I'm not coding or designing, you'll find me exploring new
                design trends, working on personal projects, or contributing to
                the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
