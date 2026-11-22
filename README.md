# 🎭💻 Portfólio Profissional — Túlio.dev

> [!NOTE]
> Website de portfólio profissional desenvolvido com **React + Vite** e **Tailwind CSS**, unindo engenharia de software, artes cênicas e produção audiovisual para apresentar minha trajetória, projetos e canais de contato de forma moderna e acessível.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este <b>README.md</b> documenta o desenvolvimento do meu <b>Portfólio Profissional</b>, projetado para a disciplina de <i>Desenvolvimento e Integração de Aplicações Web</i> do curso de <b>Engenharia de Software da PUC Minas</b>, sob orientação do <a href="https://github.com/joaopauloaramuni">Prof. Dr. João Paulo Aramuni</a>. A aplicação foi construída com foco em <i>responsividade</i>, <i>identidade visual autoral</i> (inspirada na estética de palco, estúdio e código) e <i>experiência do usuário (UX)</i>, reunindo apresentação bilíngue (PT/EN), linha do tempo interativa de projetos, histórico de experiências e formulário de contato funcional hospedado em nuvem.
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

![Versão](https://img.shields.io/badge/Versão-v1.0.0-8B5CF6?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-007ec6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Status](https://img.shields.io/badge/Deploy-Concluído-10B981?style=for-the-badge&logo=vercel&logoColor=white)

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
* 🎨 **Protótipo / Wireframes:** [Acesse o Figma do Projeto](<COLE_AQUI_O_LINK_DO_FIGMA_SE_TIVER>)
  > 📐 **Descrição:** Wireframes de média fidelidade que guiaram a estruturação visual e a navegação do sistema.

---

## 📝 Sobre o Projeto

O projeto consiste no desenvolvimento de um **website de portfólio profissional** criado para centralizar e apresentar minha evolução técnica, formação acadêmica e experiências multidisciplinares.

- **Motivação:** Criar um espaço digital próprio que reflita não apenas minhas habilidades técnicas em programação, mas também minha identidade criativa vinda da formação em **Artes Cênicas (Teatro)** e da atuação com **Produção Audiovisual**.
- **Problema que resolve:** Facilita o acesso de recrutadores, colegas e colaboradores ao meu histórico de projetos, tecnologias dominadas e canais de contato direto em uma interface rápida e organizada.
- **Contexto:** Trabalho prático desenvolvido na graduação em Engenharia de Software (PUC Minas), aplicando boas práticas de componentização, roteamento SPA (*Single Page Application*), versionamento com Git e deploy contínuo.

---

## ✨ Funcionalidades Principais

- 🌐 **Apresentação Bilíngue (PT-BR / EN-US):** Alternância instantânea de idioma na seção *Sobre Mim*, destacando formação, interesses e objetivos profissionais.
- ⏳ **Linha do Tempo Dinâmica de Projetos:** Exibição cronológica (do mais antigo ao mais recente) com filtro interativo por tecnologia, links para repositórios no GitHub e prévias visuais das aplicações.
- 💼 **Trajetória & Experiências:** Seção dedicada ao relato organizado de vivências acadêmicas, projetos de extensão universitária, atuação audiovisual e formação complementar.
- 📨 **Contato Direto Funcional:** Integração com serviço de envio de e-mails diretamente pelo front-end (via FormSubmit) com validação de campos e feedback visual em tempo real, além de atalhos para redes profissionais.
- 📱 **Design Responsivo & Identidade Autoral:** Layout adaptável para dispositivos móveis e desktop, construído com paleta escura inspirada em iluminação cênica e estúdio de produção.

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
- **Gerenciamento de Estado Local:** Uso de React Hooks (`useState`) para controle interativo de idioma (PT/EN), filtragem dinâmica de projetos por tecnologia e feedback de envio do formulário de contato.
- **Design System Customizado:** Configuração estendida no `tailwind.config.js` definindo tokens semânticos de cores (`stage-bg`, `stage-surface`, `spotlight-purple`, `spotlight-amber`, `spotlight-cyan`).

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
git clone [https://github.com/](https://github.com/)<SEU_USUARIO>/<NOME_DO_REPOSITORIO>.git
cd <NOME_DO_REPOSITORIO>
