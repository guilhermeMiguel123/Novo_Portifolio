"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // Estado para guardar o que a pessoa digita
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Função que atualiza o estado quando a pessoa digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. Botão do WhatsApp Direto (Canto Esquerdo)
  const openWhatsappDirect = () => {
    const message = encodeURIComponent("Olá Guilherme! Vi seu portfólio e gostaria de solicitar um orçamento.");
    window.open(`https://wa.me/5562992781044?text=${message}`, "_blank");
  };

  // 2. Botão do Formulário (Pega os dados e manda pro Zap)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Monta uma mensagem bonita
    const whatsappMessage = `*Novo Contato do Site* 🚀\n\n*Nome:* ${name}\n*Email:* ${email}\n*Mensagem:* ${message}`;
    
    // Abre o WhatsApp com tudo preenchido
    window.open(`https://wa.me/5562992781044?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-foreground">Vamos conversar?</h2>
          <p className="text-foreground/70 text-lg">
            Estou disponível para novos projetos e parcerias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Card de Informações (Esquerda) */}
          <motion.div 
            className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Canais Diretos</h3>
            
            {/* Botão WhatsApp */}
            <button 
              onClick={openWhatsappDirect}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold mb-4 transition-transform hover:scale-[1.02] shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>

            {/* Botão Instagram */}
            <a 
              // Assumi que seu usuário é o mesmo do email. Se for diferente, altere aqui.
              href="https://instagram.com/guilherme12miguel123" 
              target="_blank"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white py-3 rounded-xl font-bold mb-4 transition-transform hover:scale-[1.02]"
            >
              <Instagram size={20} />
              Instagram
            </a>
            
            <div className="mt-4 flex flex-col items-center gap-3 text-foreground/60 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:guilherme12miguel123@gmail.com" className="hover:text-primary transition-colors">
                  guilherme12miguel123@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulário (Direita) */}
          <motion.form 
            onSubmit={handleFormSubmit}
            className="space-y-4 bg-card p-8 rounded-2xl border border-border shadow-sm"
          >
             <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Nome</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  required
                  className="w-full bg-background p-3 rounded-lg border border-border text-foreground outline-none focus:border-primary transition-colors" 
                  placeholder="Seu nome" 
                />
             </div>
             
             <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  required
                  className="w-full bg-background p-3 rounded-lg border border-border text-foreground outline-none focus:border-primary transition-colors" 
                  placeholder="seu@email.com" 
                />
             </div>
             
             <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Mensagem</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background p-3 rounded-lg border border-border text-foreground outline-none focus:border-primary transition-colors h-32 resize-none" 
                  placeholder="Gostaria de um orçamento para..." 
                />
             </div>

             <button type="submit" className="w-full bg-foreground text-background py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
               Enviar no WhatsApp <Send size={18} />
             </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}