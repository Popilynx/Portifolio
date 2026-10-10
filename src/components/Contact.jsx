import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Projeto Web ou MVP',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('renatorochajr@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "5548984544096";
    const text = `Olá Renato, meu nome é ${formData.name}.
Assunto / Tipo: ${formData.projectType}
Email de contato: ${formData.email}

Mensagem:
${formData.message}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Projeto Web ou MVP',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Comunicação Direta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Entre em <span className="font-massive-serif text-emerald-400 font-normal">Contato</span>
          </h2>

          <p className="text-base text-gray-400 font-light leading-relaxed">
            Disponível para novos projetos, desenvolvimento sob demanda e conversas técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#12121D]/70 border border-white/10 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">E-mail</span>
                <a
                  href="mailto:renatorochajr@gmail.com"
                  className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors"
                >
                  renatorochajr@gmail.com
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-black border border-white/5 text-gray-300 transition-all text-xs font-mono flex items-center gap-1.5"
                title="Copiar e-mail"
              >
                {copied ? (
                  <span className="text-emerald-400 font-medium">Copiado</span>
                ) : (
                  <span>Copiar</span>
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/5548984544096"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#12121D]/70 border border-white/10 flex items-center justify-between group hover:border-emerald-500/30 transition-all block"
            >
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">WhatsApp</span>
                <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  +55 (48) 98454-4096
                </span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors text-xs font-mono">
                Conversar
              </div>
            </a>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#12121D]/70 border border-white/10 hover:border-emerald-500/30 transition-all text-white flex items-center justify-between text-xs font-mono"
              >
                <span>LinkedIn</span>
                <span className="text-emerald-400">↗</span>
              </a>

              <a
                href="https://github.com/Popilynx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#12121D]/70 border border-white/10 hover:border-emerald-500/30 transition-all text-white flex items-center justify-between text-xs font-mono"
              >
                <span>GitHub</span>
                <span className="text-emerald-400">↗</span>
              </a>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#12121D]/70 border border-white/10 p-6 sm:p-7 shadow-xl">
              
              <h3 className="text-lg font-bold text-white mb-1">
                Enviar Mensagem
              </h3>
              <p className="text-xs text-gray-400 font-light mb-5">
                Preencha os campos para iniciar a conversa diretamente no WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-1">
                  <h4 className="text-sm font-bold text-white">Redirecionando para o WhatsApp...</h4>
                  <p className="text-xs text-gray-400 font-light">Sua mensagem foi estruturada.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Nome</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Assunto</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D15] border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    >
                      <option value="Projeto Web ou MVP">Projeto Web ou MVP</option>
                      <option value="Integração de Sistemas ou ERP">Integração de Sistemas ou ERP</option>
                      <option value="Website Comercial">Website Comercial</option>
                      <option value="Consultoria ou Oportunidade">Consultoria ou Oportunidade</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Mensagem</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Descreva seu projeto, objetivo ou dúvida..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    Conversar via WhatsApp
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;