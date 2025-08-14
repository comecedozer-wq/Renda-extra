import { 
  TrendingUp, 
  Crown, 
  Shield, 
  Clock, 
  DollarSign,
  Target
} from 'lucide-react';
import { useEffect, useState } from 'react';

const benefits = [
  {
    icon: DollarSign,
    title: "Múltiplas Fontes de Renda",
    description: "Crie diferentes streams de receita para nunca mais depender apenas do salário",
    color: "text-[#774d3b]"
  },
  {
    icon: Crown,
    title: "Independência Financeira", 
    description: "Conquiste a liberdade de tomar decisões sem depender de patrões ou chefes",
    color: "text-[#774d3b]"
  },
  {
    icon: TrendingUp,
    title: "Crescimento Escalável",
    description: "Métodos que crescem com o tempo, gerando cada vez mais resultados",
    color: "text-[#774d3b]"
  },
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description: "Trabalhe nos seus horários, do local que quiser, no seu próprio ritmo",
    color: "text-[#774d3b]"
  },
  {
    icon: Shield,
    title: "Segurança no Futuro",
    description: "Construa uma reserva financeira sólida para enfrentar qualquer crise",
    color: "text-[#774d3b]"
  },
  {
    icon: Target,
    title: "Resultados Mensuráveis",
    description: "Acompanhe seu progresso com métricas claras e objetivos alcançáveis",
    color: "text-[#774d3b]"
  }
];

export default function BenefitsSection() {
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

    const element = document.getElementById('benefits');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-[#030b11] to-[#0d0d34]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Os <span className="text-[#774d3b]">Benefícios</span> Que Você Vai Conquistar
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Muito mais do que ganhar dinheiro. Transforme sua vida completamente.
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-[#774d3b] to-[#2d201c] mx-auto mt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className={`text-center group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 p-8 rounded-2xl border border-[#774d3b]/20 hover:border-[#774d3b]/40 transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#774d3b]/20 to-[#2d201c]/20 group-hover:from-[#774d3b]/30 group-hover:to-[#2d201c]/30 transition-all duration-300">
                      <IconComponent className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#774d3b] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-3xl p-8 md:p-12 text-center border border-[#774d3b]/30 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1/4 h-full opacity-10">
              <img 
                src="https://mocha-cdn.com/0198a87f-7fca-70d7-968f-f020f37ba8d2/financial-growth.jpg" 
                alt="Financial Growth" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Resultados Que Você Pode <span className="text-[#774d3b]">Confiar</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#774d3b] mb-2">87%</div>
                <p className="text-gray-300">Conseguiram renda extra no primeiro mês</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#774d3b] mb-2">92%</div>
                <p className="text-gray-300">Relataram maior segurança financeira</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#774d3b] mb-2">95%</div>
                <p className="text-gray-300">Continuam aplicando após 6 meses</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
