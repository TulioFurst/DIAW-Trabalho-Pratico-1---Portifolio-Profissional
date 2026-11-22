import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Drama, Users, Globe, ArrowRight, Sparkles, Eye } from 'lucide-react';

export default function SobreMim() {
  const [lang, setLang] = useState('pt');
  const [curtainOpen, setCurtainOpen] = useState(false);

  const content = {
    pt: {
      badge: 'Disponível para novos desafios e colaborações',
      greeting: 'Oiê! Eu sou o',
      role: 'Estudante de Engenharia de Software & Criador Digital',
      bio1: 'Sou estudante de Engenharia de Software na PUC Minas, com trajetória acadêmica iniciada em Ciência da Computação em 2023, o que me deu uma base sólida em algoritmos, bancos de dados e desenvolvimento web.',
      bio2: 'Minha formação anterior em Teatro e minha experiência com criação de conteúdo digital moldaram a forma como encaro a tecnologia: acredito que sistemas só fazem sentido quando são pensados para pessoas reais, com empatia, comunicação clara e estética cuidadosa.',
      bio3: 'Meu objetivo profissional é agregar à indústria de tecnologia promovendo diversidade, inclusão e um olhar mais humano no desenvolvimento de software e interfaces.',
      ctaProjects: 'Ver Linha do Tempo de Projetos',
      ctaContact: 'Entrar em Contato',
      curtainHint: 'Passe o mouse ou toque para abrir as cortinas',
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
      greeting: "Hey! I'm",
      role: 'Software Engineering Student & Digital Creator',
      bio1: 'I am a Software Engineering student at PUC Minas, having started my academic journey in Computer Science in 2023, which gave me a solid foundation in logic, algorithms, and web development.',
      bio2: 'My previous background in Theater and experience in digital content creation shaped how I approach technology: I believe software only makes sense when designed for real people, with empathy, clear communication, and thoughtful aesthetics.',
      bio3: 'My career goal is to contribute to the tech industry by championing diversity, inclusion, and a more human-centered perspective in software and UI engineering.',
      ctaProjects: 'View Project Timeline',
      ctaContact: 'Get in Touch',
      curtainHint: 'Hover or tap to open the curtains',
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


  // Estilo das pregas verticais da cortina de teatro (100% opaco / veludo pesado)
  const curtainPleatsStyle = {
    backgroundColor: '#044E3E',
    backgroundImage:
      'repeating-linear-gradient(90deg, rgb(7, 141, 112) 0px, rgb(3, 56, 44) 14px, rgb(20, 168, 136) 24px, rgb(7, 141, 112) 36px)',
  };

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

        {/* Grid Principal: Texto à Esquerda + Palco/Cortina à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Coluna do Texto (7 colunas no desktop) */}
          <div className="lg:col-span-7 space-y-6">
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

          {/* Coluna da Cortina de Teatro / Coxia (5 colunas no desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onMouseEnter={() => setCurtainOpen(true)}
              onMouseLeave={() => setCurtainOpen(false)}
              onClick={() => setCurtainOpen(!curtainOpen)}
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-stage-border hover:border-pride-mint/60 shadow-[0_0_40px_rgba(7,141,112,0.2)] cursor-pointer select-none group bg-stage-surface"
            >
              {/* Holofote cênico atrás da foto */}
              <div className="absolute inset-0 bg-gradient-to-b from-pride-mint/20 via-transparent to-stage-bg z-0" />

              {/* Sua Foto (Salve como public/foto-tulio.jpg ou altere o nome abaixo) */}
              <img
                src="/foto-tulio.jpeg"
                alt="Foto de Túlio"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  curtainOpen ? 'scale-100' : 'scale-110'
                }`}
                onError={(e) => {
                  // Fallback caso a foto ainda não tenha sido colocada em public/
                  e.target.style.display = 'none';
                }}
              />

              {/* Fallback visual atrás da cortina caso ainda não tenha foto */}
              <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center bg-stage-surface">
                <Drama className="w-12 h-12 text-pride-mint mb-2" />
                <p className="text-sm font-bold text-white">Bastidores / Coxia</p>
                <p className="text-xs text-gray-400 mt-1">
                  Salve sua foto em <code className="text-pride-mint">public/foto-tulio.jpg</code>
                </p>
              </div>

              {/* Bambolina (Sanefa superior fixa da cortina) */}
              <div
                style={curtainPleatsStyle}
                className="absolute top-0 left-0 right-0 h-7 z-30 border-b-2 border-pride-ice/30 shadow-md"
              />

              {/* Cortina Esquerda */}
              <div
                style={curtainPleatsStyle}
                className={`absolute top-0 bottom-0 left-0 w-1/2 z-20 transition-transform duration-700 ease-in-out border-r border-pride-ice/20 shadow-2xl ${
                  curtainOpen ? '-translate-x-[82%]' : 'translate-x-0'
                }`}
              />

              {/* Cortina Direita */}
              <div
                style={curtainPleatsStyle}
                className={`absolute top-0 bottom-0 right-0 w-1/2 z-20 transition-transform duration-700 ease-in-out border-l border-pride-ice/20 shadow-2xl ${
                  curtainOpen ? 'translate-x-[82%]' : 'translate-x-0'
                }`}
              />

              {/* Etiqueta Central quando a cortina está fechada */}
              <div
                className={`absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300 ${
                  curtainOpen ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="px-4 py-2.5 rounded-xl bg-stage-bg/85 backdrop-blur-md border border-pride-mint/40 flex items-center gap-2 shadow-lg">
                  <Drama className="w-4 h-4 text-pride-mint" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Abrir Cortinas
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-pride-mint" />
              <span>{t.curtainHint}</span>
            </p>
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