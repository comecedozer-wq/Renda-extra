import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marina Silva",
    text: "Em 30 dias perdi 8kg e o mais importante: aprendi a me alimentar de verdade. Não é mais uma dieta, virou meu estilo de vida."
  },
  {
    name: "Carlos Roberto",
    text: "Tentei tudo antes deste método. Finalmente encontrei algo que funciona na correria do dia a dia. Perdi 12kg e mantenho há 6 meses."
  },
  {
    name: "Ana Beatriz",
    text: "O que mais me impressionou foi como o método é realista. Nada de passar fome ou exercícios impossíveis. Resultado: -10kg em 30 dias."
  },
  {
    name: "Felipe Santos",
    text: "Estava cético, mas decidi tentar. Melhor decisão que tomei. Não só emagreci 9kg, como ganhei muito mais disposição para trabalhar."
  },
  {
    name: "Juliana Costa",
    text: "Depois de 3 filhos, achei que nunca mais voltaria ao meu peso ideal. Este método me provou o contrário. Obrigada por me devolver minha autoestima!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quem Já <span className="text-green-600">Transformou</span> a Vida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que aplicaram o Método Direto
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-green-400 group-hover:text-green-500 transition-colors duration-300" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              Mais de <span className="text-green-600">10.000 pessoas</span> já transformaram suas vidas
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Cada depoimento representa uma vida transformada. Qual será a sua história de sucesso?
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Começar Minha Transformação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
