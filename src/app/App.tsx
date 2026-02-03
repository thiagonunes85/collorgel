import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Products } from "@/app/components/Products";
import { Innovation } from "@/app/components/Innovation";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { COMPANY_INFO } from "@/lib/constants";

const StatsSection = () => {
  return (
    <div className="bg-white py-12 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Anos de Mercado", value: "12+" },
            { label: "Cores Disponíveis", value: "2000+" },
            { label: "Litros Vendidos", value: "1M+" },
            { label: "Satisfação", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-EdHA5RGr_2T?auto=format&fit=crop&q=80"
                alt="Equipe Collorgel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-500 rounded-full mix-blend-multiply opacity-20 blur-3xl" />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Criando novas cores para <br /> a sua vida</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundada em novembro de 2012, a <strong>{COMPANY_INFO.name}</strong> cresceu de uma fabricante local para uma referência em tintas no estado de Goiás.
              Acreditamos que cada cor conta uma história e cada projeto reflete nosso compromisso com a qualidade.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe técnica trabalha incansavelmente para desenvolver fórmulas que unem durabilidade, economia e estética,
              garantindo o melhor resultado para obras residenciais e industriais.
            </p>

            <div className="space-y-4">
              {[
                "Consistência de cor incomparável em todas as linhas",
                "Práticas sustentáveis e redução de impacto ambiental",
                "Suporte técnico especializado para grandes obras",
                "Entrega rápida e segura para toda a região"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-gray-100 text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
              Conheça Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <Products />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
