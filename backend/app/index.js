const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();
app.use(cors());
const port = 3010;

app.use(router);

app.listen(port, () => console.log(`Magic happens on port ${port}`));

/*

const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Bonjour d'Express !");
});

const port = process.env.PORT || 3000; // Utiliser la variable d'environnement ou le port 3000 par défaut
app.listen(port, () => {
	console.log(`Serveur à l'écoute sur le port ${port}`);
});*/
