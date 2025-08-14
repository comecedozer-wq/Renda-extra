import { CheckCircle, Shield, Target } from 'lucide-react';

export default function SolutionPresentation() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A <span className="text-amber-400">Solução</span> Definitiva
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um método direto, prático e comprovado para criar novas fontes de renda
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-3xl p-8 md:p-12 border border-amber-600/20 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                "O Segredo da Renda Extra"
              </h3>
              <p className="text-lg text-gray-300">
                O método que centenas de pessoas já usaram para criar renda extra consistente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-3">Método Direto</h4>
                <p className="text-gray-400 text-sm">
                  Sem enrolação. Passos claros e objetivos para aplicar imediatamente.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-3">Comprovado</h4>
                <p className="text-gray-400 text-sm">
                  Testado por centenas de pessoas reais com resultados documentados.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-3">Para Iniciantes</h4>
                <p className="text-gray-400 text-sm">
                  Mesmo começando do zero, você terá todas as ferramentas necessárias.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-2xl p-8 border border-amber-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Não É Sobre <span className="text-amber-400">Promessas Impossíveis</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                É sobre ter um sistema confiável que funciona no mundo real. 
                Este e-book revela exatamente como construir fontes de renda extra 
                de forma consistente e profissional, usando estratégias que poucos conhecem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
