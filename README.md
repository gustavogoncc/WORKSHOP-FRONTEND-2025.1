 Pokémon TCG Front-end 2025.1 desafio

### Descrição

Em anexo, é apresentado o projeto que defini como a aplicação web que exibe cartas do Pokémon Trading Card Game (TCG). Trata-se do desafio do Workshop Frontend 2025.1. O projeto utiliza a API POKEMON TCG, para busca e exibição de informações sobre as cartas, sendo assim explicações aos usuários em encontrar carta interessantes.

### Demonstarção (Opcional)

https://pokemon-cartas-workshop.vercel.app/

### Funções

-   *Listagem de Cartas:* Exportar uma lista de cartões pokemon na parte do cartas.
-   Cartas Aleatórias página inicial: mostrar um grupo de cartões aleatórios na página inicial para fomentar a curiosidade.
-   Interatividade: cartas e o links do header tem interatividades quando o Mouse passa.
-   Tema de Estilo: aplicação tem um tema temático baseado no universo do pokemon

### Ferramentas e tecnologias utilizadas

-   *Next.js* — Framework React para construção de página web;
-   *Tailwind CSS* — Framework CSS utilitário, para rápida Estilização e responsividade
-   *TypeScript* — Superset de JavaScript com tipagem estática;
-   *API Pokemon TCG* — API para buscar informações sobre as cartas;
-   *PostCSS: * Ferramenta para transformar CSS com JavaScript;
-   *Autoprefixer:* plugin do PostCSS para adicionar prefixos de vendor automaticamente

### Pré-requisitos

*Antes de continuar, você precisará*

-   Node.js (v.16 ou superior)
-   Node+npm ou Node+bower: Gerenciador de pacotes

## Instalação

1.  Clone o repositório:

    ```bash
    git clone [URL do seu repositório]
    cd [nome do seu projeto]
    ```

2.  Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

## Como Executar o Projeto

1.  Execute o servidor de desenvolvimento:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

2.  Abra o seu navegador e vá para `http://localhost:3000` (ou a porta que o seu projeto estiver usando).

## Estrutura de Pastas

WORKSHOP-FRONTEND-2025.1/
├── src/
│   ├── app/
│   │   ├── cartas/
│   │   │   └── page.tsx           # Página com a lista de cartas
│   │   ├── favicon.ico            # Ícone do site
│   │   ├── globals.css            # Estilos globais (Tailwind CSS)
│   │   ├── layout.tsx             # Layout da aplicação
│   │   └── page.tsx               # Página inicial
│   ├── components/
│   │   ├── Cartas.tsx           # Componente para a lista de cartas da página de cartas
│   │   ├── Header.tsx           # Componente para o header
│   │   └── PokemonCard.tsx      # Componente para cada card Pokémon
├── .gitignore                    # Arquivos e pastas a serem ignorados pelo Git
├── eslint.config.mjs              # Configuração do ESLint
├── next-env.d.ts                 # Definições de tipo do Next.js
├── next.config.ts                # Configuração do Next.js
├── package-lock.json            # Informações sobre as versões das dependências
├── package.json                 # Informações e dependências do projeto
├── postcss.config.mjs           # Configuração do PostCSS
├── README.md                    # Este arquivo
└── tsconfig.json                # Configuração do TypeScript

## Configuração da API

A API que estou usanndo neste projeto será a API do Pokémon TCG. Não é necessário fazer nenhuma configuração a mais a ela, pois a API é aberta e não solicita chaves.

### Which issues do you know?

Issue

–                                                                             **Cartões Repetidos** : na página inicial de algumas cartas pode ser repetida, em forma de ocorrência de cartões repetidos. No meu caso, a solução foi buscar mais cartões e depois remover os últimos, mas a API nem sempre garante resultados únicos.

Roadmap (opcionais)

–                                                                             **Adiciona paginação na página de cartas** ;

–                                                                             **implementa** buscas e filtros;

–                                                                             **cria páginas** de detalhes para mães de características;

–                                                                             Melhoral a estilização e responsividade;

Contribuição  (opcionais)

–                                                                             Se quiser contribuir para este projeto, contribuições são bem-vindas. É muito simples como é feito o seguinte:

1.  Fazer um fork do repositório ;
2.  Crie uma branch com require feature: `git checkout -b my-new-feature`
3.  Faça commit das múdicações: `git commit -am ‘Add some feature’`;
4.  Faça push para a branch: `git push origin my-new-feature`;
5.  Envie um pull request . .   . 

## Autores

* Gustavo Gonçalves
