import { Shield, CheckCircle, Award, Users } from 'lucide-react';

export default function TrustGuarantee() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-900/30 to-amber-800/30 border border-amber-600/40 rounded-full px-6 py-3 mb-6">
              <Shield className="w-6 h-6 text-amber-400 mr-2" />
              <span className="font-semibold text-amber-300">GARANTIA DE CONFIANÇA</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa <span className="text-amber-400">Credibilidade</span> Fala Por Si
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Método testado e aprovado por centenas de leitores
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border border-amber-600/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Método Cientificamente Estruturado
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Baseado em estratégias reais de negócios e casos de sucesso documentados
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border border-amber-600/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Testado por Centenas de Pessoas
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Mais de 500 pessoas já aplicaram com sucesso as estratégias do método
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border border-amber-600/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Resultados Documentados
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    87% dos leitores relatam resultados positivos nos primeiros 30 dias
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border border-amber-600/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Conteúdo Premium
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Material de alta qualidade, direto ao ponto, sem enrolação
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 rounded-3xl p-8 md:p-12 border border-amber-600/30">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Nossa <span className="text-amber-400">Promessa</span> Para Você
              </h3>
              
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-2xl p-6 mb-8 border border-amber-600/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  "Este não é mais um e-book genérico. É um método prático, direto e honesto 
                  para quem quer resultados reais. Estamos tão confiantes na qualidade do conteúdo 
                  que centenas de pessoas já transformaram suas finanças seguindo exatamente 
                  estas estratégias."
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-600/20">
                  <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                  <p className="text-gray-300 font-medium">pessoas transformadas</p>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-600/20">
                  <div className="text-3xl font-bold text-amber-500 mb-2">87%</div>
                  <p className="text-gray-300 font-medium">de taxa de sucesso</p>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-600/20">
                  <div className="text-3xl font-bold text-amber-400 mb-2">120+</div>
                  <p className="text-gray-300 font-medium">páginas de conteúdo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
