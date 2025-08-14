import { CheckCircle, BookOpen } from 'lucide-react';

const modules = [
  {
    number: "01",
    title: "Fundamentos da Queima de Gordura",
    description: "Entenda como seu corpo realmente funciona e por que métodos tradicionais falham"
  },
  {
    number: "02", 
    title: "Planejamento Alimentar Inteligente",
    description: "Crie um cardápio personalizado que se adapta à sua rotina e preferências"
  },
  {
    number: "03",
    title: "Exercícios Eficientes",
    description: "Treinos de 20-30 minutos que aceleram o metabolismo e queimam gordura"
  },
  {
    number: "04",
    title: "Controle de Ansiedade e Compulsão",
    description: "Técnicas práticas para vencer a fome emocional e os ataques noturnos"
  },
  {
    number: "05",
    title: "Hidratação e Detox Natural",
    description: "O poder da água e alimentos detox para acelerar a perda de peso"
  },
  {
    number: "06",
    title: "Sono e Hormônios",
    description: "Como otimizar seu descanso para maximizar a queima de gordura"
  },
  {
    number: "07",
    title: "Estratégias para Acelerar o Metabolismo",
    description: "Truques científicos para manter seu corpo queimando calorias 24h"
  },
  {
    number: "08",
    title: "Suplementação Inteligente",
    description: "Quais suplementos realmente funcionam (e quais são desperdício de dinheiro)"
  },
  {
    number: "09",
    title: "Mantendo os Resultados",
    description: "Como transformar hábitos temporários em um estilo de vida permanente"
  },
  {
    number: "10",
    title: "Plano de Ação 30 Dias",
    description: "Seu cronograma passo a passo para aplicar tudo que aprendeu"
  }
];

export default function WhatYoullLearn() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O Que Você Vai <span className="text-green-600">Aprender</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            10 módulos completos que vão transformar sua relação com o corpo e a alimentação
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                    {module.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {module.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <BookOpen className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
              Mais de 150 Páginas de Conteúdo
            </h3>
            <p className="text-gray-600 text-lg">
              Guia completo, prático e direto ao ponto. Sem enrolação, apenas o que realmente funciona.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
