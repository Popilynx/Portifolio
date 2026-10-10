import { useState } from 'react';

const TECH_DOMAINS = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'Vue.js (Vue 3 / Options & Composition API)', role: 'SPAs reativas, Pinia, ecossistemas com PrimeVue e design systems próprios.', badge: 'Core' },
      { name: 'React.js', role: 'Componentização moderna, hooks, gerenciamento de estado e Next.js.', badge: 'Core' },
      { name: 'TypeScript & JavaScript', role: 'Tipagem estrita, manipulação assíncrona e padrões ESNext.', badge: 'Avançado' },
      { name: 'Tailwind CSS', role: 'Estilização utilitária, responsividade e componentização modular.', badge: 'Avançado' },
      { name: 'Vite & Webpack', role: 'Tooling de build, bundling otimizado e configurações de ambiente.', badge: 'Tooling' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { name: 'Java & Spring Boot', role: 'Microsserviços, Spring Data JPA, Spring Security, arquitetura em camadas e DTOs.', badge: 'Core' },
      { name: 'Node.js & Express', role: 'APIs assíncronas, integrações ágeis e serviços de automação.', badge: 'Produção' },
      { name: 'Python & FastAPI', role: 'Microserviços rápidos de dados, dashboards de PCP e agentes de automação.', badge: 'Produção' },
      { name: 'WebServices SOAP & RESTful', role: 'Barramentos XML, contratos WSDL/XSD, endpoints REST e JSON schema.', badge: 'Integrações' },
      { name: 'Segurança & Autenticação', role: 'Tokens JWT, autenticação stateless, RBAC e validação de alçadas.', badge: 'Segurança' }
    ]
  },
  {
    id: 'erp',
    label: 'ERP & Sistemas Corporativos',
    skills: [
      { name: 'ERP Senior Sistemas (Gestão Empresarial G5 / Sapiens)', role: 'Módulos de Compras, Almoxarifado, Manufatura/PCP, tabelas nativas E0/E1/E2/E7 e integrações.', badge: 'Especialista' },
      { name: 'LSP (Linguagem Senior de Programação)', role: 'Desenvolvimento e manutenção de regras de negócio, identificadores de regras e modelos.', badge: 'Linguagem ERP' },
      { name: 'Validação de Sistemas Computadorizados (ANVISA / BPF)', role: 'Conformidade com protocolos de qualificação (IQ, OQ, PQ) e rastreabilidade fabril.', badge: 'Regulatório' },
      { name: 'SGI & Gerador de Relatórios', role: 'Customização de telas e geração de relatórios corporativos de gestão.', badge: 'Ferramentas' }
    ]
  },
  {
    id: 'database',
    label: 'Bancos de Dados',
    skills: [
      { name: 'Oracle Database', role: 'Trabalho contínuo com dialetos de grande porte, views, otimização de queries e triggers.', badge: 'Enterprise' },
      { name: 'SQL Server', role: 'Modelagem, procedures, manutenção de dados industriais e índices.', badge: 'Enterprise' },
      { name: 'PostgreSQL & MySQL', role: 'Bancos relacionais para produtos web, SaaS e serviços transacionais.', badge: 'Relacional' },
      { name: 'Modelagem de Dados & ODS', role: 'Estruturação de esquemas operacionais e consolidação de dados transacionais.', badge: 'Arquitetura' }
    ]
  },
  {
    id: 'devops',
    label: 'DevOps & Observabilidade',
    skills: [
      { name: 'Docker & Containers', role: 'Empacotamento de serviços, isolamento de dependências e padronização de ambientes.', badge: 'DevOps' },
      { name: 'Datadog & APM', role: 'Monitoramento ativo e passivo, rastreamento de requisições, métricas e healthchecks.', badge: 'Monitoramento' },
      { name: 'Git / GitHub / BitBucket', role: 'Versionamento colaborativo, controle de branches e fluxo de PRs.', badge: 'Versionamento' },
      { name: 'Servidores Linux & Windows', role: 'Configuração de serviços systemd, permissões, ambientes EC2 e redes.', badge: 'Infraestrutura' }
    ]
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState('erp');

  const currentDomain = TECH_DOMAINS.find(d => d.id === activeTab) || TECH_DOMAINS[0];

  return (
    <section id="skills" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Competências & Tecnologias</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Stack Técnica & <br />
            <span className="font-massive-serif text-emerald-400 font-normal">Domínios de Atuação</span>
          </h2>

          <p className="text-base text-gray-400 font-light leading-relaxed">
            Conhecimento prático aplicado no dia a dia em projetos web, automações e arquiteturas corporativas de missão crítica.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {TECH_DOMAINS.map((domain) => {
            const isActive = activeTab === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-emerald-500 text-black border-emerald-500 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {domain.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentDomain.skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#12121D]/70 border border-white/10 hover:border-emerald-500/30 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400 whitespace-nowrap">
                    {skill.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {skill.role}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Aplicado em produção</span>
                <span className="text-emerald-400 font-medium">Experiência prática</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;