# 🎭💻 Portfólio Profissional — Tui.dev

> [!NOTE]
> Website de portfólio profissional desenvolvido com **React + Vite** e **Tailwind CSS**, unindo engenharia de software, artes cênicas e produção audiovisual para apresentar minha trajetória, projetos e canais de contato de forma moderna, inclusiva e acessível.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este <b>README.md</b> documenta o desenvolvimento do meu <b>Portfólio Profissional (Tui.dev)</b>, projetado para a disciplina de <i>Desenvolvimento e Integração de Aplicações Web</i> do curso de <b>Engenharia de Software da PUC Minas</b>, sob orientação do <a href="https://github.com/joaopauloaramuni">Prof. Dr. João Paulo Aramuni</a>. A aplicação foi construída com foco em <i>responsividade</i>, <i>identidade visual autoral</i> (inspirada na estética de palco, estúdio e código) e <i>experiência do usuário (UX)</i>, reunindo apresentação bilíngue (PT/EN), interação cênica de cortinas, linha do tempo dinâmica de projetos, histórico acadêmico e formulário de contato funcional hospedado em nuvem.
      </div>
    </td>
    <td>
      <div align="center">
        <img src="https://joaopauloaramuni.github.io/image/logo_ES_vertical.png" alt="Logo Engenharia de Software PUC Minas" width="120px"/>
      </div>
    </td>
  </tr> 
</table>

---

## 🚧 Status do Projeto

![Versão](https://img.shields.io/badge/Versão-v1.0.0-078D70?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-007ec6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Status](https://img.shields.io/badge/Deploy-Concluído-26CEAA?style=for-the-badge&logo=vercel&logoColor=black)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Documentações Utilizadas](#-documentações-utilizadas)
- [Autor](#-autor)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online (Produção):** [Acesse o Portfólio na Vercel](https://portfolio-tuliovercelapp.vercel.app/)
  > 💻 **Descrição:** Aplicação web hospedada gratuitamente em nuvem, responsiva e funcional.

---

## 📝 Sobre o Projeto

O projeto consiste no desenvolvimento de um **website de portfólio profissional** criado para centralizar e apresentar minha evolução técnica, formação acadêmica e experiências multidisciplinares.

- **Motivação:** Criar um espaço digital próprio que reflita não apenas minhas habilidades técnicas em programação (iniciadas em Ciência da Computação e aprofundadas em Engenharia de Software), mas também minha identidade criativa vinda da formação em **Artes Cênicas (Teatro)**, da **Produção Audiovisual** e do compromisso com **diversidade e inclusão** na indústria de tecnologia.
- **Problema que resolve:** Facilita o acesso de recrutadores, colegas e colaboradores ao meu histórico de projetos, tecnologias dominadas e canais de contato direto em uma interface rápida e organizada.
- **Contexto:** Trabalho prático desenvolvido na graduação em Engenharia de Software (PUC Minas), aplicando boas práticas de componentização, roteamento SPA (*Single Page Application*), versionamento com Git e deploy contínuo.

---

## ✨ Funcionalidades Principais

- 🌐 **Apresentação Bilíngue (PT-BR / EN-US):** Alternância instantânea de idioma na seção *Sobre Mim*, destacando formação, valores de inclusão e objetivos profissionais.
- 🎭 **Interatividade Cênica (Cortina de Teatro):** Elemento interativo na página inicial que abre as cortinas ao passar o mouse ou tocar na tela, revelando a foto de perfil como referência à formação em teatro.
- ⏳ **Linha do Tempo Dinâmica de Projetos:** Exibição cronológica (do mais antigo ao mais recente) com filtro interativo por tecnologia, links para repositórios no GitHub e prévias visuais das aplicações (*CineSearch*, *Calculadora de Integrais* e *Alvorecer Digital*).
- 💼 **Trajetória & Experiências:** Seção dedicada ao relato organizado de vivências acadêmicas, monitorias (AEDS I), representação em eventos (Mostra de Cursos), extensão universitária e atuação digital.
- 📨 **Contato Direto Funcional:** Integração com serviço de envio de e-mails diretamente pelo front-end (via FormSubmit) com validação de campos e feedback visual em tempo real, além de atalhos para redes profissionais.
- 📱 **Design Responsivo & Identidade Autoral:** Layout adaptável para dispositivos móveis e desktop, construído com paleta escura e tons em verde-esmeralda, turquesa e índigo.

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas e bibliotecas foram utilizadas na construção deste projeto:

### 💻 Front-end
* **Biblioteca Principal:** React (v19)
* **Linguagem:** JavaScript (ES6+)
* **Build Tool & Dev Server:** Vite
* **Estilização:** Tailwind CSS (v3) + PostCSS
* **Roteamento:** React Router DOM (`BrowserRouter`, `Routes`, `NavLink`)
* **Ícones:** Lucide React & SVGs customizados
* **Envio de Formulário:** FormSubmit API (AJAX/Fetch)

### ⚙️ Infraestrutura & Versionamento
* **Controle de Versão:** Git & GitHub
* **Hospedagem em Nuvem:** Vercel (CI/CD integrado ao repositório)

---

## 🏗 Arquitetura

O sistema segue a arquitetura de uma **Single Page Application (SPA)** baseada em **componentização modular**:

- **Camada de Layout (`Navbar` e `Footer`):** Componentes persistentes que garantem navegação fluida entre as rotas sem recarregamento da página e acesso rápido aos links sociais.
- **Camada de Páginas (`pages/`):** Módulos independentes responsáveis por cada seção funcional (`SobreMim`, `Projetos`, `Experiencias`, `Contato`), mantendo o código limpo e fácil de dar manutenção.
- **Gerenciamento de Estado Local:** Uso de React Hooks (`useState`) para controle interativo de idioma (PT/EN), animação das cortinas cênicas, filtragem dinâmica de projetos por tecnologia e feedback de envio do formulário de contato.
- **Design System Customizado:** Configuração estendida no `tailwind.config.js` definindo tokens semânticos de cores (`stage-bg`, `stage-surface`, `stage-border`, `pride-emerald`, `pride-mint`, `pride-sky`, `pride-indigo`).

---

## 🔧 Instalação e Execução

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* **Node.js:** Versão LTS (v18.x ou superior)
* **Gerenciador de Pacotes:** `npm` (incluso no Node.js)
* **Git:** Para clonar o repositório

### 📦 Instalação de Dependências

1. **Clone o Repositório:**
```bash
git clone [https://github.com/TulioFurst/DIAW-Trabalho-Pratico-1---Portifolio-Profissional.git](https://github.com/TulioFurst/DIAW-Trabalho-Pratico-1---Portifolio-Profissional.git)
cd DIAW-Trabalho-Pratico-1---Portifolio-Profissional/portfolio-tulio
Instale as Dependências do Projeto:Bashnpm install
⚡ Como Executar a AplicaçãoInicie o servidor de desenvolvimento local do Vite:Bashnpm run dev
🎨 A aplicação estará disponível no navegador em http://localhost:5173.🚀 DeployO deploy da aplicação está configurado de forma contínua na Vercel, conectada diretamente à branch main deste repositório (com Root Directory apontando para portfolio-tulio):Build de Produção:Bashnpm run build
(Gera a pasta /dist otimizada com os arquivos estáticos prontos para produção).Publicação: A cada push realizado na branch principal, a Vercel executa automaticamente o build e atualiza a versão online em portfolio-tuliovercelapp.vercel.app.📂 Estrutura de PastasPlaintext.
├── README.md                            # 📘 Documentação principal do projeto
└── portfolio-tulio/                     # 📁 Aplicação Front-end (React + Vite)
    ├── public/                          # 📂 Arquivos estáticos públicos
    │   ├── projects/                    # 🖼️ Capturas de tela dos projetos exibidos
    │   │   ├── print01.png              # 📸 Tela inicial do CineSearch
    │   │   ├── print02.png              # 📸 Painel do Alvorecer Digital
    │   │   └── print03.png              # 📸 Interface da Calculadora de Integrais
    │   └── foto-tulio.jpeg              # 👤 Foto revelada pelas cortinas na página inicial
    ├── src/                             # 📂 Código-fonte da aplicação React
    │   ├── components/                  # 🧱 Componentes reutilizáveis de interface
    │   │   ├── Footer.jsx               # 🔻 Rodapé com assinatura e links sociais
    │   │   └── Navbar.jsx               # 🧭 Barra de navegação responsiva (Desktop/Mobile)
    │   ├── pages/                       # 📄 Páginas principais da aplicação
    │   │   ├── Contato.jsx              # ✉️ Canais sociais e formulário de envio de e-mail
    │   │   ├── Experiencias.jsx         # 🎓 Histórico acadêmico, monitoria e atuação digital
    │   │   ├── Projetos.jsx             # ⏳ Linha do tempo cronológica com filtro por tech
    │   │   └── SobreMim.jsx             # 👤 Apresentação bilíngue (PT/EN) e cortina cênica
    │   ├── App.jsx                      # 🔀 Configuração de rotas (React Router) e layout base
    │   ├── index.css                    # 🎨 Diretivas do Tailwind CSS e estilos globais
    │   └── main.jsx                     # 🚀 Ponto de entrada da aplicação React
    ├── .gitignore                       # 🧹 Arquivos e pastas ignorados pelo Git
    ├── index.html                       # 🌐 Arquivo HTML raiz
    ├── package.json                     # 📦 Dependências e scripts do projeto
    ├── postcss.config.js                # ⚙️ Configuração do PostCSS
    ├── tailwind.config.js               # 🎨 Configuração de tema e paleta de cores do Tailwind
    └── vite.config.js                   # ⚡ Configuração do Vite
🎥 Demonstração🌐 Aplicação WebAbaixo estão as capturas de tela das principais seções do portfólio em funcionamento:PáginaCaptura de TelaSobre Mim (PT/EN & Cortina Cênica)Linha do Tempo de ProjetosExperiências & TrajetóriaContato & Formulário🔗 Documentações Utilizadas📖 React: Documentação Oficial do React📖 Vite: Guia de Configuração do Vite📖 Tailwind CSS: Documentação Oficial do Tailwind CSS📖 React Router: Documentação do React Router📖 Lucide Icons: Catálogo de Ícones Lucide👤 Autor👤 Nome:octocat: GitHub💼 LinkedIn📤 E-mailTúlio Furst Akar@TulioFurstLinkedIntakar@sga.pucminas.br🙏 AgradecimentosEngenharia de Software PUC Minas — Pelo suporte acadêmico e incentivo às boas práticas de desenvolvimento de software.Prof. Dr. João Paulo Aramuni — Pelas orientações na disciplina de Desenvolvimento e Integração de Aplicações Web e pelo template de documentação.📄 LicençaEste projeto é distribuído sob a Licença MIT.