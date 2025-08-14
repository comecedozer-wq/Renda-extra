import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    text: "Em dois meses consegui uma renda extra de 15.000 Kz mensais. O método é direto e funciona mesmo para quem não tem experiência."
  },
  {
    name: "Ana Fernandes", 
    text: "Finalmente encontrei algo que realmente ensina. Não são promessas vazias, são estratégias que aplicei e deram resultado."
  },
  {
    name: "Miguel Santos",
    text: "Estava cético, mas o método me surpreendeu. Em 3 semanas já estava ganhando mais de 8.000 Kz extras por mês."
  },
  {
    name: "Joana Silva",
    text: "O que mais gostei foi a clareza das explicações. Tudo muito bem detalhado, consegui aplicar sem dificuldades."
  },
  {
    name: "Roberto Lima",
    text: "Tentei várias formas de renda extra antes, mas esta foi a única que realmente funcionou. Recomendo sem hesitar."
  }
];

export default function SocialProofSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('social-proof');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="social-proof" className="py-20 bg-gradient-to-b from-[#0d0d34] to-[#030b11]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Quem Já <span className="text-[#774d3b]">Transformou</span> a Vida Financeira
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Histórias reais de pessoas que aplicaram o método
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-[#774d3b] to-[#2d201c] mx-auto mt-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 rounded-3xl p-12 border border-[#774d3b]/30">
            <Quote className="w-16 h-16 text-[#774d3b] mx-auto mb-8 opacity-50" />
            
            <div className="text-center min-h-[120px] flex items-center justify-center">
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center mt-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#774d3b] fill-current" />
                ))}
              </div>
            </div>

            <div className="text-center">
              <cite className="text-lg font-semibold text-white not-italic">
                {testimonials[currentTestimonial].name}
              </cite>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#774d3b]/20 hover:bg-[#774d3b]/40 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-[#774d3b]" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#774d3b]/20 hover:bg-[#774d3b]/40 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-[#774d3b]" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#774d3b]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-[#2d201c]/20 to-[#060102]/20 rounded-2xl p-6 border border-[#774d3b]/20 hover:border-[#774d3b]/40 transition-all duration-500 group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150 + 1200}ms` }}
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#774d3b] group-hover:text-[#774d3b] opacity-70 transition-colors duration-300" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#774d3b] fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic text-sm">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-600/30 pt-4">
                <p className="font-semibold text-white group-hover:text-[#774d3b] transition-colors duration-300">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-[#774d3b]/20 to-[#2d201c]/20 rounded-2xl p-8 border border-[#774d3b]/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Mais de <span className="text-[#774d3b]">500 pessoas</span> já transformaram suas finanças
            </h3>
            <p className="text-gray-300 text-lg">
              Cada depoimento representa uma vida financeira transformada. Qual será a sua história de sucesso?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
