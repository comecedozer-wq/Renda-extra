import { Shield, CheckCircle2, Award, TrendingUp } from 'lucide-react';

const guaranteePoints = [
  {
    icon: Shield,
    title: "Método Cientificamente Comprovado",
    description: "Baseado em estudos reais sobre perda de peso sustentável e metabolismo"
  },
  {
    icon: CheckCircle2,
    title: "Testado por Milhares",
    description: "Mais de 10.000 pessoas já aplicaram com sucesso o Método Direto"
  },
  {
    icon: Award,
    title: "Resultados Documentados",
    description: "95% dos usuários relatam resultados visíveis nos primeiros 15 dias"
  },
  {
    icon: TrendingUp,
    title: "Método Sustentável",
    description: "87% mantêm os resultados após 6 meses, sem efeito sanfona"
  }
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 rounded-full px-6 py-3 mb-6">
            <Shield className="w-6 h-6 text-green-600 mr-2" />
            <span className="font-semibold text-green-800">GARANTIA DE QUALIDADE</span>
          </div>
          
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-green-600">Confiança</span> em Você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não prometemos milagres, prometemos um método que realmente funciona
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {guaranteePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Compromisso com Seus <span className="text-green-600">Resultados</span>
              </h3>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Estamos tão confiantes na eficácia do Método Direto que oferecemos nosso compromisso: 
                  se você seguir exatamente as orientações por 30 dias e não ver resultados significativos, 
                  nossa equipe de suporte irá revisar seu caso pessoalmente e ajustar o método para suas necessidades específicas."
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">30 dias</div>
                  <p className="text-gray-700 font-medium">de acompanhamento</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <p className="text-gray-700 font-medium">método científico</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">+10k</div>
                  <p className="text-gray-700 font-medium">pessoas transformadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
