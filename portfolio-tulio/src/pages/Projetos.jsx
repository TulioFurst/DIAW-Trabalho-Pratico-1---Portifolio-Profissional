import { useState } from 'react';
import { Calendar, ExternalLink, FolderGit2, Image as ImageIcon, Layers } from 'lucide-react';

export default function Projetos() {
  const [selectedTech, setSelectedTech] = useState('Todos');

  // Ordem cronológica: do MAIS ANTIGO (2024/1) ao MAIS RECENTE (2025/2)
  const projectsData = [
    {
      id: 1,
      year: '2024/1',
      period: 'Ciência da Computação • Trabalho Interdisciplinar II',
      title: 'CineSearch — Plataforma de Pesquisa e Avaliações de Filmes',
      description:
        'Aplicação web desenvolvida para pesquisa, catálogo e avaliação de filmes, permitindo aos usuários explorar títulos, consultar detalhes e registrar opiniões em uma interface interativa.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web'],
      githubUrl: 'https://github.com/TulioFurst/CineSearch-TI2-CC-2024-01',
      image: '/projects/print01.png', // Ajuste para .jpg se o arquivo for JPG
      imageCaption: 'Tela inicial da plataforma CineSearch',
    },
    {
      id: 2,
      year: '2024/2',
      period: 'Ciência da Computação • Cálculo II',
      title: 'Calculadora de Integrais em Python',
      description:
        'Ferramenta computacional desenvolvida em Python para resolução e cálculo de integrais definidas e indefinidas, unindo fundamentos matemáticos de Cálculo II com lógica de programação.',
      technologies: ['Python', 'Matemática Computacional'],
      githubUrl: 'https://github.com/TulioFurst/Projeto-CalculoII-2024-02',
      image: '/projects/print03.png', // Ajuste para .jpg se o arquivo for JPG
      imageCaption: 'Execução e interface da Calculadora de Integrais',
    },
    {
      id: 3,
      year: '2025/2',
      period: 'Ciência da Computação • Banco de Dados',
      title: 'Alvorecer Digital — Sistema de Gestão de Doações',
      description:
        'Plataforma web integrada a banco de dados criada para uma instituição de acolhimento infantil, permitindo o registro completo e controle de estoque de doações, compras e saídas de roupas, alimentos e brinquedos.',
      technologies: ['SQL / Banco de Dados', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/TulioFurst/Alvorecer-Digital-BD-2025-2',
      image: '/projects/print02.png', // Ajuste para .jpg se o arquivo for JPG
      imageCaption: 'Painel de controle e registro de doações do Alvorecer Digital',
    },
  ];

  const allTechs = ['Todos', ...new Set(projectsData.flatMap((p) => p.technologies))];

  const filteredProjects =
    selectedTech === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.technologies.includes(selectedTech));

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stage-surface border border-stage-border text-xs font-medium text-pride-mint">
          <Layers className="w-3.5 h-3.5" />
          <span>Evolução Técnica (Mais Antigo → Mais Recente)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Linha do Tempo de <span className="text-pride-mint">Projetos</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Esta é uma seleção de alguns dos principais projetos acadêmicos e práticos que desenvolvi ao longo da minha trajetória na PUC Minas, organizados em ordem cronológica.
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
                ? 'bg-pride-mint text-stage-bg font-bold shadow-[0_0_12px_rgba(38,206,170,0.3)]'
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
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-stage-bg border-2 border-pride-mint group-hover:bg-pride-mint group-hover:shadow-[0_0_12px_rgba(38,206,170,0.8)] transition-all" />

            <div className="bg-stage-surface border border-stage-border rounded-2xl p-6 hover:border-pride-mint/50 transition-all duration-300 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pride-sky bg-pride-sky/10 px-2.5 py-1 rounded-md border border-pride-sky/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year} • {project.period}
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-pride-mint bg-stage-bg px-3 py-1.5 rounded-lg border border-stage-border transition-colors"
                    >
                      <FolderGit2 className="w-4 h-4 text-pride-mint" />
                      <span>Repositório GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pride-mint transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

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

                {/* Coluna da Imagem / Print */}
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
                          {project.imageCaption}
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