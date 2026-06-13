import { TrendingUp, Smartphone, ShieldCheck, Users } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { trackCheckout } from "../lib/pixel";
import Autoplay from "embla-carousel-autoplay";

const benefits = [
  {
    icon: TrendingUp,
    title: "Sinais em Tempo Real",
    description: "Receba oportunidades de mercado enquanto elas acontecem.",
  },
  {
    icon: Smartphone,
    title: "Acesso pelo Celular",
    description: "Tudo diretamente no WhatsApp de forma rápida e prática.",
  },
  {
    icon: ShieldCheck,
    title: "Gestão de Risco",
    description: "Estratégias focadas em consistência e proteção de capital.",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Troque experiências com outros membros diariamente.",
  },
];

const prints = [
  "/images/resultado-trade-1.webp",
  "/images/resultado-trade-2.webp",
  "/images/resultado-trade-3.webp",
  "/images/resultado-trade-4.webp",
];

export default function BenefitsVerticalPremium() {
  const AFFILIATE_LINK = "https://sun.eduzz.com/Q9N23Y2D01?a=79549756";

  const handleCheckout = () => {
    trackCheckout();

    setTimeout(() => {
      window.location.href = AFFILIATE_LINK;
    }, 300);
  };

  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium tracking-widest">
            BENEFÍCIOS EXCLUSIVOS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6">
            Tudo que você precisa para acompanhar o mercado
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Uma estrutura completa para quem busca acompanhamento e informações
            estratégicas.
          </p>
        </div>

        {/* Benefícios */}
        <div className="relative border-l-2 border-[#D4AF37]/40 pl-10 space-y-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div key={index} className="flex items-start gap-6 group">
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 to-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition">
                  <Icon size={32} />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#D4AF37] transition">
                    {benefit.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resultados */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="inline-block px-6 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium tracking-widest">
              RESULTADOS REAIS
            </span>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mt-6">
              Veja o que acontece dentro da comunidade
            </h3>

            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              Exemplos de análises, oportunidades e conteúdos compartilhados
              diariamente.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {prints.map((print, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div
                    className="
                      overflow-hidden
                      rounded-3xl
                      border
                      border-[#D4AF37]/20
                      bg-[#111111]
                      shadow-xl
                    "
                  >
                    <img
                      src={print}
                      alt={`Resultado ${index + 1}`}
                      className="
                        w-full
                        h-[650px]
                        object-contain
                        bg-[#111111]
                        transition
                        duration-500
                        hover:scale-105
                      "
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={handleCheckout}
            className="inline-flex bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[#D4AF37]/50 transition"
          >
            Comece a aproveitar todos esses benefícios hoje mesmo
          </button>
        </div>
      </div>
    </section>
  );
}
