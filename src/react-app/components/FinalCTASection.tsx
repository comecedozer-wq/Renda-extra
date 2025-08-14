import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FinalCTASection() {
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

    const element = document.getElementById('final-cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-[#030b11] via-[#0d0d34] to-[#060102] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#774d3b] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#774d3b] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#2d201c] rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Statement */}
          <div className={`inline-flex items-center bg-gradient-to-r from-[#774d3b]/20 to-[#2d201c]/20 border border-[#774d3b]/40 rounded-full px-6 py-3 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Shield className="w-5 h-5 text-[#774d3b] mr-2" />
            <span className="font-semibold text-[#774d3b] tracking-wider">MÉTODO TESTADO E APROVADO</span>
          </div>

          {/* Main Headline */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Sua Nova <span className="text-[#774d3b]">Realidade</span>
            <br />
            Financeira <span className="text-[#774d3b]">Começa Agora</span>
          </h2>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Não deixe mais um dia passar dependendo apenas do salário. 
            O método que transformou a vida de <span className="text-[#774d3b] font-semibold">centenas de pessoas</span> está aqui para você.
          </p>

          {/* Value proposition */}
          <div className={`bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 rounded-3xl p-8 mb-12 border border-[#774d3b]/30 transition-all duration-1200 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Renda Extra Garantida</h3>
                <p className="text-gray-300">Método testado e comprovado</p>
              </div>
              <div>
                <Star className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">120+ Páginas Premium</h3>
                <p className="text-gray-300">Conteúdo direto e aplicável</p>
              </div>
              <div>
                <ArrowRight className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Acesso Imediato</h3>
                <p className="text-gray-300">Comece hoje mesmo</p>
              </div>
            </div>
            </div>
          </div>

          {/* Price and CTA */}
          <div className={`mb-12 transition-all duration-1200 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <span className="text-gray-500 text-xl line-through">De 15.000 Kz</span>
              <div className="text-5xl md:text-6xl font-bold text-[#774d3b] mb-4">
                6.000 Kz
              </div>
              <p className="text-gray-300 text-lg">Investimento único • Acesso vitalício</p>
            </div>

            <a href="https://pay.kikoloonline.com/?p_id=689dcf98cac9bda54d999cb4" target="_blank" rel="noopener noreferrer">
  <button className="group btn-premium bg-gradient-to-r from-[#774d3b] to-[#2d201c] hover:from-[#2d201c] hover:to-[#774d3b] text-white font-bold py-6 px-12 rounded-full text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#774d3b]/30 mb-6 w-full md:w-auto animate-pulse">
    <span className="flex items-center justify-center">
      QUERO COMEÇAR MINHA RENDA EXTRA AGORA
      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </button>
</a>


            <p className="text-gray-400 text-sm">
              ✓ Pagamento 100% seguro • ✓ Acesso imediato • ✓ Sem mensalidades
            </p>
          </div>

          {/* Final motivation */}
          <div className={`bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-3xl p-8 md:p-12 border border-[#774d3b]/30 transition-all duration-1200 delay-1500 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-10">
              <img 
                src="https://mocha-cdn.com/0198a87f-7fca-70d7-968f-f020f37ba8d2/money-success.jpg" 
                alt="Financial Success" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Imagine-se daqui a 30 dias...
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Com uma renda extra consistente, maior segurança financeira e a liberdade 
              de não depender apenas do seu salário. Sua nova realidade financeira está 
              a um clique de distância.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#030b11]/50 rounded-xl p-4 border border-[#774d3b]/20">
                <h4 className="font-bold text-white mb-2">Hoje</h4>
                <p className="text-gray-400 text-sm">Dependendo apenas do salário</p>
              </div>
              <div className="bg-[#030b11]/50 rounded-xl p-4 border border-[#774d3b]/20">
                <h4 className="font-bold text-[#774d3b] mb-2">Em 30 dias</h4>
                <p className="text-gray-400 text-sm">Com múltiplas fontes de renda</p>
              </div>
            </div>
          </div>

          <div className={`mt-12 text-center transition-all duration-1200 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400">
              Mais de 500 pessoas já garantiram seu acesso. <span className="text-[#774d3b] font-semibold">E você, vai ficar de fora?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
