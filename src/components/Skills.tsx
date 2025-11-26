import {
  Code2,
  Database,
  BrainCircuit,
  LineChart,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { useRevealOnScroll } from "../hooks/use-reveal";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Python", "SQL", "C++", "HTML", "CSS", "JavaScript"],
    color: "primary",
  },
  {
    category: "Data Analysis",
    icon: LineChart,
    items: [
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "Statistical Analysis",
      "MS Excel",
    ],
    color: "secondary",
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    items: [
      "Scikit-learn",
      "Linear Regression",
      "Supervised Learning",
      "Model Evaluation",
    ],
    color: "accent",
  },
  {
    category: "Mathematics & Logic",
    icon: Database,
    items: ["Statistics", "Probability", "Linear Algebra", "Problem Solving"],
    color: "primary",
  },
  {
    category: "Development Tools",
    icon: Wrench,
    items: ["VS Code", "Jupyter Notebook", "Git", "GitHub"],
    color: "secondary",
  },
  {
    category: "Core Strengths",
    icon: Lightbulb,
    items: [
      "Analytical Thinking",
      "Quick Learner",
      "Mathematical Reasoning",
      "Problem Solving",
    ],
    color: "accent",
  },
];

const Skills = () => {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 animate-scale-in group hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`w-14 h-14 bg-${skill.color}/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 text-${skill.color}`} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-background/50 rounded-lg text-sm text-muted-foreground border border-border/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
