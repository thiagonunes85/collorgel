import { motion } from "framer-motion";
import { Layers, ArrowRight, PaintBucket, Home } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const Products = () => {
  const products = [
    {
      title: "Tintas Imobiliárias",
      description: "Cores vivas e alta durabilidade para renovar sua casa. Acabamento perfeito e proteção contra intempéries.",
      icon: Home,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      img: "https://images.unsplash.com/photo-Fe3t_dU_KTPg?auto=format&fit=crop&q=80"
    },
    {
      title: "Tintas Industriais",
      description: "Soluções robustas para proteção e acabamento em superfícies metálicas, pisos e maquinários.",
      icon: Layers,
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-50",
      img: "https://images.unsplash.com/photo-G6ncYLp862z?auto=format&fit=crop&q=80"
    },
    {
      title: "Esmaltes e Complementos",
      description: "Vernizes, seladores, massas e esmaltes sintéticos para um acabamento profissional em qualquer projeto.",
      icon: PaintBucket,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      img: "https://images.unsplash.com/photo-GPb8TAR72gr?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossas Linhas de Produtos</h2>
          <p className="text-lg text-muted-foreground">
            Do lar acolhedor às grandes indústrias, a Collorgel tem a fórmula certa para cada necessidade.
            Qualidade que você vê, durabilidade que você confia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="h-64 relative overflow-hidden">
                <ImageWithFallback
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${product.bg} p-3 rounded-2xl`}>
                    <product.icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Saiba Mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
