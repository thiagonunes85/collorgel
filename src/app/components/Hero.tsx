import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { COMPANY_INFO } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-cyan-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-fuchsia-100/30 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full text-cyan-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            {COMPANY_INFO.slogan}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Tintas de Alta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-primary">
              Performance e Qualidade.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            A <strong>{COMPANY_INFO.name}</strong> é especialista na fabricação e venda de tintas imobiliárias e industriais.
            Colorindo sua vida com durabilidade, inovação e a melhor cobertura do mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-600 transition-all group">
              Nossos Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center gap-3 px-8 py-4 rounded-full font-bold border-2 border-primary/10 hover:bg-gray-50 transition-all">
              <span className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 ml-1" />
              </span>
              Fale Conosco
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Anos de Mercado</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Satisfação</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1658942933280-af564e967643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGluayUyMGRyb3BsZXRzJTIwbWFjcm98ZW58MXx8fHwxNzY5NzIwMDkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tintas Collorgel"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-top-12 md:-right-12 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block"
          >
            <div className="text-cyan-500 font-bold mb-1 italic">Qualidade</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest leading-none">Premium</div>
          </motion.div>
          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block"
          >
            <div className="flex gap-1 mb-2">
              <div className="w-4 h-4 bg-cyan-500 rounded-full" />
              <div className="w-4 h-4 bg-fuchsia-500 rounded-full" />
              <div className="w-4 h-4 bg-yellow-400 rounded-full" />
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest">{COMPANY_INFO.slogan}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
