# Boas-vindas ao repositório do projeto Shop Car!

## Sobre
Shop-Car é um projeto que simula uma API de gerenciamento de uma concessionária de veículos. desenvolvido em TypeScript, utilizando o paradigma de programação orientada a objeto, e a arquitetura MSC, MongoDB como banco de dados não relacional, e o Mongoose  para mapeamento dos dados. Os tests foram desenvolvidos unitariamente.

## Stacks e habilidades utilizadas
- API Rest
- TypeScript
- Express
- POO (Programação Orientada a Objeto)
- MongoDB
- Mongoose
- Tests Unitários
- Thunder Client
- Docker
- Arquitetura MSC

## Como testar localmente:
1. Clone o repositório `git@github.com:lcoelhox/Shop-Car.git`
2. Certifique-se que o node está na versão 16 ou superior, com comando: `node -v`
3. Se não estiver na versão 16 basta usar o comando: `nvm use 16`
4. Em seguida o comando: `npm install`
5. Por ultimo: `npm run dev`

## Como testar com Docker:
1. Clone o repositório `git@github.com:lcoelhox/Shop-Car.git`
2. Certifique-se que o node está na versão 16 ou superior, com comando: `node -v`
3. Se não estiver na versão 16 basta usar o comando: `nvm use 16`
4. Rode os serviços node e db com o comando: `docker-compose up -d`.

- Lembre-se de parar o mongo se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `car_shop`;
- A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

5. Use o comando `docker exec -it car_shop bash`.
6. Instale as dependências com `npm install`
7. Por ultimo: `npm run dev`

## Fontes de consultas:
* [TypeScript](https://www.typescriptlang.org/docs/)
* [MongoDB](https://www.mongodb.com/docs/)
* [Mongoose](https://mongoosejs.com/docs/guide.html)

## Direitos Autorais:
Este projeto foi desenvolvido para fins de aprendizado por Lucas Coelho. É permitido baixar ou clonar o repositório para fins de estudo, porém não é permitida a publicação de cópias totais ou parciais do mesmo. Esta isenção de responsabilidade não abrange bibliotecas e dependências, que estão sujeitas às suas respectivas licenças.
