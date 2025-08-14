import { AlertTriangle, DollarSign } from 'lucide-react';

export default function ProblemIdentification() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A <span className="text-amber-400">Realidade</span> Que Ninguém Conta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 p-8 rounded-2xl border border-red-600/30 mb-8">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 mr-4 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-xl text-red-300 mb-4">O Problema Que Todos Enfrentam:</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>• Salário que não aumenta há anos</p>
                  <p>• Despesas que só crescem</p>
                  <p>• Medo de depender apenas do emprego</p>
                  <p>• Tentativas frustradas de "ganhar dinheiro online"</p>
                  <p>• Falta de um método claro e confiável</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 p-8 rounded-2xl border border-amber-600/30">
                <div className="flex items-start mb-4">
                  <DollarSign className="w-8 h-8 text-amber-400 mr-4 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-xl text-amber-300 mb-4">A Verdade Sobre Renda Extra:</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Não existe "dinheiro fácil", mas existe método inteligente.</p>
                  <p>As pessoas que conseguem não têm sorte - têm informação privilegiada.</p>
                  <p>A diferença está em saber exatamente COMO e ONDE aplicar seu tempo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-2xl border border-amber-600/20">
              <p className="text-lg text-gray-300 italic mb-4">
                "Se você continuar fazendo as mesmas coisas, vai continuar obtendo os mesmos resultados."
              </p>
              <p className="text-amber-300 font-semibold">
                É hora de aprender o que realmente funciona.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
