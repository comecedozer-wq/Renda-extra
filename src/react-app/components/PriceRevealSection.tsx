import { DollarSign, TrendingUp, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PriceRevealSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowPrice(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('price-reveal');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="price-reveal" className="py-20 bg-gradient-to-b from-[#0d0d34] to-[#030b11]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Value Proposition First */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Qual o <span className="text-[#774d3b]">Valor</span> da Sua Independência Financeira?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#774d3b] to-[#2d201c] mx-auto mb-12"></div>
            
            <div className="bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 rounded-3xl p-8 md:p-12 border border-[#774d3b]/30 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-15">
                <img 
                  src="https://mocha-cdn.com/0198a87f-7fca-70d7-968f-f020f37ba8d2/home-office-workspace.jpg" 
                  alt="Professional Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Pense no valor das técnicas e estratégias que <span className="text-[#774d3b] font-semibold">
                já renderam milhares de Kz</span> para quem aplicou...
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Métodos Comprovados</h3>
                  <p className="text-gray-400">Estratégias testadas por centenas de pessoas</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Retorno Garantido</h3>
                  <p className="text-gray-400">O investimento se paga no primeiro mês</p>
                </div>
              </div>

              <p className="text-lg text-gray-300">
                Conteúdo que normalmente custaria <span className="text-white font-bold">milhares de Kz</span> em 
                cursos e consultorias especializadas...
              </p>
              </div>
            </div>
          </div>

          {/* Price Reveal */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-3xl p-12 border border-[#774d3b]/40">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Mas hoje, seu investimento é de apenas:
              </h3>
              
              <div className={`transition-all duration-1000 ${showPrice ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="mb-6">
                  <span className="text-gray-500 text-2xl line-through">15.000 Kz</span>
                </div>
                <div className="text-6xl md:text-7xl font-bold text-[#774d3b] mb-4">
                  6.000 Kz
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Investimento único • Acesso vitalício ao método completo
                </p>
              </div>

              <div className="bg-[#030b11]/50 rounded-2xl p-6 border border-[#774d3b]/20">
                <h4 className="text-xl font-bold text-white mb-4">Vamos colocar em perspectiva:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-sm">Um jantar para dois</p>
                    <p className="text-white font-bold">±8.000 Kz</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Uma noite no cinema</p>
                    <p className="text-white font-bold">±4.000 Kz</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Este método que pode mudar sua vida</p>
                    <p className="text-[#774d3b] font-bold">6.000 Kz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Justification */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-r from-[#030b11]/50 to-[#0d0d34]/50 rounded-2xl p-8 border border-[#774d3b]/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#774d3b] mr-3" />
                  <div>
                    <p className="text-white font-semibold">Acesso Imediato</p>
                    <p className="text-gray-400 text-sm">Receba agora mesmo</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#774d3b] mr-3" />
                  <div>
                    <p className="text-white font-semibold">Grupo Exclusivo</p>
                    <p className="text-gray-400 text-sm">Suporte e networking</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#774d3b] mr-3" />
                  <div>
                    <p className="text-white font-semibold">Sem Mensalidades</p>
                    <p className="text-gray-400 text-sm">Pagamento único</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
