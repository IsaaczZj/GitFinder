
![image](https://github.com/user-attachments/assets/793c8cdc-0712-48e2-acf9-7943c3b198c3)

# GitFinder

Este é um projeto que permite buscar por usuários do GitHub e visualizar seus perfis e os 10 repositórios públicos mais recentes, consumindo a API oficial do GitHub.

## Funcionalidades

*   Busca de usuários do GitHub pelo nome de usuário.
*   Exibição do perfil do usuário (avatar, nome, localização, número de seguidores e seguindo).
*   Link para visualizar os repositórios do usuário.
*   **Listagem dos 10 repositórios públicos mais recentes do usuário.**
*   Exibição de detalhes dos repositórios (nome, linguagem principal, estrelas, forks).
*   Link direto para cada repositório no GitHub.
*   Tratamento de erro para usuários não encontrados.
*   Design responsivo.

## Tecnologias Utilizadas

*   **React:** Biblioteca principal para construção da interface.
*   **TypeScript:** Superset do JavaScript para tipagem estática.
*   **Vite:** Ferramenta de build rápida.
*   **React Router:** Para gerenciamento de rotas (navegação entre a página inicial e a de repositórios).
*   **React Icons:** Biblioteca para inclusão de ícones.
*   **CSS Modules:** Para estilização escopada por componente.

## API Utilizada

Este projeto consome a **API pública do GitHub**:

*   **Busca de Usuário:** `https://api.github.com/users/{username}`
*   **Listagem de Repositórios do Usuário (ordenados por criação, mais recentes primeiro):** `https://api.github.com/users/{username}/repos?sort=created&direction=desc` (O código pega apenas os 10 primeiros resultados desta chamada).

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    # Se ainda não estiver no diretório
    cd GitFinder
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).

## Estrutura do Projeto

*   `src/`: Contém todo o código fonte da aplicação.
    *   `Components/`: Componentes reutilizáveis da interface
    *   `Pages/`: Componentes que representam as páginas da aplicação (`Home`, `Repositorios`).
    *   `Types/`: Definições de tipos TypeScript (`Repositorios.ts`, `user.ts`).
    *   `App.tsx`: Componente principal que configura as rotas e o layout base.
    *   `main.tsx`: Ponto de entrada da aplicação React.
    *   `index.css`: Estilos CSS globais.
    *   `App.module.css`: Estilos específicos do componente App.
*   `public/`: Arquivos públicos (como o favicon).
*   `index.html`: Arquivo HTML principal.
*   `vite.config.ts`: Configuração do Vite.
*   `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`: Configurações do TypeScript.
*   `package.json`: Definições do projeto e dependências.
*   `eslint.config.js`: Configuração do ESLint.
