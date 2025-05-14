import { useState, useEffect } from 'react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-emerald-500">Olá, eu sou</span>
                <br />
                Renato Rocha
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-300 mb-6">
                Desenvolvedor Fullstack
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Transformando ideias em código, criando soluções inovadoras e impactantes.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300"
              >
                Entre em Contato
              </button>
              <a
                href="https://github.com/Popilynx"
                className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300"
              >
                Ver Projetos
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/assets/images/eu.jpg"
                alt="Renato Rocha"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;