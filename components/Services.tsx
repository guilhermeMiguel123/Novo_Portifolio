"use client";
import { motion } from "framer-motion";
import { Layout, Smartphone, Code } from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    desc: "Páginas de alta conversão focadas em vendas.",
    icon: <Layout className="w-8 h-8 text-primary" />, 
    colSpan: "md:col-span-2", 
  },
  {
    title: "Mini Sites",
    desc: "Links para bio e portfólios simples.",
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Sistemas Web",
    desc: "Dashboards e painéis administrativos.",
    icon: <Code className="w-8 h-8 text-green-500" />,
    colSpan: "md:col-span-3",
  },
];

export default function Services() {
  return (
    // bg-secondary garante contraste com a seção anterior
    <section id="services" className="py-24 px-6 bg-secondary transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* MUDANÇA: 'text-foreground' garante que seja PRETO no claro e BRANCO no escuro */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Como posso ajudar?
          </h2>
          <p className="text-foreground/70 text-lg">
            Soluções sob medida para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // MUDANÇA: bg-card com borda sutil
              className={`${service.colSpan} p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all group`}
            >
              <div className="mb-4 bg-background w-14 h-14 rounded-lg flex items-center justify-center transition-colors border border-border">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-card-foreground">
                {service.title}
              </h3>
              
              <p className="text-foreground/70">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}