import { Mail, Phone, MapPin, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-primary text-white">
              <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
              <p className="text-white/70 mb-12 text-lg">
                Preparado para dar cor ao seu projeto? Nossos especialistas estão aqui para ajudar você a encontrar a tinta perfeita.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase tracking-widest font-bold">E-mail</div>
                    <div className="text-lg font-medium">{COMPANY_INFO.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase tracking-widest font-bold">Telefone e WhatsApp</div>
                    <div className="text-lg font-medium">{COMPANY_INFO.contact.phone[0]}</div>
                    <div className="text-lg font-medium">{COMPANY_INFO.contact.phone[1]}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase tracking-widest font-bold">Endereço</div>
                    <div className="text-lg font-medium">{COMPANY_INFO.address.fullAddress}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Nome</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Telefone</label>
                    <input
                      type="tel"
                      className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Interesse</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all appearance-none">
                    <option>Tintas Imobiliárias</option>
                    <option>Tintas Industriais</option>
                    <option>Orçamento Geral</option>
                    <option>Parceria / Revenda</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                    placeholder="Olá, gostaria de um orçamento para..."
                  ></textarea>
                </div>

                <button className="w-full bg-cyan-500 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-cyan-600 shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]">
                  Enviar Mensagem <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
