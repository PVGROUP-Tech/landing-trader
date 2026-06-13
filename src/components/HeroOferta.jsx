import React from "react";
import { trackCheckout, trackViewContent } from "../lib/pixel";

const AFFILIATE_LINK = "https://sun.eduzz.com/Q9N23Y2D01?a=79549756";

export default function Hero() {
  const handleCheckout = () => {
    trackCheckout();

    setTimeout(() => {
      window.location.href = AFFILIATE_LINK;
    }, 300);
  };

  return (
    <section className="relative min-h-screen bg-[#000000] text-white flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-16 py-24 sm:py-32">
      {/* Brilhos de Fundo (Glow Dourado do modelo) */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFC72C] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-[#FFC72C] opacity-[0.06] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        {/* Coluna da Esquerda: Textos e CTA (Ocupa 7 colunas de 12) */}
        <div className="lg:col-span-7 flex flex-col space-y-8 max-w-2xl mx-auto lg:mx-0 text-left">
          {/* Badge Superior */}
          <div className="inline-flex items-center space-x-2 bg-[#111111] border border-[#FFC72C]/30 px-4 py-2 rounded-md w-fit">
            <span className="w-2 h-2 rounded-full bg-[#FFC72C] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#FFC72C]">
              • Comunidade Exclusiva
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.05] text-white">
            Pare de depender <br className="hidden sm:inline" />
            de outros para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC72C] via-[#FFE885] to-[#C59B27]">
              prosperar.
            </span>
          </h1>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg sm:text-xl text-[#EEEEEE] font-bold tracking-wide leading-relaxed">
              Assuma o controle das suas operações e conquiste sua{" "}
              <span className="text-[#FFC72C] underline decoration-[#FFC72C]/40 decoration-2 underline-offset-4">
                liberdade financeira.
              </span>
            </p>
            <p className="text-base text-[#AAAAAA] font-medium leading-relaxed">
              Receba análises, sinais e estratégias em tempo real diretamente no{" "}
              <span className="text-[#25D366] font-bold">WhatsApp</span>.
            </p>
          </div>

          {/* Lista de Benefícios - Ícones mais visíveis e maior espaçamento */}
          <ul className="space-y-4 pt-2">
            {[
              "Análises de Mercado Diariamente",
              "Sinais em tempo real",
              "Comunidade exclusiva",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 text-base font-semibold text-[#DDDDDD]"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FFC72C]/10 border border-[#FFC72C]/40 flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-[#FFC72C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Botão de Ação (CTA) - Estilo bloco largo e pesado de conversão */}
          <div className="pt-4">
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#FFC72C] to-[#C59B27] text-black font-black text-base uppercase tracking-wider rounded-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_30px_rgba(255,199,44,0.25)] flex items-center justify-center space-x-3 group"
            >
              <span>Quero Entrar Agora</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform stroke-[3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="
      relative
      w-[320px]
      h-[570px]
      rounded-[32px]
      overflow-hidden
      border
      border-[#FFC72C]/20
      shadow-[0_0_50px_rgba(255,199,44,0.15)]
    "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFC72C]/5 to-transparent z-10 pointer-events-none" />

            {/* Vídeo */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/vo3L3BF5igI?autoplay=1&mute=1&loop=1&playlist=vo3L3BF5igI"
              title="Golden Trader"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
