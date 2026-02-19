"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "1. Descoberta",
    desc: "Entendo seu negócio e objetivos antes de escrever uma linha de código."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "2. Estratégia",
    desc: "Crio a estrutura visual focando em conversão e experiência do usuário."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "3. Código",
    desc: "Desenvolvimento limpo, rápido e otimizado para SEO e mobile."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "4. Lançamento",
    desc: "Colocamos no ar e garantimos que tudo funcione perfeitamente."
  }
];

export default function Process() {
  return (
    // CORREÇÃO: bg-background (Sólido) em vez de transparente.
    // Isso garante que o fundo seja BRANCO no claro e PRETO no escuro.
    <section className="py-24 px-6 bg-background border-y border-border transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Como transformo ideias em realidade
          </h2>
          <p className="text-foreground/70">Processo organizado para garantir qualidade.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Linha conectora (visível apenas em desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Círculo do Ícone: bg-card garante o contraste correto dentro da bolinha */}
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-6 z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-sm">
                {step.icon}
              </div>
              
              <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}