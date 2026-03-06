import { useState, useEffect } from 'react';
import euImage from '../assets/eu.jpg';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white py-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-10">
              <div>
                <h1 className="text-7xl md:text-[10rem] font-bold mb-8 tracking-tighter leading-none">
                  <span className="text-emerald-500 text-sm md:text-base block mb-6 font-bold tracking-[0.4em] uppercase">Olá, eu sou</span>
                  <span className="font-massive-serif hover:text-emerald-500 transition-colors duration-500 cursor-default">Renato</span>
                  <br />
                  <span className="font-massive-serif text-emerald-500">Rocha</span>
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-emerald-500/50"></div>
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-tight">
                    Analista de Sistemas <span className="text-white font-medium">Fullstack</span>
                  </h2>
                </div>

                <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-light">
                  Transformando <span className="text-white font-medium">dados</span> em soluções estratégicas e criando experiências digitais de <span className="text-white font-medium">alto impacto</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-black px-12 py-5 rounded-full text-lg font-bold transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  Vamos Conversar?
                </button>
                <a
                  href="https://github.com/Popilynx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/5 text-white hover:bg-white/10 px-12 py-5 rounded-full text-lg font-bold transition-all duration-500 flex items-center gap-3"
                >
                  Ver Projetos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`flex justify-center transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-800 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative w-80 h-[28rem] md:w-[26rem] md:h-[32rem]">
                <img
                  src={euImage}
                  alt="Renato Rocha"
                  className="w-full h-full object-cover rounded-[2rem] border border-white/10 transition-all duration-700 shadow-2xl saturate-[0.8] group-hover:saturate-[1.1]"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-3xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-emerald-500 font-black text-5xl">4+</span>
                      <span className="text-emerald-500/80 text-xl font-bold font-massive-serif">Anos</span>
                    </div>
                    <p className="text-[0.65rem] text-gray-500 font-black tracking-[0.3em] uppercase mt-2">Experiência Real</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative EKG Line */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path
            className="animate-ekg fill-none stroke-emerald-500 stroke-[2px]"
            d="M0 80 L100 80 L110 80 L120 40 L130 110 L140 80 L150 80 L300 80 L310 80 L320 0 L330 150 L340 80 L350 80 L500 80 L510 80 L520 40 L530 110 L540 80 L550 80 L700 80 L710 80 L720 0 L730 150 L740 80 L750 80 L900 80 L1000 80"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;