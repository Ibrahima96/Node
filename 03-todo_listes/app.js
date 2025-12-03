const express = require("express");
const app = express();
const port = 3000;

const tasks = [
  {
    title: "Apprendre la programation",
    done: false,
  },
  {
    title: "Apprendre a assimuler !",
    done: true,
  },
];

app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("todolist", { tasks });
});

//cree une tache
app.post("/task", (req, res) => {
  console.log(req.body);
  if (req.body.task) {
    tasks.push({
      title: req.body.task, // ce task que la vient du name="task"
      done: false,
    });
  }
  res.redirect("/");
});

//terminer une tache
app.get("/task/:id/done", (req, res) => {
  if (tasks[req.params.id]) {
    tasks[req.params.id].done = true;
  }
  res.redirect("/");
});

//supprimer
app.get("/task/:id/delete", (req, res) => {
  if (tasks[req.params.id]) {
    tasks.splice(req.params.id, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`le serveur est active sur le port: 👉 http://localhost:${port}`);
});
