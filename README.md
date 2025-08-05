Gestão de Produtos - CRUD Simples
Projeto full-stack de um sistema para gerenciar produtos (Criar, Ler, Atualizar e Deletar). O backend foi construído com Node.js + Express e se conecta a um banco de dados MySQL. O frontend é uma página simples em HTML, CSS e JavaScript.

Tecnologias
Node.js

Express.js

MySQL2

HTML5 / CSS3

JavaScript (Fetch API)

Como Executar
1. Pré-requisitos
Node.js e NPM instalados.

MySQL instalado e rodando.

2. Banco de Dados
a. Crie um banco de dados em seu MySQL com o nome loja.

b. Dentro do banco loja, crie a tabela produtos com o seguinte comando:

SQL

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  estoque INT NOT NULL
);
3. Backend
a. Clone o repositório e na pasta do projeto instale as dependências:

Bash

npm install
b. Importante: Abra o arquivo src/config/db.js e altere a senha (password) para a senha do seu banco de dados MySQL.

c. Inicie o servidor:

Bash

npm run dev
O servidor estará rodando em http://localhost:3006.

4. Frontend
a. Com o servidor backend rodando, abra o arquivo index.html em seu navegador.

Endpoints da API
GET /produtos - Lista todos os produtos.

GET /produtos/:id - Busca um produto por ID.

POST /produtos - Cria um novo produto.

PUT /produtos/:id - Atualiza um produto.

DELETE /produtos/:id - Deleta um produto.
