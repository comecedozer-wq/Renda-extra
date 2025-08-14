import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    text: "Em dois meses consegui uma renda extra de 15.000 Kz mensais. O método é direto e funciona mesmo para quem não tem experiência."
  },
  {
    name: "Ana Fernandes",
    text: "Finalmente encontrei algo que realmente ensina. Não são promessas vazias, são estratégias que aplicei e deram resultado."
  },
  {
    name: "Miguel Santos",
    text: "Estava cético, mas o método me surpreendeu. Em 3 semanas já estava ganhando mais de 8.000 Kz extras por mês."
  },
  {
    name: "Joana Silva",
    text: "O que mais gostei foi a clareza das explicações. Tudo muito bem detalhado, consegui aplicar sem dificuldades."
  },
  {
    name: "Roberto Lima",
    text: "Tentei várias formas de renda extra antes, mas esta foi a única que realmente funcionou. Recomendo sem hesitar."
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quem Já <span className="text-amber-400">Transformou</span> a Vida Financeira
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de pessoas que aplicaram o método
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-600 pt-4">
                <p className="font-semibold text-white group-hover:text-amber-300 transition-colors duration-300">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-2xl p-8 border border-amber-600/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Mais de <span className="text-amber-400">500 pessoas</span> já transformaram suas finanças
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Cada depoimento representa uma vida financeira transformada. Qual será a sua história de sucesso?
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-600/25">
              Começar Minha Transformação Financeira
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
