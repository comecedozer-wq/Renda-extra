import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Globe, 
  Smartphone, 
  DollarSign, 
  BarChart3, 
  Lightbulb, 
  Shield, 
  CheckCircle
} from 'lucide-react';

const modules = [
  {
    number: "01",
    title: "Fundamentos da Renda Extra",
    description: "Entenda os princípios básicos e mude sua mentalidade sobre dinheiro",
    icon: BookOpen
  },
  {
    number: "02", 
    title: "Identificando Oportunidades Reais",
    description: "Como descobrir nichos lucrativos que ninguém está explorando",
    icon: TrendingUp
  },
  {
    number: "03",
    title: "Estratégias Online Comprovadas",
    description: "Métodos digitais que funcionam mesmo sem conhecimento técnico",
    icon: Globe
  },
  {
    number: "04",
    title: "Monetização de Habilidades",
    description: "Transforme seus conhecimentos em fonte de renda consistente",
    icon: Lightbulb
  },
  {
    number: "05",
    title: "Marketing Sem Investimento",
    description: "Como divulgar seus serviços gastando zero em publicidade",
    icon: Users
  },
  {
    number: "06",
    title: "Ferramentas Gratuitas Essenciais",
    description: "Apps e plataformas que você precisa conhecer para otimizar resultados",
    icon: Smartphone
  },
  {
    number: "07",
    title: "Precificação Inteligente",
    description: "Como definir preços que geram mais vendas e maior lucro",
    icon: DollarSign
  },
  {
    number: "08",
    title: "Automatização de Processos",
    description: "Sistemas simples para trabalhar menos e ganhar mais",
    icon: BarChart3
  },
  {
    number: "09",
    title: "Evitando Armadilhas Comuns",
    description: "Erros que 90% das pessoas cometem e como não cair neles",
    icon: Shield
  },
  {
    number: "10",
    title: "Plano de Ação 30 Dias",
    description: "Seu roteiro completo para implementar tudo que aprendeu",
    icon: CheckCircle
  }
];

export default function WhatYoullReceive() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O Que Você Vai <span className="text-amber-400">Receber</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            10 módulos completos que vão transformar sua relação com o dinheiro
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300">
                      {module.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                      {module.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/30 rounded-2xl p-8 border border-amber-600/30 max-w-2xl mx-auto">
            <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Mais de 120 Páginas de Conteúdo Premium
            </h3>
            <p className="text-gray-300 text-lg">
              Guia completo, direto e aplicável. Tudo que você precisa para começar sua renda extra hoje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
