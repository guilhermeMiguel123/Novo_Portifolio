"use client";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle"; 
import { useState } from "react";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#services" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" }
];

export default function Navbar() {
  
  // Função que força a rolagem suave
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Impede o comportamento padrão do navegador
    
    // Pega apenas o ID (remove o #)
    const targetId = href.replace("#", "");
    
    // Busca o elemento na tela
    const elem = document.getElementById(targetId);
    
    // Se achar, rola até ele
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="flex items-center gap-6 bg-background/80 backdrop-blur-md border border-border rounded-full px-8 py-3 shadow-xl shadow-black/5">
        <div className="flex gap-6 sm:gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              // MUDANÇA AQUI: text-foreground e hover:text-primary
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="pl-4 border-l border-border flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}