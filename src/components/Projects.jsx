import { useState, useEffect } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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
        const response = await fetch('https://api.github.com/users/Popilynx/repos?sort=updated&per_page=6');
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
            <div className="overflow-x-auto rounded-3xl border border-white/5 bg-[#111]/50 backdrop-blur-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5 text-gray-400 text-sm font-bold tracking-[0.2em] uppercase">
                    <th className="px-8 py-6">Projeto / Descrição</th>
                    <th className="px-8 py-6 text-center">Linguagem</th>
                    <th className="px-8 py-6 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {repos.map((repo, index) => (
                    <tr 
                      key={repo.id}
                      className="group hover:bg-white/5 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
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
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span>{repo.language || 'Markdown'}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <a 
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500 transition-all group/btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover/btn:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
