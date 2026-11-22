import { useState } from 'react';
import { Calendar, ExternalLink, FolderGit2, Image as ImageIcon, Layers } from 'lucide-react';

export default function Projetos() {
  const [selectedTech, setSelectedTech] = useState('Todos');

  // IMPORTANTE: Ordem cronológica do MAIS ANTIGO para o MAIS RECENTE (conforme pedido no enunciado)
  // Depois é só trocar os títulos, links do GitHub e caminhos das imagens pelos seus prints reais!
  const projectsData = [
    {
      id: 1,
      year: '2024',
      period: '1º Semestre',
      title: 'Portal Web Interativo (TI / Fundamentos Web)',
      description:
        'Desenvolvimento de aplicação web responsiva focada em estruturação semântica, manipulação de DOM e consumo de dados dinâmicos em JavaScript puro.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/SEU_USUARIO/projeto-antigo-1',
      // Salve seus prints em public/projects/ e coloque o caminho assim: '/projects/print1.png'
      image: '',
      imageCaption: 'Tela inicial e listagem de itens do sistema',
    },
    {
      id: 2,
      year: '2025',
      period: '2º Semestre',
      title: 'Sistema de Gestão & Banco de Dados',
      description:
        'Aplicação full-stack acadêmica com fluxo de autenticação, cadastro de usuários e integração com banco de dados relacional para controle de registros.',
      technologies: ['JavaScript', 'Node.js', 'SQL', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/SEU_USUARIO/projeto-gestao',
      image: '',
      imageCaption: 'Tela de login e painel administrativo',
    },
    {
      id: 3,
      year: '2026',
      period: 'Semestre Atual',
      title: 'Reciclaki — Plataforma de Sustentabilidade',
      description:
        'Aplicação web desenvolvida para conectar cidadãos a pontos de coleta seletiva, com foco em acessibilidade, usabilidade (IHC) e interface intuitiva.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
      githubUrl: 'https://github.com/SEU_USUARIO/reciclaki',
      image: '',
      imageCaption: 'Interface principal e mapa de pontos de coleta',
    },
  ];

  // Extrai todas as tecnologias únicas para o filtro dinâmico
  const allTechs = ['Todos', ...new Set(projectsData.flatMap((p) => p.technologies))];

  const filteredProjects =
    selectedTech === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.technologies.includes(selectedTech));

  return (
    <div className="space-y-10">
      {/* Cabeçalho da Página */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stage-surface border border-stage-border text-xs font-medium text-spotlight-purple">
          <Layers className="w-3.5 h-3.5" />
          <span>Evolução Técnica (Mais Antigo → Mais Recente)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Linha do Tempo de <span className="text-spotlight-purple">Projetos</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Uma retrospectiva cronológica dos sistemas e interfaces que desenvolvi ao longo da minha trajetória acadêmica e prática.
        </p>
      </div>

      {/* Filtro Dinâmico por Tecnologia */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2">
          Filtrar por tech:
        </span>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedTech === tech
                ? 'bg-spotlight-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                : 'bg-stage-surface text-gray-400 border border-stage-border hover:text-white'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Linha do Tempo */}
      <div className="relative border-l-2 border-stage-border ml-3 sm:ml-6 space-y-12 pb-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative pl-8 sm:pl-10 group">
            {/* Ponto luminoso na linha do tempo */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-stage-bg border-2 border-spotlight-purple group-hover:bg-spotlight-purple group-hover:shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-all" />

            {/* Card do Projeto */}
            <div className="bg-stage-surface border border-stage-border rounded-2xl p-6 hover:border-spotlight-purple/50 transition-all duration-300 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Coluna de Informações */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-spotlight-amber bg-spotlight-amber/10 px-2.5 py-1 rounded-md border border-spotlight-amber/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year} • {project.period}
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-spotlight-purple bg-stage-bg px-3 py-1.5 rounded-lg border border-stage-border transition-colors"
                    >
                      <FolderGit2 className="w-4 h-4 text-spotlight-purple" />
                      <span>Repositório GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-spotlight-purple transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tecnologias Utilizadas */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Tecnologias Utilizadas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-stage-bg border border-stage-border text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Coluna da Imagem / Print do Projeto */}
                <div className="lg:w-80 shrink-0 flex flex-col justify-center">
                  <div className="rounded-xl overflow-hidden border border-stage-border bg-stage-bg aspect-video relative flex items-center justify-center group/img">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center p-4 space-y-2">
                        <ImageIcon className="w-8 h-8 text-gray-600 mx-auto" />
                        <p className="text-xs text-gray-500 font-medium">
                          Print do projeto ({project.imageCaption})
                        </p>
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] text-gray-500 mt-2 text-center">
                    {project.imageCaption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}