import { useState, useEffect } from 'react';

function Experience() {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Analista de Sistemas",
      company: "Olsen SA",
      period: "Novembro 2025 - Atual",
      description: "Atuação como Analista de Sistemas, participando do desenvolvimento e suporte de sistemas internos, integrações e otimização de processos.",
      technologies: ["SQL Server", "ERP", "Integrações", "Análise de Sistemas"]
    },
    {
      title: "Desenvolvedor Full Stack Junior",
      company: "Vindi",
      period: "Janeiro 2024 - Agosto 2025",
      description: "Desenvolvimento de aplicações web usando Java e Vue.js. Implementação de soluções completas para o sistema de pagamentos da Vindi.",
      technologies: ["Java", "Vue.js", "Git", "Docker"]
    },
    {
      title: "Desenvolvedor Júnior",
      company: "Credisfera",
      period: "Janeiro 2024 - Fevereiro 2024",
      description: "Desenvolvimento de software utilizando Java e outras tecnologias para soluções financeiras.",
      technologies: ["Java", "Software", "Git"]
    },
    {
      title: "Analista de Suporte Pleno",
      company: "Credisfera",
      period: "Setembro 2022 - Fevereiro 2024",
      description: "Atuação prestando suporte aos parceiros Telefónica Global, Movistar (Colombia e México), com atendimentos nível 1, 2 e 3. Suporte a plataforma financeira Mambu, plataforma de empréstimos desenvolvida pela Credisfera. Monitoramento ativo e passivo de aplicações, APIs e Healthchecks (Datadog).",
      technologies: ["MySQL", "Postman", "JavaScript", "Java", "SpringBoot", "JIRA", "Git", "BitBucket", "AWS Services"]
    },
    {
      title: "Assistente de Suporte",
      company: "Porter Group",
      period: "Agosto 2021 - Setembro 2022",
      description: "Administração, redirecionamento e monitoramento de incidentes de suporte. Atendimento aos clientes via ticket, telefone ou chat. Análise de logs e reporte de incidentes. Controle de status de chamados técnicos e interação com usuários.",
      technologies: ["Microsoft Windows", "Servidor Linux", "JIRA", "Movidesk"]
    },
    {
      title: "Técnico de TI",
      company: "Clemar Engenharia",
      period: "Abril 2019 - Agosto 2021",
      description: "Manutenção de computadores, gerenciamento de contas de usuário (Active Directory), instalações de software. Apoio no gerenciamento de BKP do data center, suporte técnico conforme a demanda dos usuários.",
      technologies: ["Microsoft Windows", "Hardware de computador", "Active Directory"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tighter">
            Trabalho <span className="text-emerald-500 font-massive-serif">&</span> Experiência
          </h2>
          <p className="text-xl text-gray-500 text-center mb-20 font-light">Uma linha do tempo da minha evolução profissional</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-white/5"></div>

            {/* Experience items */}
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"></div>

                  <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-20' : 'md:mr-auto md:pr-20 md:text-right'} pl-10`}>
                    <div className="group bg-[#111] border border-white/5 p-10 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02]">
                      <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-white/5 text-gray-400 rounded-full border border-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-500 transition-colors">{exp.title}</h3>
                      <h4 className="text-lg text-emerald-500/80 font-medium mb-6">{exp.company}</h4>

                      <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">{exp.description}</p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-bold text-gray-500 bg-white/5 px-4 py-2 rounded-lg border border-white/5 group-hover:border-emerald-500/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <a
              href="https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 text-lg bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-500 shadow-xl"
            >
              Ver Currículo Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;