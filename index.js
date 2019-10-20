const express = require('express');

const server = express();

server.use(express.json());

server.use( (res,req,next) => {
  console.count("Total de requisições");
  return next();
});



const projects = [];

function checkIdExist (req, res, next) {
  const {id} = req.params;

  const project = projects.find(value => {
    const {id: index} = value;
    return index == id;
  });

  if(!project){
    return res.status(400).json({error: "Id not exists!"});
  }

  return next();

}




server.post('/projects' , (req, res) => {

const {id, title ,tasks} = req.body;

const project =
  {
    id,
    title,
    tasks,
  }
projects.push(project);
return res.json(projects);
});

server.get('/projects', (req , res) => {
  return res.json(projects);
});

server.put('/projects/:id', checkIdExist ,  (req, res) => {
const {id} = req.params;
const {title} = req.body;
let project = projects.find((value) => {
  let {id: index} = value;
  return index == id;
});
let newProject = {...project, title: title};
projects[projects.indexOf(project)] = newProject;
return res.json(projects);
});

server.delete('/projects/:id', checkIdExist , (req, res) => {
  const {id} = req.params;
  let project = projects.find((value) => {
    let {id: index} = value;
    return index == id;
  });

  if(project){
    projects.splice(project,1);
  }
  return res.json(projects);


});

server.post('/projects/:id/tasks', checkIdExist , (req, res) => {
  const {id} = req.params;
  const {tasks} = req.body;

  let project = projects.find(value => {
    const {id: index} = value;
    return id == index;
  });
  if(project){
   const project2 = {...project,...tasks};
   project2.tasks.push(tasks);
  }
  return res.json(projects);
});

server.listen(3000);
