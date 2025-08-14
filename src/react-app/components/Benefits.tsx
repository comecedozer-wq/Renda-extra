import { Zap, Heart, Smile, Target, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Mais Energia no Dia a Dia",
    description: "Sinta-se mais disposto e produtivo, sem aquela sensação de cansaço constante",
    color: "text-yellow-500"
  },
  {
    icon: Heart,
    title: "Melhore sua Saúde Cardiovascular", 
    description: "Reduza riscos de doenças cardíacas e melhore sua pressão arterial naturalmente",
    color: "text-red-500"
  },
  {
    icon: Smile,
    title: "Autoestima Renovada",
    description: "Olhe no espelho com orgulho e vista as roupas que sempre quis usar",
    color: "text-purple-500"
  },
  {
    icon: Target,
    title: "Foco e Disciplina",
    description: "Desenvolva hábitos saudáveis que se estendem para todas as áreas da vida",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "Método Eficiente",
    description: "Resultados em 30 dias com apenas 30 minutos por dia de dedicação",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Sustentável a Longo Prazo",
    description: "Aprenda a manter os resultados sem efeito sanfona ou dietas restritivas",
    color: "text-orange-500"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Os <span className="text-green-600">Benefícios</span> Que Você Vai Conquistar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Muito mais do que perder peso. Transforme sua vida completamente.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 h-full">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Resultados Que Você Pode <span className="text-green-600">Confiar</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">87%</div>
                <p className="text-gray-700">Relataram mais energia</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">92%</div>
                <p className="text-gray-700">Melhoraram a autoestima</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-gray-700">Conseguiram manter os resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
