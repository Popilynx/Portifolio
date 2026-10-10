function About() {
  const credentials = [
    {
      title: "Desenvolvimento Full Stack",
      description: "Experiência prática construindo desde a interface de usuário (Vue e React) até APIs e microsserviços (Java, Spring Boot e Python) conectados a bancos de grande porte."
    },
    {
      title: "Integrações & ERPs Corporativos",
      description: "Atuação contínua com WebServices SOAP/REST, barramentos de dados, regras de negócio em LSP e modelagem com ERP Senior Sistemas."
    },
    {
      title: "Sistemas em Ambiente Industrial & Fintech",
      description: "Vivência em arquiteturas que exigem alta estabilidade, desde plataformas financeiras de pagamento recorrente até sistemas fabris com validação de sistemas computadorizados."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Apresentação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Sobre <span className="font-massive-serif text-emerald-400 font-normal">Renato Rocha</span>
          </h2>

          <p className="text-base text-gray-400 font-light leading-relaxed">
            Bacharel em Sistemas de Informação com mais de 4 anos de atuação em engenharia de software e desenvolvimento web.
          </p>
        </div>

        {/* Narrative & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-gray-300 font-light leading-relaxed text-sm sm:text-base">
            <p>
              Iniciei minha trajetória na tecnologia em 2016 na área de dados, caminho que consolidou meu interesse pela transformação e uso de informações em produtos e sistemas reais.
            </p>
            <p>
              Ao longo dos últimos 4 anos, atuei em diferentes camadas do ciclo de vida de software: do suporte e monitoramento de serviços em escala internacional na área financeira (com parceiros como Telefónica e Movistar), ao desenvolvimento full stack de pagamentos na Vindi (Java e Vue.js), até a análise e sustentação de sistemas fabris e de logística integrados ao ERP Senior Sistemas.
            </p>
            <p>
              Paralelamente à atuação corporativa, desenvolvo projetos próprios e soluções sob demanda para web — com foco em interfaces diretas, performance e código sustentável.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 block text-[10px] uppercase">Formação</span>
                <span className="text-white font-medium">Bacharel em Sistemas de Informação</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 block text-[10px] uppercase">Localização</span>
                <span className="text-white font-medium">Florianópolis, SC (Remoto)</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 block text-[10px] uppercase">Disponibilidade</span>
                <span className="text-emerald-400 font-medium">Projetos & Contratos</span>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-5 space-y-3.5">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#12121D]/70 border border-white/10 hover:border-emerald-500/20 transition-colors"
              >
                <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;