import { useState, useEffect } from 'react';

// 1. SISTEMAS CORPORATIVOS & ERP (CONHECIMENTOS DO COFRE - SEM EXPOR A EMPRESA)
const ENTERPRISE_SYSTEMS = [
  {
    id: 'sco',
    code: 'SCO',
    title: 'Sistema de Compras & Operações',
    category: 'Enterprise • Integração ERP',
    badge: 'Senior G5 / SOAP',
    summary: 'Plataforma para gestão do ciclo de compras corporativo, integrando solicitações de compra e serviços diretamente ao ERP Senior Sistemas.',
    highlights: [
      'Ciclo completo de Solicitação de Compra (SC) e Solicitação de Serviço (SS).',
      'Mecanismo de alçadas multinível de aprovação com validação hierárquica por limites de valor.',
      'Comunicação bidirecional via WebServices SOAP/XML com rotinas nativas do ERP Senior Sistemas.',
      'Interface web para requerentes e painel administrativo para compradores.'
    ],
    techStack: ['Java', 'Spring Boot', 'Vue.js', 'ERP Senior (Sapiens)', 'SOAP/XML', 'Oracle DB'],
    statusLabel: 'Em Produção'
  },
  {
    id: 'slo',
    code: 'SLO',
    title: 'Sistema de Logística & Almoxarifado',
    category: 'Logística Industrial • Estoque',
    badge: 'Kanban & Código de Barras',
    summary: 'Gestão completa de movimentações físicas e digitais de estoque, automação de almoxarifados e monitoramento da linha fabril.',
    highlights: [
      'Kanban de reposição em tempo real para alimentação das linhas de montagem.',
      'Conferência física e conferência ótica de Ordens de Fabricação via leitor de código de barras.',
      'Módulo de Inventário Cíclico com classificação por Curva ABC de criticidade e giro.',
      'Inspeção de controle de qualidade e registro de RNC (Relatório de Não Conformidade).',
      'Sincronização de depósitos e saldo de materiais com o ERP Senior Sistemas.'
    ],
    techStack: ['Java', 'Vue.js', 'ERP Senior Sistemas', 'Oracle DB', 'SQL Server', 'APIs REST'],
    statusLabel: 'Em Produção'
  },
  {
    id: 'smo',
    code: 'SMO / SFO',
    title: 'Sistema de Manufatura & Chão de Fábrica',
    category: 'Indústria • Totens & PCP',
    badge: 'Chão de Fábrica & Rastreabilidade',
    summary: 'Controle de processos fabris, roteiros de produção e apontamento industrial em totens touchscreen com rastreabilidade.',
    highlights: [
      'Sequenciamento de Ordens de Produção (OP) por centros de trabalho e estágios de roteiro.',
      'Interface para totens industriais touchscreen para apontamento de produção e separação por operadores.',
      'Painel de controle de PCP para acompanhamento da fila fabril em tempo real.',
      'Arquitetura em conformidade com critérios formais de validação de sistemas computadorizados (BPF).'
    ],
    techStack: ['Java', 'Vue.js', 'Python (FastAPI)', 'ERP Senior Sistemas', 'LSP', 'Oracle'],
    statusLabel: 'Em Produção'
  }
];

// 2. PROJETOS PESSOAIS & FREELANCE
const PERSONAL_PROJECTS = [
  {
    id: 'sistemaLevelUp',
    title: 'Sistema Level Up',
    category: 'Web App & Produtividade',
    badge: 'Projeto Pessoal',
    description: 'Aplicação web gamificada para acompanhamento de metas, hábitos diários e produtividade pessoal. Dashboard interativo com estatísticas de progresso.',
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'JavaScript'],
    demoUrl: 'https://sistema-level-up.vercel.app/',
    githubUrl: 'https://github.com/Popilynx/sistemaLevelUp'
  },
  {
    id: 'assistenteSolarIA',
    title: 'HelionIA — Assistente Solar',
    category: 'Inteligência Artificial',
    badge: 'IA & Automação',
    description: 'Solução orientada ao mercado de energia solar fotovoltaica. Agente de IA para suporte no cálculo de dimensionamento e esclarecimento de regras técnicas.',
    techStack: ['IA / LLMs', 'React', 'Node.js', 'APIs REST'],
    demoUrl: 'https://helionia.app',
    githubUrl: 'https://github.com/Popilynx/assistenteSolarIA'
  },
  {
    id: 'portifolioRamon',
    title: 'Ramon Soldas Industriais',
    category: 'Website Comercial',
    badge: 'Produção / Cliente',
    description: 'Website comercial responsivo desenvolvido para empresa de soldagem e caldeiraria técnica, com foco em velocidade, SEO local e conversão direta via WhatsApp.',
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'UX/UI'],
    demoUrl: 'https://ramon-soldas.vercel.app/',
    githubUrl: 'https://github.com/Popilynx/portifolio-Ramon'
  },
  {
    id: 'homemloboNode',
    title: 'Homem Lobo & Evoluwoman',
    category: 'Plataformas Web',
    badge: 'Produção / Cliente',
    description: 'Plataformas web voltadas para presença institucional, publicação de conteúdo e posicionamento de marca, estruturadas com foco em tempo de resposta e design responsivo.',
    techStack: ['Node.js', 'JavaScript', 'Tailwind', 'Deploy Cloud'],
    demoUrl: 'https://homemlobo.com',
    githubUrl: 'https://github.com/Popilynx'
  }
];

const DEPLOY_LINKS = {
  'homemloboNode': 'https://homemlobo.com',
  'evoluwoman': 'https://evoluwoman.com',
  'hdavalia': 'https://hdavalia.com',
  'assistenteSolarIA': 'https://helionia.app',
  'sistemaLevelUp': 'https://sistema-level-up.vercel.app/',
  'portifolio Ramon': 'https://ramon-soldas.vercel.app/',
  'portifolio-Ramon': 'https://ramon-soldas.vercel.app/',
  'portifolioRamon': 'https://ramon-soldas.vercel.app/'
};

function Projects() {
  const [activeTab, setActiveTab] = useState('personal'); // 'personal' | 'enterprise'
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Todos');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Popilynx/repos?sort=updated&per_page=30');
        if (!response.ok) throw new Error('Falha ao carregar');
        const data = await response.json();
        
        const formatted = data.map(repo => ({
          ...repo,
          customDeploy: DEPLOY_LINKS[repo.name] || repo.homepage,
          cleanDesc: repo.description || 'Repositório com código-fonte e documentação técnica.'
        }));

        setRepos(formatted);
      } catch (err) {
        console.warn('GitHub API:', err);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  const languages = ['Todos', ...new Set(repos.map(r => r.language).filter(Boolean))];

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLang = selectedLanguage === 'Todos' || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="projects" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-champagne-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Portfólio & Engenharia de Sistemas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projetos Pessoais & <br />
            <span className="font-massive-serif text-emerald-400 font-normal">Sistemas Corporativos</span>
          </h2>

          <p className="text-base text-gray-400 font-light leading-relaxed">
            Aplicações desenvolvidas para web, soluções com inteligência artificial e sistemas de missão crítica integrados a ERPs empresariais.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'personal'
                ? 'bg-emerald-500 text-black border-emerald-500 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
          >
            Projetos Pessoais & Clientes ({PERSONAL_PROJECTS.length})
          </button>

          <button
            onClick={() => setActiveTab('enterprise')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
              activeTab === 'enterprise'
                ? 'bg-emerald-500 text-black border-emerald-500 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
          >
            Sistemas Corporativos & ERP Senior ({ENTERPRISE_SYSTEMS.length})
          </button>
        </div>

        {/* TAB 1: PROJETOS PESSOAIS */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20">
            {PERSONAL_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl bg-[#12121D]/80 backdrop-blur-xl border border-white/10 p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {proj.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed mt-2.5">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/40 border border-white/5 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <span>Acessar Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2"
                  >
                    <span>Repositório</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SISTEMAS CORPORATIVOS & ERP (COFRE - SEM EXPOR EMPRESA) */}
        {activeTab === 'enterprise' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            {ENTERPRISE_SYSTEMS.map((sys) => (
              <div
                key={sys.id}
                className="rounded-2xl bg-[#12121D]/80 backdrop-blur-xl border border-white/10 p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {sys.code}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {sys.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                      {sys.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      {sys.category}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mt-3">
                      {sys.summary}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    {sys.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-400 font-light leading-relaxed">
                        <span className="text-emerald-400 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {sys.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Integração ERP Senior</span>
                  <span className="text-emerald-400">{sys.statusLabel}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPLORADOR DE REPOSITÓRIOS DO GITHUB */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Repositórios Públicos no GitHub
              </h3>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                Projetos abertos, utilitários e experimentos sincronizados em tempo real
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Filtrar por nome ou tecnologia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <svg className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {languages.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors border ${
                    selectedLanguage === lang
                      ? 'bg-emerald-500 text-black border-emerald-500 font-bold'
                      : 'bg-white/[0.02] text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          {loadingRepos ? (
            <div className="flex justify-center items-center py-16">
              <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin"></div>
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="text-center py-12 rounded-xl bg-white/[0.02] border border-white/5 text-gray-400 text-xs font-mono">
              Nenhum repositório encontrado para o filtro.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRepos.slice(0, 9).map((repo) => (
                <div
                  key={repo.id}
                  className="rounded-xl bg-[#12121D]/60 border border-white/5 p-5 hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-emerald-400 border border-white/5">
                        {repo.language || 'Geral'}
                      </span>
                      {repo.stargazers_count > 0 && (
                        <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          {repo.stargazers_count}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                      {repo.name}
                    </h4>

                    <p className="text-xs text-gray-400 font-light leading-relaxed mt-2 line-clamp-3">
                      {repo.cleanDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 mt-4 border-t border-white/5 text-xs font-mono">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-3 rounded bg-white/5 hover:bg-white/10 text-white text-center transition-colors"
                    >
                      Código
                    </a>
                    {repo.customDeploy && (
                      <a
                        href={repo.customDeploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-3 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-center transition-colors"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <a
              href="https://github.com/Popilynx?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-gray-300 hover:text-white uppercase tracking-wider transition-all"
            >
              <span>Ver todos os repositórios no GitHub</span>
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
