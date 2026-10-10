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
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0A0A0F] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-champagne-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-medium tracking-wide">Desenvolvedor Full Stack • Florianópolis, SC</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Renato Rocha<span className="text-emerald-400">.</span> <br />
                <span className="font-massive-serif text-emerald-400 font-normal">
                  Engenharia de Software
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 font-light max-w-xl leading-relaxed">
                Desenvolvo aplicações web, sistemas integrados a ERPs corporativos e ferramentas digitais sob medida. Atuação completa do banco de dados à interface com Java, Spring Boot, Vue.js, React e ecossistemas empresariais.
              </p>
            </div>

            {/* Real Experience Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-xl sm:text-2xl font-bold text-white font-mono">4+ Anos</span>
                <span className="text-[11px] text-gray-400">Desenvolvimento Real</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-xl sm:text-2xl font-bold text-emerald-400 font-mono">Full Stack</span>
                <span className="text-[11px] text-gray-400">Java, Vue & React</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block text-xl sm:text-2xl font-bold text-champagne-400 font-mono">Sistemas</span>
                <span className="text-[11px] text-gray-400">Compras, Logística & Fábrica</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-2"
              >
                <span>Ver Projetos & Cases</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className={`lg:col-span-5 flex justify-center transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-transparent to-champagne-500/10 rounded-[2.2rem] blur-lg opacity-60"></div>

              <div className="relative w-72 sm:w-80 md:w-96 rounded-[2rem] overflow-hidden border border-white/10 bg-[#12121D]/80 backdrop-blur-xl p-3 shadow-2xl">
                <div className="relative w-full h-[24rem] sm:h-[28rem] rounded-[1.6rem] overflow-hidden">
                  <img
                    src={euImage}
                    alt="Renato Rocha"
                    className="w-full h-full object-cover object-center grayscale contrast-115 brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-75"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-emerald-400">
                      github.com/Popilynx
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-gray-300">
                      Bacharel SI
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-4 rounded-2xl bg-[#111118]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Desenvolvimento</div>
                  <div className="text-xs font-bold text-white">Full Stack & Integrações</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;