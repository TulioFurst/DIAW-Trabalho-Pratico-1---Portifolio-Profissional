import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Drama, Users, Globe, ArrowRight, Sparkles } from 'lucide-react';

export default function SobreMim() {
  const [lang, setLang] = useState('pt');

  const content = {
    pt: {
      badge: 'Disponível para novos desafios e colaborações',
      greeting: 'Olá, eu sou o',
      role: 'Estudante de Engenharia de Software & Criador Digital',
      bio1: 'Sou estudante de Engenharia de Software na PUC Minas, com trajetória acadêmica iniciada em Ciência da Computação em 2023, o que me deu uma base sólida em algoritmos, bancos de dados e desenvolvimento web.',
      bio2: 'Minha formação anterior em Teatro e minha experiência com criação de conteúdo digital moldaram a forma como encaro a tecnologia: acredito que sistemas só fazem sentido quando são pensados para pessoas reais, com empatia, comunicação clara e estética cuidadosa.',
      bio3: 'Meu objetivo profissional é agregar à indústria de tecnologia promovendo diversidade, inclusão e um olhar mais humano no desenvolvimento de software e interfaces.',
      ctaProjects: 'Ver Linha do Tempo de Projetos',
      ctaContact: 'Entrar em Contato',
      pillarsTitle: 'Minha Abordagem Multidisciplinar',
      pillars: [
        {
          icon: Code2,
          title: 'Engenharia de Software',
          desc: 'Desenvolvimento web com React, integração com bancos de dados e construção de interfaces responsivas e acessíveis.',
          color: 'text-pride-mint',
          border: 'hover:border-pride-mint/50'
        },
        {
          icon: Users,
          title: 'Diversidade, Inclusão & UX',
          desc: 'Compromisso com tecnologia acessível e representativa, colocando a experiência humana e social no centro de cada decisão técnica.',
          color: 'text-pride-sky',
          border: 'hover:border-pride-sky/50'
        },
        {
          icon: Drama,
          title: 'Artes Cênicas & Criação Digital',
          desc: 'Bagagem em teatro e produção audiovisual aplicada à comunicação em equipe, storytelling e design de interfaces envolventes.',
          color: 'text-pride-indigo',
          border: 'hover:border-pride-indigo/50'
        }
      ],
      skillsTitle: 'Tecnologias & Ferramentas'
    },
    en: {
      badge: 'Open to new challenges and collaborations',
      greeting: 'Hi, I am',
      role: 'Software Engineering Student & Digital Creator',
      bio1: 'I am a Software Engineering student at PUC Minas, having started my academic journey in Computer Science in 2023, which gave me a solid foundation in algorithms, databases, and web development.',
      bio2: 'My previous background in Theater and experience in digital content creation shaped how I approach technology: I believe software only makes sense when designed for real people, with empathy, clear communication, and thoughtful aesthetics.',
      bio3: 'My career goal is to contribute to the tech industry by championing diversity, inclusion, and a more human-centered perspective in software and UI engineering.',
      ctaProjects: 'View Project Timeline',
      ctaContact: 'Get in Touch',
      pillarsTitle: 'My Multidisciplinary Approach',
      pillars: [
        {
          icon: Code2,
          title: 'Software Engineering',
          desc: 'Web development with React, database integration, and building responsive, accessible interfaces.',
          color: 'text-pride-mint',
          border: 'hover:border-pride-mint/50'
        },
        {
          icon: Users,
          title: 'Diversity, Inclusion & UX',
          desc: 'Commitment to accessible and representative technology, placing human and social impact at the core of every technical decision.',
          color: 'text-pride-sky',
          border: 'hover:border-pride-sky/50'
        },
        {
          icon: Drama,
          title: 'Performing Arts & Digital Creation',
          desc: 'Theater and audiovisual production background applied to team communication, storytelling, and engaging interface design.',
          color: 'text-pride-indigo',
          border: 'hover:border-pride-indigo/50'
        }
      ],
      skillsTitle: 'Technologies & Tools'
    }
  };

  const t = content[lang];

  const skills = [
    'React', 'Vite', 'JavaScript (ES6+)', 'Tailwind CSS',
    'HTML5 & CSS3', 'Python', 'SQL / Banco de Dados', 'Git & GitHub',
    'UI/UX & Acessibilidade', 'Produção Audiovisual'
  ];

  return (
    <div className="space-y-16">
      <section className="relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-pride-emerald/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-pride-indigo/15 rounded-full blur-3xl pointer-events-none" />

        {/* Botão PT / EN */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex items-center bg-stage-surface border border-stage-border rounded-full p-1">
            <Globe className="w-4 h-4 text-gray-400 ml-2.5 mr-1.5" />
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === 'pt'
                  ? 'bg-pride-mint text-stage-bg shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PT-BR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-pride-mint text-stage-bg shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN-US
            </button>
          </div>
        </div>

        {/* Apresentação Principal */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stage-surface border border-stage-border text-xs font-medium text-pride-ice">
            <Sparkles className="w-3.5 h-3.5 text-pride-mint" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t.greeting}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pride-emerald via-pride-mint to-pride-indigo">
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
            <p className="text-gray-200 font-medium border-l-2 border-pride-mint pl-4">
              {t.bio3}
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pride-emerald to-pride-mint hover:opacity-90 text-stage-bg font-bold transition-all shadow-[0_0_20px_rgba(38,206,170,0.25)]"
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

      {/* Pilares */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-white border-l-4 border-pride-mint pl-3">
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
        <h3 className="text-xl font-bold text-white border-l-4 border-pride-indigo pl-3">
          {t.skillsTitle}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-lg bg-stage-surface border border-stage-border text-sm text-gray-300 hover:border-pride-mint/50 hover:text-white transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}