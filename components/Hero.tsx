"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image"; // Importamos o componente de imagem otimizado

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden relative bg-background transition-colors duration-200"
    >
      {/* Elementos de Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO */}
        <div className="space-y-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80">
              Disponível para novos projetos
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] text-foreground"
            >
              Não apenas código. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Soluções Digitais.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed"
            >
              Transformo problemas complexos em interfaces simples, rápidas e lucrativas. Vamos construir algo memorável?
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/10"
            >
              Iniciar Projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-medium text-lg hover:bg-secondary transition-colors"
            >
              Ver Portfólio
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 text-foreground/50 pt-4"
          >
            {/* Links corrigidos */}
            <a 
              href="https://github.com/guilhermeMiguel123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>

            <a 
              href="https://www.linkedin.com/in/guilherme-miguel-32977b22b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <span className="text-sm border-l border-border pl-6">
              Fullstack Developer & UI Designer
            </span>
          </motion.div>
        </div>

        {/* LADO DIREITO (FOTO) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-[400px] h-[500px] mx-auto bg-card rounded-2xl overflow-hidden shadow-2xl border border-border rotate-3 hover:rotate-0 transition-transform duration-500">
            
            {/* AQUI ESTÁ A CORREÇÃO DA IMAGEM */}
            {/* Certifique-se de mover a foto para a pasta /public do projeto */}
            <div className="relative w-full h-full bg-secondary">
               <Image 
                 src="/1769610845678 - Copia.jpeg" // O caminho começa com / (pasta public)
                 alt="Guilherme Miguel"
                 fill // Isso faz a imagem preencher todo o cartão
                 className="object-cover" // Isso garante que a imagem não fique esticada
                 priority // Carrega a imagem mais rápido por ser a principal
               />
            </div>

          </div>
          
          {/* Elementos flutuantes */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-card p-4 rounded-xl shadow-xl border border-border"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}