export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Verdade Sobre <span className="text-green-600">Secar</span> Que Ninguém Te Conta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-4 border-red-400 mb-8">
                <h3 className="font-semibold text-xl text-red-700 mb-4">O Problema Real:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Você já tentou inúmeras dietas "milagrosas", passou horas na academia sem ver resultados, 
                  e se frustrou com promessas impossíveis de perder 10kg em uma semana. A verdade é que 
                  a maioria dos métodos falha porque ignoram a realidade do seu corpo e da sua rotina.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
                <h3 className="font-semibold text-xl text-green-700 mb-4">A Solução Definitiva:</h3>
                <p className="text-gray-700 leading-relaxed">
                  O "Método Direto" é diferente. Baseado em ciência real e testado por milhares de pessoas, 
                  ele ensina como secar de forma sustentável em 30 dias, sem dietas malucas ou exercícios 
                  impossíveis. É o equilíbrio perfeito entre eficácia e realismo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 italic">
                "Este e-book não promete milagres. Promete resultados reais através de um método 
                que funciona na vida real, com a sua rotina, com o seu tempo e com as suas limitações."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
