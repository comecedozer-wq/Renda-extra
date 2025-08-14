import { Clock, AlertTriangle, TrendingUp, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StorytellingSection() {
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

    const element = document.getElementById('storytelling');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="storytelling" className="py-20 bg-gradient-to-b from-[#030b11] to-[#0d0d34]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Story Introduction */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Você reconhece essa <span className="text-[#774d3b]">situação</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#774d3b] to-[#2d201c] mx-auto"></div>
          </div>

          {/* The Problem Story */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 p-8 rounded-2xl border border-[#774d3b]/20">
                <AlertTriangle className="w-12 h-12 text-[#774d3b] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6">A Realidade Que Vivemos</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                  <p>• Trabalhando duro, mas o salário não aumenta</p>
                  <p>• Despesas que só crescem a cada mês</p>
                  <p>• Medo de depender apenas do emprego</p>
                  <p>• Tentativas frustradas de "ganhar dinheiro online"</p>
                  <p>• Promessas vazias que não funcionam na prática</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="text-center">
                <Clock className="w-24 h-24 text-[#774d3b] mx-auto mb-6 animate-pulse" />
                <p className="text-xl text-gray-300 leading-relaxed">
                  "Mais um mês passa, as contas chegam, e você continua na mesma situação. 
                  Quantas oportunidades já passou porque não tinha as informações certas?"
                </p>
              </div>
            </div>
          </div>

          {/* Transformation Icons */}
          <div className={`flex justify-center items-center space-x-8 mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Frustração</p>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-red-400 via-[#774d3b] to-green-400"></div>
            
            <div className="text-center">
              <Lightbulb className="w-16 h-16 text-[#774d3b] mx-auto mb-2 animate-pulse" />
              <p className="text-gray-400 text-sm">Descoberta</p>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-[#774d3b] to-green-400"></div>
            
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Transformação</p>
            </div>
          </div>

          {/* The Solution Revelation */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-3xl p-12 border border-[#774d3b]/30">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Mas e se existisse um <span className="text-[#774d3b]">método diferente</span>?
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Um sistema real, testado por centenas de pessoas, que não depende de sorte, 
                contatos especiais ou investimentos altos. Um método que você pode aplicar 
                hoje mesmo, mesmo começando do zero.
              </p>
              <div className="inline-block bg-gradient-to-r from-[#774d3b] to-[#2d201c] p-1 rounded-full">
                <div className="bg-[#030b11] rounded-full px-8 py-4">
                  <span className="text-[#774d3b] font-bold text-lg">
                    Esse método existe. E você está prestes a descobri-lo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
