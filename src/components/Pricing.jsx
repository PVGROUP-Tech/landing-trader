import { CheckCircle, ArrowRight } from "lucide-react";

export default function Pricing() {
  const affiliateLink = "https://sun.eduzz.com/Q9N23Y2D01?a=79549756";

  const benefits = [
    {
      title: "Suporte dedicado",
      desc: "Equipe pronta para te ajudar sempre.",
    },
    {
      title: "Acesso ilimitado",
      desc: "Entre quando quiser, sem restrições.",
    },
    {
      title: "Atualizações diárias",
      desc: "Conteúdo novo todos os dias.",
    },
    {
      title: "100% online",
      desc: "Acompanhe tudo pelo celular ou computador.",
    },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-24 overflow-hidden">
      {/* Glow central */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto lateral */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Uma renda que trabalha por você
            <br />
            mesmo quando você não está.
          </h2>

          <p className="text-zinc-400 mt-6 text-base sm:text-lg max-w-xl leading-relaxed">
            Na sala{" "}
            <span className="text-[#D4AF37] font-semibold">Ultra PRO</span>,
            você terá acesso a estratégias validadas aplicadas diariamente por
            traders experientes.
          </p>

          {/* Benefícios */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="
                  bg-[#111111]
                  border
                  border-[#D4AF37]/20
                  rounded-xl
                  p-5
                  hover:border-[#D4AF37]/40
                  transition
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle
                    size={22}
                    className="text-[#D4AF37] flex-shrink-0"
                  />

                  <h3 className="text-white font-semibold">{b.title}</h3>
                </div>

                <p className="text-zinc-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card de preço */}
        <div
          className="
            bg-gradient-to-b
            from-[#111111]
            to-black
            border
            border-[#D4AF37]/30
            rounded-[32px]
            p-6
            sm:p-8
            lg:p-12
            shadow-2xl
            text-center
          "
        >
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-[#D4AF37]/10
              text-[#D4AF37]
              text-xs
              sm:text-sm
              font-semibold
              mb-6
            "
          >
            INVESTIMENTO MENSAL
          </span>

          {/* Preço */}
          <div className="flex justify-center items-end gap-2 mb-4 flex-wrap">
            <span className="text-[#D4AF37] text-2xl sm:text-3xl font-bold">
              R$
            </span>

            <span
              className="
                text-white
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-extrabold
                drop-shadow-lg
                leading-none
              "
            >
              169,00
            </span>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg">
            ou 12x de R$16,90 no cartão
          </p>

          {/* CTA */}
          <div className="mt-10 sm:mt-12">
            <a
              href={affiliateLink}
              rel="noreferrer"
              className="
                w-full
                sm:w-auto
                inline-flex
                justify-center
                items-center
                gap-3
                bg-[#D4AF37]
                hover:bg-[#F5D76E]
                text-black
                font-bold
                px-8
                sm:px-12
                py-5
                rounded-xl
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
                hover:shadow-[#D4AF37]/50
                text-base
                sm:text-lg
              "
            >
              QUERO ENTRAR AGORA
              <ArrowRight size={22} />
            </a>

            <p className="text-zinc-500 text-sm mt-5">
              Acesso imediato após a confirmação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
