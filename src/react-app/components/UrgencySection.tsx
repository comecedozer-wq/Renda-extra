import { Clock, Users, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function UrgencySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('urgency');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="urgency" className="py-20 bg-gradient-to-b from-[#030b11] to-[#0d0d34]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Urgency Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/40 rounded-full px-6 py-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <span className="font-semibold text-red-300 tracking-wider">ATENÇÃO: OFERTA LIMITADA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Últimas <span className="text-red-400">Vagas</span> Disponíveis
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-[#774d3b] mx-auto"></div>
          </div>

          {/* Scarcity Message */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-3xl p-8 border border-red-500/30">
              <Users className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Apenas <span className="text-red-400">27 vagas</span> restantes
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Para o grupo exclusivo de novos alunos desta semana
              </p>
              <p className="text-gray-400">
                Após atingirmos o limite, o acesso será suspenso para garantir 
                a qualidade do suporte oferecido a cada membro.
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="bg-gradient-to-br from-[#2d201c]/30 to-[#060102]/30 rounded-3xl p-8 border border-[#774d3b]/30">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#774d3b] mr-3" />
                <h3 className="text-2xl font-bold text-white">Oferta expira em:</h3>
              </div>
              
              <div className="flex justify-center space-x-4 md:space-x-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#774d3b] to-[#2d201c] rounded-xl p-4 mb-2 min-w-[80px]">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">HORAS</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#774d3b] to-[#2d201c] rounded-xl p-4 mb-2 min-w-[80px]">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">MINUTOS</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#774d3b] to-[#2d201c] rounded-xl p-4 mb-2 min-w-[80px]">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">SEGUNDOS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Benefits */}
          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-br from-[#2d201c]/20 to-[#060102]/20 rounded-2xl p-6 border border-[#774d3b]/20 text-center">
              <div className="w-12 h-12 bg-[#774d3b] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-bold text-white mb-2">Acesso Imediato</h4>
              <p className="text-gray-400 text-sm">Receba o e-book agora mesmo</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d201c]/20 to-[#060102]/20 rounded-2xl p-6 border border-[#774d3b]/20 text-center">
              <div className="w-12 h-12 bg-[#774d3b] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-bold text-white mb-2">Grupo Exclusivo</h4>
              <p className="text-gray-400 text-sm">Acesso ao grupo de suporte</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d201c]/20 to-[#060102]/20 rounded-2xl p-6 border border-[#774d3b]/20 text-center">
              <div className="w-12 h-12 bg-[#774d3b] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-bold text-white mb-2">Bônus Inclusos</h4>
              <p className="text-gray-400 text-sm">Material extra gratuito</p>
            </div>
          </div>

          {/* Final Urgency Message */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-r from-red-900/20 to-[#774d3b]/20 rounded-2xl p-6 border border-red-500/30">
              <p className="text-lg text-gray-300">
                <span className="text-red-400 font-bold">Atenção:</span> Após o fim desta promoção, 
                o valor retornará para <span className="text-white font-bold">15.000 Kz</span> e 
                o acesso ao grupo exclusivo será suspenso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
