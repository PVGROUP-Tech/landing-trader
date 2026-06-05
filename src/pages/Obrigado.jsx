export default function Obrigado() {
  const handleContinue = () => {
    window.location.href =
      "https://ultra.sheiktraderpro.com/?utm_source=sidebar";
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-10 text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-white text-4xl font-bold mb-4">
          Cadastro realizado!
        </h1>

        <p className="text-zinc-400 mb-8">
          Seus dados foram recebidos com sucesso.
          Clique abaixo para continuar.
        </p>

        <button
          onClick={handleContinue}
          className="w-full bg-[#D4AF37] hover:bg-[#F5D76E] text-black font-bold py-4 rounded-xl transition-all"
        >
          Acessar Comunidade
        </button>
      </div>
    </div>
  );
}