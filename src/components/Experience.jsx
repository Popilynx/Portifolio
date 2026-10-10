const EXPERIENCES = [
  {
    company: "Indústria de Equipamentos Médicos & Hospitalares",
    companyCategory: "Grande Porte • Manufatura",
    role: "Analista de Sistemas & Desenvolvedor Full Stack",
    period: "Nov 2025 — Atual",
    badge: "Sistemas & ERP Senior",
    summary: "Engenharia de software, desenvolvimento full stack e sustentação de sistemas internos integrados ao ERP corporativo, atuando sob padrões de conformidade técnica e boas práticas industriais.",
    highlights: [
      "Desenvolvimento contínuo do ecossistema de sistemas internos: SCO (Compras & Alçadas), SLO (Logística & Almoxarifado) e SMO/SFO (Manufatura & Totens).",
      "Arquitetura de integração via WebServices SOAP/XML com o ERP Senior Sistemas (Gestão Empresarial G5 / Sapiens) e regras de negócio em LSP.",
      "Automação de processos industriais: conferência ótica de Ordens de Fabricação por código de barras, Kanban fabril e totens de apontamento.",
      "Acompanhamento de processos de validação de sistemas computadorizados (protocolos IQ/OQ/PQ) para conformidade regulatória (BPF / ANVISA)."
    ],
    technologies: ["Java", "Vue.js", "ERP Senior Sistemas", "LSP", "SOAP/XML", "Oracle DB", "SQL Server"]
  },
  {
    company: "Vindi",
    companyCategory: "Fintech • Pagamentos & Cobrança Recorrente",
    role: "Desenvolvedor Full Stack Júnior",
    period: "Jan 2024 — Ago 2025",
    badge: "Java & Vue.js",
    summary: "Atuação no desenvolvimento de aplicações e rotinas para a plataforma de pagamentos da Vindi, com foco em estabilidade operacional e consistência de transações.",
    highlights: [
      "Construção e manutenção de interfaces reativas em Vue.js integradas a APIs REST.",
      "Desenvolvimento de funcionalidades backend em Java voltadas para fluxos financeiros e conciliação.",
      "Trabalho em times multidisciplinares com metodologias ágeis, Git e ambientes com Docker."
    ],
    technologies: ["Java", "Vue.js", "Docker", "Git", "APIs REST", "MySQL"]
  },
  {
    company: "Credisfera",
    companyCategory: "Serviços Financeiros & Crédito",
    role: "Analista de Suporte Pleno / Desenvolvedor Júnior",
    period: "Set 2022 — Fev 2024",
    badge: "Core Banking & APIs",
    summary: "Sustentação a serviços bancários internacionais, análise de requisições, resolução de incidentes e desenvolvimento de rotinas de suporte.",
    highlights: [
      "Atendimento técnico a parceiros de grande porte como Telefónica Global e Movistar (México e Colômbia).",
      "Suporte à plataforma de core banking Mambu e APIs de esteira de crédito.",
      "Monitoramento ativo de aplicações, serviços e rotinas com Datadog e AWS."
    ],
    technologies: ["Java Spring Boot", "MySQL", "Datadog", "AWS", "Postman", "BitBucket"]
  },
  {
    company: "Porter Group & Clemar Engenharia",
    companyCategory: "Infraestrutura & Tecnologia",
    role: "Suporte Técnico & Infraestrutura de TI",
    period: "2019 — 2022",
    badge: "Redes & Sistemas",
    summary: "Base operacional sólida em administração de servidores, infraestrutura de data centers, suporte a sistemas de portaria remota e Active Directory.",
    highlights: [
      "Resolução e triagem de incidentes em ambientes críticos com servidores Linux e Windows.",
      "Gestão de usuários, políticas de rede e rotinas de cópia de segurança corporativa."
    ],
    technologies: ["Servidores Linux", "Windows Server", "Active Directory", "Redes"]
  }
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Histórico Profissional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Trajetória & <br />
            <span className="font-massive-serif text-emerald-400 font-normal">Experiência Corporativa</span>
          </h2>

          <p className="text-base text-gray-400 font-light leading-relaxed">
            Vivência na sustentação e criação de sistemas para ambientes industriais, fintechs de grande volume e operações financeiras.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-8 group">
              
              {/* Bullet Node */}
              <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#0A0A0F]"></div>

              {/* Card */}
              <div className="rounded-2xl bg-[#12121D]/70 border border-white/10 p-6 sm:p-7 hover:border-emerald-500/30 transition-all duration-200">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="text-[11px] font-mono text-gray-400">
                        ({exp.companyCategory})
                      </span>
                    </div>
                    <div className="text-sm text-emerald-400 font-medium mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-gray-400 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 self-start sm:self-auto">
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      <span className="text-emerald-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Techs */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-gray-300 hover:text-white uppercase tracking-wider transition-all"
          >
            <span>Ver perfil detalhado no LinkedIn</span>
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Experience;