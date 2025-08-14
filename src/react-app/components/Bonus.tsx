import { Gift, ChefHat, Calendar } from 'lucide-react';

const bonuses = [
  {
    icon: ChefHat,
    title: "Guia de Receitas Express",
    description: "30 receitas saudáveis para preparar em menos de 15 minutos",
    value: "R$ 47",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Planner de Treinos 30 Dias",
    description: "Cronograma completo de exercícios adaptáveis para iniciantes e avançados",
    value: "R$ 37",
    color: "from-green-500 to-blue-500"
  }
];

export default function Bonus() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 rounded-full px-6 py-3 mb-6">
            <Gift className="w-6 h-6 text-orange-600 mr-2" />
            <span className="font-semibold text-orange-800">BÔNUS EXCLUSIVOS</span>
          </div>
          
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Receba <span className="text-orange-500">Gratuitamente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Materiais extras para acelerar ainda mais seus resultados
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Bonus Tag */}
                  <div className="absolute -top-3 -right-3">
                    <div className={`bg-gradient-to-r ${bonus.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      GRÁTIS
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${bonus.color} text-white`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                      {bonus.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {bonus.description}
                    </p>

                    <div className="text-center">
                      <span className="text-2xl font-bold text-gray-400 line-through">{bonus.value}</span>
                      <div className="text-3xl font-bold text-green-600 mt-2">GRATUITO</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Total em Bônus: <span className="text-green-600">R$ 84</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Materiais que valem mais de R$ 80, totalmente gratuitos para quem adquirir o e-book hoje
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-gray-900">E-book Principal</div>
                <div className="text-green-600 font-semibold">Método Completo</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-gray-900">Guia de Receitas</div>
                <div className="text-orange-500 font-semibold">R$ 47 Grátis</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-gray-900">Planner de Treinos</div>
                <div className="text-blue-500 font-semibold">R$ 37 Grátis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
