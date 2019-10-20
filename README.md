<h3>Projeto criado para praticar conceitos do Node.js</h3>
<hr>
<b>Como por exemplo:</b>
<ul>
  <li>Query params = ?exemplo=valor</li>
  <li>Route params = /exemplo/1</li>
  <li>Request body = {"exemplo": "valor"}</li>
</ul>
<b>Porta utilizada: 3000</b>
<p>
  <b>Rotas utilizadas:</b>
</p>
<ul>
  <li><b>POST:</b> http://localhost:3000/projects (criar novo projeto)</li>
  <li><b>POST:</b> http://localhost:3000/projects/3 (adicionar tarefa e um projeto já existente através do id)</li>
  <li><b>PUT:</b> http://localhost:3000/projects/3 (Alterar título do projeto)</li>
  <li><b>GET:</b> http://localhost:3000/projects (Listar todos os projetos)</li>
  <li><b>DELETE:</b> http://localhost:3000/projects/3 (Deletar um projeto através do id)</li>
</ul>

<p>A aplicação é simplesmente para armazenar projetos e suas tarefas utilizando Express. Foi utilizado a ferramenta Insomnia para realizar os testes da aplicação.</p>

<b>Json utilizado para os testes</b>
<ul>
<p>{</p>
<p> "id": "3",</p>
<p> "title": "Título",</p>
<p> "tasks": ["Nova tarefa"]</p>
<p>}</p>
</ul>
<hr>

