const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// __dirname correct
const __root = path.resolve();
// used -> <img src="/image.png" alt="mon image">
app.use(express.static("public"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const logRequest = (req, res, next) => {
  console.log(
    `> ${new Date().toLocaleTimeString()} -[ ${req.method}] ${req.originalUrl}`
  );
  req.user = { id: 5 };
  next()
};
app.get("/", logRequest,(req, res) => {
  res.send("Hello World!");
});

// parametre -> http://localhost:3000/salut/prenom/John/nom/Doe
app.get("/salut/prenom/:prenom/nom/:nom", (req, res) => {
  const { prenom, nom } = req.params;
  res.send(`<h1>Salut ${prenom}, ton nom c'est ${nom}, n'est-ce pas ?</h1>`);
});

// passer des valeur a l'url
// -> http://localhost:3000/person?prenom=John&nom=Doe
app.get("/person", (req, res) => {
  const { prenom, nom } = req.query;
  res.send(`<h1>Salut ${prenom}, ton nom c’est ${nom}</h1>`);
});

// afficher un fichier html
app.get("/html", (req, res) => {
  res.sendFile(__root + "/view/index.html");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send("formulaire envoyer");
});

//404
app.use((req, res) => {
  res.status("404").send("404 NOT FOUNTD");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
