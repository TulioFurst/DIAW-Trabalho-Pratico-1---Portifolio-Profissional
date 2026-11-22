import { Briefcase, GraduationCap, Sparkles, Calendar } from 'lucide-react';

export default function Experiencias() {
  const experiences = [
    {
      type: 'academic',
      role: 'Graduando em Engenharia de Software',
      organization: 'PUC Minas (Pontifícia Universidade Católica de Minas Gerais)',
      period: '2026 — Atual (Transferência de Ciência da Computação)',
      description:
        'Desenvolvimento de sistemas web, engenharia de requisitos, interação humano-computador (IHC) e arquitetura de software com foco em metodologias ágeis.',
      tags: ['Engenharia de Software', 'Desenvolvimento Web', 'IHC', 'Git'],
    },
    {
      type: 'extension',
      role: 'Participante de Projeto de Extensão Universitária',
      organization: 'PUC Minas & E.E. Barão do Rio Branco',
      period: '2026',
      description:
        'Atuação em iniciativa de extensão voltada à aplicação prática de tecnologia e inclusão digital na comunidade escolar, exercitando levantamento de demandas e comunicação.',
      tags: ['Extensão Universitária', 'Impacto Social', 'Comunicação'],
    },
    {
      type: 'work',
      role: 'Produtor de Conteúdo Digital, Editor Audiovisual & Organizador de Eventos',
      organization: 'Atuação Independente / Plataformas Digitais',
      period: '2013 — Atual',
      description:
        'Planejamento criativo, edição de vídeo e áudio multi-trilha, design gráfico de interfaces/miniaturas e organização de torneios e transmissões ao vivo com gestão de comunidade.',
      tags: ['Produção Audiovisual', 'Design Visual', 'Gestão de Comunidades', 'Eventos'],
    },
    {
      type: 'education',
      role: 'Formação em Artes Cênicas / Teatro',
      organization: 'Formação Anterior',
      period: 'Concluído',
      description:
        'Desenvolvimento de expressão comunicativa, trabalho colaborativo, direção criativa e empatia com o público — competências aplicadas diretamente no design de experiência do usuário (UX).',
      tags: ['Comunicação', 'Trabalho em Equipe', 'Criatividade', 'UX Mindset'],
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'academic':
      case 'education':
        return <GraduationCap className="w-5 h-5 text-spotlight-purple" />;
      case 'extension':
        return <Sparkles className="w-5 h-5 text-spotlight-amber" />;
      default:
        return <Briefcase className="w-5 h-5 text-spotlight-cyan" />;
    }
  };

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Experiências & <span className="text-spotlight-purple">Trajetória</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Vivências acadêmicas, projetos de extensão, produção digital e formação multidisciplinar que moldam minha atuação na tecnologia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-stage-surface border border-stage-border rounded-2xl p-6 hover:border-spotlight-purple/40 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stage-bg border border-stage-border shrink-0 mt-1">
                  {getIcon(exp.type)}
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                  <p className="text-sm font-medium text-spotlight-purple">
                    {exp.organization}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-stage-bg px-3 py-1.5 rounded-lg border border-stage-border self-start shrink-0">
                <Calendar className="w-3.5 h-3.5 text-spotlight-amber" />
                {exp.period}
              </span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4 sm:pl-16">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 sm:pl-16">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-stage-bg border border-stage-border text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}