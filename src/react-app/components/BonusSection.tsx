import { Gift, Wrench, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BonusSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('bonus');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="bonus" className="py-20 bg-gradient-to-b from-[#030b11] to-[#0d0d34]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center bg-gradient-to-r from-[#774d3b]/20 to-[#2d201c]/20 border border-[#774d3b]/40 rounded-full px-6 py-3 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Gift className="w-6 h-6 text-[#774d3b] mr-2" />
            <span className="font-semibold text-[#774d3b] tracking-wider">BÔNUS EXCLUSIVO</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Receba <span className="text-[#774d3b]">Gratuitamente</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Material extra para acelerar ainda mais seus resultados
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-[#774d3b] to-[#2d201c] mx-auto mt-6 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 p-8 md:p-12 rounded-3xl border border-[#774d3b]/30 hover:border-[#774d3b]/50 transition-all duration-500 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute right-0 top-0 w-1/4 h-full opacity-10">
                <img 
                  src="https://mocha-cdn.com/0198a87f-7fca-70d7-968f-f020f37ba8d2/home-office-workspace.jpg" 
                  alt="Workspace Tools" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bonus Tag */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-[#774d3b] to-[#2d201c] text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-pulse">
                  GRÁTIS
                </div>
              </div>

              <div className="text-center relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#774d3b] to-[#2d201c] text-white mb-6">
                    <Wrench className="w-10 h-10" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Guia de Ferramentas Gratuitas Para Começar Hoje
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Lista completa das melhores ferramentas, apps e plataformas gratuitas que você precisa 
                  conhecer para implementar as estratégias do e-book. Tudo organizadoe testado para você 
                  começar imediatamente.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#030b11]/50 rounded-xl p-4 border border-[#774d3b]/20">
                    <BarChart3 className="w-8 h-8 text-[#774d3b] mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">20+ Ferramentas</h4>
                    <p className="text-gray-400 text-sm">Apps e plataformas essenciais</p>
                  </div>
                  <div className="bg-[#030b11]/50 rounded-xl p-4 border border-[#774d3b]/20">
                    <Gift className="w-8 h-8 text-[#774d3b] mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">100% Gratuitas</h4>
                    <p className="text-gray-400 text-sm">Nenhum investimento inicial</p>
                  </div>
                  <div className="bg-[#030b11]/50 rounded-xl p-4 border border-[#774d3b]/20">
                    <Wrench className="w-8 h-8 text-[#774d3b] mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Passo a Passo</h4>
                    <p className="text-gray-400 text-sm">Como usar cada ferramenta</p>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-500 line-through">Valor: 3.000 Kz</span>
                  <div className="text-4xl font-bold text-[#774d3b] mt-2">GRATUITO</div>
                  <p className="text-gray-400 mt-2">Incluso com seu e-book</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-[#774d3b]/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Total em Valor: <span className="text-[#774d3b]">3.000 Kz</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Material que vale mais de 3.000 Kz, totalmente gratuito para quem adquirir o e-book hoje
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-[#030b11]/50 rounded-xl p-6 border border-[#774d3b]/20">
                <div className="text-2xl font-bold text-white">E-book Principal</div>
                <div className="text-[#774d3b] font-semibold">Método Completo de Renda Extra</div>
              </div>
              <div className="bg-[#030b11]/50 rounded-xl p-6 border border-[#774d3b]/20">
                <div className="text-2xl font-bold text-white">Guia de Ferramentas</div>
                <div className="text-[#774d3b] font-semibold">3.000 Kz Grátis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
