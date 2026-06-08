import { useState, useEffect } from 'react';

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
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Todos');

  const FEATURED_NAMES = ['sistemaLevelUp', 'assistenteSolarIA', 'portifolio-Ramon', 'portifolio Ramon', 'portifolioRamon'];

  const fetchReadmeSnippet = async (repoName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/Popilynx/${repoName}/readme`, {
        headers: { Accept: 'application/vnd.github.v3.raw' }
      });
      if (!response.ok) return null;
      const text = await response.text();
      // Limpa markdown básico e pega o primeiro parágrafo significativo
      const cleanText = text
        .replace(/#.*$/gm, '') // Remove headers
        .replace(/!\[.*\]\(.*\)/g, '') // Remove imagens
        .replace(/\[.*\]\(.*\)/g, '') // Remove links
        .replace(/\n+/g, ' ') // Converte quebras de linha em espaços
        .trim();
      
      return cleanText.substring(0, 160) + (cleanText.length > 160 ? '...' : '');
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Popilynx/repos?sort=updated&per_page=30');
        if (!response.ok) throw new Error('Falha ao buscar repositórios');
        const reposData = await response.json();

        // Busca os snippets dos READMEs em paralelo
        const reposWithSnippets = await Promise.all(
          reposData.map(async (repo) => {
            const snippet = await fetchReadmeSnippet(repo.name);
            return { 
              ...repo, 
              explanation: snippet || repo.description || 'Nenhuma descrição disponível.'
            };
          })
        );

        setRepos(reposWithSnippets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const featuredRepos = repos.filter(repo => FEATURED_NAMES.includes(repo.name));
  const otherRepos = repos.filter(repo => !FEATURED_NAMES.includes(repo.name));

  const languages = ['Todos', ...new Set(otherRepos.map(repo => repo.language).filter(Boolean))];

  const filteredOtherRepos = otherRepos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          repo.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang = selectedLanguage === 'Todos' || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">
              Meus <span className="text-emerald-500 font-massive-serif">Projetos</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Sincronização dinâmica com trechos dos arquivos <span className="text-white font-medium">README.md</span>.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-red-500/5 border border-red-500/20 rounded-3xl">
              <p className="text-red-400 font-medium">Ops! {error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 text-emerald-500 hover:text-emerald-400 underline"
              >
                Tentar novamente
              </button>
            </div>
          ) : (
            <>
              {/* Projetos em Destaque */}
              {featuredRepos.length > 0 && (
                <div className="mb-24">
                  <h3 className="text-2xl font-bold mb-8 text-gray-300 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Destaques
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredRepos.map((repo, index) => {
                      const deployUrl = DEPLOY_LINKS[repo.name] || repo.homepage;
                      return (
                        <div 
                          key={repo.id}
                          className="group relative bg-[#111]/40 border border-white/5 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02] flex flex-col justify-between"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full group-hover:bg-emerald-500/10 transition-colors pointer-events-none"></div>

                          <div>
                            <div className="flex justify-between items-start mb-6">
                              <span className="px-3.5 py-1 text-xs font-bold tracking-widest uppercase bg-white/5 text-gray-400 rounded-full border border-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
                                {repo.language || 'Markdown'}
                              </span>
                              <span className="text-gray-600 text-xs font-mono">#{index + 1}</span>
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors uppercase tracking-tight">
                              {repo.name}
                            </h4>

                            <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 italic">
                              "{repo.explanation}"
                            </p>
                          </div>

                          <div className="flex gap-4 border-t border-white/5 pt-6 mt-auto">
                            <a 
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 text-white font-bold text-sm tracking-widest uppercase transition-all"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                              </svg>
                              Código
                            </a>
                            {deployUrl && (
                              <a 
                                href={deployUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Demo
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Outros Projetos */}
              <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h3 className="text-2xl font-bold text-gray-300 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/40"></span>
                  Outros Repositórios
                </h3>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Buscar repositório..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder:text-gray-600 text-sm font-medium transition-all"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filtros de Linguagem */}
              {languages.length > 1 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                        selectedLanguage === lang 
                          ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                          : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}

              {filteredOtherRepos.length === 0 ? (
                <div className="text-center py-20 bg-[#111]/30 border border-white/5 rounded-[2rem] mb-12">
                  <p className="text-gray-500 font-medium">Nenhum repositório corresponde aos filtros.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-[#111]/50 backdrop-blur-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/5 text-gray-400 text-sm font-bold tracking-[0.2em] uppercase">
                        <th className="px-8 py-6">Projeto / Descrição</th>
                        <th className="px-8 py-6 text-center">Linguagem</th>
                        <th className="px-8 py-6 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredOtherRepos.map((repo, index) => {
                        const deployUrl = DEPLOY_LINKS[repo.name] || repo.homepage;
                        return (
                          <tr 
                            key={repo.id}
                            className="group hover:bg-white/5 transition-all duration-300"
                            style={{ transitionDelay: `${index * 50}ms` }}
                          >
                            <td className="px-8 py-6">
                              <div className="flex flex-col gap-2">
                                <span className="text-white font-bold text-lg group-hover:text-emerald-500 transition-colors uppercase tracking-tight">
                                  {repo.name}
                                </span>
                                <span className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl italic">
                                  "{repo.explanation}"
                                </span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex justify-center items-center gap-2 text-gray-300 font-medium">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                                <span>{repo.language || 'Markdown'}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-right">
                              <div className="flex justify-end gap-3">
                                {/* Botão GitHub */}
                                <a 
                                  href={repo.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500 transition-all group/btn"
                                  title="Ver código no GitHub"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover/btn:text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                  </svg>
                                </a>
                                
                                {/* Botão de Link Externo (Deploy) */}
                                {deployUrl && (
                                  <a 
                                    href={deployUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-500 transition-all group/btn"
                                    title="Acessar site hospedado"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 group-hover/btn:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/Popilynx?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-all font-bold tracking-[0.3em] uppercase text-xs"
            >
              Explorar Repositórios Completos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
