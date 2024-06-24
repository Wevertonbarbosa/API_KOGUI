# API RICK & MORTY KOGUI

## Descrição do Projeto
Aplicação Angular do tipo SPA (Single Page Application) que consome a API pública de Rick and Morty para exibir uma lista de personagens. Ele permite aos usuários pesquisar personagens por nome e filtrar por status (vivo, morto, desconhecido). A aplicação inclui uma funcionalidade de scroll infinito para carregar mais personagens à medida que o usuário rola a página para baixo, além de oferecer uma busca refinada que respeita tanto o nome quanto o status do personagem. A interface do usuário foi construída utilizando Bootstrap para um design responsivo e moderno.

## Tecnologias Utilizadas
- **Angular**
- **TypeScript**
- **Bootstrap**
- **Chat GPT** (Otimização no código, e ajuda na criação da documentação)

## Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/Wevertonbarbosa/API_KOGUI.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd API_KOGUI
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie a aplicação:
    ```bash
    ng serve
    ```
5. Abra o navegador e acesse:
    ```plaintext
    http://localhost:4200
    ```

## Componentes Principais
### Pages
- **Characters**: Página principal que exibe a lista de personagens.
- **Details**: Página que exibe os detalhes de um personagem específico.
- **Login**: Página de login para autenticação do usuário.

### Serviços
- **DataService**: Serviço responsável por fazer as requisições HTTP para a API de Rick and Morty e retornar os dados necessários para os componentes.

### Rotas
- **App.routes.ts**: Arquivo que define as rotas da aplicação, mapeando os caminhos para os respectivos componentes.

## API de Rick and Morty
Para mais informações sobre a API utilizada neste projeto, consulte a [documentação oficial da API de Rick and Morty](https://rickandmortyapi.com/).

## Autor
Desenvolvido por Weverton Lima.

---

Esperamos que você aproveite esta aplicação e fique à vontade para contribuir!
