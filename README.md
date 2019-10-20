Projeto criado para praticar conceitos do Node.js
como por exemplo:
Query params = ?exemplo=valor
Route params = /exemplo/1
Request body = {"exemplo": "valor"}

A aplicação é simplesmente para armazenar projetos e suas tarefas utilizando Express.

Porta utilizada: 3000
Rotas utilizadas:

Post: http://localhost:7070/projects (criar novo projeto)
Post: http://localhost:7070/projects/3 (adicionar tarefa e um projeto já existente através do id)
Put: http://localhost:7070/projects/3 (Alterar título do projeto)
Get: http://localhost:7070/projects (Listar todos os projetos)
Delete: http://localhost:7070/projects/3 (Deletar um projeto através do id)

Foi utilizado a ferramenta Insomnia para realizar os testes da aplicação.



