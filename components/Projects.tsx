"use client";
import { motion } from "framer-motion";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  // --- PROJETOS EXISTENTES ---
  {
    id: 1,
    title: "Grana Verde",
    category: "SaaS / Web App",
    challenge: "Interface complexa de dados financeiros que precisava ser simples no mobile.",
    solution: "Dashboard responsiva com modo escuro nativo e gráficos otimizados.",
    result: "Aumento de 40% na retenção de usuários.",
    tech: ["React", "Next.js", "Tailwind"],
    image: "/Projeto_1.png", 
    link: "https://guilhermemiguel123.github.io/controle-finaceiro/", 
    github: "https://github.com/guilhermeMiguel123/controle-finaceiro"
  },
  {
    id: 2,
    title: "Bella Estética",
    category: "Landing Page de Clínica de Estética",
    challenge: "Cliente tinha muitos acessos mas poucos agendamentos no WhatsApp.",
    solution: "Site focado em conversão com carregamento instantâneo e CTAs estratégicos.",
    result: "Dobrou os agendamentos no primeiro mês.",
    tech: ["HTML/CSS", "Javascript", "SEO"],
    image: "/projeto_2.png",
    link: "https://guilhermemiguel123.github.io/Bella-Est-tica/",
    github: "https://github.com/guilhermeMiguel123/Bella-Est-tica"
  },
  {
    id: 3,
    title: "TaskFlow",
    category: "Landing Page de SaaS de Produtividade",
    challenge: "Gerenciar fluxos de trabalho complexos e múltiplos projetos sem perda de performance.",
    solution: "Arquitetura de microserviços com interface Bento Grid e atualizações em tempo real.",
    result: "Sistema escalável com alta disponibilidade e resposta inferior a 100ms.",
    tech: ["HTML/CSS", "Javascript", "SEO"],
    image: "/projeto_3.png",
    link: "https://guilhermemiguel123.github.io/taskflow/#",
    github: "https://github.com/guilhermeMiguel123/taskflow"
  },
  {
    id: 4,
    title: "M&AAdvocacia",
    category: "Landing Page de Escritório de Advocacia",
    challenge: "Transformar um atendimento jurídico tradicional em uma experiência digital acessível e ágil",
    solution: "Landing page com hierarquia de informações clara, integração de agendamento e SEO focado em áreas de atuação específica.",
    result: "Redução de 40% no tempo de triagem inicial de clientes.",
    tech: ["HTML/CSS", "Javascript", "SEO"],
    image: "/Projeto_4.png", 
    link: "https://guilhermemiguel123.github.io/Miguel-Associados-Advocacia-Especializada/", 
    github: "https://github.com/guilhermeMiguel123/Miguel-Associados-Advocacia-Especializada"
  },
  {
    id: 5,
    title: "BioDental",
    category: "Landing Page de Clínica Odontológica",
    challenge: "Criar uma presença digital que transmita higiene impecável e tecnologia de ponta para converter pacientes de implantes e estética.",
    solution: "Landing page focada em Visual Trust, usando profundidade com sombras realistas e micro-interações em JavaScript.",
    result: "Aumento de 60% no clique para agendamento via WhatsApp devido aos CTAs flutuantes.",
    tech: ["HTML/CSS", "Javascript", "SEO"],
    image: "/projeto_5.png",
    link: "https://guilhermemiguel123.github.io/Sorrisoprime/",
    github: "https://github.com/guilhermeMiguel123/Sorrisoprime"
  },
  {
    id: 6,
    title: "NexusMed ",
    category: "Landing Page de Clínica Multiespecializada",
    challenge: "Facilitar o acesso a informações sobre especialidades e agendamentos para uma clínica multiespecializada.",
    solution: "Landing page focada em UX acessível, com hierarquia clara de serviços e integração direta com sistemas de telemedicina.",  
    result: "Melhora na experiência do paciente e otimização do fluxo de triagem digital.",
    tech: ["HTML/CSS", "Javascript", "SEO"],
    image: "/projeto_6.png",
    link: "https://guilhermemiguel123.github.io/NexusMed/",
    github: "https://github.com/guilhermeMiguel123/NexusMed"
  },
  {
    id: 7,
    title: "BELLA",
    category: "mini site para workshop online",
    challenge: "Criar uma experiência de compra fluida e luxuosa para o público feminino, integrando venda de produtos com captação de leads para serviços.",
    solution: "DImplementação de navegação por abas dinâmicas (Tabs), sistema de checkout (CRUD) em tempo real e formulário de Check-in com gatilhos de exclusividade.",
    result: "Interface de alta conversão com navegação intuitiva e design focado em autoridade de marca.",
    tech: ["HTML/CSS", "Javascript", "SEO"],
    image: "/Projeto_7.png", 
    link: "https://guilhermemiguel123.github.io/BELLA/",
    github: "https://github.com/guilhermeMiguel123/BELLA"
  },
  {
    id: 8,
    title: "DevMaster | Carreira de Elite",
    category: "Landing Page de Alta Conversão",
    challenge: "Criar uma interface de autoridade que convença desenvolvedores a investirem em mentoria profissional.",
    solution: "Uso de design futurista (Dark Mode), Glassmorphism, gatilhos de prova social e formulário de captura otimizado.",
    result: "Aumento significativo na taxa de conversão de leads e esgotamento de vagas em tempo recorde.",
    tech: ["HTML/CSS", "JavaScript"],
    image: "/Projeto_8.png", 
    link: "https://guilhermemiguel123.github.io/DevMaster/",
    github: "https://github.com/guilhermeMiguel123/DevMaster"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Estudos de Caso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground leading-tight">
            Design com propósito.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Projetos reais que geraram resultados reais.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              
              {/* LADO DA IMAGEM */}
              <div className="w-full lg:w-1/2 group">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-card border border-border shadow-2xl transition-transform duration-500 hover:-translate-y-2"
                >
                  <Image 
                    src={project.image}
                    alt={`Projeto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* === NOVO HOVER MODERNO E CHAMATIVO === */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center">
                     <div className="transform translate-y-8 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-500 delay-75 ease-out bg-primary text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_30px_rgba(8,145,178,0.6)] hover:scale-105 hover:bg-cyan-500">
                        Visitar Site <ExternalLink size={20} />
                     </div>
                  </div>
                </a>
              </div>

              {/* LADO DO TEXTO */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                   <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                     {project.category}
                   </span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">O Desafio</h4>
                    <p className="leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">A Solução</h4>
                    <p className="leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg border-l-4 border-green-500">
                     <p className="text-sm font-medium">
                       <span className="font-bold text-green-600 dark:text-green-400">Resultado: </span> 
                       {project.result}
                     </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium text-foreground/50 border border-border px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors group"
                  >
                    Ver Projeto <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <Github size={18} /> Código
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}