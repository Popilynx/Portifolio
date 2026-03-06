import { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tighter">
            Sobre <span className="text-emerald-500 font-massive-serif">Mim</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="col-span-1">
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-1">Nome</h3>
                    <p className="text-xl text-white font-medium">Renato Rocha de Souza Junior</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-1">Idade</h3>
                    <p className="text-xl text-white font-medium">25 anos</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-1">Formação</h3>
                    <p className="text-xl text-white font-medium">Bacharel em Sistemas de Informação</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500 transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-1">Experiência</h3>
                    <p className="text-xl text-white font-medium">4 anos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-8">
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                Sou um <span className="text-white font-medium">Desenvolvedor Fullstack</span> apaixonado com formação em Sistemas de Informação. Minha experiência abrange tanto tecnologias frontend quanto backend, permitindo-me construir soluções web e mobile completas.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed">
                Entusiasta do mundo da tecnologia, tive o primeiro contato com a área de dados em 2016, iniciando minha jornada como Jovem Aprendiz. Ingressei em uma empresa que me forneceu suporte e as ferramentas certas para iniciar na área, e ter certeza de que é isso o que eu quero para o meu futuro profissional: <span className="text-emerald-500/80 italic font-medium">conseguir transformar e utilizar os dados em prol das pessoas.</span>
              </p>

              <p className="text-lg text-gray-500 leading-relaxed">
                Me destaco em ambientes colaborativos, resolvendo problemas complexos e aprendendo continuamente novas tecnologias. Meu objetivo é criar aplicações <span className="text-white font-medium">eficientes, escaláveis e amigáveis</span> que forneçam valor genuíno aos usuários.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed">
                Durante minha experiência profissional trabalhei com a linguagem Java e VueJS. Ao longo dos anos tive a oportunidade de trabalhar com outras ferramentas, como MySQL, PostgreSQL e sistemas operacionais Linux e Windows Server.
              </p>

              <div className="pt-10">
                <a
                  href="https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 text-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                >
                  Ver Perfil Completo
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;