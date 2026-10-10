import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Stack & Skills" },
    { id: "experience", label: "Trajetória" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['home', 'projects', 'skills', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 border ${
        scrolled
          ? 'bg-[#0E0E15]/85 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] py-3 px-6'
          : 'bg-[#12121D]/60 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] py-3.5 px-6 md:px-8'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 flex items-center justify-center font-bold text-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Renato Rocha<span className="text-emerald-400 font-massive-serif text-lg">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono -mt-1">
                Full Stack
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Availability Status & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponível</span>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Contato
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Online</span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Abrir menu"
            >
              {!menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 pt-4 mt-3 border-t border-white/10' : 'max-h-0'
        }`}>
          <div className="flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 w-full py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider text-center"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;