import { useState, useEffect } from 'react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "5548984544096";
    const message = `Olá Renato, meu nome é ${formData.name}.
*Assunto:* ${formData.subject}
*Email:* ${formData.email}

*Mensagem:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setFormStatus({
      submitted: true,
      success: true,
      message: 'Redirecionando para o WhatsApp...'
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "renatorochajr@gmail.com",
      link: "mailto:renatorochajr@gmail.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Renato Rocha de Souza Júnior",
      link: "https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "GitHub",
      value: "@Popilynx",
      link: "https://github.com/Popilynx?tab=repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tighter">
            Entre em <span className="text-emerald-500 font-massive-serif">Contato</span>
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 font-light">Sinta-se à vontade para entrar em contato para qualquer projeto ou colaboração</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-[#111] border border-white/5 p-8 rounded-2xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:border-emerald-500/20`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-xl uppercase">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-1">{info.title}</h3>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-white hover:text-emerald-500 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className={`bg-[#111] border border-white/5 p-8 rounded-2xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '450ms' }}>
                <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-6">Me Siga</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Popilynx?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-emerald-500 h-14 w-14 rounded-full flex items-center justify-center transition-all group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 group-hover:text-black transition-colors" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renato-rocha-de-souza-júnior-775b48149/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-emerald-500 h-14 w-14 rounded-full flex items-center justify-center transition-all group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 group-hover:text-black transition-colors" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className={`bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {formStatus.submitted ? (
                  <div className={`p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 ${formStatus.success ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-2xl font-bold text-white">Mensagem Preparada!</p>
                    <p className="text-lg opacity-80">{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-500 tracking-widest uppercase ml-1">Seu Nome</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Ex: João Silva"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder:text-gray-600 transition-all font-medium"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-500 tracking-widest uppercase ml-1">Seu E-mail</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Ex: joao@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder:text-gray-600 transition-all font-medium"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6 space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-gray-500 tracking-widest uppercase ml-1">Assunto</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Em que posso ajudar?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder:text-gray-600 transition-all font-medium"
                        required
                      />
                    </div>
                    <div className="mb-8 space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-gray-500 tracking-widest uppercase ml-1">Sua Mensagem</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Escreva seu projeto ou dúvida aqui..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder:text-gray-600 transition-all font-medium resize-none text-lg"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full px-8 py-5 text-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                      >
                        Enviar via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;