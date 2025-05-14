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
      title: "Desenvolvedor Full Stack Junior",
      company: "Vindi",
      period: "Janeiro 2024 - Atual",
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
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            Experiência <span className="text-emerald-500">Profissional</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">Minha jornada profissional até agora</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-emerald-500 bg-gray-900"></div>
                  
                  <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'} pl-12`}>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                      <span className="inline-block px-4 py-2 text-sm font-medium bg-emerald-500/20 text-emerald-400 rounded-full mb-4">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-emerald-500 font-medium mb-4">{exp.company}</h4>
                      <p className="text-lg text-gray-300 mb-6">{exp.description}</p>
                      <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-block px-4 py-2 text-sm font-medium bg-gray-700 text-gray-300 rounded-full"
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
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-md transition-all duration-300"
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