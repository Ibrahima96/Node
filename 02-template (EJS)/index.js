const express = require("express");
const { get } = require("http");
const app = express();
const port = 3000;


app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/home");
});
app.get("/hello/:name/:prenom", (req, res) => {
  const { name, prenom } = req.params;
  const data = {
    name: name,
    prenom: prenom,
  };
  res.render("pages/hello", data);
});

const aritcles = [
  {
    title: "apprendre nextJs",
    category: "Developpement web",
  },
  {
    title: "apprendre Blender",
    category: "Modelisation 3D/2D",
  },
  {
    title: "apprendre Canva",
    category: "Infographie",
  },
  {
    title: "apprendre Laravel",
    category: "Developpement web",
  },
];

app.get("/posts", (req, res) => {
  res.render("pages/posts-list", { posts: aritcles });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
