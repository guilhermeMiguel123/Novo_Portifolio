import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack"; 
import Services from "@/components/Services";
import Process from "@/components/Process"; // <--- Importe aqui
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; 

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-200 overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      
      {/* Adicione o Processo aqui para explicar COMO você trabalha antes de mostrar O QUE você fez */}
      <Process />
      
      <Projects />
      <Contact />
      
      <footer className="py-12 border-t border-border text-center bg-background transition-colors">
  {"Desenvolvido por Guilherme Miguel © 2026. Todos os direitos reservados."}
</footer>
    </main>
  );
}