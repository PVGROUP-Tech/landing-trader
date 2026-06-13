import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Preciso ter experiência?",
    answer:
      "Não. O conteúdo é estruturado para atender tanto iniciantes quanto pessoas com experiência no mercado.",
  },
  {
    question: "Como recebo os sinais?",
    answer:
      "Após a confirmação do acesso, você receberá as instruções para entrar na comunidade e acompanhar as operações.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. Todo o acompanhamento pode ser feito diretamente pelo smartphone.",
  },
  
];

export default function FAQPremium() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#0A0A0A] py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Perguntas Frequentes
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Tire suas dúvidas antes de começar a operar com a comunidade.
          </p>
        </div>

        {/* Lista de perguntas */}
        <div className="space-y-6 border-l-2 border-[#D4AF37]/40 pl-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#111111] to-black border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 transition"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-semibold text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`text-[#D4AF37] transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`px-6 pb-6 text-zinc-400 transition-all duration-500 ${
                  open === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

