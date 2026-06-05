import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";
import { FaChartLine, FaUsers, FaMobileAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema } from "../schemas/leadSchema";
import { formatPhone } from "../utils/formatPhone";
import { Controller } from "react-hook-form";

function Benefit({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
        {icon}
      </div>

      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-zinc-400 text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
  try {
    const { error } = await supabase
      .from("leads")
      .insert([data]);

    if (error) throw error;

    toast.success("Cadastro realizado com sucesso!");
    setTimeout(() => {
      navigate("/obrigado");
    }, 1000);

  } catch (error) {
    toast.error("Erro ao enviar formulário.");
    console.error(error);
  }
};

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm">
                Comunidade Exclusiva
              </span>
            </div>

            <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
              Acompanhe o mercado com quem opera todos os dias.
            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
              Receba análises, oportunidades e conteúdos exclusivos em uma
              comunidade focada em mercado financeiro.
            </p>

            <div className="grid gap-6 mt-10">
              <Benefit
                icon={<FaChartLine />}
                title="Análises de Mercado"
                text="Acompanhe oportunidades e movimentos relevantes."
              />

              <Benefit
                icon={<FaUsers />}
                title="Comunidade Exclusiva"
                text="Participe de discussões e conteúdos estratégicos."
              />

              <Benefit
                icon={<FaMobileAlt />}
                title="Atualizações em Tempo Real"
                text="Receba informações diretamente no seu celular."
              />
            </div>
          </div>

          {/* Formulário */}
          <div>
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-white text-2xl font-bold mb-2">
                Solicite seu acesso
              </h2>

              <p className="text-zinc-400 mb-8">
                Preencha seus dados para conhecer a comunidade.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Nome */}
                <div>
                  <input
                    {...register("nome")}
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-[#1A1A1A] border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none transition-colors focus:border-[#D4AF37]"
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full bg-[#1A1A1A] border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none transition-colors focus:border-[#D4AF37]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
<div>
  <Controller
    name="whatsapp"
    control={control}
    render={({ field }) => (
      <input
        {...field}
        type="tel"
        placeholder="WhatsApp"
        value={field.value || ""}
        onChange={(e) => field.onChange(formatPhone(e.target.value))}
        className="w-full bg-[#1A1A1A] border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none transition-colors focus:border-[#D4AF37]"
      />
    )}
  />
  {errors.whatsapp && (
    <p className="text-red-500 text-sm mt-2">{errors.whatsapp.message}</p>
  )}
</div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#F5D76E] text-black font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Quero conhecer a comunidade"}
                </button>
              </form>

              <p className="text-xs text-zinc-500 mt-6 text-center">
                Ao preencher seus dados você concorda em receber comunicações
                relacionadas ao mercado financeiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
