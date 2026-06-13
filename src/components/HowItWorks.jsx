import {
  UserPlus,
  MessageCircle,
  TrendingUp,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Faça sua inscrição",
    description: "Garanta seu acesso à comunidade exclusiva.",
  },
  {
    icon: MessageCircle,
    title: "Entre na sala",
    description: "Receba acesso imediato pelo WhatsApp.",
  },
  {
    icon: TrendingUp,
    title: "Receba os sinais",
    description: "Acompanhe análises e oportunidades em tempo real.",
  },
  {
    icon: Trophy,
    title: "Execute as operações",
    description: "Siga as estratégias e acompanhe os resultados.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0A0A0A] py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-medium tracking-widest">
            COMO FUNCIONA
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Comece em poucos minutos
          </h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Um processo simples para você começar a acompanhar o mercado com mais confiança.
          </p>
        </div>

        {/* Grid de passos */}
        <div className="grid lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8 h-full shadow-lg hover:shadow-[#D4AF37]/30 transition">
                  
                  {/* Ícone */}
                  <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 to-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
                    <Icon size={30} />
                  </div>

                  {/* Passo */}
                  <div className="text-[#D4AF37] text-sm font-bold mb-2 tracking-wide">
                    PASSO {index + 1}
                  </div>

                  {/* Título */}
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Linha de conexão */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-12 h-[2px] bg-[#D4AF37]/40" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
