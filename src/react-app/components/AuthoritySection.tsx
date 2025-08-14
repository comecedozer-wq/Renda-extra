import { 
  Shield, 
  Target, 
  CheckCircle, 
  XCircle, 
  BookOpen,
  TrendingUp,
  Users,
  Lightbulb,
  DollarSign,
  Smartphone,
  BarChart3,
  Globe,
  Award,
  Lock
} from 'lucide-react';
import { useEffect, useState } from 'react';

const modules = [
  { number: "01", title: "Fundamentos da Renda Extra", icon: BookOpen },
  { number: "02", title: "Identificando Oportunidades", icon: TrendingUp },
  { number: "03", title: "Estratégias Online Comprovadas", icon: Globe },
  { number: "04", title: "Monetização de Habilidades", icon: Lightbulb },
  { number: "05", title: "Marketing Sem Investimento", icon: Users },
  { number: "06", title: "Ferramentas Gratuitas Essenciais", icon: Smartphone },
  { number: "07", title: "Precificação Inteligente", icon: DollarSign },
  { number: "08", title: "Automatização de Processos", icon: BarChart3 },
  { number: "09", title: "Evitando Armadilhas Comuns", icon: Shield },
  { number: "10", title: "Plano de Ação 30 Dias", icon: CheckCircle }
];

export default function AuthoritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleModules, setVisibleModules] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate modules appearing one by one
          modules.forEach((_, index) => {
            setTimeout(() => {
              setVisibleModules(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('authority');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="authority" className="py-20 bg-gradient-to-b from-[#0d0d34] to-[#030b11]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Why Most Methods Fail */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Por que <span className="text-red-400">90%</span> dos métodos de renda extra <span className="text-red-400">falham</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-[#774d3b] mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-8 rounded-2xl border border-red-500/30">
                <XCircle className="w-12 h-12 text-red-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-red-300 mb-4">Métodos Convencionais</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Promessas impossíveis de "enriquecimento rápido"</li>
                  <li>• Falta de estratégias práticas e aplicáveis</li>
                  <li>• Dependem de investimentos altos</li>
                  <li>• Não consideram a realidade brasileira</li>
                  <li>• Focam em teoria, não em execução</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 p-8 rounded-2xl border border-[#774d3b]/30">
                <CheckCircle className="w-12 h-12 text-[#774d3b] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-[#774d3b] mb-4">Nosso Método</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Estratégias reais testadas na prática</li>
                  <li>• Passo a passo detalhado e aplicável</li>
                  <li>• Pode começar sem investimento inicial</li>
                  <li>• Adequado para qualquer perfil</li>
                  <li>• Foco total em resultados mensuráveis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Method Revealed */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-3xl p-12 border border-[#774d3b]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                <img 
                  src="https://mocha-cdn.com/0198a87f-7fca-70d7-968f-f020f37ba8d2/ebook_cover_segredo_renda_extra.webp" 
                  alt="E-book Cover" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <Lock className="w-16 h-16 text-[#774d3b] mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                "O Segredo da Renda Extra"
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Um guia completo de 120+ páginas com métodos práticos, field-tested e 
                comprovados para criar fontes de renda extra consistentes, mesmo começando do zero.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">Método Direto</h4>
                  <p className="text-gray-400 text-sm">Sem enrolação, apenas o que funciona</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">Comprovado</h4>
                  <p className="text-gray-400 text-sm">Testado por centenas de pessoas</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-[#774d3b] mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">Para Iniciantes</h4>
                  <p className="text-gray-400 text-sm">Mesmo começando do zero</p>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Modules List */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">
              Os <span className="text-[#774d3b]">10 Módulos</span> Que Você Vai Receber
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              const isModuleVisible = visibleModules.includes(index);
              
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 p-6 rounded-2xl border border-[#774d3b]/20 hover:border-[#774d3b]/40 transition-all duration-500 ${isModuleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#774d3b] to-[#2d201c] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {module.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{module.title}</h4>
                    </div>
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#774d3b]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Statement */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-r from-[#774d3b]/10 to-[#2d201c]/10 rounded-2xl p-8 border border-[#774d3b]/20">
              <p className="text-xl text-gray-300 italic">
                "Não prometemos enriquecimento da noite para o dia. Prometemos um método real, 
                testado e aplicável para quem quer resultados consistentes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
