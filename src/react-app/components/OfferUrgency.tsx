import { Clock, Users, Zap, ArrowRight } from 'lucide-react';

export default function OfferUrgency() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Urgency indicator */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-600/30 to-red-700/30 border border-red-500/40 rounded-full px-6 py-3 mb-6">
              <Clock className="w-5 h-5 text-red-400 mr-2" />
              <span className="font-semibold text-red-300">OFERTA VÁLIDA ENQUANTO HOUVER VAGAS</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Apenas <span className="text-amber-400">6.000 Kz</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Investimento único para acesso vitalício ao método completo
            </p>
          </div>

          {/* Price comparison */}
          <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-3xl p-8 md:p-12 border border-amber-600/20 mb-12">
            <div className="text-center mb-8">
              <div className="text-gray-400 text-xl line-through mb-2">Valor normal: 15.000 Kz</div>
              <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">6.000 Kz</div>
              <div className="text-gray-300">Mais de 60% de desconto • Somente hoje</div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-600/20">
                <Zap className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-2">Acesso Imediato</div>
                <div className="text-gray-400 text-sm">Receba o e-book agora mesmo</div>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-600/20">
                <Users className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-2">Grupo Exclusivo</div>
                <div className="text-gray-400 text-sm">Acesso ao grupo de novos alunos</div>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-600/20">
                <ArrowRight className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-2">Sem Mensalidades</div>
                <div className="text-gray-400 text-sm">Pagamento único, acesso perpétuo</div>
              </div>
            </div>
          </div>

          {/* Scarcity element */}
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-6 border border-red-600/30 mb-12">
            <div className="flex items-center justify-center text-center">
              <Users className="w-6 h-6 text-red-400 mr-3" />
              <p className="text-red-300 font-semibold">
                Restam apenas 27 vagas no grupo de novos alunos desta semana
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-6 px-12 rounded-full text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-600/25 mb-6 w-full md:w-auto">
              GARANTIR MEU ACESSO AGORA - 6.000 KZ
            </button>

            <p className="text-gray-400 text-sm mb-8">
              ✓ Pagamento 100% seguro • ✓ Acesso imediato • ✓ Sem taxas extras
            </p>

            <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-2xl p-6 border border-amber-600/20">
              <p className="text-gray-300">
                <strong className="text-amber-300">Lembre-se:</strong> O conhecimento que você vai adquirir 
                pode gerar muito mais que 6.000 Kz já no primeiro mês. 
                Este é um investimento que se paga sozinho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
