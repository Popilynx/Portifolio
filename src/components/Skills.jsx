import { useState, useEffect } from 'react';

function Skills() {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java Spring Boot", level: 85 },
        { name: "Python", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "APIs REST", level: 90 },
        { name: "Bancos SQL", level: 85 },
        { name: "Bancos NoSQL", level: 75 },
      ]
    },
    {
      category: "Ferramentas & Outros",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Ágil/Scrum", level: 80 },
        { name: "Testes", level: 75 },
        { name: "Design UI/UX", level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tighter">
            Minhas <span className="text-emerald-500 font-massive-serif">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 font-light">Expertise e tecnologias com as quais trabalho</p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-[#111] border border-white/5 rounded-3xl p-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:border-emerald-500/20`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-10 text-center">
                  {skillCategory.category}
                </h3>
                <div className="space-y-8">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-lg font-medium text-white">{skill.name}</span>
                        <span className="text-sm font-bold text-gray-500 tracking-tighter">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full transition-all duration-[1.5s] ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-4">
            {['Java', 'Spring Boot', 'React', 'Vue.js', 'Flutter', 'Python', 'JavaScript', 'Git'].map((tech, index) => (
              <div
                key={index}
                className={`bg-white/5 border border-white/5 rounded-full px-8 py-4 text-center transition-all duration-500 transform hover:scale-105 hover:bg-emerald-500 hover:text-black ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-lg font-bold tracking-tight">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;