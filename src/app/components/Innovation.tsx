import { motion } from "framer-motion";
import { Leaf, Award, Globe2, ShieldCheck } from "lucide-react";

export const Innovation = () => {
  const features = [
    {
      title: "Fórmulas Sustentáveis",
      description: "Nossas tintas possuem baixa emissão de VOC e são desenvolvidas pensando no meio ambiente e na saúde da sua família.",
      icon: Leaf,
    },
    {
      title: "Tecnologia de Ponta",
      description: "Investimos constantemente em P&D para entregar produtos com maior rendimento, cobertura e resistência.",
      icon: Award,
    },
    {
      title: "Distribuição Global",
      description: "Logística eficiente para entregar nossos produtos em qualquer lugar do Brasil com agilidade e segurança.",
      icon: Globe2,
    },
    {
      title: "Qualidade Certificada",
      description: "Processos rigorosos de controle de qualidade garantem que cada lata de tinta atenda aos mais altos padrões.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="innovation" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Inovação em <br /> Cada Gota</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Não vendemos apenas tinta; entregamos tecnologia e cor para transformar ambientes.
              Nosso compromisso é com a qualidade e a sustentabilidade, garantindo resultados incríveis para sua obra.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1562411053-c9ac630a5934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGxhYm9yYXRvcnklMjBpbmslMjByZXNlYXJjaHxlbnwxfHx8fDE3Njk3MjAwOTB8MA"
                alt="Laboratório de Pesquisa Collorgel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 md:-right-10 bg-white text-primary p-8 rounded-3xl shadow-2xl max-w-xs"
            >
              <div className="text-5xl font-black mb-2 text-cyan-500">40%</div>
              <p className="font-bold text-lg mb-1 leading-tight">Mais Rendimento</p>
              <p className="text-sm text-muted-foreground">Comparado com tintas convencionais do mercado.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
