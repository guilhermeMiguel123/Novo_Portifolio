"use client";
import { motion, Variants } from "framer-motion";

const technologies = [
  "JavaScript", "React.js", "Next.js", "Node.js", "TypeScript", 
  "Tailwind CSS", "Figma", "Git", "PostgreSQL", "Docker"
];

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1035], 
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
};

export default function TechStack() {
  return (
    // Fundo padrão
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="mb-8 text-center">
        <span className="text-primary text-sm font-bold tracking-widest uppercase">
          Stack Tecnológico
        </span>
      </div>
      
      <div className="relative w-full max-w-full overflow-hidden mask-linear-gradient">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div 
                key={index}
                // MUDANÇA: bg-card garante leitura perfeita em ambos os modos
                className="flex items-center justify-center px-6 py-3 bg-card border border-border rounded-full text-foreground font-semibold whitespace-nowrap hover:border-primary hover:text-primary transition-colors cursor-default shadow-sm"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}