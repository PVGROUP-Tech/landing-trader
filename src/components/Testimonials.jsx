const testimonials = [
  { image: "../images" },
  { image: "/images/andre.jpg" },
  { image: "/images/fernando.jpg" },
  { image: "/images/maria.jpg" },
  { image: "/images/joao.jpg" },
];

export default function TestimonialsPhotosOnly() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        Cabeçalho
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium tracking-widest">
            RESULTADOS REAIS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            O que os membros conquistaram
          </h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Veja alguns dos resultados alcançados por quem já faz parte da comunidade.
          </p>
        </div>

        {/* Carrossel de fotos */}
        <div className="flex gap-10 overflow-x-auto pb-6 scrollbar-hide">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={`Aluno ${index + 1}`}
                className="w-40 h-40 rounded-full border-2 border-[#D4AF37] object-cover shadow-lg hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
