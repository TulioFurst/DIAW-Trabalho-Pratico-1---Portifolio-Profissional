import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Drama, Video, Globe, ArrowRight, Sparkles } from 'lucide-react';

export default function SobreMim() {
  const [lang, setLang] = useState('pt');

  const content = {
    pt: {
      badge: 'Disponível para novos desafios e colaborações',
      greeting: 'Olá, eu sou o',
      role: 'Estudante de Engenharia de Software & Criador Digital',
      bio1: 'Sou estudante de Engenharia de Software na PUC Minas, apaixonado por construir interfaces web modernas, acessíveis e centradas na experiência do usuário.',
      bio2: 'Minha trajetória combina três mundos que se complementam: o rigor lógico do desenvolvimento de software, a comunicação e empatia adquiridas na minha primeira formação em Teatro, e o olhar estético e narrativo da produção audiovisual e criação de conteúdo digital.',
      bio3: 'Meu objetivo profissional é atuar no desenvolvimento Front-end e Engenharia de Interfaces, criando produtos digitais onde a tecnologia e a sensibilidade humana caminham juntas.',
      ctaProjects: 'Ver Linha do Tempo de Projetos',
      ctaContact: 'Entrar em Contato',
      pillarsTitle: 'Minha Abordagem Multidisciplinar',
      pillars: [
        {
          icon: Code2,
          title: 'Engenharia de Software',
          desc: 'Desenvolvimento web com foco em React, interfaces responsivas, arquitetura limpa e boas práticas de usabilidade.',
          color: 'text-spotlight-purple',
          border: 'hover:border-spotlight-purple/50'
        },
        {
          icon: Drama,
          title: 'Artes Cênicas & UX',
          desc: 'Formação em teatro aplicada à tecnologia: comunicação clara, escuta ativa, direção criativa e foco total na jornada do público.',
          color: 'text-spotlight-amber',
          border: 'hover:border-spotlight-amber/50'
        },
        {
          icon: Video,
          title: 'Produção Audiovisual',
          desc: 'Experiência em edição, design visual, ritmo narrativo e gestão de comunidades online, trazendo dinamismo para cada interface.',
          color: 'text-spotlight-cyan',
          border: 'hover:border-spotlight-cyan/50'
        }
      ],
      skillsTitle: 'Tecnologias & Ferramentas'
    },
    en: {
      badge: 'Open to new challenges and collaborations',
      greeting: 'Hi, I am',
      role: 'Software Engineering Student & Digital Creator',
      bio1: 'I am a Software Engineering student at PUC Minas, passionate about building modern, accessible, and user-centered web interfaces.',
      bio2: 'My background bridges three complementary worlds: the logical rigor of software development, the communication and empathy gained from my first degree in Theater, and the aesthetic, narrative eye of audiovisual production and digital content creation.',
      bio3: 'My career goal is to work in Front-end Development and UI Engineering, crafting digital products where technology and human sensibility go hand in hand.',
      ctaProjects: 'View Project Timeline',
      ctaContact: 'Get in Touch',
      pillarsTitle: 'My Multidisciplinary Approach',
      pillars: [
        {
          icon: Code2,
          title: 'Software Engineering',
          desc: 'Web development focused on React, responsive interfaces, clean architecture, and usability best practices.',
          color: 'text-spotlight-purple',
          border: 'hover:border-spotlight-purple/50'
        },
        {
          icon: Drama,
          title: 'Performing Arts & UX',
          desc: 'Theater background applied to tech: clear communication, active listening, creative direction, and deep focus on audience experience.',
          color: 'text-spotlight-amber',
          border: 'hover:border-spotlight-amber/50'
        },
        {
          icon: Video,
          title: 'Audiovisual Production',
          desc: 'Experience in video editing, visual design, narrative pacing, and online community management, bringing dynamism to every interface.',
          color: 'text-spotlight-cyan',
          border: 'hover:border-spotlight-cyan/50'
        }
      ],
      skillsTitle: 'Technologies & Tools'
    }
  };

  const t = content[lang];

  const skills = [
    'React', 'Vite', 'JavaScript (ES6+)', 'Tailwind CSS', 
    'HTML5 & CSS3', 'Git & GitHub', 'UI/UX Design', 'Figma',
    'Adobe Premiere', 'Comunicação & Storytelling'
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Seletor de Idioma + Hero Section */}
      <section className="relative">
        {/* Efeito sutil de luz de palco no fundo */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-spotlight-purple/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-spotlight-amber/5 rounded-full blur-3xl pointer-events-none" />

        {/* Botão PT / EN */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex items-center bg-stage-surface border border-stage-border rounded-full p-1">
            <Globe className="w-4 h-4 text-gray-400 ml-2.5 mr-1.5" />
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === 'pt'
                  ? 'bg-spotlight-purple text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PT-BR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-spotlight-purple text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN-US
            </button>
          </div>
        </div>

        {/* Apresentação Principal */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stage-surface border border-stage-border text-xs font-medium text-spotlight-amber">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t.greeting}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spotlight-purple via-purple-400 to-spotlight-amber">
              Túlio
            </span>
            .
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-300">
            {t.role}
          </h2>

          <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg">
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
            <p className="text-gray-300 font-medium">{t.bio3}</p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-spotlight-purple hover:bg-purple-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              {t.ctaProjects}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stage-surface hover:bg-stage-border text-gray-200 border border-stage-border font-medium transition-all"
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      {/* Pilares: Código + Teatro + Audiovisual */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white border-l-4 border-spotlight-purple pl-3">
          {t.pillarsTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-stage-surface border border-stage-border transition-all duration-300 ${pillar.border}`}
              >
                <div className="w-12 h-12 rounded-xl bg-stage-bg border border-stage-border flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stack e Ferramentas */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white border-l-4 border-spotlight-amber pl-3">
          {t.skillsTitle}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-lg bg-stage-surface border border-stage-border text-sm text-gray-300 hover:border-spotlight-purple/50 hover:text-white transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}