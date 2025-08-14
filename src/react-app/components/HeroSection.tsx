import { ChevronDown, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('storytelling');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#030b11] via-[#0d0d34] to-[#060102] overflow-hidden flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://mocha-cdn.com/0198a87f-7fca-70d7-968f-f020f37ba8d2/hero-business-success.jpg" 
          alt="Professional Success" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030b11]/80 via-[#030b11]/60 to-[#030b11]/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#774d3b] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#774d3b] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#2d201c] rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Exclusivity badge */}
          <div className={`inline-flex items-center bg-gradient-to-r from-[#774d3b]/20 to-[#2d201c]/20 border border-[#774d3b]/40 rounded-full px-8 py-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-3 h-3 bg-[#774d3b] rounded-full mr-3 animate-pulse"></div>
            <span className="font-semibold text-[#774d3b] text-sm tracking-wider">ACESSO EXCLUSIVO • CONTEÚDO RESTRITO</span>
          </div>

          {/* Main headline */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Existe um método real de
            <span className="block text-transparent bg-gradient-to-r from-[#774d3b] to-[#2d201c] bg-clip-text mt-4">
              renda extra
            </span>
            <span className="block text-white text-3xl md:text-4xl lg:text-5xl mt-6 font-normal">
              que não está nos anúncios
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Descubra o método que centenas de pessoas já usaram para criar 
            <span className="text-[#774d3b] font-semibold"> fontes de renda consistentes</span>, 
            mesmo começando do zero
          </p>

          {/* CTA Button */}
          <button 
            onClick={scrollToNext}
            className={`group btn-premium bg-gradient-to-r from-[#774d3b] to-[#2d201c] hover:from-[#2d201c] hover:to-[#774d3b] text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-[#774d3b]/30 mb-16 transition-all duration-1200 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="flex items-center">
              Saiba Mais
              <ArrowDown className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>

          {/* Trust indicators */}
          <div className={`flex items-center justify-center space-x-8 text-sm text-gray-400 transition-all duration-1200 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#774d3b] rounded-full mr-2 animate-pulse"></div>
              <span>Método Comprovado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#774d3b] rounded-full mr-2 animate-pulse delay-300"></div>
              <span>Resultados Reais</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#774d3b] rounded-full mr-2 animate-pulse delay-600"></div>
              <span>Acesso Limitado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#774d3b]" />
      </div>
    </section>
  );
}
