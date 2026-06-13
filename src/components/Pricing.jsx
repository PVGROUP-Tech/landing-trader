import { CheckCircle, ArrowRight } from "lucide-react";

export default function Pricing() {
  const affiliateLink = "https://sun.eduzz.com/Q9N23Y2D01?a=79549756";

  const benefits = [
    { title: "Suporte dedicado", desc: "Equipe pronta para te ajudar sempre." },
    { title: "Acesso ilimitado", desc: "Entre quando quiser, sem restrições." },
    { title: "Atualizações diárias", desc: "Conteúdo novo todos os dias." },
    { title: "100% online", desc: "Acompanhe tudo pelo celular ou computador." },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Glow central */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Texto lateral */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Uma renda que trabalha por você <br />
            mesmo quando você não está.
          </h2>
          <p className="text-zinc-400 mt-6 text-lg max-w-xl">
            Na sala <span className="text-[#D4AF37] font-semibold">Ultra PRO</span>, você terá acesso a estratégias validadas aplicadas diariamente por traders experientes.
          </p>

          {/* Benefícios */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={22} className="text-[#D4AF37]" />
                  <h3 className="text-white font-semibold">{b.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card de preço */}
        <div className="bg-gradient-to-b from-[#111111] to-black border border-[#D4AF37]/30 rounded-[32px] p-12 shadow-2xl text-center">
          <span className="inline-block px-6 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold mb-6">
            INVESTIMENTO MENSAL
          </span>

          {/* Preço */}
          <div className="flex justify-center items-end gap-2 mb-4">
            <span className="text-[#D4AF37] text-3xl font-bold">R$</span>
            <span className="text-white text-7xl font-extrabold drop-shadow-lg">
              169,00
            </span>
          </div>
          <p className="text-zinc-400 text-lg">ou 12x R$16,90 no cartão</p>

          {/* Botão */}
          <div className="mt-14">
            <a
              href={affiliateLink}
              // target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F5D76E] text-black font-bold px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50 text-lg"
            >
              QUERO ENTRAR AGORA
              <ArrowRight size={24} />
            </a>
            <p className="text-zinc-500 text-sm mt-6">
              Acesso imediato após a confirmação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
