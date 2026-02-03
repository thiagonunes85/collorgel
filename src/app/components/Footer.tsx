import { Droplets, Twitter, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Droplets className="w-8 h-8 text-cyan-500" />
              <span className="text-xl font-bold tracking-tight">
                COLLOR<span className="text-cyan-500">GEL</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {COMPANY_INFO.slogan}
            </p>
            <div className="text-sm text-muted-foreground">
              <p>{COMPANY_INFO.address.street}</p>
              <p>{COMPANY_INFO.address.neighborhood}</p>
              <p>{COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}</p>
              <p>CNPJ: {COMPANY_INFO.cnpj}</p>
            </div>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Linha de Produtos</h4>
            <ul className="space-y-4 text-muted-foreground">
              {["Tintas Imobiliárias", "Tintas Industriais", "Complementos", "Texturas e Grafiatos", "Esmaltes Sintéticos"].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4 text-muted-foreground">
              {["Nossa Estória", "Sobre Nós", "Sustentabilidade", "Carreiras", "Investidores", "Notícias"].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-6 text-sm">
              Inscreva-se para receber as últimas atualizações sobre nossos produtos e ofertas exclusivas.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="email@exemplo.com.br"
                className="w-full bg-white border border-gray-200 py-4 px-6 rounded-xl focus:border-cyan-500 outline-none transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg font-bold text-sm">
                Entrar
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © {currentYear} {COMPANY_INFO.legalName}. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de Serviço</a>
            <a href="#" className="hover:text-primary">Cookies</a>
            <span className="opacity-50">Dev: @tnunesdacosta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
