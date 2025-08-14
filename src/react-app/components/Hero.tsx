import { ChevronDown, Lock, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-400 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Content */}
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
          {/* Exclusivity badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600/20 to-amber-500/20 border border-amber-600/40 rounded-full px-6 py-3 mb-8">
            <Lock className="w-5 h-5 text-amber-400 mr-2" />
            <span className="font-semibold text-amber-300 text-sm">ACESSO EXCLUSIVO • CONTEÚDO RESTRITO</span>
          </div>

          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            O <span className="text-amber-400">Segredo</span> da Renda Extra
            <span className="block text-amber-300 mt-2">Que Ninguém Quer</span>
            <span className="block text-white">Que Você Saiba</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Método direto e comprovado para criar novas fontes de renda, mesmo começando do zero
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-600/25">
              Garantir Meu Acesso Agora - Apenas 6.000 Kz
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
              <span>Método Testado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
              <span>Resultados Comprovados</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Visual Element - Money/Charts Illustration */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-2xl border border-amber-600/20">
              <div className="text-center">
                <TrendingUp className="w-24 h-24 text-amber-400 mx-auto mb-6" />
                <div className="text-4xl font-bold text-white mb-2">6.000 Kz</div>
                <div className="text-amber-300 font-semibold mb-4">Investimento Único</div>
                <div className="text-gray-300 text-sm">Acesso Vitalício ao Método</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}
