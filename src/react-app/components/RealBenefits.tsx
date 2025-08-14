import { 
  Zap, 
  Crown, 
  TrendingUp, 
  Clock, 
  Shield, 
  Users 
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Estabilidade Financeira",
    description: "Crie múltiplas fontes de renda para nunca mais depender apenas do salário",
    color: "text-amber-400"
  },
  {
    icon: Crown,
    title: "Autonomia Profissional", 
    description: "Tenha liberdade para tomar decisões sem depender de patrões ou chefes",
    color: "text-amber-500"
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Métodos que começam a gerar resultados nas primeiras semanas de aplicação",
    color: "text-yellow-400"
  },
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description: "Trabalhe nos seus horários, do local que quiser, no seu próprio ritmo",
    color: "text-amber-400"
  },
  {
    icon: Shield,
    title: "Segurança no Futuro",
    description: "Construa uma reserva financeira sólida para enfrentar qualquer crise",
    color: "text-amber-500"
  },
  {
    icon: Users,
    title: "Independência Completa",
    description: "Pare de pedir aumento e comece a construir seu próprio crescimento financeiro",
    color: "text-yellow-400"
  }
];

export default function RealBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Os <span className="text-amber-400">Benefícios</span> Que Você Vai Conquistar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Muito mais do que ganhar dinheiro. Transforme sua vida completamente.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 p-8 rounded-2xl border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-900/40 to-amber-800/40 group-hover:from-amber-800/60 group-hover:to-amber-700/60 transition-all duration-300">
                      <IconComponent className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
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

        <div className="mt-16">
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 rounded-3xl p-8 md:p-12 text-center border border-amber-600/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Resultados Que Você Pode <span className="text-amber-400">Confiar</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">87%</div>
                <p className="text-gray-300">Conseguiram renda extra no primeiro mês</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">92%</div>
                <p className="text-gray-300">Relataram maior segurança financeira</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
                <p className="text-gray-300">Continuam aplicando o método após 6 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
