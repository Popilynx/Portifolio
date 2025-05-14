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
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            Minhas <span className="text-emerald-500">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">Expertise e tecnologias com as quais trabalho</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`bg-gray-900 rounded-lg shadow-lg p-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-500">
                  {skillCategory.category}
                </h3>
                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-lg text-gray-300">{skill.name}</span>
                        <span className="text-lg text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
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

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Java', 'Spring Boot', 'React', 'Vue.js', 'Flutter', 'Python', 'JavaScript', 'Git'].map((tech, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 border border-gray-700 rounded-lg p-6 text-center transition-all duration-500 transform hover:scale-105 hover:border-emerald-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-xl text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;